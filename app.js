// ============================================================
// APP STATE
// ============================================================
const APP = {
  tab: 'breakfast',
  favorites: JSON.parse(localStorage.getItem('rasoi2_favs') || '[]'),
  expanded: {}
};

// ============================================================
// TABS
// ============================================================
function setTab(btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  APP.tab = btn.dataset.tab;
  const hints = {
    breakfast:'e.g. poha, groundnuts, banana, rava...',
    lunch:'e.g. rice, dal, paneer, potato...',
    snacks:'e.g. besan, potato, bread, onion...',
    dinner:'e.g. roti, rajma, paneer, bhindi...',
    any:'e.g. potato, onion, tomato, rice...'
  };
  document.getElementById('searchInput').placeholder = hints[APP.tab];
}

// ============================================================
// SEARCH HELPERS
// ============================================================
function quickSearch(q) {
  document.getElementById('searchInput').value = q;
  toggleClearBtn();
  hideAC();
  findRecipes();
}

function toggleClearBtn() {
  const val = document.getElementById('searchInput').value;
  document.getElementById('clearBtn').classList.toggle('visible', val.length > 0);
}

function clearSearch() {
  const input = document.getElementById('searchInput');
  input.value = '';
  input.focus();
  document.getElementById('clearBtn').classList.remove('visible');
  hideAC();
}

// ============================================================
// AUTOCOMPLETE
// ============================================================
const AC_LIST = (() => {
  const set = new Set();
  ['breakfast','lunch','snacks','dinner'].forEach(cat => {
    (DB[cat] || []).forEach(r => {
      r.keywords.forEach(k => set.add(k.toLowerCase().trim()));
      set.add(r.name.toLowerCase().trim());
    });
  });
  return [...set].sort();
})();

let acActiveIdx = -1;

function handleInput() {
  toggleClearBtn();
  showAC();
}

function getLastToken(val) {
  const parts = val.split(',');
  return parts[parts.length - 1].trim().toLowerCase();
}

function positionAC() {
  const box  = document.querySelector('.search-box');
  const drop = document.getElementById('acDropdown');
  if (!box || !drop.classList.contains('open')) return;
  const r = box.getBoundingClientRect();
  drop.style.top   = (r.bottom + 6) + 'px';
  drop.style.left  = r.left + 'px';
  drop.style.width = r.width + 'px';
}

function showAC() {
  const input  = document.getElementById('searchInput');
  const drop   = document.getElementById('acDropdown');
  const token  = getLastToken(input.value);

  if (token.length < 2) { hideAC(); return; }

  const starts   = AC_LIST.filter(k => k.startsWith(token) && k !== token);
  const contains = AC_LIST.filter(k => !k.startsWith(token) && k.includes(token) && k !== token);
  const matches  = [...starts, ...contains].slice(0, 8);

  if (matches.length === 0) { hideAC(); return; }

  acActiveIdx = -1;
  drop.innerHTML =
    `<div class="ac-label">Suggestions</div>` +
    matches.map(k => {
      const i  = k.indexOf(token);
      const hl = k.slice(0, i) + '<em>' + k.slice(i, i + token.length) + '</em>' + k.slice(i + token.length);
      return `<div class="ac-item" data-val="${k}" onmousedown="pickAC('${k.replace(/'/g,"\\'")}')"> ${hl}</div>`;
    }).join('');
  drop.classList.add('open');
  positionAC();
}

function hideAC() {
  document.getElementById('acDropdown').classList.remove('open');
  acActiveIdx = -1;
}

function pickAC(val) {
  const input  = document.getElementById('searchInput');
  const parts  = input.value.split(',').map(p => p.trim()).filter(Boolean);
  if (parts.length === 0) parts.push('');
  parts[parts.length - 1] = val;
  input.value = parts.join(', ') + ', ';
  hideAC();
  toggleClearBtn();
  input.focus();
}

