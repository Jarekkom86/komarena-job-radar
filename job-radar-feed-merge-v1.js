(()=>{
'use strict';
const BASE='https://raw.githack.com/Jarekkom86/komarena-job-radar/main/';
const CACHE='komarenaJobRadarFeed:v2:';
const nativeFetch=window.fetch.bind(window);
const canon=u=>{try{const x=new URL(u,location.href);['utm_source','utm_medium','utm_campaign','search_id','ref','trk'].forEach(k=>x.searchParams.delete(k));x.hash='';return x.origin+x.pathname+(x.searchParams.toString()?'?'+x.searchParams.toString():'')}catch{return String(u||'').split('#')[0].split('?')[0]}};
const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
const identity=j=>norm(j.company)+'|'+norm(j.title);
const family=j=>{const s=(String(j.source||'')+' '+String(j.url||'')).toLowerCase();if(j.sourceType==='company')return'company';if(s.includes('linkedin'))return'linkedin';if(s.includes('profesia'))return'profesia';if(j.sourceType==='government')return'government';if(j.sourceType==='community'||j.sourceType==='facebook')return'community';if(j.sourceType==='freelance')return'freelance';return'other'};
const pref=j=>({company:600,government:550,linkedin:500,profesia:400,other:300,freelance:250,community:200}[family(j)]||100)+(Number(j.sourceTrust)||0);
function mergeJobs(a,b){const byUrl=new Map();[...(a||[]),...(b||[])].forEach(j=>{const k=canon(j.url)||j.id;if(!k)return;const old=byUrl.get(k);if(!old||pref(j)>pref(old))byUrl.set(k,j)});const byIdentity=new Map();[...byUrl.values()].forEach(j=>{const k=identity(j)||canon(j.url)||j.id;const old=byIdentity.get(k);if(!old||pref(j)>pref(old))byIdentity.set(k,j)});return [...byIdentity.values()]}
function writeCache(name,data){try{localStorage.setItem(CACHE+name,JSON.stringify({savedAt:new Date().toISOString(),data}))}catch{}}
function readCache(name){try{return JSON.parse(localStorage.getItem(CACHE+name)||'null')}catch{return null}}
async function getJson(name,required=false){
  const url=BASE+name+'?t='+Date.now();
  try{
    const r=await nativeFetch(url,{cache:'no-store'});
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
    const r=await nativeFetch(BASE+'baseline-jobs.json?t='+Date.now(),{cache:'no-store'});
    if(!r.ok)throw new Error('baseline '+r.status);
    const data=await r.json();writeCache('baseline-jobs.json',data);return {data,mode:'baseline'};
  }catch(err){
    const cached=readCache('baseline-jobs.json');
    if(cached&&cached.data)return {data:cached.data,mode:'baseline-cache',savedAt:cached.savedAt,error:String(err&&err.message||err)};
    throw err;
  }
}
function health(main,extra,usedBaseline,jobs){
  window.JobRadarFeedHealth={
    checkedAt:new Date().toISOString(),
    mainMode:main.mode,
    extraMode:extra.mode,
    fallback:usedBaseline?'baseline':(main.mode==='cache'||extra.mode==='cache'?'cache':'none'),
    jobs:jobs.length,
    mainSavedAt:main.savedAt||null,
    extraSavedAt:extra.savedAt||null
  };
}
window.fetch=async(input,init)=>{
  const url=typeof input==='string'?input:(input&&input.url)||'';
  if(!url.includes('jobs-data.json'))return nativeFetch(input,init);
  try{
    let main,extra,usedBaseline=false;
    try{main=await getJson('jobs-data.json',true)}catch{main=await baseline();usedBaseline=true}
    extra=await getJson('jobs-data-nonprof.json',false);
    const jobs=mergeJobs(main.data.jobs||[],extra.data.jobs||[]);
    const updatedAt=[main.data.updatedAt,extra.data.updatedAt].filter(Boolean).sort().pop()||main.data.updatedAt||null;
    health(main,extra,usedBaseline,jobs);
    const payload={...main.data,updatedAt,jobs,feedParts:{main:(main.data.jobs||[]).length,nonProf:(extra.data.jobs||[]).length,merged:jobs.length},feedHealth:window.JobRadarFeedHealth};
    return new Response(JSON.stringify(payload),{status:200,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-KomArena-Feed-Mode':window.JobRadarFeedHealth.fallback}});
  }catch(e){
    window.JobRadarFeedHealth={checkedAt:new Date().toISOString(),fallback:'failed',error:String(e&&e.message||e),jobs:0};
    return nativeFetch(BASE+'jobs-data.json?t='+Date.now(),{cache:'no-store'});
  }
};
})();
