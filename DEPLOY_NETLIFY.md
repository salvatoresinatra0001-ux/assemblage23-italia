# Assemblage 23 Italia — Netlify, versione definitiva v20 DC

## Un'unica sorgente, due hosting

- Repository: https://github.com/salvatoresinatra0001-ux/assemblage23-italia
- Branch di produzione: `main`
- Cartella pubblicabile: `site/`
- Comando di build: **nessuno**
- Configurazione Netlify: `netlify.toml` nella radice della repository
- HTML compilato v20 DC: `site/index.html`
- URL canonico GitHub Pages: https://salvatoresinatra0001-ux.github.io/assemblage23-italia/
- Progetto Netlify esistente: https://app.netlify.com/projects/assemblage23-italia
- Indirizzo Netlify assegnato: https://assemblage23-italia.netlify.app/

## Attivazione una tantum dal browser Netlify

Collegare il progetto Netlify già creato al repository GitHub `salvatoresinatra0001-ux/assemblage23-italia`. Impostare `main` come production branch, `site` come publish directory e nessun build command. Il primo deploy deve terminare con esito Published/Ready. Successivamente Netlify aggiorna il sito automaticamente a ogni push su `main`.

Non ricreare il progetto Netlify e non utilizzare `preview/staging` come branch di produzione.

## Ambiente Preview indipendente

- Progetto Netlify: https://app.netlify.com/projects/assemblage23-italia-preview
- Branch: `preview/staging`
- Build command: `bash preview/build.sh`
- Directory pubblicabile: `_preview`
- Indicizzazione disabilitata tramite robots.txt e X-Robots-Tag.

La branch `preview/v21-predefinitiva` resta un'istantanea storica separata.

## Stato delle verifiche

GitHub Actions verifica il deployment GitHub Pages; non garantisce un collaudo visivo. Il progetto Netlify può esistere senza contenuti pubblicati: controllare lo stato del primo deploy nella dashboard. Non pubblicare fotografie o copertine prive dei diritti necessari. Archivio indipendente non ufficiale.
