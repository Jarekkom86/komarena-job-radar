(()=>{
'use strict';
const HOUR=3600000;
function parseTs(x){const t=Date.parse(x||'');return Number.isFinite(t)?t:0}
function evidenceQuality(j,now=Date.now()){
  const v=parseTs(j?.verifiedAt),l=parseTs(j?.linkCheckedAt),p=parseTs(j?.publishedAt);
  const reasons=[];
  if(!v)reasons.push('missing-verification');
  if(j?.promotionEligible===true&&!l)reasons.push('missing-link-check');
  if(v&&l&&Math.abs(v-l)>HOUR)reasons.push('verification-link-drift');
  if(v&&v>now+10*60000)reasons.push('future-verification');
  if(p&&p>now+10*60000)reasons.push('future-publication');
  const age=v?Math.max(0,now-v):Infinity;
  return {ok:reasons.length===0,reasons,verificationAgeHours:Number.isFinite(age)?Math.round(age/HOUR*10)/10:null};
}
function contentAge(data,now=Date.now()){
  const t=parseTs(data?.contentUpdatedAt||data?.updatedAt);return t?Math.round(Math.max(0,now-t)/HOUR*10)/10:null;
}
function verificationAge(data,now=Date.now()){
  const t=parseTs(data?.verificationUpdatedAt);return t?Math.round(Math.max(0,now-t)/HOUR*10)/10:null;
}
window.JobRadarFeedQuality={evidenceQuality,contentAge,verificationAge};
})();
