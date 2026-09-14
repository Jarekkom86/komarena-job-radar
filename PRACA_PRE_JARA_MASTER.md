# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 14. 9. 2026 12:10 CEST

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
- **AGEL Lab — Administratívno-technická podpora pre laboratórium**, Údernícka 9, Petržalka, plný úväzok, 1 350 EUR/mes., nástup 1.10.2026/dohodou. Priama AGEL kariéra bola znovu overená ako aktívna; bez verejne uvedeného cudzieho jazyka. `locationEligibility: ba-area`.
- **BKIS — Asistent/Asistentka sekcie Technickej podpory podujatí**, Vajnorská 135, Bratislava, od 1 400 EUR/mes., plný úväzok. Administratívna podpora technickej sekcie, dodávatelia, rozpočty, objednávky/faktúry, kalendár, dochádzka, logistika a vodičák B; jazyk iba slovenčina. `locationEligibility: ba-area`.
- **ORLEN — Asistent/Asistentka nákupu na Oddelení Shop & Gastro**, TOWER 5, Kalinčiakova, Bratislava, od 1 700 EUR/mes. + kvartálny bonus 20 %, 1 deň HO týždenne. Vhodné aj pre absolventa; B1 angličtina je mierny/stredný mínus, nie hard gate. `locationEligibility: ba-area`.
- **ČSOB Operátor IT Service Desk-u** ostáva silný entry-level technický support v Bratislave; mierne pokročilá AJ a on-call po zaučení sú mínus, nie lokalitný blocker.
- **Trenujeme — Predajca na predajni a e-commerce asistent**, Račianska 31, Bratislava, ostáva v LIVE pod stabilným ID. Novší verejný inzerát O5349827 bol 14. 9. reverified: part-time/živnosť, 60–120 h mesačne, e-shop objednávky, sklad, reklamácie a zákaznícky servis. Rovnaký title+company sa preto nepridáva druhýkrát.

### Promotion-ready mimo LIVE zápisu
- **IKEA — Pracovník/čka kontaktného centra IKEA, popredajný servis**, Bratislava, job ID **355434**. Aktuálny IKEA Bratislava vacancy list ho 14. 9. 2026 stále uvádza medzi otvorenými Customer Relations pozíciami. Profesia mirror potvrdzuje zverejnenie 8. 9. 2026, full-time, od 1 260 EUR brutto, občasný/čiastočný home office, bez povinnej praxe a angličtinu iba ako výhodu. `locationEligibility: ba-area`.
- **Hemmersbach — Onsite Technician L1 Bratislava**, canonical Job-Id **19971**, full-time Bratislava. Canonical detail bol 14. 9. 2026 znovu otvorený a stále obsahuje aktívne `Apply now`; lokálna/remote desktop podpora, inbound support, HW/SW/aplikácie a ticketing. Požiadavka: 18 mesiacov IT praxe alebo ekvivalent; canonical detail neuvádza povinný cudzí jazyk. `locationEligibility: ba-area`.
- Starší IKEA job ID **354106 – Služby zákazníkom** sa nepovažuje za promotion-ready bez aktuálneho list-membership/active signálu.

## Source audit — 14. 9. 2026 12:10 CEST
- Reálne prehľadaných **12 source families**: Profesia; priame firemné career/public ATS; LinkedIn Jobs; Worki; Kariera.sk/Zoznam; Brigada.sk; Pretlak; StartupJobs; WordPress Jobs; Upwork; verejne indexované Reddit/WordPress komunity; verejne indexované Facebook skupiny.
- Fresh/adjacent kandidáti: **15**; persisted LIVE promotions: **0**; existujúce/high-fit kandidáty reverified: **2**; promotion-ready mimo LIVE zápisu: **2**.
- **Profesia:** IKEA O5354960 ostáva čerstvá a aktívna, ale pri rovnakom jobe má prednosť aktuálny priamy IKEA vacancy list. Žiadna ďalšia distinct nová Profesia rola neprekonala existujúce LIVE kandidáty.
- **Direct company careers / ATS:** IKEA 355434 potvrdená v aktuálnom zozname Bratislava jobs; Hemmersbach 19971 je aktívny canonical kandidát s Apply now.
- **LinkedIn:** fresh Bratislava support/e-commerce indexing vykonaný; bez nového distinct promotion-grade hitu.
- **Worki:** fresh BA admin/technical/e-shop query vykonaný; bez nového promotion-grade hitu.
- **Kariera/Zoznam:** fresh BA admin/customer-support/e-shop query vykonaný; bez nového promotion-grade hitu.
- **Brigada.sk:** fresh BA admin/customer-support/e-shop query vykonaný; 0 vhodných konkrétnych fresh hitov.
- **Pretlak:** fresh Bratislava/remote WordPress/WooCommerce/e-commerce/support query vykonaný; 0 promotion-grade hitov.
- **StartupJobs:** Elasticr IT Support Specialist L2 sa objavil ako Remote/On-site/Hybrid s pracoviskom Havlíčkův Brod. Ponuka explicitne nepotvrdzuje vykonávanie zo Slovenska bez pravidelnej dochádzky a scope je L2/root-cause support, preto `reject-distance`/hard-skill hold, nie LIVE.
- **WordPress Jobs:** fresh WordPress/WooCommerce support/content query vykonaný; bez vhodného non-hard-development kandidáta.
- **Upwork:** 8 relevantných/adjacent e-commerce/WooCommerce výsledkov; 0 promoted. Funkčne presné roly padajú na nízkej efektívnej odmene, existujúcich hires/interviews, proposal saturation, silnej angličtine/francúzštine alebo country-targetingu. Existujúci WooCommerce Product Listing kandidát ostáva aktívny, ale je už saturovaný.
- **Reddit/WordPress komunity:** verejné výsledky sú prevažne FOR HIRE/self-promotion alebo US-only hard-development hiring; bez vhodného klientského dopytu pre Slovensko.
- **Facebook verejné skupiny:** **0 verified hits**, stav `limited`; bez konkrétneho verejne overiteľného hiring postu a priameho linku sa nič nepridáva. Authenticated Nexus/local ingestion ostáva backlog a nebol spustený.
- Fail-closed: `jobs-data.json` zostal na **56 LIVE položkách**, bez poklesu feedu alebo category loss.
- LIVE mix zostáva **Profesia-lineage 50,0 % / non-Profesia 50,0 %**.

## Backlog rozvoja
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
- Autentizovaný Facebook ingestion cez Nexus/local agent — backlog; automat ho sám nespúšťa.
- Import CRM backupu, source-success analytics, publishedAt/<24h priority, commute/distance, deadline alerts, company contact enrichment, duplicate cluster report, reply probability, GitHub Actions polling a cross-device sync zostávajú platné ďalšie smery.
