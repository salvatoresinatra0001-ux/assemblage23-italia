# Assemblage 23 Italia

**Archivio italiano indipendente dedicato ad Assemblage 23**  
*Tom Shear · Biografia · Discografia · Collaborazioni · Concerti · Cultura elettronica*

A cura di **Salvatore Sinatra**.

> **Stato aggiornato (21 ottobre 2026):** la revisione V24 è disponibile nel branch `v24-sync-netlify-seo-audit-20261021`, derivato da `v23-suprema-staging-20261021`. `main` non viene modificato direttamente. Il deploy Netlify di produzione è in stato `ready`, ma i metadati mostrano origine manuale (`drop`) senza branch o commit associati. La sincronizzazione automatica GitHub → Netlify è quindi ancora da configurare e verificare.

## Il progetto

**Assemblage 23 Italia** è un progetto editoriale indipendente, in lingua italiana, dedicato ad **Assemblage 23**, progetto musicale statunitense fondato da **Tom Shear** nel 1988 e legato alle espressioni dell'elettronica alternativa, dell'industrial e del futurepop.

L'archivio intende offrire una consultazione sistematica di opere, percorsi creativi e contesto storico-musicale, mantenendo distinte le informazioni documentate dall'analisi critica e dai contenuti redazionali.

## Architettura editoriale e verifica

- **Tom Shear e Assemblage 23:** identità del progetto, biografia e cronologia artistica.
- **Discografia:** album, EP, singoli, edizioni speciali, raccolte, ristampe e materiale d'archivio, da mantenere verificati.
- **Tracce e crediti:** brani, date di pubblicazione, etichette e partecipazioni, quando documentati.
- **Remix e collaborazioni:** distinzione tra remix ufficiali, featuring, produzioni e progetti collegati.
- **Concerti e tournée:** archivio storico e rimandi a comunicazioni ufficiali per date future.
- **Approfondimenti:** estetica sonora, temi, influenze e contesto futurepop, EBM e industrial.
- **Media e fonti:** materiali con diritti verificati, collegamenti primari e date di consultazione.

La presenza di contenuti nell'archivio non sostituisce la verifica della loro accuratezza, delle fonti e dei diritti d'uso.

## Revisioni e fonti di pubblicazione

- **Baseline visuale:** bundle editoriale V23 e pagine nella cartella `site/`.
- **Branch V23:** `v23-suprema-staging-20261021`.
- **Branch V24:** `v24-sync-netlify-seo-audit-20261021`, area di revisione con audit tecnico, controlli automatici e header di pubblicazione.
- **Homepage:** `site/index.html`; il documento è un bundle JavaScript che ricostruisce la UI, da collaudare con rendering reale e senza JavaScript.
- **Favicon:** `site/favicon.svg`, SVG vettoriale, accento arancione `#FF3B1F`; web manifest in `site/site.webmanifest`.
- **Crawler:** `site/robots.txt` e `site/sitemap.xml`.
- **Audit automatico:** `node scripts/seo-audit.mjs`.
- **Workflow di controllo:** `.github/workflows/seo-audit.yml`.
- **Header statici Netlify:** `site/_headers`.
- **Deploy GitHub Pages:** `.github/workflows/deploy.yml`, pubblica `site/` dal branch `main`; la branch V24 non pubblica su GitHub Pages fino al merge.
- **Deploy Netlify:** progetto `assemblage23-italia`, dominio canonico `https://www.assemblage23.it`. L'ultimo deploy controllato risulta manuale e non associato a commit/branch. La CI/CD GitHub non può essere data per collegata finché non è visibile nella configurazione Netlify.

## Audit V24

Il report completo è in [`docs/SEO-AUDIT-V24.md`](docs/SEO-AUDIT-V24.md). L'audit automatico verifica:

- lingua HTML, title e meta description;
- canonical, Open Graph e Twitter/X card;
- JSON-LD di tipo `WebSite`;
- robots, sitemap, URL unici e hostname canonico;
- favicon, manifest e direttiva noindex per la pagina 404.

L'audit tecnico non misura l'indicizzazione, la reputazione, i backlink o i Core Web Vitals. Per completare la verifica servono Search Console, un crawl di tutte le URL e un collaudo Lighthouse/visivo.

## Collegamenti

- **Dominio finale:** https://www.assemblage23.it/
- **Repository:** https://github.com/salvatoresinatra0001-ux/assemblage23-italia
- **Branch V24:** https://github.com/salvatoresinatra0001-ux/assemblage23-italia/tree/v24-sync-netlify-seo-audit-20261021
- **Netlify produzione:** https://app.netlify.com/projects/assemblage23-italia
- **Sito GitHub Pages storico:** https://salvatoresinatra0001-ux.github.io/assemblage23-italia/ — non è il canonical SEO del dominio finale.

## Criteri editoriali e fonti

Le schede discografiche dovrebbero riportare, quando disponibili, titolo, tipologia, anno, etichetta, formato, tracklist, collaboratori, fonte e data di verifica. Distinguere dati documentati, informazioni da confermare e valutazioni critiche.

Fonti ufficiali di riferimento:
- [Sito ufficiale Assemblage 23](https://www.assemblage23.com/)
- [Assemblage 23 su Bandcamp](https://assemblage23.bandcamp.com/)

## Indipendenza e diritti

**Assemblage 23 Italia è un progetto editoriale indipendente e non ufficiale.** Non è affiliato a Tom Shear, ad Assemblage 23, ai relativi rappresentanti o alle etichette discografiche.

Marchi, loghi, testi musicali, copertine, fotografie, video e registrazioni di terzi appartengono ai rispettivi titolari. **L'attribuzione della fonte non sostituisce un'autorizzazione all'utilizzo.** Ogni materiale pubblicato deve disporre di un'adeguata base giuridica per il suo impiego.

L'eventuale licenza del codice sorgente non si estende automaticamente ai contenuti editoriali e ai materiali di terzi. Salvatore Sinatra mantiene l'attribuzione dei propri testi originali.

---

**Curatela e progetto editoriale:** Salvatore Sinatra  
**Contesto:** Music Archives Italia · Archivio musicale indipendente  
**Stato della revisione:** V24 · 21 ottobre 2026
