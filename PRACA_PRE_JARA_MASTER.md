# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 14. 9. 2026 03:28 CEST

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
- Autoritatívny feed má **52 LIVE položiek**; tento beh nepridal novú promotion-grade unique položku.
- LIVE mix: **Profesia 25/52 = 48,1 %**, mimo Profesia **27/52 = 51,9 %**.
- `jobs-data.json.updatedAt`: **2026-09-12T22:58:46+02:00** — bez zápisu v tomto behu, pretože nevznikol nový promotion-grade unique hit.
- Posledná persisted LIVE promotion je **Ovečkárna — Brigáda zákaznícka podpora CZ/SK**, remote zo Slovenska/práca odkiaľkoľvek, 160 Kč/h podľa Prace.cz mirroru, Po–Pi 08:00–12:00; `locationEligibility: remote-ok`.
- **Techfun s. r. o. — Elektro-technický špecialista pre e-shop**, Kopčianska 92A, Petržalka, 1 800–2 200 EUR/mes., ostáva veľmi silný technicko-e-shop fit. Angličtina A2; vhodné aj pre absolventa; firma uvádza doučenie potrebných vecí. `locationEligibility: ba-area`.
- **ČSOB Operátor IT Service Desk-u** bol 14. 9. 2026 03:28 znovu verejne overený cez aktuálny LinkedIn detail. Je už v LIVE ako `profesia-csob-it-service-desk-5350972`; preto nevznikol duplicitný záznam. Entry-level L1 support, Bratislava, mierne pokročilá AJ, 8 dní HO mesačne a po zaučení on-call približne 1 týždeň mesačne.
- **TP Poland — [Remote] Technical Support with Czech & Slovak** je nový silný verification kandidát: junior support, CZ+SK C1, AJ B1, 40 PLN/h, Po–Pi 9:00–18:00, online onboarding, štart 12. 10. 2026. Napriek označeniu fully remote structured location evidence uvádza poľské vojvodstvá/Katowice a explicitne nepotvrdzuje výkon zo Slovenska; preto `locationEligibility: unknown` a bez LIVE promotion.
- **Roche — Technical Support Specialist (Slovak & Czech language)**, Bratislava/hybrid 2 dni kancelária, je lokálne vhodný, ale scope je technicky špecializovanejší a vyžaduje angličtinu použiteľnú na medzinárodné tréningy/fóra; bez promotion.
- **Wolt Support Associate (Part Time)** ostáva student-targeted a vyžaduje večery/víkendy; bez promotion.
- **SupportYourApp remote support** zostáva mimo ranking kvôli C1/fluent English a pri technickej variante aj VPS/Windows Server/trading-platform scope.
- **Upwork — Ecommerce VA / bulk product upload Shopify/Etsy/WooCommerce** má dobrý skill fit, ale 15 USD fixed, Expert level a konverznú neistotu; bez promotion.
- **Upwork — WordPress/WooCommerce Mobile UX, Speed and Checkout Optimization** je hard-development/optimization scope (CSS/PHP/JS) za 20 USD fixed; reject.
- Silný promotion-ready kandidát: **ReMar Slovakia — Administratívny pracovník / pracovníčka e-shopu – objednávky a zákaznícky servis**, Panónska cesta 4, Petržalka, 1 200 EUR + 200 EUR variabilne po skúšobnej dobe, Po–Pi 9:30–18:00. `locationEligibility: ba-area`.
- Promotion-ready: **NAY a.s. — Reklamačný/á technik/čka, Centrálny sklad Senec**; reklamácie + procesy + práca s tovarom, `locationEligibility: ba-area`.
- Silný flexibilný kandidát: **DHL Group — administratívna podpora transportného tímu, Senec**, 4 h denne, 804,50 EUR + 10 % mesačný bonus; `locationEligibility: ba-area`.
- Promotion-ready z predchádzajúcich behov: **BeiT Technologie — Administrativně-ekonomický specialista (Junior/Medior), 100 % remote** a **SAV — Asistent/ka riaditeľa**; pred LIVE zápisom vyžadujú fresh canonical recheck.
- Silný verification kandidát: **NASES — Operátor/operátorka Ústredného kontaktného centra**, Bratislava, od 1 500 EUR, pružný režim 8–16/9–17, vhodné pre absolventa; `locationEligibility: ba-area`. Mínus: AJ B1 a vyššie Office nároky.
- Verification kandidát: **Dotypos SK — Technický support**, Bratislava, 1 200 EUR, vhodné pre absolventa, support + terénne inštalácie + servis; `locationEligibility: ba-area`. Mínus: AJ B1/B2.
- Verification kandidát: **LJ Stav s. r.o. — Administratívny/a pracovník/čka, obchodný/á referent/ka**, Stupava, 1 300 EUR/mes., vhodné aj pre absolventa, bez cudzieho jazyka v canonical detaile. `locationEligibility: ba-area`.
- Supplemental verification: **FEIM - SK — Obchodný špecialista pre e-shop a predaj svietidiel**, Malacky, 1 100–1 300 EUR/mes.; stredne pokročilá AJ a aktívny retail predaj znižujú ranking.
- Verification kandidát: **Staffino — Technical Support Specialist / Project Coordinator (IT / SaaS)**, Bratislava Metropolitan Area, hybrid; 2–4 roky IT/SaaS support praxe znižujú fit.
- Verification kandidát: **3MON, s. r.o. — Office Manager/ka & Executive Support pre CEO**, Bratislava, od 1 650 EUR/mes.; 3 roky podobnej praxe a pokročilý Word/Excel znižujú fit.
- Jazykový reject: **SOITRON — IT Support Specialist**, Bratislava, 1 600 EUR/mes.; explicitná AJ B2 + technickejší IT scope.
- LinkedIn reject: **Wolt — Support Associate (Part Time)**, Bratislava; student/shift režim, večery/víkendy a vyššia AJ.
- Direct-company verification/reject: **Volkswagen Group Services — Internal Tech. Agent/IT Specialist**, Bratislava; network/OS/cybersecurity/scripting scope nad preferovanou úrovňou.
- Freelance verification: **Upwork — AI Blog Post VA for WordPress**, Worldwide remote, entry level, ale 120 článkov/mesiac za 30 USD fixed; ekonomický reject.
- Freelance verification: **Upwork — Virtual Assistant | Content Management & Project Coordination**, Worldwide remote; Contentful/SharePoint/Asana, ale headless CMS + angličtina + Adobe stack.
- Reject: **Upwork — WordPress Plugin Update & Maintenance Expert**, Worldwide remote, 10 USD fixed, Expert; hard-skill + budget reject.
- Direct-company reject: **Webikon — web developer**, Remote, 2 500–3 500 EUR na faktúru; senior/hard-development scope.
- Worki rediscovery: **Shield-Sk — Administrátor e-shopu / zákaznícka podpora**, Bratislava-Ružinov; canonical uvádza obsadené alebo zrušené.
- Canonical recheck: **RM Biznis servis — Manažér servisu klientov**, Bratislava / väčšina práce online, 10–15 EUR/h, bez praxe a cudzieho jazyka; už existuje v `jobs-data.json`.
- Kariera reject: **Grafton — Analytik zákazníckych sťažností**, Bratislava, 2 000 EUR; AJ B1 + VŠ technická + podobná prax.
- LinkedIn reject: **Marlink — Support Engineer**, Bratislava/flexible; AJ B2 + networking/telecom.
- Freelance verification: **Upwork — WordPress Product Image Upload**, Worldwide remote, 10–20 USD/h, entry-level, WooCommerce; 50+ proposals.
- Direct-company reject: **Slovak Telekom — Junior Business Analytik/Analytička**, Bratislava; explicitná AJ minimálne B2 a vyšší analytický Excel/reporting burden.
- Freelance verification: **Upwork — Website & SEO Management 2026**, Worldwide remote, WooCommerce operations, 15–30 USD/h; starší listing, 20–50 proposals a širší toolset.
- Freelance verification: **Upwork — Online Store Assistant**, Worldwide remote, flexible, WooCommerce je plus; bez promotion pre nejasnú kompenzáciu a 50+ proposals.
- Brigada reject: **Alpha Turbo — Promoter, Bratislava**, 7 EUR/h; student-only/vekovo cielená brigádnická dohoda.
- Pretlak reject: **Stretchfit — Creative Strategist**, 2 300–3 000 EUR; Mid/Senior creative-advertising scope mimo cieľového profilu.
- Tech/creative reject: **Elasticr Technologie — IT Support Specialist L2**, Havlíčkův Brod, Remote/On-site/Hybrid; remote zo Slovenska nebol verejne preukázaný a L2 scope je nad preferovanou úrovňou.
- Profesia reject: **Tatra Supercompute — IT Service Desk pre AI dátové centrum**, Bratislava, od 1 800 EUR/mes.; AJ B2, anglické CV a 24/7 trojzmenná prevádzka.
- Freelance verification: **Upwork — E-Commerce Operations & Admin VA**, Worldwide remote, WooCommerce/product listings/data entry, 250 USD fixed; pokročilý Excel a neistý efektívny výnos.
- Duplicate: **Slovak Telekom — Špecialista/Špecialistka podpory zákazníkov**, Bajkalská 28, Bratislava, sa objavil na Kariera.sk ako mirror existujúcej LIVE canonical ponuky; stabilné ID sa nemení.
- Direct-company reject: **Alza.sk — HR Specialist pre logistiku**, Bernolákovo; denná komunikácia v angličtine a tlmočenie zahraničným zamestnancom.
- Brigada.sk reject: **Toyota Financial Services Slovakia — Administratívna pomoc na účtovnom oddelení**, Bratislava, 7 EUR/h, explicitne student-only.
- LinkedIn reject: **SupportYourApp — Technical Support Consultant**, remote; C1/fluent English. **Marlink — Support Engineer**, Bratislava/flexible; AJ B2 + networking/telecom.
- Fresh reject 14.9. 01:55: **ESET — Customer Support Specialist**, Bratislava, entry-level, od 1 250 EUR + bonus; ideálne AJ B2, preto výrazný jazykový mínus a bez LIVE promotion.
- Fresh reject 14.9. 01:55: **Wolt — Support Associate (Full Time)**, Ružinov, 1 340–1 410 EUR, možný HO po 2 týždňoch; minimum AJ B2 + zmeny ráno/večer/víkendy do 01:00, preto bez LIVE promotion.
- Fresh freelance reject 14.9. 01:55: **Upwork — Data Entry Specialist for WooCommerce**, Worldwide, 35 USD fixed, 20–50 proposals; skill fit je dobrý, ale value/conversion gate neprešiel.
- Fresh reject 14.9. 02:07: **Tatra Supercompute — IT Service Desk špecialista/špecialistka pre AI dátové centrum**, Bratislava, od 1 800 EUR/mes., nástup 1.11.2026; canonical detail explicitne vyžaduje AJ B2, anglické CV a prezenčný režim 24/7 v trojzmennej prevádzke, preto bez LIVE promotion.

