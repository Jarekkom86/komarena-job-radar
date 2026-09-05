# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 5. 9. 2026 17:10 CEST

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

### Čerstvé zistenia 17:10
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Kariera/Zoznam, tech/creative (Pretlak/StartupJobs discovery), Upwork/freelance, Reddit/komunity a Facebook public index.
- Nová významná verification delta: **Foxelli Group — Assistant Brand Manager (crochet and knit brand) | DTC E-commerce | 100% Remote EU**. Originálny LinkedIn company post bol dnes verejne indexovaný pre Bratislavu a označuje rolu ako entry-level a 100 % remote. Náplň má silný prienik e-commerce, produktovej administratívy, customer feedback/support, marketingovej podpory, Shopify, Google Sheets, Claude a AI. Odmena je však len **do 1 000 EUR po zdanení** na full-time freelance kontrakt a pracovné prostredie je anglické; crochet/knitting je silná výhoda. Preto `locationEligibility: remote-ok`, ale iba verification, nie LIVE.
- Upwork/freelance discovery bolo reálne preverené. Verejný slovenský index stále uvádza **59 zákaziek**, bez novej promotion-grade WordPress/WooCommerce/admin delty lepšej než existujúca verification queue.
- Kariera/Zoznam dnes poskytla čerstvé BA/admin/vodič výsledky, ale po language/pay/fit/dedupe gate nevznikla nová bezpečná unique LIVE promotion.
- Worki, Brigada.sk a Pretlak/tech-creative boli reálne preverené bez novej promotion-grade delty.
- Reddit/WordPress komunita bola verejne preverená; bez nového konkrétneho hiring dopytu s dostatočným scope/budget dôkazom.
- Facebook public index: **0 verified hits / limited**. Bez konkrétneho verejného postu a priameho linku sa nič nezapisuje ako hit; autentizovaný Nexus/local ingestion zostáva backlog.

## Source audit — 5. 9. 2026 17:10
- Profesia: `checked`; bez novej unique promotion-grade delty.
- Priame company careers: `checked`; bez novej unique LIVE promotion. Foxelli novinka prišla cez originálny LinkedIn company post; priamy Ashby detail nebol v tomto behu verejne indexovaný.
- LinkedIn Jobs: `limited`; **1 relevantný nový hit**, Foxelli Assistant Brand Manager, pridaný do verification; bez LIVE promotion.
- Worki: `checked`; bez nového promotion-grade hitu.
- Brigada.sk: `checked`; bez nového promotion-grade hitu.
- Kariera/Zoznam: `ok`; čerstvé BA výsledky dostupné, ale bez promotion po language/pay/fit/dedupe gate.
- Pretlak / tech-creative: `checked`; bez novej vhodnej promotion-grade zhody.
- Upwork/freelance: `ok`; verejný index dostupný, bez novej promotion-grade delty.
- Reddit/komunity: `limited`; 0 promotion-grade verified hiring hits.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 17:10
- nové vhodné LIVE promotion: **0**
- LIVE feed delta: **0**, zostáva **50**
- nové unique významné verification kandidáty: **1** — Foxelli Assistant Brand Manager
- verification queue: **59 položiek** po bezpečnom zachovaní pôvodných 58 + 1 nová
- Facebook verified hits: **0**
- LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `source-audit.json`: **úspešne zapísaný** cez kompletný replacement s kontrolou pôvodného SHA; pôvodných 58 verification položiek bolo zachovaných a pridaná presne 1 nová. Predchádzajúci blocker veľkého auditného zápisu je v tomto behu prakticky prekonaný.

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
- **Atomic audit queue patch writer** — umožniť meniť iba `runSummary`, `sources`, `liveMix` a `writeStatus` bez serializácie celej verification queue; zápis musí pred commitom overiť pôvodný SHA a počet/ID queue položiek.
- **Same-day duplicate promotion shield** — ukladať canonical URL + normalized title/company fingerprint nových výsledkov na 24 hodín a pri opakovaných hodinových behoch okamžite rozlíšiť nový hit od už LIVE/verification kandidáta.
- **Remote full-time compensation floor by contract type** — pri full-time freelance/contract remote rolách vypočítať efektívny mesačný čistý ekvivalent a automaticky znížiť prioritu pod konfigurovateľným minimom; výnimka iba pre strategický skill-building alebo reálne part-time roly. Rieši prípady Foxelli 800–1 000 EUR full-time, ktoré vyzerajú obsahovo silno, ale ekonomicky nedávajú zmysel.
- **Adjacent-skill requirement bridge** — pri e-commerce/CMS rolách rozlišovať povinný skill od prenositeľnej susednej skúsenosti (napr. Shopify vs WooCommerce, Asana vs iné task systémy, Claude vs ChatGPT) a zvýšiť confidence iba vtedy, keď detail neoznačuje konkrétnu platformu ako hard requirement. Zníži zbytočné vyradzovanie junior/entry-level rolí a zároveň nepretlačí hard skill gap.
