(() => {
  "use strict";
  if (document.documentElement.dataset.a23SourcesInitialized === "true") return;
  document.documentElement.dataset.a23SourcesInitialized = "true";
  const BRAND = "#ff3b1f";
  const sources = [
    { group: "Canali ufficiali", items: [
      { label: "Sito ufficiale", note: "Notizie, biografia e comunicazioni", url: "https://www.assemblage23.com/", icon: "official" },
      { label: "Date ufficiali", note: "Calendario e annunci dei concerti", url: "https://www.assemblage23.com/shows", icon: "calendar" },
      { label: "Instagram ufficiale", note: "Profilo ufficiale di Assemblage 23", url: "https://www.instagram.com/officialassemblage23/", icon: "instagram" }
    ]},
    { group: "Musica e discografia", items: [
      { label: "Bandcamp", note: "Discografia e copertine pubblicate dall'artista", url: "https://assemblage23.bandcamp.com/", icon: "bandcamp" },
      { label: "Spotify", note: "Profilo artista e ascolto in streaming", url: "https://open.spotify.com/artist/7pwThElmrxl0pjTwXMojCx", icon: "spotify" },
      { label: "YouTube · playlist", note: "Playlist citata nella sezione Media", url: "https://www.youtube.com/playlist?list=PL_KXFCfdIIO8QIlzIOF1EK3KERMGmF8IF", icon: "youtube" }
    ]},
    { group: "Fotografie e licenze · Wikimedia Commons", items: [
      { label: "E-Tropolis, Oberhausen · Markus Felix / PushingPixels", note: "Apri la scheda originale e verifica la licenza", url: "https://commons.wikimedia.org/wiki/File:20160305_Oberhausen_E-Tropolis_Assemblage_23_0015.jpg", icon: "commons" },
      { label: "E-Tropolis, Oberhausen · Carstor", note: "Pagina originale del file e attribuzione", url: "https://commons.wikimedia.org/wiki/File:20160305-Assemblage-23-E-tropolis-Oberhausen-5371.jpg", icon: "commons" },
      { label: "Nocturnal Culture Night · S. Bollmann", note: "Pagina originale del file e attribuzione", url: "https://commons.wikimedia.org/wiki/File:Assemblage_23_Nocturnal_Culture_Night_13_2018_05.jpg", icon: "commons" },
      { label: "Foto live · Bobo Boom", note: "Scheda originale; indica CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Assemblage_23_01_(7760279620).jpg", icon: "commons" },
      { label: "Assemblage 23 · Canley", note: "Scheda Commons con licenze e dettagli del file", url: "https://commons.wikimedia.org/wiki/File:Assemblage_23.jpg", icon: "commons" }
    ]}
  ];
  const icons = {
    official: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3.5 12h17M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="16" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M7.5 3v4M16.5 3v4M4 9h16M8 13h3M8 17h6" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.5" cy="6.8" r="1.1" fill="currentColor"/></svg>',
    bandcamp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 16.5 9 5.5h12l-6 11z" fill="currentColor"/></svg>',
    spotify: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 9.2c4.7-1.3 9.2-.7 12 1.1M7.4 12.1c3.7-1 7.5-.5 9.9 1M8.2 14.8c2.8-.7 5.8-.3 7.6.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.8" y="5" width="18.4" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m10 8.7 5.4 3.3-5.4 3.3z" fill="currentColor"/></svg>',
    commons: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M6.8 8.3 9 16l3-5 3 5 2.2-7.7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  function installHeadAssets() {
    if (!document.querySelector('link[rel="icon"][href*="favicon.svg"]')) {
      const icon = document.createElement("link"); icon.rel = "icon"; icon.type = "image/svg+xml"; icon.sizes = "any"; icon.href = "/favicon.svg"; document.head.appendChild(icon);
    }
    if (!document.querySelector('link[rel="manifest"]')) {
      const manifest = document.createElement("link"); manifest.rel = "manifest"; manifest.href = "/site.webmanifest"; document.head.appendChild(manifest);
    }
  }
  function makeSourceLink(item) {
    const a = document.createElement("a"); a.className = "a23-source-link"; a.href = item.url; a.target = "_blank"; a.rel = "noopener noreferrer";
    a.innerHTML = '<span class="a23-source-icon">' + (icons[item.icon] || icons.official) + '</span><span class="a23-source-copy"><strong></strong><small></small></span><span class="a23-source-arrow" aria-hidden="true">↗</span>';
    a.querySelector("strong").textContent = item.label; a.querySelector("small").textContent = item.note; return a;
  }
  function addSourcesMenu() {
    const header = document.querySelector("header.nav, header, [role='banner']");
    if (!header || document.querySelector(".a23-sources-trigger")) return;
    const trigger = document.createElement("button"); trigger.type = "button"; trigger.className = "a23-sources-trigger"; trigger.setAttribute("aria-haspopup", "dialog"); trigger.setAttribute("aria-label", "Apri le fonti di riferimento");
    trigger.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h16M4 12h16M4 18.5h10" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"/></svg><span>Fonti</span>';
    const dialog = document.createElement("dialog"); dialog.className = "a23-sources-dialog"; dialog.id = "a23-sources-dialog"; dialog.setAttribute("aria-labelledby", "a23-sources-title");
    dialog.innerHTML = '<div class="a23-source-head"><div><p class="a23-source-kicker">ARCHIVIO · VERIFICA</p><h2 id="a23-sources-title">Fonti di riferimento</h2><p class="a23-source-intro">Canali ufficiali, ascolto e schede originali delle fotografie. I crediti e le licenze vanno letti nella pagina specifica di ciascun file.</p></div><button type="button" class="a23-source-close" aria-label="Chiudi fonti">×</button></div><div class="a23-source-grid"></div><div class="a23-source-foot"><span>Assemblage 23 Italia · archivio indipendente non ufficiale</span><span>Arancione identitario <b>#FF3B1F</b></span></div>';
    const grid = dialog.querySelector(".a23-source-grid");
    sources.forEach((group) => { const section = document.createElement("section"); section.className = "a23-source-group"; const h3 = document.createElement("h3"); h3.textContent = group.group; section.appendChild(h3); group.items.forEach((item) => section.appendChild(makeSourceLink(item))); grid.appendChild(section); });
    const style = document.createElement("style"); style.id = "a23-sources-styles";
    style.textContent = [
      ".a23-sources-trigger{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:40px;padding:0 12px;border:1px solid var(--color-line,#2c2e32);background:rgba(12,13,15,.88);color:var(--color-fg,#edeae3);font:500 13px/1.2 Arial,sans-serif;cursor:pointer;white-space:nowrap;transition:border-color .18s,color .18s,background .18s}",
      ".a23-sources-trigger svg{width:17px;height:17px;flex:none;color:#ff3b1f}",
      ".a23-sources-trigger:hover,.a23-sources-trigger:focus-visible{border-color:#ff3b1f;color:#ff3b1f}",
      ".a23-sources-trigger:focus-visible,.a23-source-close:focus-visible,.a23-source-link:focus-visible{outline:2px solid #ff3b1f;outline-offset:3px}",
      ".a23-sources-dialog{width:min(780px,calc(100% - 26px));max-width:none;max-height:min(86vh,820px);padding:0;border:1px solid #34363a;background:#0b0b0c;color:#edeae3;box-shadow:0 30px 110px rgba(0,0,0,.7)}",
      ".a23-sources-dialog::backdrop{background:rgba(0,0,0,.8);backdrop-filter:blur(8px)}",
      ".a23-source-head{display:flex;justify-content:space-between;align-items:flex-start;gap:18px;padding:24px;border-bottom:1px solid #2c2e32}",
      ".a23-source-kicker{margin:0 0 10px;color:#ff3b1f;font:11px/1.4 monospace;letter-spacing:.16em}",
      ".a23-source-head h2{font:700 clamp(26px,4vw,38px)/1 Arial,sans-serif;letter-spacing:-.02em;text-transform:uppercase}",
      ".a23-source-intro{max-width:58ch;margin:12px 0 0;color:#a39e94;font:14px/1.6 Arial,sans-serif}",
      ".a23-source-close{width:38px;height:38px;flex:none;border:1px solid #34363a;color:#edeae3;font-size:27px;line-height:1;cursor:pointer}",
      ".a23-source-close:hover{border-color:#ff3b1f;color:#ff3b1f}",
      ".a23-source-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;padding:24px}",
      ".a23-source-group h3{margin:0 0 10px;color:#a39e94;font:11px/1.4 monospace;letter-spacing:.12em;text-transform:uppercase}",
      ".a23-source-link{display:grid;grid-template-columns:38px minmax(0,1fr) auto;align-items:center;gap:11px;padding:10px 0;border-bottom:1px solid #202225;color:#edeae3;text-decoration:none}",
      ".a23-source-link:hover{color:#ff3b1f}",
      ".a23-source-icon{display:grid;place-items:center;width:36px;height:36px;border:1px solid rgba(255,59,31,.26);background:rgba(255,59,31,.08);color:#ff3b1f}",
      ".a23-source-icon svg{width:20px;height:20px}",
      ".a23-source-copy{display:grid;min-width:0;gap:3px}",
      ".a23-source-copy strong{font-size:13px;line-height:1.35;font-weight:600}",
      ".a23-source-copy small{font-size:11px;line-height:1.45;color:#a39e94}",
      ".a23-source-arrow{color:#ff3b1f;font-size:14px}",
      ".a23-source-foot{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;padding:14px 24px;border-top:1px solid #2c2e32;color:#a39e94;font:10px/1.5 monospace}",
      ".a23-source-foot b{color:#ff3b1f;font-weight:600}",
      "@media(max-width:767px){.a23-sources-trigger{min-height:38px;padding:0 10px;font-size:12px}.a23-sources-trigger svg{width:18px;height:18px}}",
      "@media(max-width:560px){.a23-sources-trigger{position:absolute;right:130px;top:10px;min-height:38px;padding:0 9px}.a23-sources-trigger span{display:none}.a23-sources-dialog{width:calc(100% - 18px);max-height:90vh}.a23-source-head{padding:18px}.a23-source-grid{grid-template-columns:minmax(0,1fr);gap:18px;padding:18px}.a23-source-foot{padding:12px 18px}}",
      "@media(prefers-reduced-motion:reduce){.a23-sources-trigger{transition:none}}"
    ].join("\\n");
    document.head.appendChild(style); document.body.appendChild(dialog);
    const anchor = header.querySelector(".menu-toggle, .v22-color-switch, .v22-theme") || null;
    if (anchor) header.insertBefore(trigger, anchor); else header.appendChild(trigger);
    const closeButton = dialog.querySelector(".a23-source-close");
    const open = () => { if (typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open", ""); };
    const close = () => { if (typeof dialog.close === "function" && dialog.open) dialog.close(); else dialog.removeAttribute("open"); trigger.focus(); };
    trigger.addEventListener("click", open); closeButton.addEventListener("click", close);
    dialog.addEventListener("click", (event) => { if (event.target === dialog) close(); }); dialog.addEventListener("close", () => trigger.focus());
  }
  function init() { installHeadAssets(); addSourcesMenu(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true }); else init();
})();