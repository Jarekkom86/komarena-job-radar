# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 7. 9. 2026 13:31 CEST

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

### Čerstvé zistenia 13:31
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Kariera/Zoznam, Brigada.sk, Pretlak/StartupJobs/WordPress Jobs, freelance/Upwork/Twine, Reddit/komunity a Facebook public index.
- **Žiadna nová bezpečná LIVE promotion ani nový unique verification add.** LIVE feed zostáva 50 a verification queue zostáva 72.
- LinkedIn/Twine priniesol verejne indexovaný `Freelance Web Developer – Restaurant Site Maintenance`, ale canonical stránka explicitne uvádza **No longer accepting applications**. Zároveň ide o custom-built web bez WordPress/Shopify a vyžaduje HTML/CSS/JavaScript + backend frameworks, preto je to inactive + hard-dev reject, nie kandidát.
- Kariera/Zoznam znovu ukázala `Executive Support Specialist` v Bratislave za 1 500–1 600 EUR/mes.; ide o už evidovaný verification záznam a AJ B2 ostáva výrazný language hold, takže bez novej delty.
- WordPress Jobs stále uvádza **11 open positions**. WPMU DEV Sales Support a Technical Support sú remote, ale jazykový/technický gate sa nemení.
- Upwork `WordPress Product Image Upload` zostáva high-fit verification: Worldwide remote, 10–20 USD/h, ale 50+ proposals a 1 hire. `WooCommerce Product Upload Expert Needed – 50 Products` je Worldwide remote, ale 50 USD fixed, 20–50 proposals a už 1 hire znamenajú slabú efektívnu hodnotu.
- Reddit/komunity: bez nového verejne overiteľného hiring dopytu vhodného pre profil.
- Facebook public index: **0 verified hits / limited**. Bez konkrétneho verejne overiteľného hiring postu a priameho linku sa nič nevykazuje ako hit. Autentizovaný Nexus/local ingestion zostáva backlog.

