# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 14. 9. 2026 21:49 CEST

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
- Autoritatívny feed má **56 LIVE položiek**.
- LIVE mix: **Profesia-lineage 28/56 = 50,0 %**, mimo Profesia **28/56 = 50,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-14T06:18:46+02:00** — v tomto behu bez zmeny; existujúce položky neboli mazané ani znižované iba preto, že ich fresh discovery nevrátil.
- **Techfun s. r. o. — Elektro-technický špecialista pre e-shop**, Kopčianska 92A, Petržalka, 1 800–2 200 EUR/mes., ostáva veľmi silný technicko-e-shop fit. Angličtina A2; vhodné aj pre absolventa; `locationEligibility: ba-area`.
- **SCR interactive — Executive Assistant & Sales Support**, Šustekova 51, Petržalka, od 1 500 EUR/mes. + provízny systém, živnosť, flexibilný čas, po skúšobnej dobe HO 5 dní mesačne. Silný prienik administratívy, CRM/sales supportu, digitálneho marketingu, klientov, fakturačných podkladov a procesov. Cudzí jazyk nie je canonical požiadavka. `locationEligibility: ba-area`.
- **AGEL Lab — Administratívno-technická podpora pre laboratórium**, Údernícka 9, Petržalka, plný úväzok, 1 350 EUR/mes., nástup 1.10.2026/dohodou. `locationEligibility: ba-area`.
- **BKIS — Asistent/Asistentka sekcie Technickej podpory podujatí**, Vajnorská 135, Bratislava, od 1 400 EUR/mes., plný úväzok. `locationEligibility: ba-area`.
- **ORLEN — Asistent/Asistentka nákupu na Oddelení Shop & Gastro**, Bratislava, od 1 700 EUR/mes. + kvartálny bonus 20 %, 1 deň HO týždenne. B1 angličtina je mierny/stredný mínus. `locationEligibility: ba-area`.
- **ČSOB Operátor IT Service Desk-u** ostáva silný entry-level technický support v Bratislave; mierne pokročilá AJ a on-call po zaučení sú mínus, nie lokalitný blocker.
- **Trenujeme — Predajca na predajni a e-commerce asistent**, Račianska 31, Bratislava, ostáva pod stabilným LIVE ID. Novší verejný inzerát **O5349827** bol 14. 9. 2026 znovu overený: e-shop objednávky, produkty/popisy, sklad, reklamácie a zákaznícky servis, AJ A2. Rovnaký title+company sa nepridáva druhýkrát; pri najbližšom bezpečnom LIVE zápise sa má obnoviť evidence URL/verifiedAt pod existujúcim stabilným ID.

