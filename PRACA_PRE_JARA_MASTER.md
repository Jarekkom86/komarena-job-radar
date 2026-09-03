# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 3. 9. 2026 17:23 CEST

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
- Vodičské roly: povinné BE/C/C+E, tachografová karta alebo pravidelné diaľkové/medzinárodné trasy sú hard mismatch oproti preferencii vodič B bez tachografu.
- Lokalita BA/okolie alebo overený remote/HO je hard gate, nie bonus.
- Agregátor/repost nesmie prebiť priamy firemný zdroj.

## Aktuálny stav LIVE
- Autoritatívny feed má aktuálne **48 LIVE položiek**.
- LIVE mix: **Profesia 24/48 = 50,0 %**, mimo Profesia **24/48 = 50,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-03T02:15:13+02:00** — posledná reálna zmena LIVE feedu.
- Sweep 17:23 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- LinkedIn/Marlink `Support Engineer` je lokálne v Bratislave a technicky relevantný, ale vyžaduje **AJ B2**, technické/IT/networking vzdelanie a 24/7 trojzmennú prevádzku; bez LIVE promotion.
- Volkswagen `Ansible Tower/AWX Support Specialist` síce uvádza Bratislavu a remote až 100 %, ale ide o hard-dev/advanced IT stack, preto mimo rankingového sweet spotu.
- Upwork `Website & SEO Management 2026` zostáva silný remote WooCommerce maintenance kandidát, ale už je evidovaný vo verification queue; nový ingest by bol duplicita.
- Čerstvý Upwork `WordPress + WooCommerce Developer` je Worldwide remote a long-term, ale iba **5 USD fixed-price** pri komplexnom scope, preto value mismatch.
- Ďalšie čerstvé Upwork VA/WordPress výsledky boli prevažne low-budget, hard-dev alebo vyžadovali silnú spoken/written English.
- Facebook verejná indexácia ostáva **0 verified hits / limited**; bez konkrétneho verejne overiteľného postu sa nič nevytvára.

## Source audit — 3. 9. 2026 17:23
- Profesia: `checked`; BA WordPress/support/admin/driver discovery reálne preverené, bez novej promotion-grade delty.
- Priame company careers: `ok`; Volkswagen advanced Ansible/AWX support zachytený, vyradený pre hard-dev/advanced-stack mismatch.
- LinkedIn Jobs: `ok/limited coverage`; Marlink Support Engineer a SupportYourApp remote výsledok boli konkrétne čitateľné; oba zlyhali na language/qualification gate.
- Worki.sk: `checked`; BA technický support/admin/driver discovery preverená, bez nového vhodného kandidáta.
- Brigada.sk: `checked`; BA administratíva/kuriér/sklad discovery preverené, bez nového promotion-grade hitu.
- Pretlak / StartupJobs / WordPress Jobs: `checked`; bez nového konkrétneho hiring hitu vhodného na promotion.
- Upwork/freelance: `ok`; približne 10 relevantných/čiastočne relevantných výsledkov, 0 LIVE promotion pre value/language/skill/staleness/dedupe dôvody.
- Reddit/komunity: `limited`; verejná indexácia preverená, čerstvé výsledky boli prevažne `for hire`, nie hiring dopyty.
- Facebook public index: `limited`, **0 verified hits**; nebol nájdený konkrétny verejne overiteľný hiring post s priamym linkom.

### Audit počty 17:23
- source families reálne skontrolované: **9**
- z toho mimo Profesia: **8**
- relevantné/čiastočne relevantné výsledky v novom sweep-e: **13+**
- pridané do LIVE: **0**
- nové verification kandidáty: **0**
- vyradené pre jazyk/qualification/shift mismatch: **4+**
- vyradené pre value mismatch: **4+**
- hard-dev/skill mismatch: **2+**
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
- **Search-result location contradiction quarantine** — porovnávať titulok, deklarované pracovisko a text onsite/relocation; výsledok typu „Bratislava“ + „onsite Lisbon“ automaticky označiť `reject-distance` ešte pred rankingom.
- **Freelance scope-to-budget unit estimator** — pri katalógových a obsahových zákazkách odhadovať cenu na produkt/obrázok/stránku a potlačiť ponuky, kde fixed-price vyzerá prijateľne iba preto, že skutočný objem práce nie je normalizovaný.
- **Client hiring-volume anomaly detector** — pri freelance ponukách zachytiť neobvyklý počet požadovaných freelancerov, masový nábor a disproporciu medzi scope, odmenou a hiring count; takéto ponuky neposielať do LIVE bez dôveryhodného detailu.
- **Microtask detail-insufficiency quarantine** — pri krátkych remote mikroúlohách bez konkrétneho opisu výstupu, dát alebo workflow vyžadovať detail scope pred promotion, aj keď deklarovaná odmena vyzerá nadpriemerne.
- **Required-proof inventory matcher** — ku každej povinnej požiadavke kandidáta evidovať, či ju vie CV/portfólio doložiť konkrétnym dôkazom; bez dôkazu znižovať confidence a prioritu reakcie.
- **Freelance client-response velocity signal** — kombinovať `last viewed`, `interviewing`, `hires` a čas od publikovania do jedného signálu; zvýhodniť čerstvé zákazky s reálnou aktivitou klienta pred stagnujúcimi listingami.
- **Shift-language compound-risk gate** — kombinovať jazykovú požiadavku s 24/7/nočnými zmenami; technicky zaujímavé support roly s oboma rizikami automaticky výraznejšie penalizovať pred promotion.
- **Freelance budget-scope contradiction detector** — pri long-term/complex scope a symbolickom fixed-price rozpočte označiť rozpor budget/scope a vyradiť listing ešte pred verification queue.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **48 LIVE položiek bezpečne zachovaných**, pretože nevznikla promotion-grade delta. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: aktualizovaný na 17:23; verification queue zachovaná bez fiktívnych prírastkov.
- `job-sources.json`: source definitions bez štrukturálnej zmeny; auditové timestampy/poznámky sa aktualizujú iba pri skutočne kontrolovaných zdrojoch.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 17:23** s reálnym auditom a 2 novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.