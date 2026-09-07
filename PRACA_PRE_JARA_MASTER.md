# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 7. 9. 2026 23:38 CEST

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
- Autoritatívny feed má **50 LIVE položiek**; v tomto behu nebol `jobs-data.json` prepísaný, pretože konektor ponúka iba full-file replacement a bezpečný lossless merge veľkého LIVE payloadu nebol v tomto behu garantovaný.
- LIVE mix: **Profesia 24/50 = 48,0 %**, mimo Profesia **26/50 = 52,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-05T07:32:41+02:00**.
- Posledná persisted LIVE promotion: **MamaTataJojo, s.r.o. — Administratívny pracovník, Malacky**, score 94.
- **Nový promotion-ready kandidát:** NAY a.s. — Reklamačný/á technik/čka, Centrálny sklad Senec. Publikované 7. 9. 2026, ASAP, 840–1 200 EUR/mes. (garantovaný minimálny nárok 1 031 EUR), reklamácie + procesy + práca s tovarom, SŠ s maturitou, prax sklad/logistika iba výhoda, základné PC, vhodné aj pre absolventov; `locationEligibility: ba-area`. Čaká na lossless LIVE write.
- **Nový silný flexibilný kandidát:** DHL Group — administratívna podpora transportného tímu, Senec, 4 h denne, 804,50 EUR + 10 % mesačný bonus, sken faktúr, archivácia, dokumentácia dodávateľov, pošta a kompletizácia dokumentov; zmluva do februára 2027. `locationEligibility: ba-area`. Kandidát je vhodný najmä ako časovo flexibilný príjem, nie ako hlavný plný príjem.
- Promotion-ready z predchádzajúcich behov: **BeiT Technologie — Administrativně-ekonomický specialista (Junior/Medior), 100 % remote** a **SAV — Asistent/ka riaditeľa**; pred LIVE zápisom vyžadujú fresh canonical recheck a bezpečný lossless write.

### Čerstvé zistenia 23:38
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Kariera/Zoznam, Brigada.sk/Práca za rohom/Služby zamestnanosti, Pretlak/StartupJobs/WordPress Jobs, freelance/Upwork, Reddit/komunity a Facebook public index.
- **NAY Reklamačný technik Senec** je nový významný promotion-ready hit. Priamy NAY career index potvrdzuje 4 otvorené pozície v Senci, ale verejne indexovaný canonical detail konkrétnej reklamačnej pozície bol dostupný cez Profesia/Kariera; preto sa zatiaľ používa overený jobboard detail a direct-career preference ostáva otvorená na ďalší canonical recheck.
- **DHL administratívna podpora Senec** je nový silný part-time hit: 4 h denne, skenovanie schválených dopravcovských faktúr, archivácia, založenie dodávateľov, kontrola mapovania, pošta a kompletizácia dokumentácie. Veľmi dobrý administratívny/digitalizačný fit, ale ide o skrátený úväzok do 02/2027.
- Profesia čerstvo ukazuje aj ďalšie lokálne logistické/admin výsledky v Senci (DSV admin 1 400–1 500 EUR, Quehenberger admin logistiky 1 500 EUR, Dráčik administratívno-skladový pracovník 1 200 EUR); neboli automaticky povýšené bez detailného canonical requirement checku.
- Kariera: Dotypos SK — pracovník kontaktného centra, Bratislava, od 1 500 EUR/mes. ostáva relevantný lokálny kandidát na detailný recheck; CCI Slovakia 1 330 EUR je slabší value fit.
- Práca za rohom: Naturzon e-shop admin/support je obsahovo veľmi silný, ale pracovisko Poprad a bez overeného true remote režimu = `reject-distance`; do LIVE nesmie.
- LinkedIn verejná indexácia: remote/EEA web výsledky sú prevažne hard-development alebo staré/inactive; bez bezpečnej promotion-grade delty.
- Upwork: WordPress Product Image Upload zostáva high-fit verification rediscovery (Worldwide, 10–20 USD/h, entry level), ale 50+ proposals. WooCommerce 50-product upload za 50 USD má 1 hire a slabý effective-rate/value profil.
- Reddit/komunity: čerstvé výsledky sú prevažne `FOR HIRE`, nie employer hiring; 0 vhodných verified hiring hits.
- Facebook public index: **0 verified hits / limited**. Bez konkrétneho verejného postu a priameho linku sa nič nevykazuje ako hit.

## Source audit — 7. 9. 2026 23:38
- Profesia: `ok`; nové relevantné hity NAY reklamačný technik Senec a DHL admin podpora Senec; NAY promotion-ready, DHL silný part-time kandidát.
- Priame company careers: `ok`; NAY career index reálne preverený a potvrdzuje otvorené Senec pozície, konkrétny reklamačný detail nebol verejne indexovaný ako direct canonical; Telekom careers tiež preverené.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez novej non-hard-dev promotion-grade delty.
- Worki: `checked`; bez novej vhodnej unique LIVE delty; starý Shield-Sk e-shop admin je inactive.
- Kariera/Zoznam: `ok`; NAY reklamačný technik Senec detail overený aj cez Kariera, Dotypos BA rediscovery; bez ďalšej promotion.
- Brigada.sk / Práca za rohom / Služby zamestnanosti: `checked`; Naturzon Poprad je distance reject, bez nového eligible promotion-grade hitu.
- Tech/creative: `checked`; Pretlak/StartupJobs/WordPress Jobs preverené, bez novej vhodnej non-hard-dev delty.
- Freelance/Upwork: `ok`; high-fit WordPress Product Image Upload rediscovery, ale 50+ proposals; WooCommerce 50-product upload low effective value.
- Reddit/komunity: `limited`; 0 verified employer hiring hits.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 23:38
- nové promotion-ready kandidáty: **1 — NAY Reklamačný technik Senec**
- nové silné part-time kandidáty: **1 — DHL admin podpora Senec**
- persisted LIVE feed delta: **0**, zostáva **50**; lossless full-file write nebol garantovaný
- location rejects: minimálne **1 relevantný e-shop hit — Naturzon Poprad**, onsite mimo BA bez true remote dôkazu
- duplicate/rediscovery: Upwork WordPress Product Image Upload; Dotypos/CCI BA customer-support discovery
- Facebook verified hits: **0**
- persisted LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `source-audit.json`: persisted audit je stále starší, pretože konektor umožňuje iba full-file replacement a súbor obsahuje 72-položkovú verification queue; FAIL-CLOSED zakazuje stratu queue.

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
- **Part-time effective-hourly comparator** — porovná 4h/6h/8h role podľa efektívnej hodinovej hodnoty, stability a času na dochádzku, aby krátky úväzok nevyzeral umelo slabo iba pre nízky mesačný súčet.
- **Claims/reklamácie experience-transfer score** — zvýhodní roly, kde sa existujúca reklamačná/servisná prax prenáša priamo aj bez formálneho technického certifikátu; zároveň oddelí administratívne reklamácie od fyzicky ťažkého skladu.