### Promotion-ready mimo LIVE zápisu
- **ALUFIX SLOVAKIA — Administratívny pracovník/čka, Analytik/čka**, Leškova, Bratislava, **od 1 900 EUR/mes.**, nástup 1.10.2026 alebo dohodou, občasný home office. Silný overlap s administratívou, Odoo, produktovým katalógom, online marketingom a procesnými zlepšeniami; pozícia je vhodná aj pre absolventa. Výrazné mínus: explicitná **angličtina B2** a požiadavka na CV + krátky sprievodný text v angličtine. `locationEligibility: ba-area`.
- **ATALIAN SK — Facility koordinátor / Administratívna podpora FM**, Einsteinova, Petržalka, **1 540 EUR základ + 200 EUR variabilná zložka**, nástup 1.10.2026. Veľmi dobrý mix administratívy a technického troubleshooting/koordinácie: CAFM Chastia, servisné zásahy, technická dokumentácia, dodávatelia, preventívna údržba. Vhodné aj pre absolventa; §21/22 a facility prax sú iba výhodou; bez verejne uvedeného cudzieho jazyka. `locationEligibility: ba-area`.
- **DHL Group — Administratívna podpora transportného tímu, 4 hodiny denne**, Diaľničná cesta, Senec, **804,50 EUR/mes. + 10 % mesačný bonus**, skrátený úväzok. Skenovanie faktúr, archivácia, supplier onboarding dokumenty, zakladanie dodávateľov do systému, pošta a kompletizácia prepravných dokumentov. `locationEligibility: ba-area`.
- **Hemmersbach — Onsite Technician L1 Bratislava**, canonical Job-Id **19971**, full-time Bratislava. Predchádzajúce canonical overenie potvrdilo aktívny detail s Apply now; v tomto behu sa čerstvo indexovala iba hlavná Hemmersbach career surface, preto sa nepredstiera nové job-detail overenie. `locationEligibility: ba-area`.
- **Upwork — Website & SEO Management 2026 – WooCommerce**, worldwide remote, **15–30 USD/h**, <30 h/týždeň, 6+ mesiacov. WooCommerce store/product management, plugin maintenance, on-page SEO a reporting; nejde o hard-development. Fresh discovery ho znovu našlo, ale 20–50 proposals ostáva výrazná pravdepodobnostná penalizácia. `locationEligibility: remote-ok`.
- **IKEA — Pracovník/čka kontaktného centra IKEA, popredajný servis**, Bratislava. Kandidát zostáva zachovaný z predchádzajúceho evidence setu. `locationEligibility: ba-area`.
- **IKEA — Pracovník/čka na oddelení Služby zákazníkom**, Bratislava, canonical job **354106**, zverejnené **21.8.2026**. Existujúci canonical evidence set zostáva zachovaný; v tomto behu sa nepredstiera nové job-detail overenie. `locationEligibility: ba-area`.

## Source audit — 14. 9. 2026 21:49 CEST
- Reálne prehľadaných **12 source families**: Profesia; priame firemné career/public ATS; LinkedIn Jobs; Worki; Kariera.sk/Zoznam; Brigada.sk; Služby zamestnanosti; Pretlak/StartupJobs/WordPress Jobs; Upwork/Freelancermap; verejne indexované Reddit/WordPress komunity; WordPress public community index; verejne indexované Facebook skupiny.
- Fresh/adjacent kandidáti: **10**; persisted LIVE promotions: **0**; existujúce/high-fit kandidáty reverified: **1**; promotion-ready mimo LIVE: **9**.
- **Profesia:** najlepší nový adjacent kandidát je ALUFIX SLOVAKIA — Administratívny pracovník/čka, Analytik/čka, Bratislava, 1 900 EUR/mes. Funkčne silný, ale B2 AJ + anglické CV/sprievodný text sú výrazný mínus, preto bez top promotion.
- **Direct company careers / ATS:** IKEA/Alza/Boels/ESET-oriented employer discovery prebehol; bez nového distinct canonical kandidáta silnejšieho než existujúci set.
- **LinkedIn:** ESET Customer Support Specialist Bratislava je aktívny a entry-level, ale požaduje dobrú písomnú a hovorenú angličtinu ideálne B2; základ od 1 250 EUR. Bez promotion.
- **Worki:** fresh BA admin/technical/driver discovery vykonaný; bez nového promotion-grade hitu.
- **Kariera/Zoznam:** fresh BA admin/support discovery vykonaný; bez nového distinct kandidáta, ktorý by prešiel rankingom.
- **Brigada.sk:** fresh BA admin/e-shop/customer-support discovery vykonaný; bez nového overeného promotion-grade hitu.
- **Služby zamestnanosti:** overená BA administratívna ponuka Vean Slovakian, ale uvedený základ 400 EUR/mes. je materiálne pod prahom radaru.
- **Pretlak/StartupJobs/WordPress Jobs:** fresh WordPress/WooCommerce/remote discovery vykonaný; bez nového distinct promotion-grade hitu.
- **Upwork/Freelancermap:** fresh WooCommerce/product-listing remote discovery vykonaný; bez nového kandidáta, ktorý by prebil existujúci promotion-ready freelance set.
- **Reddit/WordPress komunity:** aktuálny WordPress hiring post bol remote iba pre USA, preto `reject-distance`; ďalšie výsledky boli prevažne `FOR HIRE`, nie klientsky dopyt.
- **Facebook verejné skupiny:** **0 verified hits**, stav `limited`; bez konkrétneho verejne overiteľného hiring postu a priameho linku sa nič nepridáva. Authenticated Nexus/local ingestion ostáva backlog a nebol spustený.
- Fail-closed: existujúcich **56 LIVE** položiek ostáva nedotknutých; žiadny feed drop ani category loss.
- LIVE mix zostáva **Profesia-lineage 50,0 % / non-Profesia 50,0 %**.

