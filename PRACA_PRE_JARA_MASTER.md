# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 14. 9. 2026 08:15 CEST

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
- `jobs-data.json.updatedAt`: **2026-09-14T06:18:46+02:00** — v tomto behu bez zmeny, pretože nevznikol nový kandidát, ktorý by prešiel celý promotion gate.
- **Techfun s. r. o. — Elektro-technický špecialista pre e-shop**, Kopčianska 92A, Petržalka, 1 800–2 200 EUR/mes., ostáva veľmi silný technicko-e-shop fit. Angličtina A2; vhodné aj pre absolventa; `locationEligibility: ba-area`.
- **SCR interactive — Executive Assistant & Sales Support**, Šustekova 51, Petržalka, od 1 500 EUR/mes. + provízny systém, živnosť, flexibilný čas, po skúšobnej dobe HO 5 dní mesačne. Silný prienik administratívy, CRM/sales supportu, digitálneho marketingu, klientov, fakturačných podkladov a procesov. Cudzí jazyk nie je canonical požiadavka. `locationEligibility: ba-area`.
- **AGEL Lab — Administratívno-technická podpora pre laboratórium**, Údernícka 9, Petržalka, plný úväzok, 1 350 EUR/mes., nástup 1.10.2026/dohodou. Priama AGEL kariéra potvrdzuje administratívu, LIS, reporty, dokumentáciu, e-mail/telefón a objednávanie materiálu; bez verejne uvedeného cudzieho jazyka. `locationEligibility: ba-area`.
- **BKIS — Asistent/Asistentka sekcie Technickej podpory podujatí**, Vajnorská 135, Bratislava, od 1 400 EUR/mes., plný úväzok. Administratívna podpora technickej sekcie, dodávatelia, rozpočty, objednávky/faktúry, kalendár, dochádzka, logistika a vodičák B; jazyk iba slovenčina. `locationEligibility: ba-area`.
- **ORLEN — Asistent/Asistentka nákupu na Oddelení Shop & Gastro**, TOWER 5, Kalinčiakova, Bratislava, od 1 700 EUR/mes. + kvartálny bonus 20 %, 1 deň HO týždenne. Vhodné aj pre absolventa; B1 angličtina je mierny/stredný mínus, nie hard gate. `locationEligibility: ba-area`.
- **ČSOB Operátor IT Service Desk-u** ostáva silný entry-level technický support v Bratislave; mierne pokročilá AJ a on-call po zaučení sú mínus, nie lokalitný blocker.
- **Upwork** naďalej prináša presné WooCommerce/product-listing zhody, ale aktuálne výsledky padajú na nízkej ekonomike, jazykovom mismatche, existujúcich hires/interviews alebo vysokej saturácii.

## Source audit — 14. 9. 2026 08:15 CEST
- Reálne prehľadaných **13 source families**: Profesia; priame firemné career/public ATS; LinkedIn Jobs; Brigada.sk; Worki; Kariera.sk/Zoznam; Pretlak; StartupJobs; WordPress Jobs; Upwork; Freelancermap; verejne indexované Reddit/WordPress komunity; verejne indexované Facebook skupiny.
- Relevantní/adjacent kandidáti: **12**; persisted LIVE promotions v tomto zápise: **0**.
- Profesia, direct-company, LinkedIn, Brigada.sk a Worki boli reálne vyhľadané; v tomto behu bez nového promotion-grade výsledku s dostatočným full-detail dôkazom.
- Kariera/Zoznam: Cleaning 24, INTERNATIONAL CONSTRUCTION AB a DENIMA admin roly padajú na povinných cudzích jazykoch; Caspian admin je lokálny, ale iba 950 EUR/mes. a výrazne slabší než existujúce LIVE možnosti; Naturzon e-shop support je Poprad onsite a padá na distance gate; Zenit e-commerce je explicitne neaktívny. Grafton office/admin výsledky boli iba category-level snippets, preto bez promotion.
- Pretlak, StartupJobs a WordPress Jobs boli skutočne prehľadané; bez čerstvého non-hard-development kandidáta, ktorý by prešiel celý gate.
- Upwork: WordPress/Shopify VA je iba 7 USD fixed; WooCommerce listing s francúzštinou je 3–5 USD/h; 50–75 product listing job už má 1 hire + 4 interviews; ďalší 50-product upload má hire; WooCommerce CSV/data-entry je iba 35 USD fixed pri 20–50 proposals. Bez promotion.
- Freelancermap bol skutočne vyhľadaný; bez konkrétneho promotion-grade verejne indexovaného projektu.
- Reddit/WordPress komunity: jediný konkrétny WooCommerce VA hiring hit bol starý z februára 2026 a len 2–4 USD/h, preto nie fresh promotion candidate.
- Facebook verejné skupiny: **0 verified hits**, stav `limited`; bez konkrétneho verejne overiteľného hiring postu a priameho linku sa nič nepridáva. Authenticated Nexus/local ingestion ostáva backlog a nebol spustený.
- Fail-closed: `jobs-data.json` zostal na **56 LIVE položkách**, bez mazania alebo category loss.
- LIVE mix zostáva **Profesia-lineage 50,0 % / non-Profesia 50,0 %**.

## Backlog rozvoja
- **Canonical detail recheck budget allocator** — rezervovať pevnú časť každého behu na otvorenie full canonical detailov najsilnejších category/snippet hitov, aby atraktívne lokálne roly nezostávali opakovane iba „neoverené“, kým celý čas spotrebuje broad discovery.
- **Application response-window decay tracker** — odhadovať, ako rýchlo sa zatvára reálne okno na reakciu podľa veku inzerátu, recruiter/client aktivity, proposal/interview countov a explicitných deadline; fresh high-fit ponuky tak dostať dopredu ešte pred saturáciou.
- **Effective compensation normalizer** — mesačnú mzdu, hodinové brigády a IČO/freelance budget prepočítať na porovnateľnú efektívnu hodinovú hodnotu po známych fixných hodinách, platform fee a základnom commute burden. Rieši skreslenie rankingu medzi rôznymi zmluvnými formami.
- **Company contact route enrichment** — pri high-fit ponuke zachytiť najrýchlejší overený spôsob reakcie: recruiter, hiring e-mail, priamy ATS formulár alebo firemný kontakt. Znižuje čas od discovery po reakciu bez oslabovania evidence gate.
- **Post-write promotion round-trip verification** — po každom zápise promotion okamžite znovu načítať canonical `jobs-data.json` a overiť validné JSON, očakávaný count delta, prítomnosť všetkých nových stable ID a neprítomnosť zmien zamknutých súborov.
- **Salary source-conflict resolver** — pri rozdielnej mzde medzi canonical detailom, mirrorom a category/index výsledkom držať autoritatívnu full-detail hodnotu, uložiť konflikt a naplánovať recheck.
- **Evidence surface quality score** — pri každom discovery hite evidovať, či ide o canonical detail, plný job-board detail, indexed snippet alebo category-only dôkaz.
- **Transactional promotion staging manifest** — promotion-ready kandidáta pred zápisom do `jobs-data.json` uložiť so stable ID, canonical URL a checksumom required fields do staging manifestu.
- **Promotion-ready aging alert** — pri high-fit kandidátovi evidovať počet po sebe idúcich behov, počas ktorých zostáva promotion-ready, ale nie LIVE; po limite vynútiť promote alebo explicitný blocker.
- **Primary-source escalation queue** — ak high-fit kandidát príde cez mirror/job board, okamžite ho zaradiť do fronty na dohľadanie canonical employer zdroja ešte v tom istom behu.
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