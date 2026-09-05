# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 5. 9. 2026 07:32 CEST

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
- **MamaTataJojo, s.r.o. — Administratívny pracovník, Malacky** bol po opakovanom canonical overení bezpečne povýšený z verification queue do LIVE. Pred zápisom sa použil aktuálny blob SHA a po zápise Git diff ukázal iba zmenu `updatedAt` a pridanie jednej položky; pôvodný feed sa nestratil.

### Čerstvé zistenia 07:32
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Kariera/Zoznam, tech/creative (Pretlak + StartupJobs), Upwork/freelance, Reddit/komunity a Facebook public index.
- **MamaTataJojo, s.r.o. — Administratívny pracovník, Malacky**: canonical detail potvrdený 5. 9. 2026; zverejnené 4. 9. 2026, koniec ponuky 2. 10. 2026, 1 750 €/mes., plný úväzok na neurčito, jednozmenná prevádzka. Náplň: zakladanie, triedenie a archivácia zdravotných záznamov, skenovanie lekárskych správ, podklady pre poisťovne, tlačivá a korešpondencia. Požadované základné vzdelanie a vodičák B; cudzí jazyk nie je uvedený. Lokalita Malacky = `ba-area`. Stav **LIVE, score 94**.
- **LinkedIn**: verejná indexácia vrátila najmä hard-development/content-heavy alebo staršie/neaktívne výsledky; bez promotion.
- **Worki + Brigada.sk**: BA/remote discovery preverené, bez novej vhodnej promotion-grade delty.
- **Pretlak / StartupJobs**: bez novej vhodnej promotion-grade zhody.
- **Upwork**: WooCommerce Assistant a Product Listing/Ecommerce Management boli duplicates existujúcich LIVE/verification záznamov. Nový E-commerce Virtual Assistant mal relevantnú náplň produktov, objednávok a customer supportu, ale verejný index neposkytol dostatočný dôkaz o Slovakia-compatible remote/locality a odmene; preto bez promotion naslepo.
- **Reddit**: nájdené výsledky boli FOR HIRE, nie konkrétne hiring dopyty; 0 verified hiring hits.
- **Facebook public index**: preverený; **0 verified hits / limited**. Autentizovaný Nexus/local ingestion ostáva backlog, automat ho nespúšťa.

## Source audit — 5. 9. 2026 07:32
- Profesia: `checked`; bez novej unique promotion-grade delty.
- Priame company careers: `checked`; bez novej unique promotion-grade delty.
- LinkedIn Jobs: `limited`; hard-dev/content-heavy alebo staré výsledky, bez promotion.
- Worki: `checked`; bez novej vhodnej delty.
- Brigada.sk: `checked`; bez nového vhodného promotion-grade hitu.
- Kariera/Zoznam: `ok`; MamaTataJojo canonical potvrdený a **1 pridaný do LIVE**.
- Pretlak / StartupJobs: `checked`; bez novej vhodnej promotion-grade zhody.
- Upwork/freelance: `limited`; 5 relevantných indexovaných výsledkov, 2 duplicity, 1 jazykový/skill mismatch, 1 lokalitne neoverený; bez ďalšej promotion.
- Reddit/komunity: `limited`, 0 verified hiring hits.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 07:32
- nové vhodné LIVE promotion: **1**
- LIVE feed delta: **+1**, 49 → **50**
- verification pending: **57** + 1 historický promoted záznam ponechaný v audit trail
- Facebook verified hits: **0**
- LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**

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
- **Field-level provenance map** — pri každej LIVE položke evidovať, ktorý konkrétny zdroj a timestamp dokazujú lokalitu/remote režim, odmenu, jazyk, deadline a kvalifikačné požiadavky; pri konflikte aktualizovať iba pole s lepším primárnym dôkazom namiesto prepisovania celej položky podľa slabšieho mirroru.
- **Consecutive canonical-failure stale counter** — pre rotujúcu vzorku LIVE URL držať počet po sebe idúcich zlyhaní canonical overenia; položku iba označiť na revíziu až po minimálne dvoch nezávislých zlyhaniach a nikdy ju automaticky nemažať. Znižuje false-positive expiráciu a rešpektuje fail-closed pravidlo.
