# Assemblage 23 Italia

**Archivio italiano indipendente dedicato ad Assemblage 23**  
*Tom Shear · Biografia · Discografia · Collaborazioni · Concerti · Cultura elettronica*

A cura di **Salvatore Sinatra**.

> **Stato del progetto:** repository e sito in preparazione. Il materiale sorgente dovrà essere esaminato e riorganizzato prima della pubblicazione; le sezioni descritte sono obiettivi editoriali, non funzionalità già verificate.

## Il progetto

**Assemblage 23 Italia** è un progetto editoriale indipendente, in lingua italiana, dedicato ad **Assemblage 23**, progetto musicale statunitense fondato da **Tom Shear** nel 1988 e legato alle espressioni dell'elettronica alternativa, dell'industrial e del futurepop.

L'archivio intende offrire una consultazione sistematica di opere, percorsi creativi e contesto storico-musicale, mantenendo distinte le informazioni documentate dall'analisi critica e dai contenuti redazionali.

## Struttura editoriale prevista

- **Tom Shear e Assemblage 23:** identità del progetto, biografia e cronologia artistica.
- **Discografia completa da verificare:** album, EP, singoli, edizioni speciali, raccolte, ristampe e materiale d'archivio.
- **Tracce e crediti:** elenchi dei brani, date di pubblicazione, etichette e partecipazioni, solo quando documentati.
- **Remix e collaborazioni:** lavori di e con altri artisti, con distinzione tra remix ufficiali, featuring, produzioni e progetti collegati.
- **Concerti e tournée:** documentazione storica e rimandi alle comunicazioni ufficiali per le date future.
- **Approfondimenti:** temi, estetica sonora, influenze e rapporto con futurepop, EBM e industrial.
- **Media e fonti:** immagini e video autorizzati, collegamenti e documentazione delle informazioni.

L'elenco definisce la **struttura da sviluppare**; non afferma che tutte le sezioni siano già presenti nel sito attuale.

## Revisione del pacchetto sorgente

Il progetto verrà migrato dal pacchetto locale `assemblage23-sito-completo.zip`, **senza distribuirlo automaticamente così com'è**. Prima della pubblicazione occorre:

1. Analizzare gerarchia delle cartelle, pagine, collegamenti e dipendenze.
2. Conservare i contenuti originali validi e identificare duplicazioni o informazioni non verificate.
3. Correggere percorsi assoluti, riferimenti a `localhost`, asset mancanti e incompatibilità con GitHub Pages.
4. Controllare il funzionamento della navigazione e la compatibilità responsive.
5. Verificare permessi e provenienza dei materiali multimediali.
6. Pubblicare una build verificata, mantenendo una copia del pacchetto sorgente fuori dall'output del sito.

## Indirizzo e pubblicazione

- **Repository prevista:** `salvatoresinatra0001-ux/assemblage23-italia`
- **GitHub Pages (indirizzo previsto, non ancora confermato attivo):** `https://salvatoresinatra0001-ux.github.io/assemblage23-italia/`
- **Lingua principale:** italiano (`it-IT`).
- **Distribuzione:** sito statico tramite branch o GitHub Actions, secondo la struttura sorgente effettivamente accertata.

Per un sito statico già compilato, è possibile pubblicare da **Settings → Pages → Deploy from a branch** scegliendo `main` e la cartella pubblica. Per framework che richiedono una build è preferibile un workflow **GitHub Actions**. L'impostazione effettiva dipende dalla tecnologia riscontrata nei file del progetto.

## Criteri di documentazione

Le schede discografiche dovrebbero riportare, ove disponibili, titolo, tipologia, anno, etichetta, formato, tracklist, collaboratori, collegamento alla fonte e data di verifica. Distinguere sempre dati certi, notizie da confermare e valutazioni editoriali.

## Fonti ufficiali

- [Sito ufficiale Assemblage 23](https://www.assemblage23.com/)
- [Assemblage 23 su Bandcamp](https://assemblage23.bandcamp.com/)

## Indipendenza e diritti

**Assemblage 23 Italia è un progetto editoriale indipendente e non ufficiale.** Non è affiliato a Tom Shear, ad Assemblage 23, ai relativi rappresentanti o alle etichette discografiche.

Marchi, loghi, testi musicali, copertine, fotografie, video e registrazioni di terzi appartengono ai rispettivi titolari. **L'attribuzione della fonte non sostituisce un'autorizzazione all'utilizzo**. Ogni materiale pubblicato deve disporre di un'adeguata base giuridica per il suo impiego.

L'eventuale licenza del codice sorgente non si estende automaticamente ai contenuti editoriali e ai materiali di terzi. Salvatore Sinatra mantiene l'attribuzione dei propri testi originali.

---

**Curatela e progetto editoriale:** Salvatore Sinatra  
**Contesto:** Music Archives Italia · Archivio musicale indipendente  
**Versione documentale:** 1.0 · 15 ottobre 2026
