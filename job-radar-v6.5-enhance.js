(()=>{
'use strict';

const FILTER_KEY='pracaPreJaraFilters-v66';
const FILTER_IDS=['q','origin','track','sourceFilter','eng','min','sort'];
const DEFAULTS={q:'',origin:'all',track:'all',sourceFilter:'all',eng:'all',min:'0',sort:'score',quick:'all'};
const CRM_KEY='pracaPreJaraCRM-v3';
const $=id=>document.getElementById(id);
const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let activeJob=null;

const EVIDENCE={
  warehouse:{label:'Sklad, zásoby a inventúry',confidence:1},
  orders:{label:'Objednávky a výdaj',confidence:1},
  driver:{label:'Vodičský preukaz B',confidence:1},
  purchasing:{label:'Objednávky a zásobová operatíva',confidence:.75},
  technical:{label:'Technická diagnostika',confidence:1},
  customer:{label:'Reklamácie a zákaznícka komunikácia',confidence:1},
  operations:{label:'Prevádzka a organizácia práce',confidence:1},
  admin:{label:'Administratíva, evidencia a systémy',confidence:1},
  leadership:{label:'Vedenie tímu',confidence:1},
  web:{label:'WordPress / WooCommerce',confidence:1},
  ecommerce:{label:'E-commerce administrácia',confidence:1},
  iot:{label:'Smart Home / IoT',confidence:1}
};

const REQUIREMENTS=[
  ['warehouse','sklad / zásoby / inventúry',/\bsklad|warehouse|logistik|inventur|nasklad|expedic|prijem tovar|vydaj tovar|zasob/],
  ['orders','objednávky / výdaj',/objednav|vyzdvih|vydaj objed|order/],
  ['driver','rozvoz / vodič',/rozvoz|vodic|driver|kurier|doruc|sofer/],
  ['purchasing','nákup / zásobovanie',/\bnakup|procurement|dodavatel|zasobovan/],
  ['technical','technická práca / diagnostika',/technick|diagnost|servis|oprava|udrzb|troubleshoot/],
  ['customer','zákazník / reklamácie',/zakazn|klient|customer|reklamac|komunikac/],
  ['operations','prevádzka / operatíva',/prevadzk|operativ|operations|proces|kpi|report/],
  ['admin','administratíva / evidencia',/administr|office|evidenc|doklad|excel|back.?office/],
  ['leadership','vedenie tímu',/veden.*timu|manager|manazer|team lead|supervisor/],
  ['web','WordPress / web',/wordpress|woocommerce|\bweb\b|cms|shoptet|shopify/],
  ['ecommerce','e-commerce / produkty',/e.?commerce|e-shop|eshop|produkt.*kategor/],
  ['iot','Smart Home / IoT',/smart home|\biot\b|home assistant|esphome|zigbee|matter/]
];

const HARD_GAPS=[
  ['VZV / preukaz obsluhy',/\bvzv\b|vysokozdviz|preukaz.*obsluh/],
  ['elektrotechnická vyhláška',/508\/2009|§\s?2[1-4]|vyhlaska.*elektro/],
  ['vodičské oprávnenie C/C+E',/\bc\+e\b|tachograf/],
  ['angličtina B2/C1',/\bb2\b|\bc1\b|fluent english|komunikativ.*anglict/],
  ['špecializovaná HVAC kvalifikácia',/kurena|vykuro|hvac|plynar|instalater|vodar/]
];

function installStyles(){
  if($('v66EnhanceStyle'))return;
  const style=document.createElement('style');
  style.id='v66EnhanceStyle';
  style.textContent=`
  .kaBrand{display:flex;gap:12px;align-items:center}.kaBrand img{width:92px;height:64px;object-fit:cover;border:1px solid #315b64;border-radius:12px;box-shadow:0 10px 30px #0005}.kaBrandWord b{color:#68e5d0;letter-spacing:.06em}.kaBrandWord small{display:block;color:#8fa6a9;letter-spacing:.14em;font-size:9px;margin-top:2px}
  .focus65{margin:13px 0;background:linear-gradient(135deg,#112a31,#0a171c);border:1px solid #35616b;border-radius:18px;padding:14px;box-shadow:0 16px 42px #0003}.focus65-head{display:flex;justify-content:space-between;gap:14px;align-items:flex-start;margin-bottom:10px}.focus65 h2{margin:0;font-size:18px}.focus65 p{margin:3px 0 0;color:#8fa6a9;font-size:12px}.focus65-count{border:1px solid #2f705d;color:#8ff0c6;background:#10251f;border-radius:999px;padding:6px 10px;font-size:11px;font-weight:900;white-space:nowrap}.focus65-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.focus65-item{background:#09171c;border:1px solid #294952;border-radius:13px;padding:11px;min-width:0}.focus65-top{display:flex;gap:8px}.focus65-score{flex:0 0 auto;min-width:47px;text-align:center;background:#102824;border:1px solid #2d665f;color:#9ff2df;border-radius:10px;padding:6px;font-size:20px;font-weight:950;line-height:1}.focus65-title{font-weight:900;line-height:1.2}.focus65-company{color:#8fa6a9;font-size:11px;margin-top:3px}.focus65-actions{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:9px}.focus65-actions button{border:1px solid #31515a;background:#13232a;color:#eef8f7;border-radius:8px;padding:8px;font-weight:850;cursor:pointer}.focus65-actions .go{background:linear-gradient(90deg,#00aaa7,#58d6bd);color:#021313;border:0}.focus65-empty{color:#8fa6a9;padding:8px 2px}
  .filter65{margin-left:auto;display:flex;align-items:center;gap:7px}.filter65-badge{border:1px solid #31515a;border-radius:999px;padding:6px 9px;color:#bdd0d1;font-size:11px;font-weight:850}.filter65-badge.on{border-color:#68e5d0;color:#9ff2df;background:#102824}.tools #resetFilters65{background:#14242a}
  .kaWhy{font-size:10px;color:#9db2b5;border:1px solid #24434c;background:#0b191e;padding:7px;border-radius:8px;margin:0 0 8px}.kaWhy b{color:#93efda}.kaWhy i{color:#ffd166;font-style:normal}.kaHR{grid-column:1/-1;display:grid;grid-template-columns:130px 1fr 1fr;gap:9px;background:#0b191e;border:1px solid #315862;border-radius:11px;padding:10px}.kaHR strong{font-size:32px;color:#8ff0c6}.kaHR ul{margin:4px 0;padding-left:17px;font-size:11px}.kaPrint{background:linear-gradient(90deg,#00aaa7,#58d6bd)!important;color:#021313!important;border:0!important}.modal button:focus-visible,.modal textarea:focus-visible,.toolbar input:focus-visible,.toolbar select:focus-visible,.card button:focus-visible,.card a:focus-visible,.card select:focus-visible{outline:3px solid #68e5d066;outline-offset:2px}.modal .box{max-height:calc(100vh - 32px);display:flex;flex-direction:column}.modal .body{overflow:auto}.kaLock{overflow:hidden}.mobileDock65{display:none}
  @media(max-width:760px){body{padding-bottom:70px}.kaBrand img{width:76px;height:53px}.focus65-head{flex-direction:column}.focus65-grid{grid-template-columns:1fr}.filter65{width:100%;margin-left:0;justify-content:space-between}.kaHR{grid-template-columns:1fr}.modal{padding:8px}.modal .head{position:sticky;top:0;background:#0d191f;z-index:3}.build textarea{min-height:210px}.mobileDock65{position:fixed;display:grid;grid-template-columns:repeat(5,1fr);left:8px;right:8px;bottom:8px;z-index:80;background:#071014f2;backdrop-filter:blur(14px);border:1px solid #31515a;border-radius:15px;padding:6px;box-shadow:0 10px 40px #0009}.mobileDock65 button{min-width:0;border:0;background:transparent;color:#a9bcbe;border-radius:9px;padding:7px 3px;font-size:9px;font-weight:850;line-height:1.15}.mobileDock65 button.on{background:#123039;color:#9ff2df}.mobileDock65 b{display:block;font-size:16px;margin-bottom:2px}}
  `;
  document.head.appendChild(style);
}

function installBrand(){
  const holder=document.querySelector('.top>div:first-child');
  if(!holder||holder.dataset.v66Brand)return;
  holder.dataset.v66Brand='1';
  holder.innerHTML='<div class="kaBrand"><img src="komarena-job-radar-jr-master.webp?v=6600" alt="KomArena Job Radar JR logo"><div class="kaBrandWord"><div class="brand">KomArena <b>JOB RADAR</b></div><small>PRÍLEŽITOSTI V REÁLNOM ČASE</small><div class="micro">PRÁCA PRE JARA • MASTER v6.6</div></div></div>';
  document.title='KomArena Job Radar — MASTER v6.6';
}

function ensureUi(){
  const toolbar=document.querySelector('.toolbar');
  if(toolbar&&!$('focus65'))toolbar.insertAdjacentHTML('beforebegin','<section class="focus65" id="focus65" aria-live="polite"><div class="focus65-head"><div><h2>🎯 Dnešný fokus</h2><p>Tri najlepšie aktuálne ponuky podľa zvolených filtrov.</p></div><div class="focus65-count" id="focus65Count">0 priorít</div></div><div class="focus65-grid" id="focus65Grid"><div class="focus65-empty">Načítavam priority…</div></div></section>');
  const tools=document.querySelector('.tools');
  if(tools&&!$('resetFilters65')){
    const g=document.createElement('div');g.className='filter65';g.innerHTML='<span class="filter65-badge" id="filterCount65">Filtre: 0</span><button id="resetFilters65" type="button">Vyčistiť filtre</button>';tools.appendChild(g);$('resetFilters65').addEventListener('click',resetFilters);
  }
  if(!$('mobileDock65')){
    const nav=document.createElement('nav');nav.className='mobileDock65';nav.id='mobileDock65';nav.setAttribute('aria-label','Rýchle mobilné filtre');nav.innerHTML='<button data-dock="all"><b>⌂</b>Všetko</button><button data-dock="today"><b>🔥</b>Dnes</button><button data-dock="top"><b>🎯</b>Top</button><button data-dock="pipe"><b>✓</b>Riešim</button><button data-dock="filters"><b>☷</b>Filtre</button>';document.body.appendChild(nav);
    nav.addEventListener('click',e=>{const b=e.target.closest('[data-dock]');if(!b)return;const k=b.dataset.dock;if(k==='filters'){document.querySelector('.toolbar')?.scrollIntoView({behavior:'smooth',block:'start'});return;}document.querySelector(`[data-qk="${k}"]`)?.click();setTimeout(()=>document.querySelector('.status')?.scrollIntoView({behavior:'smooth',block:'start'}),40);});
  }
}

function cardJob(card){
  const parts=(card.querySelector('.company')?.textContent||'').split('•').map(x=>x.trim());
  return {id:card.dataset.id||'',title:card.querySelector('h3')?.textContent.trim()||'',company:parts.shift()||'',location:parts.join(' • '),desc:card.querySelector('.desc')?.textContent.trim()||'',score:Number(card.querySelector('.score b')?.textContent||0)||0,card};
}

function analyse(j){
  const title=norm(j.title),all=norm(j.title+' '+j.desc);
  const req=REQUIREMENTS.filter(x=>x[2].test(title)||x[2].test(all)).map(x=>({key:x[0],label:x[1],weight:x[2].test(title)?3:1})).sort((a,b)=>b.weight-a.weight).slice(0,6);
  const ev=req.map(r=>EVIDENCE[r.key]?{req:r,key:r.key,label:EVIDENCE[r.key].label,confidence:EVIDENCE[r.key].confidence}:null).filter(Boolean);
  const hard=HARD_GAPS.filter(x=>x[1].test(all)).map(x=>x[0]);
  const direct=ev.filter(x=>x.confidence>=.95).length,partial=ev.length-direct;
  let hr=64+Math.round((direct+partial*.65)/Math.max(1,req.length)*28)-hard.length*8+(j.company?3:0)+(j.title?2:0);hr=Math.max(35,Math.min(96,hr));
  const warnings=hard.map(x=>'Overiť hard požiadavku: '+x+'.');
  ev.filter(x=>x.confidence<.95).forEach(x=>warnings.push(x.req.label+': iba čiastočná zhoda — netvrdím nákupnú špecializáciu.'));
  if(req.some(x=>x.key==='technical')&&!req.some(x=>x.key==='iot'))warnings.push('IoT nepoužívam ako hlavný argument iba preto, že pozícia je technická.');
  return {req,ev,hard,hr,warnings};
}

function topEvidence(a,n=5){
  const out=[],seen=new Set();
  a.ev.forEach(x=>{if(out.length<n&&!seen.has(x.key)){seen.add(x.key);out.push(x);}});
  ['operations','customer','admin','driver'].forEach(k=>{if(out.length<n&&!seen.has(k)){seen.add(k);out.push({key:k,label:EVIDENCE[k].label,confidence:1});}});
  return out.slice(0,n);
}

function interestPhrase(a){
  const map={warehouse:'skladu',orders:'objednávok a výdaja',driver:'rozvozu',purchasing:'nákupu',technical:'technickej práce',customer:'komunikácie so zákazníkmi',operations:'prevádzkovej operatívy',admin:'administratívy',leadership:'vedenia tímu',web:'práce s webom',ecommerce:'e-commerce administratívy',iot:'Smart Home/IoT'};
  const x=a.req.slice(0,4).map(r=>map[r.key]||r.label);if(!x.length)return'praktickej náplne pozície';if(x.length===1)return x[0];return x.slice(0,-1).join(', ')+' a '+x.at(-1);
}

function buildReaction(j,short=false){
  const a=analyse(j),keys=new Set(a.req.map(x=>x.key)),p=[];
  if(keys.has('warehouse')||keys.has('orders')||keys.has('purchasing'))p.push('V doterajšej praxi som pracoval so skladovým hospodárstvom, zásobami, inventúrami, objednávkami a prevádzkovou administratívou. Mám skúsenosť aj so spoluprácou s logistikou a internými tímami.');
  if(keys.has('technical'))p.push('Aktuálne sa venujem servisnej a reklamačnej práci, kde riešim technickú diagnostiku, komunikáciu so zákazníkom a kontrolu výslednej funkčnosti.');
  if(keys.has('driver'))p.push('Som aktívny vodič skupiny B, zvyknutý pracovať samostatne, presne a operatívne riešiť situácie počas dňa.');
  if(keys.has('admin')&&!p.some(x=>x.includes('administratívou')))p.push('Mám skúsenosti s administratívou, evidenciou, reportingom a prácou v interných systémoch a Microsoft Office.');
  if(keys.has('web')||keys.has('ecommerce'))p.push('Prakticky pracujem aj s WordPress/WooCommerce, správou webu, produktových podkladov a e-commerce administráciou.');
  if(keys.has('iot'))p.push('V technickej oblasti mám praktickú skúsenosť so Smart Home/IoT a Home Assistantom; pri riešení problémov postupujem od diagnostiky po kontrolu výsledku.');
  if(!p.length)p.push('Prinášam dlhoročnú prevádzkovú a zákaznícku prax, samostatnosť, organizáciu práce a schopnosť systematicky riešiť problémy.');
  const company=String(j.company||'').replace(/[.\s]+$/,'');
  const intro=`Dobrý deň,\n\nreagujem na ponuku „${j.title}“${company?' v spoločnosti '+company:''}.\n\nPozícia ma zaujala kombináciou ${interestPhrase(a)}.`;
  if(short)return intro+'\n\n'+p.slice(0,2).join('\n\n')+'\n\nRád si s Vami prejdem podrobnosti osobne alebo telefonicky.\n\nS pozdravom\nJaroslav Koman';
  return intro+'\n\n'+p.join('\n\n')+'\n\nPre túto pozíciu viem ponúknuť najmä:\n- '+topEvidence(a,4).map(x=>x.label).join('\n- ')+'\n\nRád si s Vami prejdem podrobnosti osobne alebo telefonicky.\n\nS pozdravom\nJaroslav Koman';
}

function buildCv(j){
  const a=analyse(j),k=new Set(a.req.map(x=>x.key));
  const heading=(k.has('warehouse')||k.has('driver')||k.has('purchasing'))?'TECHNICKÁ PREVÁDZKA | SKLAD | LOGISTIKA':k.has('technical')?'TECHNICKÁ PODPORA | DIAGNOSTIKA | ZÁKAZNÍCKY SERVIS':k.has('admin')?'ADMINISTRATÍVA | OPERATIONS | ZÁKAZNÍCKA PODPORA':(k.has('web')||k.has('ecommerce'))?'WORDPRESS | WOOCOMMERCE | E-COMMERCE OPERATIONS':'PREVÁDZKA | ZÁKAZNÍCKY SERVIS | OPERATIONS';
  const profile=(k.has('warehouse')||k.has('driver')||k.has('purchasing'))?'Prevádzkovo a technicky orientovaný profesionál s dlhoročnou praxou v retaile a každodennej operatíve. Prakticky som pracoval so skladovým hospodárstvom, inventúrami, objednávkami, logistikou, zákazníckym servisom a reklamáciami. Aktuálne sa venujem servisnej a reklamačnej práci s dôrazom na diagnostiku, presnosť a kontrolu výsledku.':k.has('technical')?'Technicky a zákaznícky orientovaný servisný pracovník so skúsenosťami s diagnostikou, reklamáciami, evidenciou prípadov a podporou zákazníkov. Pri probléme systematicky zisťujem príčinu, navrhujem ďalší krok a výsledok overujem.':'Systémovo a klientsky orientovaný profesionál s dlhoročnou praxou v prevádzke, administratíve, reportingu, evidencii a koordinácii tímov.';
  const exp=[];
  if(k.has('technical')||k.has('iot'))exp.push('• Aktuálna servisná a reklamačná prax — diagnostika, evidencia, komunikácia a kontrola funkčnosti.');
  if(k.has('warehouse')||k.has('orders')||k.has('purchasing')||k.has('driver'))exp.push('• Prevádzkový manažment a retail — sklad, inventúry, objednávky, naskladnenie, logistika a operatíva.');
  if(k.has('admin')||k.has('operations')||k.has('customer'))exp.push('• Klientska a administratívna prax — interné systémy, evidencia, reporting a riešenie požiadaviek.');
  if(k.has('web')||k.has('ecommerce'))exp.push('• Digitálne projekty — WordPress/WooCommerce, správa webu a e-commerce administrácia.');
  return `Bc. JAROSLAV KOMAN\n${heading}\nCielené na pozíciu: ${j.title}\n\nPROFIL\n${profile}\n\nKĽÚČOVÉ ZRUČNOSTI\n• ${topEvidence(a,6).map(x=>x.label).join('\n• ')}\n\nRELEVANTNÁ PRAX\n${exp.join('\n')}\n\nĎALŠIE\n• Vodičský preukaz B\n• Microsoft Office a interné systémy\n• Angličtina: základná úroveň A1–A2\n\nMASTER pravidlo: finálny PDF zachová schválenú hlavičku, fotografiu, typografiu a kontaktné údaje z MASTER CV; Job Radar personalizuje iba relevantný obsah.`;
}

function printCv(j){
  const a=analyse(j),text=buildCv(j),blocks=text.split('\n\n'),section=n=>(blocks.find(x=>x.startsWith(n))||'').split('\n').slice(1);
  return `<!doctype html><html lang="sk"><meta charset="utf-8"><title>CV Jaroslav Koman</title><style>@page{size:A4;margin:14mm}body{font:10.5pt/1.45 Arial;color:#17323a}.top{border-bottom:3px solid #00979d;padding-bottom:10px}.name{font-size:25pt;font-weight:800}.role{color:#007c82;font-weight:800}.s{margin:13px 0}.s h2{font-size:9pt;letter-spacing:.12em;color:#007c82}.skill{display:inline-block;border:1px solid #d5e5e7;border-radius:7px;padding:5px 8px;margin:3px}.note{font-size:8pt;color:#687d82;background:#f3f8f8;padding:8px}@media print{.note{display:none}}</style><body><div class="top"><div class="name">Bc. JAROSLAV KOMAN</div><div class="role">${esc(text.split('\n')[1])}</div><small>${esc(text.split('\n')[2])}</small></div><p class="note">Kontakty a fotografia zostávajú v schválenej MASTER hlavičke; verejný Job Radar ich nepridáva do repozitára.</p><div class="s"><h2>PROFIL</h2><p>${esc(section('PROFIL').join(' '))}</p></div><div class="s"><h2>KĽÚČOVÉ ZRUČNOSTI</h2>${topEvidence(a,6).map(x=>`<span class="skill">${esc(x.label)}</span>`).join('')}</div><div class="s"><h2>RELEVANTNÁ PRAX</h2>${section('RELEVANTNÁ PRAX').map(x=>`<p>${esc(x)}</p>`).join('')}</div><div class="s"><h2>ĎALŠIE</h2><p>Vodičský preukaz B • Microsoft Office a interné systémy • Angličtina A1–A2</p></div></body></html>`;
}

function renderHr(j){
  const box=$('kaHR');if(!box)return;const a=analyse(j);
  box.innerHTML=`<div><strong>${a.hr}</strong><br><small>HR pripravenosť /100</small></div><div><b>Prečo sedí</b><ul>${a.ev.slice(0,5).map(x=>`<li>${esc(x.req.label)} → ${esc(x.label)}${x.confidence<.95?' (čiastočne)':''}</li>`).join('')}</ul></div><div><b>Kontrola rizík</b><ul>${(a.warnings.length?a.warnings:['Bez zjavného hard-gap signálu.']).slice(0,4).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`;
}

function enhanceModal(){
  const modal=$('reactModal');if(!modal)return;modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');
  const body=modal.querySelector('.body.build');if(body&&!$('kaHR'))body.insertAdjacentHTML('afterbegin','<section class="kaHR" id="kaHR" aria-live="polite"></section>');
  const cvTitle=[...modal.querySelectorAll('h3')].find(x=>x.textContent.includes('Personalizované CV'));if(cvTitle)cvTitle.textContent='Cielený obsah CV — MASTER';
  if($('print')){$('print').textContent='Tlač / uložiť PDF';$('print').classList.add('kaPrint');}
  if($('download'))$('download').textContent='Technický HTML';
  const actions=$('reaction')?.nextElementSibling;if(actions&&!$('prep66'))actions.insertAdjacentHTML('beforeend','<button id="prep66" type="button">✓ Reakcia pripravená</button>');
}

function workflow(card){
  const s=card?.querySelector('select[data-a="status"]');if(!s)return null;
  const add=(value,label,before)=>{if([...s.options].some(o=>o.value===value))return;const o=new Option(label,value),ref=[...s.options].find(o=>o.value===before);ref?s.insertBefore(o,ref):s.add(o);};
  add('pripravena','Reakcia pripravená','reagovane');add('odpoved','Odpoveď od firmy','pohovor');
  const sent=[...s.options].find(o=>o.value==='reagovane');if(sent)sent.textContent='Odoslaná';
  let db={};try{db=JSON.parse(localStorage.getItem(CRM_KEY)||'{}');}catch{}
  if(['pripravena','odpoved'].includes(db[card.dataset.id]?.status))s.value=db[card.dataset.id].status;
  s.setAttribute('aria-label','Stav ponuky');return s;
}

function updateCards(){
  document.querySelectorAll('#grid .card').forEach(card=>{
    workflow(card);card.querySelector('.note')?.setAttribute('aria-label','Poznámka ku ponuke');
    if(!card.querySelector('.kaWhy')){const j=cardJob(card),a=analyse(j),d=document.createElement('div');d.className='kaWhy';d.innerHTML='<b>HR zhoda '+a.hr+'/100:</b> '+esc(a.ev.slice(0,3).map(x=>x.label).join(' • ')||'všeobecná zhoda')+(a.hard[0]?' <i>⚠ overiť: '+esc(a.hard[0])+'</i>':'');card.querySelector('.scoreRow')?.insertAdjacentElement('afterend',d);}
  });
}

function openApplication(j){
  activeJob=j;$('rt').textContent='Reakcia: '+j.title;$('reaction').value=buildReaction(j);$('cv').value=buildCv(j);$('reasons').innerHTML=topEvidence(analyse(j),6).map(x=>`<div>${esc(x.label)}</div>`).join('');renderHr(j);$('reactModal').classList.add('show');document.body.classList.add('kaLock');setTimeout(()=>$('reaction')?.focus(),20);
}

function getQuick(){return document.querySelector('.quick [data-qk].on')?.dataset.qk||'all';}
function saveFilters(){const data={};FILTER_IDS.forEach(id=>{if($(id))data[id]=$(id).value;});data.quick=getQuick();try{localStorage.setItem(FILTER_KEY,JSON.stringify(data));}catch{}updateFilterStatus();}
function applySavedFilters(){let saved={};try{saved=JSON.parse(localStorage.getItem(FILTER_KEY)||'{}')||{};}catch{}FILTER_IDS.forEach(id=>{const el=$(id);if(el&&saved[id]!==undefined)el.value=saved[id];});if(saved.quick&&saved.quick!=='all')document.querySelector(`.quick [data-qk="${saved.quick}"]`)?.click();setTimeout(()=>FILTER_IDS.forEach(id=>{const el=$(id);if(el)el.dispatchEvent(new Event(id==='q'?'input':'change',{bubbles:true}));}),0);updateFilterStatus();}
function resetFilters(){FILTER_IDS.forEach(id=>{const el=$(id);if(!el)return;el.value=DEFAULTS[id];el.dispatchEvent(new Event(id==='q'?'input':'change',{bubbles:true}));});document.querySelector('.quick [data-qk="all"]')?.click();try{localStorage.removeItem(FILTER_KEY);}catch{}updateFilterStatus();setTimeout(updateFocus,30);}
function updateFilterStatus(){let count=0;FILTER_IDS.forEach(id=>{const el=$(id);if(el&&String(el.value)!==String(DEFAULTS[id]))count++;});const quick=getQuick();if(quick!=='all')count++;const badge=$('filterCount65');if(badge){badge.textContent='Filtre: '+count;badge.classList.toggle('on',count>0);}document.querySelectorAll('#mobileDock65 [data-dock]').forEach(b=>b.classList.toggle('on',b.dataset.dock===quick));}

function updateFocus(){
  const box=$('focus65Grid'),count=$('focus65Count'),grid=$('grid');if(!box||!grid)return;
  const cards=[...grid.querySelectorAll('.card')].filter(c=>!c.classList.contains('sourceHidden')&&getComputedStyle(c).display!=='none').sort((a,b)=>(Number(b.querySelector('.score b')?.textContent||0)||0)-(Number(a.querySelector('.score b')?.textContent||0)||0)).slice(0,3);
  if(count)count.textContent=cards.length+(cards.length===1?' priorita':' priority');
  if(!cards.length){box.innerHTML='<div class="focus65-empty">Pre aktuálny filter nie je žiadna priorita. Skús vyčistiť filtre.</div>';return;}
  box.innerHTML=cards.map((c,i)=>`<article class="focus65-item"><div class="focus65-top"><div class="focus65-score">${Number(c.querySelector('.score b')?.textContent||0)||0}</div><div><div class="focus65-title">${i+1}. ${esc(c.querySelector('h3')?.textContent)}</div><div class="focus65-company">${esc(c.querySelector('.company')?.textContent)}</div></div></div><div class="focus65-actions"><button type="button" data-focus-interest="${esc(c.dataset.id)}">☆ Mám záujem</button><button type="button" class="go" data-focus-open="${esc(c.dataset.id)}">Otvoriť →</button></div></article>`).join('');
}

function bindUi(){
  FILTER_IDS.forEach(id=>{const el=$(id);if(!el||el.dataset.v66Persist)return;el.dataset.v66Persist='1';el.addEventListener(id==='q'?'input':'change',()=>{saveFilters();setTimeout(updateFocus,30);});});
  document.querySelectorAll('.quick [data-qk]').forEach(b=>{if(b.dataset.v66Persist)return;b.dataset.v66Persist='1';b.addEventListener('click',()=>setTimeout(()=>{saveFilters();updateFocus();},30));});
  $('sourceFilter')?.addEventListener('change',()=>setTimeout(updateFocus,50));
  $('focus65')?.addEventListener('click',e=>{const open=e.target.closest('[data-focus-open]'),interest=e.target.closest('[data-focus-interest]');const id=open?.dataset.focusOpen||interest?.dataset.focusInterest;if(!id)return;const card=document.querySelector(`#grid .card[data-id="${CSS.escape(id)}"]`);if(open)card?.querySelector('[data-a="open"]')?.click();else{const s=workflow(card);if(s){s.value='zaujem';s.dispatchEvent(new Event('change',{bubbles:true}));}}});
}

function init(){
  installStyles();installBrand();ensureUi();enhanceModal();bindUi();applySavedFilters();
  const grid=$('grid');if(grid){
    grid.addEventListener('click',e=>{const b=e.target.closest('[data-a="react"]');if(!b)return;const card=b.closest('.card');if(!card)return;e.preventDefault();e.stopImmediatePropagation();openApplication(cardJob(card));},true);
    new MutationObserver(()=>setTimeout(()=>{updateCards();updateFocus();updateFilterStatus();},30)).observe(grid,{childList:true});
  }
  if($('short'))$('short').onclick=()=>{if(activeJob)$('reaction').value=buildReaction(activeJob,true);};
  if($('print'))$('print').onclick=()=>{if(!activeJob)return;const w=open('','_blank','noopener,noreferrer');if(w){w.document.write(printCv(activeJob));w.document.close();setTimeout(()=>w.print(),80);}};
  if($('download'))$('download').onclick=()=>{if(!activeJob)return;const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([printCv(activeJob)],{type:'text/html'}));a.download='CV-cieleny-obsah.html';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500);};
  if($('prep66'))$('prep66').onclick=()=>{if(!activeJob)return;const s=workflow(activeJob.card);if(s){s.value='pripravena';s.dispatchEvent(new Event('change',{bubbles:true}));}};
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelector('.modal.show')?.classList.remove('show');document.body.classList.remove('kaLock');}});
  document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m){m.classList.remove('show');document.body.classList.remove('kaLock');}}));
  document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>document.body.classList.remove('kaLock')));
  updateCards();updateFocus();updateFilterStatus();setTimeout(()=>{updateCards();updateFocus();},900);
  window.__KA_JOBRADAR_V66={analyse,buildReaction,buildCv};
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
