# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 2. 9. 2026 23:23 CEST

## Architektúra a ochrana UI
- Aktuálny používateľský MASTER: `komarena-job-radar-v6.4.html`.
- Autoritatívny živý feed: `jobs-data.json` (`schemaVersion: 1`).
- Bootstrap diverzity: `jobs-data-nonprof.json` — **zamknutý**, automat ho nemení.
- Register zdrojov: `job-sources.json`.
- Pravdivý audit prístupu: `source-audit.json`.
- Stabilný BA fallback: `baseline-jobs.json` — **zamknutý**.
- UI/renderery/index/baseline sú zamknuté; automat mení iba povolené dátové súbory a tento MASTER.
- CRM localStorage: `pracaPreJaraCRM-v3`; používateľské editácie: `pracaPreJaraEdits-v1`.

## Ranking profil
1. WordPress/WooCommerce, web/e-shop/CMS/content/product admin, Shoptet/Shopify/Upgates, maintenance webov/e-shopov.
2. Technický support, Smart Home/IoT/Home Assistant, AI integrácie bez hard developmentu, troubleshooting/reklamácie/IT support.
3. Administratíva/back-office/customer care/operations.
4. Vodič B/kuriér bez tachografu.
5. Sklad/logistika.

### Tvrdý lokalitný gate
- Aktívny feed povoľuje iba **Bratislavu + rozumné okolie/denný dojazd**, alebo **skutočný remote/home-office vykonateľný zo Slovenska bez pravidelného dochádzania do vzdialeného mesta**.
- Mimo BA onsite alebo pravidelný hybrid do vzdialeného mesta = `reject-distance`.
- Nejasná lokalita/remote politika = `locationEligibility: unknown`; najprv overiť, nie odporúčať.
- Nové položky evidujú `locationEligibility` a `locationReason`.

### Negatívne filtre
- AJ A2 preferovaná; B1 mierny/stredný mínus; B2/C1 výrazný mínus.
- Povinný ďalší cudzí jazyk, hard PHP/fullstack/Laravel/React/Vue, pokročilé Linux/Docker/API alebo povinná špecializovaná kvalifikácia bez dôkazu praxe = silná penalizácia alebo hard gate.
- Lokalita BA/okolie alebo overený remote/HO je hard gate, nie bonus.
- Agregátor/repost nesmie prebiť priamy firemný zdroj.

## Aktuálny stav LIVE
- Autoritatívny feed má aktuálne **46 LIVE položiek**.
- Posledný sourcing audit: **11 source families**, z toho **10 mimo Profesia**.
- LIVE mix: **Profesia 23/46 = 50,0 %**, mimo Profesia **23/46 = 50,0 %**.
- Facebook verejná indexácia: `limited`, **0 verified hits**; žiadne fiktívne pokrytie.
- Pending/verification queue: **34 kandidátov**.
- Beh o 23:23 nepridal nový LIVE job; nevznikla bezpečná nová promotion-grade delta po dedupe/applied-state kontrole.
- **IZY VAPE CE – Back Office & Operations Coordinator – e-commerce | Remote** je veľmi silný overený lead: 1 600–2 000 €/mes., prevažne práca z domu z celého Slovenska, príležitostné vopred plánované stretnutia v Bratislave, e-shop objednávky, WooCommerce ako výhoda, logistika, reklamácie, reporting, Trello a AI nástroje. Angličtina B1 je mínus, nie absolútny hard gate. Ponuka však už bola v minulosti používateľom riešená/pripravovaná na reakciu, preto je v `source-audit.json` označená `verification-known-prior-lead-dedupe` a nebola slepo pridaná ako nový LIVE duplikát.
- Upwork **E-commerce Virtual Assistant – WooCommerce, Subscriptions, Customer Service, Xero** zostáva verification: Worldwide remote, 10–15 USD/h, <30 h/týždeň, 1–3 mesiace, contract-to-hire; silný WooCommerce/admin fit, ale vyžaduje good written English, WooCommerce Subscriptions a basic Xero.
- Reddit verejná indexácia nepriniesla nový konkrétny vhodný SK-eligible hiring dopyt; agregované VA linky ani `[FOR HIRE]` príspevky sa nepočítajú ako verified kandidát.
- Facebook zostáva **0 verified hits / limited**.

