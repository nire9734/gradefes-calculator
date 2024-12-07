"use strict";BigNumber.config({ROUNDING_MODE:BigNumber.ROUND_CEIL}),BigNumber.config({ROUNDING_MODE:BigNumber.ROUND_FLOOR});const appVersion="0.0.0",positions=["Leader","Vocal","Center","Dance","Visual"],baseStats=["Vo","Da","Vi","Me"],numAbilities=40,numAdditionalEffectsAccordions=3;function linkscroll(e){document.getElementById(e).scrollIntoView({behavior:"smooth",block:"start"})}function calculateStatus(){let e={Leader:{},Vocal:{},Center:{},Dance:{},Visual:{}},t={Leader:{},Vocal:{},Center:{},Dance:{},Visual:{}},a={Vo:BigNumber(0),Da:BigNumber(0),Vi:BigNumber(0),Me:BigNumber(0)},l=BigNumber(1),i={Me:BigNumber(document.getElementById("currentMental").value),Attention:BigNumber(document.getElementById("currentAttention").value),MemoryGauge:BigNumber(document.getElementById("currentMemoryGauge").value),EvasionRate:BigNumber(document.getElementById("currentEvasionRate").value)};console.log(i);const n=["Vo","Da","Vi"],o=document.getElementById("tab2").checked?"Center":document.getElementById("appealExecutor").value,u=BigNumber(document.getElementById("turnCount").value),m={Leader:{Vo:BigNumber(0),Da:BigNumber(0),Vi:BigNumber(0),Me:BigNumber(100)},Vocal:{Vo:BigNumber(100),Da:BigNumber(0),Vi:BigNumber(0),Me:BigNumber(0)},Center:{Vo:BigNumber(50),Da:BigNumber(50),Vi:BigNumber(50),Me:BigNumber(0)},Dance:{Vo:BigNumber(0),Da:BigNumber(100),Vi:BigNumber(0),Me:BigNumber(0)},Visual:{Vo:BigNumber(0),Da:BigNumber(0),Vi:BigNumber(100),Me:BigNumber(0)}};positions.forEach((i=>{const n=document.getElementById(`${i.toLowerCase()}MemoryLevel`).value;if("Center"!==i){const e=[BigNumber(0),BigNumber(0),BigNumber(.02),BigNumber(.03),BigNumber(.05),BigNumber(.075)];l=l.plus(e[parseInt(n)])}const o=document.getElementById(`${i.toLowerCase()}UnitBonus`).checked?BigNumber(20):BigNumber(0);baseStats.forEach((l=>{const n=BigNumber(document.getElementById(`${i.toLowerCase()}-${l.toLowerCase()}`).value);BigNumber.config({ROUNDING_MODE:BigNumber.ROUND_CEIL});let u=BigNumber(0),r=BigNumber(0),c=BigNumber(0),s=BigNumber(0);document.querySelectorAll(`.${i.toLowerCase()}Ability`).forEach((e=>{const t=e.options[e.selectedIndex],a=t.getAttribute("data-type"),o=BigNumber(t.getAttribute("data-multiplier"));if("none"!==a)switch(a){case"allBaseStatsUp":u=u.plus(n.times(o).div(100).dp(0));break;case"basePositionBonus":m[i][l]>0&&(r=r.plus(o));break;case"positionSuitability":m[i][l]>0&&(r=r.plus("Center"===i?o.minus(5):o));break;case"vocalBasePositionBonus":m[i][l]>0&&"Vocal"===i&&(r=r.plus(o));break;case"allBaseStatsBonus":c=c.plus(o);break;case`${l.toLowerCase()}BaseStatBonus`:s=s.plus(o);break;case"roleModel":"Leader"===i&&(c=c.plus(o))}})),e[i][l]=n.plus(u);const p=n.plus(u).times(BigNumber.sum(m[i][l],r,c,s,o,100)).div(100).dp(0);t[i][l]=p,document.getElementById(`adjusted-${i.toLowerCase()}-${l.toLowerCase()}`).textContent=`${Number(p).toLocaleString()}`,a[l]=p.plus(a[l])}))})),baseStats.forEach((e=>{if("Me"!==e){const l=BigNumber.max(t.Leader[e],t.Vocal[e],t.Center[e],t.Visual[e],t.Dance[e]);a[e]=l.times(1.5).plus(a[e].times(.5)).dp(0)}document.getElementById(`unitTotal${e}`).textContent=`${Number(a[e]).toLocaleString()}`}));const r=BigNumber(document.getElementById("currentMental").value),c=BigNumber(r.div(a.Me));BigNumber.config({ROUNDING_MODE:BigNumber.ROUND_CEIL});let s=BigNumber(0),p=BigNumber(0);positions.forEach((e=>{document.querySelectorAll(`.${e.toLowerCase()}Ability`).forEach((e=>{const t=e.options[e.selectedIndex],a=t.getAttribute("data-type"),l=BigNumber(t.getAttribute("data-multiplier"));if("none"!==a)switch(a){case"appealScoreUp":s=s.plus(l);break;case"mentalHigh":s=s.plus(l.times(BigNumber.max(.2,c.times(1.6).minus(.6))));break;case"mentalLow":s=s.plus(l.times(BigNumber(1).minus(c.times(.8))));break;case"mentalist":s=s.plus(BigNumber(5).times(BigNumber.max(.2,c.times(1.6).minus(.6)))),s=s.plus(BigNumber(10).times(BigNumber(1).minus(c.times(.8))));break;case"smileArena":0===Number(document.getElementById("hitCount").value)&&(s=s.plus(l));break;case"startDash":s=s.plus(BigNumber.max(l.times(BigNumber(49).minus(u.times(4))).div(45),l.div(5)));break;case"slowStarter":s=s.plus(BigNumber.min(l.times(BigNumber(5).plus(u.times(4))).div(45),l));break;case"memoryHigh":s=s.plus(BigNumber.min(l,l.times(BigNumber(1).div(5).plus(i.MemoryGauge.times(4).div(500)))));break;case"memoryLow":s=s.plus(BigNumber.max(l.div(5),l.minus(i.MemoryGauge.times(l.times(4)).div(500))));break;case"romanticist":s=s.plus(BigNumber.min(BigNumber(10),BigNumber(10).times(BigNumber(1).div(5).plus(i.MemoryGauge.times(4).div(500))))),p=p.plus(5);break;case"twilights":s=s.plus(3),p=p.plus(5);break;case"memoryHighAndLow":s=s.plus(BigNumber.min(BigNumber(5),BigNumber(5).times(BigNumber(1).div(5).plus(i.MemoryGauge.times(4).div(500))))),s=s.plus(BigNumber.max(BigNumber(10).div(5),BigNumber(10).minus(i.MemoryGauge.times(BigNumber(10).times(4)).div(500))));break;case"memoryGaugeUp":p=p.plus(l)}}))}));let d={Vo:BigNumber(0),Da:BigNumber(0),Vi:BigNumber(0)};n.forEach((e=>{d[e]=BigNumber(document.getElementById(`${e.toLocaleLowerCase()}ActiveBuff`).value)})),BigNumber.config({ROUNDING_MODE:BigNumber.ROUND_FLOOR});let B={Vo:BigNumber(0),Da:BigNumber(0),Vi:BigNumber(0)};n.forEach((e=>{const t=BigNumber(document.getElementById(`${e.toLocaleLowerCase()}PassiveBuff`).value).plus(d[e]).plus(s).dp(0);B[e]=t})),document.querySelectorAll(".appealScore").forEach((e=>{e.innerHTML=""}));let g={Vo:BigNumber(0),Da:BigNumber(0),Vi:BigNumber(0)};function b(e){BigNumber.config({ROUNDING_MODE:BigNumber.ROUND_FLOOR});let a={Vo:BigNumber(0),Da:BigNumber(0),Vi:BigNumber(0)},i=BigNumber(document.getElementById(document.getElementById("tab1").checked?"liveSkillCoefficient":"memoryAppealCoefficient").value);const u="memoryAppealBom"===e?1:3;for(let m=1;m<=u;m++)if("memoryAppealBom"===e||document.getElementById(`${e}AccordionCheckbox${m}`).checked&&document.getElementById(`${e}AdditionalAppealButton${m}`).checked){const u="memoryAppealBom"!==e?document.getElementById(`${e}ReinforcementSelect${m}`).value:"none";let r={Vo:BigNumber(0),Da:BigNumber(0),Vi:BigNumber(0)};n.forEach((a=>{const n=t[o][a],c=BigNumber.sum(t.Leader[a],t.Vocal[a],t.Center[a],t.Dance[a],t.Visual[a]),p=BigNumber(document.getElementById(`${a.toLocaleLowerCase()}PassiveBuff`).value),B=a===u?BigNumber(2):BigNumber(1),g=BigNumber.sum(p,d[a].times(B),s);let b;console.log(g.toNumber());const y=document.getElementById("centerMemoryLevel").value;b="memoryAppealBom"===e?{1:BigNumber(.8),2:BigNumber(1),3:BigNumber(1.2),4:BigNumber(1.4),5:BigNumber(2)}[y]:BigNumber(document.getElementById(`${e}${a}AppealMultiplier${m}`).value);const v=n.times(1.5).plus(c.times(.5)).times(g.plus(100).div(100)).times(i).dp(0),N="memoryAppealBom"===e?v.times(b).dp(0).times(l).dp(0):v.times(b).dp(0);r[a]=r[a].plus(N)}));let c={Vo:BigNumber(0),Da:BigNumber(0),Vi:BigNumber(0)};if("memoryAppealBom"===e||"memoryAppeal"===e||document.getElementById(`${e}Target${m}`).checked)n.forEach((e=>{c[e]=BigNumber.sum(c[e],r[e],r.Vo,r.Da,r.Vi)}));else{const e=document.getElementById("appealTarget").value;c[e]=BigNumber.sum(c[e],r[e],r.Vo,r.Da,r.Vi)}console.log(e,c),n.forEach((e=>{a[e]=a[e].plus(c[e])}))}if("memoryAppealBom"!==e)for(let t=1;t<=3;t++)document.getElementById(`${e}AccordionCheckbox${t}`).checked&&document.getElementById(`${e}BuffGrantButton${t}`).checked&&n.forEach((a=>{d[a]=d[a].plus(BigNumber(document.getElementById(`${e}${a}Increase${t}`).value))}));n.forEach((t=>{const l="memoryAppealBom"===e||"memoryAppeal"===e?g[t].plus(a[t]):a[t];if("memoryAppealBom"===e)return void(g[t]=l);const i=document.getElementById(`${t.toLocaleLowerCase()}AppealScore`);if("memoryAppeal"===e)g[t]=l;else if("liveSkill"!==e){const e=document.createElement("div");e.textContent="+",i.appendChild(e)}const n=document.createElement("div");n.textContent=`${Number(l).toLocaleString()}`,i.appendChild(n)}))}document.getElementById("tab1").checked?(b("liveSkill"),document.getElementById("linkAppealcheckbox").checked&&b("linkAppeal")):(b("memoryAppealBom"),b("memoryAppeal"),document.getElementById("memorylLinkAppealcheckbox").checked&&b("memoryLinkAppeal"),document.getElementById("chargeAppealcheckbox").checked&&b("chargeAppeal")),n.forEach((t=>{document.getElementById(`appealExecutorStatus${t}`).textContent=Number(e[o][t]).toLocaleString(),document.getElementById(`displayBuff${t}`).textContent=`${Number(B[t]).toLocaleString()}%`}))}document.addEventListener("keydown",(function(e){const t=e.target;"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName&&"Enter"===e.key&&(calculateStatus(),linkscroll("resultSection"))})),document.addEventListener("DOMContentLoaded",(e=>{document.getElementById("versionDisplay").textContent="ver. 0.0.0";const t=[{type:"none",multiplier:"0",value:"なし"},{type:"positionSuitability",multiplier:"10",value:"ポジション適正〇"},{type:"positionSuitability",multiplier:"15",value:"ポジション適正◎"},{type:"basePositionBonus",multiplier:"5",value:"オールラウンダー〇"},{type:"basePositionBonus",multiplier:"10",value:"オールラウンダー◎"},{type:"slowStarter",multiplier:"20",value:"スロースターター"},{type:"startDash",multiplier:"10",value:"スタートダッシュ"},{type:"appealScoreUp",multiplier:"10",value:"パーフェクトリィ"},{type:"memoryHigh",multiplier:"10",value:"アピールUP(思い出高)"},{type:"memoryLow",multiplier:"20",value:"アピールUP(思い出低)"},{type:"allBaseStatsBonus",multiplier:"5",value:"スペシャリスト"},{type:"allBaseStatsUp",multiplier:"6",value:"基礎能力値UP(+6%)"},{type:"memoryHighAndLow",multiplier:"0",value:"アピールUP(思い出高&低)"},{type:"romanticist",multiplier:"10",value:"ロマンチスト"},{type:"mentalist",multiplier:"0",value:"メンタリスト"},{type:"roleModel",multiplier:"20",value:"ロールモデル"},{type:"vocalBasePositionBonus",multiplier:"10",value:"スペシャリスト(ボーカル)"},{type:"memoryGaugeUp",multiplier:"3",value:"思い出+(ノウハウ)"},{type:"memoryGaugeUp",multiplier:"5",value:"思い出++(ノウハウ)"},{type:"allBaseStatsBonus",multiplier:"1",value:"エキシビションマッチ"},{type:"allBaseStatsBonus",multiplier:"2",value:"エキシビションマッチ+"},{type:"allBaseStatsBonus",multiplier:"3",value:"エキシビションマッチ++"},{type:"appealScoreUp",multiplier:"2",value:"NEXT STEP"},{type:"voBaseStatBonus",multiplier:"3",value:"歌唱力のはばたき"},{type:"daBaseStatBonus",multiplier:"3",value:"安定感のきらめき"},{type:"viBaseStatBonus",multiplier:"3",value:"表現力のひろがり"},{type:"allBaseStatsBonus",multiplier:"3",value:"大いなる一歩"},{type:"appealScoreUp",multiplier:"2",value:"Rhythmic Diva"},{type:"smileArena",multiplier:"10",value:"スマイルアリーナ"},{type:"allBaseStatsBonus",multiplier:"5",value:"ラブレターのAnswer--"},{type:"mentalLow",multiplier:"10",value:"Dreaming my way"},{type:"memoryHigh",multiplier:"5",value:"流星スターランキング"},{type:"slowStarter",multiplier:"10",value:"トップスターは1曲だけ"},{type:"mentalHigh",multiplier:"5",value:"なんどでも唄おう"},{type:"appealScoreUp",multiplier:"3",value:"なないろ歌合戦"},{type:"appealScoreUp",multiplier:"3",value:"週刊プリズムメロディーズ"},{type:"appealScoreUp",multiplier:"3",value:"TOP SONGS"},{type:"allBaseStatsBonus",multiplier:"3",value:"エントリーライブ成功"},{type:"allBaseStatsBonus",multiplier:"5",value:"エキシビションマッチ成功"},{type:"appealScoreUp",multiplier:"5",value:"アピールUP(トワコレ)"},{type:"twilights",multiplier:"0",value:"思い出増加量UP&アピールUP(トワコレ)"},{type:"memoryGaugeUp",multiplier:"10",value:"思い出増加量UP(トワコレ)"},{type:"slowStarter",multiplier:"20",value:"アピール値最大20%UP(トワコレ)"},{type:"startDash",multiplier:"10",value:"アピール値最大10%UP(トワコレ)"},{type:"allBaseStatsUp",multiplier:"3",value:"基礎能力値UP(+3%)"},{type:"mentalLow",multiplier:"100",value:"マスフェス用"}];positions.forEach((e=>{for(let a=0;a<40;a+=1){const l=document.createElement("select");l.classList.add(`${e.toLowerCase()}Ability`),l.id=`${e.toLowerCase()}Ability${a}`,t.forEach((e=>{const t=document.createElement("option");t.setAttribute("data-type",e.type),t.setAttribute("data-multiplier",e.multiplier),t.textContent=e.value,l.appendChild(t)})),document.getElementById(`${e.toLowerCase()}AbilitiesContainer`).appendChild(l)}}));document.querySelectorAll(".aditionalEffectAccordion").forEach((e=>{const t=e.id;function a(e){const a=document.createElement("div");a.className="accordionItem";const l=document.createElement("label");l.className="accordionTitle";const i=document.createElement("p");i.textContent=`追加効果${e}`;const n=document.createElement("input");n.type="checkbox",n.id=`${t}AccordionCheckbox${e}`,n.className="accordionCheckbox",l.appendChild(i),l.appendChild(n);const o=document.createElement("div");o.className="accordionContent";const u=document.createElement("div");u.className="tabs";const m=document.createElement("div");m.className="tabButtons";const r=document.createElement("input");r.type="radio",r.id=`${t}AdditionalAppealButton${e}`,r.name=`${t}AdditionalEffect${e}`,r.className="tabInput",r.dataset.tab=`${t}AdditionalAppealTab${e}`,r.checked=!0;const c=document.createElement("label");c.textContent="アピール",c.htmlFor=`${t}AdditionalAppealButton${e}`;const s=document.createElement("input");s.id=`${t}BuffGrantButton${e}`,s.type="radio",s.name=`${t}AdditionalEffect${e}`,s.className="tabInput",s.dataset.tab=`${t}BuffGrantTab${e}`;const p=document.createElement("label");p.textContent="ステータス効果付与",p.htmlFor=`${t}BuffGrantButton${e}`,m.appendChild(r),m.appendChild(c),m.appendChild(s),m.appendChild(p);const d=document.createElement("div");d.className="tabContents";const B=document.createElement("div");if(B.id=`${t}AdditionalAppealTab${e}`,B.className="tabContent active","memoryAppeal"!==t){const a=document.createElement("label");a.textContent="全観客にアピール: ";const l=document.createElement("input");l.type="checkbox",l.id=`${t}Target${e}`,a.appendChild(l),B.appendChild(a)}function g(e,t,a){const l=document.createElement("label");l.textContent=e;const i=document.createElement("div");i.id=t,l.appendChild(i),a.appendChild(l)}["Vo","Da","Vi"].forEach((a=>{const l=document.createElement("div");l.className="sliderContainer";const i=document.createElement("label");i.textContent=`${a}.アピール倍率:`,i.htmlFor=`${t}${a}AppealMultiplier${e}`;const n=document.createElement("input");n.type="range",n.id=`${t}${a}AppealMultiplier${e}`,n.className="appealMultiplierSlider",n.dataset.target=`${t}${a}AppealMultiplierValue${e}`,n.min="0",n.max="10",n.step="0.1",n.value="0";const o=document.createElement("div");o.id=`${t}${a}AppealMultiplierValue${e}`,o.className="sliderValue",o.textContent="0",l.appendChild(i),l.appendChild(n),l.appendChild(o),l.appendChild(document.createTextNode("倍")),B.appendChild(l)})),g("アピール倍率変動: ",`${t}AppealMultiplierChange${e}`,B),g("強化: ",`${t}AppealReinforcement${e}`,B);const b=document.createElement("div");b.id=`${t}BuffGrantTab${e}`,b.className="tabContent";const y=["Vo.バフ増加量(%)","Da.バフ増加量(%)","Vi.バフ増加量(%)","メンタル回復量(%)","思い出ゲージ増加量(%)","注目度上昇量(%)","回避率上昇量(%)"],v=["Vo","Da","Vi","Me","MemoryGauge","Attention","EvasionRate"];return y.forEach(((a,l)=>{const i=document.createElement("div"),n=document.createElement("label");n.textContent=`${a}: `;const o=document.createElement("input");if(o.type="number",o.value="0",o.required=!0,o.id=`${t}${v[l]}Increase${e}`,n.appendChild(o),i.appendChild(n),b.appendChild(i),[`${y[0]}`,`${y[1]}`,`${y[2]}`].includes(a)){const a=document.createElement("label");a.textContent="[Me減少値が多いほど効果UP]: ";const n=document.createElement("input");n.type="checkbox",n.id=`${t}${["Vo","Da","Vi"][l]}MentalLossEnhancesEffect${e}`,a.appendChild(n),i.appendChild(a)}if(a===`${y[3]}`){const a=document.createElement("label");a.textContent="[超過分は思い出ゲージに変換]: ";const l=document.createElement("input");l.type="checkbox",l.id=`${t}ExcessMemoryConversion${e}`,a.appendChild(l),i.appendChild(a)}})),d.appendChild(B),d.appendChild(b),u.appendChild(m),u.appendChild(d),o.appendChild(u),a.appendChild(l),a.appendChild(o),a}for(let l=1;l<=3;l++){const i=a(l);e.appendChild(i);const n=[{value:"none",text:"なし"},{value:"Vo",text:"Vocal強化"},{value:"Da",text:"Dance強化"},{value:"Vi",text:"Visual強化"}];function o(e,a,i){const n=document.createElement("select");n.id=`${t}${e}${l}`,i.forEach((e=>{const t=document.createElement("option");t.value=e.value,t.textContent=e.text,n.appendChild(t)})),document.getElementById(`${t}${a}${l}`).appendChild(n)}o("MultiplierSelect","AppealMultiplierChange",[{value:"1.0",text:"なし(固定)"},{value:"1.0",text:"興味無視"},{value:"1.0",text:"メンタルが多いほど効果UP"},{value:"1.0",text:"メンタルが少ないほど効果UP"},{value:"1.0",text:"思い出ゲージが多いほど効果UP"},{value:"1.0",text:"注目度が高いほど効果UP"},{value:"1.0",text:"注目度が低いほど効果UP"}]),o("ReinforcementSelect","AppealReinforcement",n)}}));document.querySelectorAll('input[type="range"]').forEach((e=>{e.addEventListener("input",(t=>{const a=e.dataset.target,l=document.getElementById(a);l&&(l.innerText=e.value)}))}));document.querySelectorAll(".tabInput").forEach((e=>{e.addEventListener("click",(()=>{Array.from(e.parentNode.nextElementSibling.children).forEach((e=>{e.classList.remove("active")}));const t=e.getAttribute("data-tab");document.getElementById(t).classList.add("active")}))}));const a=document.getElementById("currentMemoryGauge");a.addEventListener("blur",(()=>{const e=a.value;e&&(a.value=parseFloat(e).toFixed(1))}))})),window.addEventListener("beforeunload",(function(e){e.preventDefault(),e.returnValue=""}));const fields=["turnCount","currentMemoryGauge","currentMental","currentEvasionRate","hitCount","healCount","voPassiveBuff","daPassiveBuff","viPassiveBuff","voActiveBuff","daActiveBuff","viActiveBuff"];function saveFormData(){if(confirm("入力したデータをJSON形式でダウンロードしますか？")){let e={appInfo:{},appData:{idols:{},scene:{},appeal:{}}};e.appInfo={appName:"グレフェス計算機",version:"0.0.0"},positions.forEach((t=>{e.appData.idols[t]={memoryLevel:document.getElementById(`${t.toLowerCase()}MemoryLevel`).value,baseStats:{Vo:parseInt(document.getElementById(`${t.toLowerCase()}-vo`).value),Da:parseInt(document.getElementById(`${t.toLowerCase()}-da`).value),Vi:parseInt(document.getElementById(`${t.toLowerCase()}-vi`).value),Me:parseInt(document.getElementById(`${t.toLowerCase()}-me`).value)},abilities:[],unitBonus:document.getElementById(`${t.toLowerCase()}UnitBonus`).checked},document.querySelectorAll(`.${t.toLowerCase()}Ability`).forEach((a=>{const l=a.options[a.selectedIndex].value;e.appData.idols[t].abilities.push(l)}))})),fields.forEach((t=>{const a=document.getElementById(t).value;e.appData.scene[t]=a}));const t=JSON.stringify(e,null,2),a=new Blob([t],{type:"application/json"}),l=document.createElement("a");l.href=URL.createObjectURL(a),l.download="data.json",l.click(),URL.revokeObjectURL(l.href)}}function loadFormData(){const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=e=>{const t=e.target.files[0];if(t){const e=new FileReader;e.onload=e=>{const t=JSON.parse(e.target.result);"グレフェス計算機"===t.appInfo.appName?(positions.forEach((e=>{document.getElementById(`${e.toLowerCase()}MemoryLevel`).value=t.appData.idols[e].memoryLevel||1,document.getElementById(`${e.toLowerCase()}MemoryLevel`).dispatchEvent(new Event("input")),baseStats.forEach((a=>{document.getElementById(`${e.toLowerCase()}-${a.toLowerCase()}`).value=t.appData.idols[e].baseStats[a]||""}));for(let a=0;a<40;a++){const l=document.getElementById(`${e.toLowerCase()}Ability${a}`),i=t.appData.idols[e].abilities[a],n=Array.from(l.options).some((e=>e.value===i));l.value=n?i:"なし"}document.getElementById(`${e.toLowerCase()}UnitBonus`).checked=t.appData.idols[e].unitBonus||!1})),fields.forEach((e=>{const a=t.appData.scene[e]||0;document.getElementById(e).value=a})),calculateStatus()):alert("対応していないファイルです。")},e.readAsText(t)}},e.click()}