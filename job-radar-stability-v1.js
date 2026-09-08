(()=>{
'use strict';

const BUILD='stability-v1';
const BASE='https://raw.githack.com/Jarekkom86/komarena-job-radar/main/';
const CORE=new Set([
  'jobs-data.json','jobs-data-nonprof.json','baseline-jobs.json','source-audit.json','job-sources.json',
  'komarena-job-radar-v5.3.html','brigady-ba-2026-08-26.html'
]);
const CACHE_PREFIX='komarenaJobRadarCache:v1:';
const nativeFetch=window.fetch.bind(window);
const health=window.JobRadarHealth={build:BUILD,mode:'live',lastError:null,feedUpdatedAt:null,assetErrors:[]};

function fileName(input){
  try{
    const raw=typeof input==='string'?input:(input&&input.url)||String(input||'');
    const u=new URL(raw,document.baseURI);
    return u.pathname.split('/').pop()||'';
  }catch{return''}
}
function canonicalInput(input){
  const name=fileName(input);
  if(!CORE.has(name))return input;
  try{
    const raw=typeof input==='string'?input:(input&&input.url)||String(input||'');
    const u=new URL(raw,document.baseURI);
    const q=u.search||'';
    return BASE+name+q;
  }catch{return BASE+name}
}
function cacheKey(name){return CACHE_PREFIX+name}
function saveCache(name,response,text){
  try{
    localStorage.setItem(cacheKey(name),JSON.stringify({
      savedAt:new Date().toISOString(),
      type:response.headers.get('content-type')||'',
      text
    }));
  }catch{}
}
function readCache(name){
  try{return JSON.parse(localStorage.getItem(cacheKey(name))||'null')}catch{return null}
}
function cachedResponse(name,entry,reason){
  health.mode='cache';health.lastError=reason||null;
  return new Response(entry.text,{status:200,headers:{
    'Content-Type':entry.type||'application/json; charset=utf-8',
    'X-KomArena-Fallback':'cache',
    'X-KomArena-Cache-Saved':entry.savedAt||''
  }});
}
async function timedFetch(input,init,ms=12000){
  let timer;
  try{
    return await Promise.race([
      nativeFetch(input,init),
      new Promise((_,reject)=>{timer=setTimeout(()=>reject(new Error('timeout')),ms)})
    ]);
  }finally{clearTimeout(timer)}
}
async function baselineFallback(init,reason){
  const r=await timedFetch(BASE+'baseline-jobs.json?t='+Date.now(),{...(init||{}),cache:'no-store'},10000);
  if(!r.ok)throw new Error('baseline '+r.status);
  const text=await r.text();
  saveCache('baseline-jobs.json',r,text);
  health.mode='baseline';health.lastError=reason||null;
  return new Response(text,{status:200,headers:{
    'Content-Type':'application/json; charset=utf-8',
    'X-KomArena-Fallback':'baseline'
  }});
}
function recordFreshness(name,text){
  if(name!=='jobs-data.json')return;
  try{
    const data=JSON.parse(text);health.feedUpdatedAt=data.updatedAt||null;
  }catch{}
}
function showHealth(){
  const el=document.getElementById('sync');
  if(!el)return;
  let suffix='';
  if(health.mode==='cache')suffix=' • offline cache';
  if(health.mode==='baseline')suffix=' • baseline fallback';
  if(health.feedUpdatedAt){
    const age=(Date.now()-new Date(health.feedUpdatedAt).getTime())/36e5;
    if(Number.isFinite(age)&&age>24)suffix+=' • LIVE dáta '+Math.floor(age)+' h staré';
  }
  if(health.assetErrors.length)suffix+=' • chyba assetu';
  if(suffix&&!el.textContent.includes(suffix.trim()))el.textContent+=suffix;
}

window.fetch=async(input,init={})=>{
  const method=String(init?.method||(input&&input.method)||'GET').toUpperCase();
  const name=fileName(input);
  if(method!=='GET'||!CORE.has(name))return nativeFetch(input,init);
  const target=canonicalInput(input);
  try{
    const r=await timedFetch(target,{...init,cache:'no-store'});
    if(!r.ok)throw new Error(name+' HTTP '+r.status);
    const text=await r.clone().text();
    saveCache(name,r,text);recordFreshness(name,text);health.mode='live';health.lastError=null;
    setTimeout(showHealth,0);
    return r;
  }catch(err){
    const reason=String(err&&err.message||err);
    const cached=readCache(name);
    if(cached&&cached.text){setTimeout(showHealth,0);return cachedResponse(name,cached,reason)}
    if(name==='jobs-data.json'){
      try{const r=await baselineFallback(init,reason);setTimeout(showHealth,0);return r}catch{}
    }
    health.lastError=reason;throw err;
  }
};

document.addEventListener('error',e=>{
  const t=e.target;
  if(t&&(t.tagName==='SCRIPT'||t.tagName==='LINK')){
    health.assetErrors.push(t.src||t.href||t.tagName);
    health.lastError='asset-load';setTimeout(showHealth,0);
  }
},true);
window.addEventListener('offline',()=>{health.mode='cache';setTimeout(showHealth,0)});
window.addEventListener('online',()=>{setTimeout(showHealth,0)});
window.addEventListener('load',()=>{setTimeout(showHealth,1200)});
})();
