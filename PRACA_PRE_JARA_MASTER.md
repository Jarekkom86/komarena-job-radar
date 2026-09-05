# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 5. 9. 2026 12:36 CEST

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

### Čerstvé zistenia 12:36
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Kariera/Zoznam, tech/creative (Pretlak + StartupJobs), Upwork/freelance, Reddit/komunity a Facebook public index.
- **Kariera/Zoznam — Skladový pracovník Bratislava, EPF Group**, zverejnené 5. 9. 2026: `ba-area`, 1 273 EUR/mes. základ + príplatky, práca v stoji a v tempe, fyzická manipulácia a trojzmenná prevádzka. Lokalita prechádza, ale fit/odmena/fyzická záťaž sú slabé; **nepovýšiť do LIVE**.
- Kariera zároveň ukazuje čerstvé BA logistické/brigádnické výsledky (Slovenská pošta a ďalšie), ale bez kandidáta, ktorý by zodpovedal prioritám lepšie než existujúci LIVE feed.
- **Upwork WordPress/WooCommerce** má nové výsledky z posledných ~12–17 h, ale ide prevažne o intermediate/expert full-build, dizajn alebo hard-development; WooCommerce Data Entry za 35 USD je slabý fixed-price ROI. Bez bezpečnej LIVE promotion.
- **StartupJobs — BeiT Technologie Administrativně-ekonomický specialista** zostáva atraktívny 100 % remote admin/support kandidát, ale verejný detail stále nepreukazuje explicitnú možnosť cezhraničnej spolupráce zo Slovenska; `locationEligibility: unknown` zostáva správne.
- **Pretlak — ui42 Medior PPC** je Bratislava/hybrid a 1 500–2 000 EUR, ale vyžaduje samostatnú PPC expertízu; mimo vhodného skill profilu.
- LinkedIn verejná indexácia stále vracia EEA web-maintenance výsledky bez dostatočného SK-remote/freshness dôkazu; coverage `limited`.
- Reddit/WordPress/WooCommerce komunity: 0 verified konkrétnych hiring dopytov; coverage `limited`.
- Facebook public index: **0 verified hits / limited**. Bez konkrétneho verejného postu a priameho linku sa nič nezapisuje ako hit; autentizovaný Nexus/local ingestion zostáva backlog.

## Source audit — 5. 9. 2026 12:36
- Profesia: `checked`; bez novej unique promotion-grade delty.
- Priame company careers: `checked`; bez novej vhodnej unique LIVE delty.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez bezpečného nového SK/BA promotion kandidáta.
- Worki: `checked`; bez nového promotion-grade hitu.
- Brigada.sk: `checked`; bez nového promotion-grade hitu.
- Kariera/Zoznam: `ok`; čerstvé BA výsledky dostupné, vrátane skladu z 5. 9., ale bez vhodnej promotion po fit/fyzickej záťaži/odmene.
- Pretlak / StartupJobs: `ok`; relevantné výsledky dostupné, ale ui42 je skill mismatch a BeiT zostáva cross-border remote `unknown`.
- Upwork/freelance: `ok`; viac čerstvých WordPress/WooCommerce výsledkov, ale hard-development/dizajn/nízky ROI; 0 LIVE promotion.
- Reddit/komunity: `limited`, 0 verified hiring hits.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 12:36
- nové vhodné LIVE promotion: **0**
- LIVE feed delta: **0**, zostáva **50**
- nové unique významné verification kandidáty: **0**
- čerstvé Kariera kandidáty preverené: **5+**, vyradené z LIVE pre fit/fyzickú záťaž/odmenu alebo nižšiu prioritu
- čerstvé Upwork WordPress/WooCommerce výsledky preverené: **8+**, bez bezpečnej promotion
- Facebook verified hits: **0**
- LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `source-audit.json`: **FAIL-CLOSED bez zápisu v tomto behu**, pretože dostupný GitHub connector vracia veľký existujúci súbor truncovaný uprostred 58-položkovej verification queue; kompletný replacement by mohol queue poškodiť. Audit vyššie je pravdivý záznam tohto behu, ale dátový audit zostáva na poslednom bezpečnom stave.

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
- **Same-day low-fit suppression ledger** — pri čerstvých ponukách z dnešného dňa evidovať dôvod, prečo sa neoplati ich znovu preverovať v každom hodinovom behu (fyzická záťaž, zmeny, nízka odmena, hard skill mismatch); zníži opakovanú prácu bez skrytia budúcich material changes.
- **Freelance scope-to-evidence matcher** — porovnať každý freelance scope s konkrétnymi doložiteľnými referenciami/skill evidence a oddeliť administráciu WooCommerce/WordPress od zásahov vyžadujúcich PHP/API/custom theme/plugin; zvýši presnosť promotion rozhodnutia a reply probability.
