# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 4. 9. 2026 12:10 CEST

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
- Sweep 12:10 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- **Významný nový verification lead:** Upwork `E-commerce Virtual Assistant – WooCommerce, Subscriptions, Customer Service, Xero`. Worldwide remote, 10–15 USD/h, <30 h/týždeň, 1–3 mesiace, contract-to-hire, 15–20 proposals. Scope je veľmi blízko prioritnému smeru: WooCommerce administrácia, zákaznícky servis, objednávky/subscriptions, e-mail support, troubleshooting a všeobecná e-commerce administratíva. Nepovýšené do LIVE kvôli explicitnej požiadavke na good written English a nástrojovým požiadavkám WooCommerce Subscriptions + Meta Ads Manager + basic Xero.
- LinkedIn: Wolt Support Associate Bratislava je lokálne relevantný customer-care hit, ale dostupný detail vyžaduje minimálne B2 English, preto výrazný mismatch a bez LIVE promotion.
- Worki: aktualizovaný BA VZV sklad je lokálne validný, ale fyzická záťaž/VZV profil je slabší než existujúce priority; nejde o novú promotion-grade deltu.
- Brigada.sk: verejný BA feed preveril distribúciu a skladové brigády; bez novej priority delty.
- Pretlak: čerstvý feed je prevažne marketing/design alebo senior IT; bez promotion-grade zhody.
- WordPress Jobs: otvorené ponuky sú prevažne hard development alebo geograficky viazané; bez vhodnej delty.
- Reddit/komunity: čerstvé výsledky sú `FOR HIRE` self-promo, nie nový hiring dopyt.
- Facebook: **0 verified hits / limited**; bez konkrétneho verejne overiteľného postu sa nič nevytvára.

## Source audit — 4. 9. 2026 12:10
- Profesia: `checked`; bez novej promotion-grade LIVE delty.
- Priame company careers: `checked`; bez novej promotion-grade delty.
- LinkedIn Jobs: `limited`; Wolt Support Associate BA nájdený, ale B2 English mismatch.
- Worki.sk: `checked`; bez novej priority delty.
- Brigada.sk: `checked`; bez novej priority delty.
- Kariera.sk: `checked`; bez novej priority delty.
- Služby zamestnanosti: `checked`; bez novej vhodnej BA/remote delty.
- Pretlak / WordPress Jobs: `checked`; bez promotion-grade zhody.
- Upwork/freelance: `ok`; nový významný WooCommerce/e-commerce VA verification lead, nie LIVE.
- Reddit/komunity: `limited`; bez nového konkrétneho hiring dopytu.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 12:10
- source families reálne skontrolované: **11**
- z toho mimo Profesia: **10**
- relevantné/semirelevantné kandidáty: **5**
- pridané do LIVE: **0**
- nové unique verification kandidáty: **1 významný** (Upwork WooCommerce/e-commerce VA)
- vyradené/pozdržané: Wolt B2 English; Worki VZV/fyzická záťaž; WordPress Jobs hard-dev/geografia; community self-promo; ďalšie indexované výsledky bez vhodnej delty
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
- Mirror-to-canonical live membership check.
- Role-family credential prefilter for government feeds.
- Proposal-volume saturation curve.
- Employer response-channel friction tracker.
- Country-restriction prefilter before remote scoring.
- Search-index evidence expiry TTL.
- **Tool-gap confidence matrix for admin SaaS roles** — pri e-commerce/admin zákazkách oddeliť povinný nástroj, prenositeľnú skúsenosť a rýchlo doučiteľný tool; zabráni zbytočnému vyradeniu silných rolí len kvôli Xero/Meta/Klaviyo podobným nástrojom a zároveň jasne označí reálny skill gap.
- **Freelance client-hire saturation penalty** — pri kontraktoch s už uskutočneným hire a nulovým interviewing sledovať, či ide o viacnásobný nábor alebo prakticky obsadenú zákazku; zníži zbytočné reakcie na joby s nízkou zostávajúcou pravdepodobnosťou prijatia.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **48 LIVE položiek bezpečne zachovaných**, pretože nový Upwork lead má významný language/tool-gap a ostáva verification. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: **zápis 12:10 nebol vykonaný**, pretože GitHub writer vyžaduje kompletný replacement veľkého JSON-u s verification queue a dostupné čítanie payload truncuje; queue som podľa FAIL-CLOSED neriskoval poškodiť. Posledný bezpečne zapísaný audit ostáva 10:47.
- `job-sources.json`: **aktualizovaný na 12:10** reálnymi source poznámkami.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 12:10** s novým verification leadom a 2 novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index: **nedotknuté / zamknuté**.