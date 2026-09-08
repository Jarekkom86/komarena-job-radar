# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 8. 9. 2026 22:17 CEST

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
- Verification kandidát: **Dotypos SK — Technický support**, Bratislava, 1 200 EUR, TPP na neurčito, vhodné pre absolventa, support + terénne inštalácie + pred/popo-predajný servis; `locationEligibility: ba-area`. Ponuka je aktívna do 30. 9. 2026. Mínus: explicitná AJ B1/B2 a požiadavky na Android/IT prehľad.
- Verification kandidát: **LJ Stav s. r. o. — Administratívny/a pracovník/čka, obchodný/á referent/ka**, Stupava, 1 300 EUR/mes., vhodné aj pre absolventa, bez cudzieho jazyka v canonical detaile, objednávky + cenové ponuky + zákazníci + technické/logické myslenie. `locationEligibility: ba-area`. Nepromovaný pre vyšší osobný/predajný kontakt a nižšiu odmenu oproti silnejším LIVE admin rolám.
- Supplemental verification: **FEIM - SK — Obchodný špecialista pre e-shop a predaj svietidiel**, Malacky, 1 100–1 300 EUR/mes.; e-shop/order/customer-service fit, ale stredne pokročilá AJ a aktívny retail predaj znižujú ranking.
- Nový freelance verification z 22:17: **Upwork — AI Blog Post VA for WordPress**, Worldwide remote, entry level, WordPress + AI content, ale **120 článkov/mesiac za 30 USD fixed**. `locationEligibility: remote-ok`; tematicky silný fit, ekonomicky neakceptovateľný, preto bez LIVE promotion.
- Nový freelance verification z 22:17: **Upwork — Virtual Assistant | Content Management & Project Coordination**, Worldwide remote, publikované približne 6 hodín pred kontrolou. Náplň: CMS Contentful, PDF/Word, screenshoty/bug reporting, SharePoint/Teams/Asana a koordinácia. Mínusy: povinná skúsenosť s headless CMS, good spoken/written English a Adobe/InDesign/Illustrator; bez promotion.
- Worki rediscovery: **Shield-Sk — Administrátor e-shopu / zákaznícka podpora**, Bratislava-Ružinov, bol obsahovo silný, ale canonical detail explicitne uvádza, že miesto už bolo obsadené alebo zrušené; `inactive`, nepridávať.

## Source audit — 8. 9. 2026 22:17
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Kariera/Zoznam/ÚPSVR, Brigada.sk, Pretlak/StartupJobs/WordPress Jobs, freelance/Upwork, Reddit/komunity a Facebook public index.
- Profesia: `checked`; bez novej unique promotion-grade delty oproti existujúcemu LIVE/verification inventáru.
- Priame company careers: `checked`; 0 novej overiteľnej promotion-grade delty.
- LinkedIn Jobs: `limited`; verejný index preverený, 0 novej verejne overiteľnej unique promotion-grade delty.
- Worki: `ok`; Shield-Sk e-shop admin BA bol relevantný, ale canonical detail = obsadené/zrušené, reject `inactive`.
- Kariera/Zoznam/ÚPSVR: `checked`; 0 novej canonical promotion-grade delty.
- Brigada.sk: `checked`; 0 nových vhodných BA hitov.
- Pretlak/StartupJobs/WordPress Jobs: `checked`; 0 novej overiteľnej non-hard-dev promotion-grade delty.
- Upwork/freelance: `ok`; 5 relevantných kandidátov, 0 promotion. Najsilnejší tematický hit AI Blog Post VA for WordPress je pod ekonomickým floorom (30 USD za 120 článkov/mesiac). Najčerstvejší Content Management & Project Coordination je remote-ok, ale skill/language burden je príliš vysoký.
- Reddit/komunity: `limited`; výsledky boli FOR HIRE alebo staré/nevhodné developer hiring posty; 0 eligible fresh hiring hitov.
- Facebook public index: `limited`; **0 verified hits**, žiadny konkrétny verejne overiteľný hiring post s priamym linkom.

