(() => {
  "use strict";

  const currentScript = document.currentScript;
  const SITE_ROOT = new URL(".", currentScript && currentScript.src ? currentScript.src : location.href);
  const index = [
    { title: "Homepage", path: "index.html", group: "Portale", detail: "Panoramica, ultimo album e accessi principali", terms: "inizio home assemblage 23 italia" },
    { title: "Discografia", path: "musica/index.html", group: "Musica", detail: "Album, singoli e catalogo", terms: "discografia musica album singoli catalogo" },
    { title: "Null", path: "musica/null.html", group: "Album · 2025", detail: "Decimo album in studio · Metropolis", terms: "null believe lunatics gone fuel tolerate normal last overthrow waited" },
    { title: "Mourn", path: "musica/mourn.html", group: "Album · 2020", detail: "Scheda album e tracklist", terms: "mourn epiphany factory bloom anxiety confession dissonance" },
    { title: "Endure", path: "musica/endure.html", group: "Album · 2016", detail: "Scheda album e tracklist", terms: "endure afterglow bravery static december" },
    { title: "Bruise", path: "musica/bruise.html", group: "Album · 2012", detail: "Scheda album e tracklist", terms: "bruise outsider darkflow automaton" },
    { title: "Compass", path: "musica/compass.html", group: "Album · 2009", detail: "Scheda album e tracklist", terms: "compass smoke collapse impermanence alive greed" },
    { title: "Meta", path: "musica/meta.html", group: "Album · 2007", detail: "Scheda album e tracklist", terms: "meta decades raw sorry ghosts binary damaged truth" },
    { title: "Binary", path: "musica/binary.html", group: "Singolo · 2007", detail: "Scheda pubblicazione", terms: "binary singolo" },
    { title: "Storm", path: "musica/storm.html", group: "Album · 2004", detail: "Scheda album e tracklist", terms: "storm human skin ground regret apart" },
    { title: "Defiance", path: "musica/defiance.html", group: "Album · 2002", detail: "Scheda album e tracklist", terms: "defiance opened drive blindhammer cocoon document horizon" },
    { title: "Failure", path: "musica/failure.html", group: "Album · 2001", detail: "Scheda album e tracklist", terms: "failure naked house on fire disappoint silence awake" },
    { title: "Contempt", path: "musica/contempt.html", group: "Album · 1999", detail: "Scheda album e tracklist", terms: "contempt anthem surface coward bipolar pages purgatory" },
    { title: "Date e concerti", path: "date.html", group: "Live", detail: "Calendario, città, sale e biglietti", terms: "date concerti live tournée tour karlsruhe oberhausen hamburg jonkoping hannover toronto los angeles mera luna" },
    { title: "Biografia", path: "bio.html", group: "Archivio", detail: "Tom Shear, storia e percorso creativo", terms: "bio biografia tom shear storia influenze seattle franklin" },
    { title: "Novità", path: "novita/index.html", group: "Redazione", detail: "Aggiornamenti, remix e uscite", terms: "novità news believe inhalt remix notizie uscite" },
    { title: "Media", path: "media.html", group: "Archivio", detail: "Playlist, immagini e fonti", terms: "media immagini video playlist fonti fotografie" },
    { title: "Contatti", path: "contatti.html", group: "Portale", detail: "Canali verificati e riferimenti", terms: "contatti booking stampa ascoltatori" },
    { title: "Privacy", path: "privacy.html", group: "Informazioni", detail: "Dati e funzionamento dei moduli", terms: "privacy dati cookie email consenso" },
    { title: "Note legali", path: "note-legali.html", group: "Informazioni", detail: "Indipendenza editoriale e diritti", terms: "legale diritti copyright licenze indipendente non ufficiale" }
  ];

  const normalize = (value) => String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
  const pageUrl = (path) => new URL(path, SITE_ROOT).href;
  const style = document.createElement("style");
  style.id = "a23-v21-styles";
  style.textContent = [
    ".a23-reading-progress{position:fixed;inset:0 0 auto;height:3px;width:100%;z-index:1000;pointer-events:none;background:transparent}",
    ".a23-reading-progress span{display:block;width:0;height:100%;background:var(--color-accent,#d6f25a);transition:width 80ms linear}",
    ".a23-search-trigger{display:inline-flex;align-items:center;gap:9px;min-height:40px;padding:0 12px;border:1px solid var(--color-line,#2c2e32);background:rgba(12,13,15,.82);color:var(--color-fg,#edeae3);font:500 13px/1.2 var(--font-sans,Arial,sans-serif);cursor:pointer;white-space:nowrap}",
    ".a23-search-trigger:hover,.a23-top:hover{border-color:var(--color-accent,#d6f25a);color:var(--color-accent,#d6f25a)}",
    ".a23-search-trigger .a23-key{font-size:11px;color:var(--color-muted,#a39e94);border:1px solid var(--color-line,#2c2e32);padding:2px 5px}",
    ".a23-search-dialog{width:min(680px,calc(100% - 28px));max-width:none;max-height:min(82vh,760px);padding:0;border:1px solid var(--color-line,#2c2e32);background:var(--color-bg,#0c0d0f);color:var(--color-fg,#edeae3);box-shadow:0 30px 100px rgba(0,0,0,.58)}",
    ".a23-search-dialog::backdrop{background:rgba(0,0,0,.76);backdrop-filter:blur(8px)}",
    ".a23-search-shell{display:grid;grid-template-rows:auto auto minmax(120px,1fr) auto;max-height:min(82vh,760px)}",
    ".a23-search-head{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:19px 22px;border-bottom:1px solid var(--color-line,#2c2e32)}",
    ".a23-search-head h2{font:600 28px/1 var(--font-display,'Arial Narrow',sans-serif);letter-spacing:.025em;text-transform:uppercase}",
    ".a23-version{font:11px/1.4 var(--font-mono,monospace);letter-spacing:.13em;color:var(--color-accent,#d6f25a)}",
    ".a23-search-field{display:flex;gap:12px;align-items:center;padding:16px 22px;border-bottom:1px solid var(--color-line,#2c2e32)}",
    ".a23-search-field label{font-size:12px;color:var(--color-muted,#a39e94)}",
    ".a23-search-field input{min-width:0;flex:1;min-height:42px;background:transparent;border:0;color:inherit;font:inherit;outline:none}",
    ".a23-search-field input:focus-visible{outline:2px solid var(--color-accent,#d6f25a);outline-offset:3px}",
    ".a23-search-results{overflow:auto;padding:8px}",
    ".a23-search-result{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:4px 16px;align-items:center;padding:13px 14px;text-decoration:none;border:1px solid transparent;color:inherit}",
    ".a23-search-result:hover,.a23-search-result:focus-visible{border-color:var(--color-line,#2c2e32);background:var(--color-bg-2,#141618);outline-color:var(--color-accent,#d6f25a)}",
    ".a23-search-result strong{font-size:15px;font-weight:500}",
    ".a23-search-result small{grid-column:1;font-size:12px;color:var(--color-muted,#a39e94)}",
    ".a23-search-result em{grid-column:2;grid-row:1/3;color:var(--color-accent,#d6f25a);font:11px/1.4 var(--font-mono,monospace);font-style:normal;text-align:right}",
    ".a23-search-empty{padding:30px 18px;text-align:center;color:var(--color-muted,#a39e94);font-size:14px}",
    ".a23-search-foot{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;padding:13px 22px;border-top:1px solid var(--color-line,#2c2e32);font-size:12px;color:var(--color-muted,#a39e94)}",
    ".a23-search-foot button{background:transparent;border:1px solid var(--color-line,#2c2e32);padding:8px 10px;color:inherit;font-size:12px;cursor:pointer}",
    ".a23-search-foot button:hover{border-color:var(--color-accent,#d6f25a);color:var(--color-accent,#d6f25a)}",
    ".a23-filter-tools{display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin:0 0 18px}",
    ".a23-filter-tools input,.a23-filter-tools select,.a23-track-filter{min-height:42px;padding:8px 12px;border:1px solid var(--color-line,#2c2e32);background:var(--color-bg-2,#141618);color:inherit;font:14px/1.4 var(--font-sans,Arial,sans-serif)}",
    ".a23-filter-tools input{flex:1;min-width:180px}",
    ".a23-filter-count{font-size:12px;color:var(--color-muted,#a39e94)}",
    ".a23-track-tools{margin:0 0 12px;display:flex;gap:12px;align-items:center}",
    ".a23-track-filter{width:min(100%,340px);font-size:13px}",
    ".a23-top{position:fixed;right:20px;bottom:calc(var(--player,0px) + 18px);z-index:35;width:44px;height:44px;border:1px solid var(--color-line,#2c2e32);background:var(--color-bg,#0c0d0f);color:var(--color-fg,#edeae3);font-size:20px;cursor:pointer;opacity:0;pointer-events:none;transform:translateY(8px);transition:opacity 180ms,transform 180ms}",
    ".a23-top.is-visible{opacity:1;pointer-events:auto;transform:translateY(0)}",
    "html.a23-amoled,html.a23-amoled body,html.a23-amoled .nav,html.a23-amoled .menu-panel,html.a23-amoled .player,html.a23-amoled .a23-search-dialog{background:#000!important}",
    "html.a23-amoled .a23-search-trigger,html.a23-amoled .a23-top,html.a23-amoled .a23-filter-tools input,html.a23-amoled .a23-filter-tools select,html.a23-amoled .a23-track-filter{background:#000!important}",
    "@media(max-width:600px){.a23-search-trigger{padding:0 9px;min-height:40px;font-size:12px}.a23-search-trigger .a23-key{display:none}.a23-search-head{padding:16px}.a23-search-field{padding:12px 16px}.a23-search-foot{padding:12px 16px}.a23-search-result{padding:12px}.a23-top{right:12px;bottom:calc(var(--player,0px) + 12px)}}",
    "@media(prefers-reduced-motion:reduce){.a23-reading-progress span,.a23-top{transition:none}}"
  ].join("\n");
  document.head.appendChild(style);

  function initialize() {
    if (!document.body || document.documentElement.dataset.a23V21Initialized === "true") return;
    document.documentElement.dataset.a23V21Initialized = "true";

    try {
      if (localStorage.getItem("a23-amoled") === "1") document.documentElement.classList.add("a23-amoled");
    } catch (_) {}

    const progress = document.createElement("div");
    progress.className = "a23-reading-progress";
    progress.setAttribute("aria-hidden", "true");
    progress.innerHTML = "<span></span>";
    document.body.appendChild(progress);
    const progressBar = progress.firstElementChild;

    function updateProgress() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
      progressBar.style.width = value.toFixed(2) + "%";
    }
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    updateProgress();

    const dialog = document.createElement("dialog");
    dialog.className = "a23-search-dialog";
    dialog.setAttribute("aria-label", "Ricerca nel portale");
    dialog.innerHTML = '<div class="a23-search-shell"><div class="a23-search-head"><h2>Ricerca nel portale</h2><span class="a23-version">V21 · INTERAZIONI</span></div><div class="a23-search-field"><label for="a23-search-input">CERCA</label><input id="a23-search-input" type="search" autocomplete="off" placeholder="Album, brani, date, biografia…" aria-label="Cerca nel portale"><span class="a23-version">ESC</span></div><div class="a23-search-results" id="a23-search-results" role="listbox" aria-label="Risultati della ricerca"></div><div class="a23-search-foot"><span><kbd>⌘/Ctrl K</kbd> apri · <kbd>/</kbd> cerca</span><button type="button" id="a23-contrast" aria-pressed="false">Contrasto AMOLED</button></div></div>';
    document.body.appendChild(dialog);

    const searchInput = dialog.querySelector("#a23-search-input");
    const results = dialog.querySelector("#a23-search-results");
    const contrastButton = dialog.querySelector("#a23-contrast");
    let lastFocus = null;

    function renderResults() {
      const query = normalize(searchInput.value);
      const matches = index.filter((item) => {
        const haystack = normalize([item.title, item.group, item.detail, item.terms].join(" "));
        return !query || haystack.includes(query);
      }).slice(0, 12);
      results.replaceChildren();
      if (!matches.length) {
        const empty = document.createElement("p");
        empty.className = "a23-search-empty";
        empty.textContent = "Nessun risultato. Prova con un album, un brano o una sezione.";
        results.appendChild(empty);
        return;
      }
      matches.forEach((item) => {
        const link = document.createElement("a");
        link.className = "a23-search-result";
        link.href = pageUrl(item.path);
        link.setAttribute("role", "option");
        const title = document.createElement("strong");
        title.textContent = item.title;
        const detail = document.createElement("small");
        detail.textContent = item.detail;
        const group = document.createElement("em");
        group.textContent = item.group;
        link.append(title, detail, group);
        link.addEventListener("click", () => {
          if (dialog.open) dialog.close();
        });
        results.appendChild(link);
      });
    }

    function openSearch() {
      lastFocus = document.activeElement;
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
      searchInput.value = "";
      renderResults();
      window.setTimeout(() => searchInput.focus(), 0);
    }

    function closeSearch() {
      if (dialog.open && typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }

    const header = document.querySelector("header.nav");
    const searchButton = document.createElement("button");
    searchButton.type = "button";
    searchButton.className = "a23-search-trigger";
    searchButton.setAttribute("aria-label", "Apri la ricerca del portale");
    searchButton.setAttribute("aria-keyshortcuts", "Control+K Meta+K /");
    searchButton.innerHTML = '<span aria-hidden="true">⌕</span><span>Cerca</span><span class="a23-key">⌘K</span>';
    searchButton.addEventListener("click", openSearch);
    if (header) {
      const target = header.querySelector(".nav-cta") || header.querySelector(".menu-toggle");
      if (target) header.insertBefore(searchButton, target);
      else header.appendChild(searchButton);
    } else {
      searchButton.style.position = "fixed";
      searchButton.style.top = "16px";
      searchButton.style.right = "16px";
      searchButton.style.zIndex = "60";
      document.body.appendChild(searchButton);
    }

    searchInput.addEventListener("input", renderResults);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeSearch();
    });
    contrastButton.addEventListener("click", () => {
      const enabled = !document.documentElement.classList.contains("a23-amoled");
      document.documentElement.classList.toggle("a23-amoled", enabled);
      contrastButton.setAttribute("aria-pressed", enabled ? "true" : "false");
      contrastButton.textContent = enabled ? "Disattiva AMOLED" : "Contrasto AMOLED";
      try { localStorage.setItem("a23-amoled", enabled ? "1" : "0"); } catch (_) {}
    });

    document.addEventListener("keydown", (event) => {
      const target = event.target;
      const typing = target && (target.matches("input, textarea, select") || target.isContentEditable);
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (!dialog.open) openSearch();
        else closeSearch();
        return;
      }
      if (event.key === "/" && !typing && !dialog.open && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
        openSearch();
      }
    });

    const backToTop = document.createElement("button");
    backToTop.className = "a23-top";
    backToTop.type = "button";
    backToTop.textContent = "↑";
    backToTop.setAttribute("aria-label", "Torna all’inizio della pagina");
    backToTop.addEventListener("click", () => {
      const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    });
    document.body.appendChild(backToTop);
    const updateTop = () => backToTop.classList.toggle("is-visible", window.scrollY > 500);
    window.addEventListener("scroll", updateTop, { passive: true });
    updateTop();

    document.querySelectorAll(".dates").forEach((table, number) => {
      const body = table.tBodies && table.tBodies[0];
      if (!body || table.dataset.a23FilterReady) return;
      table.dataset.a23FilterReady = "true";
      const tools = document.createElement("div");
      tools.className = "a23-filter-tools";
      const input = document.createElement("input");
      input.type = "search";
      input.placeholder = "Filtra per città, sala o data…";
      input.setAttribute("aria-label", "Filtra date per città, sala o data");
      input.id = "a23-date-filter-" + number;
      const status = document.createElement("select");
      status.setAttribute("aria-label", "Filtra le date per disponibilità");
      status.innerHTML = '<option value="tutte">Tutti gli stati</option><option value="disponibile">Disponibili</option><option value="sold">Esaurite</option>';
      const count = document.createElement("span");
      count.className = "a23-filter-count";
      count.setAttribute("aria-live", "polite");
      tools.append(input, status, count);
      table.parentNode.insertBefore(tools, table);

      function filterDates() {
        const query = normalize(input.value);
        const state = status.value;
        let visible = 0;
        Array.from(body.rows).forEach((row) => {
          const content = normalize(row.textContent);
          const sold = content.includes("sold out") || content.includes("esaurit");
          const stateMatches = state === "tutte" || (state === "sold" ? sold : !sold);
          const show = content.includes(query) && stateMatches;
          row.hidden = !show;
          if (show) visible += 1;
        });
        count.textContent = visible + (visible === 1 ? " data" : " date");
      }
      input.addEventListener("input", filterDates);
      status.addEventListener("change", filterDates);
      filterDates();
    });

    document.querySelectorAll(".tracklist").forEach((list, number) => {
      if (list.dataset.a23FilterReady) return;
      list.dataset.a23FilterReady = "true";
      const tools = document.createElement("div");
      tools.className = "a23-track-tools";
      const input = document.createElement("input");
      input.className = "a23-track-filter";
      input.type = "search";
      input.placeholder = "Filtra i brani…";
      input.setAttribute("aria-label", "Filtra i brani della tracklist");
      input.id = "a23-track-filter-" + number;
      tools.appendChild(input);
      list.parentNode.insertBefore(tools, list);
      input.addEventListener("input", () => {
        const query = normalize(input.value);
        list.querySelectorAll("li").forEach((item) => {
          item.hidden = !normalize(item.textContent).includes(query);
        });
      });
    });

    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
      const rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
      rel.add("noopener");
      rel.add("noreferrer");
      link.setAttribute("rel", Array.from(rel).join(" "));
    });
  }



  // V22 — interattività progressive enhancement; no external dependencies.
  function initializeV22Visuals() {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const header = document.querySelector('.nav');
    const logo = document.querySelector('.wordmark');
    if (logo) {
      // The brand mark remains visible even while the document is scrolling.
      logo.classList.add('v22-brand-anchor');
      logo.setAttribute('aria-label', 'Assemblage 23 Italia — torna all’inizio');
      if (!logo.querySelector('.v22-logo-dot')) {
        const dot = document.createElement('span');
        dot.className = 'v22-logo-dot';
        dot.setAttribute('aria-hidden', 'true');
        logo.appendChild(dot);
      }
    }
    if (header) {
      header.classList.add('v22-header');
      const applyScrollState = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
      window.addEventListener('scroll', applyScrollState, { passive: true });
      applyScrollState();
    }
    const links = Array.from(document.querySelectorAll('.nav-links a'));
    // Only resolve in-page fragment links; page URLs like ./date.html are not CSS selectors.
    const sections = links.map((link) => {
      const href = link.getAttribute('href') || '';
      return { link, target: href.startsWith('#') ? document.querySelector(href) : null };
    }).filter((item) => item.target);
    if ('IntersectionObserver' in window && sections.length) {
      const observer = new IntersectionObserver((entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        sections.forEach(({ link, target }) => {
          const active = target === visible.target;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, .15, .35] });
      sections.forEach(({ target }) => observer.observe(target));
    }
    if (!document.querySelector('[data-v22-top]')) {
      const top = document.createElement('button');
      top.type = 'button'; top.dataset.v22Top = ''; top.className = 'v22-top';
      top.setAttribute('aria-label', 'Torna all’inizio'); top.textContent = '↑';
      document.body.appendChild(top);
      const updateTop = () => top.classList.toggle('is-visible', window.scrollY > 520);
      window.addEventListener('scroll', updateTop, { passive: true });
      updateTop();
      top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));
    }
    // Global keyboard entry points; never steal keystrokes while editing a field.
    const searchButton = document.querySelector('[data-v21-search], [data-search-open], #open-search, [aria-label*="Cerca"]');
    document.addEventListener('keydown', (event) => {
      const target = event.target;
      const typing = target && (target.matches('input, textarea, select') || target.isContentEditable);
      if (!typing && event.key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey && searchButton) {
        event.preventDefault(); searchButton.click();
      }
      if (!typing && (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k' && searchButton) {
        event.preventDefault(); searchButton.click();
      }
    });
    // Reusable color theme control: default is OLED black, alternatives are user-selectable.
    if (!document.querySelector('[data-v22-theme]') && header) {
      const theme = document.createElement('button');
      theme.type = 'button'; theme.dataset.v22Theme = ''; theme.className = 'v22-theme';
      theme.setAttribute('aria-label', 'Cambia accento cromatico'); theme.title = 'Cambia accento cromatico';
      theme.innerHTML = '<span aria-hidden="true">◉</span><span class="v22-theme-label">Colore</span>';
      const navActions = header.querySelector('.nav-links');
      if (navActions) navActions.insertAdjacentElement('afterend', theme);
      const colors = [
        { name: 'Lime AMOLED', accent: '#d6f25a', soft: 'rgba(214,242,90,.12)' },
        { name: 'Electric blue', accent: '#79c8ff', soft: 'rgba(121,200,255,.12)' },
        { name: 'Signal orange', accent: '#ff8a52', soft: 'rgba(255,138,82,.12)' },
        { name: 'Ultraviolet', accent: '#c3a2ff', soft: 'rgba(195,162,255,.12)' }
      ];
      let active = 0;
      theme.addEventListener('click', () => {
        active = (active + 1) % colors.length;
        const palette = colors[active];
        document.documentElement.style.setProperty('--v22-accent', palette.accent);
        document.documentElement.style.setProperty('--color-accent', palette.accent);
        document.documentElement.style.setProperty('--v22-accent-soft', palette.soft);
        document.documentElement.style.setProperty('--v22-contrast-accent', palette.accent);
        document.documentElement.dataset.v22Palette = String(active);
        theme.setAttribute('aria-label', 'Accento cromatico: ' + palette.name + '. Clicca per cambiare');
        theme.title = 'Accento: ' + palette.name;
        const label = theme.querySelector('.v22-theme-label');
        if (label) label.textContent = palette.name;
      });
    }
    // External links opened in new tabs must not get an opener reference.
    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
      const rel = new Set((link.rel || '').split(/\s+/).filter(Boolean));
      rel.add('noopener'); rel.add('noreferrer'); link.rel = Array.from(rel).join(' ');
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeV22Visuals, { once: true });
  else initializeV22Visuals();

  if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();