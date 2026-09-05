# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 5. 9. 2026 23:40 CEST

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
- Autoritatívny feed má **50 LIVE položiek**.
- LIVE mix: **Profesia 24/50 = 48,0 %**, mimo Profesia **26/50 = 52,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-05T07:32:41+02:00**.
- Posledná bezpečná LIVE promotion: **MamaTataJojo, s.r.o. — Administratívny pracovník, Malacky**, score 94.

### Čerstvé zistenia 23:40
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Kariera/Zoznam + ÚPSVR, Pretlak/StartupJobs/WordPress tech-creative, Upwork/freelance, Reddit/komunity a Facebook public index.
- **Žiadna nová bezpečná LIVE promotion.** LIVE feed zostáva 50 a fail-closed ochrana ostala zachovaná.
- Priamy Telekom careers detail stále potvrdzuje **Špecialista/Špecialistka podpory zákazníkov — Bratislava / čiastočný home office**. Ponuka je už LIVE, preto ide iba o canonical freshness refresh a `rejectedDuplicate: 1`, nie nový prírastok.
- WordPress Jobs aktuálne uvádza **8 otvorených pozícií a 13 % remote-friendly**. Najčerstvejšie relevantné roly sú prevažne custom PHP/theme/plugin, performance/server alebo geograficky viazané; bez bezpečnej SK-remote promotion.
- Upwork verejný index ukázal čerstvé Worldwide remote mikro-zákazky: Elementor fix **50 USD** s contract-to-hire, WordPress fix **5 USD**, small task **10 USD** a small-business build **120 USD**. Lokalita prechádza, ale nízky fixed-budget ROI alebo development scope nedosahujú LIVE threshold.
- Kariera/Zoznam a ÚPSVR boli reálne preverené; verejný BA index má čerstvé administratívne/marketingové výsledky a lokálne zásielkové/customer-service roly, ale bez kandidáta, ktorý by po fit/compensation gate prekonal aktuálny feed.
- Reddit/WordPress communities: v tomto behu bez nového konkrétneho verejne overiteľného hiring leadu s dostatočným scope, budgetom a remote/BA dôkazom.
- Facebook public index: **0 verified hits / limited**. WordPress Slovensko, WooCommerce SK+CZ a Práca/brigády Bratislava a okolie boli vyhľadané; bez konkrétneho verejného hiring postu a priameho linku sa nič nevykazuje ako hit. Autentizovaný Nexus/local ingestion zostáva backlog.

## Source audit — 5. 9. 2026 23:40
- Profesia: `checked`; bez novej unique promotion-grade delty.
- Priame company careers: `ok`; 1 relevantný canonical refresh, ale už existujúci LIVE Telekom job → duplicate, nie nový prírastok.
- LinkedIn Jobs: `limited`; bez novej vhodnej unique delty, coverage bez loginu zostáva čiastočná.
- Worki: `checked`; bez nového promotion-grade hitu.
- Brigada.sk: `checked`; bez nového promotion-grade hitu.
- Kariera/Zoznam + ÚPSVR: `ok`; lokálne relevantné výsledky existujú, bez novej LIVE promotion po fit/compensation gate.
- Tech/creative: `ok`; WordPress Jobs 8 open / 13 % remote-friendly, relevantné čerstvé roly prevažne hard-development alebo geo-bound.
- Upwork/freelance: `ok`; 4 čerstvé relevantné Worldwide remote WordPress mikro-zákazky, všetky bez promotion pre nízky ROI alebo scope burden.
- Reddit/komunity: `limited`; 0 nových overených hiring leadov v tomto behu.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 23:40
- nové vhodné LIVE promotion: **0**
- LIVE feed delta: **0**, zostáva **50**
- nové unique významné verification kandidáty: **0**
- verification queue: **61 položiek**, zachovaná bez straty
- Facebook verified hits: **0**
- LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `source-audit.json`: úspešne aktualizovaný a verification queue zachovaná na 61 položkách.

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
- **Requirement burden composite score** — zjednotiť jazyk, roky praxe, formálne vzdelanie, povinné nástroje a špecializované skills do jedného vysvetliteľného `requirementBurden` skóre.
- **Community lead evidence completeness gate** — pre Reddit/Facebook/WordPress community post vyžadovať pred promotion minimálne konkrétny zadávateľ/post, scope, odmenu alebo spôsob dohody, dátum, priamy link a explicitný dôkaz BA alebo remote eligibility.
- **Freelance bid-cost ROI estimator** — pred alertom odhadnúť náklady na podanie ponuky (Connects/bid effort), konkurenciu a očakávanú hodnotu zákazky; mikro-zákazky s negatívnym očakávaným ROI potlačiť bez zahlcovania verification queue.
- **Canonical active-state revalidation sampler** — pri každom behu znovu overiť malú rotujúcu vzorku TOP LIVE priamych/canonical linkov a evidovať `activeConfirmedAt`; jeden dočasný výpadok nesmie mazať položku, ale opakované canonical zlyhania ju pošlú na manuálnu revíziu.
