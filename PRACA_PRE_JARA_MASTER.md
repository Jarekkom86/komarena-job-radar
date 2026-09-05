# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 5. 9. 2026 10:43 CEST

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

### Čerstvé zistenia 10:43
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Kariera/Zoznam, tech/creative (Pretlak + StartupJobs), Upwork/freelance, Reddit/komunity a Facebook public index.
- **Upwork — E-commerce Virtual Assistant – WooCommerce, Subscriptions, Customer Service, Xero**: Worldwide remote, 10–15 USD/h, <30 h/týždeň, 1–3 mesiace, contract-to-hire, 15–20 proposals, 1 hire. Scope je veľmi silný: WooCommerce admin, subscriptions, customer e-mail support, troubleshooting checkout/order issues, Meta Ads admin a Xero. Zostáva vo verification, pretože explicitne vyžaduje **good written English**, strong WooCommerce experience, WooCommerce Subscriptions, Meta Ads Manager a basic Xero; nejde o bezpečnú automatickú LIVE promotion pre A2 profil.
- **LinkedIn/Twine — Freelance Web Developer – Restaurant Site Maintenance**: verejne indexovaný EEA hit, ale bez dostatočne silného dôkazu o aktuálnosti, rozsahu a SK-remote podmienkach na LIVE promotion.
- **Kariera/Zoznam**: Bratislava/admin index priniesol čerstvé výsledky, no žiadny nový kandidát neprekonal existujúce LIVE/verification položky po lokalitnom, jazykovom a fit gate.
- **Profesia**: webmaster/e-commerce discovery preverené; zobrazené výsledky boli staršie, mimo BA/remote gate alebo už existujúce/nízkoprioritné.
- **Worki + Brigada.sk + Pretlak/StartupJobs**: reálne vyhľadané, bez novej unique promotion-grade delty.
- **Reddit/WordPress/WooCommerce komunity**: 0 verified konkrétnych hiring dopytov; verejná indexácia limited.
- **Facebook public index**: **0 verified hits / limited**. Bez konkrétneho verejného postu a priameho linku sa nič nezapisuje ako hit; autentizovaný Nexus/local ingestion zostáva backlog.

## Source audit — 5. 9. 2026 10:43
- Profesia: `checked`; bez novej unique promotion-grade delty.
- Priame company careers: `checked`; bez novej vhodnej unique LIVE delty.
- LinkedIn Jobs: `limited`; 1 EEA web-maintenance hit, bez dostatočného SK-remote/freshness dôkazu na promotion.
- Worki: `checked`; bez nového promotion-grade hitu.
- Brigada.sk: `checked`; bez nového promotion-grade hitu.
- Kariera/Zoznam: `ok`; čerstvé BA/admin výsledky dostupné, ale bez bezpečnej promotion.
- Pretlak / StartupJobs: `checked`; bez novej vhodnej unique promotion-grade delty.
- Upwork/freelance: `ok`; relevantné WooCommerce/VA výsledky dostupné, ale najlepší nový/čerstvo overený kandidát je už vo verification a má jazykovo-toolový burden.
- Reddit/komunity: `limited`, 0 verified hiring hits.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 10:43
- nové vhodné LIVE promotion: **0**
- LIVE feed delta: **0**, zostáva **50**
- nové unique významné verification kandidáty: **0**
- relevantný už evidovaný verification kandidát znovu potvrdený: **1** (Upwork WooCommerce/Xero VA)
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
- **Consecutive canonical-failure stale counter** — pre rotujúcu vzorku LIVE URL držať počet po sebe idúcich zlyhaní canonical overenia; položku iba označiť na revíziu až po minimálne dvoch nezávislých zlyhaniach a nikdy ju automaticky nemažať.
- **English task-type comprehension probe** — pri rolách bez formálnej CEFR úrovne rozlíšiť, či je angličtina iba pasívne čítanie/labeling, písomná tvorba alebo telefonická komunikácia.
- **Remote microtask income stability score** — pri task-based AI/data rolách evidovať garantované hodiny, dostupnosť taskov, pay-per-task vs. hodinovú sadzbu a historickú stabilitu projektu.
- **Cross-border remote contract eligibility verifier** — pri českých/EÚ „100 % remote“ ponukách automaticky hľadať dôkaz, či firma akceptuje slovenskú SZČO/živnosť alebo zamestnanca zo Slovenska. Bez explicitného dôkazu nechať `locationEligibility: unknown`.
- **Phone-language burden score for CZ/SK roles** — odlíšiť pasívnu češtinu/slovenčinu od každodennej telefonickej komunikácie a zákazníckych eskalácií.
- **Freelance client activity delta tracker** — pri každom opakovanom overení freelancovej ponuky porovnať `last viewed`, počet proposals, interviewing, hires a spend; prudké zhoršenie alebo stagnácia automaticky zníži ROI bez mazania kandidáta.
- **Published-vs-crawled freshness provenance** — oddeliť dátum publikovania ponuky od dátumu, kedy ju vyhľadávač naposledy crawloval; `<24h priority` smie vychádzať iba z publikovania/obnovenia na primárnom zdroji, nie z čerstvého crawlu starej ponuky.
