# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 7. 9. 2026 21:21 CEST

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

### Čerstvé zistenia 21:21
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Kariera/Zoznam, Brigada.sk/Práca za rohom/Služby zamestnanosti, Pretlak/StartupJobs/WordPress Jobs, freelance/Upwork, Reddit/komunity a Facebook public index.
- **Žiadna nová bezpečná LIVE promotion.**
- Upwork: nový dnešný **Ecommerce VA Needed: SEO & Bulk Product Upload Expert for Shopify, Etsy & WooCommerce** je Worldwide remote a má iba 5–10 proposals, ale budget je **15 USD fixed-price**, level `Expert` a scope vyžaduje proven Shopify + Etsy + WooCommerce, bulk CSV/Excel a e-commerce SEO. Lokalita prechádza ako `remote-ok`, no value/skill-burden gate ho správne vyradí z LIVE.
- Upwork: **WordPress Product Image Upload** zostáva obsahovo lepší fit (Worldwide remote, 10–20 USD/h, entry level), ale 50+ proposals a už existujúci verification záznam znamenajú rediscovery bez novej queue delty.
- Kariera/Zoznam: čerstvý **Executive Support Specialist** Bratislava 1 500–1 600 EUR je už známy verification kandidát a ostáva na B2 language hold; ďalšie aktuálne BA admin výsledky sú slabšie.
- LinkedIn: restaurant-site maintenance výsledok je explicitne `No longer accepting applications` a zároveň má hard web/backend presah; neaktívny reject.
- WordPress Jobs má **11 open positions**. WPMU DEV support je síce remote, ale vyžaduje fluent English a PHP/HTML/CSS/MySQL; hard language/skill mismatch.
- Reddit/komunity: čerstvé výsledky sú `FOR HIRE`, nie employer hiring; **0 vhodných verified hiring hits**.
- Facebook public index: **0 verified hits / limited**. Bez konkrétneho verejného postu a priameho linku sa nič nevykazuje ako hit.

## Source audit — 7. 9. 2026 21:21
- Profesia: `checked`; bez novej unique promotion-grade delty.
- Priame company careers: `checked`; verejne dostupné priame careers preverené, bez novej unique promotion-grade delty.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, 1 neaktívny/hard-dev výsledok, 0 promotion.
- Worki: `checked`; bez novej vhodnej unique LIVE delty.
- Kariera/Zoznam: `ok`; relevantný BA admin rediscovery, 0 nových promotions.
- Brigada.sk / Práca za rohom / Služby zamestnanosti: `checked`; bez novej unique promotion-grade delty.
- Tech/creative: `ok`; WordPress Jobs/Pretlak/StartupJobs preverené; WPMU DEV language/technical reject.
- Freelance/Upwork: `ok`; nový remote e-commerce hit overený, ale 15 USD fixed-price + Expert/multi-platform/SEO scope = reject; 0 LIVE promotion.
- Reddit/komunity: `limited`; 0 verified employer hiring hits.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 21:21
- nové promotion-ready LIVE kandidáty: **0**
- persisted LIVE feed delta: **0**, zostáva **50**
- nové unique verification kandidáty: **0**
- nový relevantný non-LIVE discovery: **Upwork Ecommerce VA – Shopify/Etsy/WooCommerce**, vyradené pre extrémne nízky fixed budget a expert multi-platform scope
- inactive/skill reject: **LinkedIn/Twine restaurant-site maintenance**
- language/skill hold: **WPMU DEV fluent English + PHP/HTML/CSS/MySQL; Kariera Executive Support Specialist B2**
- Facebook verified hits: **0**
- persisted LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 21:21, commit `7c4de870827b4f1181de487c1cf3f9dcf1c46f0a`
- `source-audit.json`: čerstvý audit sa nepodarilo bezpečne persisted zapísať; konektor poskytuje iba full-file replacement a aktuálny obsah obsahuje 72-položkovú verification queue. FAIL-CLOSED zabránil neúplnej rekonštrukcii alebo strate queue. Posledný lossless persisted audit preto zostáva na 13:31.
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
- Troubleshooting-scope evidence ladder.
- Freelance client-history confidence band.
- Catalogue-work unit-cost estimator.
- Verification persistence debt counter.
- Listing-city vs actual-workplace disambiguator.
- Accounting-light vs professional-accounting scope classifier.
- Run-scoped source evidence digest.
- Verification blocker coverage report.
- Source-audit freshness skew alarm.
- Promotion-ready canonical recheck scheduler.
- **Remote sales load × schedule penalty** — samostatne boduje kombináciu intenzívneho telefonického predaja, dvojzmennej prevádzky a víkendov; zabráni tomu, aby čistý `remote-ok` signál umelo vytlačil sales-heavy call-centre rolu nad kvalitnejší back-office/support fit.
- **Source-audit queue snapshot sidecar checksum** — pred každým full-file audit replacementom overí počet queue položiek, stabilné ID a hash serializovaného snapshotu; write sa povolí iba pri 1:1 zachovaní queue, čím sa odstráni persistence blocker bez zásahu do zamknutého UI.
- **Fixed-price scope-to-budget hard floor** — pri freelance zákazke vypočíta minimálny realistický čas z počtu platforiem, katalógových operácií, SEO krokov a QA; ak fixed budget nedosiahne ani minimálnu efektívnu hodinovku, kandidát sa zahodí ešte pred verification queue. Dnešný 15 USD Shopify/Etsy/WooCommerce hit je presný príklad.
- **Cross-platform proof burden gate** — rozlišuje jednoduchú administráciu jedného CMS od požiadavky na preukázanú prax naprieč Shopify/Etsy/WooCommerce + SEO/CSV. Znižuje false-positive skóre pri ponukách, ktoré znejú administratívne, ale v skutočnosti vyžadujú širšie portfólio dôkazov.
