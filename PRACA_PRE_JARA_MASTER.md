# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 4. 9. 2026 14:17 CEST

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
- Sweep 14:17 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- Upwork: čerstvý `WooCommerce Developer Needed to Improve Product Page Layout` je Worldwide remote, ale požaduje proven WooCommerce, silné HTML/CSS, template/CSS úpravy a bezpečný zásah do aktívneho store; ide skôr o development-heavy technickú zákazku než admin/maintenance fit.
- Upwork: `Senior WordPress Developer (Elementor Expert)` je Worldwide remote a čerstvý, ale Expert scope vyžaduje 3+ roky, deep Elementor Pro, ACF/light PHP/CSS, Core Web Vitals a portfólio; uvedený 5 USD fixed-price je placeholder/micro-budget a nevytvára dôveryhodný promotion-grade value signal.
- Ďalšie Upwork WordPress/WooCommerce hity boli full-build/plugin/hard-dev alebo nízky value/competition fit.
- Profesia/Worki/Brigada/Kariera/Práca za rohom/company careers/LinkedIn: reálne preverené; bez novej vhodnej promotion-grade BA/remote delty.
- Pretlak/StartupJobs/WordPress Jobs: tech/creative discovery preverené; bez promotion-grade zhody.
- Reddit/komunity: verejná WordPress/forhire indexácia bez konkrétneho vhodného čerstvého hiring dopytu.
- Facebook: **0 verified hits / limited**; bez konkrétneho verejne overiteľného postu sa nič nevytvára.

## Source audit — 4. 9. 2026 14:17
- Profesia: `checked`; bez novej promotion-grade LIVE delty.
- Priame company careers: `checked`; bez novej vhodnej delty.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez vhodnej promotion delty.
- Worki.sk: `checked`; bez novej priority delty.
- Brigada.sk: `checked`; bez novej priority delty.
- Kariera.sk / Práca za rohom: `checked`; bez novej promotion-grade delty.
- Služby zamestnanosti: `checked`; bez novej vhodnej BA/remote delty.
- Pretlak / StartupJobs / WordPress Jobs: `checked`; bez promotion-grade zhody.
- Upwork/freelance: `ok`; viac čerstvých Worldwide WordPress/WooCommerce hitov, ale hard-dev/value/experience mismatch.
- Reddit/komunity: `limited`; bez nového konkrétneho hiring dopytu.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 14:17
- source families reálne skontrolované: **11**
- z toho mimo Profesia: **10**
- relevantné/semirelevantné freelance kandidáty: **10**
- pridané do LIVE: **0**
- nové unique verification kandidáty: **0**
- vyradené/pozdržané: Upwork — hard development, expert experience/portfolio, micro-budget alebo slabší value/competition fit; ostatné families bez vhodnej delty
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
- **Portfolio-proof readiness matcher** — pri freelance/WordPress ponukách automaticky porovnať požadované dôkazy (`Elementor portfolio`, konkrétny WooCommerce projekt, live-store maintenance) s reálne dostupnými referenciami ešte pred promotion; zníži čas strávený na ponukách, kde je application friction príliš vysoký.
- **Live-store change-risk penalty** — pri zákazkách na aktívnom WooCommerce/WordPress webe zvýšiť rizikové skóre, ak klient požaduje template/PHP/CSS zásah bez explicitného stagingu, backupu alebo rollback plánu; uprednostniť bezpečnejšie admin/maintenance zákazky a chrániť úspešnosť realizácie.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **48 LIVE položiek bezpečne zachovaných**. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: **aktualizovaný na 14:17**, verification queue zachovaná.
- `job-sources.json`: **aktualizovaný na 14:17** podľa skutočne preverených zdrojov.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 14:17** s auditom a 2 novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index: **nedotknuté / zamknuté**.