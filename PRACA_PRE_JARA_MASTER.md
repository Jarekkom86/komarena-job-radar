# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 7. 9. 2026 02:02 CEST

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

### Čerstvé zistenia 02:02
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Kariera/Zoznam, Brigada.sk, Pretlak/WordPress tech-creative, Upwork/freelance, Reddit/komunity a Facebook public index.
- **Žiadna nová bezpečná LIVE promotion.** LIVE feed zostáva 50 a fail-closed ochrana ostala zachovaná.
- Upwork má nový Worldwide projekt **WordPress / Elementor / Woo Development / Website Redevelopment**. Nie je to ground-up build, ale vyžaduje preukázané WordPress + Elementor + WooCommerce + ACF skúsenosti, porovnateľné portfólio a má 50+ proposals; preto bez LIVE promotion.
- Dve ďalšie WordPress maintenance ponuky s veľmi dobrým obsahovým fitom sú explicitne **U.S. located freelancers only**, preto ich tvrdý lokalitný gate vyradil napriek remote označeniu.
- Kariera/Zoznam verejný index ukázal čerstvé BA výsledky, ale bez novej promotion-grade zhody po rankingu.
- Facebook public index: **0 verified hits / limited**. Bez konkrétneho verejne overiteľného hiring postu a priameho linku sa nič nevykazuje ako hit. Autentizovaný Nexus/local ingestion zostáva backlog.

## Source audit — 7. 9. 2026 02:02
- Profesia: `checked`; bez novej unique promotion-grade delty.
- Priame company careers: `checked`; bez novej suitable unique delty.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez novej vhodnej unique promotion.
- Worki: `checked`; bez novej vhodnej unique delty.
- Kariera/Zoznam: `checked`; bez novej suitable unique promotion-grade BA delty.
- Brigada.sk: `checked`; bez novej vhodnej BA/remote admin/web/support brigády.
- Tech/creative: `checked`; bez novej A2-friendly promotion-grade zhody.
- Upwork/freelance: `ok`; 3 relevantné detailne preverené výsledky — 1 Worldwide kandidát vyradený pre ACF/portfolio/50+ proposals a 2 U.S.-only vyradené lokalitným gateom; 0 LIVE promotion.
- Reddit/komunity: `limited`; bez nového vhodného konkrétneho hiring dopytu.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 02:02
- nové vhodné LIVE promotion: **0**
- LIVE feed delta: **0**, zostáva **50**
- nové unique verification kandidáty: **0**
- verification queue: **70 položiek**, bez straty
- freelance relevant hits: **3**, z toho 2 vyradené lokalitou a 1 skill/competition fitom
- Facebook verified hits: **0**
- LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 02:02
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
- **Established-client microjob trust bonus with budget floor** — pri malých WordPress fixoch oddeliť dôveryhodnosť klienta (spend, hires, hours) od ekonomickej atraktivity tasku; silná história môže zvýšiť šancu úspešného kontraktu, ale nikdy nesmie sama prekonať minimálny effective-rate/budget floor.
- **Skill-exposure cap for PHP-warning fixes** — pri microfix zákazkách automaticky rozlíšiť diagnostiku bežných warningov/plugin konfliktov od custom PHP developmentu; promotion povoliť iba ak požadovaná kódová vrstva zostane pod bezpečným skill-exposure limitom a existuje rollback/backup cesta.
- **Source-audit lossless patch precondition** — pred každým zápisom `source-audit.json` vypočítať očakávaný počet verification položiek + checksum identifikátorov a zápis povoliť iba pri 100 % zhode; rieši aktuálne riziko full-file replacementu bez atomického patchu.
- **Rediscovered-result no-op classifier** — výsledky, ktoré sú už vo verification/LIVE a nezmenili budget, activity, location alebo requirements, označiť ako no-op bez ďalšieho rastu queue; znižuje šum a zbytočné zápisy pri hodinových behoch.
- **Platform application-cost payback estimator** — ku každému freelance leadu počítať očakávanú návratnosť po odrátaní platformových poplatkov, connect/bid nákladov, odhadovaného času na proposal a pravdepodobnosti úspechu; pomôže neplytvať časom na ekonomicky slabé microjoby.
- **No-delta source escalation policy** — ak source family po viacerých po sebe idúcich behoch neprinesie žiadnu novú unique deltu, automaticky rotovať dotazy, meniť podkategórie/pagináciu a až potom označiť rodinu za nízkovýnosnú; zvyšuje coverage bez falošného reportovania úspechu.