(()=>{
'use strict';
const HOUR=3600000;
const FUTURE_TOLERANCE=10*60000;
const LINK_DRIFT=HOUR;
const LINK_MAX_AGE=48*HOUR;
const PROMOTION_CONFIDENCE_MIN=80;
const SAFE_PROTOCOLS=new Set(['http:','https:']);
const STRONG_SURFACES=new Set(['canonical-company-detail','full-jobboard-detail','government-detail']);
const NEGATIVE_LINKS=new Set(['broken','inactive','expired','404','410','closed','not-accepting']);
function parseTs(x){const t=Date.parse(x||'');return Number.isFinite(t)?t:0}
function safeUrl(x){try{const u=new URL(String(x||''));return SAFE_PROTOCOLS.has(u.protocol)&&!!u.hostname&&u.hostname.includes('.')&&!u.username&&!u.password}catch{return false}}
function normalizeText(x){return String(x||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim()}
function listingFingerprint(j){try{const u=new URL(String(j?.url||''));['utm_source','utm_medium','utm_campaign','search_id','ref','trk'].forEach(k=>u.searchParams.delete(k));u.hash='';return u.origin+u.pathname+(u.searchParams.toString()?'?'+u.searchParams.toString():'')}catch{return normalizeText(j?.company)+'|'+normalizeText(j?.title)}}
function hardGateReasons(j){const out=[];const english=String(j?.english||'').toLowerCase(),burden=String(j?.physicalBurden||'').toLowerCase(),text=(String(j?.engLabel||'')+' '+String(j?.desc||'')).toLowerCase();if(english==='high'||/\b(b2|c1|c2|fluent|advanced english)\b/.test(text))out.push('language-hard-gate');if(/high|heavy|very-high/.test(burden))out.push('physical-hard-gate');return [...new Set(out)]}
function evidenceScore(j,now=Date.now()){
  let score=100;const v=parseTs(j?.verifiedAt),l=parseTs(j?.linkCheckedAt),p=parseTs(j?.publishedAt),surface=String(j?.evidenceSurface||''),link=String(j?.linkStatus||'').toLowerCase();
  if(!v)score-=45;if(!l)score-=25;if(!safeUrl(j?.url))score-=30;if(!STRONG_SURFACES.has(surface))score-=20;if(NEGATIVE_LINKS.has(link))score-=100;if(v&&now-v>24*HOUR)score-=10;if(v&&now-v>48*HOUR)score-=35;if(l&&now-l>48*HOUR)score-=35;if(p&&v&&p>v+FUTURE_TOLERANCE)score-=25;if(v&&l&&Math.abs(v-l)>LINK_DRIFT)score-=15;score-=hardGateReasons(j).length*50;return Math.max(0,Math.min(100,score));
}
function negativeCacheRecord(j,now=Date.now(),ttlHours=24){const link=String(j?.linkStatus||'').toLowerCase();const negative=NEGATIVE_LINKS.has(link)||j?.status==='inactive'||j?.status==='expired';return negative?{fingerprint:listingFingerprint(j),reason:link||j.status||'negative',observedAt:new Date(now).toISOString(),expiresAt:new Date(now+ttlHours*HOUR).toISOString()}:null}
function evidenceQuality(j,now=Date.now()){
  const v=parseTs(j?.verifiedAt),l=parseTs(j?.linkCheckedAt),p=parseTs(j?.publishedAt),e=parseTs(j?.expiresAt);
  const reasons=[];const promoted=j?.promotionEligible===true;
  if(!v)reasons.push('missing-verification');if(promoted&&!l)reasons.push('missing-link-check');if(promoted&&!safeUrl(j?.url))reasons.push('unsafe-or-invalid-url');if(promoted&&!STRONG_SURFACES.has(String(j?.evidenceSurface||'')))reasons.push('weak-evidence-surface');if(promoted&&Number(j?.scoreConfidence||0)<PROMOTION_CONFIDENCE_MIN)reasons.push('low-confidence');if(promoted&&NEGATIVE_LINKS.has(String(j?.linkStatus||'').toLowerCase()))reasons.push('negative-link-status');if(promoted&&e&&now>e)reasons.push('expired-at');if(promoted&&l&&now-l>LINK_MAX_AGE)reasons.push('stale-link-check');if(promoted)reasons.push(...hardGateReasons(j));if(v&&l&&Math.abs(v-l)>LINK_DRIFT)reasons.push('verification-link-drift');if(p&&v&&p>v+FUTURE_TOLERANCE)reasons.push('publication-after-verification');if(v&&v>now+FUTURE_TOLERANCE)reasons.push('future-verification');if(l&&l>now+FUTURE_TOLERANCE)reasons.push('future-link-check');if(p&&p>now+FUTURE_TOLERANCE)reasons.push('future-publication');
  const age=v?Math.max(0,now-v):Infinity,linkAge=l?Math.max(0,now-l):Infinity;
  return {ok:reasons.length===0,reasons:[...new Set(reasons)],verificationAgeHours:Number.isFinite(age)?Math.round(age/HOUR*10)/10:null,linkAgeHours:Number.isFinite(linkAge)?Math.round(linkAge/HOUR*10)/10:null,urlSafe:safeUrl(j?.url),evidenceSurfaceStrong:STRONG_SURFACES.has(String(j?.evidenceSurface||'')),promotionConfidencePass:!promoted||Number(j?.scoreConfidence||0)>=PROMOTION_CONFIDENCE_MIN,linkStatusPass:!promoted||!NEGATIVE_LINKS.has(String(j?.linkStatus||'').toLowerCase()),expiryPass:!promoted||!e||now<=e,hardGates:hardGateReasons(j),evidenceScore:evidenceScore(j,now),fingerprint:listingFingerprint(j)};
}
function ageFrom(data,keys,now=Date.now()){const values=keys.map(k=>parseTs(data?.[k])).filter(Boolean);const t=values.length?Math.max(...values):0;return t?Math.round(Math.max(0,now-t)/HOUR*10)/10:null}
function contentAge(data,now=Date.now()){return ageFrom(data,['contentUpdatedAt','updatedAt'],now)}
function verificationAge(data,now=Date.now()){return ageFrom(data,['verificationUpdatedAt'],now)}
function sourceVerificationAge(data,now=Date.now()){return ageFrom(data,['sourceVerificationAt'],now)}
function freshnessSummary(data,now=Date.now()){return {contentAgeHours:contentAge(data,now),verificationAgeHours:verificationAge(data,now),sourceVerificationAgeHours:sourceVerificationAge(data,now)}}
function auditJobs(jobs,now=Date.now()){const out={total:0,pass:0,fail:0,reasons:{},evidenceScore:{avg:0,min:null},negativeCache:[]};let scoreSum=0;(Array.isArray(jobs)?jobs:[]).forEach(j=>{out.total++;const q=evidenceQuality(j,now);scoreSum+=q.evidenceScore;out.evidenceScore.min=out.evidenceScore.min===null?q.evidenceScore:Math.min(out.evidenceScore.min,q.evidenceScore);if(q.ok)out.pass++;else{out.fail++;q.reasons.forEach(r=>out.reasons[r]=(out.reasons[r]||0)+1)}const n=negativeCacheRecord(j,now);if(n)out.negativeCache.push(n)});out.evidenceScore.avg=out.total?Math.round(scoreSum/out.total*10)/10:0;return out}
window.JobRadarFeedQuality={evidenceQuality,evidenceScore,listingFingerprint,negativeCacheRecord,contentAge,verificationAge,sourceVerificationAge,freshnessSummary,safeUrl,hardGateReasons,auditJobs};
})();
