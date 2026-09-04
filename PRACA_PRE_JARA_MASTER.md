# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 4. 9. 2026 13:00 CEST

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
- Sweep 13:00 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- Kariera/Lidl: čerstvý priamy firemný hit `Referent oddelenia Účtovania tovaru` v Bratislave, 1 650 EUR/mes., administratíva + logistické centrá + faktúry; vyradené z priority kvôli explicitnej požiadavke na plynulú angličtinu alebo nemčinu.
- Kariera/DAŇOVÁ SOVA: nový administratívny pracovník v Pezinku, 990 EUR/mes., jednozmenná 08:00–16:30, jednoduchá administratíva a komunikácia so zákazníkmi; nepovýšené kvôli B1–B2 angličtine, nízkej mzde a požadovanému 1 roku praxe.
- LinkedIn: verejná indexácia ukázala BA L1/IT support a customer-support roly, ale bez nového kandidáta s lepším skill/language profilom než existujúci LIVE/verification pool; coverage bez loginu zostáva limited.
- Upwork: čerstvé Worldwide remote WooCommerce/WordPress hity existujú, ale `WooCommerce product page layout` a ďalšie sú development-heavy; `ongoing WordPress support` je expert/complex s 50+ proposals; micro-fix 5 USD je value mismatch. Bez LIVE promotion.
- Worki/Brigada: discovery reálne preverené; bez novej priority BA delty.
- Pretlak/StartupJobs: tech/creative discovery preverené; bez promotion-grade zhody.
- Reddit/komunity: verejná WordPress/forhire indexácia bez konkrétneho vhodného čerstvého hiring dopytu.
- Facebook: **0 verified hits / limited**; bez konkrétneho verejne overiteľného postu sa nič nevytvára.

## Source audit — 4. 9. 2026 13:00
- Profesia: `checked`; bez novej promotion-grade LIVE delty.
- Priame company careers: `ok`; Lidl canonical overený, ale language hard mismatch.
- LinkedIn Jobs: `limited`; verejná indexácia BA support rolí, bez vhodnej promotion delty.
- Worki.sk: `checked`; bez novej priority delty.
- Brigada.sk: `checked`; bez novej priority delty.
- Kariera.sk: `ok`; nové administratívne kandidáty overené, vyradené pre jazyk/mzdu/požiadavky.
- Služby zamestnanosti: `checked`; bez novej vhodnej BA/remote delty.
- Pretlak / StartupJobs / WordPress Jobs: `checked`; bez promotion-grade zhody.
- Upwork/freelance: `ok`; viac nových Worldwide WordPress/WooCommerce hitov, ale hard-dev/value/competition mismatch.
- Reddit/komunity: `limited`; bez nového konkrétneho hiring dopytu.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 13:00
- source families reálne skontrolované: **11**
- z toho mimo Profesia: **10**
- relevantné/semirelevantné kandidáty: **8**
- pridané do LIVE: **0**
- nové unique verification kandidáty: **0**
- vyradené/pozdržané: Lidl tovarové účtovanie — plynulá AJ/DE; DAŇOVÁ SOVA — B1–B2 + 990 EUR; Upwork — hard-dev/value/competition; LinkedIn support — language/skill scope; ďalšie bez vhodnej delty
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
- Tool-gap confidence matrix for admin SaaS roles.
- Freelance client-hire saturation penalty.
- **Fluency-vs-functional-language hard-gate parser** — rozlišovať formulácie `plynule`, `komunikatívne`, `výhodou` a CEFR úroveň; zabráni tomu, aby administratívne roly s explicitnou plynulosťou prešli len preto, že presná CEFR úroveň chýba.
- **Canonical job-board freshness reconciliation** — pri rovnakom kandidátovi porovnať dátum originálnej firemnej kariéry a job-boardu a freshness pripísať iba primárnemu zdroju; znižuje falošné „nové“ hity a duplicitné rechecky.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **48 LIVE položiek bezpečne zachovaných**. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: plánovaný audit 13:00; kompletný payload sa musí zachovať vrátane verification queue. Ak konektor neumožní bezpečný replacement, FAIL-CLOSED ponechá posledný validný audit bez poškodenia queue.
- `job-sources.json`: aktualizácia source poznámok prebehne v tomto behu.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 13:00** s auditom a 2 novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index: **nedotknuté / zamknuté**.