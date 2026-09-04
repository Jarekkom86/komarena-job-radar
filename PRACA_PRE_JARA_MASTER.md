# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 4. 9. 2026 07:18 CEST

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
- Autoritatívny feed má aktuálne **48 LIVE položiek**.
- LIVE mix: **Profesia 24/48 = 50,0 %**, mimo Profesia **24/48 = 50,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-03T02:15:13+02:00** — posledná reálna zmena LIVE feedu.
- Sweep 07:18 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- LinkedIn verejný index priniesol `Brigádnik/Brigádnička práca s tovarom v mesiaci december, Bratislava, Bory Mall` pre H&M. Lokalita prechádza, ale nástup je až v decembri a ide o skladovo-retail brigádu nízko v rankingu; bez LIVE promotion.
- Práca za rohom priniesla `Product Manager pre vývoj MDM riešenia (m/ž)` pre DATALAN v Petržalke. Lokalita prechádza, ale ide o seniornejší product/MDM scope, nie prioritný web/admin/support profil; bez LIVE promotion.
- Upwork `E-commerce Virtual Assistant – WooCommerce, Subscriptions, Customer Service, Xero` je stále Worldwide remote, 10–15 USD/h a obsahovo relevantný, ale už je vo verification a vyžaduje good written English, WooCommerce Subscriptions, Meta Ads a Xero; bez promotion.
- Upwork fresh výsledky `Full-Time WordPress & WooCommerce Developer` a ďalšie build/dev zadania boli hard-dev/full-time/full-build mismatch; UK-only admin bol vyradený lokalitne.
- Profesia, priame company careers, LinkedIn, Worki, Brigada.sk, Služby zamestnanosti, Kariera.sk, Práca za rohom, Pretlak/StartupJobs/WordPress Jobs, Upwork, Reddit a verejná Facebook indexácia boli reálne preverené.
- Facebook: **0 verified hits / limited**; bez konkrétneho verejne overiteľného postu sa nič nevytvára.

## Source audit — 4. 9. 2026 07:18
- Profesia: `checked`; BA discovery bez novej promotion-grade delty.
- Priame company careers: `checked`; bez novej promotion-grade delty.
- LinkedIn Jobs: `limited`; 1 lokálny sezónny H&M výsledok, ale december + nízky ranking; 0 LIVE.
- Worki.sk: `checked`; BA/okolie discovery preverené, bez novej promotion-grade delty.
- Brigada.sk: `checked`; bez novej priority delty.
- Služby zamestnanosti: `checked`; bez nového promotion-grade BA administratívneho/IT-support hitu.
- Kariera.sk: `checked`; bez novej unique promotion-grade delty.
- Pretlak / StartupJobs / WordPress Jobs: `checked`; bez novej unique promotion-grade delty.
- Upwork/freelance: `ok`; 6 relevantných/semirelevantných výsledkov, 0 LIVE, 3 resurfaced/duplicitné; 1 language-heavy a 1 UK-only location reject.
- Reddit/komunity: `limited`; bez konkrétneho nového hiring dopytu.
- Facebook public index: `limited`, **0 verified hits**; žiadny konkrétny verejný hiring post s priamym linkom.
- Práca za rohom / ďalšie SK job-board discovery: `ok`; 1 lokálny DATALAN MDM product hit, ale seniornejší scope; 0 LIVE.

### Audit počty 07:18
- source families reálne skontrolované: **12**
- z toho mimo Profesia: **11**
- pridané do LIVE: **0**
- nové unique verification položky: **0**
- verification queue: **49** zachovaných položiek
- vyradené/pozdržané pre scope/value/skill/jazyk/duplicitu/lokalitu: viacero čerstvých alebo resurfaced výsledkov
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
- Search-result location contradiction quarantine.
- Freelance scope-to-budget unit estimator.
- Client hiring-volume anomaly detector.
- Microtask detail-insufficiency quarantine.
- Required-proof inventory matcher.
- Freelance client-response velocity signal.
- Shift-language compound-risk gate.
- Freelance budget-scope contradiction detector.
- Verification evidence age bands.
- Source-family no-delta rotation planner.
- Student-only contract eligibility gate.
- Same-day shift expiration gate.
- Search-family negative-result confidence.
- Driver-role taxonomy hard gate.
- Language-index false-positive verifier.
- Role-title vs duty mismatch detector.
- Remote-proof extractor for nationwide gigs.
- Micro-gig contactability score.
- Salary/unit anomaly detector.
- Original-publish vs refreshed-date normalizer.
- Known-lead resurfacing suppressor.
- Freelance hard-dev/value compound gate.
- Long-term micro-budget contradiction gate.
- Search-crawl freshness verifier.
- Canonical freshness resolver pre resurfaced Profesia výsledky.
- Inactive canonical suppressor.
- Primary-source recency override.
- Freelance duplicate-scope cluster suppressor.
- Unspecified-language-level verifier.
- Admin-role hidden-physical-duty detector.
- Verified-zero reason taxonomy.
- Source-status hysteresis.
- Remote country-acceptance verifier.
- Requirement-burden compound score.
- Verification queue evidence completeness score.
- Freelance micro-budget auto-quarantine threshold.
- **Seasonal start-distance penalty** — pri brigádach a krátkodobých ponukách penalizovať výsledky, ktorých reálny začiatok je vzdialený o viac týždňov/mesiacov, aby neprebíjali okamžite dostupné príležitosti len kvôli čerstvému indexu.
- **Seniority-scope mismatch classifier** — odlíšiť názvom lákavé lokálne roly od pozícií, kde duty stack reálne znamená senior product ownership, MDM/enterprise platform management alebo inú zodpovednosť výrazne nad aktuálnym cieľovým profilom.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **48 LIVE položiek bezpečne zachovaných**, pretože nevznikla promotion-grade delta. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: **aktualizovaný na 07:18**, verification queue zachovaná na 49 položkách.
- `job-sources.json`: **aktualizovaný na 07:18** s pravdivými source notes/status metadata.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 07:18** s reálnym auditom a 2 novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.