## Backlog rozvoja
- **Source-family evidence TTL** — nastaviť rozdielny freshness TTL podľa source family a evidence surface; rýchlo meniace sa job boardy/freelance marketplace recheckovať skôr než stabilné employer pages, aby discovery neplytvalo časom a zároveň nevznikali stale activity claims.
- **Rejected-candidate recheck expiry** — rejection reason ukladať spolu s expiráciou. Stabilné hard mismatchy (napr. C1 jazyk) ochladiť dlhšie, ale mutable dôvody ako proposal saturation, mzda či remote policy recheckovať skôr.
- **Multi-constraint disqualifier extractor** — pri ponuke, ktorá kombinuje viac hard/near-hard mismatchov (napr. B2/C1 jazyk + anglické CV + 24/7 smeny + nadmerná požadovaná prax), persistovať kombinovaný rejection reason a ďalšie behy ju zbytočne nehodnotiť od nuly.
- **Category-page to detail verification queue** — sľubný titul/mzdu z category/index stránky automaticky zaradiť do fronty na full-detail verification požiadaviek pred promotion; eliminuje false positives typu CCI, kde atraktívny listing skrýva C1/C2 multilingual a 6+ rokov praxe.
- **Canonical age vs activity split** — evidovať vek publikácie oddelene od aktuálneho `active/apply` dôkazu, aby starší, ale stále otvorený canonical detail nebol nesprávne označený ako stale a neaktívny mirror sa naopak vyradil okamžite.
- **Language requirement evidence confidence** — pri každej jazykovej požiadavke evidovať, či je explicitne mandatory, iba preferred, inferovaná z application artifacts alebo úplne absent. Zníži to falošné penalizácie zo snippetov.
- **Candidate state ledger** — per kandidát persistovať stable ID, stav `seen/verified/promotion-ready/live/rejected`, `lastSeenAt`, rejection reason a `nextRecheckAt`; tým sa zníži opakované hodinové prehodnocovanie rovnakých kandidátov a sibling duplicity.
- **Effective hourly value normalizer with commute/application friction** — mesačné, part-time, hodinové a fixed-price ponuky prepočítať na porovnateľnú efektívnu hodinovú hodnotu podľa pracovných hodín, dojazdu a nákladov reakcie/platformy.
- **Promotion write-size preflight** — pred promotion do veľkého canonical feedu overiť, že connector dokáže round-tripnúť kompletný aktuálny súbor a zachovať count/hash; ak nie, kandidáta držať promotion-ready namiesto riskantného replacementu.
- **Canonical list-membership auto-promotion queue** — ak high-fit kandidát zostáva po viac behov súčasne na employer vacancy liste aj na aktívnom detail/apply surface, zaradiť ho do prioritnej fronty na LIVE zápis.
- **Same-title/company refresh dedupe** — keď firma republikuje tú istú rolu pod novým job-board ID, zachovať existujúce stabilné LIVE ID a obnoviť evidence/verifiedAt/publishedAt namiesto vytvorenia duplicity.
- **Freelance effective-pay floor** — pri remote zákazkách prepočítať fixed budget na realistickú hodinovku po odhade hodín, platform fee a komunikačnom overhead; funkčne silné, ale ekonomicky slabé zákazky automaticky prudko penalizovať.
- **Canonical vacancy-list membership gate** — pred promotion overiť, či individuálny ATS detail stále patrí do aktuálneho employer/location job listu alebo má iný explicitný active/apply signál.
- **Same-employer sibling role pivot** — keď high-fit rola vyzerá stale/inactive/ambiguous, okamžite prehľadať aktuálne sibling roly toho istého zamestnávateľa v rovnakej funkčnej family.
- **Canonical detail recheck budget allocator** — rezervovať pevnú časť každého behu na otvorenie full canonical detailov najsilnejších category/snippet hitov.
- **Application response-window decay tracker** — odhadovať, ako rýchlo sa zatvára reálne okno na reakciu podľa veku inzerátu, recruiter/client aktivity, proposal/interview countov a deadline.
- **Effective compensation normalizer** — mesačnú mzdu, hodinové brigády a IČO/freelance budget prepočítať na porovnateľnú efektívnu hodinovú hodnotu.
- **Company contact route enrichment** — pri high-fit ponuke zachytiť najrýchlejší overený spôsob reakcie: recruiter, hiring e-mail, priamy ATS formulár alebo firemný kontakt.
- **Post-write promotion round-trip verification** — po každom zápise promotion znovu načítať canonical `jobs-data.json` a overiť validné JSON, count delta a stable ID.
- **Salary source-conflict resolver** — pri rozdielnej mzde medzi canonical detailom, mirrorom a category/index výsledkom držať autoritatívnu full-detail hodnotu a naplánovať recheck.
- **Evidence surface quality score** — evidovať, či ide o canonical detail, plný job-board detail, indexed snippet alebo category-only dôkaz.
- **Transactional promotion staging manifest** — promotion-ready kandidáta pred zápisom uložiť so stable ID, canonical URL a checksumom required fields.
- **Promotion-ready aging alert** — pri high-fit kandidátovi evidovať počet po sebe idúcich behov, počas ktorých zostáva promotion-ready, ale nie LIVE.
- **Primary-source escalation queue** — ak high-fit kandidát príde cez mirror/job board, okamžite dohľadať canonical employer zdroj.
- **Remote-country allowlist extractor** — z remote ponúk extrahovať skutočný country/region allowlist a oddeliť ho od marketingového štítku `Remote`.
- **Cross-border contract feasibility gate** — pri zahraničných remote rolách overiť, či pracovný/DPP/B2B model možno prakticky uzavrieť s pracovníkom zo Slovenska.
- **Compound shift-burden score** — spojiť 24/7 prevádzku, trojzmennosť, nočné, víkendy a povinný onsite do jedného burden signálu.
- **English application-artifact gate** — zachytiť požiadavku na CV, cover letter alebo výberový proces v angličtine oddelene od pracovnej jazykovej úrovne.
- **Application deadline confidence and urgency queue** — explicitné closing dates oddeliť od inferovaného expiry a high-fit ponuky s blízkym deadline posúvať dopredu.
- **Application channel friction score** — evidovať náklady reakcie: účet, dlhý formulár, test, portfolio, platform fee alebo extra onboarding.
- **Source result saturation detector** — pri opakovaní rovnakých výsledkov rotovať query vocabulary/source subcategories bez znižovania gateov.
- **Market-language role splitter** — oddeliť všeobecný support od market-specific rolí už pri discovery.
- **Source-query yield decay tracker** — trackovať opakované zero-yield query patterny per source family a po niekoľkých neproduktívnych behoch rotovať wording/kategórie bez znižovania kvalitatívnych gateov.
- **Freelance client-friction score** — pri remote zákazkách spájať client history, active hires, proposal saturation, interview count a fixed-price scope do jedného win-probability signálu, aby keyword-perfect WooCommerce zákazky s nízkou praktickou šancou neprebíjali lepšie príležitosti.
- Autentizovaný Facebook ingestion cez Nexus/local agent — backlog; automat ho sám nespúšťa.
- Import CRM backupu, source-success analytics, publishedAt/<24h priority, commute/distance, deadline alerts, company contact enrichment, duplicate cluster report, reply probability, GitHub Actions polling a cross-device sync zostávajú platné ďalšie smery.