(()=>{
'use strict';
const S=window.__KA_SOURCE_STATE||{live:[],baseline:[],updatedAt:null,baselineUpdatedAt:null,auditUpdatedAt:null,auditSummary:null,auditMode:null};
window.__KA_SOURCE_STATE=S;
const $=id=>document.getElementById(id);
const AUDIT_UI_WARN_MIN=360;
const CONTENT_UI_WARN_MIN=4320;
const canon=u=>{try{const x=new URL(u,location.href);['utm_source','utm_medium','utm_campaign','search_id','ref','trk'].forEach(k=>x.searchParams.delete(k));x.hash='';return x.origin+x.pathname+(x.searchParams.toString()?'?'+x.searchParams.toString():'')}catch{return String(u||'').split('#')[0].split('?')[0]}};
const family=j=>{const src=String(j.source||'').toLowerCase(),url=String(j.url||'').toLowerCase(),type=String(j.sourceType||'').toLowerCase();if(src.includes('profesia')||url.includes('profesia.sk'))return'profesia';if(src.includes('linkedin')||url.includes('linkedin.com'))return'linkedin';if(type==='company'||type==='government')return'company';if(type==='facebook'||type==='community')return'community';if(type==='freelance')return'freelance';return'other'};
function mergedData(){const m=new Map();(S.baseline||[]).forEach((j,i)=>m.set(canon(j.url)||'b'+i,{...j,source:j.source||'Profesia baseline',sourceType:j.sourceType||'jobboard'}));(S.live||[]).forEach((j,i)=>m.set(canon(j.url)||j.id||'l'+i,j));return[...m.values()]}
function counts(arr){const c={profesia:0,linkedin:0,company:0,other:0,community:0,freelance:0};arr.forEach(j=>c[family(j)]++);return c}
function ageMinutes(ts){if(!ts)return null;const n=new Date(ts).getTime();if(!Number.isFinite(n))return null;return Math.round((Date.now()-n)/60000)}
function ageLabel(mins){if(mins===null)return'čakám';if(mins<0)return'o '+Math.abs(mins)+' min v budúcnosti';if(mins<60)return mins+' min';const h=Math.floor(mins/60);if(h<48)return h+' h';return Math.floor(h/24)+' d'}
function auditNoDelta(){const a=S.auditSummary||{};return a.freshnessStatus==='fresh-audit-no-live-delta'||(Object.prototype.hasOwnProperty.call(a,'newActiveJobs')&&Number(a.newActiveJobs)===0)}
function renderSourceRadar(){
  if(!$('sourceRadar'))return;
  const live=S.live||[],all=mergedData(),lc=counts(live),ac=counts(all),liveN=live.length||0,allN=all.length||0;
  Object.keys(ac).forEach(k=>{const e=$('src-'+k);if(e)e.textContent=ac[k]});
  const liveProf=liveN?Math.round(lc.profesia/liveN*100):0,totalProf=allN?Math.round(ac.profesia/allN*100):0;
  const contentAge=ageMinutes(S.updatedAt),auditAge=ageMinutes(S.auditUpdatedAt),noDelta=auditNoDelta();
  const auditOperational=auditAge!==null&&auditAge>=0&&auditAge<=AUDIT_UI_WARN_MIN&&S.auditMode!=='failed';
  $('sourceMix').textContent=`LIVE mix: Profesia ${liveProf}% • mimo Profesia ${100-liveProf}% • spolu ${liveN} položiek`;
  $('sourceTotal').textContent=`Celý radar: Profesia ${totalProf}% • mimo Profesia ${100-totalProf}% • ${allN} unikátnych`;
  $('sourceFresh').textContent=`LIVE obsah: ${ageLabel(contentAge)} • overenie zdrojov: ${ageLabel(auditAge)}${noDelta&&auditOperational?' • bez novej vhodnej delty':''}`;
  const health=$('sourceHealth');let warnings=[];
  if(contentAge!==null&&contentAge<-5)warnings.push('čas LIVE obsahu je v budúcnosti');
  if(auditAge!==null&&auditAge<-5)warnings.push('čas auditu je v budúcnosti');
  if(auditAge===null)warnings.push('čakám na audit zdrojov');
  else if(auditAge>AUDIT_UI_WARN_MIN)warnings.push('zdroje neboli overené viac než 6 h');
  if(contentAge===null)warnings.push('chýba čas LIVE obsahu');
  else if(contentAge>CONTENT_UI_WARN_MIN&&!auditOperational)warnings.push('LIVE obsah je starší než 3 dni bez čerstvého auditu');
  if(S.auditMode==='cache')warnings.push('audit je z poslednej uloženej kontroly');
  if(S.auditMode==='failed')warnings.push('audit zdrojov zlyhal');
  if(liveN>=5&&liveProf>60)warnings.push(`Profesia tvorí ${liveProf}% LIVE`);
  const fallback=window.JobRadarFeedHealth?.fallback;
  if(fallback&&fallback!=='none')warnings.push('feed beží cez '+fallback+' fallback');
  health.classList.toggle('warn',warnings.length>0);health.classList.toggle('ok',warnings.length===0);
  if(warnings.length){
    health.textContent='⚠ Diverzita/čerstvosť: '+warnings.join(' • ');
  }else if(noDelta&&contentAge!==null&&contentAge>120){
    health.textContent='✓ Zdroje overené • LIVE obsah bez novej vhodnej delty';
  }else{
    health.textContent='✓ Zdrojová diverzita a čerstvosť v norme';
  }
}
function cardFamily(card){const t=[...card.querySelectorAll('.label')].map(x=>x.textContent.toLowerCase()).join(' ');if(t.includes('profesia'))return'profesia';if(t.includes('linkedin'))return'linkedin';if(t.includes('priamo firma')||t.includes('úrad'))return'company';if(t.includes('fb verejné')||t.includes('komunita'))return'community';if(t.includes('freelance'))return'freelance';return'other'}
function applySourceFilter(){const sel=$('sourceFilter');if(!sel)return;const v=sel.value;let visible=0;document.querySelectorAll('#grid .card').forEach(card=>{const f=cardFamily(card),show=v==='all'||(v==='nonprof'&&f!=='profesia')||v===f;card.classList.toggle('sourceHidden',!show);if(show)visible++});if(v!=='all'&&$('result'))$('result').textContent=visible+' výsledkov po zdrojovom filtri';document.querySelectorAll('[data-source-pick]').forEach(b=>b.classList.toggle('on',b.dataset.sourcePick===v));}
function setSource(v){if(!$('sourceFilter'))return;$('sourceFilter').value=v;applySourceFilter()}
function wire(){if(!$('sourceFilter'))return;$('sourceFilter').addEventListener('change',applySourceFilter);document.querySelectorAll('[data-source-pick]').forEach(b=>b.addEventListener('click',()=>setSource(b.dataset.sourcePick)));const g=$('grid');if(g)new MutationObserver(()=>setTimeout(applySourceFilter,0)).observe(g,{childList:true});renderSourceRadar();applySourceFilter()}
const nativeFetch=window.fetch.bind(window);
window.fetch=async(input,init)=>{const url=typeof input==='string'?input:(input&&input.url)||'';const r=await nativeFetch(input,init);try{if(url.includes('jobs-data.json')){r.clone().json().then(d=>{S.live=d.jobs||[];S.updatedAt=d.updatedAt||null;renderSourceRadar()}).catch(()=>{})}else if(url.includes('baseline-jobs.json')){r.clone().json().then(d=>{S.baseline=d.jobs||[];S.baselineUpdatedAt=d.updatedAt||null;renderSourceRadar()}).catch(()=>{})}}catch{}return r};
window.addEventListener('ka-source-audit-updated',e=>{S.auditUpdatedAt=e.detail?.updatedAt||S.auditUpdatedAt;S.auditSummary=e.detail?.runSummary||S.auditSummary;S.auditMode=e.detail?.mode||S.auditMode;renderSourceRadar()});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',wire);else wire();setInterval(renderSourceRadar,60000);
})();
(()=>{if(document.querySelector('script[data-ka-apply-v1]'))return;const s=document.createElement('script');s.dataset.kaApplyV1='1';s.src='job-radar-apply-v1.js?v=6700';s.async=false;document.head.appendChild(s)})();