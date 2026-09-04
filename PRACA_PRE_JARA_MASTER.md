# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 4. 9. 2026 21:38 CEST

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
- Sweep 21:38 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.

### Čerstvé zistenia 21:38
- **Upwork – Full-Time Virtual Assistant, Operations**: Worldwide remote, e-commerce orders/fulfillment, data entry, checklisty a customer-service tickety. Obsahovo relevantné, ale vyžaduje **strong written English** a extrémny režim **12 h denne / 6 dní týždenne**; bez promotion.
- **Upwork – Full-Time Executive Assistant / SMM Generalist**: Worldwide remote, 1 500 USD/mes., 5–10 proposals, klient s 31k USD spend a 30 hires. Hlavný blocker: **video editing je mandatory** a prihláška vyžaduje Loom video; bez promotion.
- **Upwork – Virtual Assistant Customer Support & Communications**: Worldwide remote e-commerce support, ale strong written/spoken English, denné telefonáty a odmena len 125 USD/týždeň; bez promotion.
- **Upwork – Full-Time Virtual Assistant**: Worldwide remote admin scope, ale iba 200 USD/mes. základ; value gate.
- **Upwork – Admin and Quotation Assistant**: Worldwide remote, flexibilná lokalita, ale 20–50 proposals a nejasný workload; bez promotion.
- **Reddit**: čerstvé výsledky sú prevažne `FOR HIRE` WordPress/WooCommerce self-promo, nie dopyty zamestnávateľov.
- **Facebook**: **0 verified hits / limited**; bez konkrétneho verejne overiteľného postu sa nič nevytvára.

## Source audit — 4. 9. 2026 21:38
- source families reálne skontrolované: **11**
- mimo Profesia: **10**
- Profesia: `checked`; bez novej promotion-grade delty.
- Priame company careers: `checked`; bez novej unique promotion-grade delty.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez promotion delty.
- Worki.sk: `checked`; bez novej vhodnej delty.
- Brigada.sk: `checked`; bez novej vhodnej priority delty.
- Práca za rohom: `checked`; bez novej vhodnej delty.
- Kariera.sk: `checked`; bez novej bezpečnej promotion-grade zhody.
- Pretlak + StartupJobs: `checked`; bez promotion-grade zhody.
- Upwork/freelance: `ok`; viac čerstvých remote kandidátov, 0 LIVE promotion pre language/workload/budget/application-friction riziká.
- Reddit/komunity: `limited`; bez nového konkrétneho hiring dopytu.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 21:38
- pridané do LIVE: **0**
- LIVE feed delta: **0**; fail-closed zachovanie 49 položiek
- Facebook verified hits: **0**
- Upwork relevantné hity: **8**, LIVE promotion **0**
- vyradené/karanténa: jazyk/workload **3**, nízky budget/trust/application friction **3**, duplicita/resurfacing **2**, lokalita **0**
- verification queue: **56** položiek; bez automatického mazania

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
- Domain-product-knowledge hard/soft gate classifier.
- Commission-dependent income reliability score.
- Outbound-sales quota/KPI burden extractor.
- Portal-UI locale isolation.
- Excessive-workload hard gate.
- Same-day detail verification budget.
- Canonical-detail field delta watcher.
- Contact-path validity verifier.
- Freelance payment-verification trust signal.
- Ultra-new client account quarantine.
- **Mandatory application-artifact readiness score** — pred notifikáciou alebo promotion vyhodnotiť povinné Loom/video, portfólio, case study, test alebo referencie; lead s vysokou obsahovou zhodou, ale nepripraveným povinným artefaktom dostane nižšiu prioritu, aby sa neplytvalo časom na nereálnu okamžitú reakciu.
- **Full-time monthly-budget hourly-equivalent sanity gate** — pri remote rolách s mesačným/fixed budgetom a explicitným pracovným rozsahom prepočítať efektívnu hodinovú odmenu; extrémne nízky prepočet pri 40–72 h/týždeň automaticky karanténovať aj keď je scope e-commerce/admin relevantný.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **49 LIVE položiek bezpečne zachovaných**. `jobs-data.updatedAt` sa zámerne neposunul.
- `job-sources.json`: **aktualizovaný na 21:38** po reálnom source sweep-e.
- `source-audit.json`: **aktualizovaný na 21:38**, verification queue fail-closed zachovaná.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 21:38** vrátane 2 nových backlog zlepšení.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index: **nedotknuté / zamknuté**.