# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 3. 9. 2026 07:19 CEST

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
- Sweep 07:19 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- **Lugera & Maklér – IT Administrátor**: Bratislava, 2 000 EUR/mes., používateľská podpora, LAN/WiFi, účty, zariadenia, SQL a interné aplikácie. Lokalita prechádza (`ba-area`), ale explicitná AJ B2 a min. 2 roky podobnej praxe sú výrazný language/experience risk; nepovýšené do LIVE.
- **Orot Bratislava – Manager of logistics**: Ružinov, 1 300 EUR/mes., administratívna a technická podpora import/export procesov monitorovacích zariadení, interné systémy, kuriéri, reporty; absolvent-friendly. Obsahovo zaujímavý IoT/logistika prienik, ale explicitná AJ B2/C1 až C1 je hard language mismatch; nepovýšené.
- **Upwork WooCommerce/WordPress discovery**: verejný feed prináša čerstvé remote výsledky, ale aktuálne hity sú prevažne full-build/hard-development alebo všeobecné VA listingy bez dostatočne kvalitného konkrétneho payloadu; žiadny nový LIVE ingest.

## Source audit — 3. 9. 2026 07:19
- Profesia: `ok`; BA support/admin/IoT/logistics discovery reálne preverené. 2 relevantné kandidáty (Lugera IT Administrátor, Orot Manager of logistics), oba vyradené z LIVE pre jazyk/experience gate.
- Priame company careers: `checked`; Wolt/Schneider a ďalšie BA direct-career výsledky boli reálne preverené; bez novej promotion-grade delty. Schneider detail bol verejne 403/limited, preto sa nepočíta ako overený hit.
- LinkedIn Jobs: `limited`; verejná indexácia reálne preverená, bez nového vhodného BA/remote hitu; coverage bez loginu zostáva limited.
- Worki.sk: `checked`; BA administratíva/support discovery preverené, bez novej promotion-grade delty; časť indexovaných detailov je stará.
- Brigada.sk: `checked`; BA brigády/admin discovery preverené, bez konkrétneho nového promotion-grade hitu.
- Kariera.sk / Zoznam: `checked`; discovery preverené, nájdený starý Manpower výsledok nebol aktívna nová delta.
- Pretlak / tech-creative: `checked`; WordPress/e-commerce/remote discovery preverené, bez nového hard-gate-pass kandidáta.
- Upwork/freelance: `ok`; verejne indexované WooCommerce/WordPress/Data Entry/VA feedy preverené. Čerstvé hity sú buď hard-dev/full-build, low-information alebo mimo hodnotového/ranking gate; bez LIVE ingestu.
- Reddit/komunity: `limited`; verejná indexácia preverená, bez konkrétneho SK-eligible verified hiring hitu.
- Facebook public index: `limited`, **0 verified hits**; nebol nájdený konkrétny verejne overiteľný hiring post s priamym linkom.

### Audit počty 07:19
- source families skontrolované: **10**
- z toho mimo Profesia: **9**
- relevantné nové kandidáty: **2**
- pridané do LIVE: **0**
- verification/reject kandidáty: **2**
- vyradené pre jazyk/kvalifikáciu/prax: **2**
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
- `source-audit.json`: posledný uložený audit je z **07:14**. Aktuálny run 07:19 ho nedokáže bezpečne nahradiť cez dostupný GitHub contents writer, pretože reader vracia veľký payload truncovane a replacement by mohol stratiť časť existujúcej verification queue. FAIL-CLOSED: súbor v tomto rune neprepísaný; táto technická medzera je explicitne evidovaná a rieši ju nový backlog `Audit payload sharding / append-only run ledger`.
- `job-sources.json`: registry ostáva štrukturálne platný; bez novej source-family konfigurácie nebol nutný replacement. Posledný bezpečný zápis je 06:33.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 07:19** s reálnym auditom a dvoma novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.