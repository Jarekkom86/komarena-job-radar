# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 4. 9. 2026 23:09 CEST

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
- Sweep 23:09 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.

### Čerstvé zistenia 23:09
- **Upwork – Full-Time WordPress & WooCommerce Developer**: Worldwide remote, dlhodobý full-time kontrakt; silný tematický fit na WordPress/WooCommerce, produkty, checkout a QA. Nepovýšené: povinné Arabic RTL/multilingual workflow, Figma implementácia, troubleshooting plugin/performance/integration problémov a praktický test z WordPress/WooCommerce/Arabic obsahu predstavujú hard skill burden nad profil.
- **Upwork – WooCommerce Developer for Website Improvements**: Worldwide remote, 1–3 mesiace, ale Expert level + technická maintenance/category templates/PHP nice-to-have; 15–20 proposals a už 4 interviewing. Bez promotion.
- **Upwork – eCommerce VA & Customer Support**: Worldwide remote, 8–9 USD/h, silný admin/customer-support fit, ale už 50+ proposals a platform stack Shopify/Amazon/eBay/Etsy + CRM; nízky application ROI.
- **Upwork – Ecommerce Support and Market Research**: Worldwide označenie, ale detail výslovne hľadá kandidáta based in the Philippines; `reject-distance/eligibility`, nie remote-ok pre Slovensko.
- **Pretlak – ui42 PPC Špecialista**: Bratislava, 1 500–2 000 EUR, ale medior PPC/Google Ads/Bing/Meta špecializácia mimo cieľového profilu.
- **Telekom careers**: nový výpis stále obsahuje už LIVE Špecialistu/Špecialistku podpory zákazníkov; žiadna nová unique promotion-grade delta.
- **Reddit**: dostupný hiring WordPress výsledok je US-only a hard development; ďalšie výsledky sú FOR HIRE/self-promo alebo regionálne obmedzené.
- **Facebook**: **0 verified hits / limited**; bez konkrétneho verejne overiteľného postu sa nič nevytvára.

## Source audit — 4. 9. 2026 23:09
- source families reálne skontrolované: **11**
- mimo Profesia: **10**
- Profesia: `checked`; bez novej promotion-grade delty.
- Priame company careers: `ok/checked`; Telekom canonical výpis preverený, bez novej unique delty.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez novej bezpečnej promotion-grade zhody.
- Worki.sk: `checked`; bez novej vhodnej delty.
- Brigada.sk: `checked`; bez novej vhodnej priority delty.
- Práca za rohom + Kariera.sk: `checked`; bez novej bezpečnej promotion-grade zhody.
- Pretlak + StartupJobs: `ok/checked`; nový Pretlak PPC hit je skill mismatch.
- Upwork/freelance: `ok`; viac čerstvých Worldwide remote výsledkov, 0 LIVE promotion pre hard-scope, jazyk/region restriction, konkurenciu alebo workload/value riziká.
- Reddit/komunity: `limited`; bez vhodného hiring dopytu vykonateľného zo Slovenska.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 23:09
- pridané do LIVE: **0**
- LIVE feed delta: **0**; fail-closed zachovanie 49 položiek
- Facebook verified hits: **0**
- nové relevantné kandidátske signály: Upwork **4**, Pretlak **1**, Telekom canonical refresh **1**; LIVE promotion **0**
- vyradené/karanténa: hard-scope **2**, region restriction **1**, competition/platform burden **1**, skill-profile mismatch **1**, duplicate/canonical refresh **1**
- verification queue: posledná bezpečne uložená queue zostáva zachovaná; tento beh ju automaticky neskracuje ani nerebuildí z neúplného payloadu.

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
- **Skill-burden × compensation frontier** — porovnať počet a náročnosť povinných technických/platformových skillov s odmenou a automaticky znižovať ROI pri rolách, ktoré za nízku/strednú odmenu kumulujú developer, QA, design, multilingual a support zodpovednosti.
- **Remote-label contradiction extractor** — pri označení `Worldwide/Remote` hľadať v texte regionálne obmedzenia typu „based in Philippines“, „US only“, „EU only“ a pri konflikte automaticky nastaviť `reject-distance` alebo `unknown` namiesto `remote-ok`.
