# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 3. 9. 2026 02:15 CEST

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
- `jobs-data.json.updatedAt`: **2026-09-03T02:15:13+02:00** — timestamp vznikol až po reálnej kontrole zdrojov a úspešnom deduplikovanom zápise.
- Predchádzajúci full-replacement blocker bol v tomto behu bezpečne obídený cez line-based read kompletného JSON payloadu; feed je znovu v stave `fresh`.
- Do LIVE boli po čerstvom overení promovované dve už evidované promotion-ready položky:
  - **Magistrát hlavného mesta SR Bratislavy – Odborný/á referent/tka podateľne**: Bratislava, 1 300 €/mes., SŠ s maturitou, cudzí jazyk iba výhodou, digitalizácia/evidencia zásielok, databázy, reporty, IS NORIS.
  - **INDEX NOSLUŠ – Výpomoc v predajni / Asistent pre mobilnú aplikáciu**: Bratislava, 7 €/h + príplatky, dohoda, projekt 3.–14.9.2026, zmeny 7:00–13:30 alebo 13:30–20:00.
- **Neuroimunologický ústav SAV – Asistent/ka riaditeľa** zostáva vo verification ako `promotion-ready-awaiting-fresh-canonical`; pred promotion treba nový čerstvý canonical detail.
- **NAY Elektrošpecialista/tka** zostáva vo verification, pretože čerstvý canonical výsledok potvrdil Tuhovskú, nie pôvodný Danubia variant.
- Nový Upwork lead **WooCommerce Developer for Website Improvements** je `remote-ok`, 1–3 mesiace a obsahovo relevantný, ale ide o `Expert` scope a pri kontrole mal 15–20 proposals a 4 interviewing; neprešiel do LIVE.

## Source audit — 3. 9. 2026 02:15
- Profesia: `checked`, BA WordPress/e-shop/admin/IT support/driver discovery preverené; Magistrát promoted do LIVE, bez ďalšej promotion-grade delty.
- Priame company careers: `checked`, INDEX NOSLUŠ canonical detail overený a promoted do LIVE.
- LinkedIn Jobs: `limited`, verejná indexácia preverená; bez nového presného SK/remote promotion-grade hitu.
- Worki.sk: `checked`, známe BA hity bez novej delty.
- Brigada.sk: `checked`, INDEX mirror deduplikovaný voči canonical firemnému detailu.
- Kariera.sk: `checked`, bez novej promotion-grade delty; SAV čaká na fresh canonical reconfirmation.
- Práca za rohom: `ok`, Magistrát referent podateľne znovu potvrdený ako aktívny a čerstvý; INDEX mirror deduplikovaný.
- Pretlak / StartupJobs / WordPress Jobs: `checked`, bez nového hard-gate-pass kandidáta.
- Upwork/freelance: `ok`, nové WP/WooCommerce výsledky preverené; bez nového LIVE kandidáta po scope/value/competition gateoch.
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
- Seniority evidence gap score.
- Competition-adjusted application ROI.
- Autentizovaný Facebook ingestion cez Nexus/local agent.
- Source-success analytics, publishedAt/<24h priority, commute/distance, deadline alerts, company contact enrichment, duplicate cluster report, reply probability, GitHub Actions polling a cross-device sync.
- **Promotion-ready ageing gate** — ak kandidát už prešiel hard gate-mi a nový sweep znovu potvrdí aktívny/canonical stav, historický writer blocker ho nesmie držať vo verification queue.

## Stav ochrany / zápisu
- `jobs-data.json`: **úspešne aktualizovaný** po reálnej kontrole; 48 LIVE položiek, deduplikované promotion Magistrát + INDEX NOSLUŠ.
- `source-audit.json`: **úspešne aktualizovaný**; freshness `fresh`, 11 source families preverených, verification queue zachovaná bez dvoch promovovaných položiek.
- `job-sources.json`: register bol revalidovaný; nevznikla štrukturálna zmena.
- `PRACA_PRE_JARA_MASTER.md`: **synchronizovaný** so stavom 02:15.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.