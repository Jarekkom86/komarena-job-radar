# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 5. 9. 2026 20:05 CEST

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
- **Malacky sú explicitne povolené `ba-area`**. Čas dojazdu môže znížiť ranking, ale nesmie meniť lokalitný enum na neplatný medzistav.

### Negatívne filtre
- AJ A2 preferovaná; B1 mierny/stredný mínus; B2/C1 výrazný mínus.
- Povinný ďalší cudzí jazyk, hard PHP/fullstack/Laravel/React/Vue, pokročilé Linux/Docker/API alebo povinná špecializovaná kvalifikácia bez dôkazu praxe = silná penalizácia alebo hard gate.
- Vodičské roly: povinné BE/C/C+E, tachografová karta alebo pravidelné diaľkové/medzinárodné trasy sú hard mismatch.
- Lokalita BA/okolie alebo overený remote/HO je hard gate, nie bonus.
- Agregátor/repost nesmie prebiť priamy firemný zdroj.

## Aktuálny stav LIVE
- Autoritatívny feed má **50 LIVE položiek**.
- LIVE mix: **Profesia 24/50 = 48,0 %**, mimo Profesia **26/50 = 52,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-05T07:32:41+02:00**.
- Posledná bezpečná LIVE promotion: **MamaTataJojo, s.r.o. — Administratívny pracovník, Malacky**, score 94.

### Čerstvé zistenia 20:05
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Kariera/Zoznam, tech/creative vrátane Pretlak/StartupJobs/WordPress Jobs, Upwork/freelance, Reddit/komunity a Facebook public index.
- **Žiadna nová bezpečná LIVE promotion.** LIVE feed zostáva 50.
- Upwork znovu vrátil **Tech-Savvy Virtual Assistant – WordPress Website Management & Digital Marketing Support**. Scope je veľmi dobrý: publikovanie a úpravy WordPress obsahu, Elementor, formuláre/embedy, mesačné plugin/core aktualizácie, basic QA, jednoduché integrácie, email nástroje a AI. Kandidát už je vo verification queue, preto nejde o novú unique položku. Praktické mínusy: **6–10 USD/h**, 20–50 proposals a požiadavka na **clear written English**.
- Nový verejný Upwork výsledok **WooCommerce Developer Needed to Improve Product Page Layout** je Worldwide remote a existing-store scope, ale iba **60 USD fixed**, vyžaduje preukázanú WooCommerce/HTML/CSS prax a už má **4 interviewing**; application ROI je nízke, preto bez LIVE aj bez rozširovania queue.
- WordPress Jobs má aktuálne **8 otvorených pozícií**, no výsledky sú prevažne hard-development alebo geograficky obmedzené; bez bezpečnej SK-remote promotion.
- Kariera/Zoznam naďalej ukazuje MADWIRE Marketingový manažér Bratislava za 1 700 EUR, ale ide o marketingový manažment mimo prioritného admin/web-support fitu; bez promotion.
- Facebook public index: **0 verified hits / limited**. Bez konkrétneho verejného postu a priameho linku sa nič nezapisuje ako hit; autentizovaný Nexus/local ingestion zostáva backlog.

