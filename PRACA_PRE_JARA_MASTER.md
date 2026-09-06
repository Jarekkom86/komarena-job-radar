# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 6. 9. 2026 09:01 CEST

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

### Čerstvé zistenia 09:01
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Kariera/Zoznam, Brigada.sk, Pretlak/WordPress tech-creative, Upwork/freelance, Reddit/komunity a Facebook public index.
- **Žiadna nová bezpečná LIVE promotion.** LIVE feed zostáva 50 a fail-closed ochrana ostala zachovaná.
- Nový významný verification kandidát: **Upwork — WordPress Website Fixes and Customization**, Worldwide remote, **100 USD fixed**, entry-level, contract-to-hire; scope sú menšie opravy existujúceho WordPress webu, layout/responsive/plugin fixes. Promotion brzdí 20–50 proposals a slabá klientská história (15 USD spend, 1 hire).
- Reddit verejná indexácia priniesla hiring WordPress Developer 70–80 USD/h, ale je explicitne **US-only**, preto `reject-distance`/country restriction a nie je vhodný pre Slovensko.
- Profesia, company careers, Worki, Kariera, Brigada.sk a Pretlak/WordPress Jobs boli reálne preverené bez novej unique promotion-grade delty.
- LinkedIn verejná indexácia bola reálne prehľadaná, bez novej unique promotion-grade delty; coverage bez loginu ostáva limited.
- Facebook public index: **0 verified hits / limited**. Bez konkrétneho verejne overiteľného hiring postu a priameho linku sa nič nevykazuje ako hit. Autentizovaný Nexus/local ingestion zostáva backlog.

