# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 14. 9. 2026 22:40 CEST

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
- **Upwork — Test new WordPress plugin with live shop**, worldwide remote, **50 USD fixed**, entry level. Presný asset-fit: klient explicitne vyžaduje verejne dostupný živý WooCommerce shop a KomArena túto podmienku spĺňa. Scope je test pluginu + feedback/review, s možnosťou budúcej spolupráce. Mínus: 20–50 proposals, 1 hire a 1 interview už evidované. `locationEligibility: remote-ok`.
- **ALUFIX SLOVAKIA — Administratívny pracovník/čka, Analytik/čka**, Leškova, Bratislava, **od 1 900 EUR/mes.**, nástup 1.10.2026 alebo dohodou, občasný home office. Silný overlap s administratívou, Odoo, produktovým katalógom, online marketingom a procesnými zlepšeniami; pozícia je vhodná aj pre absolventa. Výrazné mínus: explicitná **angličtina B2** a požiadavka na CV + krátky sprievodný text v angličtine. `locationEligibility: ba-area`.
- **ATALIAN SK — Facility koordinátor / Administratívna podpora FM**, Einsteinova, Petržalka, **1 540 EUR základ + 200 EUR variabilná zložka**, nástup 1.10.2026. Veľmi dobrý mix administratívy a technického troubleshooting/koordinácie: CAFM Chastia, servisné zásahy, technická dokumentácia, dodávatelia, preventívna údržba. Vhodné aj pre absolventa; §21/22 a facility prax sú iba výhodou; bez verejne uvedeného cudzieho jazyka. `locationEligibility: ba-area`.
- **DHL Group — Administratívna podpora transportného tímu, 4 hodiny denne**, Diaľničná cesta, Senec, **804,50 EUR/mes. + 10 % mesačný bonus**, skrátený úväzok. Skenovanie faktúr, archivácia, supplier onboarding dokumenty, zakladanie dodávateľov do systému, pošta a kompletizácia prepravných dokumentov. `locationEligibility: ba-area`.
- **Hemmersbach — Onsite Technician L1 Bratislava**, canonical Job-Id **19971**, full-time Bratislava. Predchádzajúce canonical overenie potvrdilo aktívny detail s Apply now. `locationEligibility: ba-area`.
- **Upwork — Website & SEO Management 2026 – WooCommerce**, worldwide remote, **15–30 USD/h**, <30 h/týždeň, 6+ mesiacov. WooCommerce store/product management, plugin maintenance, on-page SEO a reporting; nejde o hard-development. 20–50 proposals ostáva výrazná pravdepodobnostná penalizácia. `locationEligibility: remote-ok`.
- **IKEA — Pracovník/čka kontaktného centra IKEA, popredajný servis**, Bratislava. Kandidát zostáva zachovaný z predchádzajúceho evidence setu. `locationEligibility: ba-area`.
- **IKEA — Pracovník/čka na oddelení Služby zákazníkom**, Bratislava, canonical job **354106**, zverejnené **21.8.2026**. Canonical detail bol v tomto behu znovu verejne čitateľný s aktívnym Apply signálom. `locationEligibility: ba-area`.

### Verification-needed mimo LIVE
- **Dotypos SK — Pracovník kontaktného centra (zákazníckeho servisu)**, Bratislava, Kariera index uvádza **od 1 500 EUR/mes.** Funkčne relevantné, ale v tomto behu bol dostupný iba category/index dôkaz; pred promotion treba full detailom overiť jazyky, požiadavky a aktuálnu aktivitu.

## Source audit — 14. 9. 2026 22:40 CEST
- Reálne prehľadaných **12 source families**: Profesia; priame firemné career/public ATS; LinkedIn Jobs; Worki; Kariera.sk/Zoznam; Brigada.sk; Služby zamestnanosti; Pretlak/StartupJobs/WordPress Jobs; Upwork/Freelancermap; verejne indexované Reddit/WordPress komunity; WordPress public community index; verejne indexované Facebook skupiny.
- Fresh/adjacent kandidáti: **9**; persisted LIVE promotions: **0**; existujúce/high-fit kandidáty reverified: **2**; promotion-ready mimo LIVE: **10**.
- **Profesia:** fresh BA WordPress/WooCommerce/admin/IT-support/customer-care discovery vykonaný; bez nového distinct promotion-grade výsledku.
- **Direct company careers / ATS:** IKEA job 354106 bol znovu verejne čitateľný a aktívny; bez silnejšieho nového distinct kandidáta.
- **LinkedIn:** Wolt Support Associate full-time aj part-time v Bratislave sú aktuálne indexované, ale obe vyžadujú minimálne B2 angličtinu; bez promotion.
- **Worki:** fresh BA admin/technical discovery vykonaný; verejné admin výsledky boli stale/filled alebo slabé.
- **Kariera/Zoznam:** Dotypos SK kontaktné centrum Bratislava od 1 500 EUR/mes. je verification-needed; iba category-level evidence, nie LIVE.
- **Brigada.sk:** fresh BA admin/e-shop/customer-support discovery vykonaný; bez nového overeného promotion-grade hitu.
- **Služby zamestnanosti:** aktuálny BA hit bol mimo rankingového profilu; bez promotion.
- **Pretlak/StartupJobs/WordPress Jobs:** fresh WordPress/WooCommerce/remote discovery vykonaný; bez distinct promotion-grade hitu.
- **Upwork/Freelancermap:** najsilnejší nový hit je **Test new WordPress plugin with live shop**, 50 USD fixed, worldwide remote, presná zhoda na existujúci živý KomArena WooCommerce shop; kvôli saturácii zostáva promotion-ready.
- **Reddit/WordPress komunity:** bez konkrétneho vhodného klientského dopytu pre remote zo Slovenska.
- **Facebook verejné skupiny:** **0 verified hits**, stav `limited`; bez konkrétneho verejne overiteľného hiring postu a priameho linku sa nič nepridáva. Authenticated Nexus/local ingestion ostáva backlog a nebol spustený.
- Fail-closed: existujúcich **56 LIVE** položiek ostáva nedotknutých; žiadny feed drop ani category loss.
- LIVE mix zostáva **Profesia-lineage 50,0 % / non-Profesia 50,0 %**.

