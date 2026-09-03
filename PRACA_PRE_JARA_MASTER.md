# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 3. 9. 2026 10:20 CEST

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
- Sweep 10:20 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- **Upwork – WooCommerce Website Builder Needed**: Worldwide remote, 500 USD fixed-price, intermediate, ongoing; 20–50 proposals a full-store Shoptimizer build. Obsahovo relevantné, ale scope/competition/value risk znamená verification, nie LIVE.
- **Upwork – Need Basic WooCommerce Website (Design & Development)**: Worldwide remote, 2 000 USD fixed-price, contract-to-hire, ale 50+ proposals, 5 interviewing a end-to-end design/build/launch scope. Silná zákazka, no hard/full-build rozsah je nad preferovaným non-hard-dev profilom; zostáva verification.
- **Upwork – Data Entry Specialist for WooCommerce**: Worldwide remote, veľmi presný produktový/admin scope, ale iba 35 USD fixed-price pri neznámom objeme práce a 20–50 proposals; low-value/unknown-effort verification.
- **Kariera Bratislava**: čerstvé indexované výsledky 3.9.2026 boli prevažne mimo ranking profilu alebo nižšej priority; bez nového promotion-grade kandidáta.
- **Tesco Careers Bratislava**: priame career discovery našlo aktuálne manažérske/data roly, ale sú senior/specializované a mimo preferovaného profilu.

## Source audit — 3. 9. 2026 10:20
- Profesia: `checked`; BA WordPress/support/admin/driver discovery reálne preverené, bez novej promotion-grade delty.
- Priame company careers: `ok`; verejne dostupné kariérne stránky reálne preverené, vrátane aktuálnych Tesco Bratislava výsledkov; bez vhodného non-hard-dev kandidáta.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez nového konkrétneho BA/remote promotion-grade hitu.
- Worki.sk: `checked`; BA technická/admin/e-shop discovery preverená, bez novej promotion-grade delty.
- Brigada.sk: `checked`; BA administratíva/sklad/kuriér discovery preverené, bez nového promotion-grade hitu.
- Kariera.sk / Zoznam: `ok`; Bratislava feed reálne preverený, čerstvé výsledky bez nového prioritného fitu nad existujúci LIVE/verification set.
- Služby zamestnanosti: `checked`; verejný vyhľadávač dostupný a reálne preverený; bez novej promotion-grade BA/remote delty.
- Pretlak: `checked`; WordPress/e-commerce/support discovery preverená, bez vhodného nového non-hard-dev kandidáta.
- StartupJobs: `checked`; remote WordPress/WooCommerce discovery preverená, bez kandidáta, ktorý by prešiel jazykovým/skill/lokalitným gateom.
- Upwork/freelance: `ok`; nové WooCommerce výsledky reálne preverené. Tri relevantné hity zostávajú verification pre full-build scope, konkurenciu alebo slabú efektívnu hodnotu.
- Reddit/komunity: `limited`; verejná indexácia preverená; dnešné WordPress/WooCommerce výsledky sú prevažne `[FOR HIRE]` ponuky kandidátov, nie konkrétne hiring dopyty.
- Facebook public index: `limited`, **0 verified hits**; nebol nájdený konkrétny verejne overiteľný hiring post s priamym linkom.

### Audit počty 10:20
- source families / zdroje skontrolované: **12**
- z toho mimo Profesia: **11**
- relevantné nové/novozachytené kandidáty: **3**
- pridané do LIVE: **0**
- verification/reject kandidáty: **3**
- vyradené/pozdržané pre hard/full-build skill scope: **2**
- vyradené/pozdržané pre nízku hodnotu alebo neznámy effort: **1**
- vyradené pre lokalitu: **0**
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
- **Hiring-intent classifier for communities** — pri Reddit/Facebook/WordPress komunitách automaticky rozlíšiť `[HIRING]`/konkrétny dopyt od `[FOR HIRE]` sebaprezentácie, aby Source Radar nepočítal ponuky freelancerov ako pracovné hity.
- **Freshness evidence confidence gate** — pri indexovaných výsledkoch oddeliť dátum publikovania ponuky od dátumu crawl/indexácie; `<24h` prioritu aktivovať iba pri dôveryhodnom `publishedAt`, nie iba pri čerstvom crawle.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **48 LIVE položiek bezpečne zachovaných**, pretože nevznikla promotion-grade delta. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: posledný bezpečný JSON audit je aktuálny k 09:16; kompletný payload sa cez GitHub contents reader aj pri 10:20 sweepe vracia truncovane, takže replacement verification queue nebol vykonaný. Stav 10:20 je pravdivo zachytený v MASTER-i bez predstierania zápisu JSON auditu.
- `job-sources.json`: registry zostáva štrukturálne platný; zdroje boli v tomto rune reálne preverené, bez novej source family a bez potreby meniť jeho štruktúru.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 10:20** s reálnym auditom a 2 novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.