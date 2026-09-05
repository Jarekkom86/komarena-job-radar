# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 5. 9. 2026 02:13 CEST

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
- Čerstvý sweep nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.

### Čerstvé zistenia 02:12–02:13
- **Upwork – AI-Native Virtual Assistant pre automation agency**: silný AI/automation/admin fit bez požiadavky na titul či roky praxe, ale povinná dostupnosť **8:00–20:00 Pacific Time pondelok–sobota** a iba **1 000 USD/mes.** vytvárajú neprijateľný časovo-odmeňovací profil. Ostáva iba vo verification queue, nie LIVE.
- **Upwork – WooCommerce Assistant**: verejný index ho zobrazil ako relevantný WooCommerce management lead, ale canonical detail už hlási **job no longer available**. Správne vyradené ako neaktívne; search-index hit sa nepočíta ako živá ponuka.
- **Upwork – E-commerce VA (WooCommerce, Subscriptions, Customer Service, Xero)**: Worldwide remote, ale je už evidovaný vo verification queue; bez duplicate promotion.
- **Profesia**: nový indexovaný e-shop výsledok bol mimo BA/okolia (Nitra), preto hard `reject-distance`.
- **LinkedIn**: verejná indexácia nepriniesla nový bezpečný BA/remote promotion-grade hit; coverage bez loginu ostáva limited.
- **Reddit/WordPress/WooCommerce komunity**: čerstvé nálezy boli `FOR HIRE` self-promo, nie hiring dopyty pre kandidáta.
- **Facebook public index**: preverený; **0 verified hits / limited**.

## Source audit — 5. 9. 2026 02:12–02:13
- posledný kompletný pravdivý audit v `source-audit.json`: **12 source families**, z toho **11 mimo Profesia**; následný core recheck preveril 10 rodín bez novej LIVE delty.
- Profesia: `checked`; bez novej promotion-grade BA/remote delty, mimo-lokalitný e-shop hit vyradený.
- Priame company careers: `checked`; existujúce silné LIVE company-source roly zostávajú aktívne bez významnej zmeny.
- LinkedIn Jobs: `limited`; prevažne staré/neaktívne alebo jazykovo nevhodné support roly, bez novej promotion.
- Worki.sk: `checked`; bez novej vhodnej delty.
- Brigada.sk: `checked`; bez novej vhodnej priority delty.
- Práca za rohom: `checked`; bez novej promotion-grade delty.
- Pretlak/tech-creative: `checked`; Alesa Office manager/asistent je už evidovaný verification kandidát, bez novej unique delty.
- Kariera/Zoznam: `checked`; bez novej promotion-grade delty nad existujúcu queue.
- StartupJobs: `checked`; nové AI výsledky boli senior/hard-tech alebo language mismatch, Medevio BDR je už v queue.
- Upwork/freelance: `ok`; nový AI-native VA pridaný iba do verification, WooCommerce Assistant canonical neaktívny, ďalšie výsledky duplicate/hard-dev/low-value.
- Reddit/komunity: `limited`; 0 verified hiring hits z čerstvého core rechecku.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 02:12–02:13
- pridané do LIVE: **0**
- LIVE feed delta: **0**; fail-closed zachovanie 49 položiek
- Facebook verified hits: **0**
- verification queue: **58**, fail-closed zachovaná; posledný kompletný audit pridal 1 nový verification kandidát (AI-Native VA), nie LIVE.
- `source-audit.json`: čerstvý kompletný audit 02:12 so zachovaním verification queue; novší stale-SHA overwrite bol odmietnutý a nebol použitý na prepis novšieho stavu.
- `job-sources.json`: aktualizovaný na 02:13 podľa čerstvého core rechecku.
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
- Workload sustainability gate.
- Effective hourly compensation normalizer.
- **Concurrent-run optimistic-lock merge guard** — pred každým zápisom audit/source JSON overiť, či sa SHA od načítania nezmenilo; pri `409` automaticky znovu načítať novší súbor, zachovať novšie queue položky a merge-nuť iba čerstvú deltu namiesto riskantného overwrite. Rieši reálne riziko prekrývajúcich sa hodinových behov a chráni verification queue pred stratou.
- **Per-family minimum query-diversity ledger** — pri každej source family evidovať počet a typ reálne vykonaných query variantov (napr. exact-role, adjacent-role, location/remote variant) a nepovažovať rodinu za kvalitne pokrytú, kým nemá minimálny coverage budget. Znižuje falošné `checked` pri jedinom úzkom dotaze a zvyšuje discovery recall bez zásahu do UI.
