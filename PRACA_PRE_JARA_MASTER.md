# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 3. 9. 2026 21:25 CEST

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
- Sweep 21:25 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- Čerstvý ŠÚKL `Odborný administratívny asistent/odborná administratívna asistentka` na Kvetnej v Bratislave má 1 200 EUR/mes. a je čerstvý BA admin hit, ale verejný index ho zároveň zaraďuje medzi ponuky s angličtinou bez spoľahlivého detailu úrovne; preto zatiaľ nie LIVE.
- Deutsche Schule Bratislava má čerstvú 75 % pozíciu asistentky sekretariátu riaditeľky za 1 200 EUR/mes. s okamžitým nástupom; vzhľadom na školské/prekladové prostredie a neúplnú verejnú evidenciu jazykových požiadaviek nebola automaticky promovovaná.
- Upwork mal nový `Full-Time WordPress & WooCommerce Developer` — Worldwide remote, 6+ mesiacov — ale scope vyžaduje silnú WP/WooCommerce development prax, Figma, Arabic RTL/multilingual, checkout/integrations a full-time ownership; hard skill mismatch.
- Powerlogy Marketing Specialist ostáva veľmi silný e-commerce/WooCommerce obsahový fit v Bratislave, ale explicitne vyžaduje slovenčinu aj angličtinu na veľmi dobrej úrovni; language hard gate.
- Facebook verejná indexácia ostáva **0 verified hits / limited**; bez konkrétneho verejne overiteľného postu sa nič nevytvára.

## Source audit — 3. 9. 2026 21:25
- Profesia: `ok`; čerstvé BA admin výsledky vrátane ŠÚKL a Deutsche Schule, 0 LIVE promotion pre neúplné/jazykové evidence.
- Priame company careers: `checked`; Alza a Siemens reálne preverené, bez novej promotion-grade delty.
- LinkedIn Jobs: `limited`; verejný Twine restaurant-site maintenance hit bol dohľadateľný, ale bez dostatočne kompletného canonical scope na promotion.
- Worki.sk: `checked`; BA/okolie discovery preverená, bez nového vhodného kandidáta.
- Brigada.sk: `checked`; BA admin/brigády preverené, bez nového konkrétneho promotion-grade detailu.
- Práca za rohom: `ok`; čerstvý ŠÚKL BA admin hit; WBA recepcia 7 EUR/h bola vyradená pre aktívnu stredne pokročilú AJ.
- Kariera.sk: `checked`; BA admin/customer-care preverené; iCan customer-care je language-heavy.
- Služby zamestnanosti: `ok`; iCan potvrdený v Bratislave-Petržalke, ale komunikácia najmä v angličtine a ruštine = language reject.
- Pretlak / StartupJobs / WordPress Jobs: `ok`; Powerlogy revalidované ako obsahovo silné, ale s veľmi dobrou AJ; ostatné bez promotion-grade hitu.
- Upwork/freelance: `ok`; nový full-time WP/WooCommerce hit je remote-ok, ale developer/Arabic RTL/Figma-heavy; známy E-commerce VA Subscriptions/Xero lead ostáva verification.
- Reddit/komunity: `limited`; verejná indexácia preverená, bez konkrétneho hiring dopytu vhodného na promotion.
- Facebook public index: `limited`, **0 verified hits**; nebol nájdený konkrétny verejne overiteľný hiring post s priamym linkom.

### Audit počty 21:25
- source families reálne skontrolované: **12**
- z toho mimo Profesia: **11**
- relevantné/čiastočne relevantné nové alebo revalidované výsledky: **8+**
- pridané do LIVE: **0**
- nové bezpečne promovované položky: **0**
- vyradené/pozdržané pre jazyk: **5+**
- vyradené pre hard skill/scope: **3+**
- locality reject: **0 promotion kandidátov**
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
- **Language-index false-positive verifier** — ak search/index zaradí ponuku do kategórie „anglický jazyk“, ale detail neukáže úroveň ani reálny spôsob použitia, automat nesmie odvodiť B1/B2; kandidát ostane v evidence quarantine do canonical overenia.
- **Role-title vs duty mismatch detector** — porovná názov pozície so skutočnou náplňou a penalizuje prípady, kde „admin/support“ v skutočnosti znamená sales-heavy, hard-dev alebo multijazyčnú front-line rolu; zníži falošné TOP hity.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **48 LIVE položiek bezpečne zachovaných**, pretože nevznikla promotion-grade delta. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: zápis nového auditu **nebol vykonaný**, pretože dostupný writer vyžaduje kompletný replacement a runtime nemá bezpečný patch mechanizmus na zachovanie 44-položkovej verification queue bez manuálnej rekonštrukcie. Posledný bezpečný audit ostáva 20:34; fail-closed má prednosť pred stratou queue.
- `job-sources.json`: **aktualizovaný na 21:25** iba o auditové timestampy/poznámky skutočne kontrolovaných zdrojov; source definitions bez neodôvodnenej štrukturálnej zmeny.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 21:25** s reálnym auditom a 2 novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.