## Source audit — 14. 9. 2026 03:28 CEST
- Reálne prehľadaných **11 source families**: Profesia; priame firemné career/public ATS; LinkedIn Jobs; Worki; Brigada.sk; Kariera.sk/Zoznam; Pretlak; StartupJobs; Upwork; verejne indexované Reddit/WordPress komunity; verejne indexované Facebook skupiny.
- Fresh/adjacent kandidáti: **8**; LIVE promotions: **0**; existujúce LIVE položky fresh reverified: **1**.
- LinkedIn/direct-company: **ČSOB IT Service Desk** bol znovu overený ako aktívny a zostáva LIVE pod existujúcim stabilným ID; nevytvára sa duplicate.
- Nový cezhraničný remote kandidát **TP Poland — Technical Support CZ/SK**: 40 PLN/h, AJ B1, junior, Po–Pi 9–18, fully remote label. Structured remote regions však pokrývajú Poľsko a nepotvrdzujú právne/prevádzkovo výkon zo Slovenska; preto `locationEligibility: unknown`, bez promotion.
- Roche Technical Support Bratislava/hybrid: lokálne vhodné, ale silnejšia AJ na zahraničné tréningy a špecializovanejší diagnostický scope.
- Wolt part-time: student-targeted + večery/víkendy; bez promotion.
- SupportYourApp: C1/fluent English; bez promotion.
- Upwork: 2 relevantné výsledky, ale low fixed budget/Expert alebo hard-development scope; bez promotion.
- Reddit/WordPress komunity: **0 verified hiring hits** vhodných na promotion.
- Facebook verejné skupiny: **0 verified hits**, stav `limited`; bez konkrétneho verejne overiteľného postu a priameho linku sa nič nepridáva. Authenticated Nexus/local ingestion ostáva backlog a nebol spustený.
- LIVE feed zostáva **52**; Profesia **25 = 48,1 %**, non-Profesia **27 = 51,9 %**. Fail-closed: nič sa nemaže len preto, že to aktuálny sweep nenašiel.

