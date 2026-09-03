# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 3. 9. 2026 13:30 CEST

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
- Sweep 13:30 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- **Upwork – Product Image Research & Preparation Specialist – WooCommerce Skincare Store** bol znovu potvrdený ako Worldwide remote, ale 100 USD fixed-price za 100+ produktov a potenciálne stovky obrázkov znamená slabú efektívnu hodnotu; zostáva verification-only. citeturn119446view0
- **Upwork – Data Entry Specialist for WooCommerce** zostáva Worldwide remote a obsahovo sedí, ale 35 USD fixed-price, nejasný objem a 20–50 proposals blokujú LIVE promotion. citeturn119446view1
- **Upwork – Verity Consulting WordPress update** je existing-site modernizácia za 1 000 USD, ale vyžaduje strong WordPress/web-design skúsenosť, portfólio a staging/backup; 50+ proposals a nový klient bez histórie znižujú ROI. citeturn119446view2
- LinkedIn vrátil aj výsledok indexovaný pri Bratislave, ktorý je reálne **onsite v Lisabone**; správne vyradený lokalitným hard gateom. citeturn119446news1
- Kariera.sk priniesla čerstvé BA EPF sklad/VZV výsledky, ale ide o trojzmenné fyzické roly nižšieho rankingu než existujúci LIVE/verification set. citeturn119446search2turn119446search3

## Source audit — 3. 9. 2026 13:30
- Profesia: `checked`; BA WordPress/support/admin/driver discovery reálne preverené, bez novej promotion-grade delty.
- Priame company careers: `checked`; verejná direct-career discovery preverená, bez nového canonical promotion-grade hitu.
- LinkedIn Jobs: `limited`; verejná indexácia preverená; 1 stale/closed výsledok + 1 false-location Bratislava→Lisbon, bez promotion-grade BA/remote hitu.
- Worki.sk: `ok`; BA/okolie discovery preverená, nové výsledky nižšieho rankingu alebo mimo optimálneho dojazdu.
- Brigada.sk: `checked`; BA administratíva/sklad/kuriér discovery preverené, bez nového promotion-grade hitu.
- Kariera.sk / Zoznam: `ok`; čerstvé BA sklad/VZV výsledky dostupné, ale nižšieho rankingu.
- Pretlak / StartupJobs / WordPress Jobs: `checked`; bez vhodného nového non-hard-dev kandidáta.
- Upwork/freelance: `ok`; 6 relevantných/čiastočne relevantných hitov, z toho 4 už vo verification; 0 LIVE promotion.
- Reddit/komunity: `limited`; verejná indexácia preverená; bez čerstvého konkrétneho hiring dopytu vhodného pre SK remote.
- Facebook public index: `limited`, **0 verified hits**; nebol nájdený konkrétny verejne overiteľný hiring post s priamym linkom.

### Audit počty 13:30
- source families / zdroje skontrolované: **11**
- z toho mimo Profesia: **10**
- relevantné nové/novozachytené kandidáty: **10**
- pridané do LIVE: **0**
- nové verification kandidáty: **0**
- dedupe / už evidované verification: **4**
- vyradené pre hard-dev/skill/value mismatch: **4**
- vyradené pre lokalitu: **2**
- vyradené ako inactive/stale: **1**
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
- Existing-site maintenance preference boost.
- Source-result semantic locality validator.
- Source-family query coverage heatmap.
- Verification queue recheck budget allocator.
- **Search-result location contradiction quarantine** — porovnávať titulok, deklarované pracovisko a text onsite/relocation; výsledok typu „Bratislava“ + „onsite Lisbon“ automaticky označiť `reject-distance` ešte pred rankingom.
- **Freelance scope-to-budget unit estimator** — pri katalógových a obsahových zákazkách odhadovať cenu na produkt/obrázok/stránku a potlačiť ponuky, kde fixed-price vyzerá prijateľne iba preto, že skutočný objem práce nie je normalizovaný.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **48 LIVE položiek bezpečne zachovaných**, pretože nevznikla promotion-grade delta. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: aktualizovaný na 13:30; verification queue zachovaná bez fiktívnych prírastkov.
- `job-sources.json`: audit freshness aktualizovaná na 13:30 pre skutočne kontrolované zdroje.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 13:30** s reálnym auditom a 2 novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.