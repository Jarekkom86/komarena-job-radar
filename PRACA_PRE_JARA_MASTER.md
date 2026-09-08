# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 8. 9. 2026 05:51 CEST

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
- Autoritatívny feed má **50 LIVE položiek**; v tomto behu nebol `jobs-data.json` menený, pretože nevznikla bezpečná nová LIVE promotion.
- LIVE mix: **Profesia 24/50 = 48,0 %**, mimo Profesia **26/50 = 52,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-05T07:32:41+02:00**.
- Posledná persisted LIVE promotion: **MamaTataJojo, s.r.o. — Administratívny pracovník, Malacky**, score 94.
- Promotion-ready: **NAY a.s. — Reklamačný/á technik/čka, Centrálny sklad Senec**; publ. 7. 9. 2026, ASAP, reklamácie + procesy + práca s tovarom, `locationEligibility: ba-area`.
- Silný flexibilný kandidát: **DHL Group — administratívna podpora transportného tímu, Senec**, 4 h denne, 804,50 EUR + 10 % mesačný bonus; `locationEligibility: ba-area`.
- Promotion-ready z predchádzajúcich behov: **BeiT Technologie — Administrativně-ekonomický specialista (Junior/Medior), 100 % remote** a **SAV — Asistent/ka riaditeľa**; pred LIVE zápisom vyžadujú fresh canonical recheck.
- Nový silný verification kandidát: **NASES — Operátor/operátorka Ústredného kontaktného centra**, Bratislava, od 1 500 EUR, pružný režim 8–16/9–17, vhodné pre absolventa; technicko-zákaznícka podpora slovensko.sk a e-schránok. `locationEligibility: ba-area`. Mínus: AJ B1 a vyššie Office nároky.
- Nový sekundárny verification kandidát: **Prvá stavebná sporiteľňa — Spracovateľ/Spracovateľka služieb pre klientov – Call centrum**, Bajkalská 28, Bratislava, 1 500–1 700 EUR, občasný HO. `locationEligibility: ba-area`. Mínus: profil ponuky uvádza 2 roky bankovníctvo/financie.

### Čerstvé zistenia 05:51
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Kariera/Zoznam, Brigada.sk, Pretlak/StartupJobs/WordPress Jobs, freelance/Upwork, Reddit/komunity a Facebook public index.
- **NASES** je najlepší nový lokálny výsledok tohto behu: zákaznícka/technická podpora verejných e-služieb, Bratislava, od 1 500 EUR, vhodné aj pre absolventa. AJ B1 je len mierny/stredný mínus, preto ide do verification, nie priamo LIVE.
- **PSS Call centrum** je lokálne a finančne lepšie (1 500–1 700 EUR + občasný HO), ale explicitný údaj o 2 rokoch bankovníctva/financií znižuje istotu zhody; verification pred promotion.
- LinkedIn: **EUROWAG — Office Coordinator, Bratislava** je obsahovo relevantný admin hit, ale vyžaduje fluent English, preto bez promotion.
- Upwork: **WooCommerce Product Listing & Upload Specialist** 10–30 USD/h, 50–75 produktov je rediscovery existujúceho verification kandidáta; 20–50 proposals, 5 interviewing a preferovaná holandčina držia kandidáta mimo LIVE.
- Reddit/komunity: nájdené výsledky boli FOR HIRE alebo US-only hard-dev; 0 eligible verified employer hits pre Slovensko.
- Facebook public index: **0 verified hits / limited**. Bez konkrétneho verejného postu a priameho linku sa nič nevykazuje ako hit.