## Source audit — 6. 9. 2026 09:01
- Profesia: `checked`; bez novej unique promotion-grade delty.
- Priame company careers: `checked`; bez novej suitable unique promotion-grade delty.
- LinkedIn Jobs: `limited`; bez novej unique promotion-grade delty.
- Worki: `checked`; bez novej vhodnej delty.
- Kariera/Zoznam: `checked`; bez novej suitable unique LIVE delty.
- Brigada.sk: `checked`; bez novej vhodnej BA/remote admin/web/support brigády.
- Tech/creative: `checked`; bez novej suitable unique promotion-grade zhody.
- Upwork/freelance: `ok`; 1 nový významný WordPress fixes/customization kandidát pridaný do verification.
- Reddit/komunity: `limited`; 1 hiring hit vyradený pre US-only lokalitu.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 09:01
- nové vhodné LIVE promotion: **0**
- LIVE feed delta: **0**, zostáva **50**
- nové unique významné verification kandidáty: **1**
- verification queue: **63 položiek**, zachovaná bez straty
- vyradené pre lokalitu: **1** (Reddit US-only)
- Facebook verified hits: **0**
- LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `source-audit.json`: úspešne aktualizovaný; queue 62 → 63.

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
- **Ranking-track query coverage matrix** — pri každom behu evidovať, či discovery dotaz reálne pokryl každý hlavný track (web/e-shop, tech/support, admin, driver, logistics) aspoň v relevantných source families; odhalí tiché coverage diery aj pri formálne splnenom počte zdrojov.
- **Search-index lag score per source family** — počítať rozdiel medzi `publishedAt`, `crawledAt` a časom auditu; zdroje, ktoré pravidelne vracajú staré výsledky ako „čerstvé“, automaticky znížiť v discovery priorite bez penalizácie kvalitných canonical ponúk.
- **Verification rediscovery metadata refresher** — ak sa už evidovaný kandidát znovu objaví, neklonovať ho; aktualizovať `lastSeenAt`, aktuálnu cenu/sadzbu, proposal count, client-view a active-state, aby sa promotion rozhodovalo z čerstvých dát bez rastu queue.
- **Freelance proposal-velocity estimator** — z veku inzerátu a intervalového proposal count odhadovať tempo konkurencie (proposals/hour) a penalizovať iba rýchlo saturované zákazky; odlíši 20–50 proposals za pár hodín od rovnakého počtu po niekoľkých dňoch.
- **Store-build scope decomposition score** — pri WooCommerce/Shopify full-build zákazkách automaticky rozdeliť scope na katalóg, checkout/payments, shipping, analytics, policy/content a custom-code vrstvu; promotion zablokovať len vtedy, keď neoverená hard-dev časť presiahne bezpečný limit, namiesto plošného penalizovania každého full-store projektu.
- **Freelance client maturity confidence** — kombinovať vek klientského účtu, spend, hires, aktívne kontrakty a interview/view activity do jedného confidence signálu; nový klient bez histórie dostane vyššiu rizikovú prirážku, no kvalitný scope nebude automaticky potlačený len kvôli nulovému spendu.
- **Rediscovery freshness promotion trigger** — pri opakovanom nájdení už evidovaného kandidáta automaticky porovnať proposal count, interview activity, cenu, active-state a deadline; ak sa podmienky zlepšia alebo sa blíži uzávierka, kandidáta znovu zaradiť do promotion review bez tvorby duplicity.
- **Community lead minimum-evidence schema** — pre Reddit/Facebook/komunitné leady vyžadovať minimálne konkrétny hiring intent, scope, kontakt alebo aplikačný link a aspoň jeden z údajov budget/deadline/location; tým sa znížia falošne pozitívne „hity“ z všeobecných diskusií a FOR HIRE postov.
- **Inactive-hit early discard cache** — pri zdrojoch ako LinkedIn/Twine ukladať hash už potvrdených `no longer accepting applications`/expired výsledkov a pri ďalšom sweep-e ich vyradiť ešte pred detailným rankingom; zníži opakované prehľadávanie mŕtvych indexovaných ponúk.
- **Maintenance-fit evidence score** — pri WordPress maintenance zákazkách oddelene skórovať content/admin, updates/backups, troubleshooting, staging/deploy a hard-dev vrstvy; umožní rýchlejšie nájsť ľahší maintenance scope, ktorý je reálne vhodný bez senior PHP/server skillov.
- **Graduate-friendly direct-company watchlist** — samostatne sledovať priame firemné roly označené „vhodné aj pre absolventov“ a zvýšiť ich discovery prioritu v admin/tech/support trackoch bez toho, aby sa obchádzal language alebo hard-skill gate.
- **AI-enabled task-fit bonus with hard-skill ceiling** — evidovať explicitné každodenné využitie AI/Claude/automation nástrojov ako pozitívny fit signál pre Jara, ale nikdy ním nekompenzovať povinnú B2/C1 angličtinu, hard development alebo špecializovanú kvalifikáciu.
- **Source-query semantic drift monitor** — porovnávať zamýšľanú lokalitu/kategóriu discovery dotazu s reálnym rozdelením vrátených výsledkov; ak vyhľadávač začne vracať napr. Košice pri BA dotaze alebo inú profesijnú kategóriu, family označiť ako degraded/limited a nevydávať to za plné pokrytie.
- **Low-yield source adaptive query rotator** — po opakovaných behoch bez novej unique delty automaticky rotovať bezpečné synonymá a podkategórie (napr. e-shop admin, CMS content, reklamácie, service desk, vodič B) v rámci rovnakej source family; zvyšuje coverage bez pridávania slabých výsledkov do feedu.
- **Micro-fix proof-of-skill mapper** — pri malých WordPress opravách automaticky mapovať konkrétne tasky (layout, responsive, plugin issue, Elementor) na existujúce dôkazy praxe/portfólio; zrýchli rozhodnutie, či má zmysel reagovať na entry-level microjob bez hard-dev scope.
- **Low-history client escrow-risk flag** — pri fixed-price freelance ponukách kombinovať client spend, hires, vek účtu a budget s rizikom nejasného scope; kandidát s veľmi slabou históriou zostane vo verification aj pri vysokom fit score, kým sa nepotvrdí rozumný milestone/escrow setup.
