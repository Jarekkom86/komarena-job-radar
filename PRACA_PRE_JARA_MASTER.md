# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 7. 9. 2026 16:17 CEST

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
- Autoritatívny feed má **50 LIVE položiek**; v tomto behu nebol `jobs-data.json` prepísaný, pretože dostupný GitHub zápis je full-file replacement a fail-closed nepovoľuje ručne rekonštruovať veľký 50-položkový payload pri riziku straty existujúcej položky.
- LIVE mix pred pending promotion: **Profesia 24/50 = 48,0 %**, mimo Profesia **26/50 = 52,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-05T07:32:41+02:00**.
- Posledná persisted LIVE promotion: **MamaTataJojo, s.r.o. — Administratívny pracovník, Malacky**, score 94.
- **Promotion-ready pending:** BeiT Technologie — `Administrativně-ekonomický specialista (Junior/Medior) — remote`, StartupJobs. Po bezpečnom zápise by feed bol 51 položiek a mix približne Profesia 47,1 % / non-Profesia 52,9 %.

### Čerstvé zistenia 16:17
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Kariera/Zoznam, Brigada.sk/Práca za rohom, Pretlak/StartupJobs/WordPress Jobs, freelance/Upwork, Reddit/komunity a Facebook public index.
- **Najsilnejšia nová unique zhoda: BeiT Technologie — Administrativně-ekonomický specialista (Junior/Medior) — remote.** StartupJobs uvádza 26–44 tis. Kč mesačne, full-time alebo part-time, spoluprácu na IČO 30–40 h/týždeň a explicitne 100 % remote / home office „pracuj odkudkoliv“. Náplň je správa platieb, fakturačné a účtovné podklady, evidencia dát a zákaznícka podpora e-mailom aj telefonicky. Angličtina nie je uvedená; požadovaná je istá čeština, administratívna skúsenosť, základná orientácia v účtovníctve a Excel/online nástrojoch. Online onboarding a absencia povinného onsite dojazdu spĺňajú `remote-ok` hard gate. Kandidát je pripravený na LIVE promotion, ale samotný `jobs-data.json` zostal fail-closed, kým nebude možné vykonať bezpečný lossless patch.
- Priame company careers: Slovak Telekom BA customer-support rola zostáva aktívna, ale je už LIVE; dedupe, bez novej promotion.
- LinkedIn public index: SupportYourApp remote support hity boli reálne preverené; Czech+English support vyžaduje B2 English a T3 support vyžaduje fluent English + vyšší technický tier, preto bez promotion.
- Upwork: WooCommerce `Data Entry Specialist` 35 USD fixed je rediscovery/low-value; ďalšie maintenance hity majú hard PHP/custom-code, fluent English alebo veľmi slabú sadzbu. Bez novej bezpečnej LIVE promotion.
- Reddit/komunity: čerstvé nálezy sú `[FOR HIRE]` ponuky freelancerov, nie employer hiring dopyty; 0 vhodných verified hiring hits.
- Facebook public index: **0 verified hits / limited**. Bez konkrétneho verejne overiteľného hiring postu a priameho linku sa nič nevykazuje ako hit. Autentizovaný Nexus/local ingestion zostáva backlog.

## Source audit — 7. 9. 2026 16:17
- Profesia: `checked`; fresh BA/remote discovery, bez novej unique promotion-grade delty.
- Priame company careers: `ok`; Telekom BA support aktívny, ale už LIVE → duplicate/rediscovery.
- LinkedIn Jobs: `limited`; SupportYourApp remote hity reálne dostupné, ale B2/fluent English alebo T3 skill mismatch.
- Worki: `checked`; bez novej vhodnej unique delty.
- Kariera/Zoznam: `checked`; bez suitable unique LIVE delty.
- Brigada.sk / Práca za rohom: `checked`; bez novej vhodnej BA/remote admin/web/support brigády.
- Tech/creative: `ok`; **1 nový unique promotion-ready hit BeiT/StartupJobs**, plus Pretlak rediscovery; WordPress Jobs support je language/technical mismatch.
- Freelance/Upwork: `ok`; relevantné WordPress/WooCommerce hity preverené, ale low-value/hard-dev/English/competition blokery; 0 LIVE promotion.
- Reddit/komunity: `limited`; 0 employer hiring hits, čerstvé výsledky sú [FOR HIRE].
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 16:17
- nové promotion-ready LIVE kandidáty: **1 (BeiT Technologie / StartupJobs)**
- persisted LIVE feed delta: **0**, zostáva **50** z dôvodu fail-closed full-file write rizika
- po bezpečnej promotion očakávaný feed: **51**
- nové unique verification kandidáty v tomto behu: **0**; BeiT je promotion-ready, nie low-confidence verification
- Facebook verified hits: **0**
- persisted LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**; po BeiT približne **47,1 % / 52,9 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 16:17
- `source-audit.json`: aktuálny veľký queue payload zostal fail-closed; nový run audit je zaznamenaný v MASTER a registri zdrojov, ale audit JSON sa nesmie prepísať neúplnou rekonštrukciou
- `jobs-data.json`: bez zmeny; BeiT čaká na lossless promotion write

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
- Rediscovered-result no-op classifier.
- Platform application-cost payback estimator.
- Troubleshooting-scope evidence ladder.
- Freelance client-history confidence band.
- Catalogue-work unit-cost estimator.
- Verification persistence debt counter.
- **Listing-city vs actual-workplace disambiguator** — pri remote ponukách oddeliť mesto z metadát jobboardu (napr. Praha) od skutočného pracoviska v canonical texte; explicitné „100 % remote / pracuj odkudkoliv“ má zabrániť falošnému `reject-distance`, ale iba ak zároveň chýba onsite povinnosť.
- **Accounting-light vs professional-accounting scope classifier** — rozlíšiť bežné párovanie platieb, fakturačné podklady a evidenciu od zodpovednosti za účtovníctvo/dane/uzávierky; zlepší ranking administratívnych rolí bez nesprávneho penalizovania ľahkej ekonomickej agendy.