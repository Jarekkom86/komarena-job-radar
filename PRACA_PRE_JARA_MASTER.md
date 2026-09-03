# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 3. 9. 2026 08:21 CEST

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
- Sweep 08:21 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- **Upwork – Data Entry Specialist for WooCommerce**: čerstvý Worldwide remote hit, WooCommerce produktové dáta, Excel/CSV, SKU/kategórie, AI-generované popisy a príprava importu; tematicky veľmi presný fit, ale iba **35 USD fixed-price**, 20–50 proposals a neznámy počet produktov/časový rozsah. `locationEligibility: remote-ok`; status `verification-low-value-unknown-effort`, nie LIVE promotion.
- **Kariera/Zoznam – Slovenská pošta, brigáda zamestnanec poštovej prepravy Bratislava**: čerstvý BA hit z 2.9.2026, ale nižšia priorita a odmena do 9,30 EUR/h; bez promotion-grade posunu oproti existujúcim driver/logistics možnostiam.

## Source audit — 3. 9. 2026 08:21
- Profesia: `checked`; BA WordPress/support/admin/driver discovery reálne preverené, bez novej promotion-grade delty.
- Priame company careers: `checked`; BA/remote admin/support/e-commerce discovery preverená, bez nového canonical promotion-grade hitu.
- LinkedIn Jobs: `limited`; verejná indexácia preverená; Driver – Pretoria bol explicitne vyradený ako location mismatch, pretože kontrakt je fyzicky v Pretórii napriek Bratislava labelu.
- Worki.sk: `checked`; BA admin/support/driver discovery preverené, bez novej promotion-grade delty.
- Brigada.sk: `checked`; BA administratíva/digitalizácia discovery preverené, bez nového promotion-grade hitu.
- Kariera.sk / Zoznam: `ok`; čerstvá brigáda Slovenskej pošty v Bratislave potvrdená, ale low-priority/value oproti LIVE alternatívam.
- Pretlak / WordPress Jobs: `checked`; WordPress/WooCommerce remote discovery preverené; nájdené prevažne full-build/hard-development roly bez vhodného promotion fitu.
- Upwork/freelance: `ok`; čerstvý **Data Entry Specialist for WooCommerce** je Worldwide remote a veľmi presný scope fit, ale 35 USD fixed-price + neznámy objem práce + 20–50 proposals znamenajú verification/value gate. Ďalšie dnešné WooCommerce hity sú full-build alebo hard-development.
- Reddit/komunity: `limited`; verejná indexácia preverená, bez konkrétneho SK-eligible verified hiring hitu.
- Facebook public index: `limited`, **0 verified hits**; nebol nájdený konkrétny verejne overiteľný hiring post s priamym linkom.
- Služby zamestnanosti: `checked`; verejný vyhľadávač dostupný, bez novej promotion-grade delty v tomto sweepe.

### Audit počty 08:21
- source families skontrolované: **11**
- z toho mimo Profesia: **10**
- relevantné nové/novozachytené kandidáty: **2**
- pridané do LIVE: **0**
- verification/reject kandidáty: **2**
- vyradené pre value/effort/nižšiu prioritu: **2**
- vyradené pre lokalitu: **1** (LinkedIn Pretoria false-location result; nezaradené ako relevantný kandidát)
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
- **Unknown-effort fixed-price gate** — pri fixed-price zákazkách povinne zachytiť počet produktov/položiek/stránok alebo odhad hodín; ak scope chýba, nepovyšovať ani pri silnom tematickom fite, kým sa nedá odhadnúť efektívna hodinová sadzba.
- **Fresh-post low-budget escalation guard** — čerstvosť `<24h` nesmie sama prekryť nízku absolútnu hodnotu zákazky; pri čerstvom hite s nízkym budgetom použiť iba verification a upozorniť iba vtedy, ak existuje jasný upsell/ongoing potenciál alebo mimoriadne nízka konkurencia.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **48 LIVE položiek bezpečne zachovaných**, pretože nevznikla promotion-grade delta. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: úplný aktuálny payload sa dá prečítať cez stránkovaný response resource, ale GitHub contents writer stále vyžaduje kompletný replacement; v tomto rune som ho neprepísal, aby sa pri manuálnej rekonštrukcii nepoškodila 38-položková verification queue. Aktuálny audit 08:21 je pravdivo zachytený v MASTER-i; posledný bezpečný JSON audit ostáva 07:14.
- `job-sources.json`: registry zostáva štrukturálne platný; v tomto rune nevznikla nová source family ani zmena konfigurácie vyžadujúca replacement.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 08:21** s reálnym auditom a 2 novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.