### Audit počty 22:17
- source families checked: **10**
- nové LIVE promotions: **0**
- LIVE feed delta: **0**, zostáva **50**
- Facebook verified hits: **0**
- LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- nové relevantné verification kandidáty: **2 Upwork**
- explicitne vyradené inactive: **1 Worki**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 22:17.
- `source-audit.json`: aktualizovaný na 22:17.
- `jobs-data.json`: bez zmeny, pretože neexistovala nová promotion-grade unique delta.

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
- **Stale-but-active vacancy recovery score** — pri staršej, ale canonical aktívnej ponuke odlíšiť reálne stále otvorené miesto od indexového odpadu; kombinovať explicitný closing date, response availability a posledné canonical overenie.
- **Language-requirement ambiguity resolver** — keď zdroj naraz uvádza B1 aj B2 alebo textovo „mierne pokročilý“, uložiť presnú evidenciu konfliktu a znížiť confidence namiesto automatického hard rejectu.
- **Canonical-open failure quarantine** — ak listing existuje vo výsledkoch, ale detail presmeruje na generický zoznam alebo vráti neúplný canonical obsah, položku automaticky držať v `unknown` a opakovane overiť z primárneho zdroja.
- **Remote-from-Slovakia proof gate for CZ roles** — pri českých `Remote/Hybrid` ponukách vyžadovať explicitný dôkaz práce zo Slovenska alebo cezhraničného kontraktu; bez neho automaticky `locationEligibility: unknown`.
- **Canonical compensation recency validator** — pri rediscovery porovnať aktuálnu mzdu z canonical detailu s uloženou hodnotou a pri zmene vytvoriť material-change event.
- **Promotion-ready persistence debt tracker** — evidovať kandidátov, ktorí už prešli rankingom a canonical overením, ale neboli zapísaní do `jobs-data.json` pre technický fail-closed limit.
- **Compensation certainty splitter** — ukladať osobitne garantovaný fix, podmienenú variabilnú zložku, provízie a maximá; ranking počítať primárne z garantovaného minima.
- **Support-level scope detector** — z náplne a požadovaných nástrojov klasifikovať L1/L2/L3 aj vtedy, keď titul pozície senioritu zatajuje; L2/L3 s AD/Windows Server/SQL/Splunk/PowerShell penalizovať skôr než sa minie čas na manuálne overovanie.
- **BA commute-window reliability score** — pri lokálnych BA/okolie rolách kombinovať začiatok/koniec zmeny, typický dopravný režim a lokalitu pracoviska do samostatného commute rizika.
- **Canonical recheck TTL by source class** — nastaviť rozdielne intervaly opätovného overenia podľa typu zdroja (direct company/jobboard/freelance/community).
- **Customer-contact channel burden score** — rozlíšiť podiel osobného pultového kontaktu, telefónu, e-mailu a chatu; penalizovať roly, ktoré sa tvária ako administratíva, ale reálne sú prevažne retail/predaj/customer-facing.
- **BA-area salary-to-commute opportunity-cost score** — kombinovať garantovaný fix, počet onsite dní a odhad dochádzania; pomôže odlíšiť lokálne eligible, ale ekonomicky slabšie ponuky od prakticky výhodnejších alternatív bez zmeny hard lokalitného gate.
- **Canonical job-description semantic diff** — pri každom canonical rechecku porovnať významové zmeny v požiadavkách, lokalite/remote režime, mzde, deadline a náplni; material change automaticky spustí nové locality/ranking vyhodnotenie namiesto slepého rediscovery.
- **Application follow-up SLA planner** — po odoslaní reakcie evidovať dátum, source family, closing date a dostupný recruiter/contact channel a odporučiť vhodné follow-up okno; zabrániť duplicitnému alebo príliš skorému urgovaniu a zvýšiť šancu na odpoveď.
