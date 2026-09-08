(()=>{
'use strict';
const BASE='https://raw.githubusercontent.com/Jarekkom86/komarena-job-radar/main/';
const CACHE='komarenaJobRadarFeed:v5:';
const FRESH_MS=48*60*60*1000;
const FUTURE_TOLERANCE_MS=10*60*1000;
const nativeFetch=window.fetch.bind(window);
const canon=u=>{try{const x=new URL(u,location.href);['utm_source','utm_medium','utm_campaign','search_id','ref','trk'].forEach(k=>x.searchParams.delete(k));x.hash='';return x.origin+x.pathname+(x.searchParams.toString()?'?'+x.searchParams.toString():'')}catch{return String(u||'').split('#')[0].split('?')[0]}};
const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
const identity=j=>norm(j.company)+'|'+norm(j.title);
const family=j=>{const s=(String(j.source||'')+' '+String(j.url||'')).toLowerCase();if(j.sourceType==='company')return'company';if(s.includes('linkedin'))return'linkedin';if(s.includes('profesia'))return'profesia';if(j.sourceType==='government')return'government';if(j.sourceType==='community'||j.sourceType==='facebook')return'community';if(j.sourceType==='freelance')return'freelance';return'other'};
const pref=j=>({company:600,government:550,linkedin:500,profesia:400,other:300,freelance:250,community:200}[family(j)]||100)+(Number(j.sourceTrust)||0);
const ts=j=>new Date(j?.verifiedAt||j?.publishedAt||0).getTime()||0;
const better=(next,old)=>!old||pref(next)>pref(old)||(pref(next)===pref(old)&&ts(next)>ts(old));
function isFresh(j){
  if(!j||j.status==='inactive'||j.status==='expired')return false;
  const t=Date.parse(j.verifiedAt||'');
  if(!Number.isFinite(t))return false;
  const age=Date.now()-t;
  return age>=-FUTURE_TOLERANCE_MS&&age<=FRESH_MS;
}
function freshOnly(list){return (list||[]).filter(isFresh)}
function mergeJobs(...lists){const byUrl=new Map();lists.flat().filter(Boolean).forEach((j,i)=>{const k=canon(j.url)||j.id||'u'+i;const old=byUrl.get(k);if(better(j,old))byUrl.set(k,j)});const byIdentity=new Map();[...byUrl.values()].forEach((j,i)=>{const k=identity(j)||canon(j.url)||j.id||'i'+i;const old=byIdentity.get(k);if(better(j,old))byIdentity.set(k,j)});return [...byIdentity.values()]}
function writeCache(name,data){try{localStorage.setItem(CACHE+name,JSON.stringify({savedAt:new Date().toISOString(),data}))}catch{}}
function readCache(name){try{return JSON.parse(localStorage.getItem(CACHE+name)||'null')}catch{return null}}
async function getJson(name,required=false){
  const url=BASE+name+'?t='+Date.now();
  try{
    const r=await nativeFetch(url,{cache:'no-store',headers:{'Accept':'application/json'}});
    if(!r.ok)throw new Error(name+' '+r.status);
    const data=await r.json();writeCache(name,data);return {data,mode:'live'};
  }catch(err){
    const cached=readCache(name);
    if(cached&&cached.data)return {data:cached.data,mode:'cache',savedAt:cached.savedAt,error:String(err&&err.message||err)};
    if(required)throw err;
    return {data:{jobs:[],updatedAt:null},mode:'empty',error:String(err&&err.message||err)};
  }
}
async function baseline(){
  try{
    const r=await nativeFetch(BASE+'baseline-jobs.json?t='+Date.now(),{cache:'no-store',headers:{'Accept':'application/json'}});
    if(!r.ok)throw new Error('baseline '+r.status);
    const data=await r.json();writeCache('baseline-jobs.json',data);return {data,mode:'baseline'};
  }catch(err){
    const cached=readCache('baseline-jobs.json');
    if(cached&&cached.data)return {data:cached.data,mode:'baseline-cache',savedAt:cached.savedAt,error:String(err&&err.message||err)};
    throw err;
  }
}
function health(main,extra,fresh,usedBaseline,jobs,rawCount){
  window.JobRadarFeedHealth={
    checkedAt:new Date().toISOString(),
    freshnessWindowHours:48,
    mainMode:main.mode,
    extraMode:extra.mode,
    freshMode:fresh.mode,
    fallback:usedBaseline?'baseline':([main,extra,fresh].some(x=>x.mode==='cache')?'cache':'none'),
    jobs:jobs.length,
    rawJobs:rawCount,
    staleQuarantined:Math.max(0,rawCount-jobs.length),
    mainSavedAt:main.savedAt||null,
    extraSavedAt:extra.savedAt||null,
    freshSavedAt:fresh.savedAt||null,
    freshJobs:(fresh.data.jobs||[]).length,
    freshUpdatedAt:fresh.data.updatedAt||null
  };
}
window.fetch=async(input,init)=>{
  const url=typeof input==='string'?input:(input&&input.url)||'';
  if(!url.includes('jobs-data.json'))return nativeFetch(input,init);
  try{
    let main,extra,fresh,usedBaseline=false;
    try{main=await getJson('jobs-data.json',true)}catch{main=await baseline();usedBaseline=true}
    [extra,fresh]=await Promise.all([
      getJson('jobs-data-nonprof.json',false),
      getJson('jobs-fresh-delta.json',false)
    ]);
    const rawMain=main.data.jobs||[],rawExtra=extra.data.jobs||[],rawFresh=fresh.data.jobs||[];
    const rawCount=mergeJobs(rawMain,rawExtra,rawFresh).length;
    const jobs=mergeJobs(freshOnly(rawMain),freshOnly(rawExtra),freshOnly(rawFresh));
    const updatedAt=[fresh.data.updatedAt,main.data.updatedAt,extra.data.updatedAt].filter(Boolean).sort().pop()||null;
    health(main,extra,fresh,usedBaseline,jobs,rawCount);
    const payload={...main.data,updatedAt,jobs,verificationUpdatedAt:fresh.data.updatedAt||null,freshnessWindowHours:48,feedParts:{mainFresh:freshOnly(rawMain).length,nonProfFresh:freshOnly(rawExtra).length,freshDelta:freshOnly(rawFresh).length,merged:jobs.length,staleQuarantined:Math.max(0,rawCount-jobs.length)},feedHealth:window.JobRadarFeedHealth};
    return new Response(JSON.stringify(payload),{status:200,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-KomArena-Feed-Mode':window.JobRadarFeedHealth.fallback,'X-KomArena-Freshness-Hours':'48'}});
  }catch(e){
    window.JobRadarFeedHealth={checkedAt:new Date().toISOString(),fallback:'failed',error:String(e&&e.message||e),jobs:0,freshnessWindowHours:48};
    return new Response(JSON.stringify({schemaVersion:1,updatedAt:null,jobs:[],feedHealth:window.JobRadarFeedHealth}),{status:200,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}});
  }
};
})();
