# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 5. 9. 2026 03:48 CEST

## Architektúra a ochrana UI
- Aktuálny používateľský MASTER: `komarena-job-radar-v6.4.html`.
- Autoritatívny živý feed: `jobs-data.json` (`schemaVersion: 1`).
- Bootstrap diverzity: `jobs-data-nonprof.json` — **zamknutý**, automat ho nemení.
- Register zdrojov: `job-sources.json`.
- Pravdivý audit prístupu: `source-audit.json`.
- Stabilný BA fallback: `baseline-jobs.json` — **zamknutý**.
- UI/renderery/index/baseline sú zamknuté; automat mení iba povolené dátové súbory a tento MASTER.

## Ranking profil
1. WordPress/WooCommerce, web/e-shop/CMS/content/product admin, Shoptet/Shopify/Upgates, maintenance webov/e-shopov.
2. Technický support, Smart Home/IoT/Home Assistant, AI integrácie bez hard developmentu, troubleshooting/reklamácie/IT support.
3. Administratíva/back-office/customer care/operations.
4. Vodič B/kuriér bez tachografu.
5. Sklad/logistika.

### Tvrdý lokalitný gate
- Aktívny feed povoľuje iba Bratislavu + rozumné okolie/denný dojazd, alebo skutočný remote/home-office vykonateľný zo Slovenska bez pravidelného dochádzania do vzdialeného mesta.
- Mimo BA onsite alebo pravidelný hybrid do vzdialeného mesta = `reject-distance`.
- Nejasná lokalita/remote politika = `locationEligibility: unknown`; najprv overiť, nie odporúčať.
- Nové položky evidujú `locationEligibility` a `locationReason`.

### Negatívne filtre
- AJ A2 preferovaná; B1 mierny/stredný mínus; B2/C1 výrazný mínus.
- Povinný ďalší cudzí jazyk, hard PHP/fullstack/Laravel/React/Vue, pokročilé Linux/Docker/API alebo povinná špecializovaná kvalifikácia bez dôkazu praxe = silná penalizácia alebo hard gate.
- Vodičské roly: povinné BE/C/C+E, tachografová karta alebo pravidelné diaľkové/medzinárodné trasy sú hard mismatch.
- Lokalita BA/okolie alebo overený remote/HO je hard gate, nie bonus.
- Agregátor/repost nesmie prebiť priamy firemný zdroj.

## Aktuálny stav LIVE
- Autoritatívny feed má **49 LIVE položiek**.
- LIVE mix: **Profesia 24/49 = 49,0 %**, mimo Profesia **25/49 = 51,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-04T16:16:38+02:00**.
- Sweep 03:48 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.

### Čerstvé zistenia 03:48
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Kariera/Zoznam, Pretlak/tech-creative, Upwork/freelance, Reddit/komunity a Facebook public index.
- **Upwork – Virtual Assistant: Operations & Campaign Support**: Worldwide remote, 5–7 USD/h, <30 h/týždeň, 3–6 mesiacov, ale explicitne strong written/spoken English a určitá dostupnosť počas US working hours. Slabá odmena + jazykový/timezone gate; bez LIVE promotion.
- **Upwork – WordPress & Shopify Virtual Assistant / Web Developer**: Worldwide remote, ale 8 hodín denne / 6 dní týždenne, good written/verbal English, HTML/CSS, Shopify, lead generation a email marketing. Workload a language/skill burden sú príliš vysoké.
- **Upwork – WordPress/Elementor Web Designer & Support Specialist**: Worldwide remote, no scope zahŕňa emergency tickets, hosting/DNS/caching troubleshooting, Elementor Pro, plugin/theme maintenance a customer-facing support. Hard-development/support burden je nad preferovaným profilom.
- **Upwork – WordPress/WooCommerce Spezialist**: Worldwide remote, 8–15 USD/h, WooCommerce produktová administrácia a troubleshooting sú obsahovo blízke priorite, ale listing je starší, 20–50 proposals a je celý v nemčine; jazykový gate nie je spoľahlivo potvrdený. Bez promotion.
- **Reddit/WordPress/WooCommerce komunity**: nálezy boli `FOR HIRE` self-promo, nie hiring dopyty pre kandidáta.
- **Facebook public index**: preverený; **0 verified hits / limited**. Autentizovaný Nexus/local ingestion ostáva backlog, automat ho nespúšťa.

## Source audit — 5. 9. 2026 03:48
- `source-audit.json` bol bezpečne prepísaný so zachovaním celej **58-položkovej verification queue**.
- Profesia: `checked`, 0 nových promotion-grade hitov.
- Priame company careers: `checked`, bez novej unique delty.
- LinkedIn Jobs: `limited`, bez nového verejne overiteľného promotion-grade hitu.
- Worki: `checked`, bez novej vhodnej delty.
- Brigada.sk: `checked`, bez novej vhodnej delty.
- Kariera/Zoznam: `checked`, bez novej promotion-grade delty.
- Pretlak/tech-creative: `checked`, bez novej unique zhody.
- Upwork/freelance: `ok`, 6 relevantných výsledkov, 0 LIVE promotion; 3 padli na explicitnom language/workload gate, ďalšie na advanced scope/nízkej hodnote alebo staršom/neurčitom fit-e.
- Reddit/komunity: `limited`, 0 verified hiring hits.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 03:48
- pridané do LIVE: **0**
- LIVE feed delta: **0**; fail-closed zachovanie 49 položiek
- vyradené pre jazyk/workload/skill burden: **min. 3 relevantné Upwork výsledky**
- Facebook verified hits: **0**
- verification queue: **58**, fail-closed zachovaná bez straty
- `source-audit.json`: aktualizovaný na 03:48
- `job-sources.json`: aktualizovaný na 03:48 podľa reálne skontrolovaných rodín
- `jobs-data.json`: bez obsahovej zmeny, pretože nevznikla bezpečná nová LIVE promotion

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
- Implicit workplace-language risk detector.
- Applicant-count × listing-age opportunity decay.
- Skill-burden × compensation frontier.
- Remote-label contradiction extractor.
- Compound-language hard-gate detector.
- New-client fixed-price risk × effort gate.
- Workload sustainability gate.
- Effective hourly compensation normalizer.
- **Concurrent-run optimistic-lock merge guard** — pred každým zápisom audit/source JSON overiť, či sa SHA od načítania nezmenilo; pri `409` automaticky znovu načítať novší súbor, zachovať novšie queue položky a merge-nuť iba čerstvú deltu namiesto riskantného overwrite.
- **Per-family minimum query-diversity ledger** — pri každej source family evidovať počet a typ reálne vykonaných query variantov a nepovažovať rodinu za kvalitne pokrytú, kým nemá minimálny coverage budget.
- **Application-ready evidence bundle generator** — pri promotion-ready kandidátoch so score približne 90+ automaticky pripraviť dátový balík `requirements / matches / gaps / company contact / canonical apply URL / deadline`, aby reakcia a personalizácia CV začala bez opakovaného ručného dohľadávania. Bez zásahu do zamknutého UI.
- **Verification queue source-saturation guard** — pri rastúcej queue sledovať podiel kandidátov podľa source family a pri preplnení jedným zdrojom presunúť discovery budget na menej zastúpené rodiny s lepšou historickou conversion kvalitou. Nevyhadzovať kvalitné kandidáty; ide o riadenie ďalšieho vyhľadávania, nie kvótu na LIVE feed.
