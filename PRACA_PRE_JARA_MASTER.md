# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 14. 9. 2026 05:18 CEST

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
- **Malacky sú explicitne povolené `ba-area`**. Čas dojazdu môže znížiť ranking, ale nesmie meniť lokalitný enum.

### Negatívne filtre
- AJ A2 preferovaná; B1 mierny/stredný mínus; B2/C1 výrazný mínus.
- Povinný ďalší cudzí jazyk, hard PHP/fullstack/Laravel/React/Vue, pokročilé Linux/Docker/API alebo povinná špecializovaná kvalifikácia bez dôkazu praxe = silná penalizácia alebo hard gate.
- Vodičské roly: povinné BE/C/C+E, tachografová karta alebo pravidelné diaľkové/medzinárodné trasy sú hard mismatch.
- Lokalita BA/okolie alebo overený remote/HO je hard gate, nie bonus.
- Agregátor/repost nesmie prebiť priamy firemný zdroj.

## Aktuálny stav LIVE
- Autoritatívny feed má **52 LIVE položiek**.
- LIVE mix: **Profesia 25/52 = 48,1 %**, mimo Profesia **27/52 = 51,9 %**.
- `jobs-data.json.updatedAt`: **2026-09-12T22:58:46+02:00**.
- Posledná persisted LIVE promotion je **Ovečkárna — Brigáda zákaznícka podpora CZ/SK**, remote zo Slovenska/práca odkiaľkoľvek, 160 Kč/h podľa Prace.cz mirroru, Po–Pi 08:00–12:00; `locationEligibility: remote-ok`.
- **Techfun s. r. o. — Elektro-technický špecialista pre e-shop**, Kopčianska 92A, Petržalka, 1 800–2 200 EUR/mes., ostáva veľmi silný technicko-e-shop fit. Angličtina A2; vhodné aj pre absolventa; `locationEligibility: ba-area`.
- **ČSOB Operátor IT Service Desk-u** ostáva silný entry-level technický support v Bratislave; mierne pokročilá AJ a on-call po zaučení sú mínus, nie lokalitný blocker.
- **AGEL Lab — Administratívno-technická podpora pre laboratórium**, Údernícka 9, Petržalka, plný úväzok, 1 350 EUR/mes., nástup 1.10.2026/dohodou. Predchádzajúce priame overenie potvrdilo administratívu, LIS, reporty, dokumentáciu, e-mail/telefón a objednávanie materiálu; bez verejne uvedeného cudzieho jazyka. `locationEligibility: ba-area`. **Silný promotion-ready kandidát.**
- **BKIS — Asistent/Asistentka sekcie Technickej podpory podujatí**, Vajnorská 135, Bratislava, od 1 400 EUR/mes., plný úväzok. Predchádzajúci verejný detail uvádza administratívnu podporu technickej sekcie, dodávateľov, objednávky/faktúry, kalendár, dochádzku, logistiku a vodičák B; jazyk iba slovenčina. `locationEligibility: ba-area`. **Silný promotion-ready kandidát**, pričom canonical employer page ešte treba dohľadať podľa direct-source preference.
- **NATEK — Salesforce CRM Support Manager** je síce remote, ale senior Salesforce operations/governance scope; bez promotion.
- **SupportYourApp** remote support zostáva mimo ranking kvôli fluent/C1 English; technické varianty navyše vyžadujú T3/infra scope.
- **Upwork** naďalej prináša presné WooCommerce/product-listing zhody, ale aktuálne výsledky padajú na nízkej ekonomike, vysokej konkurencii, existujúcich hires/interviews alebo silnejšej písomnej AJ.

