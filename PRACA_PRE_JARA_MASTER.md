# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 3. 9. 2026 23:32 CEST

## Architektúra a ochrana UI
- Aktuálny používateľský MASTER: `komarena-job-radar-v6.4.html`.
- Autoritatívny živý feed: `jobs-data.json` (`schemaVersion: 1`).
- Bootstrap diverzity: `jobs-data-nonprof.json` — **zamknutý**, automat ho nemení.
- Register zdrojov: `job-sources.json`.
- Pravdivý audit prístupu: `source-audit.json`.
- Stabilný BA fallback: `baseline-jobs.json` — **zamknutý**.
- UI/renderery/index/baseline sú zamknuté; automat mení iba povolené dátové súbory a tento MASTER.
- CRM localStorage: `pracaPreJaraCRM-v3`; používateľské editácie: `pracaPreJaraEdits-v1`.

## Ranking profil
1. WordPress/WooCommerce, web/e-shop/CMS/content/product admin, Shoptet/Shopify/Upgates, maintenance webov/e-shopov.
2. Technický support, Smart Home/IoT/Home Assistant, AI integrácie bez hard developmentu, troubleshooting/reklamácie/IT support.
3. Administratíva/back-office/customer care/operations.
4. Vodič B/kuriér bez tachografu.
5. Sklad/logistika.

### Tvrdý lokalitný gate
- Aktívny feed povoľuje iba **Bratislavu + rozumné okolie/denný dojazd**, alebo **skutočný remote/home-office vykonateľný zo Slovenska bez pravidelného dochádzania do vzdialeného mesta**.
- Mimo BA onsite alebo pravidelný hybrid do vzdialeného mesta = `reject-distance`.
- Nejasná lokalita/remote politika = `locationEligibility: unknown`; najprv overiť, nie odporúčať.
- Nové položky evidujú `locationEligibility` a `locationReason`.

### Negatívne filtre
- AJ A2 preferovaná; B1 mierny/stredný mínus; B2/C1 výrazný mínus.
- Povinný ďalší cudzí jazyk, hard PHP/fullstack/Laravel/React/Vue, pokročilé Linux/Docker/API alebo povinná špecializovaná kvalifikácia bez dôkazu praxe = silná penalizácia alebo hard gate.
- Vodičské roly: povinné BE/C/C+E, tachografová karta alebo pravidelné diaľkové/medzinárodné trasy sú hard mismatch oproti preferencii vodič B bez tachografu.
- Lokalita BA/okolie alebo overený remote/HO je hard gate, nie bonus.
- Agregátor/repost nesmie prebiť priamy firemný zdroj.

## Aktuálny stav LIVE
- Autoritatívny feed má aktuálne **48 LIVE položiek**.
- LIVE mix: **Profesia 24/48 = 50,0 %**, mimo Profesia **24/48 = 50,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-03T02:15:13+02:00** — posledná reálna zmena LIVE feedu.
- Sweep 23:32 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- Arduino/RS485 občiansky dopyt z Brigada.sk zostáva vo verification queue s `locationEligibility: unknown`, pretože stále chýba explicitný remote/zaslanie-zariadenia dôkaz.
- Upwork priniesol nové WordPress výsledky: landing page za 20 USD, custom WordPress page za 1 500 USD a website maintenance/management. Dostupné verejné detaily však boli buď low-budget, alebo developer/portfolio-heavy; bez LIVE promotion.
- Worki ukázalo viac výsledkov s `Update 03.09.2026`, ale pôvodný dátum vytvorenia bol marec/máj 2026. Tieto záznamy sa nesmú považovať za `<24h` fresh leady iba na základe refresh dátumu.
- Brigada.sk pri vodičovi detského vláčika AVION zobrazuje v zozname anomáliu `1000,00 EUR/h`, pričom text ponuky uvádza `6 EUR/h netto`; mzdový údaj je preto považovaný za nespoľahlivý bez canonical overenia.
- Facebook verejná indexácia ostáva **0 verified hits / limited**; bez konkrétneho verejne overiteľného postu sa nič nevytvára.

