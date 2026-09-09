(()=>{
'use strict';
const BASE='https://raw.githubusercontent.com/Jarekkom86/komarena-job-radar/main/';
const CACHE='komarenaJobRadarFeed:v6:';
const FRESH_MS=48*60*60*1000;
const FUTURE_TOLERANCE_MS=10*60*1000;
const nativeFetch=window.fetch.bind(window);
const canon=u=>{try{const x=new URL(u,location.href);['utm_source','utm_medium','utm_campaign','search_id','ref','trk'].forEach(k=>x.searchParams.delete(k));x.hash='';return x.origin+x.pathname+(x.searchParams.toString()?'?'+x.searchParams.toString():'')}catch{return String(u||'').split('#')[0].split('?')[0]}};
const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
const identity=j=>norm(j.company)+'|'+norm(j.title);
const family=j=>{const s=(String(j.source||'')+' '+String(j.url||'')).toLowerCase();if(j.sourceType==='company')return'company';if(s.includes('linkedin'))return'linkedin';if(s.includes('profesia'))return'profesia';if(j.sourceType==='government')return'government';if(j.sourceType==='community'||j.sourceType==='facebook')return'community';if(j.sourceType==='freelance')return'freelance';return'other'};
const pref=j=>({company:600,government:550,linkedin:500,profesia:400,other:300,freelance:250,community:200}[family(j)]||100)+(Number(j.sourceTrust)||0);
const ts=j=>Date.parse(j?.verifiedAt||'')||0;
const publishedTs=j=>Date.parse(j?.publishedAt||'')||0;
const better=(next,old)=>{if(!old)return true;const nt=ts(next),ot=ts(old);if(nt!==ot)return nt>ot;return pref(next)>pref(old)};
function eligibilityReason(j){
  if(!j)return'empty';
  if(j.status==='inactive'||j.status==='expired')return'status';
  if(j.promotionEligible===false)return'ineligible';
  const link=String(j.linkStatus||'').toLowerCase();
  if(['broken','inactive','expired','404','410'].includes(link))return'link';
  const t=ts(j);
  if(!t)return'unverified';
  const age=Date.now()-t;
  if(age<-FUTURE_TOLERANCE_MS)return'future-verification';
  if(age>FRESH_MS)return'stale';
  return null;
}
const eligible=j=>!eligibilityReason(j);
function mergeJobs(...lists){const byUrl=new Map();lists.flat().filter(Boolean).forEach((j,i)=>{const k=canon(j.url)||j.id||'u'+i;const old=byUrl.get(k);if(better(j,old))byUrl.set(k,j)});const byIdentity=new Map();[...byUrl.values()].forEach((j,i)=>{const k=identity(j)||canon(j.url)||j.id||'i'+i;const old=byIdentity.get(k);if(better(j,old))byIdentity.set(k,j)});return [...byIdentity.values()]}
function writeCache(name,data){try{localStorage.setItem(CACHE+name,JSON.stringify({savedAt:new Date().toISOString(),data}))}catch{}}
function readCache(name){try{return JSON.parse(localStorage.getItem(CACHE+name)||'null')}catch{return null}}
async function getJson(name,required=false){
  const url=BASE+name+'?t='+Date.now();
  try{const r=await nativeFetch(url,{cache:'no-store',headers:{Accept:'application/json'}});if(!r.ok)throw new Error(name+' '+r.status);const data=await r.json();writeCache(name,data);return {data,mode:'live'}}
  catch(err){const cached=readCache(name);if(cached&&cached.data)return {data:cached.data,mode:'cache',savedAt:cached.savedAt,error:String(err&&err.message||err)};if(required)throw err;return {data:{jobs:[],updatedAt:null},mode:'empty',error:String(err&&err.message||err)}}
}
async function baseline(){
  try{const r=await nativeFetch(BASE+'baseline-jobs.json?t='+Date.now(),{cache:'no-store',headers:{Accept:'application/json'}});if(!r.ok)throw new Error('baseline '+r.status);const data=await r.json();writeCache('baseline-jobs.json',data);return {data,mode:'baseline'}}
  catch(err){const cached=readCache('baseline-jobs.json');if(cached&&cached.data)return {data:cached.data,mode:'baseline-cache',savedAt:cached.savedAt,error:String(err&&err.message||err)};throw err}
}
function quarantineStats(raw){const out={stale:0,ineligible:0,link:0,unverified:0,status:0,'future-verification':0,other:0};raw.forEach(j=>{const r=eligibilityReason(j);if(r)out[r]!==undefined?out[r]++:out.other++});return out}
function latestVerified(jobs){return jobs.reduce((m,j)=>Math.max(m,ts(j)),0)}
function latestPublished(jobs){return jobs.reduce((m,j)=>Math.max(m,publishedTs(j)),0)}
function health(main,extra,fresh,usedBaseline,jobs,raw){
  const q=quarantineStats(raw),lv=latestVerified(jobs),lp=latestPublished(jobs);
  window.JobRadarFeedHealth={checkedAt:new Date().toISOString(),freshnessWindowHours:48,mainMode:main.mode,extraMode:extra.mode,freshMode:fresh.mode,fallback:usedBaseline?'baseline':([main,extra,fresh].some(x=>x.mode==='cache')?'cache':'none'),jobs:jobs.length,rawJobs:raw.length,staleQuarantined:q.stale,quarantined:q,latestJobVerifiedAt:lv?new Date(lv).toISOString():null,latestJobPublishedAt:lp?new Date(lp).toISOString():null,mainSavedAt:main.savedAt||null,extraSavedAt:extra.savedAt||null,freshSavedAt:fresh.savedAt||null,freshJobs:(fresh.data.jobs||[]).length,freshContentUpdatedAt:fresh.data.updatedAt||null,freshSourceVerificationAt:fresh.data.sourceVerificationAt||null};
}
window.fetch=async(input,init)=>{
  const url=typeof input==='string'?input:(input&&input.url)||'';
  if(!url.includes('jobs-data.json'))return nativeFetch(input,init);
  try{
    let main,extra,fresh,usedBaseline=false;
    try{main=await getJson('jobs-data.json',true)}catch{main=await baseline();usedBaseline=true}
    [extra,fresh]=await Promise.all([getJson('jobs-data-nonprof.json',false),getJson('jobs-fresh-delta.json',false)]);
    const raw=mergeJobs(main.data.jobs||[],extra.data.jobs||[],fresh.data.jobs||[]);
    const jobs=raw.filter(eligible);
    health(main,extra,fresh,usedBaseline,jobs,raw);
    const contentUpdatedAt=[fresh.data.updatedAt,main.data.updatedAt,extra.data.updatedAt].filter(Boolean).sort().pop()||null;
    const verificationUpdatedAt=window.JobRadarFeedHealth.latestJobVerifiedAt;
    const payload={...main.data,updatedAt:contentUpdatedAt,contentUpdatedAt,verificationUpdatedAt,sourceVerificationAt:fresh.data.sourceVerificationAt||null,jobs,freshnessWindowHours:48,feedParts:{mainEligible:(main.data.jobs||[]).filter(eligible).length,nonProfEligible:(extra.data.jobs||[]).filter(eligible).length,freshDeltaEligible:(fresh.data.jobs||[]).filter(eligible).length,merged:jobs.length,raw:raw.length,quarantined:Math.max(0,raw.length-jobs.length)},feedHealth:window.JobRadarFeedHealth};
    return new Response(JSON.stringify(payload),{status:200,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-KomArena-Feed-Mode':window.JobRadarFeedHealth.fallback,'X-KomArena-Freshness-Hours':'48'}});
  }catch(e){window.JobRadarFeedHealth={checkedAt:new Date().toISOString(),fallback:'failed',error:String(e&&e.message||e),jobs:0,freshnessWindowHours:48};return new Response(JSON.stringify({schemaVersion:1,updatedAt:null,contentUpdatedAt:null,verificationUpdatedAt:null,jobs:[],feedHealth:window.JobRadarFeedHealth}),{status:200,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}})}
};
})();
