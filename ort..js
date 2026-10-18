<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>eyeMEmory · die 0 · v4 · ARBEIT ZU ARBEIT</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--bg:#02060a;--fg:#c8d8e8;--dim:#2a3a4a;--gut:#39ff88;--warn:#ffaa00;--bad:#ff3ea5;--cyan:#5cf0ff;--violet:#b388ff;--gold:#f0d080;--amber:#ff8a2a}
html,body{height:100%}body{background:var(--bg);color:var(--fg);font:11px/1.5 Consolas,monospace;overflow:hidden;background-image:radial-gradient(ellipse at 50% 50%,#081420,#02060a 70%)}
canvas{display:block;position:fixed;inset:0}
#kopf{position:fixed;top:18px;left:50%;transform:translateX(-50%);text-align:center;z-index:6;pointer-events:none}
#kopf h1{font-size:14px;letter-spacing:6px;font-weight:400;background:linear-gradient(90deg,var(--cyan),var(--violet),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
#kopf .sub{font-size:9px;letter-spacing:4px;color:var(--dim);margin-top:6px}
#kopf .live{font-size:8px;letter-spacing:3px;margin-top:4px;color:var(--gut)}
#drache{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:5;pointer-events:none;text-align:center}
#drache .wort{font-size:clamp(28px,7vw,72px);font-weight:100;letter-spacing:.4em;transition:color .8s,text-shadow .8s}
#drache .wort.zeigt{color:var(--cyan);text-shadow:0 0 50px var(--cyan)}
#drache .wort.bändigt{color:var(--violet);text-shadow:0 0 50px var(--violet)}
#drache .wort.verschanzt{color:var(--dim);text-shadow:none}
#zahl{position:fixed;bottom:78px;left:50%;transform:translateX(-50%);text-align:center;z-index:6;pointer-events:none}
#zahl .n{font-size:clamp(20px,3.4vw,38px);font-weight:100;letter-spacing:.18em;color:var(--gold);text-shadow:0 0 30px rgba(240,208,128,.3)}
#zahl .l{font-size:9px;letter-spacing:.4em;color:var(--dim);margin-top:6px}
#seiten{position:fixed;top:50%;transform:translateY(-50%);z-index:6;pointer-events:none;font-size:9px;letter-spacing:.3em;color:var(--dim);line-height:2.4}
#links{left:24px}#rechts{right:24px;text-align:right}
#seiten .v{color:var(--cyan)}#seiten .g{color:var(--gold)}#seiten .p{color:var(--violet)}#seiten .r{color:var(--bad)}
#fluss{position:fixed;bottom:46px;left:50%;transform:translateX(-50%);z-index:7;display:flex;gap:8px;font-size:8px;letter-spacing:2px;align-items:center}
#fluss span{padding:2px 6px;border:1px solid #1a2a3a;background:#0a1218}
#fluss .on{border-color:var(--cyan);color:var(--cyan)}#fluss .amber{border-color:var(--amber);color:var(--amber)}#fluss .vio{border-color:var(--violet);color:var(--violet)}#fluss .gold{border-color:var(--gold);color:var(--gold)}
#fuss{position:fixed;bottom:12px;left:50%;transform:translateX(-50%);font-size:9px;letter-spacing:.4em;color:var(--dim);z-index:6;pointer-events:none;text-align:center}
#fuss b{color:var(--gut);font-weight:400}
.ecke{position:fixed;width:14px;height:14px;z-index:998;pointer-events:none;opacity:.3;border-color:var(--cyan)}
.ecke.ol{top:12px;left:12px;border-top:1px solid;border-left:1px solid}
.ecke.or{top:12px;right:12px;border-top:1px solid;border-right:1px solid}
.ecke.ul{bottom:12px;left:12px;border-bottom:1px solid;border-left:1px solid}
.ecke.ur{bottom:12px;right:12px;border-bottom:1px solid;border-right:1px solid}
#verw{position:fixed;bottom:100px;right:24px;z-index:6;font-size:8px;letter-spacing:1px;line-height:1.6;color:var(--dim);text-align:right}
#verw b{color:var(--gold)}
</style>
</head>
<body>
<canvas id="cv"></canvas>
<div id="kopf">
<h1>eyeMEmory · die 0 · v4</h1>
<div class="sub">ARBEIT ZU ARBEIT ZU ARBEIT · PATCH + DISPATCH · LIVE</div>
<div class="live">WIR MACHEN JA NIX · WIR ZEIGEN NUR DAS LIVE WAS ARBEITET · EINGANG MASSE → ARBEIT → ARBEIT → ÜBERGABE</div>
</div>
<div id="drache"><div class="wort zeigt" id="dracheWort">zeigt</div></div>
<div id="zahl"><div class="n" id="zahlN">0</div><div class="l" id="zahlL">von 3 billionen · e in e in e</div></div>
<div id="seiten">
<div id="links">
<div>achse · <span class="v">d e i n o r s u w</span></div>
<div>felder · <span class="v">9 × 9 = 81</span></div>
<div>ringe · <span class="v">3 · 9 · 81</span></div>
<div>modus · <span class="v" id="modusV">erabel</span></div>
</div>
<div id="rechts">
<div>tick · <span class="g" id="tick">0</span></div>
<div>schlag · <span class="p" id="schlag">0</span></div>
<div>wahrheit · <span class="r" id="wahrheit">—</span></div>
<div>masse · <span class="g" id="masse">0</span></div>
</div>
</div>
<div id="fluss">
<span class="amber" id="fEingang">EINGANG MASSE</span>
<span class="on" id="fPatch">PATCH</span>
<span id="fArb1">ARBEIT 1 · TMP.1-9</span>
<span id="fArb2">ARBEIT 2 · TMP1.1-9.9</span>
<span class="on" id="fDisp">DISPATCH ALLERLEI</span>
<span class="gold" id="fUeber">ÜBERGABE LIVE</span>
</div>
<div id="verw">
<div>4-FACH VERWALTUNG VERSCHACHTELT</div>
<div><b>SYS</b> Struktur · wer darf sehen</div>
<div>&nbsp;&nbsp;<b>TEM</b> Zeit · wann live</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;<b>ID</b> Identität · wer ist Agent</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>OP</b> GPU · SCHIEDS + AGENT · 1× FUNKTION</div>
</div>
<div id="fuss">zeigen · bändigen · verschanzen · <b>jede sekunde</b> · iki1uc · UNO A01 · uROOM</div>
<div class="ecke ol"></div><div class="ecke or"></div><div class="ecke ul"></div><div class="ecke ur"></div>
<script>
"use strict";
/* v4 FIX: Zeilennummern entfernt, PATCH+DISPATCH live eingebaut, 4-fach Verwaltung, GPU 1x Funktion */
const ACHSE=['d','e','i','n','o','r','s','u','w'];
const cv=document.getElementById('cv'),ctx=cv.getContext('2d');
let W,H,CX,CY;
function resize(){const dpr=Math.min(devicePixelRatio,2);W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;cv.style.width=W+'px';cv.style.height=H+'px';ctx.setTransform(dpr,0,0,dpr,0,0);CX=W/2;CY=H/2}
addEventListener('resize',resize);resize();
const S={t:0,tick:0,schlag:0,phase:'zeigt',phaseT:0,gedaechtnis:[],puls:0,seqIdx:0,GOLDEN:Math.PI*(3-Math.sqrt(5)),SUMME:2025,wahrheit:0,masse:0,patchOn:true,dispatchOn:true,gpuOn:true,activeRoom:'main'};
const PHASEN=[{name:'zeigt',dauer:4000,farbe:'#5cf0ff'},{name:'bändigt',dauer:4000,farbe:'#b388ff'},{name:'verschanzt',dauer:4000,farbe:'#2a3a4a'}];
const FELDER=[];
for(let r=0;r<9;r++)for(let c=0;c<9;c++)FELDER.push({r,c,id:ACHSE[r]+(c+1),wert:(r+1)*(c+1),hell:0,vx:(c-4),vy:(r-4)});
function schlag(){
  S.schlag++;
  const idx=Math.floor((S.schlag*S.GOLDEN*13)%81);
  const f=FELDER[idx];f.hell=1;
  S.gedaechtnis.push({id:f.id,zeit:Date.now(),idx});
  if(S.gedaechtnis.length>500)S.gedaechtnis.shift();
  const aktivSumme=S.gedaechtnis.reduce((a,g)=>a+FELDER[g.idx].wert,0);
  S.wahrheit=S.SUMME>0?(aktivSumme%S.SUMME)/S.SUMME:0;
  // --- PATCH + DISPATCH Kette ---
  S.masse++;
  const masseEv={type:'MASSE',id:f.id,wert:f.wert,idx};
  const patched=S.patchOn?patch(masseEv):masseEv;
  const arb1=arbeit1(patched);
  const arb2=arbeit2(arb1);
  const disp=S.dispatchOn?dispatch(arb2):arb2;
  uebergabe(disp);
}
function patch(ev){return {...ev,patched:true,fix:'e in e'}} // hotfix ohne stop
function arbeit1(ev){return {...ev,tmp:`TMP.${(ev.wert%9)+1}`,stage:'9.room'}}
function arbeit2(ev){const r=Math.floor(ev.wert/9),cc=ev.wert%9;return {...ev,tmp2:`TMP.${r+1}.${cc+1}`,stage:'81.room'}}
function dispatch(ev){
  const allerlei=['D','H','O','S','T','SYS','TEM','ID','OP','TΩ','XU','Φ4','O12'];
  const ziel=allerlei[ev.wert%allerlei.length];
  return {...ev,dispatch:ziel};
}
function uebergabe(ev){
  if(ev.wert%3!==0)return; // nur zeigen was arbeitet
  document.getElementById('zahlL').textContent=`${ev.id} · ${ev.tmp} → ${ev.tmp2} → ${ev.dispatch} · LIVE`;
  if(S.gpuOn) gpuSchiedsUndAgent(ev);
}
function gpuSchiedsUndAgent(state){
  // 1-fach als Funktion: Schiedsrichter + Agent gleichzeitig
  const check=state.wert>0&&state.wert<80; // referee
  if(check){ // agent
    document.getElementById('fUeber').style.boxShadow='0 0 12px #f0d080';
    setTimeout(()=>document.getElementById('fUeber').style.boxShadow='none',150);
    return true;
  }
  return false;
}
function phaseWeiter(){
  const i=PHASEN.findIndex(p=>p.name===S.phase);
  const next=PHASEN[(i+1)%PHASEN.length];
  S.phase=next.name;S.phaseT=0;
  const w=document.getElementById('dracheWort');
  w.classList.remove('zeigt','bändigt','verschanzt');w.classList.add(next.name);w.textContent=next.name;
}
let billionen=0;const ZIEL=3_000_000_000_000;
setInterval(()=>{billionen+=1_000_000_000;if(billionen>ZIEL)billionen=ZIEL;document.getElementById('zahlN').textContent=billionen.toLocaleString('de-DE')},3000);
setInterval(()=>{S.tick++;document.getElementById('tick').textContent=S.tick;document.getElementById('schlag').textContent=S.schlag;document.getElementById('masse').textContent=S.masse;document.getElementById('wahrheit').textContent=`${(S.wahrheit*100).toFixed(1)}% · ${S.gedaechtnis.length}`},1000);
setInterval(schlag,250);
function zeichne(){
  requestAnimationFrame(zeichne);S.t+=16;S.phaseT+=16;
  const phase=PHASEN.find(p=>p.name===S.phase);if(S.phaseT>=phase.dauer)phaseWeiter();
  ctx.fillStyle='rgba(2,6,10,0.22)';ctx.fillRect(0,0,W,H);
  const atem=0.5+0.5*Math.sin(S.t*0.0008);const basisR=Math.min(W,H)*0.13;const augenR=basisR*(1+atem*0.05);
  const irisGlut=ctx.createRadialGradient(CX,CY,0,CX,CY,augenR);irisGlut.addColorStop(0,hexAlpha(phase.farbe,0.55));irisGlut.addColorStop(0.6,hexAlpha(phase.farbe,0.15));irisGlut.addColorStop(1,hexAlpha(phase.farbe,0));ctx.beginPath();ctx.arc(CX,CY,augenR,0,Math.PI*2);ctx.fillStyle=irisGlut;ctx.fill();
  ctx.beginPath();ctx.arc(CX,CY,augenR,0,Math.PI*2);ctx.strokeStyle=hexAlpha(phase.farbe,0.35);ctx.lineWidth=1;ctx.stroke();
  const pupilleR=augenR*(0.22+0.06*Math.sin(S.t*0.003));ctx.beginPath();ctx.arc(CX,CY,pupilleR,0,Math.PI*2);ctx.fillStyle='#02060a';ctx.fill();ctx.strokeStyle=hexAlpha(phase.farbe,0.8);ctx.lineWidth=1.2;ctx.stroke();
  ctx.beginPath();ctx.arc(CX,CY,2.5,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();
  const achseR=augenR*2.1;ACHSE.forEach((b,i)=>{const a=(i/9)*Math.PI*2-Math.PI/2+S.t*0.00015;const x=CX+Math.cos(a)*achseR,y=CY+Math.sin(a)*achseR;ctx.beginPath();ctx.arc(x,y,3,0,Math.PI*2);ctx.fillStyle=hexAlpha(phase.farbe,0.6);ctx.fill();ctx.font='11px Consolas';ctx.fillStyle=hexAlpha(phase.farbe,0.85);ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(b,x,y+14)});
  const feldStep=7;FELDER.forEach(f=>{f.hell=Math.max(0,f.hell-0.02);const x=CX+f.vx*feldStep,y=CY+f.vy*feldStep;const sicht=0.05+f.hell*0.95;if(sicht<0.08)return;ctx.beginPath();ctx.arc(x,y,1.2+f.hell*1.8,0,Math.PI*2);ctx.fillStyle=f.hell>0.1?hexAlpha('#39ff88',f.hell):hexAlpha(phase.farbe,0.15);ctx.fill()});
  const dracheStärke=S.phase==='zeigt'?1.0:S.phase==='bändigt'?0.6:0.15;const dracheR=augenR*(1.6+0.4*Math.sin(S.t*0.0006));for(let i=0;i<24;i++){const a=(i/24)*Math.PI*2+S.t*0.0004;const rr=dracheR+Math.sin(S.t*0.001+i*0.5)*6;const x=CX+Math.cos(a)*rr,y=CY+Math.sin(a)*rr;const stärke=dracheStärke*(0.4+0.6*Math.sin(i*0.3));if(stärke<0.05)continue;ctx.beginPath();ctx.arc(x,y,2+stärke*2.5,0,Math.PI*2);ctx.fillStyle=hexAlpha(phase.farbe,stärke*0.7);ctx.fill()}
  S.puls+=0.02;if(S.puls>1)S.puls-=1;const pulsR=augenR*3*(1-S.puls);ctx.beginPath();ctx.arc(CX,CY,pulsR,0,Math.PI*2);ctx.strokeStyle=hexAlpha('#f0d080',0.12*(1-S.puls));ctx.lineWidth=0.8;ctx.stroke();
}
function hexAlpha(hex,a){const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return `rgba(${r},${g},${b},${a})`}
document.getElementById('zahlN').textContent='0';
zeichne();
console.log('eyeMEmory v4 · ARBEIT ZU ARBEIT · PATCH+DISPATCH LIVE · 4-fach Verwaltung · GPU 1x Funktion');
window.EYE={state:()=>({tick:S.tick,schlag:S.schlag,phase:S.phase,gedaechtnis:S.gedaechtnis.length,billionen,wahrheit:S.wahrheit,masse:S.masse}),felder:()=>FELDER,achse:()=>ACHSE,patch,dispatch,arbeit1,arbeit2,uebergabe,gpuSchiedsUndAgent};
</script>
</body>
</html>
