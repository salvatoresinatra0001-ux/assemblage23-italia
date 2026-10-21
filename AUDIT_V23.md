# V23 Suprema — audit tecnico e SEO

**Data:** 21 ottobre 2026  
**Repository:** [assemblage23-italia](https://github.com/salvatoresinatra0001-ux/assemblage23-italia)  
**Branch di lavoro:** `v23-suprema-staging-20261021`  
**Base:** `v22-visuale-interattiva-20261021` — commit `f7c8ecdec2da50b7b38338703e5d3ba427d55295`

## Stato di sicurezza del rilascio

- Le modifiche sono state salvate esclusivamente nel branch V23.
- `main` non è stato aggiornato e non è stato eseguito alcun deploy in produzione in questa fase.
- Netlify riporta il deploy pubblico del 17 ottobre 2026 in stato `ready`, ma con sorgente `drop` e senza branch/commit associati nei metadati verificati.
- Non è stata individuata una preview Netlify esistente chiamata `assemblage23-italia-preview`. Il collaudo browser del sito pubblicato e una preview V23 restano da eseguire.

## Modifiche realizzate

### Identità visiva e favicon
- Sostituita la favicon con SVG vettoriale a risoluzione indipendente, `viewBox 512×512`.
- Mantenuti fondo AMOLED scuro, lettering chiaro e arancione identitario `#FF3B1F`.
- Aggiunto `site.webmanifest` con lingua italiana, tema arancione e favicon SVG.
- Mantenute le varianti cromatiche V22 già esistenti e aggiunti due accenti arancioni selezionabili: `#FF3B1F` e `#FF8A1F`. L'arancione del marchio resta presente.

### Menu Fonti
- Aggiunto `site/fonti.js`, riutilizzato dalle pagine HTML originali tramite `site/sito.js` e dalla homepage bundle V22 tramite caricamento progressivo.
- Il pannello comprende collegamenti ufficiali, date, Instagram, Bandcamp, Spotify, playlist YouTube e cinque schede immagine Wikimedia Commons.
- Le icone sono SVG inline, senza dipendenze esterne; i link esterni usano `rel="noopener noreferrer"`.
- Il pannello usa `dialog` nativo, pulsante di chiusura, overlay cliccabile e ripristino del focus sul pulsante di apertura.
- Il menu non sostituisce la navigazione originale e non introduce una nuova architettura del sito.

### Conservazione dei contenuti
- Tutte le **34 pagine HTML** presenti nella directory `site/` sono ancora presenti sul branch.
- Non sono state eliminate pagine, immagini locali, schede discografiche o file di contenuto.
- I riferimenti a Wikimedia Commons sono ancora presenti nel bundle homepage; il blocco dati `COVERS` resta presente e non è stato modificato.
- In questa fase non sono state importate nuove copertine e non sono state sostituite le copertine esistenti. La verifica individuale della licenza di ogni immagine/copertina resta un'attività distinta.

## SEO — risultati di source audit

- Allineati i canonical e i riferimenti Open Graph/JSON-LD al dominio `https://www.assemblage23.it/` nelle pagine HTML editoriali.
- Aggiornati gli URL della sitemap e il riferimento sitemap in `robots.txt`.
- `site/404.html` continua a dichiarare `noindex`.
- `site/index-legacy-pre-v20dc.html` resta conservata, ma è stata impostata come `noindex,follow` per ridurre il rischio di duplicazione della homepage.
- La homepage V22 conserva il proprio bundle, la navigazione e i dati; il solo aggiornamento strutturale nel controller è il caricamento del menu fonti.

## Verifiche eseguite

- Validata la sintassi JavaScript di `site/fonti.js` tramite parsing.
- Controllati i canonical, Open Graph URL, meta description, Twitter Card e JSON-LD sulle pagine principali, sulle schede discografiche e sulle novità.
- Controllato che le pagine verificate non contengano più riferimenti canonici al precedente dominio GitHub Pages.
- Verificata la presenza della palette arancione e degli oggetti di copertina nel bundle homepage.
- Verificata la presenza di `site.webmanifest`, favicon SVG e collegamento al menu fonti.

## Da completare prima della pubblicazione

1. Collegare/validare il repository GitHub con il progetto Netlify esistente e ottenere una preview V23 reale senza pubblicare `main`.
2. Eseguire test browser su desktop e mobile: apertura/chiusura Fonti, focus tastiera, zoom 200%, riduzione movimento e compatibilità del manifest.
3. Verificare HTTP 200/404 per URL sitemap, risorse locali, link esterni e pagine profonde.
4. Eseguire Lighthouse/PageSpeed per performance, accessibilità, SEO e best practice; raccogliere i punteggi effettivi prima di dichiarare concluso l'audit.
5. Convalidare con la pagina originale la licenza e l'attribuzione di ciascuna fotografia Commons e ogni copertina discografica utilizzata.
6. Eseguire un controllo finale della preview, poi richiedere un'approvazione esplicita prima di aggiornare `main` o il dominio pubblico.

**Verdetto:** la revisione V23 è pronta per una fase di anteprima tecnica, non ancora per dichiarare il rilascio finale. La conservazione dei file è stata verificata a livello repository; i test visuali e di rete restano obbligatori prima del deploy.
