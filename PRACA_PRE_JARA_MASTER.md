# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 5. 9. 2026 01:13 CEST

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
- Sweep 01:13 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.

### Čerstvé zistenia 01:13
- **Upwork – Full-Time Virtual Assistant, Operations**: Worldwide remote a obsahovo relevantný e-commerce operations/customer-service scope (objednávky, fulfillment, data entry, ticket handling), ale požaduje **12 hodín denne, 6 dní v týždni**, strong written English, Expert level a má 20–50 proposals. Bez promotion pre neprimeraný workload + language gate.
- **Upwork – Senior WordPress Developer (Elementor Expert)**: Worldwide remote, part-time/long-term deklarácia, ale Expert level, 3+ rokov WP/Elementor Pro, ACF/custom CSS/light PHP a iba **5 USD fixed-price**. Bez promotion.
- **Upwork – Experienced WordPress Developer Needed**: Worldwide remote, ale custom theme + plugin development, PHP/JS a iba **20 USD fixed-price**. Hard-development mismatch + nízka odmena.
- **LinkedIn/Twine – Freelance Web Developer – Restaurant Site Maintenance**: remote EEA, ale web je custom-built (nie WordPress/Shopify), požaduje bespoke-system bug fixing a e-commerce flow troubleshooting. Bez promotion pre hard-development mismatch.
- **Reddit WordPress hiring**: konkrétne verejne overiteľné hiring posty boli US-only alebo Pakistan-only; podľa hard lokalitného gate vyradené.
- **Facebook public index**: preverený; **0 verified hits / limited**.

## Source audit — 5. 9. 2026 01:13
- source families reálne skontrolované: **10**
- mimo Profesia: **9**
- Profesia: `checked`; bez novej promotion-grade delty.
- Priame company careers: `checked`; Slovak Telekom preverený, bez novej unique promotion-grade delty.
- LinkedIn Jobs: `limited`; Twine lead zachytený, ale hard-development mismatch; ďalšie výsledky boli staré/no longer accepting.
- Worki.sk: `checked`; bez novej vhodnej delty.
- Brigada.sk: `checked`; bez novej vhodnej priority delty.
- Práca za rohom: `checked`; bez novej promotion-grade delty.
- Pretlak/tech-creative: `checked`; bez novej vhodnej promotion-grade zhody.
- Upwork/freelance: `ok`; čerstvé Worldwide remote výsledky preverené, 0 LIVE promotion pre workload/language/skill/budget riziká.
- Reddit/komunity: `limited`; overené hiring výsledky boli country-restricted mimo Slovenska.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 01:13
- pridané do LIVE: **0**
- LIVE feed delta: **0**; fail-closed zachovanie 49 položiek
- Facebook verified hits: **0**
- Upwork relevantné čerstvé signály: **8**, LIVE promotion **0**
- LinkedIn relevantné signály: **1**, LIVE promotion **0**
- Reddit konkrétne hiring signály: **2**, oba reject-country/location
- verification queue: **57**, fail-closed zachovaná bez novej queue položky
- `source-audit.json`: aktualizovaný na 01:13 so zachovaním celej verification queue.
- `job-sources.json`: aktualizovaný na 01:13.
- `jobs-data.json`: bez obsahovej zmeny, pretože nevznikla bezpečná nová LIVE promotion.

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
- **Workload sustainability gate** — extrahovať požadované hodiny/deň, dni/týždeň, nočné/časové prekryvy a povinnú online dostupnosť; role typu 12 h/deň × 6 dní/týždeň automaticky penalizovať alebo karantenizovať bez ohľadu na obsahový fit.
- **Effective hourly compensation normalizer** — pri fixed-price/mesačných freelance ponukách kombinovať deklarovaný workload, minimálnu dostupnosť a odhadovaný rozsah na efektívnu hodinovú odmenu; odhaliť ponuky, ktoré vyzerajú atraktívne fixnou sumou, ale po prepočte padajú pod minimálnu ekonomickú hranicu.
