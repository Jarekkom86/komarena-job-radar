# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 5. 9. 2026 00:17 CEST

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

### Negatívne filtre
- AJ A2 preferovaná; B1 mierny/stredný mínus; B2/C1 výrazný mínus.
- Povinný ďalší cudzí jazyk, hard PHP/fullstack/Laravel/React/Vue, pokročilé Linux/Docker/API alebo povinná špecializovaná kvalifikácia bez dôkazu praxe = silná penalizácia alebo hard gate.
- Vodičské roly: povinné BE/C/C+E, tachografová karta alebo pravidelné diaľkové/medzinárodné trasy sú hard mismatch.
- Lokalita BA/okolie alebo overený remote/HO je hard gate, nie bonus.
- Agregátor/repost nesmie prebiť priamy firemný zdroj.

## Aktuálny stav LIVE
- Autoritatívny feed má **49 LIVE položiek**.
- LIVE mix: **Profesia 24/49 = 49,0 %**, mimo Profesia **25/49 = 51,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-04T16:16:38+02:00**.
- Sweep 00:17 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.

### Čerstvé zistenia 00:17
- **Upwork – Data Entry Specialist for WooCommerce**: Worldwide remote, WooCommerce produktové dáta, Excel/CSV, SKU/kategórie, AI-generated descriptions a image filename workflow. Kandidát už je vo verification queue; bez LIVE promotion pre fixných 35 USD, 20–50 proposals a neznámy počet produktov/odhad hodín.
- **Upwork – WooCommerce Developer Needed to Improve Product Page Layout**: Worldwide remote, 60 USD fixed, Intermediate, 10–15 proposals. Scope je existujúca produktová stránka, responsive/CSS/HTML/WooCommerce customization a testovanie checkout/cart funkčnosti. Nepovýšené pre nový klientský účet bez verejnej histórie, technický customization burden a nízky fixed budget.
- **Upwork – Wordpress developer, ongoing wordpress support**: Worldwide remote, 1 000 USD fixed, ale Expert/complex project a 50+ proposals; bez promotion.
- **Práca za rohom – Laminam, Obchodný/á a administratívny/a asistent/ka**: Bratislava-Podunajské Biskupice, od 1 500 EUR, voľné víkendy a zaškolenie; obsahovo dobrý admin/customer-service fit, ale vyžaduje komunikatívnu angličtinu a maďarčinu na stredne pokročilej úrovni. Bez promotion pre compound language gate.
- **Práca za rohom – BODHI part-time**: Bratislava, 8–12 EUR/h, e-shop objednávky/expedícia/sklad/reklamácie, ale verejný detail uvádza stredne pokročilú angličtinu, nemčinu aj maďarčinu. Bez promotion.
- **LinkedIn/Reddit/Facebook**: verejná indexácia preverená; bez novej bezpečnej promotion-grade delty. Facebook ostáva **0 verified hits / limited**.

## Source audit — 5. 9. 2026 00:17
- source families reálne skontrolované: **11**
- mimo Profesia: **10**
- Profesia: `checked`; bez novej promotion-grade delty.
- Priame company careers: `checked`; bez novej unique promotion-grade delty.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez novej bezpečnej zhody.
- Worki.sk: `checked`; bez novej vhodnej delty.
- Brigada.sk: `checked`; bez novej vhodnej priority delty.
- Práca za rohom: `ok/checked`; nové BA admin kandidáty Laminam a BODHI zachytené, ale vyradené pre jazykový hard gate.
- Pretlak + StartupJobs: `checked`; bez novej vhodnej promotion-grade zhody.
- Upwork/freelance: `ok`; čerstvé Worldwide remote výsledky preverené, 0 LIVE promotion pre competition/budget/client-trust/scope riziká.
- Reddit/komunity: `limited`; bez vhodného hiring dopytu vykonateľného zo Slovenska.
- Facebook public index: `limited`, **0 verified hits**.
- Kariera/Zoznam: `checked`; bez novej bezpečnej promotion-grade delty.

### Audit počty 00:17
- pridané do LIVE: **0**
- LIVE feed delta: **0**; fail-closed zachovanie 49 položiek
- Facebook verified hits: **0**
- nové relevantné kandidátske signály: Práca za rohom **2**, Upwork **3**; LIVE promotion **0**
- vyradené/karanténa: compound language gate **2**, fixed-price/client-trust/scope **2**, expert+competition **1**
- verification queue: zachovaná; WooCommerce Data Entry už bola evidovaná, bez duplicitného pridania.
- `source-audit.json`: v tomto behu nebol prepísaný, pretože konektor umožňuje iba kompletný replacement veľkého súboru; pri nulovej LIVE delte a bez novej queue položky bol zvolený FAIL-CLOSED postup bez rizika straty existujúcej verification queue. `job-sources.json` a MASTER obsahujú čerstvý audit 00:17.

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
- **Compound-language hard-gate detector** — pri ponuke s dvoma alebo viacerými povinnými cudzími jazykmi kombinovať jednotlivé language penalties do jedného tvrdého gate; zabrániť tomu, aby obsahovo atraktívna admin/e-shop rola prešla iba preto, že každý jazyk bol hodnotený izolovane.
- **New-client fixed-price risk × effort gate** — pri freelance zákazkách s novým/neovereným klientom kombinovať account age, spend/hire history, fixed budget, počet proposals a odhad scope hodín; nízky budget + nový klient + technický zásah do live e-shopu automaticky držať vo verification, nie LIVE.
