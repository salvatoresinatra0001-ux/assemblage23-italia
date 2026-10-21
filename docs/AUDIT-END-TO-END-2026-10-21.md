# Assemblage 23 Italia — audit tecnico end-to-end

Data ultima verifica: 21 ottobre 2026

## Verdetto
**PARZIALE / NON autorizzare il deploy V2 come build Base44 finché non è disponibile l'export sorgente dell'app reale.** L'audit ha confrontato Base44, GitHub e Netlify. La documentazione aggiunta a GitHub ha attivato il workflow GitHub Pages esistente; run #61 e run #62 sono entrambi terminati con successo. Il run #63 (manifest JSON) era in coda all'ultimo controllo.

## Identificatori e assetti
- Base44 app: `6ad81c942f5f41099acebef8`; branch attivo `main`.
- Accesso diretto ai file e shell del sandbox Base44: negato dal piano corrente del workspace (“External coding agents require the Builder plan or above”). Il codice completo dell'app approvata non è stato letto né esportato tramite sandbox.
- GitHub principale: [assemblage23-italia](https://github.com/salvatoresinatra0001-ux/assemblage23-italia); la versione statica esistente è descritta come v20 DC. Commit prima dell'aggiunta audit: `faedad4cc9e96a8920f1a21d7615a008e910d8f4`. Commit documentali successivi: `7e99cefcf84f39cfaebcda83cc5942dd1f730ec2`, `269979c5f868ab959081ac8489c144d28e040893`, e manifest JSON `14ad7bb6760b08313c4ccd912a3fb8728c4629e3`.
- Netlify produzione: progetto `assemblage23-italia`, ID `affca11b-d5db-4780-b0e5-64b62af13d41`, dominio `https://www.assemblage23.it`, deploy ID `6ad2eb01ffc717bcc3f707a8`, stato `ready`.
- Netlify V2: progetto `assemblage23-italia-v2`, ID `bec832a3-a880-45da-baf9-96e3b728dd05`; [dashboard V2](https://app.netlify.com/projects/assemblage23-italia-v2); nessun deploy applicativo pubblicato verificato; accesso ai deploy non-production protetto da SSO del team.
- GitHub V2: la ricerca per `assemblage23-italia-v2` non ha trovato una repository. Gli strumenti GitHub disponibili in questa sessione non espongono una funzione di creazione di nuove repository; non dichiarare la repository come creata.

## Discrepanze

### D-01 — Provenienza della build (critica)
La build visibile nell'editor Base44 non è dimostrata identica al sito statico v20 DC nella repository GitHub. **Azione:** esportare l'app Base44 approvata tramite CLI locale autenticata e confrontare sorgenti e resa. Non etichettare un clone di GitHub `main` come export Base44.

### D-02 — Modelli dati e backend (alta)
Base44 definisce `Album`, `NewsArticle`, `BiographyChapter`, `GalleryItem` e `User`. Non è stato confermato che schemi, record, funzioni o automazioni siano trasferiti nella versione GitHub. I connettori risultavano non collegati nella lettura eseguita. **Azione:** esportare schemi e record autorizzati; inventariare funzioni, agenti, automazioni e dipendenze Base44; escludere credenziali.

### D-03 — Flusso Netlify produzione (alta)
Il deploy riporta `deploy_source=drop`, `manual_deploy=true`, `commit_ref=null`, `branch=null`, `public_repo=null`, `has_source_zip=false`. Il deploy risulta manuale/upload; il collegamento Git Continuous Deployment di produzione non è verificato. **Azione:** collegare solo la repository V2 al sito V2 dopo l'export, senza modificare la produzione.

### D-04 — Homepage/bootstrapping (da collaudare)
`site/index.html` è un HTML di circa 641 kB e contiene `__bundler_thumbnail`, `__bundler_loading` e template embedded `__bundler/*`. Può essere comportamento del formato di export del designer: la sola presenza dei placeholder non prova che il rendering sia guasto. Non è stato completato un test HTTP/browser perché gli strumenti web non hanno reso accessibili i siti pubblici. **Azione:** verificare browser, console, network, desktop e mobile sulla V2 prima del rilascio.

### D-05 — Canonical e URL SEO (media)
Homepage, sottopagine campione, JSON-LD, `robots.txt` e `sitemap.xml` indicano GitHub Pages (`https://salvatoresinatra0001-ux.github.io/assemblage23-italia/`), mentre il dominio Netlify principale è `https://www.assemblage23.it`. **Azione:** per V2 generare canonical, JSON-LD, sitemap e robots in funzione dell'hostname; non indicizzare la preview. La produzione richiede una correzione separata e collaudata.

### D-06 — Link interni e 404 (media)
La pagina 404 statica punta a GitHub Pages. I link relativi e assoluti devono essere controllati su Netlify e dominio personalizzato. **Azione:** scansione URL interni e test di tutte le rotte nella V2.

### D-07 — Preview V2 (configurazione, non errore)
Il progetto Netlify V2 è creato, ma non esiste un deploy applicativo verificato. I deploy non-production richiedono SSO di team. L'URL `assemblage23-italia-v2.netlify.app` non è una preview funzionante finché non è pubblicato un deploy. **Azione:** conservare la protezione; non pubblicare una build placeholder.

## File di audit
- [Handoff V2 Base44](https://github.com/salvatoresinatra0001-ux/assemblage23-italia/blob/main/docs/V2-BASE44-EXPORT-HANDOFF.md)
- [Audit end-to-end](https://github.com/salvatoresinatra0001-ux/assemblage23-italia/blob/main/docs/AUDIT-END-TO-END-2026-10-21.md)
- [Manifest JSON](https://github.com/salvatoresinatra0001-ux/assemblage23-italia/blob/main/docs/AUDIT-END-TO-END-2026-10-21.json)
- [Workflow GitHub Pages](https://github.com/salvatoresinatra0001-ux/assemblage23-italia/actions)

## Controlli di sicurezza e side effect
- Nessun deploy Netlify produzione è stato eseguito.
- Nessuna modifica a dominio o configurazione Netlify produzione.
- Nessuna modifica manuale al sandbox Base44; il branch Base44 rimane `main`.
- Sono stati aggiunti documenti nella repository GitHub principale. Poiché il workflow GitHub Pages si attiva a ogni push su `main`, ciò ha avviato i workflow di Pages; run #61 e #62 sono riusciti. Il run #63 è stato avviato dal manifest JSON.
- Nessuna repository GitHub V2 è stata creata.

## Checklist per completare
- [ ] Esportare l'app Base44 vera da Mac autenticato, in una cartella nuova e senza deploy.
- [ ] Inventariare file, asset, hash, licenze, schemi, dati e dipendenze; eliminare segreti.
- [ ] Creare repository GitHub `assemblage23-italia-v2` con impostazioni deliberate (privata raccomandata in fase di revisione).
- [ ] Collegare esclusivamente tale repository al progetto Netlify V2.
- [ ] Eseguire build, link-check, canonical/robots/sitemap, 404, accessibilità e test visuale responsive.
- [ ] Pubblicare la preview protetta e confrontarla con Base44.
- [ ] Solo dopo approvazione, valutare eventuali cambi produzione con richiesta separata.