function acMoveCursor(dir) {
  const items = document.querySelectorAll('.ac-item');
  if (!items.length) return;
  items.forEach(el => el.classList.remove('ac-active'));
  acActiveIdx = (acActiveIdx + dir + items.length) % items.length;
  items[acActiveIdx].classList.add('ac-active');
}

window.addEventListener('resize', positionAC);
window.addEventListener('scroll', positionAC, true);

document.getElementById('searchInput').addEventListener('keydown', e => {
  const drop = document.getElementById('acDropdown');
  const open = drop.classList.contains('open');
  if (e.key === 'ArrowDown')  { e.preventDefault(); if (open) acMoveCursor(+1); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); if (open) acMoveCursor(-1); }
  else if (e.key === 'Enter') {
    if (open && acActiveIdx >= 0) {
      e.preventDefault();
      const active = document.querySelector('.ac-item.ac-active');
      if (active) pickAC(active.dataset.val);
    } else {
      hideAC();
      findRecipes();
    }
  } else if (e.key === 'Escape') { hideAC(); }
});

document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrap')) hideAC();
});

// ============================================================
// FIND RECIPES
// ============================================================
function findRecipes() {
  const raw = document.getElementById('searchInput').value.trim();
  if (!raw) return;

  showLoading();

  const userIngredients = raw.toLowerCase().split(/[,\s]+/).filter(w => w.length > 2);

  let categories = APP.tab === 'any'
    ? ['breakfast','lunch','snacks','dinner']
    : [APP.tab];

  let all = [];
  categories.forEach(cat => {
    (DB[cat] || []).forEach(recipe => {
      let score = 0;
      userIngredients.forEach(ing => {
        if (recipe.keywords.some(k => k.includes(ing) || ing.includes(k))) score++;
        if (recipe.name.toLowerCase().includes(ing)) score += 2;
      });
      if (score > 0) all.push({ ...recipe, score, cat });
    });
  });

  all.sort((a, b) => b.score - a.score);
  const seen = new Set();
  const results = all.filter(r => {
    if (seen.has(r.name)) return false;
    seen.add(r.name);
    return true;
  }).slice(0, 6);

  APP.expanded = {};

  setTimeout(() => {
    if (results.length === 0) showNoResults(raw);
    else renderRecipes(results, raw);
  }, 700);
}

// ============================================================
// RENDER
// ============================================================
function renderRecipes(recipes, query) {
  renderFavorites();
  document.getElementById('main').innerHTML = `
    <div class="results-meta">
      <div class="results-title">
        ${recipes.length} recipes for <em>"${query}"</em>
      </div>
    </div>
    <div class="recipes-grid">
      ${recipes.map((r, i) => buildCard(r, i)).join('')}
    </div>
  `;
}

function buildCard(r, i) {
  const saved = APP.favorites.includes(r.name);
  const total = (parseInt(r.prepTime)||0) + (parseInt(r.cookTime)||0);
  const pills = r.ingredients.slice(0, 5).map(ing => {
    const s = ing.replace(/^\d[\d\/\s\w]*\s/, '').split(',')[0].split('(')[0].trim();
    return `<span class="ing-pill">${s}</span>`;
  }).join('');
  const steps = r.steps.map((s, si) => `
    <div class="step-row">
      <span class="step-dot">${si+1}</span>
      <span>${s}</span>
    </div>`).join('');

  const imgId = `img${i}`;

  return `
  <div class="recipe-card">
    <div class="card-img-wrap" id="wrap${i}">
      <img class="card-img" id="${imgId}" src="${r.image}" alt="${r.name}"
        onload="this.style.opacity=1"
        onerror="document.getElementById('wrap${i}').innerHTML='<div class=\\'img-placeholder\\'>🍛</div><div class=\\'card-badge\\'>${r.category}</div><div class=\\'card-save ${saved?'saved':''}\\' onclick=\\'toggleSave(\\\"${r.name.replace(/"/g,'\\\\"')}\\\",${i})\\'>${saved?'★':'☆'}</div><div class=\\'card-time\\'>⏱ ${total} min</div>'"
      />
      <div class="card-badge">${r.category}</div>
      <button class="card-save ${saved?'saved':''}" id="savebtn${i}"
        onclick="toggleSave('${r.name.replace(/'/g,"\\'")}',${i})">
        ${saved?'★':'☆'}
      </button>
      <div class="card-time">⏱ ${total} min</div>
    </div>
    <div class="card-body">
      <div class="card-name">${r.name}</div>
      <div class="card-desc">${r.description}</div>
      <div class="card-meta">
        <span class="meta-item">🔪 Prep ${r.prepTime}</span>
        <span class="meta-item">🔥 Cook ${r.cookTime}</span>
        <span class="meta-item">👥 ${r.servings} servings</span>
      </div>
      <div class="ing-row">${pills}</div>
      <button class="expand-toggle" id="tog${i}" onclick="toggleExpand(${i})">
        ▼ View Full Recipe & Steps
      </button>
      <div class="steps-section" id="steps${i}">
        <div class="steps-label">How to cook</div>
        ${steps}
        ${r.tip ? `<div class="tip-row">💡 <strong>Tip:</strong> ${r.tip}</div>` : ''}
      </div>
    </div>
  </div>`;
}

