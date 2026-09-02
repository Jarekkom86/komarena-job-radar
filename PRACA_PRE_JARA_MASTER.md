# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 3. 9. 2026 01:37 CEST

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
- Autoritatívny feed má aktuálne **46 LIVE položiek**.
- Posledný sourcing audit: **11 source families**, z toho **10 mimo Profesia**.
- LIVE mix: **Profesia 23/46 = 50,0 %**, mimo Profesia **23/46 = 50,0 %**.
- Facebook verejná indexácia: `limited`, **0 verified hits**; žiadne fiktívne pokrytie.
- `jobs-data.json` zostáva fail-closed na poslednom validnom stave, pretože dostupný GitHub writer vyžaduje kompletný replacement veľkého súboru a read vrstva vracia payload truncovane.
- Najsilnejší promotion-ready lead na zápis ostáva **Magistrát hlavného mesta SR Bratislavy – Odborný/á referent/tka podateľne**: Bratislava, 1 300 €/mes., SŠ s maturitou, bez povinnej cudzej reči, digitalizácia/evidencia zásielok, databázy, reporty, IS NORIS.
- **INDEX NOSLUŠ – Asistent pre mobilnú aplikáciu** zostáva krátkodobý promotion-ready BA kandidát pre 3.–14.9.2026.
- Nový Upwork lead **WordPress/WooCommerce Developer for Ongoing Support** je `remote-ok`, 20–35 USD/h, 30+ h/týždeň, 6+ mesiacov a obsahovo presne smeruje na opravy existujúceho WooCommerce webu, checkout, produktové stránky, CRM a ongoing support. Nie je však promotion-ready: klient explicitne žiada senior hands-on developera, 5–10+ rokov profesionálnej WP/WooCommerce praxe, silný front-end aj back-end, troubleshooting a portfólio; pri kontrole mal 50+ proposals a 0 interviewing.

## Source audit — 3. 9. 2026 01:37
- Profesia: `checked`, BA WordPress/e-shop/admin/IT support/driver discovery preverené; bez novej promotion-grade delty.
- Priame company careers: `checked`, bez nového vhodného canonical hitu.
- LinkedIn Jobs: `limited`, verejná indexácia preverená; bez nového presného SK/remote promotion-grade hitu.
- Worki.sk: `checked`, známe BA hity bez novej delty.
- Brigada.sk: `checked`, 0 nových promotion-grade detailov.
- Kariera.sk: `checked`, BA administratíva/support preverené; bez novej promotion-grade delty.
- Práca za rohom: `ok`, Magistrát referent podateľne zostáva čerstvý promotion-ready kandidát; ďalšie dnešné office/admin listingy neprešli rankingom alebo už boli známe.
- Pretlak / StartupJobs / WordPress Jobs: `checked`, bez nového hard-gate-pass kandidáta.
- Upwork/freelance: `ok`, nový WordPress/WooCommerce ongoing-support lead overený; `remote-ok`, ale vyradený z LIVE pre seniority/portfolio hard-skill gap a vysokú konkurenciu.
- Reddit/komunity: `limited`, 0 vhodných SK-eligible verified hitov.
- Facebook public index: `limited`, **0 verified hits**; autentizovaný Nexus/local ingestion zostáva backlog.

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
- **Seniority evidence gap score** — pri freelance/WP ponukách explicitne porovnať požadované roky profesionálnej praxe, seniority a portfolio dôkazy s tým, čo vieme doložiť; vysoký gap držať mimo LIVE aj pri perfektnom tematickom fite.
- **Competition-adjusted application ROI** — kombinovať počet proposals/interviewing s hodnotou zákazky, fitom a časom potrebným na kvalitnú reakciu; pri 50+ proposals bez interview znižovať prioritu, pokiaľ nie je fit alebo klientský signál výnimočný.
- Autentizovaný Facebook ingestion cez Nexus/local agent.
- Source-success analytics, publishedAt/<24h priority, commute/distance, deadline alerts, company contact enrichment, duplicate cluster report, reply probability, GitHub Actions polling a cross-device sync.

## Stav ochrany / zápisu
- `jobs-data.json`: obsahovo nezmenený; feed zostal fail-closed na 46 LIVE položkách.
- `source-audit.json`: audit bol reálne vykonaný, ale bezpečný full-file rewrite v tomto behu nebol možný, pretože read payload je truncovaný a writer vyžaduje kompletný replacement; starý validný audit zostal zachovaný namiesto rizika straty verification queue.
- `job-sources.json`: register bol revalidovaný; nevznikla štrukturálna zmena a nebol vykonaný rizikový full-file rewrite.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný** o audit 01:37, nový Upwork verification lead a dve nové backlog zlepšenia.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.