## Source audit — 14. 9. 2026 05:18 CEST
- Reálne prehľadaných **12 source families**: Profesia; priame firemné career/public ATS; LinkedIn Jobs; Worki; Kariera.sk/Zoznam; Brigada.sk; Pretlak; StartupJobs; Upwork; verejne indexované Reddit/WordPress komunity; verejne indexované Facebook skupiny; broad public company-career discovery.
- Fresh/adjacent kandidáti: **10**; persisted LIVE promotions v tomto zápise: **0**.
- Profesia: bez nového promotion-grade hitu vo verejnom indexe.
- Direct company/public ATS: AGEL/BKIS a broad public career discovery boli prehľadané; bez nového material-change canonical hitu, preto sa staršie promotion-ready položky nefalošne neoznačili ako čerstvo overené.
- LinkedIn: TalentPop German+English je closed; Marlink indexed variant je no longer accepting; SupportYourApp vyžaduje fluent/C1 English alebo silnejší technical scope.
- Worki: aktuálne surfacuje Devínska Nová Ves sklad/vodič približne 1 273–1 600 EUR; lokalita spĺňa BA-area, ale fyzická/skladová záťaž ho drží pod silnejšími existujúcimi rolami.
- Kariera/Zoznam: čerstvá DENIMA administratíva vyžaduje telefonickú komunikáciu v angličtine/ukrajinčine/ruštine/turečtine; vodičské hity padajú na C/C+E, medzinárodných trasách, nočnej práci alebo inom hard mismatchi.
- Brigada.sk: bez konkrétneho promotion-grade verejného hitu.
- Pretlak: bez nového target-scope verejného hitu.
- StartupJobs: 100 % remote Customer Support Representative detail je explicitne expired/not current.
- Upwork: viacero WooCommerce/e-commerce VA hitov, ale nízke budgety, vysoké proposal counts, existujúce hires/interviews, expert scope alebo written-English gate zabránili promotion.
- Reddit/WordPress komunity: surfaced WooCommerce shipping-integration hiring post je z roku 2025 a hard development/API/Laravel scope; **0 current promotion-grade hits**.
- Facebook verejné skupiny: **0 verified hits**, stav `limited`; bez konkrétneho verejne overiteľného postu a priameho linku sa nič nepridáva. Authenticated Nexus/local ingestion ostáva backlog a nebol spustený.
- LIVE feed zostáva **52**; Profesia **25 = 48,1 %**, non-Profesia **27 = 51,9 %**. Fail-closed: existujúce položky sa nemažú len preto, že ich aktuálny sweep nenašiel.

## Backlog rozvoja
- **Evidence surface quality score** — pri každom discovery hite evidovať, či ide o canonical detail, plný job-board detail, indexed snippet alebo category-only dôkaz. Ranking/freshness nesmie dôverovať tenkému snippet dôkazu rovnako ako canonical detailu; zníži false-positive „čerstvé“ ponuky.
- **Transactional promotion staging manifest** — promotion-ready kandidáta pred zápisom do `jobs-data.json` uložiť so stable ID, canonical URL a checksumom required fields do staging manifestu; ďalší bezpečný atomický write ho vie povýšiť bez rediscovery alebo rizika partial replacementu.
- **Promotion-ready aging alert** — pri high-fit kandidátovi evidovať počet po sebe idúcich behov, počas ktorých zostáva promotion-ready, ale nie LIVE; po prekročení limitu vynútiť v tom istom behu rozhodnutie promote alebo explicitný blocker s dôkazom. Rieši strácanie silných ponúk medzi auditom a feedom.
- **Primary-source escalation queue** — ak high-fit kandidát príde cez mirror/job board, okamžite ho zaradiť do fronty na dohľadanie canonical employer zdroja ešte v tom istom behu. Skracuje verifikáciu a zvyšuje direct-source preference.
- **Remote-country allowlist extractor** — z remote ponúk extrahovať skutočný country/region allowlist a oddeliť ho od marketingového štítku `Remote`.
- **Cross-border contract feasibility gate** — pri zahraničných remote rolách overiť, či pracovný/DPP/B2B model možno prakticky uzavrieť s pracovníkom zo Slovenska.
- **Compound shift-burden score** — spojiť 24/7 prevádzku, trojzmennosť, nočné, víkendy a povinný onsite do jedného burden signálu.
- **English application-artifact gate** — zachytiť požiadavku na CV, cover letter alebo výberový proces v angličtine oddelene od pracovnej jazykovej úrovne.
- **Application deadline confidence and urgency queue** — explicitné closing dates oddeliť od inferovaného expiry a high-fit ponuky s blízkym deadline posúvať dopredu.
- **Application channel friction score** — evidovať náklady reakcie: účet, dlhý formulár, test, portfolio, platform fee alebo extra onboarding.
- **Source result saturation detector** — pri opakovaní rovnakých výsledkov rotovať query vocabulary/source subcategories bez znižovania gateov.
- **Market-language role splitter** — oddeliť všeobecný support od Spain/Sweden/Hungary a podobných market-specific rolí už pri discovery.
- Autentizovaný Facebook ingestion cez Nexus/local agent — backlog; automat ho sám nespúšťa.
- Import CRM backupu, source-success analytics, publishedAt/<24h priority, commute/distance, deadline alerts, company contact enrichment, duplicate cluster report, reply probability, GitHub Actions polling a cross-device sync zostávajú platné ďalšie smery.