# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 5. 9. 2026 05:27 CEST

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
- **Malacky sú explicitne povolené `ba-area`**. Čas dojazdu môže znížiť ranking, ale nesmie meniť lokalitný enum na neplatný medzistav.

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
- MamaTataJojo zostáva promotion-ready a 5. 9. 2026 05:27 bol znovu potvrdený ako aktívny do 2. 10. 2026. Bezpečný LIVE ingest čaká na kompletný replacement autoritatívneho JSON bez straty existujúcich 49 položiek.

### Čerstvé zistenia 05:27
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Kariera/Zoznam, Pretlak/tech-creative + WordPress Jobs, Upwork/freelance, Reddit/komunity a Facebook public index.
- **MamaTataJojo, s.r.o. — Administratívny pracovník, Malacky**: znovu potvrdené 5. 9. 2026; zverejnené 4. 9. 2026, koniec ponuky 2. 10. 2026, 1 750 €/mes., plný úväzok na neurčito, jednozmenná prevádzka. Náplň: zakladanie, triedenie a archivácia zdravotných záznamov, skenovanie lekárskych správ, podklady pre poisťovne, tlačivá a korešpondencia. Požadované základné vzdelanie a vodičák B; cudzí jazyk nie je uvedený. Lokalita Malacky = `ba-area`. Stav zostáva **promotion-ready, score 94**.
- **1plus1 / SPP — operátor kontaktného centra, Home Office**: ponuka je reálne remote-ok zo Slovenska, 1 200–2 500 €/mes. na živnosť a nástup ihneď, ale jadrom je outbound obvolávanie zákazníkov a predaj produktov SPP. Zaradené iba ako nízko-prioritný discovery hit, nie LIVE promotion.
- **Power AS — Klientský online pracovník/pracovníčka**: 100 % home-office, od 1 500 €/mes., ale role sa po skúšobnej dobe posúva do získavania firemných zákazníkov/vedenia tímu; predajný charakter znižuje fit. Bez promotion.
- **Slovak Telekom careers**: priamy výpis potvrdený; existujúci customer-support kandidát zostáva LIVE. Čerstvo indexované DevOps/network roly sú hard-development/network a mimo profilu.
- **WordPress Jobs**: aktuálne 8 otvorených pozícií; prevažujú onsite USA/India/Saudi alebo developer/performance scope. Bez vhodného remote-ok admin/support hitu.
- **Upwork**: WooCommerce/WordPress/VA discovery preverené; najbližší e-commerce VA kandidát je už vo verification queue a vyžaduje WooCommerce Subscriptions, strong written English, Meta Ads a Xero. Nové WooCommerce výsledky sú prevažne expert development; bez LIVE promotion.
- **Reddit**: verejne indexované výsledky boli self-promo `[for hire]`, nie konkrétne hiring dopyty; 0 verified hiring hits.
- **Facebook public index**: preverený; **0 verified hits / limited**. Autentizovaný Nexus/local ingestion ostáva backlog, automat ho nespúšťa.

## Source audit — 5. 9. 2026 05:27
- Profesia: `ok/checked`; nový SPP home-office hit je verifikovaný, ale nízko-prioritný pre outbound sales charakter; bez LIVE promotion.
- Priame company careers: `ok`; Telekom careers reálne načítané, existujúci support LIVE potvrdený, nové hard-tech roly vyradené profilom.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez vhodného nového non-hard-dev promotion hitu.
- Worki: `checked`; bez novej vhodnej delty.
- Brigada.sk: `checked`; bez nového vhodného verifikovaného BA/remote hitu.
- Kariera/Zoznam: `ok`; MamaTataJojo znovu potvrdený ako aktívny do 2.10.2026 a promotion-ready.
- Pretlak / WordPress Jobs: `checked`; bez novej vhodnej promotion-grade zhody.
- Upwork/freelance: `ok`; bez novej promotion-grade delty.
- Reddit/komunity: `limited`, 0 verified hiring hits.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 05:27
- významné kandidáty znovu overené: **1** (MamaTataJojo, bez zmeny promotion-ready stavu)
- nové vhodné LIVE promotion: **0**
- LIVE feed delta: **0**, zachovaných 49 položiek
- Facebook verified hits: **0**
- `job-sources.json`: aktualizovaný na 05:27
- `source-audit.json`: musí zachovať kompletnú verification queue; zapisovať iba po bezpečnom replacement-e
- `jobs-data.json`: bez zmeny, kým nie je bezpečne vykonaný kompletný replacement s promotion-ready kandidátom

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
- Concurrent-run optimistic-lock merge guard.
- Per-family minimum query-diversity ledger.
- Application-ready evidence bundle generator.
- Verification queue source-saturation guard.
- ÚPSVR mirror canonical-link resolver.
- Segmented large-payload reconstruction checksum.
- **Remote-sales intensity classifier** — pri home-office ponukách automaticky odlíšiť čistý customer care/back-office od outbound cold-calling/telemarketingu a znížiť prioritu rolám, kde je hlavný zdroj príjmu výkonový predaj. Zabraňuje tomu, aby označenie „100 % home office“ umelo prehlušilo slabý funkčný fit.
- **Promotion-ready transactional writer** — pri povyšovaní jednej položky najprv zrekonštruovať a validovať celý `jobs-data.json`, overiť počet existujúcich ID, duplicity, source mix a kategórie, potom vykonať jeden atomický replacement; pri akejkoľvek odchýlke zápis zrušiť. Rieši opakovaný stav, keď kvalitný kandidát zostáva v queue iba kvôli bezpečnosti veľkého payloadu.
