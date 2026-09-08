(()=>{
'use strict';
const $=id=>document.getElementById(id);
let busy=false;

function verifiedTime(card){
  const text=[...card.querySelectorAll('.view')].map(x=>x.textContent||'').join(' ');
  const m=text.match(/overené\s+(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{1,2}):(\d{2})/i);
  if(!m)return 0;
  const now=new Date();
  let y=now.getFullYear();
  const d=Number(m[1]),mo=Number(m[2])-1,h=Number(m[3]),mi=Number(m[4]);
  let t=new Date(y,mo,d,h,mi).getTime();
  if(t-now.getTime()>7*24*60*60*1000)t=new Date(y-1,mo,d,h,mi).getTime();
  return Number.isFinite(t)?t:0;
}
function score(card){return Number(card.querySelector('.score b')?.textContent||0)||0}
function reorder(){
  if(busy)return;
  const grid=$('grid'),sort=$('sort');
  if(!grid||!sort||sort.value!=='score')return;
  const cards=[...grid.querySelectorAll(':scope > .card')];
  if(cards.length<2)return;
  const sorted=[...cards].sort((a,b)=>verifiedTime(b)-verifiedTime(a)||score(b)-score(a));
  const changed=sorted.some((c,i)=>c!==cards[i]);
  if(!changed)return;
  busy=true;
  const frag=document.createDocumentFragment();sorted.forEach(c=>frag.appendChild(c));grid.appendChild(frag);
  busy=false;
}
function relabel(){
  const sort=$('sort');
  if(!sort)return;
  const opt=sort.querySelector('option[value="score"]');
  if(opt)opt.textContent='Najnovšie + zhoda';
}
function wire(){
  relabel();reorder();
  const grid=$('grid');
  if(grid)new MutationObserver(()=>queueMicrotask(reorder)).observe(grid,{childList:true});
  $('sort')?.addEventListener('change',()=>queueMicrotask(reorder));
  $('refresh')?.addEventListener('click',()=>setTimeout(reorder,150));
  setInterval(reorder,30000);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',wire);else wire();
})();
