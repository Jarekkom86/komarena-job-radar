(()=>{
'use strict';
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const label={ok:'✓ OK',checked:'○ SKONTROLOVANÉ',blocked:'⚠ BLOKOVANÉ',limited:'◐ OBMEDZENÉ'};
const CACHE_KEY='komarenaJobRadarSourceAudit:v2';

function saveCache(data){
  try{localStorage.setItem(CACHE_KEY,JSON.stringify({savedAt:new Date().toISOString(),data}))}catch{}
}
function readCache(){
  try{return JSON.parse(localStorage.getItem(CACHE_KEY)||'null')}catch{return null}
}
function publishState(d,mode='live',savedAt=null){
  const S=window.__KA_SOURCE_STATE||(window.__KA_SOURCE_STATE={live:[],baseline:[],updatedAt:null,baselineUpdatedAt:null,auditUpdatedAt:null});
  S.auditUpdatedAt=d?.updatedAt||null;
  S.auditSummary=d?.runSummary||null;
  S.auditMode=mode;
  S.auditCacheSavedAt=savedAt;
  window.dispatchEvent(new CustomEvent('ka-source-audit-updated',{detail:{updatedAt:S.auditUpdatedAt,runSummary:S.auditSummary,mode,savedAt}}));
}
function renderAudit(d,mode='live',savedAt=null){
  const box=$('sourceAuditRows'),stamp=$('sourceAuditStamp');
  if(!box)return;
  box.innerHTML=(d.sources||[]).map(x=>`<div class="sourceAuditRow ${esc(x.status)}"><div><b>${esc(x.name)}</b><small>${esc(x.note||'')}</small></div><span>${esc(label[x.status]||x.status)}${x.hits!==undefined?' • '+esc(x.hits)+' hit':''}</span></div>`).join('');
  if(stamp){
    const when=d.updatedAt?new Intl.DateTimeFormat('sk-SK',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}).format(new Date(d.updatedAt)):'neznáma';
    const suffix=mode==='cache'?' • posledná uložená kontrola':'';
    stamp.textContent='Kontrola zdrojov: '+when+suffix;
  }
  publishState(d,mode,savedAt);
}
async function fetchAudit(){
  let lastError=null;
  for(const name of ['source-audit-live.json','source-audit.json']){
    try{
      const r=await fetch(name+'?t='+Date.now(),{cache:'no-store'});
      if(!r.ok)throw new Error(name+' '+r.status);
      const d=await r.json();
      saveCache(d);
      return {data:d,mode:name==='source-audit-live.json'?'live-fresh':'live-legacy'};
    }catch(e){lastError=e}
  }
  const cached=readCache();
  if(cached?.data)return {data:cached.data,mode:'cache',savedAt:cached.savedAt||null};
  throw lastError||new Error('audit unavailable');
}
async function loadAudit(){
  const box=$('sourceAuditRows');
  if(!box)return;
  try{
    const loaded=await fetchAudit();
    renderAudit(loaded.data,loaded.mode,loaded.savedAt||null);
  }catch(e){
    box.innerHTML='<div class="sourceAuditRow blocked"><div><b>Audit zdrojov sa nenačítal</b><small>Feed ponúk zostáva funkčný, ale čerstvosť zdrojov momentálne neviem potvrdiť.</small></div><span>⚠ CHYBA</span></div>';
    publishState({updatedAt:null,runSummary:null},'failed');
  }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',loadAudit);else loadAudit();
setInterval(loadAudit,300000);
})();