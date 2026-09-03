# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 3. 9. 2026 06:33 CEST

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
- LIVE mix: **Profesia 24/48 = 50,0 %**, mimo Profesia **24/48 = 50,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-03T02:15:13+02:00** — posledná reálna zmena LIVE feedu.
- Sweep 06:33 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- **Upwork – E-commerce Virtual Assistant – WooCommerce, Subscriptions, Customer Service, Xero**: Worldwide remote, 10–15 USD/h, <30 h/týždeň, 1–3 mesiace, contract-to-hire. Obsahovo veľmi dobrý fit na WooCommerce admin, objednávky, subscription support, e-mail support a troubleshooting. Nepovýšené do LIVE pre explicitné `Good written English`, povinnú skúsenosť s WooCommerce Subscriptions a kombináciu Meta Ads + Xero; klient mal 15–20 proposals, 1 hire, 0 interviewing a ponuku naposledy pozrel pred 3 dňami. `locationEligibility: remote-ok`.
- **Turner & Townsend – Business Operations Assistant**: administratívne obsahovo relevantné, ale explicitne vyžaduje 3–4 roky podobnej praxe a fluent Slovak + English, preto vyradené jazykovo/kvalifikačne.

## Source audit — 3. 9. 2026 06:33
- Profesia: `checked`; BA WordPress/support/admin/driver discovery preverené, bez novej promotion-grade delty.
- Priame company careers: `ok`; Turner & Townsend Business Operations Assistant bol konkrétne preverený, ale vyradený pre fluent English + 3–4 roky relevantnej praxe.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez nového promotion-grade BA/remote hitu; jeden nesprávne lokalizovaný Driver Pretoria výsledok bol vyradený ako location mismatch.
- Worki.sk: `checked`; BA discovery preverené, bez novej promotion-grade delty.
- Brigada.sk: `checked`; BA administratíva/brigády preverené, bez novej promotion-grade delty.
- Kariera.sk / Zoznam: `checked`; BA administratíva/support preverené, bez novej promotion-grade delty.
- Pretlak: `ok`; aktuálny marketingový výsledok bol preverený, ale nie je lepší fit než existujúce LIVE smerovanie.
- Upwork/freelance: `ok`; nový WooCommerce VA lead je verification-grade, nie LIVE, pre written-English a tool-stack risk.
- Služby zamestnanosti: `checked`; BA administratíva/IT support discovery preverené, bez novej promotion-grade delty.
- Reddit/komunity: `limited`; verejná indexácia preverená, 0 vhodných SK-eligible verified hiring hitov.
- Facebook public index: `limited`, **0 verified hits**; bez konkrétneho verejne overiteľného hiring postu.
- WordPress/tech discovery: `checked`; aktuálne verejné WordPress/WooCommerce výsledky sú prevažne hard-development/full-build alebo horší fit.

### Audit počty 06:33
- source families skontrolované: **12**
- relevantné nové kandidáty: **2** (Upwork WooCommerce VA; Turner & Townsend Business Operations Assistant)
- pridané do LIVE: **0**
- promotion-grade nové položky: **0**
- verification-grade nové položky: **1** (Upwork WooCommerce VA)
- vyradené pre jazyk/kvalifikáciu: **1** (Turner & Townsend)
- vyradené pre lokalitu/mismatch: **1** (LinkedIn Pretoria driver mislabeled Bratislava)
- Facebook verified hits: **0**

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
- **Government-source vacancy expiry reconciler** — pri `Služby zamestnanosti` ukladať dátum ukončenia ponuky a pri každom rechecku rozlišovať aktívny štátny záznam od starého indexovaného výsledku; znižuje false-positive „čerstvé“ joby.
- **Qualification-stack penalty** — kumulovať VŠ, minimálnu prax, jazyk a špecializované skill požiadavky do jedného risk skóre; technicky lákavá rola sa tak nepreceňuje iba podľa title/mzdy.
- **Freelance mandatory-tool gap matrix** — pri e-commerce zákazkách oddeliť core WooCommerce/WordPress fit od povinných vedľajších nástrojov ako Subscriptions, Xero, Meta Ads či Klaviyo; zamedzí preceňovaniu tematicky atraktívnych leadov s priveľkým skill gapom.
- **Client-view staleness penalty** — pri freelance ponukách znižovať application ROI, ak klient ponuku viac dní neotvoril, aj keď je listing stále formálne aktívny; šetrí čas na pravdepodobne opustených zákazkách.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **48 LIVE položiek bezpečne zachovaných**, pretože nevznikla promotion-grade delta. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: aktuálny bezpečný replacement je v tomto behu blokovaný tým, že konektor vracia veľký súbor truncovane; existujúca verification queue sa nesmie stratiť. FAIL-CLOSED: súbor neprepísaný.
- `job-sources.json`: revalidácia prebehla; zapisovať iba ak je možné zachovať celý registry payload.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 06:33** s auditom a dvoma novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.