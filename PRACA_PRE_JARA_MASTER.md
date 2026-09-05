# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 5. 9. 2026 15:08 CEST

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

### Čerstvé zistenia 15:08
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Kariera/Zoznam + ÚPSVR mirror, tech/creative (Pretlak + StartupJobs + WordPress Jobs), Upwork/freelance, Reddit/komunity a Facebook public index.
- Kariera/Zoznam má čerstvé BA/okolie výsledky; **DAŇOVÁ SOVA – Administratívny pracovník, Pezinok, od 990 EUR** prechádza lokalitou, ale neprešiel pay/priority gate. Ďalšie dnešné BA výsledky nevytvorili lepšiu promotion-grade zhodu.
- Upwork verejný Slovak feed stále uvádza **59 open Slovakian remote jobs**; bez novej WordPress/WooCommerce/admin zákazky s dostatočným fit/ROI na promotion.
- Reddit r/wordpressjobs verejne indexuje nový všeobecný dopyt **„I'm looking for a website creator“**, ale bez dostatočného verejného scope, budgetu a kvalifikačných podmienok; zostáva iba discovery signal, nie Job Radar hit.
- LinkedIn verejná indexácia ostáva `limited`; bez bezpečného nového SK/BA promotion kandidáta.
- Worki a Brigada.sk reálne preverené; bez nového promotion-grade hitu.
- Pretlak/StartupJobs/WordPress Jobs preverené; bez novej bezpečnej promotion-grade zhody.
- Facebook public index: **0 verified hits / limited**. Bez konkrétneho verejného postu a priameho linku sa nič nezapisuje ako hit; autentizovaný Nexus/local ingestion zostáva backlog.

## Source audit — 5. 9. 2026 15:08
- Profesia: `checked`; bez novej unique promotion-grade delty.
- Priame company careers: `checked`; bez novej vhodnej unique LIVE delty.
- LinkedIn Jobs: `limited`; verejná indexácia preverená, bez bezpečného nového SK/BA promotion kandidáta.
- Worki: `checked`; bez nového promotion-grade hitu.
- Brigada.sk: `checked`; bez nového promotion-grade hitu.
- Kariera/Zoznam + ÚPSVR mirror: `ok`; čerstvé BA/okolie výsledky dostupné, ale bez promotion po fit/pay gate.
- Pretlak / StartupJobs / WordPress Jobs: `checked`; bez novej vhodnej promotion-grade zhody.
- Upwork/freelance: `ok`; Slovak feed verejne dostupný, 59 jobs, ale bez novej bezpečnej promotion-grade delty.
- Reddit/komunity: `limited`; 1 nový všeobecný hiring signal, 0 promotion-grade verified hits.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 15:08
- nové vhodné LIVE promotion: **0**
- LIVE feed delta: **0**, zostáva **50**
- nové unique významné verification kandidáty: **0**
- Kariera/Zoznam relevantné čerstvé BA/okolie kandidáty: **1+**, bez promotion po fit/pay gate
- Upwork Slovak verejný feed: **59 jobs** indexovaných; bez novej promotion-grade zhody v prioritných smeroch
- Reddit public hiring signals: **1**, promotion-grade **0**
- Facebook verified hits: **0**
- LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `source-audit.json`: aktuálny veľký audit má 58-položkovú verification queue; dostupný konektor vie celý obsah prečítať segmentovane, ale write API vyžaduje kompletný replacement. Kým sa bezpečne neprevedie celá queue bez jedinej straty, platí FAIL-CLOSED a audit sa nesmie skrátiť.

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
- **Public hiring scope sufficiency gate** — komunitný alebo sociálny dopyt sa nesmie dostať do verification/LIVE len na základe titulku „hľadám webára“; vyžadovať minimálne scope + odmenu/budget alebo kontakt + jasný remote/lokalitný dôkaz, čím sa odstránia low-information leady a šetrí čas pri manuálnom overovaní.
- **Local low-pay opportunity suppression floor** — pri BA/okolie admin/back-office rolách pod nastaveným mzdovým prahom automaticky znížiť discovery prioritu, ak zároveň nejde o veľmi silný kariérny most, krátku brigádu s vysokou hodinovkou alebo výrazný web/IT skill-match; znižuje zahltenie feedu slabými lokálnymi ponukami.
