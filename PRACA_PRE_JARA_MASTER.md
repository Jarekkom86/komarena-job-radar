# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 4. 9. 2026 16:35 CEST

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
- `jobs-data.json.updatedAt`: **2026-09-04T16:16:38+02:00** — posledná reálna LIVE promotion bola Slovak Telekom 496939.
- Sweep 16:35 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.

### Najlepší nový verification kandidát — Trenujeme.sk
- `Predajca na predajni a e-commerce asistent Trenujeme Bratislava`, Račianska 31, Bratislava.
- Presný pozitívny jazykový fit: **AJ A2**.
- Veľmi relevantné úlohy: spracovanie objednávok, produktové texty a produkty v e-shope, administrácia e-shopu, reklamácie/výmeny, sklad, expedícia a zákaznícka komunikácia.
- Forma: part-time / dohoda / živnosť, približne 60–120 h mesačne; 6,60 EUR/h + provízie, živnosť 8 EUR/h + provízie.
- Dôvod, prečo nie je LIVE: nízky fix a výrazný doménový hard/soft burden — predaj bicyklov a športového sortimentu, základná montáž/servis bicykla, aktívny vzťah k cyklistike a ochota pracovať aj v sobotu.
- Stav: `verification-domain-skill-low-fix`, `locationEligibility: ba-area`, provisional score 89.

### Ďalšie čerstvé zistenia
- 3MON Office Manager / Executive Support: Bratislava, 1 650 EUR, silná e-shop/admin náplň, ale canonical detail uvádza **B2 AJ a 3 roky praxe** — verification, nie LIVE.
- Služby zamestnanosti: čerstvý sklad Podunajské Biskupice 1 031 EUR a ďalšie BA ponuky sú fyzické alebo nižšie prioritné.
- Upwork: Data Entry Specialist for WooCommerce ostáva relevantný verification kandidát; ďalšie čerstvé hity boli prevažne custom dev/plugin/full-build alebo slabší ROI.
- Facebook: **0 verified hits / limited**; bez konkrétneho verejne overiteľného postu sa nič nevytvára.

## Source audit — 4. 9. 2026 16:35
- source families reálne skontrolované: **11**
- mimo Profesia: **10**
- Profesia: `ok`; Trenujeme nový verification kandidát, bez LIVE promotion.
- Priame company careers: `checked`; Telekom 496939 už je LIVE, bez unique delty.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez promotion delty.
- Worki.sk: `checked`; bez novej vhodnej priority delty.
- Brigada.sk: `checked`; bez novej vhodnej priority delty.
- Kariera.sk / Práca za rohom: `ok`; 3MON a ďalšie BA office hity, ale bez LIVE promotion.
- Služby zamestnanosti: `checked`; bez novej vhodnej promotion-grade delty.
- Pretlak / StartupJobs / WordPress Jobs: `checked`; bez promotion-grade zhody.
- Upwork/freelance: `ok`; viac čerstvých WordPress/WooCommerce hitov, bez novej LIVE promotion.
- Reddit/komunity: `limited`; viditeľný WordPress dopyt bez dostatočného remote/location proof.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 16:35
- pridané do LIVE: **0**
- nové unique verification kandidáty: **1** — Trenujeme.sk
- LIVE feed delta: **0**; fail-closed zachovanie 49 položiek
- Facebook verified hits: **0**
- verification queue: **51** položiek

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
- Seasonal start-distance penalty.
- Seniority-scope mismatch classifier.
- Canonical deactivation tombstone ledger.
- Verification family anti-starvation quota.
- Mirror-to-canonical live membership check.
- Role-family credential prefilter for government feeds.
- Proposal-volume saturation curve.
- Employer response-channel friction tracker.
- Country-restriction prefilter before remote scoring.
- Search-index evidence expiry TTL.
- Tool-gap confidence matrix for admin SaaS roles.
- Freelance client-hire saturation penalty.
- Fluency-vs-functional-language hard-gate parser.
- Canonical job-board freshness reconciliation.
- Portfolio-proof readiness matcher.
- Live-store change-risk penalty.
- **Domain-product-knowledge hard/soft gate classifier** — odlíši všeobecný e-commerce/admin fit od rolí, kde úspech reálne stojí na špecifickej produktovej expertíze (napr. cyklistika, servis bicykla, odborný sortiment), aby vysoká zhoda názvu neprebila skrytý doménový mismatch.
- **Commission-dependent income reliability score** — pri part-time/predajných rolách oddeliť garantovaný fix od provízií, historických maxím a podmienok ich získania; ranking bude pracovať s konzervatívnym garantovaným príjmom a bonus iba ako sekundárny upside.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **49 LIVE položiek bezpečne zachovaných**. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: **aktualizovaný na 16:35**, verification queue zachovaná a rozšírená o 1 unique kandidáta.
- `job-sources.json`: **aktualizovaný na 16:35** podľa skutočne preverených zdrojov.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 16:35** s auditom a 2 novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index: **nedotknuté / zamknuté**.