## Backlog rozvoja
- **Prerequisite asset-match score** — porovnávať neobvyklé podmienky ponuky s aktívami, ktoré už kandidát reálne má alebo prevádzkuje (živý WooCommerce shop, WordPress admin, Home Assistant lab, vozidlo). Takto sa zvýraznia nízko-frikčné príležitosti, ktoré čisté keyword skóre prehliadne.
- **Category-index detail escalation SLA** — category/snippet-only kandidáta ukladať ako `verification-needed` s krátkym recheck SLA; promotion povoliť až po full detaile, ktorý potvrdí jazyk, požiadavky, aktivitu a lokalitu.
- **Source-family evidence TTL** — nastaviť rozdielny freshness TTL podľa source family a evidence surface; rýchlo meniace sa job boardy/freelance marketplace recheckovať skôr než stabilné employer pages.
- **Rejected-candidate recheck expiry** — rejection reason ukladať spolu s expiráciou; stabilné hard mismatchy ochladiť dlhšie, mutable dôvody recheckovať skôr.
- **Multi-constraint disqualifier extractor** — pri ponuke kombinujúcej viac hard/near-hard mismatchov persistovať kombinovaný rejection reason.
- **Category-page to detail verification queue** — sľubný titul/mzdu z category/index stránky automaticky zaradiť do fronty na full-detail verification pred promotion.
- **Canonical age vs activity split** — evidovať vek publikácie oddelene od aktuálneho `active/apply` dôkazu.
- **Language requirement evidence confidence** — evidovať, či je jazyk explicitne mandatory, preferred, inferovaný alebo absent.
- **Candidate state ledger** — per kandidát persistovať stable ID, stav, lastSeenAt, rejection reason a nextRecheckAt.
- **Effective hourly value normalizer with commute/application friction** — prepočítať formy odmeny na porovnateľnú efektívnu hodinovú hodnotu.
- **Promotion write-size preflight** — pred promotion do veľkého canonical feedu overiť kompletný round-trip a zachovanie count/hash.
- **Canonical list-membership auto-promotion queue** — high-fit kandidáta po opakovanom potvrdení zaradiť do prioritnej LIVE fronty.
- **Same-title/company refresh dedupe** — pri republiku rovnakej role zachovať stabilné ID a obnoviť evidence.
- **Freelance effective-pay floor** — fixed budget prepočítať na realistickú hodinovku po odhade hodín a platform fee.
- **Canonical vacancy-list membership gate** — pred promotion overiť aktívny employer/location list alebo explicitný apply signál.
- **Same-employer sibling role pivot** — pri stale/ambiguous role prehľadať aktuálne sibling roly zamestnávateľa.
- **Canonical detail recheck budget allocator** — rezervovať čas každého behu na full canonical detaily najsilnejších snippet hitov.
- **Application response-window decay tracker** — odhadovať reálne okno na reakciu podľa veku a aktivity.
- **Effective compensation normalizer** — porovnať mesačnú, hodinovú a freelance odmenu.
- **Company contact route enrichment** — zachytiť najrýchlejší overený spôsob reakcie.
- **Post-write promotion round-trip verification** — po zápise znovu načítať canonical feed a overiť JSON/count/stable ID.
- **Salary source-conflict resolver** — pri konflikte miezd držať autoritatívnu full-detail hodnotu.
- **Evidence surface quality score** — rozlišovať canonical detail, full board detail, snippet a category-only dôkaz.
- **Transactional promotion staging manifest** — pred zápisom uložiť stable ID, canonical URL a checksum required fields.
- **Promotion-ready aging alert** — evidovať počet behov kandidáta v promotion-ready bez LIVE.
- **Primary-source escalation queue** — high-fit mirror/job-board hit okamžite eskalovať na canonical employer zdroj.
- **Remote-country allowlist extractor** — extrahovať skutočný country/region allowlist z remote ponuky.
- **Cross-border contract feasibility gate** — overiť praktickú uzatvoriteľnosť zahraničného remote kontraktu zo Slovenska.
- **Compound shift-burden score** — spojiť zmenovosť/nočné/víkendy/onsite do jedného burden signálu.
- **English application-artifact gate** — odlíšiť anglické CV/cover letter od pracovnej jazykovej úrovne.
- **Application deadline confidence and urgency queue** — explicitné closing dates oddeliť od inferovaného expiry.
- **Application channel friction score** — evidovať účet, dlhý formulár, test, portfolio, fee a onboarding.
- **Source result saturation detector** — pri opakovaní výsledkov rotovať query vocabulary bez znižovania gateov.
- **Market-language role splitter** — oddeliť všeobecný support od market-specific rolí už pri discovery.
- **Source-query yield decay tracker** — trackovať zero-yield query patterny a rotovať wording/kategórie.
- **Freelance client-friction score** — spájať client history, active hires, proposal saturation, interviews a scope do win-probability signálu.
- Autentizovaný Facebook ingestion cez Nexus/local agent — backlog; automat ho sám nespúšťa.
- Import CRM backupu, source-success analytics, publishedAt/<24h priority, commute/distance, deadline alerts, company contact enrichment, duplicate cluster report, reply probability, GitHub Actions polling a cross-device sync zostávajú platné ďalšie smery.
