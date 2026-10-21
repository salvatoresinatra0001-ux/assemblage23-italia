# Assemblage 23 Italia — audit tecnico SEO V24

**Data:** 21 ottobre 2026  
**Branch:** `v24-sync-netlify-seo-audit-20261021`  
**Baseline:** `v23-suprema-staging-20261021`  
**Ambiente di produzione verificato:** Netlify `assemblage23-italia`, dominio `https://www.assemblage23.it`

## Stato sintetico

L'audit riguarda i file disponibili nella repository e i metadati restituiti da Netlify. Non rappresenta una scansione completa del DOM renderizzato, dei Core Web Vitals, di Search Console o dei backlink.

| Area | Riscontro iniziale | Stato |
|---|---|---|
| Repository GitHub | `salvatoresinatra0001-ux/assemblage23-italia`, branch preesistente `main` e staging V23 | Verificato |
| Branch V24 | Creata da `v23-suprema-staging-20261021` | Creata |
| Netlify | Progetto `assemblage23-italia`, dominio primario `www.assemblage23.it` | Verificato |
| Deploy pubblicato | `ready`, deploy del 17 ottobre 2026, sorgente `drop`/manuale, senza branch né commit associati | Verificato |
| Collegamento GitHub ↔ Netlify | Il deploy attuale non mostra una sorgente Git; non è dimostrato un collegamento automatico | Da attivare/verificare in Netlify |
| Branch deploy / Deploy Preview | Non confermato dal progetto Netlify attualmente accessibile | Da configurare dopo il collegamento Git |
| Base44 | App `Assemblage 23 Italia`, ID `6ad81c942f5f41099acebef8`; al controllo iniziale risultava solo la branch `main` | Revisione richiesta all'editor Base44; sincronizzazione con la repository da non presumere |

## Controlli SEO già presenti nella baseline V23

- HTML dichiarato in italiano (`lang="it"`) e UTF-8.
- Titolo e meta description descrittivi dell'archivio italiano su Assemblage 23 e Tom Shear.
- Canonical della homepage verso `https://www.assemblage23.it/`.
- Open Graph, Twitter/X card e JSON-LD di tipo `WebSite`.
- `site/robots.txt` con sitemap dichiarata.
- `site/sitemap.xml` con pagine editoriali del dominio canonico.
- Favicon SVG vettoriale e `site.webmanifest`, con colore d'accento arancione `#FF3B1F`.
- Pagina 404 separata con indicazione `noindex`.

Questi elementi sono presenti nei file esaminati: non equivalgono alla verifica dell'indicizzazione o a un punteggio SEO garantito.

## Interventi V24 introdotti nella branch

1. **Audit ripetibile:** `scripts/seo-audit.mjs` verifica title, description, lingua, canonical, Open Graph, Twitter/X card, JSON-LD, robots, sitemap, favicon, manifest e 404.
2. **Controllo CI:** `.github/workflows/seo-audit.yml` esegue l'audit nei push/PR interessati, senza dipendenze npm aggiuntive.
3. **Header di pubblicazione:** `site/_headers` aggiunge header di sicurezza di base e una policy di cache conservativa per HTML e asset.
4. **Igiene repository:** `.gitignore` esclude `.netlify/`, artefatti locali, dipendenze e file environment.
5. **Documentazione:** il README di questa branch distingue chiaramente branch, produzione Netlify e sincronizzazione ancora da completare.

## Rischi e priorità residue

### P0 — Collegare e verificare le sorgenti di deploy

In Netlify aprire il progetto `assemblage23-italia` e controllare **Project configuration → Build & deploy → Continuous deployment**. Collegare la repository GitHub indicata sopra, impostare `main` come production branch soltanto se è la release approvata e configurare i branch deploy/Deploy Previews per le branch di revisione. Non pubblicare V24 direttamente sul dominio principale prima dei controlli e dell'approvazione.

Il deploy attualmente osservato è manuale e non contiene commit/branch associati. Perciò non si può dichiarare che push GitHub e deploy Netlify siano già sincronizzati.

### P1 — Rendere più robusta l'indicizzazione dei contenuti

La homepage è un bundle HTML che ricostruisce parte della pagina tramite JavaScript. Il test automatizzato segnala questo rischio: collaudare l'HTML renderizzato, gli H1, i link interni, i metadati specifici per rotta e i contenuti disponibili senza esecuzione JavaScript. Preferire pagine statiche/prerenderizzate o HTML semanticamente utile in origine per le sezioni editoriali importanti.

### P1 — Dati strutturati e anteprime social

Valutare dati strutturati coerenti con il tipo di ciascuna pagina (per esempio `Article` per approfondimenti editoriali e `MusicAlbum`/tipologie musicali soltanto quando i dati sono completi e verificati). Aggiungere un'immagine Open Graph/Twitter adeguata solo dopo aver verificato diritti, URL stabile e dimensioni; il favicon non dovrebbe essere usato automaticamente come immagine social principale.

### P1 — Sitemap

Mantenere il sitemap allineato alle pagine canoniche realmente pubblicate; evitare URL di preview, duplicati, redirect e pagine noindex. Inserire `lastmod` solo quando esiste una data di modifica affidabile, non una data aggiornata artificialmente.

### P2 — Misure esterne ancora necessarie

- Google Search Console: sitemap accettata, copertura, canonical selezionati, query e impression.
- Lighthouse/PageSpeed: LCP, INP, CLS e accessibilità su mobile e desktop.
- Crawl URL: status HTTP, redirect chain, canonical reciproci, link interrotti, immagini e alt text.
- Verifica visuale interattiva: menu, navigazione mobile, focus da tastiera, errori JS e pagine 404.

## Condizioni di rilascio

- Audit tecnico senza errori.
- Build e preview Netlify collegate alla branch corretta e testate.
- Controllo visivo desktop/mobile e navigazione di tutte le sezioni.
- Verifica delle URL canoniche, redirect HTTPS, sitemap e robots sul dominio previsto.
- Approvazione esplicita prima di pubblicare su `main`/produzione.

**Nota di versione:** la branch V24 è un'area di revisione. La sua creazione non pubblica automaticamente il sito e non deve essere interpretata come deploy completato.
