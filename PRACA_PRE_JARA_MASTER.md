# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 3. 9. 2026 05:25 CEST

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
- Posledný sourcing audit: **12 source families**, z toho **11 mimo Profesia**.
- LIVE mix: **Profesia 24/48 = 50,0 %**, mimo Profesia **24/48 = 50,0 %**.
- Facebook verejná indexácia: `limited`, **0 verified hits**; žiadne fiktívne pokrytie.
- `jobs-data.json.updatedAt`: **2026-09-03T02:15:13+02:00** — posledná reálna zmena LIVE feedu.
- Sweep 05:25 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- **Metrohm Research Slovakia – IT Support Specialist**, Einsteinova 33, Petržalka, **1 800 EUR/mes.**, nástup 1.10.2026, ponuka do 11.10.2026. Obsahovo relevantné: používateľská technická podpora, incidenty, troubleshooting, prístupy a diagnostické nástroje. `locationEligibility: ba-area`. Nepovýšené do LIVE pre kumulatívny qualification stack: VŠ I. stupňa, min. 1 rok praxe a angličtina B1–B2.
- **StartSeason – odborný administratívny asistent**, Bratislava-Rača, 1 164 EUR/mes., bol vyradený pre VŠ I. stupňa + povinnú ruštinu B1–B2; lokalita sama o sebe prechádza.
- Čerstvé Upwork WooCommerce výsledky sú prevažne custom/full-build scope; bez nového bezpečného non-hard-dev promotion kandidáta.

## Source audit — 3. 9. 2026 05:25
- Profesia: `checked`; BA discovery preverené, bez novej promotion-grade delty.
- Priame company careers: `checked`; BA careers preverené, bez novej canonical promotion-grade delty.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, coverage bez loginu neúplné, 0 nových verified promotion-grade hitov.
- Worki.sk: `checked`; BA discovery preverené, bez novej promotion-grade delty.
- Brigada.sk: `checked`; BA administratíva/brigády preverené, bez novej promotion-grade delty.
- Kariera.sk: `checked`; BA administratíva/support preverené, bez novej promotion-grade delty.
- Práca za rohom: `ok`; verejne dostupný BA skladový feed obsahuje viac aktuálnych miest, väčšina je VZV/fyzicky orientovaná alebo slabšia než existujúce LIVE alternatívy.
- Služby zamestnanosti: `ok`; Metrohm IT Support pridaný do verification; StartSeason vyradený pre jazyk + kvalifikáciu.
- Pretlak / StartupJobs / WordPress Jobs: `checked`; WordPress/WooCommerce/e-commerce discovery preverené, bez nového hard-gate-pass kandidáta.
- Upwork/freelance: `ok`; WooCommerce/WordPress remote discovery preverené, nové výsledky prevažne hard-dev/full-build, známe alebo value-risk.
- Reddit/komunity: `limited`; verejná indexácia preverená, 0 vhodných SK-eligible verified hiring hitov.
- Facebook public index: `limited`, **0 verified hits**; žiadny konkrétny verejne overiteľný hiring post, autentizovaný Nexus/local ingestion zostáva backlog.

### Audit počty 05:25
- source families skontrolované: 12
- relevantné nové kandidáty: 2 na štátnom portáli + viac low-priority skladových výsledkov
- pridané do LIVE: 0
- pridané do verification: 1 (Metrohm IT Support)
- vyradené pre jazyk/kvalifikáciu: minimálne 2
- vyradené pre lokalitu: 0
- Upwork nové výsledky: 4 preverované, bez promotion-grade delty
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
- **Government-source vacancy expiry reconciler** — pri `Služby zamestnanosti` ukladať dátum ukončenia ponuky a pri každom rechecku rozlišovať aktívny štátny záznam od starého indexovaného výsledku; znižuje false-positive „čerstvé“ joby.
- **Qualification-stack penalty** — kumulovať VŠ, minimálnu prax, jazyk a špecializované skill požiadavky do jedného risk skóre; technicky lákavá rola sa tak nepreceňuje iba podľa title/mzdy.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **48 LIVE položiek bezpečne zachovaných**, pretože nevznikla promotion-grade delta. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: **aktualizovaný na 05:25**; zachovaná existujúca verification queue a pridaný Metrohm kandidát. Audit commit: `7b1fe1ca5a873c3cd6fa95591a02d294fde7f240`.
- `job-sources.json`: **aktualizovaný/revalidovaný na 05:25**, vrátane čerstvej poznámky k Službám zamestnanosti a pravdivého Facebook 0-hit stavu. Commit: `bbd364e07dc18a15638a585fa354092cb72ac98f`.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 05:25** s auditom a dvoma novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.