function toggleExpand(i) {
  APP.expanded[i] = !APP.expanded[i];
  const s = document.getElementById('steps'+i);
  const t = document.getElementById('tog'+i);
  if (s) {
    s.classList.toggle('open', APP.expanded[i]);
    t.textContent = APP.expanded[i] ? '▲ Hide Recipe' : '▼ View Full Recipe & Steps';
  }
}

// ============================================================
// FAVORITES
// ============================================================
function toggleSave(name, i) {
  const idx = APP.favorites.indexOf(name);
  if (idx === -1) APP.favorites.push(name);
  else APP.favorites.splice(idx, 1);
  localStorage.setItem('rasoi2_favs', JSON.stringify(APP.favorites));
  const btn = document.getElementById('savebtn'+i);
  if (btn) {
    const saved = APP.favorites.includes(name);
    btn.textContent = saved ? '★' : '☆';
    btn.classList.toggle('saved', saved);
  }
  renderFavorites();
}

function renderFavorites() {
  const strip = document.getElementById('favStrip');
  const chips = document.getElementById('favChips');
  if (!APP.favorites.length) { strip.style.display='none'; return; }
  strip.style.display = 'block';
  chips.innerHTML = APP.favorites.map(n =>
    `<span class="fav-chip">★ ${n} <button class="fav-x" onclick="removeFav('${n.replace(/'/g,"\\'")}')">✕</button></span>`
  ).join('');
}

function removeFav(name) {
  APP.favorites = APP.favorites.filter(f => f !== name);
  localStorage.setItem('rasoi2_favs', JSON.stringify(APP.favorites));
  renderFavorites();
}

// ============================================================
// LOADING / EMPTY STATES
// ============================================================
function showLoading() {
  document.getElementById('main').innerHTML = `
    <p class="loading-text">Finding recipes<span class="loading-dots"><span>.</span><span>.</span><span>.</span></span></p>
    <div class="shimmer-grid">
      ${[1,2,3,4].map(()=>`
        <div class="shimmer-card">
          <div class="shimmer-img"></div>
          <div class="shimmer-body">
            <div class="shimmer-line med"></div>
            <div class="shimmer-line short"></div>
            <div class="shimmer-line med"></div>
          </div>
        </div>`).join('')}
    </div>`;
}

function showNoResults(q) {
  document.getElementById('main').innerHTML = `
    <div class="no-result">
      <span style="font-size:48px;display:block;margin-bottom:12px">🔍</span>
      <h3>No recipes found for "${q}"</h3>
      <p>Try common ingredients like:<br>
      <strong style="color:var(--gold)">potato, rice, dal, paneer, besan, poha, bread, onion, groundnuts</strong></p>
    </div>`;
}

// ============================================================
// INIT
// ============================================================
renderFavorites();
