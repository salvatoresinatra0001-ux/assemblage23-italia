(() => {
  const DATA = {"featured":"null","bandcamp":"https://assemblage23.bandcamp.com","spotifyArtist":"https://open.spotify.com/artist/7pwThElmrxl0pjTwXMojCx","releases":{"null":{"title":"Null","spotifyAlbumId":"1ujia8BjXfOVQrJLtBHdWR","tracks":["Believe","Lunatics","Gone","Fuel","Tolerate","Normal","Last","The Line","Overthrow","Waited"]},"believe-inhalt-remix":{"title":"Believe (INHALT Remix)","spotifyAlbumId":null,"tracks":["Believe (INHALT Remix)"]},"believe":{"title":"Believe","spotifyAlbumId":"1ujia8BjXfOVQrJLtBHdWR","tracks":["Believe"]},"tolerate":{"title":"Tolerate","spotifyAlbumId":"1ujia8BjXfOVQrJLtBHdWR","tracks":["Tolerate"]},"mourn":{"title":"Mourn","spotifyAlbumId":null,"tracks":["Epiphany","Factory","Bloom","Anxiety","Confession","Dissonance","Welcome, Apocalypse","Could've","Tragedy","This House Is Empty"]},"endure":{"title":"Endure","spotifyAlbumId":null,"tracks":["Endure","Afterglow","Bravery","Salt the Earth","Static","Call the Dawn","Butterfly Effect","Barren","Grid","December"]},"bruise":{"title":"Bruise","spotifyAlbumId":null,"tracks":["Crosstalk","The Last Mistake","Over & Out","The Noise Inside My Head","Outsider","Darkflow","Automaton","The Other Side of the Wall","Talk Me Down","Otherness"]},"compass":{"title":"Compass","spotifyAlbumId":null,"tracks":["Smoke","Collapse","Impermanence","How Can You Sleep?","Spark","Leave This All Behind","Alive","Greed","Angels & Demons","The Cruelest Year"]},"spark":{"title":"Spark","spotifyAlbumId":null,"tracks":["Spark"]},"meta":{"title":"Meta","spotifyAlbumId":null,"tracks":["Decades (V2)","Raw","Sorry","Ghosts","Binary","Damaged","Madman's Dream","Truth","Crush","Old"]},"binary":{"title":"Binary","spotifyAlbumId":null,"tracks":["Binary"]},"storm":{"title":"Storm","spotifyAlbumId":null,"tracks":["Human","Skin","Ground","Let the Wind Erase Me","Infinite","Complacent","You Haven't Earned It","Regret","Apart","30KFT"]},"ground":{"title":"Ground","spotifyAlbumId":null,"tracks":["Ground"]},"let-the-wind-erase-me":{"title":"Let the Wind Erase Me","spotifyAlbumId":null,"tracks":["Let the Wind Erase Me"]},"defiance":{"title":"Defiance","spotifyAlbumId":null,"tracks":["Opened","Drive","Blindhammer","Cocoon","Document","Fallen Down","Horizon","Light","Maps of Reality","Lullaby"]},"document":{"title":"Document","spotifyAlbumId":null,"tracks":["Document"]},"failure":{"title":"Failure","spotifyAlbumId":null,"tracks":["Naked","I Am the Rain","House on Fire","Tried","Disappoint","Divide","Longevity","Silence","Awake","King of Insects"]},"disappoint":{"title":"Disappoint","spotifyAlbumId":null,"tracks":["Disappoint"]},"contempt":{"title":"Contempt","spotifyAlbumId":null,"tracks":["Anthem","Surface","Coward","Bi-Polar","Pages","Purgatory","Sun","Skyquake","Never Forgive","7 Days","Coward (Melting Mix by Pain Station)","Skyquake (Voice of God Mix)","The Drowning Season (DSKØ2k Mix)"]}}};
  const header = document.querySelector("header.nav");
  const home = document.querySelector(".hero");
  const panel = document.getElementById("menu-pieno");

  function syncNav() {
    if (!header) return;
    const open = panel && panel.classList.contains("is-open");
    header.classList.toggle("is-solid", open || !home || window.scrollY > 24);
  }
  syncNav();
  window.addEventListener("scroll", syncNav, { passive: true });

  function focusables(root) {
    return [...root.querySelectorAll("a, button")].filter((node) => !node.hasAttribute("disabled"));
  }

  function openMenu() {
    if (!panel) return;
    panel.classList.add("is-open");
    document.body.style.overflow = "hidden";
    syncNav();
    focusables(panel)[0]?.focus();
  }

  function closeMenu() {
    if (!panel) return;
    panel.classList.remove("is-open");
    document.body.style.overflow = "";
    syncNav();
    header?.querySelector(".menu-toggle")?.focus();
  }

  let player;
  let expanded = false;
  let current = null;

  function ensurePlayer() {
    if (player) return player;
    player = document.createElement("div");
    player.className = "player";
    player.setAttribute("role", "region");
    player.setAttribute("aria-label", "In ascolto");
    player.innerHTML = '<div class="player-row"><div><p class="kicker">In ascolto</p><p><em data-track></em><span class="meta" data-release></span></p></div><div class="platforms"><button type="button" class="text-link" data-toggle>Apri player</button><a class="text-link" data-spotify target="_blank" rel="noreferrer">Spotify<span class="sr-only">, si apre in una nuova scheda</span></a><a class="text-link" data-bandcamp target="_blank" rel="noreferrer" href="' + DATA.bandcamp + '">Bandcamp<span class="sr-only">, si apre in una nuova scheda</span></a><button type="button" class="text-link" data-close>Chiudi</button></div></div><div data-embed></div><p class="note" data-note hidden></p>';
    document.body.appendChild(player);
    player.querySelector("[data-close]").addEventListener("click", closePlayer);
    player.querySelector("[data-toggle]").addEventListener("click", () => {
      expanded = !expanded;
      renderPlayer();
    });
    return player;
  }

  function renderPlayer() {
    if (!current) return;
    const root = ensurePlayer();
    const release = DATA.releases[current.slug];
    root.querySelector("[data-track]").textContent = current.track;
    root.querySelector("[data-release]").textContent = " · " + release.title;
    const spotify = root.querySelector("[data-spotify]");
    const toggle = root.querySelector("[data-toggle]");
    const note = root.querySelector("[data-note]");
    const embed = root.querySelector("[data-embed]");
    if (release.spotifyAlbumId) {
      spotify.href = "https://open.spotify.com/album/" + release.spotifyAlbumId;
      toggle.hidden = false;
      toggle.textContent = expanded ? "Chiudi player" : "Apri player";
      note.hidden = true;
      embed.innerHTML = expanded
        ? '<iframe title="Album ' + release.title.replace(/"/g, "") + ' su Spotify" src="https://open.spotify.com/embed/album/' + release.spotifyAlbumId + '?utm_source=generator" allow="encrypted-media; clipboard-write" loading="lazy"></iframe>'
        : "";
      document.documentElement.dataset.player = expanded ? "open" : "bar";
    } else {
      spotify.href = DATA.spotifyArtist;
      toggle.hidden = true;
      embed.innerHTML = "";
      note.hidden = false;
      note.textContent = "Questo brano non è isolato in un player interno. Si apre sulle piattaforme, senza autoplay.";
      document.documentElement.dataset.player = "bar";
    }
  }

  function openRelease(slug, track) {
    const release = DATA.releases[slug];
    if (!release) return;
    current = { slug, track: track || release.tracks[0] || release.title };
    expanded = Boolean(release.spotifyAlbumId);
    renderPlayer();
  }

  function closePlayer() {
    current = null;
    expanded = false;
    document.documentElement.dataset.player = "";
    player?.remove();
    player = null;
  }

  function slugFromHref(href) {
    const match = (href || "").match(/musica\/([^./?#]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  }

  function pageSlug() {
    return slugFromHref(location.pathname);
  }

  let lightbox = null;
  function closeLightbox() {
    lightbox?.remove();
    lightbox = null;
    document.body.style.overflow = "";
  }
  function openLightbox(src, alt, caption) {
    closeLightbox();
    lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", alt || "Immagine");
    lightbox.innerHTML = '<div class="lightbox-bar"><p class="caption"></p><button type="button" class="text-link">Chiudi</button></div><img alt="">';
    lightbox.querySelector(".caption").textContent = caption || "";
    const image = lightbox.querySelector("img");
    image.src = src;
    image.alt = alt || "";
    lightbox.querySelector("button").addEventListener("click", closeLightbox);
    document.body.appendChild(lightbox);
    document.body.style.overflow = "hidden";
    lightbox.querySelector("button").focus();
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.classList.contains("menu-toggle") && button.closest("header")) {
      openMenu();
      return;
    }
    if (button.hasAttribute("data-close-menu")) {
      closeMenu();
      return;
    }
    if (button.hasAttribute("data-listen") || (button.classList.contains("nav-cta") && button.closest("header"))) {
      if (panel?.classList.contains("is-open")) closeMenu();
      openRelease(DATA.featured, "Believe");
      return;
    }
    if (button.closest(".gallery")) {
      const image = button.querySelector("img");
      if (!image) return;
      const caption = button.parentElement?.querySelector("figcaption")?.textContent || "";
      openLightbox(image.getAttribute("src") || image.src, image.alt, caption);
      return;
    }
    if (button.closest(".filters")) {
      const label = button.textContent.trim().toLowerCase();
      const kind = label.startsWith("album") ? "album" : label.startsWith("singol") ? "singolo" : "tutto";
      document.querySelectorAll(".filters button").forEach((item) => {
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });
      document.querySelectorAll(".year-block").forEach((block) => {
        let any = false;
        block.querySelectorAll("a.row").forEach((row) => {
          const show = kind === "tutto" || row.dataset.kind === kind;
          row.hidden = !show;
          if (show) any = true;
        });
        block.hidden = !any;
      });
      return;
    }
    if (button.closest(".tracklist")) {
      const track = button.querySelector("em")?.textContent?.trim();
      const slug = button.closest(".release") ? pageSlug() : DATA.featured;
      if (slug && track) openRelease(slug, track);
      return;
    }
    const label = button.textContent.trim();
    if (label !== "Ascolta") return;
    if (button.closest(".secondary")) {
      const slug = slugFromHref(button.parentElement?.querySelector("a")?.getAttribute("href"));
      if (slug) openRelease(slug);
      return;
    }
    if (button.closest(".release")) {
      const slug = pageSlug();
      if (slug) openRelease(slug);
      return;
    }
    openRelease(DATA.featured, "Believe");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (lightbox) closeLightbox();
      else if (panel?.classList.contains("is-open")) closeMenu();
      return;
    }
    if (event.key !== "Tab" || !panel?.classList.contains("is-open")) return;
    const list = focusables(panel);
    if (!list.length) return;
    const first = list[0];
    const last = list[list.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.querySelectorAll(".contact-block").forEach((block) => {
    const trigger = [...block.querySelectorAll("button")].find((item) => item.textContent.includes("Usa nel modulo"));
    const name = block.querySelector("h2")?.textContent.trim();
    const value = name === "stampa" ? "Stampa" : name === "ascoltatori" ? "Altro" : "Booking";
    trigger?.addEventListener("click", () => {
      const select = document.querySelector('select[name="oggetto"]');
      if (select) {
        select.value = value;
        select.focus();
      }
    });
  });

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const consent = form.querySelector('[name="consenso"]');
      if (consent && !consent.checked) return;
      form.reset();
      let status = form.parentElement.querySelector("[data-status]");
      if (!status) {
        status = document.createElement("p");
        status.setAttribute("role", "status");
        status.dataset.status = "";
        form.after(status);
      }
      status.textContent = form.classList.contains("news-form")
        ? "Annotato qui. Non è partita nessuna lettera."
        : "Resta qui. Non è partito nulla: per raggiungere il progetto usa il sito ufficiale.";
    });
  });
})();
