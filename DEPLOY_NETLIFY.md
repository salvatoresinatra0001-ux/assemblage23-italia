# Assemblage 23 Italia — Netlify e flusso di rilascio V23

## Stato verificato al 21 ottobre 2026

- Dominio pubblico configurato: `https://www.assemblage23.it`.
- Il deploy pubblico Netlify verificato (`6ad2eb01ffc717bcc3f707a8`) è `ready`, pubblicato il 17 ottobre 2026 tramite caricamento manuale (`drop`); i metadati non riportano branch, commit o repository collegati.
- Il branch `v23-suprema-staging-20261021` contiene modifiche non pubblicate. Non è stato eseguito un deploy in produzione.
- Il progetto di anteprima `assemblage23-italia-preview` non risulta disponibile fra i progetti Netlify accessibili alla verifica.
- Prima del rilascio, collegare e verificare il repository GitHub con il progetto Netlify esistente, quindi testare una preview separata. Non impostare il branch V23 come branch di produzione.

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

Collegare il progetto Netlify già creato al repository GitHub `salvatoresinatra0001-ux/assemblage23-italia`. Impostare `main` come production branch, `site` come publish directory e nessun build command. Dopo il collegamento, verificare un deploy Git da `main` con esito Published/Ready e il commit/branch nei metadati. Solo a quel punto si può considerare attivo il deploy automatico a ogni push su `main`.

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
