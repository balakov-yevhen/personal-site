'use strict';

/* =========================================================
   THEME TOGGLE
   ========================================================= */
(function initThemeToggle() {
  const btn = document.getElementById('themeSwitch');
  if (!btn) return;

  const getTheme = () =>
    localStorage.getItem('theme') ||
    document.documentElement.getAttribute('data-theme') ||
    'coal';

  const setTheme = (mode) => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    btn.setAttribute('aria-checked', mode === 'coal' ? 'true' : 'false');
  };

  // init visual state
  setTheme(getTheme());

  btn.addEventListener('click', () => {
    setTheme(getTheme() === 'coal' ? 'sky' : 'coal');
  });

  btn.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); btn.click(); }
  });
})();

/* =========================================================
   HELPERS: TIMELINE + CERTS LIGHTBOX
   ========================================================= */
function renderTimeline(mountId, items) {
  const host = document.getElementById(mountId);
  if (!host) return;
  host.innerHTML = '';
  (items || []).forEach(e => {
    const wrap = document.createElement('div');
    wrap.className = 'event';
    wrap.innerHTML = `<div></div><div><h4>${e.t}</h4><div class="when">${e.d}</div></div>`;
    if (e.list?.length) {
      const ul = document.createElement('ul'); ul.style.margin = '0';
      e.list.forEach(i => { const li = document.createElement('li'); li.textContent = i; ul.appendChild(li); });
      wrap.lastElementChild.appendChild(ul);
    }
    host.appendChild(wrap);
  });
}

/* ----- Simple card grid (achievements / strengths) ----- */
function renderCardGrid(mountId, items, toHtml) {
  const host = document.getElementById(mountId);
  if (!host) return;
  host.innerHTML = '';
  (items || []).forEach(it => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = toHtml(it);
    host.appendChild(card);
  });
}

/* ----- Lightbox ----- */
function openLightbox(src, title, verifyUrl){
  const lb = document.getElementById('certLightbox');
  if (!lb) return;
  const img = document.getElementById('lbImg');
  const ttl = document.getElementById('lbTitle');
  const ver = document.getElementById('lbVerify');

  img.src = src || '';
  img.alt = title || '';
  ttl.textContent = title || '';

  if (verifyUrl){
    ver.href = verifyUrl;
    ver.style.display = 'inline-flex';
  } else {
    ver.removeAttribute('href');
    ver.style.display = 'none';
  }
  lb.hidden = false;
}

function initCertLightbox(){
  const lb = document.getElementById('certLightbox');
  if (!lb) return;
  const close = ()=> { lb.hidden = true; };

  document.getElementById('lbClose')?.addEventListener('click', close);
  lb.querySelector('.lightbox-backdrop')?.addEventListener('click', close);
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && !lb.hidden) close(); });
}

/* ----- Certs grid (cards + lightbox open/verify) ----- */
function renderCertGrid(lang){
  const grid = document.getElementById('certGrid');
  if (!grid) return;

  // i18n strings for buttons
  const dict = (window.I18N?.[lang]?.certs) || { h:'Certifications & Courses', view:'View', verify:'Verify' };

  // prefer new CERTS format; fallback to old CERTIFICATIONS as simple pills -> cards
  let list = window.CERTS?.[lang] || window.CERTS?.en;
  if (!list && window.CERTIFICATIONS){
    const src = window.CERTIFICATIONS[lang] || window.CERTIFICATIONS.en || [];
    list = src.map(x => ({
      id: x.label,
      title: x.label + (x.year ? ` (${x.year})` : ''),
      thumb: x.img,
      full: x.img,
      verify: x.url
    }));
  }

  grid.innerHTML = '';
  (list || []).forEach(c => {
    const card = document.createElement('article');
    card.className = 'cert-card';
    card.innerHTML = `
      <img src="${c.thumb || c.full}" alt="${c.title || ''}">
      <div class="cert-ovr">
        <div class="cert-title">${c.title || ''}${c.year ? ` (${c.year})` : ''}</div>
        <div class="cert-actions">
          <button class="btn-sm primary"
                  data-full="${c.full || c.thumb}"
                  data-title="${(c.title || '').replace(/"/g, '&quot;')}"
                  data-verify="${c.verify || ''}">${dict.view}</button>
          ${c.verify ? `<a class="btn-sm" href="${c.verify}" target="_blank" rel="noopener">${dict.verify}</a>` : ''}
        </div>
      </div>`;
    grid.appendChild(card);
  });

  grid.querySelectorAll('button[data-full]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      openLightbox(btn.dataset.full, btn.dataset.title, btn.dataset.verify);
    });
  });
}

/* =========================================================
   SKILLS + SEARCH
   ========================================================= */
function renderSkills(lang){
  const sk = document.getElementById('skillList');
  if (!sk) return;

  const skills = (window.SKILLS?.[lang] || window.SKILLS?.en || []);
  sk.innerHTML = '';
  skills.forEach(s=>{
    const span = document.createElement('span');
    span.className = 'pill skill-pill';
    span.textContent = s;
    sk.appendChild(span);
  });

  applySkillFilter(); // применим текущую строку поиска
}