## Backlog rozvoja
- **Remote-country allowlist extractor** — z remote ponúk extrahovať skutočný country/region allowlist a oddeliť ho od marketingového štítku „Remote“; ak structured locations uvádzajú iba cudziu krajinu, ponechať `locationEligibility: unknown`, kým nie je výslovne potvrdený výkon zo Slovenska.
- **Cross-border contract feasibility gate** — pri zahraničných remote rolách overiť, či ponúkaný pracovný/mandátny/DPP/B2B model možno legálne a prakticky uzavrieť s pracovníkom zo Slovenska ešte pred `remote-ok` promotion.
- **Compound shift-burden score** — spojiť 24/7 prevádzku, trojzmennosť, nočné, víkendy a povinnú onsite prítomnosť do jedného burden signálu, aby technicky atraktívna support rola neprebila udržateľnejšiu dennú prácu.
- **English application-artifact gate** — samostatne zachytiť požiadavku na CV, cover letter alebo výberové konanie v angličtine; pri A2 profile je to ďalšia conversion friction nad rámec samotného skill fitu.
- **Application deadline confidence and urgency queue** — extrahovať explicitné closing dates oddelene od odhadovaného expiry; high-fit ponuky s potvrdeným blízkym deadline posúvať dopredu bez falošnej urgencie z mirrorov.
- **Application channel friction score** — evidovať náklady reakcie: povinný účet, dlhý formulár, test, portfolio, platform fee alebo extra onboarding; obmedzený čas smerovať najprv na high-fit roly s realistickou conversion path.
- **Source result saturation detector** — sledovať, keď hodinové behy opakovane vracajú rovnakých nezmenených kandidátov; v ďalšom behu automaticky rotovať query vocabulary a source subcategories, aby sa zvyšovalo coverage bez znižovania kvality.
- **Market-language role splitter** — už pri discovery oddeliť všeobecný customer support od trhovo špecifických rolí (Spain/Sweden/Hungary atď.), aby vzdialene atraktívna remote ponuka zbytočne nešla do hlbokého rankingu, ak je cieľový jazyk povinný.
- Autentizovaný Facebook ingestion cez Nexus/local agent — backlog; automat ho sám nespúšťa.
- Import CRM backupu, source-success analytics, publishedAt/<24h priority, commute/distance, deadline alerts, company contact enrichment, duplicate cluster report, reply probability, GitHub Actions polling a cross-device sync zostávajú platné ďalšie smery.