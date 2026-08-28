(()=>{
'use strict';

const FILTER_KEY='pracaPreJaraFilters-v65';
const FILTER_IDS=['q','origin','track','sourceFilter','eng','min','sort'];
const DEFAULTS={q:'',origin:'all',track:'all',sourceFilter:'all',eng:'all',min:'0',sort:'score',quick:'all'};
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function installStyles(){
  if($('v65EnhanceStyle'))return;
  const style=document.createElement('style');
  style.id='v65EnhanceStyle';
  style.textContent=`
  .focus65{margin:13px 0;background:linear-gradient(135deg,#112a31,#0a171c);border:1px solid #35616b;border-radius:18px;padding:14px;box-shadow:0 16px 42px #0003}
  .focus65-head{display:flex;justify-content:space-between;gap:14px;align-items:flex-start;margin-bottom:10px}
  .focus65 h2{margin:0;font-size:18px;letter-spacing:-.02em}.focus65 p{margin:3px 0 0;color:#8fa6a9;font-size:12px}
  .focus65-count{border:1px solid #2f705d;color:#8ff0c6;background:#10251f;border-radius:999px;padding:6px 10px;font-size:11px;font-weight:900;white-space:nowrap}
  .focus65-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.focus65-item{background:#09171c;border:1px solid #294952;border-radius:13px;padding:11px;min-width:0}
  .focus65-top{display:flex;gap:8px;align-items:flex-start}.focus65-score{flex:0 0 auto;min-width:47px;text-align:center;background:#102824;border:1px solid #2d665f;color:#9ff2df;border-radius:10px;padding:6px 7px;font-size:20px;font-weight:950;line-height:1}
  .focus65-title{font-weight:900;line-height:1.2}.focus65-company{color:#8fa6a9;font-size:11px;margin-top:3px}.focus65-actions{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:9px}
  .focus65-actions button{border:1px solid #31515a;background:#13232a;color:#eef8f7;border-radius:8px;padding:8px;font-weight:850;cursor:pointer}.focus65-actions .go{background:linear-gradient(90deg,#00aaa7,#58d6bd);color:#021313;border:0}
  .focus65-empty{color:#8fa6a9;padding:8px 2px}.filter65{margin-left:auto;display:flex;align-items:center;gap:7px}.filter65-badge{border:1px solid #31515a;border-radius:999px;padding:6px 9px;color:#bdd0d1;font-size:11px;font-weight:850}.filter65-badge.on{border-color:#68e5d0;color:#9ff2df;background:#102824}
  .tools #resetFilters65{background:#14242a}.mobileDock65{display:none}
  @media(max-width:760px){
    body{padding-bottom:70px}.focus65-head{flex-direction:column}.focus65-grid{grid-template-columns:1fr}.focus65-item{padding:10px}.filter65{width:100%;margin-left:0;justify-content:space-between}
    .mobileDock65{position:fixed;display:grid;grid-template-columns:repeat(5,1fr);left:8px;right:8px;bottom:8px;z-index:80;background:#071014f2;backdrop-filter:blur(14px);border:1px solid #31515a;border-radius:15px;padding:6px;box-shadow:0 10px 40px #0009}
    .mobileDock65 button{min-width:0;border:0;background:transparent;color:#a9bcbe;border-radius:9px;padding:7px 3px;font-size:9px;font-weight:850;line-height:1.15}.mobileDock65 button.on{background:#123039;color:#9ff2df}.mobileDock65 b{display:block;font-size:16px;margin-bottom:2px}
  }`;
  document.head.appendChild(style);
}

function ensureUi(){
  installStyles();
  const toolbar=document.querySelector('.toolbar');
  if(toolbar&&!$('focus65')){
    toolbar.insertAdjacentHTML('beforebegin',`<section class="focus65" id="focus65" aria-live="polite"><div class="focus65-head"><div><h2>🎯 Dnešný fokus</h2><p>Tri najlepšie aktuálne ponuky podľa zvolených filtrov. Rýchlo otvoríš detail alebo ich posunieš do „Mám záujem“.</p></div><div class="focus65-count" id="focus65Count">0 priorít</div></div><div class="focus65-grid" id="focus65Grid"><div class="focus65-empty">Načítavam priority…</div></div></section>`);
  }
  const tools=document.querySelector('.tools');
  if(tools&&!$('resetFilters65')){
    const group=document.createElement('div');
    group.className='filter65';
    group.innerHTML='<span class="filter65-badge" id="filterCount65">Filtre: 0</span><button id="resetFilters65" type="button">Vyčistiť filtre</button>';
    tools.appendChild(group);
    $('resetFilters65').addEventListener('click',resetFilters);
  }
  if(!$('mobileDock65')){
    const nav=document.createElement('nav');
    nav.className='mobileDock65';nav.id='mobileDock65';nav.setAttribute('aria-label','Rýchle mobilné filtre');
    nav.innerHTML='<button data-dock="all"><b>⌂</b>Všetko</button><button data-dock="today"><b>🔥</b>Dnes</button><button data-dock="top"><b>🎯</b>Top</button><button data-dock="pipe"><b>✓</b>Riešim</button><button data-dock="filters"><b>☷</b>Filtre</button>';
    document.body.appendChild(nav);
    nav.addEventListener('click',e=>{
      const b=e.target.closest('button[data-dock]');if(!b)return;
      const k=b.dataset.dock;
      if(k==='filters'){document.querySelector('.toolbar')?.scrollIntoView({behavior:'smooth',block:'start'});return;}
      document.querySelector(`[data-qk="${k}"]`)?.click();
      setTimeout(()=>document.querySelector('.status')?.scrollIntoView({behavior:'smooth',block:'start'}),40);
    });
  }
}

function getQuick(){return document.querySelector('.quick [data-qk].on')?.dataset.qk||'all';}

function saveFilters(){
  const data={};
  FILTER_IDS.forEach(id=>{const el=$(id);if(el)data[id]=el.value;});
  data.quick=getQuick();
  try{localStorage.setItem(FILTER_KEY,JSON.stringify(data));}catch{}
  updateFilterStatus();
}

function applySavedFilters(){
  let saved={};try{saved=JSON.parse(localStorage.getItem(FILTER_KEY)||'{}')||{};}catch{}
  FILTER_IDS.forEach(id=>{const el=$(id);if(el&&saved[id]!==undefined)el.value=saved[id];});
  const q=saved.quick||'all';
  if(q!=='all')document.querySelector(`.quick [data-qk="${q}"]`)?.click();
  FILTER_IDS.forEach(id=>{const el=$(id);if(!el)return;el.dispatchEvent(new Event(id==='q'?'input':'change',{bubbles:true}));});
  updateFilterStatus();
}

function resetFilters(){
  FILTER_IDS.forEach(id=>{const el=$(id);if(!el)return;el.value=DEFAULTS[id];el.dispatchEvent(new Event(id==='q'?'input':'change',{bubbles:true}));});
  document.querySelector('.quick [data-qk="all"]')?.click();
  try{localStorage.removeItem(FILTER_KEY);}catch{}
  updateFilterStatus();
}

function updateFilterStatus(){
  let count=0;
  FILTER_IDS.forEach(id=>{const el=$(id);if(el&&String(el.value)!==String(DEFAULTS[id]))count++;});
  const quick=getQuick();if(quick!=='all')count++;
  const badge=$('filterCount65');if(badge){badge.textContent='Filtre: '+count;badge.classList.toggle('on',count>0);}
  document.querySelectorAll('#mobileDock65 [data-dock]').forEach(b=>b.classList.toggle('on',b.dataset.dock===quick));
}

function scoreOf(card){return Number(card.querySelector('.score b')?.textContent||0)||0;}
function updateFocus(){
  const box=$('focus65Grid'),count=$('focus65Count'),grid=$('grid');if(!box||!grid)return;
  const cards=[...grid.querySelectorAll('.card')].sort((a,b)=>scoreOf(b)-scoreOf(a)).slice(0,3);
  if(count)count.textContent=cards.length+(cards.length===1?' priorita':' priority');
  if(!cards.length){box.innerHTML='<div class="focus65-empty">Pre aktuálny filter nie je žiadna priorita. Skús vyčistiť filtre.</div>';return;}
  box.innerHTML=cards.map((c,i)=>{
    const id=c.dataset.id||'';const title=c.querySelector('h3')?.textContent.trim()||'Ponuka';const company=c.querySelector('.company')?.textContent.trim()||'';const score=scoreOf(c);
    return `<article class="focus65-item" data-focus-card="${esc(id)}"><div class="focus65-top"><div class="focus65-score">${score}</div><div><div class="focus65-title">${i+1}. ${esc(title)}</div><div class="focus65-company">${esc(company)}</div></div></div><div class="focus65-actions"><button type="button" data-focus-interest="${esc(id)}">☆ Mám záujem</button><button type="button" class="go" data-focus-open="${esc(id)}">Otvoriť →</button></div></article>`;
  }).join('');
}

function bindFocus(){
  const panel=$('focus65');if(!panel||panel.dataset.bound)return;panel.dataset.bound='1';
  panel.addEventListener('click',e=>{
    const open=e.target.closest('[data-focus-open]');
    if(open){const card=document.querySelector(`#grid .card[data-id="${CSS.escape(open.dataset.focusOpen)}"]`);card?.querySelector('[data-a="open"]')?.click();return;}
    const interest=e.target.closest('[data-focus-interest]');
    if(interest){const card=document.querySelector(`#grid .card[data-id="${CSS.escape(interest.dataset.focusInterest)}"]`);const select=card?.querySelector('select[data-a="status"]');if(select){select.value='zaujem';select.dispatchEvent(new Event('change',{bubbles:true}));}}
  });
}

function bindPersistence(){
  FILTER_IDS.forEach(id=>{const el=$(id);if(!el||el.dataset.v65Persist)return;el.dataset.v65Persist='1';el.addEventListener(id==='q'?'input':'change',saveFilters);});
  document.querySelectorAll('.quick [data-qk]').forEach(b=>{if(b.dataset.v65Persist)return;b.dataset.v65Persist='1';b.addEventListener('click',()=>setTimeout(saveFilters,0));});
}

function init(){
  ensureUi();bindFocus();bindPersistence();applySavedFilters();
  const grid=$('grid');if(grid){new MutationObserver(()=>{updateFocus();updateFilterStatus();}).observe(grid,{childList:true});}
  updateFocus();updateFilterStatus();
  setTimeout(()=>{updateFocus();updateFilterStatus();},900);
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
