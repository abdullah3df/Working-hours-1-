/* ========= Firebase (compat) ========= */
const firebaseConfig = {
  apiKey: "AIzaSyBpzQ4GRDzdYCuMvsj3rrWN8Ck0GLHiB2g",
  authDomain: "saaati-pro.firebaseapp.com",
  projectId: "saaati-pro",
  storageBucket: "saaati-pro.firebasestorage.app",
  messagingSenderId: "719485178559",
  appId: "1:719485178559:web:56460b57bb0560d8496c0a",
  measurementId: "G-2KBHPQP07X"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(()=>{});

/* ========= I18N ========= */
const I18N = {
  ar:{dir:'rtl',brand:'ساعتي',nav:{menu:'القائمة',nav:'التنقل',day:'اليوم',month:'الشهري',settings:'الإعدادات',export:'تصدير',pref:'التفضيلات',acct:'الحساب'},day:{title:'الإدخال اليومي',hint:'أدخل البداية والنهاية والاستراحة. الحفظ تلقائي محليًا.',date:'تاريخ',start:'🟢 دخول',end:'🔴 خروج',break:'☕️ استراحة (دقيقة)',k1:'صافي اليوم',k2:'إضافي اليوم',k3:'أساس اليوم (س)',kWork:'عدد ساعات العمل'},settings:{title:'الإعدادات',hint:'اضبط القيم الافتراضية.',daily:'أساس اليوم (ساعات)',brdef:'استراحة افتراضية (دقيقة)',apply:'حفظ'},month:{title:'ملخص شهري',pick:'اختر الشهر',m1:'مجموع الشهر',m2:'أيام مسجلة',m3:'معدل اليوم',close:'إغلاق',refresh:'تحديث',thead:['التاريخ','البداية','النهاية','استراحة','الصافي','إضافي'],notesTitle:'ملاحظات',notesHead:['التاريخ','الحالة','سبب / ملاحظة','ملاحظة المهمة']},export:{title:'تصدير',scope:'النطاق',format:'الصيغة',optDay:'اليوم',optMonth:'الشهر',optBi:'أسبوعين',png:'صورة (PNG)',json:'JSON',cancel:'إلغاء',do:'تصدير',lang:'لغة التصدير',bwStart:'بداية الأسبوعين'},ui:{dark:'الوضع الداكن'} ,status:{label:'حالة اليوم',vals:{work:'عمل',vacation:'إجازة',sick:'مرض',absent:'غياب'},reason:'سبب / ملاحظة',task:'ملاحظة مهمة'},confirm:{title:'حفظ التغييرات؟',body:'قمت بإجراء تعديلات. هل تريد حفظها؟',yes:'نعم',no:'لا'}},
  en:{dir:'ltr',brand:'Saaati',nav:{menu:'Menu',nav:'Navigation',day:'Day',month:'Monthly',settings:'Settings',export:'Export',pref:'Preferences',acct:'Account'},day:{title:'Daily Entry',hint:'Enter start, end and break. Autosaved locally.',date:'Date',start:'🟢 Clock In',end:'🔴 Clock Out',break:'☕️ Break (min)',k1:'Net Today',k2:'Overtime',k3:'Daily Base (h)',kWork:'Work Hours'},settings:{title:'Settings',hint:'Adjust defaults.',daily:'Daily Base (hours)',brdef:'Default Break (min)',apply:'Save'},month:{title:'Monthly Summary',pick:'Pick month',m1:'Month Total',m2:'Logged Days',m3:'Avg/Day',close:'Close',refresh:'Refresh',thead:['Date','Start','End','Break','Net','OT'],notesTitle:'Notes',notesHead:['Date','Status','Reason / Note','Task Note']},export:{title:'Export',scope:'Scope',format:'Format',optDay:'Day',optMonth:'Month',optBi:'Two Weeks',png:'Image (PNG)',json:'JSON',cancel:'Cancel',do:'Export',lang:'Export Language',bwStart:'Two Weeks Start'},ui:{dark:'Dark mode'},status:{label:'Day Status',vals:{work:'Work',vacation:'Vacation',sick:'Sick',absent:'Absent (Other)'},reason:'Reason / Note',task:'Task Note'},confirm:{title:'Save changes?',body:'You made changes. Do you want to save them?',yes:'Yes',no:'No'}},
  de:{dir:'ltr',brand:'Meine Stunden',nav:{menu:'Menü',nav:'Navigation',day:'Tag',month:'Monat',settings:'Einstellungen',export:'Export',pref:'Einstellungen',acct:'Konto'},day:{title:'Tägliche Eingabe',hint:'Start, Ende und Pause. Lokal automatisch gespeichert.',date:'Datum',start:'🟢 Einchecken',end:'🔴 Auschecken',break:'☕️ Pause (Min.)',k1:'Netto heute',k2:'Überstunden',k3:'Tages-Soll (Std.)',kWork:'Arbeitsstunden'},settings:{title:'Einstellungen',hint:'Standardwerte anpassen.',daily:'Tages-Soll (Std.)',brdef:'Standardpause (Min.)',apply:'Speichern'},month:{title:'Monatsübersicht',pick:'Monat wählen',m1:'Monatssumme',m2:'Erfasste Tage',m3:'Schnitt/Tag',close:'Schließen',refresh:'Aktualisieren',thead:['Datum','Start','Ende','Pause','Netto','ÜSt'],notesTitle:'Notizen',notesHead:['Datum','Status','Grund / Notiz','Aufgaben-Notiz']},export:{title:'Export',scope:'Bereich',format:'Format',optDay:'Tag',optMonth:'Monat',optBi:'Zwei Wochen',png:'Bild (PNG)',json:'JSON',cancel:'Abbrechen',do:'Exportieren',lang:'Exportsprache',bwStart:'Zwei-Wochen Start'},ui:{dark:'Dunkelmodus'},status:{label:'Tagesstatus',vals:{work:'Arbeit',vacation:'Urlaub',sick:'Krank',absent:'Abwesend'},reason:'Grund / Notiz',task:'Aufgaben-Notiz'},confirm:{title:'Änderungen speichern?',body:'Sie haben Änderungen vorgenommen. Möchten Sie diese speichern?',yes:'Ja',no:'Nein'}}
};
const LS_LANG='saaati_lang';
let currentLang = localStorage.getItem(LS_LANG) || 'en';

/* ========= Refs ========= */
const $ = id=>document.getElementById(id);
const menuToggle=$('menuToggle'), menuDrawer=$('menuDrawer'), brandTxt=$('brandTxt'), userPill=$('userPill');
const navTitle=$('navTitle'), prefTitle=$('prefTitle'), acctTitle=$('acctTitle'), lblTheme=$('lblTheme');
const mnuDay=$('mnuDay'), mnuMonth=$('mnuMonth'), mnuSettings=$('mnuSettings'), mnuExport=$('mnuExport'), authBtn=$('authBtn');
const dayCard=$('dayCard'), settingsCard=$('settingsCard');
const titleDay=$('titleDay'), hintDay=$('hintDay'), lblDate=$('lblDate'), lblStart=$('lblStart'), lblEnd=$('lblEnd'), lblBreak=$('lblBreak');
const titleSettings=$('titleSettings'), hintSettings=$('hintSettings'), lblDaily=$('lblDaily'), lblBreakDef=$('lblBreakDef'), applySettings=$('applySettings');
const titleMonth=$('titleMonth'), lblPickMonth=$('lblPickMonth'), refreshMonth=$('refreshMonth'), closeMonth=$('closeMonth'), monthModal=$('monthModal'), monthPick=$('monthPick'), monthArea=$('monthArea'), notesArea=$('notesArea'), mTotal=$('mTotal'), mDays=$('mDays'), mAvg=$('mAvg');
const titleExport=$('titleExport'), lblScope=$('lblScope'), lblFormat=$('lblFormat'), exportModal=$('exportModal'), expScope=$('expScope'), expFormat=$('expFormat'), expLang=$('expLang'), lblLang=$('lblLang'), biweekWrap=$('biweekWrap'), bwStart=$('bwStart'), closeExport=$('closeExport'), doExport=$('doExport');
const dayDate=$('dayDate'), dayStart=$('dayStart'), dayEnd=$('dayEnd'), dayBreak=$('dayBreak'), dayStatus=$('dayStatus'), dayReason=$('dayReason'), taskNote=$('taskNote'), reasonWrap=$('reasonWrap');
const dayName=$('dayName'), stDaily=$('stDaily'), stBreak=$('stBreak'), dNet=$('dNet'), dOT=$('dOT'), dBase=$('dBase'), kWorkTitle=$('kWorkTitle'), dWorkHours=$('dWorkHours');
const langRow=$('langRow'), darkToggle=$('darkToggle'), toast=$('toast');

/* ========= Utils ========= */
function h2m(h){if(!h)return 0; const [H,M]=h.split(':').map(Number); return H*60+(M||0);}
function m2h(m){m=Math.max(0,Math.floor(m)); const hh=Math.floor(m/60), mm=m%60; return `${hh}:${String(mm).padStart(2,'0')}`;}
function showToast(msg){ toast.textContent = msg; toast.classList.add('show'); setTimeout(()=> toast.classList.remove('show'), 1200); }

/* ========= i18n ========= */
function setActiveLangChip(lang){ [...langRow.querySelectorAll('.lang-chip')].forEach(ch=>{ ch.dataset.active = (ch.dataset.lang===lang) ? 'true' : 'false'; }); }
function setLang(lang){
  currentLang=lang; const L=I18N[lang]||I18N.en;
  document.documentElement.lang=lang; document.documentElement.dir=L.dir; document.body.dir=L.dir;
  brandTxt.textContent=L.brand;

  menuToggle.textContent=L.nav.menu; navTitle.textContent=L.nav.nav; prefTitle.textContent=L.nav.pref; acctTitle.textContent=L.nav.acct;
  mnuDay.textContent='📅 '+L.nav.day; mnuMonth.textContent='🗓️ '+L.nav.month; mnuSettings.textContent='⚙️ '+L.nav.settings; mnuExport.textContent='📦 '+L.nav.export;
  lblTheme.textContent=L.ui.dark;

  titleDay.textContent=L.day.title; hintDay.textContent=L.day.hint; lblDate.textContent=L.day.date; lblStart.textContent=L.day.start; lblEnd.textContent=L.day.end; lblBreak.textContent=L.day.break;
  $('k1').textContent=L.day.k1; kWorkTitle.textContent=L.day.kWork; $('k2').textContent=L.day.k2; $('k3').textContent=L.day.k3;

  let lblStatusEl = $('lblStatus'); if(!lblStatusEl){ lblStatusEl = document.createElement('label'); lblStatusEl.id='lblStatus'; dayStatus.parentElement.prepend(lblStatusEl); }
  lblStatusEl.textContent=L.status.label; reasonWrap.querySelector('label').textContent=L.status.reason; $('lblTaskNote').textContent=L.status.task;
  const map=L.status.vals; dayStatus.options[0].text=map.work; dayStatus.options[1].text=map.vacation; dayStatus.options[2].text=map.sick; dayStatus.options[3].text=map.absent;

  $('csTitle').textContent=L.confirm.title; $('csBody').textContent=L.confirm.body; $('csOk').textContent=L.confirm.yes; $('csCancel').textContent=L.confirm.no;

  titleSettings.textContent=L.settings.title; hintSettings.textContent=L.settings.hint; lblDaily.textContent=L.settings.daily; lblBreakDef.textContent=L.settings.brdef; applySettings.textContent=L.settings.apply;

  titleMonth.textContent=L.month.title; lblPickMonth.textContent=L.month.pick; $('mk1').textContent=L.month.m1; $('mk2').textContent=L.month.m2; $('mk3').textContent=L.month.m3; refreshMonth.textContent=L.month.refresh; closeMonth.textContent=L.month.close;

  titleExport.textContent=L.export.title; lblScope.textContent=L.export.scope; lblFormat.textContent=L.export.format;
  expScope.options[0].text=L.export.optDay; expScope.options[1].text=L.export.optMonth; expScope.options[2].text=L.export.optBi;
  expFormat.options[0].text=L.export.png; expFormat.options[1].text=L.export.json;
  closeExport.textContent=L.export.cancel; doExport.textContent=L.export.do; lblLang.textContent=L.export.lang; $('lblBwStart').textContent=L.export.bwStart;

  authBtn.textContent = (auth.currentUser?(lang==='de'?'Abmelden':lang==='ar'?'تسجيل الخروج':'Sign out'):(lang==='de'?'Anmelden':lang==='ar'?'تسجيل':'Sign in'));
  localStorage.setItem(LS_LANG,lang); setActiveLangChip(lang); updateDayName(); if(monthArea.dataset.built==='1'){buildMonthTableHead(lang);}
}

/* ========= Settings / Compute ========= */
function loadSettings(){const s=JSON.parse(localStorage.getItem('settings')||'{}'); stDaily.value=s.daily??8; stBreak.value=s.break??30; dBase.textContent=String(stDaily.value);}
function saveSettings(){const s={daily:parseFloat(stDaily.value||8),break:parseInt(stBreak.value||30,10)}; localStorage.setItem('settings',JSON.stringify(s)); dBase.textContent=String(s.daily); showToast(currentLang==='ar'?'تم الحفظ ✅': currentLang==='de'?'Gespeichert ✅':'Saved ✅');}
function updateDayName(){const lang=currentLang; if(!dayDate.value){try{dayDate.valueAsDate=new Date();}catch{dayDate.value=new Date().toISOString().slice(0,10);} } try{const fmt=new Intl.DateTimeFormat(lang==='ar'?'ar-EG':lang==='de'?'de-DE':'en-GB',{weekday:'long'}); dayName.textContent=fmt.format(new Date(dayDate.value));}catch{dayName.textContent='—';}}
function compute(){
  const base=Math.round(parseFloat(stDaily.value||8)*60);
  const s=dayStart.value,e=dayEnd.value,br=Math.max(0, parseInt(dayBreak.value||0,10) || 0);
  if(!s||!e){ dNet.textContent='0:00'; dOT.textContent='0:00'; dWorkHours.textContent='0:00'; return; }
  let sm=h2m(s), em=h2m(e); if(em<sm) em+=1440;
  const net=Math.max(0,(em-sm)-br); const ot=Math.max(0,net-base);
  dNet.textContent=m2h(net); dOT.textContent=m2h(ot); dBase.textContent=String(stDaily.value||8); dWorkHours.textContent=m2h(net);
}

/* ========= Save/Load + Confirm ========= */
function captureForm(){ return { date:dayDate.value, start:dayStart.value||'', end:dayEnd.value||'', break:parseInt(dayBreak.value||0,10), status:dayStatus.value||'work', reason:dayReason.value||'', taskNote:taskNote.value||'' }; }
function fillForm(p){ dayStart.value=p.start||''; dayEnd.value=p.end||''; dayBreak.value=p.break??(stBreak.value||30); dayStatus.value=p.status||'work'; dayReason.value=p.reason||''; taskNote.value=p.taskNote||''; reasonWrap.style.display = (dayStatus.value==='work') ? 'none' : 'block'; compute(); }
let lastSaved = null; let confirmOpen = false;
const csModal = $('confirmSaveModal'); const csOk=$('csOk'); const csCancel=$('csCancel');
function openConfirm(){ if(confirmOpen) return; confirmOpen=true; csModal.classList.add('open'); csModal.setAttribute('aria-hidden','false'); }
function closeConfirm(){ confirmOpen=false; csModal.classList.remove('open'); csModal.setAttribute('aria-hidden','true'); }
function saveDayLocal(){ try{ const p=captureForm(); localStorage.setItem('day-'+p.date,JSON.stringify(p)); lastSaved = JSON.parse(JSON.stringify(p)); showToast(currentLang==='ar'?'تم الحفظ ✅': currentLang==='de'?'Gespeichert ✅':'Saved ✅'); }catch(e){ alert('Save error: '+e?.message); } }
function loadDay(){ const raw=localStorage.getItem('day-'+dayDate.value); if(raw){ try{ lastSaved = JSON.parse(raw); fillForm(lastSaved); } catch{ lastSaved = captureForm(); } } else { lastSaved = {date:dayDate.value,start:'',end:'',break:parseInt(stBreak.value||30,10),status:'work',reason:'',taskNote:''}; fillForm(lastSaved); }}

/* ========= Month / Notes ========= */
function buildMonthTableHead(lang){const L=I18N[lang]; const thead=monthArea.querySelector('thead'); if(thead){thead.innerHTML=`<tr>${L.month.thead.map(h=>`<th>${h}</th>`).join('')}</tr>`;}}
function buildNotesTable(lang, annotations){
  const L=I18N[lang];
  if(!annotations.length){ notesArea.innerHTML=''; return; }
  const head=L.month.notesHead;
  let html=`<h3 style="margin:10px 0">${L.month.notesTitle}</h3><table class="table note-table"><thead><tr>${head.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>`;
  annotations.forEach(a=>{ html += `<tr><td>${a.date}</td><td><span class="badge-note">${a.statusLabel}</span></td><td>${a.reason||'-'}</td><td>${a.taskNote||'-'}</td></tr>`; });
  html += `</tbody></table>`; notesArea.innerHTML = html;
}
function openMonth(){if(!monthPick.value){monthPick.value=dayDate.value.slice(0,7);} monthModal.classList.add('open'); monthModal.setAttribute('aria-hidden','false'); refreshMonthSummary();}
function refreshMonthSummary(){
  const month=monthPick.value||dayDate.value.slice(0,7); const [y,mo]=month.split('-').map(Number);
  const first=new Date(y,mo-1,1), last=new Date(y,mo,0); const baseDay=Math.round(parseFloat(stDaily.value||8)*60);
  const rows=[]; let total=0, daysCount=0; const annotations=[];
  for(let d=new Date(first); d<=last; d.setDate(d.getDate()+1)){
    const key='day-'+d.toISOString().slice(0,10); const raw=localStorage.getItem(key); if(!raw) continue;
    try{
      const p=JSON.parse(raw);
      if(p.start&&p.end){
        let sm=h2m(p.start), em=h2m(p.end); if(em<sm) em+=1440;
        const net=Math.max(0,(em-sm)-parseInt(p.break||0,10)); const ot=Math.max(0,net-baseDay);
        rows.push([key.slice(4),p.start,p.end,p.break||0,m2h(net),m2h(ot)]); total+=net; daysCount++;
      }
      const nonWork = p.status && p.status!=='work'; const hasTask = p.taskNote && p.taskNote.trim().length>0;
      if(nonWork || hasTask){
        const L=I18N[currentLang], map=L.status.vals;
        annotations.push({ date:key.slice(4), statusLabel:(map && map[p.status||'work']) || (p.status||'work'), reason:p.reason||'', taskNote:p.taskNote||'' });
      }
    }catch{}
  }
  rows.sort((a,b)=>a[0]<b[0]?-1:1); annotations.sort((a,b)=>a.date<b.date?-1:1);
  let html=`<table class="table"><thead></thead><tbody>`; rows.forEach(r=> html+=`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td></tr>`); html+='</tbody></table>';
  monthArea.innerHTML=html; monthArea.dataset.built='1'; buildMonthTableHead(currentLang);
  mTotal.textContent=m2h(total); mDays.textContent=String(daysCount); mAvg.textContent=daysCount?m2h(Math.round(total/daysCount)):'0:00';
  buildNotesTable(currentLang, annotations);
}

/* ========= Export ========= */
async function nodeToPNGAndDownload(node,filename){if(typeof html2canvas==='undefined'){alert('Image export unavailable.');return;} document.body.appendChild(node); const canvas=await html2canvas(node,{scale:2,backgroundColor:'#ffffff'}); const dataURL=canvas.toDataURL('image/png'); const a=document.createElement('a'); a.href=dataURL; a.download=filename.endsWith('.png')?filename:`${filename}.png`; a.click(); node.remove();}
function tsNow(){ const d=new Date(), p=n=>String(n).padStart(2,'0'); return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`; }
function periodLabelFromDates(start,end){const p=n=>String(n).padStart(2,'0'); return `${start.getFullYear()}-${p(start.getMonth()+1)}-${p(start.getDate())}_to_${end.getFullYear()}-${p(end.getMonth()+1)}-${p(end.getDate())}`}
function buildDataForRange(d0, d1, basePerDay){
  const rows=[]; let total=0, daysCount=0; const annotations=[];
  for(let d=new Date(d0); d<=d1; d.setDate(d.getDate()+1)){
    const key='day-'+d.toISOString().slice(0,10); const raw=localStorage.getItem(key); if(!raw) continue;
    try{
      const p=JSON.parse(raw);
      if(p.start&&p.end){
        let sm=h2m(p.start), em=h2m(p.end); if(em<sm) em+=1440;
        const net=Math.max(0,(em-sm)-parseInt(p.break||0,10)); const ot=Math.max(0,net-basePerDay);
        rows.push([key.slice(4),p.start,p.end,p.break||0,m2h(net),m2h(ot)]); total+=net; daysCount++;
      }
      const nonWork = p.status && p.status!=='work'; const hasTask = p.taskNote && p.taskNote.trim().length>0;
      if(nonWork || hasTask){
        const lang=expLang.value, L=I18N[lang], map=L.status.vals;
        annotations.push({ date:key.slice(4), statusLabel:(map && map[p.status||'work']) || (p.status||'work'), reason:p.reason||'', taskNote:p.taskNote||'' });
      }
    }catch{}
  }
  rows.sort((a,b)=>a[0]<b[0]?-1:1); annotations.sort((a,b)=>a.date<b.date?-1:1); return {rows,total,daysCount,annotations};
}
function exportDayPNGWithLang(L){
  const node=document.createElement('div'); node.lang=expLang.value; node.dir=L.dir; node.style.cssText='font-family: system-ui, "Noto Naskh Arabic", Tahoma; padding:16px; color:#0f172a; background:#ffffff; width:760px;';
  let html=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><h2 style="margin:0">${L.day.title}</h2><div>${tsNow()}</div></div>
  <div style="margin:6px 0">${L.day.date}: <strong>${dayDate.value}</strong></div>
  <div style="margin:6px 0">${L.day.start.replace('🟢 ','')}: <strong>${dayStart.value||'-'}</strong> — ${L.day.end.replace('🔴 ','')}: <strong>${dayEnd.value||'-'}</strong> — ${L.day.break.replace('☕️ ','')}: <strong>${dayBreak.value||0}</strong></div>
  <div style="margin:6px 0">${L.day.k1}: <strong>${dNet.textContent}</strong> — ${L.day.k2}: <strong>${dOT.textContent}</strong> — ${L.settings?.daily || 'Daily Base (hours)'}: <strong>${stDaily.value}</strong></div>`;
  const map=L.status?.vals; const statusTxt=(map && map[dayStatus.value]) || dayStatus.value; html += `<div style="margin:10px 0"><strong>${L.status.label}:</strong> ${statusTxt}</div>`;
  if(dayStatus.value!=='work' && dayReason.value){ html+=`<div style="margin:6px 0"><strong>${L.status.reason}:</strong> ${dayReason.value}</div>`; }
  if(taskNote.value){ html+=`<div style="margin:6px 0"><strong>${L.status.task}:</strong> ${taskNote.value}</div>`; }
  node.innerHTML=html; nodeToPNGAndDownload(node,`day-${dayDate.value}.png`);
}
function exportPeriodPNG(L, title, periodLabel, rows, annotations){
  const node=document.createElement('div'); node.lang=expLang.value; node.dir=L.dir; node.style.cssText='font-family: system-ui, "Noto Naskh Arabic", Tahoma; padding:16px; color:#0f172a; background:#ffffff; width:900px;';
  let html=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><h2 style="margin:0">${title}</h2><div>${tsNow()}</div></div>
  <div style="margin-bottom:8px;font-weight:700">${periodLabel}</div>
  <table style="width:100%;border-collapse:separate;border-spacing:0 8px"><thead><tr>${I18N[expLang.value].month.thead.map(h=>`<th style="text-align:center;color:#475569;font-size:13px">${h}</th>`).join('')}</tr></thead><tbody>`;
  rows.forEach(r=>{ html+=`<tr style="background:#fff;border:1px solid #e2e8f0"><td style="padding:8px 10px">${r[0]}</td><td style="padding:8px 10px">${r[1]}</td><td style="padding:8px 10px">${r[2]}</td><td style="padding:8px 10px">${r[3]}</td><td style="padding:8px 10px">${r[4]}</td><td style="padding:8px 10px">${r[5]}</td></tr>`;});
  html+=`</tbody></table>`;
  if(annotations.length){
    const Lx=I18N[expLang.value], head=Lx.month.notesHead;
    html+=`<div style="margin-top:12px"><h3 style="margin:8px 0">${Lx.month.notesTitle}</h3><table style="width:100%;border-collapse:separate;border-spacing:0 8px"><thead><tr>${head.map(h=>`<th style="text-align:left;color:#475569;font-size:13px">${h}</th>`).join('')}</tr></thead><tbody>`;
    annotations.forEach(a=>{ html+=`<tr style="background:#fff;border:1px solid #e2e8f0"><td style="padding:8px 10px">${a.date}</td><td style="padding:8px 10px">${a.statusLabel}</td><td style="padding:8px 10px">${a.reason||'-'}</td><td style="padding:8px 10px">${a.taskNote||'-'}</td></tr>`;});
    html+=`</tbody></table></div>`;
  }
  node.innerHTML=html; nodeToPNGAndDownload(node,`period-${periodLabel}.png`);
}
function exportDayJSONWithLang(lang){ const data={meta:{scope:'day',lang,date:dayDate.value,exportedAt:new Date().toISOString()}, payload:captureForm()}; const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=`day-${dayDate.value}.json`; a.click(); URL.revokeObjectURL(url); }
function exportRowsJSON(scopeLabel, periodLabel, rows, lang, annotations){ const data={meta:{scope:scopeLabel,period:periodLabel,lang,exportedAt:new Date().toISOString()},rows,annotations}; const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=`${scopeLabel}-${periodLabel}.json`; a.click(); URL.revokeObjectURL(url); }

/* ========= Auth + UI ========= */
auth.onAuthStateChanged((user)=>{
  if(!user){ window.location.href = "login.html"; return; }
  const name = user.displayName || user.email || 'User'; userPill.textContent = name;
  authBtn.textContent = (currentLang==='de'?'Abmelden':currentLang==='ar'?'تسجيل الخروج':'Sign out');
});
authBtn.onclick = ()=> auth.signOut().catch(()=>{});

/* ========= UI / Init ========= */
function showCard(card){[dayCard,settingsCard].forEach(el=>el.style.display='none'); card.style.display='block';}
function openExport(){exportModal.classList.add('open'); exportModal.setAttribute('aria-hidden','false');}

function initApp(){
  if(!localStorage.getItem(LS_LANG)){ localStorage.setItem(LS_LANG,'en'); currentLang='en'; }

  // Drawer
  menuToggle.onclick=()=>{ const willOpen=!menuDrawer.classList.contains('open'); menuDrawer.classList.toggle('open',willOpen); menuDrawer.setAttribute('aria-hidden',String(!willOpen)); menuToggle.setAttribute('aria-expanded',String(willOpen)); };
  window.addEventListener('click',(e)=>{ if(!menuDrawer.contains(e.target) && !menuToggle.contains(e.target)){ menuDrawer.classList.remove('open'); menuDrawer.setAttribute('aria-hidden','true'); menuToggle.setAttribute('aria-expanded','false'); }});
  menuDrawer.addEventListener('click',e=>e.stopPropagation());

  // Language chips
  langRow.querySelectorAll('.lang-chip').forEach(ch=> ch.addEventListener('click', ()=> setLang(ch.dataset.lang)));

  // Dark switch
  darkToggle.addEventListener('change', ()=>{ document.body.classList.toggle('dark', darkToggle.checked); });

  // Menu actions
  mnuDay.onclick=()=>{showCard(dayCard); menuDrawer.classList.remove('open');};
  mnuSettings.onclick=()=>{loadSettings(); showCard(settingsCard); menuDrawer.classList.remove('open');};
  mnuMonth.onclick=()=>{openMonth(); menuDrawer.classList.remove('open');};
  mnuExport.onclick=()=>{openExport(); expLang.value = currentLang; expScope.value = 'month'; expFormat.value = 'png'; biweekWrap.style.display = 'none'; try{bwStart.valueAsDate = new Date();}catch{bwStart.value = new Date().toISOString().slice(0,10);} };
  expScope.addEventListener('change', ()=>{ biweekWrap.style.display = (expScope.value==='biweek') ? 'block' : 'none'; });

  // Inputs → confirm save
  function onUserChange(){ compute(); if(!confirmOpen){ openConfirm(); } }
  [dayStart,dayEnd,dayBreak,dayReason,taskNote].forEach(el=> el.addEventListener('input', onUserChange));
  dayStatus.addEventListener('change', ()=>{ reasonWrap.style.display = (dayStatus.value==='work') ? 'none' : 'block'; onUserChange(); });

  // Date change → load snapshot
  dayDate.addEventListener('change',()=>{ updateDayName(); loadDay(); });

  // Settings
  applySettings.addEventListener('click',()=>{saveSettings(); compute();});

  // Month / Export close
  refreshMonth.addEventListener('click', refreshMonthSummary); closeMonth.addEventListener('click',()=>monthModal.classList.remove('open'));
  closeExport.addEventListener('click',()=>exportModal.classList.remove('open'));

  // Confirm modal actions
  csOk.addEventListener('click', ()=>{ saveDayLocal(); closeConfirm(); });
  csCancel.addEventListener('click', ()=>{ if(lastSaved) fillForm(lastSaved); closeConfirm(); });
  $('confirmSaveModal').addEventListener('click', (e)=>{ const dlg = e.target.closest('.dialog'); if(!dlg) e.stopPropagation(); });

  // Init
  try{dayDate.valueAsDate=new Date();}catch{dayDate.value=new Date().toISOString().slice(0,10);}
  setLang(currentLang); loadSettings(); loadDay(); compute();
  darkToggle.checked = document.body.classList.contains('dark');
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initApp);}else{initApp();}