## Source audit — 5. 9. 2026 20:05
- Profesia: `checked`; bez novej unique promotion-grade delty.
- Priame company careers: `checked`; Telekom/Alza a ďalší verejní firemní zdroje preverené, bez novej suitable unique delty.
- LinkedIn Jobs: `limited`; bez novej vhodnej unique delty, coverage bez loginu zostáva čiastočná.
- Worki: `checked`; bez nového promotion-grade hitu.
- Brigada.sk: `checked`; bez nového promotion-grade hitu.
- Kariera/Zoznam: `checked`; 1 relevantný čerstvý BA marketingový výsledok, ale mimo prioritného fitu.
- Tech/creative: `checked`; WordPress Jobs 8 otvorených výsledkov, bez vhodnej SK-remote promotion.
- Upwork/freelance: `ok`; viacero WordPress/WooCommerce výsledkov preverených, 1 duplicate už vo verification a 1 nový low-ROI WooCommerce micro-project; bez novej unique verification a bez LIVE promotion.
- Reddit/komunity: `limited`; 0 nových verified hiring hits.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 20:05
- nové vhodné LIVE promotion: **0**
- LIVE feed delta: **0**, zostáva **50**
- nové unique významné verification kandidáty: **0**
- verification queue: **60 položiek**, zachovaná bez straty
- Facebook verified hits: **0**
- LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `source-audit.json`: úspešne aktualizovaný pri zachovaní 60-položkovej queue.

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
- Concurrent-run optimistic-lock merge guard.
- Per-family minimum query-diversity ledger.
- Application-ready evidence bundle generator.
- Verification queue source-saturation guard.
- ÚPSVR mirror canonical-link resolver.
- Segmented large-payload reconstruction checksum.
- Remote-sales intensity classifier.
- Promotion-ready transactional writer.
- Result-page pagination coverage meter.
- Structured-data canonical fallback extractor.
- Field-level provenance map.
- Consecutive canonical-failure stale counter.
- English task-type comprehension probe.
- Remote microtask income stability score.
- Cross-border remote contract eligibility verifier.
- Phone-language burden score for CZ/SK roles.
- Freelance client activity delta tracker.
- Published-vs-crawled freshness provenance.
- Freelance microtask minimum-value gate.
- Maintenance-vs-development scope classifier.
- Same-day low-fit suppression ledger.
- Freelance scope-to-evidence matcher.
- Qualification-stack early reject cache.
- Source-detail evidence completeness counter.
- Negative-result query coverage hash.
- Remote-work jurisdiction evidence cache.
- Public hiring scope sufficiency gate.
- Local low-pay opportunity suppression floor.
- Atomic audit queue patch writer.
- Same-day duplicate promotion shield.
- Remote full-time compensation floor by contract type.
- Adjacent-skill requirement bridge.
- **Expired canonical tombstone cache** — ak primárny detail explicitne povie `no longer available` / `position not advertised`, uložiť canonical URL + timestamp + dôvod expirácie a na 24–72 hodín potlačiť stale indexové/mirror výsledky bez opakovaného ručného overovania. Rieši ghost výsledky a šetrí opakované hodinové kontroly.
- **Search-result provenance counter** — pre každý source-family audit ukladať minimálne `queriesRun`, `resultsReturned`, `detailsOpened`, `verifiedActive`, `verifiedInactive`, `verifiedRejectedLocation` a recency okno. Umožní rozlíšiť skutočný nulový výsledok od slabej indexácie alebo zlyhaného query a zvýši dôveryhodnosť Source Radaru bez zásahu do UI.
- **Contract-to-hire conversion value score** — pri freelance výsledkoch samostatne zvýhodniť existujúci web/maintenance scope s primeranou hodinovou sadzbou a contract-to-hire možnosťou, ale až po penalizácii konkurencie, jazykového burdenu a klientského risku. Pomôže odlíšiť kvalitný maintenance lead od jednorazových full-build zákaziek.
- **Maintenance client continuity score** — hodnotiť pravdepodobnosť opakovanej práce podľa typu scope (regular maintenance vs. one-off), klientských hires/spendu, aktivity a contract-to-hire signálu. Cieľom je prioritizovať zákazky s reálnou šancou stať sa stabilným mesačným príjmom namiesto jednorazových opráv.
- **Duplicate verification enrichment instead of queue growth** — ak nový sweep nájde tú istú položku, nepočítať ju ako nový kandidát, ale doplniť fresh evidence (odmena, proposals, deadline, klientská aktivita, jazykový burden). Znižuje nafukovanie verification queue a zároveň zachováva čerstvosť rozhodovacích dát.
- **Micro-project interview-pressure gate** — pri krátkych fixed-price zákazkách kombinovať budget, počet proposals/interviewing, požadované proof-of-work a odhad času. Ak je odmena nízka a klient už aktívne interviewuje viac ľudí, automaticky znížiť application ROI a šetriť čas na lepšie leady.