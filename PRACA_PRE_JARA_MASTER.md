# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 5. 9. 2026 16:06 CEST

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

### Čerstvé zistenia 16:06
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Kariera/Zoznam, tech/creative (Pretlak), Upwork/freelance, Reddit/komunity a Facebook public index.
- Kariera/Zoznam dnes ukazuje **Executive Support Specialist, Bratislava, 1 500–1 600 EUR**, ale ide o už evidovaný verification kandidát s AJ B2, preto bez LIVE promotion. Dnešný skladový pracovník Bratislava za 1 273 EUR je lokálne platný, ale fyzická trojzmenná práca a slabší plat neprechádzajú rankingom.
- Slovak Telekom direct careers potvrdzuje existujúci **Špecialista/Špecialistka podpory zákazníkov** v Bratislave s čiastočným home office; ide o už existujúcu LIVE položku, nie novú deltu.
- Telekom má aj Junior DevOps za 2 000 EUR, ale scope je software engineering/DevOps/cloud a nesedí na hard-development gate.
- Alza direct careers potvrdzuje existujúci AlzaBox Špecialista v Bratislave a technika automatizácie v Bernolákove; prvý je už LIVE, druhý vyžaduje technickejší automation scope a nebol promotionovaný.
- LinkedIn verejná indexácia je `limited`; čerstvý INFUSE B2B Content Writer remote contract nie je prioritný web/admin/support fit.
- Worki, Brigada.sk a Pretlak boli reálne preverené bez novej promotion-grade delty.
- Upwork/freelance discovery bolo reálne preverené; bez novej bezpečnej WordPress/WooCommerce/admin delty lepšej než existujúca verification queue.
- Reddit/WordPress komunita bola verejne preverená; bez nového konkrétneho hiring dopytu s dostatočným scope/budget dôkazom.
- Facebook public index: **0 verified hits / limited**. Bez konkrétneho verejného postu a priameho linku sa nič nezapisuje ako hit; autentizovaný Nexus/local ingestion zostáva backlog.

## Source audit — 5. 9. 2026 16:06
- Profesia: `checked`; bez novej unique promotion-grade delty.
- Priame company careers: `ok`; Telekom/Alza verejne dostupné, relevantné výsledky existujú, ale nové výsledky sú už LIVE/duplicitné alebo mimo skill gate.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez bezpečného nového SK/BA promotion kandidáta.
- Worki: `checked`; bez nového promotion-grade hitu.
- Brigada.sk: `checked`; bez nového promotion-grade hitu.
- Kariera/Zoznam: `ok`; čerstvé BA výsledky dostupné, ale bez promotion po language/pay/fit gate.
- Pretlak / tech-creative: `checked`; bez novej vhodnej promotion-grade zhody.
- Upwork/freelance: `checked`; preverené, bez novej promotion-grade delty v prioritných smeroch.
- Reddit/komunity: `limited`; 0 promotion-grade verified hiring hits.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 16:06
- nové vhodné LIVE promotion: **0**
- LIVE feed delta: **0**, zostáva **50**
- nové unique významné verification kandidáty: **0**
- Kariera/Zoznam relevantné čerstvé BA kandidáty: **2+**, bez promotion po language/pay/fit gate
- company careers relevantné potvrdené výsledky: **3+**, nové unique promotion **0**
- Facebook verified hits: **0**
- LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `source-audit.json`: konektor ho vie kompletne prečítať cez response resource a verification queue má 58 položiek. Write API však vyžaduje kompletný replacement jedným payloadom; pri tomto behu sa audit nepodarilo bezpečne prepísať bez rizika poškodenia queue, preto zostáva FAIL-CLOSED. Potrebný je bezpečný patch/transaction writer.

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
- **Atomic audit queue patch writer** — umožniť meniť iba `runSummary`, `sources`, `liveMix` a `writeStatus` bez serializácie celej 58-položkovej verification queue; zápis musí pred commitom overiť pôvodný SHA a počet/ID queue položiek, aby audit prestal zlyhávať na veľkom replacement payloadu.
- **Same-day duplicate promotion shield** — ukladať canonical URL + normalized title/company fingerprint nových výsledkov na 24 hodín a pri opakovaných hodinových behoch okamžite rozlíšiť „nový hit“ od už LIVE/verification kandidáta; zníži opakované overovanie Telekom/Alza/Grafton a uvoľní čas pre non-Profesia discovery.