## Source audit — 8. 9. 2026 05:51
- Profesia: `ok`; NASES + PSS sú relevantné lokálne hity, 0 LIVE promotions, NASES/PSS smerujú do verification.
- Priame company careers: `checked`; bez novej vhodnej unique BA/remote promotion-grade delty.
- LinkedIn Jobs: `limited`; EUROWAG Office Coordinator je relevantný lokálny hit, ale fluent English = language reject; coverage bez loginu je čiastočná.
- Worki: `checked`; bez novej vhodnej unique LIVE delty.
- Kariera/Zoznam: `checked`; bez novej unique promotion-grade BA/remote delty.
- Brigada.sk: `checked`; bez novej vhodnej BA/remote WordPress/admin/support brigády.
- Tech/creative: `checked`; Pretlak/StartupJobs/WordPress Jobs preverené bez novej promotion-grade delty.
- Freelance/Upwork: `ok`; rediscovery existujúceho WooCommerce Product Listing kandidáta, bez novej unique LIVE promotion.
- Reddit/komunity: `limited`; 0 eligible verified employer hiring hits.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 05:51
- nové LIVE promotions: **0**
- nové silné verification kandidáty: **2** (NASES, PSS)
- persisted verification queue pred týmto behom: **73**
- persisted LIVE feed delta: **0**, zostáva **50**
- Facebook verified hits: **0**
- persisted LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na tento beh.
- `source-audit.json`: lossless zápis je povinný; queue sa nesmie orezávať ani rekonštruovať z neúplného payloadu.

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
- Contract-to-hire conversion value score.
- Maintenance client continuity score.
- Duplicate verification enrichment instead of queue growth.
- Micro-project interview-pressure gate.
- Cross-platform e-commerce skill-gap weight.
- Fixed-budget scope ambiguity blocker.
- Requirement burden composite score.
- Community lead evidence completeness gate.
- Freelance bid-cost ROI estimator.
- Canonical active-state revalidation sampler.
- Upwork placeholder-budget detector.
- Verification rediscovery timestamp ledger.
- Ranking-track query coverage matrix.
- Search-index lag score per source family.
- Verification rediscovery metadata refresher.
- Freelance proposal-velocity estimator.
- Store-build scope decomposition score.
- Freelance client maturity confidence.
- Rediscovery freshness promotion trigger.
- Community lead minimum-evidence schema.
- Inactive-hit early discard cache.
- Maintenance-fit evidence score.
- Graduate-friendly direct-company watchlist.
- AI-enabled task-fit bonus with hard-skill ceiling.
- Source-query semantic drift monitor.
- Low-yield source adaptive query rotator.
- Micro-fix proof-of-skill mapper.
- Low-history client escrow-risk flag.
- Public-index country-restriction prefilter.
- Freelance starter-budget vs continuation-value split.
- Shift-window timezone normalizer.
- Hard-dev contamination ratio for maintenance roles.
- Fixed-price microproject effective-hour ceiling.
- Client interview saturation gate.
- Expert-label vs task-scope contradiction detector.
- Audit-to-source-registry consistency checker.
- Inactive-detail sibling-result isolation.
- Rediscovery-only run compression.
- Discovery-to-persistence reconciliation ledger.
- Portfolio-ready maintenance response pack.
- Budget-period ambiguity detector.
- Theme-builder portability score.
- Rejected-skill fingerprint cache.
- Rediscovery-only source write minimizer.
- Established-client microjob trust bonus with budget floor.
- Skill-exposure cap for PHP-warning fixes.
- Source-audit lossless patch precondition.
- Part-time effective-hourly comparator.
- Claims/reklamácie experience-transfer score.
- Preferred-language vs mandatory-language classifier.
- Trial-batch payment-risk gate.
- **Search-engine zero-result confidence calibration** — pri nulovom výsledku rozlíši skutočne prázdny zdroj od slabej verejnej indexácie podľa historickej výťažnosti, freshness a dostupnosti detailov; znižuje falošný pocit úplného coverage.
- **Reject-reason drift detector** — sleduje zmenu podielu `language`, `location`, `qualification`, `pay/value`, `duplicate` a `inactive` rejectov medzi behmi; upozorní, keď sa discovery zacyklí na nevhodnom type kandidátov a treba zmeniť query stratégiu.
- **Contact-channel load profile** — z detailu ponuky odhadne podiel telefón/chat/e-mail/social a prevádzkové okná; penalizuje telefonicky ťažké alebo 7-dňové support roly oproti pokojnejšiemu back-office bez toho, aby ich chybne vyradil lokalitou.
- **Public-sector compensation context normalizer** — pri ponukách viazaných na zákonné tabuľky rozlíši verejne uvedený nástupný základ, tarifný rámec a možné príplatky/odmeny, aby ranking neporovnával neporovnateľné mzdové údaje.