let skillFilter = '';
function applySkillFilter(){
  const q = (document.getElementById('skillSearch')?.value || skillFilter || '').trim().toLowerCase();
  skillFilter = q;
  document.querySelectorAll('#skillList .skill-pill').forEach(pill=>{
    const show = !q || pill.textContent.toLowerCase().includes(q);
    pill.style.display = show ? '' : 'none';
  });
}
function initSkillSearch(){
  const input = document.getElementById('skillSearch');
  if (!input) return;
  input.addEventListener('input', applySkillFilter);
}

/* =========================================================
   RESUME SWITCH (per language)
   ========================================================= */
function setResumeHref(lang) {
  try {
    const btn = document.getElementById('btnResume');
    if (!btn) return;
    const map = window.RESUME || {};
    const href = map[lang] || map.en || 'resume-en.pdf';
    btn.setAttribute('href', href);

    // Чтобы сразу скачивалось, раскомментируй:
    // btn.setAttribute('download', '');
  } catch (_) { /* no-op */ }
}

/* =========================================================
   I18N RENDER
   ========================================================= */
function renderLang(lang){
  const dict = window.I18N?.[lang] || window.I18N?.en || {};

  // Текст по data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const path = el.getAttribute('data-i18n').split('.');
    let obj = dict; for (const k of path) obj = obj?.[k];
    if (typeof obj === 'string') el.textContent = obj;
  });

  /* -------- Проекты: фильтры и карточки -------- */
  const fwrap = document.getElementById('projFilters');
  const grid  = document.getElementById('projGrid');
  if (fwrap && grid){
    fwrap.innerHTML = '';
    const list = window.PROJECTS?.[lang] || window.PROJECTS?.en || [];
    const tagSet = new Set(); list.forEach(p => p.tags?.forEach(t => tagSet.add(t)));

    const allBtn = document.createElement('button');
    allBtn.className = 'tag active'; allBtn.textContent = dict.projects?.all || 'All'; allBtn.dataset.filter = 'all';
    fwrap.appendChild(allBtn);

    [...tagSet].sort().forEach(t=>{
      const b = document.createElement('button');
      b.className = 'tag'; b.textContent = t; b.dataset.filter = t; fwrap.appendChild(b);
    });

    const renderCards = (filter = 'all')=>{
      grid.innerHTML = '';
      list
        .filter(p => filter === 'all' || p.tags?.includes(filter))
        .forEach(p=>{
          const card = document.createElement('article'); card.className = 'card';
          card.innerHTML = `<h3>${p.t}</h3><p>${p.d}</p>`;
          const meta = document.createElement('div'); meta.className = 'meta';
          (p.tags || []).forEach(t=>{ const s=document.createElement('span'); s.className='pill'; s.textContent=t; meta.appendChild(s); });
          card.appendChild(meta); grid.appendChild(card);
        });
    };
    renderCards('all');

    fwrap.querySelectorAll('.tag').forEach(btn=>{
      btn.onclick = () => {
        fwrap.querySelectorAll('.tag').forEach(x=>x.classList.remove('active'));
        btn.classList.add('active');
        renderCards(btn.dataset.filter);
      };
    });
  }

  /* -------- Достижения / Сильные стороны -------- */
  renderCardGrid('achGrid', window.ACHIEVEMENTS?.[lang] || window.ACHIEVEMENTS?.en,
    a => `<h3>${a.k}</h3><p style="margin-top:6px">${a.d}</p>`);
  renderCardGrid('strengthsGrid', window.STRENGTHS?.[lang] || window.STRENGTHS?.en,
    s => `<h3>${s.t}</h3><p style="margin-top:6px">${s.d}</p>`);

  /* -------- Таймлайны -------- */
  renderTimeline('expTime', window.EXPERIENCE?.[lang] || window.EXPERIENCE?.en);
  renderTimeline('eduTime', window.EDUCATION?.[lang]  || window.EDUCATION?.en);

  /* -------- Сертификаты (галерея) -------- */
  renderCertGrid(lang);

  /* -------- Скиллы -------- */
  renderSkills(lang);

  /* -------- Ссылка на резюме под язык -------- */
  setResumeHref(lang);

  // сохранить выбор языка и атрибут lang
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
}

/* =========================================================
   LANGUAGE PICKER
   ========================================================= */
const LANGS = [
  { id:'en', name:'English',    code:'EN', flag:'🇬🇧' },
  { id:'de', name:'Deutsch',    code:'DE', flag:'🇩🇪' },
  { id:'uk', name:'Українська', code:'UK', flag:'🇺🇦' },
  { id:'ru', name:'Русский',    code:'RU', flag:'🇷🇺' },
];

