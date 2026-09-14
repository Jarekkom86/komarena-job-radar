# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 14. 9. 2026 04:27 CEST

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
- **AGEL Lab — Administratívno-technická podpora pre laboratórium**, Údernícka 9, Petržalka, plný úväzok, 1 350 EUR/mes., nástup 1.10.2026/dohodou. Priamy AGEL detail bol 14.9.2026 04:27 znovu overený; administratíva, LIS, reporty, dokumentácia, e-mail/telefón, objednávanie materiálu; bez verejne uvedeného cudzieho jazyka. `locationEligibility: ba-area`. **Silný promotion-ready kandidát.**
- **BKIS — Asistent/Asistentka sekcie Technickej podpory podujatí**, Vajnorská 135, Bratislava, od 1 400 EUR/mes., plný úväzok. Aktuálny verejný detail uvádza administratívnu podporu technickej sekcie, dodávateľov, objednávky/faktúry, kalendár, dochádzku, logistiku a vodičák B; jazyk iba slovenčina. `locationEligibility: ba-area`. **Silný promotion-ready kandidát**, pričom canonical employer page ešte treba dohľadať podľa direct-source preference.
- **NATEK — Salesforce CRM Support Manager** je síce remote, ale senior Salesforce operations/governance scope; bez promotion.
- **SupportYourApp** remote support zostáva mimo ranking kvôli fluent/C1 English; technické varianty navyše vyžadujú VPS/Windows Server/trading-platform scope.
- **Upwork** naďalej prináša presné WooCommerce/product-listing zhody, ale aktuálne výsledky padajú na nízkej ekonomike, vysokej konkurencii, existujúcich hires/interviews alebo silnejšej písomnej AJ.

## Source audit — 14. 9. 2026 04:27 CEST
- Reálne prehľadaných **12 source families**: Profesia; priame firemné career/public ATS; LinkedIn Jobs; Worki; Kariera.sk/Zoznam; Práca za rohom; Pretlak; StartupJobs; Upwork; verejne indexované Reddit/WordPress komunity; verejne indexované Facebook skupiny; broad public company-career discovery.
- Fresh/adjacent kandidáti: **9**; persisted LIVE promotions v tomto zápise: **0**; fresh reverified strong candidates: **2** (AGEL, BKIS).
- Profesia: bez nového promotion-grade hitu; zachytený bol aj expired H&M a mimo-BA elektrikár s povinnou elektrotechnickou kvalifikáciou.
- Direct company: AGEL Lab admin-technická podpora bola priamo znovu overená a spĺňa `ba-area`.
- LinkedIn: NATEK senior Salesforce; SupportYourApp fluent/C1 English; KLARSTEIN Spain market-language role; bez promotion.
- Worki: aktuálny BA VZV/sklad hit má trojzmennosť a fyzickú záťaž; bez promotion.
- Práca za rohom: BKIS admin/technická sekcia je high-fit BA-area kandidát; ďalšie čerstvé admin výsledky ostali pod rankingom.
- Upwork: viacero WooCommerce/e-commerce VA hitov, ale conversion/value gate neprešiel.
- Reddit/WordPress komunity: **0 verified hiring hits** vhodných na promotion.
- Facebook verejné skupiny: **0 verified hits**, stav `limited`; bez konkrétneho verejne overiteľného postu a priameho linku sa nič nepridáva. Authenticated Nexus/local ingestion ostáva backlog a nebol spustený.
- LIVE feed zostáva **52**; Profesia **25 = 48,1 %**, non-Profesia **27 = 51,9 %**. Fail-closed: existujúce položky sa nemažú len preto, že ich aktuálny sweep nenašiel.

## Backlog rozvoja
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
