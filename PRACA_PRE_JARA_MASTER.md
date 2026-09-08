# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 8. 9. 2026 11:14 CEST

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
- Autoritatívny feed zostáva na **50 LIVE položkách**; tento beh nepridal novú promotion-grade unique položku, preto `jobs-data.json` zostal bez zmeny.
- LIVE mix: **Profesia 24/50 = 48,0 %**, mimo Profesia **26/50 = 52,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-05T07:32:41+02:00**.
- Posledná persisted LIVE promotion: **MamaTataJojo, s.r.o. — Administratívny pracovník, Malacky**, score 94.
- **Promotion-ready TOP kandidát: Techfun s. r. o. — Elektro-technický špecialista pre e-shop**, Kopčianska 92A, Petržalka, 1 800–2 200 EUR/mes., Po–Pi onsite. Kombinuje odborné poradenstvo, e-mailovú/telefonickú technickú podporu, testovanie a zaraďovanie produktov, Arduino/ESP/Raspberry, reklamácie, návody, blog a produktové popisy. Angličtina je len základná; firma uvádza, že potrebné veci doučí. `locationEligibility: ba-area`. Riziko: aspoň základná skúsenosť s C/C++ alebo Python a datasheetmi.
- Silný promotion-ready kandidát: **ReMar Slovakia — Administratívny pracovník / pracovníčka e-shopu – objednávky a zákaznícky servis**, Panónska cesta 4, Petržalka, 1 200 EUR + 200 EUR variabilne po skúšobnej dobe, Po–Pi 9:30–18:00. `locationEligibility: ba-area`.
- Promotion-ready: **NAY a.s. — Reklamačný/á technik/čka, Centrálny sklad Senec**; publ. 7. 9. 2026, ASAP, reklamácie + procesy + práca s tovarom, `locationEligibility: ba-area`.
- Silný flexibilný kandidát: **DHL Group — administratívna podpora transportného tímu, Senec**, 4 h denne, 804,50 EUR + 10 % mesačný bonus; `locationEligibility: ba-area`.
- Promotion-ready z predchádzajúcich behov: **BeiT Technologie — Administrativně-ekonomický specialista (Junior/Medior), 100 % remote** a **SAV — Asistent/ka riaditeľa**; pred LIVE zápisom vyžadujú fresh canonical recheck.
- Silný verification kandidát: **NASES — Operátor/operátorka Ústredného kontaktného centra**, Bratislava, od 1 500 EUR, pružný režim 8–16/9–17, vhodné pre absolventa; `locationEligibility: ba-area`. Mínus: AJ B1 a vyššie Office nároky.
- Nový verification kandidát tohto behu: **Dotypos SK — Technický support**, Bratislava, 1 200 EUR, TPP na neurčito, vhodné pre absolventa, support + terénne inštalácie + pred/popo-predajný servis; `locationEligibility: ba-area`. Ponuka je aktívna do 30. 9. 2026. Mínus: explicitná AJ B1/B2 a požiadavky na Android/IT prehľad, preto 0 LIVE promotion.

### Čerstvé zistenia 11:14
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Kariera/Zoznam/ÚPSVR, Brigada.sk, Pretlak/StartupJobs/WordPress Jobs, freelance/Upwork, Reddit/komunity a Facebook public index.
- **Dotypos SK — Technický support** je aktívny BA-area kandidát, ale B1/B2 English ho drží vo verification.
- LinkedIn verejný index našiel **Sharp Brains — L1 Desktop Support** v Bratislave; lokalita prechádza, ale 1–3 roky desktop supportu, Active Directory a networking requirements sú slabší fit.
- Priame DHL careers: dve indexované BA roly boli po otvorení označené ako už nevypísané; vyradené pre neaktivitu.
- Upwork: viac WooCommerce/product admin/VA hitov, ale bez promotion — buď 50+ proposals bez transparentnej odmeny, low-budget alebo vyšší multi-platform/English skill burden.
- Reddit/komunity: 0 eligible verified hiring hitov.
- Facebook public index: **0 verified hits / limited**. Bez konkrétneho verejného postu a priameho linku sa nič nevykazuje ako hit.

## Source audit — 8. 9. 2026 11:14
- Profesia: `checked`; 0 nových unique promotion-grade hitov.
- Priame company careers: `checked`; 2 indexované DHL roly vyradené ako neaktívne.
- LinkedIn Jobs: `limited`; 1 relevantný hit, 0 pridaných, skill mismatch.
- Worki: `checked`; 0 nových vhodných hitov.
- Kariera/Zoznam/ÚPSVR: `ok`; 1 relevantný Dotypos hit, 0 pridaných pre AJ B1/B2.
- Brigada.sk: `checked`; 0 nových vhodných hitov.
- Tech/creative: `checked`; 0 nových vhodných non-hard-dev hitov.
- Freelance/Upwork: `ok`; 5 relevantných kandidátov, 0 pridaných pre konkurenciu/odmenu/skill burden/duplicitné rediscovery.
- Reddit/komunity: `limited`; 0 verified hiring hitov.
- Facebook public index: `limited`; **0 verified hits**.

### Audit počty 11:14
- source families checked: **10**
- nové LIVE promotions: **0**
- LIVE feed delta: **0**, zostáva **50**
- Facebook verified hits: **0**
- LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- vyradené: language **2**, inactive **2**, skill **3**, duplicate/rediscovery **2**, location **0**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 11:14.
- `source-audit.json`: aktualizovaný lossless na 11:14.
- `jobs-data.json`: bez zmeny, pretože neexistovala promotion-grade unique delta.

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
- Part-time effective-hourly comparator.
- Claims/reklamácie experience-transfer score.
- Preferred-language vs mandatory-language classifier.
- Trial-batch payment-risk gate.
- **DIY-project evidence pack generator** — z existujúcich ESP/Home Assistant/elektronických projektov automaticky vytvoriť krátky dôkazový balík vhodný k technickým e-shop rolám ako Techfun, aby sa zvýšila úspešnosť reakcie bez preháňania skúseností.
- **Electronics role code-depth limiter** — oddeliť základné Arduino/ESP/C/Python požiadavky od skutočného embedded hard-developmentu; zabrániť zbytočnému vyradeniu rolí, kde firma akceptuje hobby/DIY prax a zaškolenie.
- **Stale-but-active vacancy recovery score** — pri staršej, ale canonical aktívnej ponuke odlíšiť reálne stále otvorené miesto od indexového odpadu; kombinovať explicitný closing date, response availability a posledné canonical overenie, aby sa neopomínali stále použiteľné role ako Dotypos.
- **Language-requirement ambiguity resolver** — keď zdroj naraz uvádza B1 aj B2 alebo textovo „mierne pokročilý“, uložiť presnú evidenciu konfliktu a znížiť confidence namiesto automatického hard rejectu; šetrí manuálne overovanie a zlepšuje ranking pri hraničných support rolách.
