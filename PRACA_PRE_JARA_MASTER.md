# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 3. 9. 2026 09:35 CEST

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
- Sweep 09:35 nepriniesol nový bezpečný promotion-grade LIVE ingest; existujúce aktívne položky zostali fail-closed zachované.
- **Kariera/Zoznam – EPF Group, Vodič dodávky pre expresnú prepravu balíkov e-shopov**: publikované 3.9.2026, Bratislava, 1 200–2 000 EUR, živnosť, jazdy na otočku SR/ČR/Poľsko/Maďarsko/Rumunsko/Chorvátsko/Slovinsko. Napriek e-shop balíkom ide o hard mismatch: povinné vodičské oprávnenie **BE** a **tachografová karta**; preto `locationEligibility: ba-area`, ale `status: reject-license-tachograph-route-burden`, nie LIVE.
- **ProjectHi – Kuriér pre doručovanie zásielok**: Bratislava, skupina B, 1 031 EUR, 15 miest, no vyžaduje aspoň jeden z jazykov RU/UA na úrovni B1–B2 a min. 6 mesiacov praxe; `status: reject-language`, nie LIVE.
- WordPress Jobs ostáva prevažne hard-development: napr. Senior WordPress Developer zahŕňa multisite, REST API/webhooks, Git workflow, plugin development a deployment; mimo preferovaného non-hard-dev profilu.

## Source audit — 3. 9. 2026 09:35
- Profesia: `checked`; BA WordPress/support/admin/driver discovery reálne preverené, bez novej promotion-grade delty.
- Priame company careers: `checked`; BA/remote admin/support/e-commerce discovery preverená, bez nového canonical promotion-grade hitu.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez nového konkrétneho BA/remote promotion-grade hitu.
- Worki.sk: `checked`; BA admin/support/driver discovery preverené, bez novej promotion-grade delty.
- Brigada.sk: `checked`; BA administratíva/digitalizácia discovery preverené, bez nového promotion-grade hitu.
- Kariera.sk / Zoznam: `ok`; EPF expresný vodič e-shop balíkov bol reálne overený a vyradený pre BE + tachograf + medzinárodnú route burden; ProjectHi kuriér vyradený pre RU/UA B1–B2.
- Služby zamestnanosti: `checked`; verejný vyhľadávač dostupný; ProjectHi potvrdený aj ako prevzatý z ÚPSVaR, bez promotion-grade delty.
- Pretlak / StartupJobs / WordPress Jobs: `checked`; WordPress/WooCommerce remote discovery preverené; aktuálne výsledky sú prevažne hard-development/full-build alebo majú geografické/timezone obmedzenia.
- Upwork/freelance: `ok`; čerstvé WooCommerce/WordPress výsledky preverené. Technical Specialist pre existujúce weby a landing-page/full-build projekty zostávajú expert/hard-scope verification; bez LIVE ingestu.
- Reddit/komunity: `limited`; verejná indexácia preverená, bez konkrétneho SK-eligible verified hiring hitu; prevažujú `[FOR HIRE]` ponuky kandidátov.
- Facebook public index: `limited`, **0 verified hits**; nebol nájdený konkrétny verejne overiteľný hiring post s priamym linkom.

### Audit počty 09:35
- source families skontrolované: **11**
- z toho mimo Profesia: **10**
- relevantné nové/novozachytené kandidáty: **2**
- pridané do LIVE: **0**
- verification/reject kandidáty: **2**
- vyradené pre jazyk: **1**
- vyradené pre povinné oprávnenie/tachograf/route burden: **1**
- vyradené pre lokalitu: **0**
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
- **Driver credential hard-gate extractor** — pri každej vodičskej ponuke automaticky rozlíšiť B vs. BE/C/C+E a prítomnosť tachografovej karty; B-only roly môžu rankovať, povinné BE/C/C+E alebo tachograf sa majú vyradiť pred scoringom.
- **Cross-border route burden score** — samostatne vyhodnocovať medzinárodné otočky, počet krajín, dĺžku trás a návrat domov; „Bratislava“ nesmie maskovať vysokú dennú diaľkovú záťaž.

## Stav ochrany / zápisu
- `jobs-data.json`: bez zmeny; **48 LIVE položiek bezpečne zachovaných**, pretože nevznikla promotion-grade delta. `jobs-data.updatedAt` sa zámerne neposunul.
- `source-audit.json`: posledný bezpečný JSON audit je aktuálny k 09:16; pri tomto 09:35 sweepe sa kompletný payload cez GitHub contents reader stále vracia truncovane, takže replacement verification queue nebol vykonaný. Stav 09:35 je pravdivo zachytený v MASTER-i bez predstierania zápisu JSON auditu.
- `job-sources.json`: registry zostáva štrukturálne platný; zdroje boli v tomto rune reálne preverené, bez novej source family.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný na 09:35** s reálnym auditom a 2 novými backlog zlepšeniami.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.