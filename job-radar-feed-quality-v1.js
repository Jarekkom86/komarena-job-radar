(()=>{
'use strict';
const HOUR=3600000;
const FUTURE_TOLERANCE=10*60000;
const LINK_DRIFT=HOUR;
const LINK_MAX_AGE=48*HOUR;
const PROMOTION_CONFIDENCE_MIN=80;
const SAFE_PROTOCOLS=new Set(['http:','https:']);
const STRONG_SURFACES=new Set(['canonical-company-detail','full-jobboard-detail','government-detail']);
const NEGATIVE_LINKS=new Set(['broken','inactive','expired','404','410']);
function parseTs(x){const t=Date.parse(x||'');return Number.isFinite(t)?t:0}
function safeUrl(x){try{const u=new URL(String(x||''));return SAFE_PROTOCOLS.has(u.protocol)&&!!u.hostname&&u.hostname.includes('.')&&!u.username&&!u.password}catch{return false}}
function hardGateReasons(j){const out=[];const english=String(j?.english||'').toLowerCase(),burden=String(j?.physicalBurden||'').toLowerCase(),text=(String(j?.engLabel||'')+' '+String(j?.desc||'')).toLowerCase();if(english==='high'||/\b(b2|c1|c2|fluent|advanced english)\b/.test(text))out.push('language-hard-gate');if(/high|heavy|very-high/.test(burden))out.push('physical-hard-gate');return [...new Set(out)]}
function evidenceQuality(j,now=Date.now()){
  const v=parseTs(j?.verifiedAt),l=parseTs(j?.linkCheckedAt),p=parseTs(j?.publishedAt),e=parseTs(j?.expiresAt);
  const reasons=[];
  const promoted=j?.promotionEligible===true;
  if(!v)reasons.push('missing-verification');
  if(promoted&&!l)reasons.push('missing-link-check');
  if(promoted&&!safeUrl(j?.url))reasons.push('unsafe-or-invalid-url');
  if(promoted&&!STRONG_SURFACES.has(String(j?.evidenceSurface||'')))reasons.push('weak-evidence-surface');
  if(promoted&&Number(j?.scoreConfidence||0)<PROMOTION_CONFIDENCE_MIN)reasons.push('low-confidence');
  if(promoted&&NEGATIVE_LINKS.has(String(j?.linkStatus||'').toLowerCase()))reasons.push('negative-link-status');
  if(promoted&&e&&now>e)reasons.push('expired-at');
  if(promoted&&l&&now-l>LINK_MAX_AGE)reasons.push('stale-link-check');
  if(promoted)reasons.push(...hardGateReasons(j));
  if(v&&l&&Math.abs(v-l)>LINK_DRIFT)reasons.push('verification-link-drift');
  if(v&&v>now+FUTURE_TOLERANCE)reasons.push('future-verification');
  if(l&&l>now+FUTURE_TOLERANCE)reasons.push('future-link-check');
  if(p&&p>now+FUTURE_TOLERANCE)reasons.push('future-publication');
  const age=v?Math.max(0,now-v):Infinity,linkAge=l?Math.max(0,now-l):Infinity;
  return {ok:reasons.length===0,reasons:[...new Set(reasons)],verificationAgeHours:Number.isFinite(age)?Math.round(age/HOUR*10)/10:null,linkAgeHours:Number.isFinite(linkAge)?Math.round(linkAge/HOUR*10)/10:null,urlSafe:safeUrl(j?.url),evidenceSurfaceStrong:STRONG_SURFACES.has(String(j?.evidenceSurface||'')),promotionConfidencePass:!promoted||Number(j?.scoreConfidence||0)>=PROMOTION_CONFIDENCE_MIN,linkStatusPass:!promoted||!NEGATIVE_LINKS.has(String(j?.linkStatus||'').toLowerCase()),expiryPass:!promoted||!e||now<=e,hardGates:hardGateReasons(j)};
}
function ageFrom(data,keys,now=Date.now()){
  const values=keys.map(k=>parseTs(data?.[k])).filter(Boolean);const t=values.length?Math.max(...values):0;return t?Math.round(Math.max(0,now-t)/HOUR*10)/10:null;
}
function contentAge(data,now=Date.now()){return ageFrom(data,['contentUpdatedAt','updatedAt'],now)}
function verificationAge(data,now=Date.now()){return ageFrom(data,['verificationUpdatedAt'],now)}
function sourceVerificationAge(data,now=Date.now()){return ageFrom(data,['sourceVerificationAt'],now)}
function freshnessSummary(data,now=Date.now()){
  return {contentAgeHours:contentAge(data,now),verificationAgeHours:verificationAge(data,now),sourceVerificationAgeHours:sourceVerificationAge(data,now)};
}
function auditJobs(jobs,now=Date.now()){const out={total:0,pass:0,fail:0,reasons:{}};(Array.isArray(jobs)?jobs:[]).forEach(j=>{out.total++;const q=evidenceQuality(j,now);if(q.ok)out.pass++;else{out.fail++;q.reasons.forEach(r=>out.reasons[r]=(out.reasons[r]||0)+1)}});return out}
window.JobRadarFeedQuality={evidenceQuality,contentAge,verificationAge,sourceVerificationAge,freshnessSummary,safeUrl,hardGateReasons,auditJobs};
})();