## Source audit — 2. 9. 2026 23:23
- Profesia: `ok`, 1 relevantný známy hit, 0 pridaných, 1 dedupe/prior-lead.
- Priame company careers: `checked`, 0 nových vhodných hitov.
- LinkedIn Jobs: `limited`, 0 nových promotion-grade hitov.
- Worki.sk: `checked`, 0 nových vhodných hitov.
- Brigada.sk: `checked`, 0 nových vhodných hitov.
- Kariera.sk: `checked`, 0 nových vhodných hitov.
- Práca za rohom: `ok`, IZY VAPE mirror potvrdený; nepočíta sa ako nezávislý nový job oproti Profesia canonical detailu.
- Pretlak / StartupJobs / WordPress Jobs: `checked`, 0 nových hard-gate-pass kandidátov.
- Upwork/freelance: `ok`, 2 relevantné výsledky, 0 LIVE prírastkov; jeden jazykovo/skillovo rizikový, jeden starší/duplicitný.
- Reddit/komunity: `limited`, 0 vhodných SK-eligible verified hitov.
- Facebook public index: `limited`, **0 verified hits**.

## Rozvojový backlog
- Source-family zero-result anomaly detector.
- Verification-to-LIVE transaction ledger.
- Freelance client-risk gate.
- Physical-load & shift suitability extractor.
- Verification evidence snapshot hash.
- Fixed-price effort normalization.
- Freshness-weighted verification budget.
- Hard-vs-soft requirement extractor.
- Canonical-vs-aggregator location contradiction detector.
- Verification queue SLA + auto-expiry.
- Applied-state suppression gate.
- Material-change notification fingerprint.
- Short-window opportunity urgency gate.
- Application-friction score.
- Public-index stale-result quarantine.
- Role-scope complexity budget.
- Source-query evidence manifest.
- Verification value-decay score.
- Language-hard-gate evidence cache.
- Mirror-family independence checker.
- Low-pay freelance floor guard.
- Public-community remote-eligibility evidence gate.
- Seasonal runway + extension score.
- Training-evidence confidence boost.
- Canonical freshness delta debounce.
- Freelance portfolio-evidence requirement estimator.
- Student/eligibility hard-gate extractor.
- Freelance client-engagement freshness signal.
- Listing-to-detail completeness gate.
- Part-time opportunity value normalizer.
- **Prior-contact/application dedupe bridge** — pri discovery porovnať kandidáta nielen s LIVE JSON, ale aj s CRM/applied históriou a poslednými reakčnými balíkmi; zabráni opakovanému odporúčaniu ponuky, na ktorú už bol pripravený alebo odoslaný kontakt.
- **Requirement evidence matrix** — pre každý high-fit kandidát ukladať povinné vs. výhodové požiadavky oddelene (jazyk, platforma, prax, nástroje) a scoring penalizovať iba podľa explicitnej tvrdosti; znižuje falošné rejecty pri požiadavkách typu WooCommerce/AI ako výhoda.
- Autentizovaný Facebook ingestion cez Nexus/local agent.
- Source-success analytics, publishedAt/<24h priority, commute/distance, deadline alerts, company contact enrichment, duplicate cluster report, reply probability, GitHub Actions polling a cross-device sync.

## Stav ochrany / zápisu
- `jobs-data.json`: obsahovo nezmenený; feed zostal fail-closed na 46 LIVE položkách. IZY VAPE nebol automaticky vložený, kým sa neuzavrie prior-contact/applied-state dedupe.
- `source-audit.json`: aktualizovaný po reálnom audite 11 source families; Facebook zostáva 0 verified hits.
- `job-sources.json`: register zdrojov bez potreby štrukturálnej zmeny; existujúce source families zostávajú autoritatívne.
- `PRACA_PRE_JARA_MASTER.md`: aktualizovaný o sourcing stav a dve nové backlog zlepšenia.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.