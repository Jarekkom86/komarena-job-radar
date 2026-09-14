# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 14. 9. 2026 06:18 CEST

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
- `jobs-data.json.updatedAt`: **2026-09-14T06:18:46+02:00**.
- **Techfun s. r. o. — Elektro-technický špecialista pre e-shop**, Kopčianska 92A, Petržalka, 1 800–2 200 EUR/mes., ostáva veľmi silný technicko-e-shop fit. Angličtina A2; vhodné aj pre absolventa; `locationEligibility: ba-area`.
- **SCR interactive — Executive Assistant & Sales Support**, Šustekova 51, Petržalka, od 1 500 EUR/mes. + provízny systém, živnosť, flexibilný čas, po skúšobnej dobe HO 5 dní mesačne. Silný prienik administratívy, CRM/sales supportu, digitálneho marketingu, klientov, fakturačných podkladov a procesov. Cudzí jazyk nie je canonical požiadavka. `locationEligibility: ba-area`. **Nová LIVE TOP administratívno-digitálna zhoda.**
- **AGEL Lab — Administratívno-technická podpora pre laboratórium**, Údernícka 9, Petržalka, plný úväzok, 1 350 EUR/mes., nástup 1.10.2026/dohodou. Priama AGEL kariéra čerstvo potvrdila administratívu, LIS, reporty, dokumentáciu, e-mail/telefón a objednávanie materiálu; bez verejne uvedeného cudzieho jazyka. `locationEligibility: ba-area`. **Promoted LIVE.**
- **BKIS — Asistent/Asistentka sekcie Technickej podpory podujatí**, Vajnorská 135, Bratislava, od 1 400 EUR/mes., plný úväzok. Administratívna podpora technickej sekcie, dodávatelia, rozpočty, objednávky/faktúry, kalendár, dochádzka, logistika a vodičák B; jazyk iba slovenčina. `locationEligibility: ba-area`. **Promoted LIVE.**
- **ORLEN — Asistent/Asistentka nákupu na Oddelení Shop & Gastro**, TOWER 5, Kalinčiakova, Bratislava, od 1 700 EUR/mes. + kvartálny bonus 20 %, 1 deň HO týždenne. Vhodné aj pre absolventa; B1 angličtina je mierny/stredný mínus, nie hard gate. `locationEligibility: ba-area`. **Promoted LIVE.**
- **ČSOB Operátor IT Service Desk-u** ostáva silný entry-level technický support v Bratislave; mierne pokročilá AJ a on-call po zaučení sú mínus, nie lokalitný blocker.
- **Upwork** naďalej prináša presné WooCommerce/product-listing zhody, ale aktuálne výsledky padajú na nízkej ekonomike, vysokej konkurencii, existujúcich hires/interviews alebo expert/dev scope.

## Source audit — 14. 9. 2026 06:18 CEST
- Reálne prehľadaných **14 source families**: Profesia; priame firemné career/public ATS; LinkedIn Jobs; Brigada.sk; Worki; Práca za rohom; Kariera.sk/Zoznam; Pretlak; StartupJobs; WordPress Jobs; Upwork; Freelancer; verejne indexované Reddit/WordPress komunity; verejne indexované Facebook skupiny.
- Relevantní/adjacent kandidáti: **12**; persisted LIVE promotions v tomto zápise: **4**.
- Pridané: **AGEL Lab** (direct company), **BKIS** (Profesia-lineage mirror), **ORLEN Shop & Gastro** (Profesia-lineage mirror), **SCR interactive Executive Assistant & Sales Support** (canonical Profesia).
- Profesia: SCR canonical detail je mimoriadne dobrý admin/digital fit; BKIS a ORLEN sú zároveň viditeľné v Profesia lineage. Mirrors sa nepočítajú ako nezávislé zdroje.
- Direct company/public ATS: AGEL canonical bol čerstvo reverified a povýšený z promotion-ready do LIVE.
- LinkedIn: KLARSTEIN padá na španielčine; SupportYourApp na fluent/C1 English alebo silnejšom technical scope.
- Brigada.sk: recepčná/admin brigáda mala student-targeted podmienku a povinnú angličtinu; bez promotion.
- Worki, Kariera/Zoznam, Pretlak, StartupJobs, WordPress Jobs a Freelancer boli skutočne vyhľadané; bez nového kandidáta, ktorý by prešiel celý gate.
- Upwork: čerstvý WooCommerce/Elementor setup má 50+ proposals a expert/dev scope; WooCommerce data-entry je iba 35 USD fixed pri 20–50 proposals; existujúci product-listing hit už má hire/interviews. Bez nového promotion.
- Reddit/WordPress komunity: aktuálny HIRING výsledok je US-only, hard-development a strong-English scope; ostatné surfaced posty sú FOR HIRE alebo staré.
- Facebook verejné skupiny: **0 verified hits**, stav `limited`; bez konkrétneho verejne overiteľného hiring postu a priameho linku sa nič nepridáva. Authenticated Nexus/local ingestion ostáva backlog a nebol spustený.
- LIVE feed narástol **52 → 56 (+7,7 %)** bez jediného automatického mazania a bez straty kategórie; fail-closed gate prešiel.
- LIVE mix po prírastkoch: **Profesia-lineage 50,0 % / non-Profesia 50,0 %**.

## Backlog rozvoja
- **Post-write promotion round-trip verification** — po každom zápise promotion okamžite znovu načítať canonical `jobs-data.json` a overiť validné JSON, očakávaný count delta, prítomnosť všetkých nových stable ID a neprítomnosť zmien zamknutých súborov. Rieši riziko poškodenia feedu pri full-file replacementoch.
- **Salary source-conflict resolver** — pri rozdielnej mzde medzi canonical detailom, mirrorom a category/index výsledkom držať autoritatívnu full-detail hodnotu, uložiť konflikt a naplánovať recheck. Zvyšuje dôveryhodnosť cien a zabraňuje výberu atraktívnejšej, ale nespoľahlivej sumy.
- **Evidence surface quality score** — pri každom discovery hite evidovať, či ide o canonical detail, plný job-board detail, indexed snippet alebo category-only dôkaz. Ranking/freshness nesmie dôverovať tenkému snippet dôkazu rovnako ako canonical detailu.
- **Transactional promotion staging manifest** — promotion-ready kandidáta pred zápisom do `jobs-data.json` uložiť so stable ID, canonical URL a checksumom required fields do staging manifestu; ďalší bezpečný atomický write ho vie povýšiť bez rediscovery alebo partial replacementu.
- **Promotion-ready aging alert** — pri high-fit kandidátovi evidovať počet po sebe idúcich behov, počas ktorých zostáva promotion-ready, ale nie LIVE; po limite vynútiť promote alebo explicitný blocker.
- **Primary-source escalation queue** — ak high-fit kandidát príde cez mirror/job board, okamžite ho zaradiť do fronty na dohľadanie canonical employer zdroja ešte v tom istom behu.
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