# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 4. 9. 2026 09:27 CEST

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
- Autoritatívny feed má aktuálne **48 LIVE položiek**.
- LIVE mix: **Profesia 24/48 = 50,0 %**, mimo Profesia **24/48 = 50,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-03T02:15:13+02:00** — posledná reálna zmena LIVE feedu.
- Sweep 09:27 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- Silný resurfaced výsledok `Back Office & Operations Coordinator – e-commerce | Remote` (IZY VAPE CE) bol overený na Práca za rohom aj Profesia: prevažne home office zo Slovenska, e-shop/logistika/reklamácie/AI, 1 600–2 000 EUR. Dedupe kontrola však potvrdila, že položka `izy-vape-backoffice-ops-5348749` už je v LIVE feed-e; nový mirror sa nepridáva.
- Upwork: nový WooCommerce product-page fix je Worldwide remote, 60 USD fixed-price, 10–15 proposals, ale vyžaduje proven WooCommerce + HTML/CSS a zásah do live shopu; pri rozpočte a scope ostáva mimo LIVE. WooCommerce Data Entry za 35 USD je resurfaced low-value verification lead.
- Služby zamestnanosti: aktuálne indexované BA vodičské hity boli taxi alebo nákladné vozidlo; nepasujú na vodič B/kuriér bez tachografu.
- StartupJobs: čerstvý tech/business výsledok 2Bminer je onsite/hybrid Praha, teda `reject-distance` pre BA profil.
- Reddit priniesol iba čerstvé `FOR HIRE` self-promo príspevky, nie nový hiring dopyt.
- Profesia, priame company careers, LinkedIn, Worki, Brigada.sk, Práca za rohom, Kariera.sk, Služby zamestnanosti, Pretlak/WordPress Jobs, StartupJobs, Upwork, Reddit a verejná Facebook indexácia boli reálne preverené.
- Facebook: **0 verified hits / limited**; bez konkrétneho verejne overiteľného postu sa nič nevytvára.

## Source audit — 4. 9. 2026 09:27
- Profesia: `checked`; resurfaced IZY VAPE je už LIVE, 0 nový ingest.
- Priame company careers: `checked`; bez novej promotion-grade delty.
- LinkedIn Jobs: `limited`; verejná indexácia bez novej bezpečnej LIVE delty.
- Worki.sk: `checked`; bez novej promotion-grade delty.
- Brigada.sk: `checked`; bez novej LIVE delty.
- Práca za rohom: `ok`; 1 silný e-commerce/remote hit, ale duplicate/mirror už existujúcej LIVE Profesia položky.
- Kariera.sk: `checked`; bez novej unique promotion-grade delty.
- Služby zamestnanosti: `checked`; vodičské výsledky taxi/nákladné vozidlo, vyradené pre typ role/credential mismatch.
- Pretlak / WordPress Jobs: `checked`; bez novej unique promotion-grade delty.
- StartupJobs: `checked`; čerstvé výsledky mimo lokalitného gate alebo mimo cieľového profilu.
- Upwork/freelance: `ok`; product-page WooCommerce fix 60 USD / 10–15 proposals a Data Entry WooCommerce 35 USD; 0 LIVE promotion.
- Reddit/komunity: `limited`; iba FOR HIRE self-promo, bez nového hiring dopytu.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 09:27
- source families reálne skontrolované: **13**
- z toho mimo Profesia: **12**
- relevantné/semirelevantné kandidáty: **6**
- pridané do LIVE: **0**
- nové unique verification položky: **0**
- vyradené/pozdržané: 1 duplicate/mirror IZY VAPE; 2 Upwork low-value/skill-burden; 2 government driver mismatch; 1 StartupJobs reject-distance
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
- Hiring-intent classifier for communities.
- Freshness evidence confidence gate.
- Existing-site maintenance preference boost.
- Source-result semantic locality validator.
- Source-family query coverage heatmap.
- Verification queue recheck budget allocator.
- Search-result location contradiction quarantine.
- Freelance scope-to-budget unit estimator.
- Client hiring-volume anomaly detector.
- Microtask detail-insufficiency quarantine.
- Required-proof inventory matcher.
- Freelance client-response velocity signal.
- Shift-language compound-risk gate.
- Freelance budget-scope contradiction detector.
- Verification evidence age bands.
- Source-family no-delta rotation planner.
- Student-only contract eligibility gate.
- Same-day shift expiration gate.
- Search-family negative-result confidence.
- Driver-role taxonomy hard gate.
- Language-index false-positive verifier.
- Role-title vs duty mismatch detector.
- Remote-proof extractor for nationwide gigs.
- Micro-gig contactability score.
- Salary/unit anomaly detector.
- Original-publish vs refreshed-date normalizer.
- Known-lead resurfacing suppressor.
- Freelance hard-dev/value compound gate.
- Long-term micro-budget contradiction gate.
- Search-crawl freshness verifier.
- Canonical freshness resolver pre resurfaced Profesia výsledky.
- Inactive canonical suppressor.
- Primary-source recency override.
- Freelance duplicate-scope cluster suppressor.
- Unspecified-language-level verifier.
- Admin-role hidden-physical-duty detector.
- Verified-zero reason taxonomy.
- Source-status hysteresis.
- Remote country-acceptance verifier.
- Requirement-burden compound score.
- Verification queue evidence completeness score.
- Freelance micro-budget auto-quarantine threshold.
- Seasonal start-distance penalty.
- Seniority-scope mismatch classifier.
- Canonical deactivation tombstone ledger.
- Verification family anti-starvation quota.
- **Mirror-to-canonical live membership check** — pred každým promotion pokusom overiť nielen URL/title+company, ale aj existujúci LIVE záznam z kvalitnejšieho zdroja; zabráni opakovanému spracovaniu silných mirrorov ako IZY VAPE cez Práca za rohom vs. Profesia.
- **Role-family credential prefilter for government feeds** — ešte pred detailným rankingom mapovať ISCO/typ vodiča (taxi, nákladné, autobus, kuriér B) na používateľské credential gates, aby Služby zamestnanosti neplytvali recheck budgetom na C/C+E/taxi roly.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **48 LIVE položiek bezpečne zachovaných**, pretože nevznikla unique promotion-grade delta. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: posledný bezpečne zapísaný audit zostáva **08:55**; nový 09:27 sweep nebol prepísaný, pretože GitHub contents writer vyžaduje kompletný replacement a aktuálny reader vracia veľký verificationQueue payload truncovane. FAIL-CLOSED zabránil riziku poškodenia 49-položkovej queue.
- `job-sources.json`: **aktualizovaný na 09:27** s pravdivými source notes a coverage.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 09:27** s reálnym auditom a 2 novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.