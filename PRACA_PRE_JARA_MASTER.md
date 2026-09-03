# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 3. 9. 2026 08:12 CEST

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
- Sweep 08:12 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- **FEVA Slovakia SK – Obchodný referent / Fakturant**: Bratislava, 1 500–1 700 EUR/mes., ASAP, faktúry, objednávky, príjem tovaru, skladový systém, e-mail/telefón a vodičák B. Obsahovo dobrý admin/operations fit, ale explicitná AJ B1, požadovaná obdobná prax a aktívne oslovovanie nových odberateľov znižujú fit; ponechané vo verification, nie LIVE promotion.
- **Ministerstvo vnútra SR – Odborný referent / odborná referentka**: Pribinova, Bratislava, 1 100 EUR/mes., ihneď, SŠ s maturitou, slovenčina; evidencia majetku, požiadavky, SAP a čiarové kódy. Kvalifikačne dostupné, ale odmena je pod prioritným rozsahom a rola je skôr fallback admin než promotion-grade hit.
- **Nemocnica BORY – Technický dispečer**: obsahovo silný technický/monitoring fit (MaR, bezpečnostné a technologické systémy, ticketing), 1 700 EUR/mes., SŠ s maturitou, bez explicitnej AJ požiadavky; canonical Profesia však pri kontrole uvádza ukončené zverejnenie ponuky, preto `reject-inactive`.
- **PRO Business Solutions – IT špecialista pre vývoj podnikového software, integrácie a AI**: Bratislava, od 5 000 EUR, ale min. 5 rokov vývoja/integrácií IS, Laravel/PHP, PostgreSQL, DevOps/CI/CD a AI integrácie; hard qualification mismatch, nepovýšené.
- **Upwork discovery**: verejný Data Entry/WooCommerce/Product Listing feed bol reálne preverený. Nové výsledky sú buď low-value fixed-price (napr. WooCommerce data entry 35 USD / Shopify upload 5 USD), hard-build dev scope alebo bez dostatočného konkrétneho klientského/rate payloadu; bez promotion-grade ingestu.

## Source audit — 3. 9. 2026 08:12
- Profesia: `ok`; BA najnovšie, admin, IT/support, driver/logistics a technické výsledky reálne preverené. FEVA + MV SR pridané do verification/reject vrstvy; Bory technický dispečer canonical kontrolou označený ako ukončený.
- Priame company careers: `checked`; PRO Business Solutions priamy detail overený, ale hard-dev/experience gate.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez nového vhodného BA/remote hitu; coverage bez loginu zostáva limited.
- Worki.sk: `checked`; BA admin/support/driver discovery preverené, bez novej promotion-grade delty.
- Brigada.sk: `checked`; BA brigády/admin/digitalizácia discovery preverené, bez konkrétneho nového promotion-grade hitu.
- Kariera.sk / Zoznam: `checked`; discovery preverené, bez novej čerstvej vhodnej delty.
- Pretlak / tech-creative: `checked`; WordPress/e-commerce/remote discovery preverené, bez nového hard-gate-pass kandidáta.
- Upwork/freelance: `ok`; verejne indexované Data Entry, WooCommerce, WordPress E-commerce a Product Listing feedy preverené; nové hity sú low-value, hard-dev alebo bez dostatočného promotion payloadu.
- Reddit/komunity: `limited`; verejná indexácia preverená, bez konkrétneho SK-eligible verified hiring hitu.
- Facebook public index: `limited`, **0 verified hits**; nebol nájdený konkrétny verejne overiteľný hiring post s priamym linkom.

### Audit počty 08:12
- source families skontrolované: **10**
- z toho mimo Profesia: **9**
- relevantné nové/novozachytené kandidáty: **4**
- pridané do LIVE: **0**
- verification/reject kandidáty: **4**
- vyradené pre jazyk/kvalifikáciu/prax/value: **3**
- vyradené ako inactive: **1**
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
- **Audit payload sharding / append-only run ledger** — oddeliť veľkú historickú `verificationQueue` od malého per-run source auditu tak, aby hodinový writer vedel atomicky zapísať pravdivý audit bez nutnosti úplného replacementu veľkého JSON payloadu; zároveň zachovať spätnú kompatibilitu pre renderer cez build/merge krok.
- **Language-risk reason normalization** — ukladať oddelene `requiredEnglishLevel`, `interactionMode` (written/phone/client-facing/internal) a `languageGateReason`; odstráni nejednotné rozhodovanie medzi B2/C1 titulmi a umožní presnejší ranking bez ručného čítania celého popisu.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **48 LIVE položiek bezpečne zachovaných**, pretože nevznikla promotion-grade delta. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: posledný bezpečne uložený audit zostáva z **07:14**. Aktuálny run 08:12 ho nedokáže bezpečne nahradiť cez dostupný GitHub contents writer, pretože reader vracia veľký payload truncovane a replacement by mohol stratiť časť existujúcej verification queue. FAIL-CLOSED: súbor v tomto rune neprepísaný; audit 08:12 je pravdivo zachytený v tomto MASTER-i.
- `job-sources.json`: registry ostáva štrukturálne platný; bez novej source-family konfigurácie nebol nutný replacement.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 08:12** s reálnym auditom.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.