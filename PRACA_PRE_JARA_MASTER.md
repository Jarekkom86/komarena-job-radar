# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 5. 9. 2026 06:30 CEST

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
- MamaTataJojo zostáva promotion-ready a 5. 9. 2026 06:30 bol znovu potvrdený ako aktívny do 2. 10. 2026. Bezpečný LIVE ingest stále čaká na kompletný replacement autoritatívneho JSON bez straty existujúcich 49 položiek.

### Čerstvé zistenia 06:30
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Kariera/Zoznam, tech/creative (Pretlak + StartupJobs), Upwork/freelance, Reddit/komunity a Facebook public index.
- **MamaTataJojo, s.r.o. — Administratívny pracovník, Malacky**: canonical detail znovu potvrdený 5. 9. 2026; zverejnené 4. 9. 2026, koniec ponuky 2. 10. 2026, 1 750 €/mes., plný úväzok na neurčito, jednozmenná prevádzka. Náplň: zakladanie, triedenie a archivácia zdravotných záznamov, skenovanie lekárskych správ, podklady pre poisťovne, tlačivá a korešpondencia. Požadované základné vzdelanie a vodičák B; cudzí jazyk nie je uvedený. Lokalita Malacky = `ba-area`. Stav **promotion-ready, score 94**.
- **LinkedIn**: Foxelli e-commerce support remote je verejne indexovaný, ale ide o support + sales a pracovné prostredie je jazykovo náročnejšie; SupportYourApp remote technický/customer support explicitne vyžaduje fluent English. Bez promotion.
- **Brigada.sk**: čerstvý Manipulačný pracovník v Divadle P. O. Hviezdoslava je BA a 8 €/h, ale je fyzicky náročný a mimo prioritného profilu; bez promotion.
- **Upwork**: Virtual Assistant – Operations & Campaign Support je Worldwide remote a 5–7 USD/h, ale vyžaduje strong written and spoken English a dostupnosť počas US pracovného času; bez promotion. Ďalšie čerstvé WordPress/WooCommerce výsledky sú hard-development alebo majú nízku efektívnu sadzbu.
- **Kariera/Zoznam**: MamaTataJojo zostáva najsilnejšia čerstvá administratívna zhoda v Malackách; ostatné nové BA/okolie administratívne výsledky neprebíjajú existujúce priority.
- **Reddit**: bez nového verejne overiteľného hiring dopytu vhodného pre profil.
- **Facebook public index**: preverený; **0 verified hits / limited**. Autentizovaný Nexus/local ingestion ostáva backlog, automat ho nespúšťa.

## Source audit — 5. 9. 2026 06:30
- Profesia: `checked`; čerstvý BA/remote discovery bez novej promotion-grade delty.
- Priame company careers: `checked`; verejné kariérne vyhľadávanie preverené, bez novej unique promotion-grade delty.
- LinkedIn Jobs: `limited`; Foxelli/support výsledky verejne indexované, ale sales/jazykové požiadavky znižujú fit.
- Worki: `checked`; bez novej vhodnej delty.
- Brigada.sk: `ok`; čerstvý BA hit nájdený, ale fyzicky náročný a mimo prioritného profilu.
- Kariera/Zoznam: `ok`; MamaTataJojo znovu potvrdený ako aktívny do 2.10.2026 a promotion-ready.
- Pretlak / StartupJobs: `checked`; bez novej vhodnej promotion-grade zhody.
- Upwork/freelance: `ok`; nové remote výsledky overené, no angličtina/nízka sadzba/hard-dev scope blokujú promotion.
- Reddit/komunity: `limited`, 0 verified hiring hits.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 06:30
- významné kandidáty znovu overené: **1** (MamaTataJojo, bez zmeny promotion-ready stavu)
- nové vhodné LIVE promotion: **0**
- LIVE feed delta: **0**, zachovaných 49 položiek
- Facebook verified hits: **0**
- `job-sources.json`: aktualizovať na 06:30
- `source-audit.json`: zachovať kompletnú verification queue; zapisovať iba po bezpečnom replacement-e
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
- **Remote-sales intensity classifier** — pri home-office ponukách automaticky odlíšiť čistý customer care/back-office od outbound cold-calling/telemarketingu a znížiť prioritu rolám, kde je hlavný zdroj príjmu výkonový predaj.
- **Promotion-ready transactional writer** — pri povyšovaní jednej položky najprv zrekonštruovať a validovať celý `jobs-data.json`, overiť počet existujúcich ID, duplicity, source mix a kategórie, potom vykonať jeden atomický replacement; pri akejkoľvek odchýlke zápis zrušiť.
- **Result-page pagination coverage meter** — pri každom source family evidovať, koľko strán/výsledkov bolo reálne prehľadaných a či search skončil kvôli vyčerpaniu výsledkov alebo limitu indexácie; znižuje falošný pocit coverage pri zdrojoch, ktoré vracajú iba prvú stránku.
- **Structured-data canonical fallback extractor** — ak viditeľný detail ponuky chýba alebo je dynamicky blokovaný, skúsiť z verejného JSON-LD/JobPosting načítať canonical URL, dátum, lokalitu, remote flag a expiry; promotion je povolený iba ak sa údaje zhodujú s verejným detailom alebo dôveryhodným primárnym zdrojom.