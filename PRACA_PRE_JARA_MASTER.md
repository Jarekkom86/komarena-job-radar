# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 3. 9. 2026 02:27 CEST

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
- Autoritatívny feed má aktuálne **48 LIVE položiek**.
- Posledný sourcing audit: **11 source families**, z toho **10 mimo Profesia**.
- LIVE mix: **Profesia 24/48 = 50,0 %**, mimo Profesia **24/48 = 50,0 %**.
- Facebook verejná indexácia: `limited`, **0 verified hits**; žiadne fiktívne pokrytie.
- `jobs-data.json.updatedAt`: **2026-09-03T02:15:13+02:00** — posledná reálna zmena LIVE feedu.
- Sweep 02:27 nepriniesol nový promotion-grade LIVE kandidát; existujúce aktívne položky zostali fail-closed zachované.
- Najčerstvejší Upwork lead **Virtual Assistant - Ongoing - Product Listing / Ecommerce Management** je Worldwide remote a obsahovo sedí na WooCommerce/listingy/inventár/customer support, ale 3–6 USD/h a 20–50 proposals ho držia vo verification/value-gate režime.
- **Neuroimunologický ústav SAV – Asistent/ka riaditeľa** zostáva vo verification ako `promotion-ready-awaiting-fresh-canonical`; pred promotion treba nový čerstvý canonical detail.
- **NAY Elektrošpecialista/tka** zostáva vo verification, pretože čerstvý canonical výsledok potvrdil Tuhovskú, nie pôvodný Danubia variant.

## Source audit — 3. 9. 2026 02:27
- Profesia: `checked`, BA WordPress/e-shop/admin/IT support/driver discovery preverené; bez novej promotion-grade delty.
- Priame company careers: `checked`, BA IT/support/e-commerce careers discovery preverené; bez novej canonical delty.
- LinkedIn Jobs: `limited`, verejná indexácia preverená; SupportYourApp výsledok už neakceptuje žiadosti, nový promotion-grade hit nevznikol.
- Worki.sk: `checked`, bez novej promotion-grade delty.
- Brigada.sk: `checked`, bez novej promotion-grade delty.
- Kariera.sk: `checked`, bez novej promotion-grade delty.
- Práca za rohom: `checked`, bez novej nezávislej promotion-grade delty.
- Pretlak / StartupJobs / WordPress Jobs: `checked`, bez nového hard-gate-pass kandidáta.
- Upwork/freelance: `ok`, e-commerce VA/listing lead preverený; `remote-ok`, ale 3–6 USD/h a vysoká konkurencia = verification/value gate, nie LIVE.
- Reddit/komunity: `limited`, 0 vhodných SK-eligible verified hiring hitov; US-only WordPress hiring bolo vyradené lokalitným gateom.
- Facebook public index: `limited`, **0 verified hits**; autentizovaný Nexus/local ingestion zostáva backlog.

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
- **Promotion-ready ageing gate** — ak kandidát už prešiel hard gate-mi a nový sweep znovu potvrdí aktívny/canonical stav, historický writer blocker ho nesmie držať vo verification queue.
- **Timezone-overlap burden score** — pri remote/freelance ponukách penalizovať povinné US hours alebo široké globálne časové okná aj vtedy, keď je lokalita formálne Worldwide.
- **Client-spend trust calibration** — pri freelance leadoch kombinovať historický spend, počet hires, aktivitu klienta a proposal/interview pomer, aby sa znížil čas strávený na low-probability klientov.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; 48 LIVE položiek bezpečne zachovaných, žiadny nový promotion-grade kandidát.
- `source-audit.json`: obsahovo auditovaný; writer pre veľký JSON zostáva náchylný na truncovaný read, preto bez riskantného full replacementu v tomto behu.
- `job-sources.json`: register revalidovaný; nevznikla štrukturálna zmena.
- `PRACA_PRE_JARA_MASTER.md`: **synchronizovaný** so stavom 02:27.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.