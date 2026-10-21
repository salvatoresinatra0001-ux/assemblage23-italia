# Audit end-to-end — Assemblage 23 Italia

Data verifica: 21 ottobre 2026

**Esito: PARZIALE — V2 non pronta al deploy.** L'editor Base44, la repository GitHub esistente e il deploy Netlify non sono dimostrati equivalenti come build. Il pacchetto Base44 completo deve precedere il clone V2.

## Stato confermato

- **Base44**: app `6ad81c942f5f41099acebef8`; branch attivo `main`. L'accesso diretto al sandbox/file system non è disponibile nel piano attuale, quindi non è stato possibile enumerare o estrarre i sorgenti completi dall'editor.
- **GitHub**: [repository principale](https://github.com/salvatoresinatra0001-ux/assemblage23-italia), main commit `7e99cefcf84f39cfaebcda83cc5942dd1f730ec2`. La versione antecedente all'audit era `faedad4cc9e96a8920f1a21d7615a008e910d8f4`. Il workflow GitHub Pages sull'ultimo commit è terminato **success**: [run #61](https://github.com/salvatoresinatra0001-ux/assemblage23-italia/actions/runs/39535235325).
- **Netlify produzione**: progetto `assemblage23-italia`, ID `affca11b-d5db-4780-b0e5-64b62af13d41`; dominio `https://www.assemblage23.it`; deploy `6ad2eb01ffc717bcc3f707a8`, stato `ready`. Il deploy riporta `deploy_source=drop`, `commit_ref=null`, `has_source_zip=false`: collegamento CD Git non dimostrato.
- **Netlify V2**: progetto separato `assemblage23-italia-v2`, ID `bec832a3-a880-45da-baf9-96e3b728dd05`, [dashboard](https://app.netlify.com/projects/assemblage23-italia-v2). Non ha ancora un deploy pubblicato. Gli accessi ai deploy non di produzione richiedono SSO del team; il sottodominio riservato non costituisce una preview verificata.
- **Repository V2**: ricerca per `assemblage23-italia-v2` non ha trovato una repository esistente. I tool GitHub disponibili non espongono la creazione di nuove repository, perciò non dichiaro creata la repo.

## Discrepanze registrate e risoluzione

### V-01 — Identità della build (critica)
La build editoriale Base44 non è verificata come uguale alla static v20 DC presente su GitHub. **Risoluzione:** esportare l'app Base44 vera; non derivare V2 da `main` e chiamarla export Base44.

### V-02 — Dati e logica Base44 (alta)
Sono definite le entità `Album`, `NewsArticle`, `BiographyChapter`, `GalleryItem` e `User`, ma il repository consultato è una struttura HTML/CSS/JS statica e non prova il trasferimento dei dati/backend Base44. **Risoluzione:** includere nel pacchetto schemi, record esportabili, funzioni, automazioni e metadati connettori; escludere credenziali.

### V-03 — Flusso di deploy Netlify (alta)
Il deploy di produzione è un upload manuale, non un deploy attribuito a un commit Git. **Risoluzione:** collegare la repository *V2* al sito Netlify *V2* solo dopo export e build verificata. Non cambiare il progetto di produzione durante questo passaggio.

### V-04 — Bootstrap homepage (alta, da confermare)
`site/index.html` contiene `__bundler_thumbnail` e `__bundler_loading`. Va verificato tutto il bootstrap, i bundle e il rendering browser: l'estratto iniziale da solo non basta a dichiarare guasta la pagina. **Risoluzione:** smoke test HTTP e visivo desktop/mobile sulla V2 prima di pubblicarla.

### V-05 — Canonical e SEO (media)
La homepage e le pagine HTML esaminate indicano canonical verso GitHub Pages, mentre il dominio custom di produzione è `www.assemblage23.it`. Anche sitemap e robots dichiarano GitHub Pages. **Risoluzione:** generare canonical, robots e sitemap in base all'hostname dell'ambiente; per V2 non indicizzare la preview. La produzione richiede una revisione approvata separata.

### V-06 — URL interni e 404 (media)
La pagina 404 punta a GitHub Pages. Occorre verificare i link assoluti e relativi sull'host Netlify V2. **Risoluzione:** scansione link e test delle rotte durante il collaudo.

### V-07 — Repository e progetto V2 (alta)
Il progetto Netlify V2 è stato creato ma non è collegato a una repository V2 e non contiene un deploy valido. **Risoluzione:** non effettuare il primo deploy finché il sorgente Base44 esportato non è stato importato, verificato e collegato.

## Vincoli di sicurezza adottati

- Nessun cambiamento intenzionale al dominio o al deploy Netlify di produzione.
- Nessun nuovo deploy Netlify di produzione.
- Nessuna modifica manuale ai file del sandbox Base44; il branch Base44 resta `main`.
- È stata aggiunta la documentazione `docs/V2-BASE44-EXPORT-HANDOFF.md` alla repository principale. Poiché il workflow `main` si attiva a ogni push, questo commit ha fatto scattare GitHub Pages; il job è riuscito. Non è stato modificato il codice del sito in tale commit.

## Checklist per chiudere l'audit

- [ ] Ottenere export completo dell'app effettiva da Base44.
- [ ] Inventariare file e asset, hash e licenze; escludere segreti.
- [ ] Creare repository GitHub V2 indipendente e caricarvi l'export.
- [ ] Impostare pipeline Git per solo il progetto Netlify V2.
- [ ] Eseguire build, link check, redirect, canonical, sitemap, robots, 404, accessibilità e rendering responsive.
- [ ] Pubblicare preview V2 e compararla all'editor Base44.
- [ ] Solo dopo approvazione valutare eventuali correzioni al sito principale.

## Inventario JSON

```json
{
  "audit_date": "2026-10-21",
  "verdict": "PARTIAL",
  "source_of_truth": {
    "base44_app": "6ad81c942f5f41099acebef8",
    "base44_branches": [
      "main"
    ],
    "remote_code_access": "blocked_by_workspace_plan"
  },
  "github": {
    "repository": "salvatoresinatra0001-ux/assemblage23-italia",
    "main_commit": "7e99cefcf84f39cfaebcda83cc5942dd1f730ec2",
    "predecessor_commit": "faedad4cc9e96a8920f1a21d7615a008e910d8f4",
    "workflow_status": "success",
    "workflow_url": "https://github.com/salvatoresinatra0001-ux/assemblage23-italia/actions/runs/39535235325",
    "handoff_document": "docs/V2-BASE44-EXPORT-HANDOFF.md"
  },
  "netlify": {
    "production_project": "assemblage23-italia",
    "production_site_id": "affca11b-d5db-4780-b0e5-64b62af13d41",
    "production_url": "https://www.assemblage23.it",
    "production_deploy": "6ad2eb01ffc717bcc3f707a8",
    "production_deploy_state": "ready",
    "production_deploy_source": "drop",
    "production_repo_git_link_verified": false,
    "v2_project": "assemblage23-italia-v2",
    "v2_site_id": "bec832a3-a880-45da-baf9-96e3b728dd05",
    "v2_has_published_deploy": false,
    "v2_url": "http://assemblage23-italia-v2.netlify.app",
    "v2_nonproduction_protection": "SSO team login required"
  },
  "discrepancies": [
    {
      "id": "V-01",
      "severity": "critical",
      "area": "build provenance",
      "finding": "Base44 editor build and current GitHub static v20 DC repository are not proven to be the same artifact.",
      "resolution": "V2 must not be cut from GitHub main as if it were a Base44 export; obtain full Base44 export first."
    },
    {
      "id": "V-02",
      "severity": "high",
      "area": "Base44 data/backend",
      "finding": "Base44 schemas Album, NewsArticle, BiographyChapter, GalleryItem and User exist, while GitHub code inspected is static HTML/CSS/JS and no matching resource layer confirmed.",
      "resolution": "Export schema/data/functions/connectors separately; document migration or static snapshot boundary."
    },
    {
      "id": "V-03",
      "severity": "high",
      "area": "Netlify pipeline",
      "finding": "Production deploy reports source=drop, commit_ref=null and no source ZIP; not verified as Git-connected CD.",
      "resolution": "Do not alter production automatically; configure V2's Git integration after repository exists."
    },
    {
      "id": "V-04",
      "severity": "high",
      "area": "SEO/render",
      "finding": "site/index.html shows __bundler_thumbnail and __bundler_loading bootstrap/placeholder. Need inspect remaining HTML/script to confirm whether runtime bundle is intact; not declared conclusively broken from partial view alone.",
      "resolution": "Inspect full homepage bootstrap and test HTTP/browser in V2 before release."
    },
    {
      "id": "V-05",
      "severity": "medium",
      "area": "Canonical URL",
      "finding": "Home and sitemap canonicals/locations point to GitHub Pages despite custom domain https://www.assemblage23.it.",
      "resolution": "V2 should use its own base URL; production canonical alignment needs approved change after validation."
    },
    {
      "id": "V-06",
      "severity": "medium",
      "area": "robots/sitemap",
      "finding": "robots.txt and sitemap.xml point to GitHub Pages URL, which conflicts with Netlify custom-domain ownership when viewed on custom domain.",
      "resolution": "Generate V2 robots and sitemap for preview domain; suppress indexing in non-production."
    },
    {
      "id": "V-07",
      "severity": "medium",
      "area": "404 / nav",
      "finding": "404 page link points to GitHub Pages root; needs target-base validation on Netlify/root hosting.",
      "resolution": "Audit all relative and absolute internal URLs during V2 smoke tests."
    },
    {
      "id": "V-08",
      "severity": "high",
      "area": "V2 deliverable",
      "finding": "V2 Netlify project exists but no deploy; no GitHub repo named assemblage23-italia-v2 found. Direct Base44 sandbox tools denied by current workspace plan.",
      "resolution": "Create isolated repository only when full source can be transferred accurately; no mockup/older static copy labeled Base44 V2."
    }
  ],
  "safety": {
    "production_domain_modified": false,
    "production_netlify_config_modified": false,
    "base44_main_modified_by_manual_files": false,
    "only_github_change": "Added V2 handoff doc to original repository main; it triggered existing GitHub Pages workflow."
  }
}
```
