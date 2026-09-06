# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 6. 9. 2026 23:21 CEST

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

### Čerstvé zistenia 23:21
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Kariera/Zoznam, Brigada.sk, Pretlak/WordPress tech-creative, Upwork/freelance, Reddit/komunity a Facebook public index.
- **Žiadna nová bezpečná LIVE promotion.** LIVE feed zostáva 50 a fail-closed ochrana ostala zachovaná.
- WordPress Jobs aktuálne uvádza **11 otvorených pozícií**. Čerstvý **WPMU DEV WordPress Support Specialist** je síce globálne remote, ale vyžaduje fluent English, PHP, MySQL, HTML/CSS, WordPress hooks/filters a 40 h/týždeň; podľa jazykového a hard-skill gate nejde do LIVE ani verification promotion review.
- Priame firemné careers boli reálne preverené. **Websupport Customer Success Advisor** v Bratislave je stále aktívny a už je evidovaný vo verification; nejde o nový unique lead.
- Upwork verejný index vrátil WordPress/WooCommerce maintenance a troubleshooting výsledky, ale najrelevantnejšie boli rediscovery už evidovaných kandidátov. Queue preto nerástla.
- Reddit verejný index ukázal najmä `FOR HIRE` príspevky, nie nové konkrétne hiring dopyty; 0 verified hiring hits.
- Facebook public index: **0 verified hits / limited**. Bez konkrétneho verejne overiteľného hiring postu a priameho linku sa nič nevykazuje ako hit. Autentizovaný Nexus/local ingestion zostáva backlog.

## Source audit — 6. 9. 2026 23:21
- Profesia: `checked`; bez novej unique promotion-grade delty.
- Priame company careers: `ok`; 1 relevantný aktívny výsledok (Websupport), ale už evidovaný; 0 pridaných.
- LinkedIn Jobs: `limited`; bez novej suitable unique BA/remote delty.
- Worki: `checked`; bez novej vhodnej unique delty.
- Kariera/Zoznam: `checked`; bez novej suitable unique promotion-grade BA delty.
- Brigada.sk: `checked`; bez novej vhodnej BA/remote admin/web/support brigády.
- Tech/creative: `ok`; 1 relevantný remote WordPress support výsledok, vyradený pre fluent English + hard PHP/MySQL stack; 0 pridaných.
- Upwork/freelance: `ok`; relevantná maintenance rediscovery, 1 duplicate/už evidovaný, 0 nových verification prírastkov, 0 LIVE promotion.
- Reddit/komunity: `limited`; čerstvé viditeľné výsledky sú prevažne FOR HIRE, bez nového konkrétneho hiring dopytu.
- Facebook public index: `limited`, **0 verified hits**.