function buildLangPicker(initial){
  const mount = document.getElementById('langPicker');
  if (!mount) return;

  const btn = document.createElement('button');
  btn.className = 'lang-btn';
  btn.setAttribute('aria-haspopup','menu');
  btn.setAttribute('aria-expanded','false');
  btn.title = 'Language';
  btn.textContent = (LANGS.find(l=>l.id===initial) || LANGS[0]).flag;

  const menu = document.createElement('div');
  menu.className = 'lang-menu';
  menu.setAttribute('role','menu');

  LANGS.forEach(l=>{
    const it = document.createElement('button');
    it.className = 'lang-item';
    it.setAttribute('role','menuitem');
    it.dataset.value = l.id;
    it.innerHTML = `<span class="lang-flag">${l.flag}</span><span>${l.name}</span><span class="lang-code">${l.code}</span>`;
    it.addEventListener('click', ()=>{
      btn.textContent = l.flag;
      renderLang(l.id);
      close();
    });
    menu.appendChild(it);
  });

  mount.innerHTML = '';
  mount.appendChild(btn);
  mount.appendChild(menu);

  function open(){ mount.classList.add('open'); btn.setAttribute('aria-expanded','true'); }
  function close(){ mount.classList.remove('open'); btn.setAttribute('aria-expanded','false'); }

  btn.addEventListener('click', ()=> mount.classList.contains('open') ? close() : open());
  document.addEventListener('click', (e)=>{ if(!mount.contains(e.target)) close(); });
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') close(); });
}

/* =========================================================
   API CARDS (uses window.Api mock from assets/js/api.js)
   ========================================================= */
function downloadBytes(fileName, mime, bytes){
  const blob = new Blob([bytes], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = fileName;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}

function initApiCards(){
  const { Api } = window;
  if (!Api) return; // api.js мог быть удалён, просто пропускаем

  // Health
  const btnHealth     = document.getElementById('btnHealth');
  const healthStatus  = document.getElementById('healthStatus');
  const healthVersion = document.getElementById('healthVersion');
  const healthLatency = document.getElementById('healthLatency');
  const healthTime    = document.getElementById('healthTime');

  async function refreshHealth(){
    if (!btnHealth) return;
    healthStatus.textContent = '…';
    const h = await Api.health();
    healthStatus.textContent  = h.status;
    healthVersion.textContent = h.version;
    healthLatency.textContent = h.latencyMs + ' ms';
    healthTime.textContent    = 'Updated ' + new Date(h.timestamp).toLocaleString();
  }
  btnHealth?.addEventListener('click', refreshHealth);
  refreshHealth();

  // Forex
  const fxAmount = document.getElementById('fxAmount');
  const fxFrom   = document.getElementById('fxFrom');
  const fxTo     = document.getElementById('fxTo');
  const fxAsOf   = document.getElementById('fxAsOf');
  const fxResult = document.getElementById('fxResult');
  const btnFx    = document.getElementById('btnFx');

  let fxRatesCache = null;
  function recalcFx(){
    if(!fxRatesCache) { fxResult.textContent = '-'; return; }
    const amount   = Number(fxAmount.value || 0);
    const fromRate = fxRatesCache.rates[fxFrom.value];
    const toRate   = fxRatesCache.rates[fxTo.value];
    if(!fromRate || !toRate){ fxResult.textContent = '-'; return; }
    const usdAmount = amount / fromRate;
    const converted = usdAmount * toRate;
    fxResult.textContent = converted.toFixed(2) + ' ' + fxTo.value;
  }
  async function refreshFx(){
    fxAsOf.textContent = '…';
    fxRatesCache = await Api.forexRates();
    fxAsOf.textContent = 'Rates as of ' + new Date(fxRatesCache.asOf).toLocaleString();
    recalcFx();
  }
  [fxAmount, fxFrom, fxTo].forEach(el=> el?.addEventListener('input', recalcFx));
  btnFx?.addEventListener('click', refreshFx);
  refreshFx();

  // Reports
  const repFrom = document.getElementById('repFrom');
  const repTo   = document.getElementById('repTo');
  const repCur  = document.getElementById('repCur');
  document.getElementById('btnCsv')?.addEventListener('click', async ()=>{
    const file = await Api.generateFile('csv', { from: repFrom.value, to: repTo.value, toCur: repCur.value });
    downloadBytes(file.fileName, file.mime, file.bytes);
  });
  document.getElementById('btnPdf')?.addEventListener('click', async ()=>{
    const file = await Api.generateFile('pdf', { from: repFrom.value, to: repTo.value, toCur: repCur.value });
    downloadBytes(file.fileName, file.mime, file.bytes);
  });
}

/* =========================================================
   BURGER & SMOOTH SCROLL
   ========================================================= */
function initBurger(){
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  function closeMenu(){ navLinks?.classList.remove('open'); navToggle?.setAttribute('aria-expanded','false'); }
  navToggle?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('#navLinks a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 860) closeMenu(); });
}

function initSmoothScroll(){
  document.getElementById('homeLink')?.addEventListener('click', (e)=>{
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* =========================================================
   BOOTSTRAP
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const initialLang = localStorage.getItem('lang') || document.documentElement.getAttribute('lang') || 'en';
  buildLangPicker(initialLang);
  renderLang(initialLang); // также внутри выставит href для резюме
  setResumeHref(initialLang); // на случай, если кнопка уже в DOM к этому моменту

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  initApiCards();
  initBurger();
  initSmoothScroll();
  initSkillSearch();
  initCertLightbox();
});
