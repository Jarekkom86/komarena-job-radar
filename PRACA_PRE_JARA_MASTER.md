# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 7. 9. 2026 22:17 CEST

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
- Autoritatívny feed má **50 LIVE položiek**; v tomto behu nebol `jobs-data.json` prepísaný, pretože nevznikla nová bezpečná LIVE promotion.
- LIVE mix: **Profesia 24/50 = 48,0 %**, mimo Profesia **26/50 = 52,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-05T07:32:41+02:00**.
- Posledná persisted LIVE promotion: **MamaTataJojo, s.r.o. — Administratívny pracovník, Malacky**, score 94.
- Promotion-ready z predchádzajúcich behov: **BeiT Technologie — Administrativně-ekonomický specialista (Junior/Medior), 100 % remote** a **SAV — Asistent/ka riaditeľa**; pred LIVE zápisom vyžadujú fresh canonical recheck a bezpečný lossless write.

### Čerstvé zistenia 22:17
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Kariera/Zoznam, Brigada.sk/Práca za rohom/Služby zamestnanosti, Pretlak/StartupJobs/WordPress Jobs, freelance/Upwork, Reddit/komunity a Facebook public index.
- **Žiadna nová bezpečná LIVE promotion.**
- Služby zamestnanosti / Práca za rohom / Kariera: **DEV-HA GLOBAL — Operátor zákazníckej podpory**, Nobelova, Bratislava-Nové Mesto, je canonical lokálny `ba-area`, 1 000 EUR/mes., TPP na neurčito, nástup 1. 9. 2026. Ponuka však vyžaduje VŠ I. stupňa a mzdovo je výrazne pod silnejšími existujúcimi LIVE podporami, preto bez promotion.
- Kariera: **DENIMA — Všeobecný administratívny pracovník**, Bratislava, 970 EUR/mes., je lokálne eligible, ale obsahuje telefonickú komunikáciu s obchodnými partnermi v angličtine, ukrajinčine, ruštine a turečtine; language mismatch, bez promotion.
- Grafton **ADMIN ANALYST** sa ukázal ako starší/archívny listing s VŠ II. stupňa a angličtinou; nepovažovať za čerstvú promotion.
- LinkedIn: nové remote support výsledky TalentPop vyžadujú fluent German + English; SupportYourApp Slovak remote vyžaduje English B2. Lokalita môže byť `remote-ok`, jazykový hard/strong penalty ich blokuje.
- WordPress Jobs má stále **11 open positions**. WPMU DEV support je remote, ale technická rola vyžaduje fluent English + PHP/HTML/CSS/MySQL; hard language/skill mismatch.
- Upwork **WordPress Product Image Upload** zostáva najlepší rediscovery z freelance vetvy: Worldwide remote, 10–20 USD/h, entry level, WordPress/WooCommerce; 50+ proposals a už existujúci verification záznam = bez novej queue delty a bez LIVE promotion.
- Worki: známy Shield-Sk e-shop admin detail je už explicitne obsadený/zrušený; inactive reject.
- Reddit/komunity: čerstvé výsledky sú `FOR HIRE`, nie employer hiring; **0 vhodných verified hiring hits**.
- Facebook public index: **0 verified hits / limited**. Bez konkrétneho verejného postu a priameho linku sa nič nevykazuje ako hit.