### Audit počty 23:21
- nové vhodné LIVE promotion: **0**
- LIVE feed delta: **0**, zostáva **50**
- nové unique významné verification kandidáty: **0**
- verification queue: **69 položiek**, zachovaná bez straty
- company-career relevantné hity: **1**, duplicate/už evidovaný
- tech/creative relevantné hity: **1**, vyradený pre jazyk/hard-skill mismatch
- freelance relevantné hity: **1 rediscovery**, duplicate/už evidovaný
- Facebook verified hits: **0**
- LIVE mix: Profesia **48,0 %**, non-Profesia **52,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `source-audit.json`: úspešne aktualizovaný; queue 69.

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
- **Source-query semantic drift monitor** — porovnávať zamýšľanú lokalitu/kategóriu discovery dotazu s reálnym rozdelením vrátených výsledkov; ak vyhľadávač začne vracať inú lokalitu alebo profesijnú kategóriu, family označiť ako degraded/limited a nevydávať to za plné pokrytie.
- **Low-yield source adaptive query rotator** — po opakovaných behoch bez novej unique delty automaticky rotovať bezpečné synonymá a podkategórie (napr. e-shop admin, CMS content, reklamácie, service desk, vodič B) v rámci rovnakej source family; zvyšuje coverage bez pridávania slabých výsledkov do feedu.
- **Micro-fix proof-of-skill mapper** — pri malých WordPress opravách automaticky mapovať konkrétne tasky (layout, responsive, plugin issue, Elementor) na existujúce dôkazy praxe/portfólio; zrýchli rozhodnutie, či má zmysel reagovať na entry-level microjob bez hard-dev scope.
- **Low-history client escrow-risk flag** — pri fixed-price freelance ponukách kombinovať client spend, hires, vek účtu a budget s rizikom nejasného scope; kandidát s veľmi slabou históriou zostane vo verification aj pri vysokom fit score, kým sa nepotvrdí rozumný milestone/escrow setup.
- **Public-index country-restriction prefilter** — ešte pred rankingom odhaliť roly označené ako „remote“, ktorých detail zároveň povoľuje prácu iba z konkrétnej cudzej krajiny; okamžite ich označiť `reject-distance` a neplytvať verification kapacitou.
- **Freelance starter-budget vs continuation-value split** — pri zákazkách typu malý landing page/fix + následná maintenance oddelene hodnotiť počiatočný fixed budget a realistickú hodnotu pokračovania; zabráni tomu, aby lacný trial task skreslil celý dlhodobý opportunity score.
- **Shift-window timezone normalizer** — pre remote roly previesť publikované UTC/US pracovné okná na Europe/Bratislava a vypočítať reálny večerný/nočný/víkendový burden; zrýchli vyradenie rolí, ktoré vyzerajú remote-friendly, ale prakticky majú neudržateľné časové zmeny.
- **Hard-dev contamination ratio for maintenance roles** — pri ponukách označených maintenance/support vypočítať podiel požiadaviek na custom PHP/MySQL/plugin dev/Git/server/DNS oproti bežným updates, content/admin a troubleshooting úlohám; zabráni promotion rolí, ktoré sa marketingovo tvária ako maintenance, ale reálne sú senior development.
- **Fixed-price microproject effective-hour ceiling** — z budgetu a minimálnej prijateľnej efektívnej sadzby odvodiť maximálny bezpečný čas na realizáciu; ak scope podľa dôkazov presiahne tento čas, microjob automaticky nepromovať ani pri vysokom skill fite.
- **Client interview saturation gate** — pri freelance ponukách kombinovať pomer `interviewing/proposals`, už uskutočnené hires a čas od publikovania; neskorú prihlášku s vysokou interview saturáciou potlačiť, aby sa neplytvalo časom a connectmi na prakticky obsadenú zákazku.
- **Expert-label vs task-scope contradiction detector** — porovnať platformové `Experience Level: Expert` s reálnym task scope; jednoduchú maintenance/admin rolu neodmietnuť iba pre label, ale vyžadovať dôkaz, že hard-dev burden je nízky a portfólio tasky pokrýva.
- **Audit-to-source-registry consistency checker** — po každom behu porovnať `source-audit.json` a `job-sources.json` podľa času auditu, kontrolovaných families, statusov a hitov; pri rozdiele zablokovať označenie auditu ako fresh, aby Source Radar neukazoval staršie alebo rozporné pokrytie.
- **Inactive-detail sibling-result isolation** — keď canonical detail je expired/obsadený, podobné aktívne ponuky z bočného panelu alebo related-jobs sekcie nesmú zdediť jeho názov, lokalitu ani stav; každý sibling musí mať vlastný canonical proof pred zaradením do verification.
- **Rediscovery-only run compression** — ak beh neprinesie žiadny nový unique kandidát a všetky relevantné hity sú duplicate/inactive/low-value, uložiť iba freshness, delta počty a zmenené source statusy bez rastu verification queue; šetrí zápisy a znižuje riziko poškodenia veľkých dátových súborov.
- **Discovery-to-persistence reconciliation ledger** — po každom behu porovnať všetky unique kandidáty označené ako významné s tým, čo sa reálne zapísalo do `jobs-data.json`/`source-audit.json`; nepersistovaný lead automaticky zaradiť do recovery fronty nasledujúceho behu, aby sa už neopakovala strata medzi discovery a zápisom.
- **Portfolio-ready maintenance response pack** — pri WordPress/Elementor maintenance leadoch automaticky zložiť krátky dôkazový balík z relevantných skúseností (content edits, responsive fixes, plugin troubleshooting, backup/staging) a odhadnúť čas prípravy reakcie; zrýchli odpoveď na silné leady bez automatického odosielania.
- **Budget-period ambiguity detector** — pri long-term/fixed-price freelance roliach rozlíšiť, či zobrazený budget znamená mesačnú odmenu, prvý milestone alebo celý kontrakt; kým obdobie nie je explicitné, nepoužiť sumu ako čistú mesačnú hodnotu ani kandidáta automaticky nepromovať.
- **Theme-builder portability score** — pri Divi/Elementor/Gutenberg/WPBakery zákazkách mapovať spoločné zručnosti (layout, responsive, content, forms, CSS) a oddeliť ich od builder-specific know-how; umožní realisticky ohodnotiť prenositeľnosť skúseností bez tvrdenia, že konkrétny builder už bol používaný.
- **Rejected-skill fingerprint cache** — pri opakovane sa objavujúcich remote WordPress support roliach ukladať hash explicitných hard mismatchov (napr. fluent English + PHP/MySQL + 40 h); pri ďalšom behu kandidáta rýchlo rozpoznať ako nezmenený reject bez opakovaného hlbokého hodnotenia.
- **Rediscovery-only source write minimizer** — keď nový beh neprinesie unique kandidáta ani materiálnu zmenu, aktualizovať len audit freshness/source evidence a MASTER backlog bez prepisovania `jobs-data.json`; znižuje počet write operácií a riziko konfliktov pri hodinových behoch.
