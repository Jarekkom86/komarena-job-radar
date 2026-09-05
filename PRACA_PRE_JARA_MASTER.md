# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 5. 9. 2026 14:29 CEST

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

### Čerstvé zistenia 14:29
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Kariera/Zoznam + ÚPSVR mirror, tech/creative (Pretlak + StartupJobs + WordPress Jobs), Upwork/freelance, Reddit/komunity a Facebook public index.
- Kariera/Zoznam dnes zobrazuje čerstvé BA administratívne výsledky vrátane **MADWIRE – Marketingový manažér, Bratislava, 1 700 EUR** a **Grafton – ADMIN ANALYST, Bratislava, 1 000–1 200 EUR**. Prvý je mimo prioritného profilu a druhý má slabší pomer fit/odmena; **bez LIVE promotion**.
- Upwork verejný Slovak feed uvádza **59 Slovakian jobs**; čerstvo indexované príklady sú prevažne UGC, cold calling, kuriérsky research, audio/transcription alebo mikroúlohy. Bez nového WordPress/WooCommerce/admin kandidáta s dostatočným ROI na promotion.
- LinkedIn verejná indexácia ostáva `limited`; bez bezpečného nového SK/BA promotion kandidáta.
- Worki a Brigada.sk reálne preverené; bez nového promotion-grade hitu.
- Pretlak/StartupJobs/WordPress Jobs preverené; BeiT zostáva cross-border remote `unknown`, ostatné výsledky bez dostatočného fitu alebo remote dôkazu.
- Reddit/WordPress/WooCommerce komunity: **0 verified konkrétnych hiring dopytov**, coverage `limited`.
- Facebook public index: **0 verified hits / limited**. Bez konkrétneho verejného postu a priameho linku sa nič nezapisuje ako hit; autentizovaný Nexus/local ingestion zostáva backlog.

## Source audit — 5. 9. 2026 14:29
- Profesia: `checked`; bez novej unique promotion-grade delty.
- Priame company careers: `checked`; bez novej vhodnej unique LIVE delty.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez bezpečného nového SK/BA promotion kandidáta.
- Worki: `checked`; bez nového promotion-grade hitu.
- Brigada.sk: `checked`; bez nového promotion-grade hitu.
- Kariera/Zoznam + ÚPSVR mirror: `ok`; čerstvé BA administratívne výsledky dostupné, ale bez promotion po fit/pay gate.
- Pretlak / StartupJobs / WordPress Jobs: `checked`; bez novej vhodnej promotion-grade zhody.
- Upwork/freelance: `ok`; Slovak feed verejne dostupný, 59 jobs, ale bez novej bezpečnej promotion-grade delty.
- Reddit/komunity: `limited`, 0 verified hiring hits.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 14:29
- nové vhodné LIVE promotion: **0**
- LIVE feed delta: **0**, zostáva **50**
- nové unique významné verification kandidáty: **0**
- Kariera/Zoznam relevantné čerstvé BA kandidáty: **2+**, ale bez promotion po fit/pay gate
- Upwork Slovak verejný feed: **59 jobs** indexovaných; bez novej promotion-grade zhody v prioritných smeroch
- Facebook verified hits: **0**
- LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `source-audit.json`: **FAIL-CLOSED bez zápisu v tomto behu** — dostupný GitHub connector stále vracia veľký existujúci súbor truncovaný uprostred 58-položkovej verification queue; kompletný replacement by mohol queue poškodiť. Audit vyššie je pravdivý záznam tohto behu, dátový audit zostáva na poslednom bezpečnom stave.

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
- **Negative-result query coverage hash** — pri source family bez hitu ukladať hash kombinácie query + lokalita + kategória + čas behu, aby sa dalo odlíšiť reálne nulové pokrytie od opakovania rovnakého úzkeho dotazu a automat mohol cielene rozšíriť ďalší sweep.
- **Remote-work jurisdiction evidence cache** — pri zahraničných remote rolách ukladať explicitný dôkaz, či firma povoľuje výkon práce zo Slovenska (employment/contractor/EU-wide/worldwide); kým dôkaz chýba, držať `locationEligibility: unknown` a neplytvať opakovaným manuálnym overovaním bez zmeny canonical detailu.