## Source audit — 7. 9. 2026 13:31
- Profesia: `checked`; bez novej unique promotion-grade delty.
- Priame company careers: `checked`; bez novej vhodnej unique BA/remote promotion-grade delty.
- LinkedIn Jobs: `limited`; 1 verejne overený hit, ale inactive + custom-web hard-dev reject; 0 promotion.
- Worki: `checked`; bez novej vhodnej unique delty.
- Kariera/Zoznam: `checked`; 1 rediscovery duplicate s AJ B2 hold; 0 promotion.
- Brigada.sk: `checked`; bez novej vhodnej BA/remote admin/web/support brigády.
- Tech/creative: `ok`; WordPress Jobs 11 otvorených rolí, 2 relevantné support pozície vyradené pre language/technical gate; Pretlak/StartupJobs bez vhodnej unique delty.
- Freelance: `ok`; 3 relevantné výsledky preverené, 2 rediscovery/low-value, 0 nový verification add a 0 LIVE promotion.
- Reddit/komunity: `limited`; bez nového vhodného verejne overiteľného hiring dopytu.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 13:31
- nové vhodné LIVE promotion: **0**
- LIVE feed delta: **0**, zostáva **50**
- nové unique verification kandidáty: **0**
- verification queue: **72 položiek**, bez straty
- LinkedIn/Twine: **1 hit**, `rejectedInactive: 1`
- Kariera: **1 rediscovery**, `rejectedLanguage: 1`, `rejectedDuplicate: 1`
- Upwork/freelance relevant reviewed hits: **3**, 0 nový add
- WordPress Jobs relevant support hits: **2**, oba language/skill reject
- Facebook verified hits: **0**
- LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 13:31
- `source-audit.json`: aktualizovaný na 13:31, verification queue zachovaná na 72
- `jobs-data.json`: bez zmeny; nevznikla bezpečná LIVE promotion

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
- No-delta source escalation policy.
- **Inactive-result canonical tombstone propagation** — keď canonical detail explicitne uvádza „no longer accepting applications“, uložiť tombstone fingerprint a pri ďalších behoch automaticky potlačiť všetky mirror/sibling index výsledky tej istej pozície; šetrí opakované otváranie neaktívnych leadov a znižuje false freshness.
- **Skill-ceiling early abort for custom-web maintenance** — pri maintenance leadroch bez CMS najprv vyhodnotiť podiel backend/custom-framework požiadaviek; ak prekročí bezpečný hard-dev limit, audit má skončiť po canonical overení bez drahého detailného rankingu a bez rastu verification queue.
- **Disjunctive language alternative parser** — rozoznať požiadavky typu „plynulá angličtina ALEBO nemčina“ od kumulatívnych požiadaviek a osobitne vyhodnotiť, či aspoň jedna jazyková alternatíva sedí profilu; zabráni chybnému dvojitému language penalty a zrýchli canonical screening.
- **Multi-location role cluster + nearest-branch selector** — zoskupiť rovnakú rolu firmy publikovanú pre viac pobočiek/lokalít, zachovať jeden canonical cluster a pre ranking automaticky preferovať najbližšiu BA-area variantu; znižuje duplicitné verification záznamy a zlepšuje praktický commute fit.
- **Infrastructure-troubleshooting scope gate** — pri WordPress/WooCommerce leadroch oddeliť bežnú CMS údržbu od DNS/SSL/WAF/CDN/server/security diagnostiky a automaticky znížiť promotion confidence, ak infra vrstva prekročí preukázaný skill ceiling; chráni pred zákazkami, ktoré navonok vyzerajú ako WordPress maintenance, ale reálne sú DevOps/security incident.
- **Milestone-first feasibility scorer** — pri fixed-price zákazkách vyhodnotiť prvý platený milestone samostatne od celého projektu (scope, riziko, dôkaz skúsenosti, efektívna hodinovka a rollback riziko); umožní rýchlo rozlíšiť zákazky, kde je prvý krok bezpečne zvládnuteľný, od projektov s atraktívnym celkovým budgetom, ale neprimerane rizikovým vstupným milestone.
- **Canonical-detail insufficiency quarantine** — ak verejný index ukáže čerstvú rolu, ale nie je dostupný canonical detail s minimálnou sadou `location + remote mode + language + core requirements + active state`, výsledok sa nesmie tváriť ako plnohodnotný verification kandidát; uloží sa len discovery fingerprint s TTL a opätovným pokusom.
- **Microjob value-collapse detector** — pri freelance ponukách automaticky kombinovať fixed budget, explicitný deadline/časový tlak, počet proposals/interviews a požadovaný seniority label; ak efektívna hodnota padne pod nastavený prah, lead sa ukončí už v discovery fáze bez ďalšieho detailného rankingu.
- **Rediscovery age-vs-competition decay** — pri leadroch, ktoré sa objavujú opakovane bez zmeny scope, automaticky znižovať prioritu podľa veku listingu a rastu proposals/interviews; zabráni tomu, aby starší high-fit freelance lead opakovane zaberali discovery kapacitu bez rastúcej šance na úspech.
- **Source-family evidence budget allocator** — po každom behu prerozdeliť nasledujúci discovery budget podľa úspešnosti source family: viac dotazov zdrojom s čerstvými promotion/verification hitmi, menej opakovaným zero-yield rodinám, pri zachovaní povinného minima 8 families / 5 non-Profesia; zvyšuje coverage bez porušenia diverzity.
- **Multi-hire residual-opportunity classifier** — pri freelance leadroch, kde už `Hires > 0`, rozlíšiť či je zákazka fakticky obsadená alebo klient stále naberá viac ľudí/udržiava ongoing kapacitu; kombinovať počet hires, aktívne kontrakty, text scope, posledné zobrazenie a počet openings. Zníži falošné vyradenie silných leadov aj zbytočné reakcie na už uzavretú potrebu.
- **Task-reversibility promotion threshold** — rozdeliť zásahy podľa blast-radius: reverzibilné CMS/admin úlohy (produktové obrázky, alt text, obsah, kategórie) môžu mať nižší verification burden, zatiaľ čo DNS, platby, produkčný deployment, security alebo databázové zásahy vyžadujú vyššiu dôkazovú latku. Zrýchli promotion bezpečných praktických zákaziek bez znižovania fail-closed ochrany.
- **Canonical closed-state suppressor across source families** — ak primary/canonical detail jednoznačne potvrdí uzavretú ponuku, uložiť canonical URL + title/company fingerprint a počas TTL ho uplatniť aj na LinkedIn/Twine/jobboard rediscovery; zníži opakované otváranie už uzavretých zákaziek a šetrí discovery budget.
- **Rediscovery requirement-delta trigger** — pri už evidovanom verification kandidátovi porovnať nový canonical snapshot s posledným snapshotom a znovu ho plne rankovať iba pri materiálnej zmene: jazyk, odmena, remote režim, scope, počet hires/proposals alebo active state. No-change rediscovery ostane lacný no-op bez rastu queue.
