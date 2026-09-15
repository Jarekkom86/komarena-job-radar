(()=>{
'use strict';
const HOUR=3600000;
const FUTURE_TOLERANCE=10*60000;
const LINK_DRIFT=HOUR;
const SAFE_PROTOCOLS=new Set(['http:','https:']);
const STRONG_SURFACES=new Set(['canonical-company-detail','full-jobboard-detail','government-detail']);
function parseTs(x){const t=Date.parse(x||'');return Number.isFinite(t)?t:0}
function safeUrl(x){try{const u=new URL(String(x||''));return SAFE_PROTOCOLS.has(u.protocol)&&!!u.hostname&&u.hostname.includes('.')}catch{return false}}
function evidenceQuality(j,now=Date.now()){
  const v=parseTs(j?.verifiedAt),l=parseTs(j?.linkCheckedAt),p=parseTs(j?.publishedAt);
  const reasons=[];
  if(!v)reasons.push('missing-verification');
  if(j?.promotionEligible===true&&!l)reasons.push('missing-link-check');
  if(j?.promotionEligible===true&&!safeUrl(j?.url))reasons.push('unsafe-or-invalid-url');
  if(j?.promotionEligible===true&&!STRONG_SURFACES.has(String(j?.evidenceSurface||'')))reasons.push('weak-evidence-surface');
  if(j?.promotionEligible===true&&String(j?.english||'').toLowerCase()==='high')reasons.push('language-hard-gate');
  if(j?.promotionEligible===true&&/high|heavy|very-high/i.test(String(j?.physicalBurden||'')))reasons.push('physical-hard-gate');
  if(v&&l&&Math.abs(v-l)>LINK_DRIFT)reasons.push('verification-link-drift');
  if(v&&v>now+FUTURE_TOLERANCE)reasons.push('future-verification');
  if(p&&p>now+FUTURE_TOLERANCE)reasons.push('future-publication');
  const age=v?Math.max(0,now-v):Infinity;
  return {ok:reasons.length===0,reasons,verificationAgeHours:Number.isFinite(age)?Math.round(age/HOUR*10)/10:null,urlSafe:safeUrl(j?.url),evidenceSurfaceStrong:STRONG_SURFACES.has(String(j?.evidenceSurface||''))};
}
function ageFrom(data,keys,now=Date.now()){
  const t=keys.map(k=>parseTs(data?.[k])).find(Boolean);return t?Math.round(Math.max(0,now-t)/HOUR*10)/10:null;
}
function contentAge(data,now=Date.now()){return ageFrom(data,['contentUpdatedAt','updatedAt'],now)}
function verificationAge(data,now=Date.now()){return ageFrom(data,['verificationUpdatedAt'],now)}
function sourceVerificationAge(data,now=Date.now()){return ageFrom(data,['sourceVerificationAt'],now)}
function freshnessSummary(data,now=Date.now()){
  return {contentAgeHours:contentAge(data,now),verificationAgeHours:verificationAge(data,now),sourceVerificationAgeHours:sourceVerificationAge(data,now)};
}
window.JobRadarFeedQuality={evidenceQuality,contentAge,verificationAge,sourceVerificationAge,freshnessSummary,safeUrl};
})();