## Source audit — 3. 9. 2026 23:32
- Profesia: `checked`; BA WordPress/WooCommerce/admin/support/driver discovery reálne preverené, bez novej promotion-grade delty.
- Priame company careers: `checked`; BA/remote discovery reálne preverené, bez novej promotion-grade delty.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez nového konkrétneho promotion-grade hitu.
- Worki.sk: `checked`; 3 relevantné/čiastočne relevantné revalidácie, ale staré publish dátumy alebo lokalitný/role-fit fail; 0 LIVE promotion.
- Brigada.sk: `ok`; Arduino/RS485 je už známy verification lead; AVION vodič vláčika má chybnú mzdovú jednotku; PHP programátor je hard-development mismatch; 0 LIVE promotion.
- Kariera.sk/Zoznam: `checked`; BA admin/support/logistika discovery reálne preverené, bez novej promotion-grade delty.
- Pretlak / StartupJobs / WordPress Jobs: `checked`; bez nového konkrétneho promotion-grade hitu.
- Upwork/freelance: `ok`; viac čerstvých Worldwide WordPress výsledkov, ale low-budget alebo developer/portfolio-heavy; 0 LIVE promotion.
- Reddit/komunity: `limited`; verejná indexácia preverená, bez konkrétneho hiring dopytu vhodného na promotion.
- Facebook public index: `limited`, **0 verified hits**; nebol nájdený konkrétny verejne overiteľný hiring post s priamym linkom.

### Audit počty 23:32
- source families reálne skontrolované: **10**
- z toho mimo Profesia: **9**
- relevantné/čiastočne relevantné nové alebo revalidované výsledky: **13+**
- pridané do LIVE: **0**
- nové verification položky: **0**
- vyradené/pozdržané pre jazyk/skill/value/lokalitu/staleness: **10+**
- Facebook verified hits: **0**
- LIVE feed delta: **0**; fail-closed zachovanie 48 položiek.

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
- Audit payload sharding / append-only run ledger.
- Language-risk reason normalization.
- Unknown-effort fixed-price gate.
- Fresh-post low-budget escalation guard.
- Canonical careers evergreen-age detector.
- Shift-window burden score.
- Driver credential hard-gate extractor.
- Cross-border route burden score.
- Hiring-intent classifier for communities.
- Freshness evidence confidence gate.
- Existing-site maintenance preference boost.
- Source-result semantic locality validator.
- Source-family query coverage heatmap.
- Verification queue recheck budget allocator.
- Search-result location contradiction quarantine.
- Freelance scope-to-budget unit estimator.
- Client hiring-volume anomaly detector.
- Microtask detail-insufficiency quarantine.
- Required-proof inventory matcher.
- Freelance client-response velocity signal.
- Shift-language compound-risk gate.
- Freelance budget-scope contradiction detector.
- Verification evidence age bands.
- Source-family no-delta rotation planner.
- Student-only contract eligibility gate.
- Same-day shift expiration gate.
- Search-family negative-result confidence.
- Driver-role taxonomy hard gate.
- Language-index false-positive verifier.
- Role-title vs duty mismatch detector.
- Remote-proof extractor for nationwide gigs.
- Micro-gig contactability score.
- **Salary/unit anomaly detector** — porovnať numerickú mzdu, jednotku a text detailu; pri rozpore typu `1000 EUR/h` vs `6 EUR/h netto` zastaviť scoring a označiť hodnotu ako unreliable, kým sa neoverí canonical detail.
- **Original-publish vs refreshed-date normalizer** — oddeľovať pôvodný dátum vytvorenia od dátumu aktualizácie; samotný refresh starého inzerátu nesmie automaticky dostať `publishedAt/<24h` prioritu.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **48 LIVE položiek bezpečne zachovaných**, pretože nevznikla promotion-grade delta. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: **aktualizovaný na 23:32**, verification queue zachovaná.
- `job-sources.json`: **aktualizovaný na 23:32** s pravdivými audit notes.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 23:32** s reálnym auditom a 2 novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.