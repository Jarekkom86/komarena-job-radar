# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 10. 9. 2026 06:50 CEST

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
- Autoritatívny feed má **51 LIVE položiek**; tento beh nepridal novú promotion-grade unique položku.
- LIVE mix: **Profesia 25/51 = 49,0 %**, mimo Profesia **26/51 = 51,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-09T05:21:40+02:00** — bez zápisu v tomto behu, pretože nevznikol nový promotion-grade unique hit.
- Posledná persisted LIVE promotion zostáva **Techfun s. r. o. — Elektro-technický špecialista pre e-shop**, Kopčianska 92A, Petržalka, 1 800–2 200 EUR/mes., nástup ihneď, Po–Pi onsite. Kombinuje odborné poradenstvo, e-mailovú/telefonickú technickú podporu, testovanie a zaraďovanie produktov, Arduino/ESP/Raspberry, reklamácie, návody, blog a produktové popisy. Angličtina A2; vhodné aj pre absolventa; firma uvádza, že potrebné veci doučí. `locationEligibility: ba-area`. Riziko: základ C/C++ alebo Python a práca s datasheetmi.

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
- Remote-sales intensity classifier.
- Promotion-ready transactional writer.
- Result-page pagination coverage meter.
- Structured-data canonical fallback extractor.
- Field-level provenance map.
- Consecutive canonical-failure stale counter.
- English task-type comprehension probe.
- Remote microtask income stability score.
- Cross-border remote contract eligibility verifier.
- Phone-language burden score for CZ/SK roles.
- Freelance client activity delta tracker.
- Published-vs-crawled freshness provenance.
- Freelance microtask minimum-value gate.
- Maintenance-vs-development scope classifier.
- Same-day low-fit suppression ledger.
- Freelance scope-to-evidence matcher.
- Qualification-stack early reject cache.
- Source-detail evidence completeness counter.
- Negative-result query coverage hash.
- Remote-work jurisdiction evidence cache.
- Public hiring scope sufficiency gate.
- Local low-pay opportunity suppression floor.
- Atomic audit queue patch writer.
- Same-day duplicate promotion shield.
- Remote full-time compensation floor by contract type.
- Adjacent-skill requirement bridge.
- Expired canonical tombstone cache.
- Search-result provenance counter.
- Recruiter-channel actionability score: hodnotiť priamy kontakt na recruitera, dostupnosť e-mailu/telefónu a počet krokov apply flow; pri rovnakej kvalite posunúť vyššie ponuky, na ktoré sa dá reagovať rýchlo a priamo.
- Morning-route compatibility classifier: z pracovného času, lokality a typu dochádzania odhadnúť, či rola reálne podporuje režim „ráno vyraziť – poobede doma“; použiť ako sekundárne poradie až po hard lokalitnom gate.
- Requirement-stack knockout precheck: ešte pred detailným scoringom automaticky vyhodnotiť kombináciu povinného vzdelania, praxe, jazyka a špecializovaných skillov; drahšie overovanie robiť iba pri kandidátoch, ktorí nemajú jasný knockout.
- Hiring-demand vs freelancer-supply community classifier: pri Reddit/WordPress/Facebook discovery rozlíšiť „hľadám človeka“ od „ponúkam svoje služby“ ešte pred započítaním hitu.
- Guaranteed-pay floor normalizer: pri TPP/živnosti rozlíšiť garantovaný základ od variabilnej zložky, bonusov a provízií; ranking primárne stavať na garantovanej odmene.
- Commute-cost-adjusted compensation: pri `ba-area` rolách odhadnúť čas a priame náklady pravidelného dochádzania a dopočítať efektívnu hodnotu odmeny po cestovaní.
- Search-query diminishing-returns rotator: evidovať hash posledných dotazov a ich pomer unique-hit/duplicate/zero-hit; pri opakovaných nulových alebo duplicitných výsledkoch automaticky rotovať synonymá, segment a source-specific query tak, aby hodinové behy nespúšťali stále rovnaký slabý discovery pattern.
- Critical-field evidence ageing matrix: viesť samostatný vek dôkazu pre lokalitu, remote eligibility, jazyk, odmenu, status a povinné skills; pri re-verifikácii otvárať iba polia, ktorých evidence prekročila SLA alebo sa zmenil zdroj, čím sa zrýchli refresh bez falošného posúvania `verifiedAt` celej ponuky.

## Source audit — 10. 9. 2026 15:19
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Kariera.sk, Pretlak/StartupJobs, Upwork/Freelancer, Reddit/WordPress komunity a Facebook public index.
- Profesia: `checked`; 0 nových suitable unique promotion-grade výsledkov.
- Priame company careers: `checked`; 0 novej vhodnej canonical delty.
- LinkedIn Jobs: `ok`; Wolt Support Associate (Part Time), Bratislava, je aktuálny, ale student/shift režim a večery/víkendy ho držia mimo promotion.
- Worki: `checked`; 0 novej vhodnej unique delty.
- Brigada.sk: `checked`; 0 nových vhodných konkrétnych hitov.
- Kariera.sk: `checked`; 0 novej vhodnej promotion-grade delty.
- Pretlak/StartupJobs: `ok`; Stretchfit Creative Strategist, Bratislava/remote/hybrid, 2 300–3 000 EUR, ale Mid/Senior creative-strategy mismatch; 0 promotion.
- Upwork/Freelancer: `ok`; 9 relevantných/adjacent výsledkov. Fresh Worldwide store-partnership VA je entry-level, ale iba 36 USD fixed a vyžaduje zdieľanie prístupu k store/accountu, preto economics/trust reject. Full-time operations vyžaduje strong written English a 12 h denne/6 dní; WooCommerce build výsledky sú development-heavy/low-budget; Italy VA je country-restricted. 0 promotion.
- Reddit/komunity: `checked`; 0 konkrétnych vhodných hiring dopytov.
- Facebook public index: `limited`; **0 verified hits**, žiadny konkrétny verejne overiteľný hiring post s priamym linkom. Nexus/local authenticated ingestion nebol spustený.

### Audit počty 15:19
- source families checked: **10**
- nové LIVE promotions: **0**
- LIVE feed delta: **0**, zostáva **51**
- Facebook verified hits: **0**
- LIVE mix: Profesia **49,0 %**, non-Profesia **51,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 15:19.
- `source-audit.json`: aktualizovaný na 15:19.
- `jobs-data.json`: bez zmeny; nevznikol nový promotion-grade unique hit.
