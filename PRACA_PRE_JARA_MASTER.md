# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 3. 9. 2026 11:35 CEST

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
- Vodičské roly: povinné BE/C/C+E, tachografová karta alebo pravidelné diaľkové/medzinárodné trasy sú hard mismatch oproti preferencii vodič B bez tachografu.
- Lokalita BA/okolie alebo overený remote/HO je hard gate, nie bonus.
- Agregátor/repost nesmie prebiť priamy firemný zdroj.

## Aktuálny stav LIVE
- Autoritatívny feed má aktuálne **48 LIVE položiek**.
- LIVE mix: **Profesia 24/48 = 50,0 %**, mimo Profesia **24/48 = 50,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-03T02:15:13+02:00** — posledná reálna zmena LIVE feedu.
- Sweep 11:35 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- **Upwork – WordPress Website Developer/Designer Needed to Update IT Consulting Company Website**: Worldwide remote, 1 000 USD fixed-price, existing-site modernization namiesto full build, teda tematicky dobrý smer. Do LIVE však nejde: požadovaný experienced WordPress/web-design profil, portfólio, staging/backup, 50+ proposals a úplne nový klientský účet bez histórie. Zaradené do verification.
- **Upwork – Product Image Research & Preparation Specialist – WooCommerce Skincare Store**: Worldwide remote, WooCommerce + produktové dáta/obrázky, ale 100 USD fixed-price pre 100+ produktov a stovky obrázkov + Photoshop; zostáva low-effective-rate verification.
- **AlzaBox Špecialista** zostáva LIVE a bol znovu potvrdený priamou firemnou kariérnou stránkou; nejde o nový hit.
- Aktuálne H&M Bratislava priame career výsledky sú retail/visual merchandising nižšieho rankingu a neprinášajú nový prioritný fit.

## Source audit — 3. 9. 2026 11:35
- Profesia: `checked`; BA WordPress/support/admin/driver discovery reálne preverené, bez novej promotion-grade delty.
- Priame company careers: `ok`; Alza a ďalšie aktuálne firemné career výsledky reálne preverené, bez nového canonical promotion-grade hitu.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez nového konkrétneho BA/remote promotion-grade hitu.
- Worki.sk: `checked`; verejná BA discovery preverená, bez novej promotion-grade delty.
- Brigada.sk: `checked`; BA administratíva/sklad/kuriér discovery preverené, bez nového promotion-grade hitu.
- Kariera.sk / Zoznam: `ok`; Bratislava feed reálne preverený, bez nového prioritného fitu nad existujúci LIVE/verification set.
- Služby zamestnanosti: `checked`; verejný vyhľadávač dostupný a reálne preverený; bez novej promotion-grade BA/remote delty.
- Pretlak / StartupJobs / WordPress Jobs: `checked`; bez vhodného nového non-hard-dev kandidáta.
- Upwork/freelance: `ok`; 2 relevantné hity, z toho 1 už v queue a 1 nový verification lead; 0 LIVE promotion.
- Reddit/komunity: `limited`; verejná indexácia preverená; bez čerstvého konkrétneho hiring dopytu vhodného pre SK remote.
- Facebook public index: `limited`, **0 verified hits**; nebol nájdený konkrétny verejne overiteľný hiring post s priamym linkom.

### Audit počty 11:35
- source families / zdroje skontrolované: **12**
- z toho mimo Profesia: **11**
- relevantné nové/novozachytené kandidáty: **2**
- pridané do LIVE: **0**
- nové verification kandidáty: **1**
- dedupe / už evidované verification: **1**
- vyradené pre lokalitu: **0**
- Facebook verified hits: **0**
- LIVE feed delta: **0**; fail-closed zachovanie 48 položiek.

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
- Prior-contact/application dedupe bridge.
- Requirement evidence matrix.
- Safe partial JSON updater.
- Canonical payload completeness score.
- English interaction-mode risk score.
- Seniority evidence gap score.
- Competition-adjusted application ROI.
- Autentizovaný Facebook ingestion cez Nexus/local agent.
- Source-success analytics, publishedAt/<24h priority, commute/distance, deadline alerts, company contact enrichment, duplicate cluster report, reply probability, GitHub Actions polling a cross-device sync.
- Promotion-ready ageing gate.
- Timezone-overlap burden score.
- Client-spend trust calibration.
- Eligibility ambiguity quarantine.
- Bulk-work effective-rate estimator.
- Primary-source promotion retry queue.
- Cross-board freshness disagreement detector.
- Government-source vacancy expiry reconciler.
- Qualification-stack penalty.
- Freelance mandatory-tool gap matrix.
- Client-view staleness penalty.
- Audit payload sharding / append-only run ledger.
- Language-risk reason normalization.
- Unknown-effort fixed-price gate.
- Fresh-post low-budget escalation guard.
- Canonical careers evergreen-age detector.
- Shift-window burden score.
- Driver credential hard-gate extractor.
- Cross-border route burden score.
- Hiring-intent classifier for communities.
- Freshness evidence confidence gate.
- **Existing-site maintenance preference boost** — zvýhodniť WordPress/WooCommerce údržbu, opravy, obsahové aktualizácie a modernizáciu existujúceho webu oproti full-build zákazkám, ak sú ostatné riziká podobné.
- **Source-result semantic locality validator** — pred započítaním hitu overiť, že lokalita v detaile ponuky skutočne patrí do BA/okolia alebo je explicitne remote-ok; nestačí lokalita zo search snippet/category stránky.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **48 LIVE položiek bezpečne zachovaných**, pretože nevznikla promotion-grade delta. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: **aktualizovaný na 11:35**, verification queue zachovaná a rozšírená o 1 nový verification lead.
- `job-sources.json`: **aktualizovaný na 11:35** s pravdivou freshness informáciou pre skutočne kontrolované zdroje.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 11:35** s reálnym auditom a 2 novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.