## Source audit — 7. 9. 2026 22:17
- Profesia: `checked`; bez novej unique promotion-grade delty.
- Priame company careers: `checked`; Telekom a ďalšie priame careers preverené, bez novej unique promotion-grade delty.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, remote support hity majú German+English alebo English B2 mismatch; 0 promotion.
- Worki: `checked`; Shield-Sk e-shop admin je obsadený/zrušený, bez novej vhodnej unique LIVE delty.
- Kariera/Zoznam: `ok`; DEV-HA GLOBAL a DENIMA reálne overené, ale nízka odmena/qualification alebo language burden; 0 promotion.
- Brigada.sk / Práca za rohom / Služby zamestnanosti: `ok`; DEV-HA canonical hit overený na Službách zamestnanosti, ale bez promotion.
- Tech/creative: `ok`; WordPress Jobs/Pretlak/StartupJobs preverené; WPMU DEV language/technical reject.
- Freelance/Upwork: `ok`; WordPress Product Image Upload rediscovery, 50+ proposals; 0 LIVE promotion a 0 novej queue delty.
- Reddit/komunity: `limited`; 0 verified employer hiring hits.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 22:17
- nové promotion-ready LIVE kandidáty: **0**
- persisted LIVE feed delta: **0**, zostáva **50**
- nové unique verification kandidáty: **0**
- nové relevantné non-LIVE discovery: **DEV-HA GLOBAL — Operátor zákazníckej podpory**, vyradené z promotion pre 1 000 EUR a VŠ I. stupňa; **DENIMA — všeobecná administratíva**, language mismatch
- inactive reject: **Shield-Sk e-shop admin**
- language/skill holds: **TalentPop fluent German+English; SupportYourApp English B2; WPMU DEV fluent English + PHP/HTML/CSS/MySQL**
- Facebook verified hits: **0**
- persisted LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 22:17, commit `843bce8398db3d35470be16c5a706ba069f91f41`
- `source-audit.json`: čerstvý audit sa opäť nepodarilo bezpečne persisted zapísať; konektor poskytuje iba full-file replacement a aktuálny obsah obsahuje 72-položkovú verification queue. FAIL-CLOSED zabránil neúplnej rekonštrukcii alebo strate queue. Posledný lossless persisted audit zostáva na 13:31.
- `jobs-data.json`: bez zmeny; nevznikla nová bezpečná LIVE promotion.

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
- Expired canonical tombstone cache.
- Search-result provenance counter.
- Contract-to-hire conversion value score.
- Maintenance client continuity score.
- Duplicate verification enrichment instead of queue growth.
- Micro-project interview-pressure gate.
- Cross-platform e-commerce skill-gap weight.
- Fixed-budget scope ambiguity blocker.
- Requirement burden composite score.
- Community lead evidence completeness gate.
- Freelance bid-cost ROI estimator.
- Canonical active-state revalidation sampler.
- Upwork placeholder-budget detector.
- Verification rediscovery timestamp ledger.
- Ranking-track query coverage matrix.
- Search-index lag score per source family.
- Verification rediscovery metadata refresher.
- Freelance proposal-velocity estimator.
- Store-build scope decomposition score.
- Freelance client maturity confidence.
- Rediscovery freshness promotion trigger.
- Community lead minimum-evidence schema.
- Inactive-hit early discard cache.
- Maintenance-fit evidence score.
- Graduate-friendly direct-company watchlist.
- AI-enabled task-fit bonus with hard-skill ceiling.
- Source-query semantic drift monitor.
- Low-yield source adaptive query rotator.
- Micro-fix proof-of-skill mapper.
- Low-history client escrow-risk flag.
- Public-index country-restriction prefilter.
- Freelance starter-budget vs continuation-value split.
- Shift-window timezone normalizer.
- Hard-dev contamination ratio for maintenance roles.
- Fixed-price microproject effective-hour ceiling.
- Client interview saturation gate.
- Expert-label vs task-scope contradiction detector.
- Audit-to-source-registry consistency checker.
- Inactive-detail sibling-result isolation.
- Rediscovery-only run compression.
- Discovery-to-persistence reconciliation ledger.
- Portfolio-ready maintenance response pack.
- Budget-period ambiguity detector.
- Theme-builder portability score.
- Rejected-skill fingerprint cache.
- Rediscovery-only source write minimizer.
- Established-client microjob trust bonus with budget floor.
- Skill-exposure cap for PHP-warning fixes.
- Source-audit lossless patch precondition.
- Rediscovered-result no-op classifier.
- Platform application-cost payback estimator.
- **Qualification-cost floor:** automaticky znížiť prioritu lokálnych rolí, kde povinné formálne vzdelanie/prerekvizity sú neúmerné ponúkanej mzde a existujú lepšie alternatívy v rovnakom tracku.
- **Audit-persistence lag watchdog:** merať rozdiel medzi `job-sources.lastAuditAt` a `source-audit.updatedAt`; pri prekročení SLA označiť audit ako stale a blokovať tvrdenie, že source audit je čerstvo persisted.
