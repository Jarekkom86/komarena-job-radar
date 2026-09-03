# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 3. 9. 2026 04:26 CEST

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
- Lokalita BA/okolie alebo overený remote/HO je hard gate, nie bonus.
- Agregátor/repost nesmie prebiť priamy firemný zdroj.

## Aktuálny stav LIVE
- Autoritatívny feed má aktuálne **48 LIVE položiek**.
- Posledný sourcing audit: **11 source families**, z toho **10 mimo Profesia**.
- LIVE mix: **Profesia 24/48 = 50,0 %**, mimo Profesia **24/48 = 50,0 %**.
- Facebook verejná indexácia: `limited`, **0 verified hits**; žiadne fiktívne pokrytie.
- `jobs-data.json.updatedAt`: **2026-09-03T02:15:13+02:00** — posledná reálna zmena LIVE feedu.
- Sweep 04:26 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- **Magistrát hlavného mesta SR Bratislavy – Odborný/á referent/tka podateľne**: zverejnené 2.9.2026, Bratislava, od 1 300 EUR/mes., SŠ s maturitou. Veľmi silný obsahový fit na digitalizáciu, registratúru, databázy, reporty a administratívu; cudzí jazyk je iba výhodou. `locationEligibility: ba-area`. Kandidát je významný a promotion-grade po obsahovej stránke, ale writer pre `jobs-data.json` je v tomto behu fail-closed kvôli truncovanému read payloadu, preto nebol riskantne zapísaný.
- **Upwork – E-commerce Virtual Assistant – WooCommerce, Subscriptions, Customer Service, Xero** zostáva relevantný remote lead, ale pracovná komunikácia v angličtine a špecializované WooCommerce Subscriptions/Xero požiadavky ho držia vo verification.
- **DHL HR Operations Specialist, Bratislava** bol v discovery nájdený, ale canonical detail už vracia „no longer open for applications“, preto `rejectedInactive`.

## Source audit — 3. 9. 2026 04:26
- Profesia: `ok`; čerstvý Magistrát podateľňa je relevantný BA hit, zverejnený 2.9.2026; ďalšie výsledky bez bezpečnej promotion delty.
- Priame company careers: `checked`; BA careers preverené; DHL HR Operations canonical detail už neaktívny, preto nevstupuje do feedu.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, coverage bez loginu neúplné, 0 nových verified promotion-grade hitov.
- Worki.sk: `checked`; BA discovery preverené, bez novej promotion-grade delty.
- Brigada.sk: `checked`; BA administratíva/brigády preverené, bez novej promotion-grade delty oproti už evidovaným verification kandidátom.
- Kariera.sk: `checked`; BA administratíva/support preverené, bez novej promotion-grade delty.
- Práca za rohom: `ok`; čerstvý Magistrát podateľňa overený ako BA administratívny hit; mirror/cross-board sa nepočíta ako nezávislý job.
- Pretlak / StartupJobs / WordPress Jobs: `checked`; WordPress/WooCommerce/e-commerce discovery preverené, bez nového hard-gate-pass kandidáta.
- Upwork/freelance: `ok`; WooCommerce/WordPress remote discovery preverené; nové výsledky sú prevažne hard-dev/full-build alebo value/language-risk.
- Reddit/komunity: `limited`; verejná indexácia preverená, 0 vhodných SK-eligible verified hiring hitov.
- Facebook public index: `limited`, **0 verified hits**; žiadny konkrétny verejne overiteľný hiring post, autentizovaný Nexus/local ingestion zostáva backlog.

### Audit počty 04:26
- source families skontrolované: 11
- relevantné kandidáty: 3
- pridané do LIVE: 0
- vyradené pre neaktivitu: 1
- vyradené pre jazyk/skill/value riziko: 2
- vyradené pre lokalitu: 0
- duplicitné/mirror výsledky: minimálne 1 cluster (Magistrát na PZR/Profesia)
- Facebook verified hits: 0

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
- **Promotion-ready ageing gate** — ak kandidát už prešiel hard gate-mi a nový sweep znovu potvrdí aktívny/canonical stav, historický writer blocker ho nesmie držať vo verification queue.
- **Timezone-overlap burden score** — pri remote/freelance ponukách penalizovať povinné US hours alebo široké globálne časové okná aj vtedy, keď je lokalita formálne Worldwide.
- **Client-spend trust calibration** — pri freelance leadoch kombinovať historický spend, počet hires, aktivitu klienta a proposal/interview pomer, aby sa znížil čas strávený na low-probability klientov.
- **Eligibility ambiguity quarantine** — ak ponuka uvádza nejednoznačné „študent / prípadne škola X“ bez jasného prijateľného typu uchádzača, držať ju mimo LIVE do explicitného overenia eligibility.
- **Bulk-work effective-rate estimator** — pri fixed-price freelance úlohách odhadnúť efektívnu hodinovú sadzbu z počtu produktov/obrázkov/recordov a vyradiť objemovo nevýhodné zákazky aj pri tematicky silnom WooCommerce fit-e.
- **Primary-source promotion retry queue** — pri silnom kandidátovi nájdenom na job boarde automaticky evidovať retry na firemný/canonical zdroj a pri úspechu prepnúť source provenance bez vytvorenia duplikátu.
- **Cross-board freshness disagreement detector** — ak rovnaký job na jednom boarde vyzerá „dnešný“ a inde starší alebo neaktívny, nevytvoriť nový LIVE záznam, ale vyžiadať canonical recheck a uložiť dôvod rozdielu.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; 48 LIVE položiek bezpečne zachovaných. Významný Magistrát kandidát nebol zapísaný, pretože dostupný reader vracia veľký JSON truncovane a writer vyžaduje kompletný replacement; FAIL-CLOSED zabránil riziku straty existujúcich položiek.
- `source-audit.json`: v tomto behu **nezapísaný** z rovnakého technického dôvodu — veľký payload je truncovaný a úplný replacement by mohol stratiť verification queue. Pravdivý audit je preto zapísaný v tomto MASTERi, nie predstieraný v JSON audite.
- `job-sources.json`: register revalidovaný; nevznikla štrukturálna zmena zdrojov, preto bez zápisu.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 04:26** s auditom, technickým stavom a dvoma novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.