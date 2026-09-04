# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 4. 9. 2026 23:02 CEST

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
- Sweep 23:02 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.

### Čerstvé zistenia 23:02
- **Roche – Technical Support Specialist (Slovak & Czech language), Bratislava**: lokácia prechádza a technický support je relevantný smer, ale rola je v skutočnosti engineering/application consultancy pre IVD diagnostiku. Vyžaduje technické/IT/biochemické/lab vzdelanie alebo ekvivalent a angličtinu na medzinárodné tréningy a technické fóra. Bez promotion.
- **Lenovo – SSG Customer Experience Specialist, Bratislava / hybrid**: zaujímavý prienik onboarding + troubleshooting + AI/LLM workflow automation, ale vyžaduje 2–5 rokov customer onboarding/customer success/support praxe, prezentácie a demá zákazníkom. Bez promotion.
- **Upwork – Full-Time Virtual Assistant, Operations**: Worldwide remote, e-commerce operations/order processing/customer-service support, ale požaduje strong written English a fixný režim 12 hodín denne, 6 dní týždenne; workload gate.
- **Upwork – Senior WordPress Developer (Elementor Expert)**: Worldwide remote, ale expert/3+ roky + Elementor Pro/ACF/light PHP/CSS a iba 5 USD fixed-price; budget/skill mismatch.
- **Pretlak – ui42 PPC / Stretchfit Creative Strategist**: Bratislava, ale mid/senior performance-marketing/creative scope mimo cieľového profilu.
- **Reddit**: verejný výsledok je znovu `FOR HIRE` WordPress/WooCommerce self-promo, nie hiring dopyt.
- **Facebook**: **0 verified hits / limited**; bez konkrétneho verejne overiteľného postu sa nič nevytvára.

## Source audit — 4. 9. 2026 23:02
- source families reálne skontrolované: **11**
- mimo Profesia: **10**
- Profesia: `checked`; bez novej promotion-grade delty.
- Priame company careers: `checked`; bez novej unique promotion-grade delty.
- LinkedIn Jobs: `limited`; Roche/Lenovo preverení, bez LIVE promotion pre qualification/experience burden.
- Worki.sk: `checked`; bez novej vhodnej delty.
- Brigada.sk: `checked`; bez novej vhodnej priority delty.
- Práca za rohom/Kariera.sk: `checked`; bez novej bezpečnej promotion-grade zhody.
- Pretlak + StartupJobs: `checked`; nové výsledky mimo cieľového skill profilu alebo už vo verification.
- Upwork/freelance: `ok`; čerstvé výsledky, 0 LIVE promotion pre workload/budget/language/hard-scope riziká.
- Reddit/komunity: `limited`; bez nového konkrétneho hiring dopytu.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 23:02
- pridané do LIVE: **0**
- LIVE feed delta: **0**; fail-closed zachovanie 49 položiek
- Facebook verified hits: **0**
- nové relevantné kandidátske signály: LinkedIn **2**, Upwork **2**, Pretlak **2**; LIVE promotion **0**
- vyradené/karanténa: qualification/language **1**, experience/presentation burden **1**, workload/language **1**, budget/hard-scope **1**, skill-profile mismatch **2**
- verification queue: **56** položiek; bez automatického mazania

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
- **Implicit workplace-language risk detector** — z EMEA/global scope, anglického detailu, demo/training povinností a customer-facing komunikácie odhadnúť jazykové riziko aj keď inzerát nemá explicitné B1/B2/C1 pole; nikdy z toho nerobiť hard gate bez dôkazu.
- **Applicant-count × listing-age opportunity decay** — pri verejne dostupnom počte uchádzačov kombinovať vek ponuky a konkurenciu do urgency/ROI skóre, aby sa čas nestrácal na staré silno saturované leady.
