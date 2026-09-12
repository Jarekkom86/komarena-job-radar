# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 12. 9. 2026 12:05 CEST

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
- Autoritatívny feed má **51 LIVE položiek**; tento beh nepridal novú promotion-grade unique položku.
- LIVE mix: **Profesia 25/51 = 49,0 %**, mimo Profesia **26/51 = 51,0 %**.
- `jobs-data.json.updatedAt`: **2026-09-09T05:21:40+02:00** — bez zápisu v tomto behu, pretože nevznikol nový promotion-grade unique hit.
- Posledná persisted LIVE promotion zostáva **Techfun s. r. o. — Elektro-technický špecialista pre e-shop**, Kopčianska 92A, Petržalka, 1 800–2 200 EUR/mes., nástup ihneď, Po–Pi onsite. Kombinuje odborné poradenstvo, e-mailovú/telefonickú technickú podporu, testovanie a zaraďovanie produktov, Arduino/ESP/Raspberry, reklamácie, návody, blog a produktové popisy. Angličtina A2; vhodné aj pre absolventa; firma uvádza, že potrebné veci doučí. `locationEligibility: ba-area`. Riziko: základ C/C++ alebo Python a práca s datasheetmi.
- **Fresh duplicate enrichment 9.9. 07:03:** ČSOB Operátor IT Service Desk-u sa objavil ako veľmi čerstvý LinkedIn company post, ale zhoduje sa s už existujúcou LIVE položkou `profesia-csob-it-service-desk-5350972`; nový záznam sa nevytvoril. LinkedIn detail potvrdil Bratislavu, občasný HO, entry-level/absolvent fit, Remote Desktop/ServiceNow/Windows/Android a mierne pokročilú AJ.
- Predchádzajúca persisted LIVE promotion: **MamaTataJojo, s.r.o. — Administratívny pracovník, Malacky**, score 94.
- Silný promotion-ready kandidát: **ReMar Slovakia — Administratívny pracovník / pracovníčka e-shopu – objednávky a zákaznícky servis**, Panónska cesta 4, Petržalka, 1 200 EUR + 200 EUR variabilne po skúšobnej dobe, Po–Pi 9:30–18:00. `locationEligibility: ba-area`.
- Promotion-ready: **NAY a.s. — Reklamačný/á technik/čka, Centrálny sklad Senec**; publ. 7. 9. 2026, ASAP, reklamácie + procesy + práca s tovarom, `locationEligibility: ba-area`.
- Silný flexibilný kandidát: **DHL Group — administratívna podpora transportného tímu, Senec**, 4 h denne, 804,50 EUR + 10 % mesačný bonus; `locationEligibility: ba-area`.
- Promotion-ready z predchádzajúcich behov: **BeiT Technologie — Administrativně-ekonomický specialista (Junior/Medior), 100 % remote** a **SAV — Asistent/ka riaditeľa**; pred LIVE zápisom vyžadujú fresh canonical recheck.
- Silný verification kandidát: **NASES — Operátor/operátorka Ústredného kontaktného centra**, Bratislava, od 1 500 EUR, pružný režim 8–16/9–17, vhodné pre absolventa; `locationEligibility: ba-area`. Mínus: AJ B1 a vyššie Office nároky.
- Verification kandidát: **Dotypos SK — Technický support**, Bratislava, 1 200 EUR, TPP na neurčito, vhodné pre absolventa, support + terénne inštalácie + pred/popo-predajný servis; `locationEligibility: ba-area`. Ponuka je aktívna do 30. 9. 2026. Mínus: explicitná AJ B1/B2 a požiadavky na Android/IT prehľad.
- Verification kandidát: **LJ Stav s. r. o. — Administratívny/a pracovník/čka, obchodný/á referent/ka**, Stupava, 1 300 EUR/mes., vhodné aj pre absolventa, bez cudzieho jazyka v canonical detaile, objednávky + cenové ponuky + zákazníci + technické/logické myslenie. `locationEligibility: ba-area`.
- Supplemental verification: **FEIM - SK — Obchodný špecialista pre e-shop a predaj svietidiel**, Malacky, 1 100–1 300 EUR/mes.; e-shop/order/customer-service fit, ale stredne pokročilá AJ a aktívny retail predaj znižujú ranking.
- Verification kandidát: **Staffino — Technical Support Specialist / Project Coordinator (IT / SaaS)**, Bratislava Metropolitan Area, hybrid; silný support/ticketing/coordination prienik, ale 2–4 roky IT/SaaS support praxe a starší listing.
- Verification kandidát: **3MON, s.r.o. — Office Manager/ka & Executive Support pre CEO**, Bratislava, od 1 650 EUR/mes., Po–Pi. Silný prienik administratívy, e-shop objednávok, zákazníckej komunikácie a AI nástrojov. `locationEligibility: ba-area`; bez LIVE promotion pre 3 roky podobnej praxe a pokročilý Word/Excel.
- Jazykový reject: **SOITRON — IT Support Specialist**, Bratislava, 1 600 EUR/mes.; explicitná AJ B2 + technickejší IT scope.
- LinkedIn reject: **Wolt — Support Associate (Part Time)**, Bratislava; student/shift režim a večery/víkendy.
- Direct-company verification/reject: **Volkswagen Group Services — Internal Tech. Agent/IT Specialist**, Bratislava; lokálne eligible, ale network/OS/cybersecurity/scripting scope nad preferovanou úrovňou.
- Freelance verification: **Upwork — AI Blog Post VA for WordPress**, Worldwide remote, entry level, ale 120 článkov/mesiac za 30 USD fixed; ekonomický reject.
- Freelance verification: **Upwork — Virtual Assistant | Content Management & Project Coordination**, Worldwide remote; Contentful/SharePoint/Asana, ale headless CMS + angličtina + Adobe stack.
- Reject: **Upwork — WordPress Plugin Update & Maintenance Expert**, Worldwide remote, 10 USD fixed, Expert; hard-skill + budget reject.
- Direct-company reject: **Webikon — web developer**, Remote, 2 500–3 500 EUR na faktúru; senior/hard-development scope.
- Worki rediscovery: **Shield-Sk — Administrátor e-shopu / zákaznícka podpora**, Bratislava-Ružinov; canonical uvádza obsadené alebo zrušené.
- Canonical recheck: **RM Biznis servis — Manažér servisu klientov**, Bratislava / väčšina práce online, 10–15 EUR/h, bez praxe a cudzieho jazyka; už existuje v `jobs-data.json` (`worki-rm-biznis-servis-klienti-2060464`).
- Kariera reject: **Grafton — Analytik zákazníckych sťažností**, Bratislava, 2 000 EUR; AJ B1 + VŠ technická + podobná prax.
- LinkedIn reject: **Marlink — Support Engineer**, Bratislava/flexible; AJ B2 + networking/telecom.
- Freelance verification: **Upwork — WordPress Product Image Upload**, Worldwide remote, 10–20 USD/h, entry-level, WooCommerce; 50+ proposals.
- Direct-company reject 9.9. 03:41: **Slovak Telekom — Junior Business Analytik/Analytička**, Bajkalská 28, Bratislava, od 1 700 EUR/mes. + 15 % ročný bonus, vhodné pre absolventov; bez promotion pre explicitnú AJ minimálne B2 a vyšší analytický Excel/reporting burden.
- Freelance verification 9.9. 03:41: **Upwork — Website & SEO Management 2026**, Worldwide remote, WooCommerce operations, 15–30 USD/h, <30 h/týždeň, 6+ mesiacov; starší listing, 20–50 proposals a širší toolset.
- Fresh freelance verification 9.9. 05:21: **Upwork — Online Store Assistant**, Worldwide remote, flexible, WooCommerce je plus. Bez LIVE promotion: verejný detail neukázal kompenzáciu a listing už mal 50+ proposals.
- Brigada reject 9.9. 05:21: **Alpha Turbo — Promoter, Bratislava**, 7 EUR/h; student-only/vekovo cielená brigádnická dohoda, preto eligibility reject.
- Pretlak reject 9.9. 05:21: **Stretchfit — Creative Strategist**, 2 300–3 000 EUR; Mid/Senior creative-advertising scope mimo cieľového profilu.
- Fresh tech/creative reject 9.9. 07:03: **Elasticr Technologie — IT Support Specialist L2**, Havlíčkův Brod, 42–52 tis. Kč, Remote/On-site/Hybrid. Bez LIVE promotion: verejný detail nepreukazuje, že remote možno vykonávať prevažne zo Slovenska bez pravidelného dochádzania; L2 incident/root-cause support je navyše nad preferovanou úrovňou.
- Fresh freelance rejects 9.9. 07:03: Upwork WordPress Plugin Update & Maintenance Expert 10 USD fixed/Expert, AI Blog Post VA 30 USD za 120 článkov, viac nízkorozpočtových WordPress/WooCommerce development rolí a VA rolí s country/English/cold-call mismatchom.
- Fresh Profesia reject 9.9. 08:42: **Tatra Supercompute — IT Service Desk špecialista/špecialistka pre AI dátové centrum**, Bratislava, od 1 800 EUR/mes., L1 support, vhodné aj pre absolventa. Bez LIVE promotion pre explicitnú AJ B2, požiadavku na anglické CV a prezenčnú 24/7 trojzmennú prevádzku.
- Fresh freelance rejects 9.9. 08:42: Upwork Elementor/PHP 15 USD fixed, Expert plugin maintenance 10 USD fixed, WooCommerce full build 70 USD Expert a ďalšie low-budget/strong-English/country-restricted VA výsledky; bez promotion.
- Fresh freelance verification 9.9. 10:53: **Upwork — E-Commerce Operations & Admin VA**, Worldwide remote, WooCommerce/product listings/data entry, 250 USD fixed, 15–20 proposals. Bez LIVE promotion pre pokročilý Excel/VLOOKUP/pivot burden a neistý efektívny hodinový výnos.
- Fresh tech/creative rejects 9.9. 10:53: **Stretchfit — Creative Strategist**, Bratislava/remote/hybrid, 2 300–3 000 EUR, ale Mid/Senior creative-strategy scope; **Aukro — Account Manager HU**, remote/hybrid, ale maďarský trh a jazykovo-obchodný burden mimo profilu.
- Fresh duplicate 9.9. 11:45: **Slovak Telekom — Špecialista/Špecialistka podpory zákazníkov**, Bajkalská 28, Bratislava, sa objavil na Kariera.sk s dátumom 9. 9. 2026. Je to mirror existujúcej LIVE canonical firemnej ponuky, preto sa nový job nevytvoril a stabilné ID ostalo zachované.
- Fresh freelance rejects 9.9. 11:45: Upwork **Expert WordPress Developer Needed for Custom WooCommerce E-Commerce Website**, 300 USD fixed, Expert/custom PHP+JS scope; a **WooCommerce Developer Needed to Improve Product Page Layout**, 60 USD fixed, development-heavy. Bez LIVE promotion.
- Fresh direct-company reject 9.9. 12:47: **Alza.sk — HR Specialist pre logistiku**, Bernolákovo, od 1 700 EUR/mes., plný úväzok. Lokalita spĺňa `ba-area`, no canonical detail explicitne vyžaduje dennú komunikáciu v angličtine a tlmočenie zahraničným zamestnancom na úradoch; bez LIVE promotion pre jazykový burden.
- Fresh Brigada.sk rejects 9.9. 12:47: **Toyota Financial Services Slovakia — Administratívna pomoc na účtovnom oddelení**, Bratislava, 7 EUR/h, je explicitne student-only. **ea1 — Junior účtovník**, Bratislava, povoľuje viac foriem spolupráce, ale vyžaduje študenta alebo ukončenú OA/EU a verejný detail neuvádza numerickú odmenu; bez LIVE promotion.
- Fresh duplicate 9.9. 22:06: **Slovak Telekom — Špecialista/Špecialistka podpory zákazníkov**, Bajkalská 28, Bratislava, sa znovu objavil ako same-day Kariera mirror. Priama T-Mobile kariéra potvrdzuje canonical; stabilné LIVE ID sa nemení a mirror sa nepridáva.
- Fresh LinkedIn rejects 9.9. 22:06: **SupportYourApp — Technical Support Consultant** vyžaduje C1/fluent English; **Marlink — Support Engineer** vyžaduje B2 English a telecom/networking background. Bez promotion.
- Fresh freelance rejects 9.9. 22:06: Upwork **Expert WordPress Developer Needed for Custom WooCommerce E-Commerce Website** 300 USD fixed/Expert, **WordPress & WooCommerce Mobile UX, Speed and Checkout Optimization** 20 USD fixed a **WooCommerce Website Development** 70 USD fixed/Expert. Všetky sú development-heavy alebo ekonomicky slabé.
- Fresh freelance verification 10.9. 06:50: **Upwork — WordPress-/WooCommerce-Spezialist – langfristige Unterstützung**, Worldwide remote, 8–15 USD/h, WooCommerce produkty/kategórie/import-export/úpravy webu a troubleshooting. Bez LIVE promotion: listing je približne 4 týždne starý, má 20–50 proposals a nemecký kontext bez jasne uvedenej jazykovej požiadavky; ponechané na verification.

## Source audit — 9. 9. 2026 11:45
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Kariera/Zoznam/ÚPSVR, Brigada.sk, Pretlak/StartupJobs/WordPress Jobs, freelance/Upwork, Reddit/komunity a Facebook public index.
- Profesia: `checked`; 0 nových konkrétnych unique promotion-grade public-index výsledkov.
- Priame company careers: `checked`; 0 novej canonical promotion-grade delty.
- LinkedIn Jobs: `ok`; 2 relevantné/adjacent výsledky, vrátane Wolt Support Associate Part Time; 0 promotion.
- Worki: `ok`; Shield-Sk e-shop admin je canonical inactive, Läderach retail assistant je BA-local ale pod target rankingom; 0 promotion.
- Kariera/Zoznam/ÚPSVR: `ok`; 3 relevantné/adjacent BA výsledky, same-day Telekom je mirror existujúcej LIVE canonical firemnej ponuky; 0 unique promotion.
- Brigada.sk: `checked`; 0 novej konkrétnej vhodnej verejne indexovanej ponuky.
- Pretlak/StartupJobs/WordPress Jobs: `ok`; 2 adjacent hity, ale Aukro HU je jazykovo/obchodne mimo a Java/React je hard-dev; 0 promotion.
- Upwork/freelance: `ok`; 2 relevantné WooCommerce hity, oba development-heavy/nevýhodné fixed-budget; 0 promotion.
- Reddit/komunity: `limited`; fresh výsledok bol diskusia o automatizovanom hľadaní práce v Bratislave, nie hiring dopyt; 0 verified suitable hiring hits.
- Facebook public index: `limited`; **0 verified hits**, žiadny konkrétny verejne overiteľný hiring post s priamym linkom. Autentizovaný Nexus/local ingestion ostáva backlog.

### Audit počty 11:45
- source families checked: **10**
- nové LIVE promotions: **0**
- LIVE feed delta: **0**, zostáva **51**
- Facebook verified hits: **0**
- LIVE mix: Profesia **49,0 %**, non-Profesia **51,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 11:45.
- `source-audit.json`: aktualizovaný na 11:45.
- `jobs-data.json`: bez zmeny; nebol nový promotion-grade unique hit.

## Source audit — 9. 9. 2026 12:47
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Kariera/Zoznam/ÚPSVR, Brigada.sk, Pretlak/StartupJobs/WordPress Jobs, freelance/Upwork, Reddit/komunity a Facebook public index.
- Profesia: `checked`; 0 nových unique promotion-grade výsledkov.
- Priame company careers: `ok`; 1 relevantný canonical hit — Alza HR Specialist pre logistiku, Bernolákovo, od 1 700 EUR — vyradený z LIVE pre explicitnú dennú AJ a tlmočenie.
- LinkedIn Jobs: `ok`; 1 adjacent hit — Wolt Support Associate Part Time; student/shift burden, 0 promotion.
- Worki: `checked`; 0 nových vhodných konkrétnych hitov.
- Brigada.sk: `ok`; 2 relevantné BA administratívne hity, 0 promotion: Toyota student-only; ea1 Junior účtovník s qualification ambiguity a chýbajúcou numerickou odmenou.
- Kariera/Zoznam/ÚPSVR: `ok`; 3 adjacent výsledky, z toho 2 Telekom mirrory existujúceho LIVE direct-company canonicalu a 1 nižší fit Grafton; 0 unique promotion.
- Pretlak/StartupJobs/WordPress Jobs: `ok`; Stretchfit je Mid/Senior creative mismatch; Elasticr L2 nemá dôkaz remote-from-Slovakia a je vzdialený/L2; WordPress Jobs bez vhodnej delty.
- Upwork/freelance: `checked`; discovery reálne vykonané, 0 nových verejne overených promotion-grade hitov.
- Reddit/komunity: `limited`; 0 vhodných konkrétnych hiring leadov.
- Facebook public index: `limited`; **0 verified hits**, žiadny konkrétny verejne overiteľný hiring post s priamym linkom. Autentizovaný Nexus/local ingestion ostáva backlog.

### Audit počty 12:47
- source families checked: **10**
- nové LIVE promotions: **0**
- LIVE feed delta: **0**, zostáva **51**
- Facebook verified hits: **0**
- LIVE mix: Profesia **49,0 %**, non-Profesia **51,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 12:47; pridaný samostatný registry entry pre Alza.sk Kariéra.
- `source-audit.json`: aktualizovaný na 12:47.
- `jobs-data.json`: bez zmeny; nebol nový promotion-grade unique hit.

## Source audit — 9. 9. 2026 22:06
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Kariera/Zoznam/ÚPSVR, Brigada.sk, Pretlak/StartupJobs/WordPress Jobs, freelance/Upwork, Reddit/komunity a Facebook public index.
- Profesia: `checked`; 0 nových unique promotion-grade výsledkov.
- Priame company careers: `ok`; Slovak Telekom canonical support ostáva priamo dostupný; same-day Kariera listing je mirror, 0 unique promotion.
- LinkedIn Jobs: `ok`; SupportYourApp C1/fluent-English reject a Marlink B2 + networking/telecom reject; 0 promotion.
- Worki: `ok`; Shield-Sk e-shop admin je explicitne obsadený/zrušený; 0 promotion.
- Kariera/Zoznam/ÚPSVR: `ok`; same-day Telekom support je duplicate mirror; DENIMA vyžaduje multilingual phone communication; ostatné generic BA admin výsledky sú pod rankingom; 0 unique promotion.
- Brigada.sk: `checked`; discovery reálne vykonané, 0 nových konkrétnych vhodných public-index hitov.
- Pretlak/StartupJobs/WordPress Jobs: `ok`; Stretchfit Creative Strategist je BA/remote/hybrid, ale Mid/Senior creative mismatch; 0 promotion.
- Upwork/freelance: `ok`; 3 relevantné WordPress/WooCommerce hity, všetky development-heavy alebo ekonomicky slabé fixed-price; 0 promotion.
- Reddit/komunity: `limited`; 0 vhodných konkrétnych hiring leadov.
- Facebook public index: `limited`; **0 verified hits**, žiadny konkrétny verejne overiteľný hiring post s priamym linkom. Autentizovaný Nexus/local ingestion ostáva backlog.

### Audit počty 22:06
- source families checked: **10**
- nové LIVE promotions: **0**
- LIVE feed delta: **0**, zostáva **51**
- Facebook verified hits: **0**
- LIVE mix: Profesia **49,0 %**, non-Profesia **51,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 22:06.
- `source-audit.json`: aktualizovaný na 22:06.
- `jobs-data.json`: bez zmeny; nebol nový promotion-grade unique hit.

## Source audit — 10. 9. 2026 05:16
- Reálne preverených **12 source families**, minimálne 11 mimo Profesia: Profesia, priame company careers, LinkedIn Jobs, Worki, Kariera/Zoznam/ÚPSVR, ďalšie slovenské job-board discovery, Brigada.sk, Služby zamestnanosti, Pretlak/StartupJobs/WordPress Jobs, freelance/Upwork, Reddit/WordPress komunity a Facebook public index.
- Profesia: `checked`; 0 nových unique promotion-grade výsledkov.
- Priame company careers: `checked`; 0 novej vhodnej canonical promotion-grade delty.
- LinkedIn Jobs: `ok`; SupportYourApp vyžaduje fluent English/advanced scope, KLARSTEIN Italy support je inactive a jazykovo mimo; 0 promotion.
- Worki: `ok`; Shield-Sk Administrátor e-shopu / zákaznícka podpora bol rediscovered, ale canonical ho označuje ako obsadený/zrušený.
- Kariera/Zoznam/ÚPSVR: `ok`; Grafton Analytik zákazníckych sťažností, Bratislava, 2 000 EUR je obsahovo blízky L1 supportu, ale vyžaduje VŠ I. stupňa v technickom obore, podobnú prax a AJ B1; AI/LLM sales a C/C+E doprava sú hard mismatch. 0 promotion.
- Brigada.sk: `checked`; 0 nových vhodných konkrétnych public-index hitov.
- Služby zamestnanosti: `checked`; 0 novej promotion-grade delty v BA-area admin/driver/warehouse/support discovery.
- Pretlak/StartupJobs/WordPress Jobs: `ok`; Elasticr IT Support Specialist L2, Havlíčkův Brod, má iba všeobecné Remote/On-site/Hybrid označenie bez dôkazu, že sa dá dlhodobo vykonávať zo Slovenska, navyše ide o L2/root-cause scope. 0 promotion.
- Upwork/freelance: `ok`; viac Worldwide WordPress/WooCommerce/e-commerce/VA výsledkov, ale low-budget, development-heavy alebo s výrazným English/tool burden; 0 promotion.
- Reddit/komunity: `limited`; aktuálne indexované výsledky boli supply-side „for hire“ príspevky freelancerov, nie konkrétne hiring dopyty.
- Facebook public index: `limited`; **0 verified hits**, žiadny konkrétny verejne overiteľný hiring post s priamym linkom. Autentizovaný Nexus/local ingestion ostáva backlog a nebol spustený.

### Audit počty 05:16
- source families checked: **12**
- nové LIVE promotions: **0**
- LIVE feed delta: **0**, zostáva **51**
- Facebook verified hits: **0**
- LIVE mix: Profesia **49,0 %**, non-Profesia **51,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 05:16.
- `source-audit.json`: aktualizovaný na 05:16.
- `jobs-data.json`: bez zmeny; nebol nový promotion-grade unique hit.

## Source audit — 10. 9. 2026 06:50
- Reálne preverených **12 source families**, z toho **11 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Práca za rohom, Služby zamestnanosti, Pretlak/StartupJobs/WordPress Jobs, Upwork, Freelancer, Reddit/WordPress komunity a Facebook public index.
- Profesia: `checked`; 0 nových suitable unique promotion-grade výsledkov.
- Priame company careers: `checked`; 0 novej vhodnej canonical delty.
- LinkedIn Jobs: `checked`; public-index discovery prebehlo, 0 nového vhodného konkrétneho hitu.
- Worki: `checked`; 0 novej vhodnej unique delty.
- Brigada.sk: `checked`; 0 nových vhodných konkrétnych hitov.
- Práca za rohom: `checked`; 0 nového nezávislého promotion-grade hitu.
- Služby zamestnanosti: `checked`; 0 vhodnej BA-area delty.
- Pretlak/StartupJobs/WordPress Jobs: `checked`; 0 nového vhodného non-hard-dev promotion-grade výsledku.
- Upwork: `ok`; 8 relevantných/adjacent Worldwide výsledkov. Najbližšie profilu je WordPress-/WooCommerce-Spezialist – langfristige Unterstützung, 8–15 USD/h, ale približne 4-týždňový listing, 20–50 proposals a nejasný jazykový burden ho držia vo verification. Ďalšie výsledky boli low-budget, development-heavy, strong-English alebo workload-heavy.
- Freelancer: `checked`; 0 nového vhodného konkrétneho public-index hitu.
- Reddit/komunity: `ok`; 1 konkrétny hiring hit bol US-only + developer-heavy + strong-English, ostatné viditeľné výsledky boli freelancer supply-side.
- Facebook public index: `limited`; **0 verified hits**, žiadny konkrétny verejne overiteľný hiring post s priamym linkom. Nexus/local authenticated ingestion nebol spustený.

### Audit počty 06:50
- source families checked: **12**
- nové LIVE promotions: **0**
- LIVE feed delta: **0**, zostáva **51**
- Facebook verified hits: **0**
- LIVE mix: Profesia **49,0 %**, non-Profesia **51,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 06:50.
- `source-audit.json`: aktualizovaný na 06:50.
- `jobs-data.json`: bez zmeny; nebol nový promotion-grade unique hit.

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
- Recruiter-channel actionability score: hodnotiť priamy kontakt na recruitera, dostupnosť e-mailu/telefónu a počet krokov apply flow; pri rovnakej kvalite posunúť vyššie ponuky, na ktoré sa dá reagovať rýchlo a priamo.
- Morning-route compatibility classifier: z pracovného času, lokality a typu dochádzania odhadnúť, či rola reálne podporuje režim „ráno vyraziť – poobede doma“; použiť ako sekundárne poradie až po hard lokalitnom gate.
- Requirement-stack knockout precheck: ešte pred detailným scoringom automaticky vyhodnotiť kombináciu povinného vzdelania, praxe, jazyka a špecializovaných skillov; drahšie overovanie robiť iba pri kandidátoch, ktorí nemajú jasný knockout. Zníži opakované spracovanie rolí typu Grafton L1 support s VŠ + praxou + AJ B1.
- Hiring-demand vs freelancer-supply community classifier: pri Reddit/WordPress/Facebook discovery rozlíšiť „hľadám človeka“ od „ponúkam svoje služby“ ešte pred započítaním hitu; zamedzí falošnému coverage pri supply-side postoch a zvýši dôveryhodnosť community auditu.
- Guaranteed-pay floor normalizer: pri TPP/živnosti rozlíšiť garantovaný základ od variabilnej zložky, bonusov a provízií; ranking a ekonomické porovnanie primárne stavať na garantovanej odmene, aby „až X EUR“ neprebíjalo stabilnejšie ponuky.
- Commute-cost-adjusted compensation: pri `ba-area` rolách odhadnúť čas a priame náklady pravidelného dochádzania a dopočítať efektívnu hodnotu odmeny po cestovaní; používať iba ako sekundárny ekonomický ranking po splnení hard lokalitného gate.
- Search-to-detail promotion debt queue: kandidát z výsledkovej stránky, ktorý vyzerá relevantne, ale v tom istom behu sa nepodarilo získať kompletný canonical detail, dostať do explicitnej verification queue s TTL; pri ďalšom behu ho overiť skôr než opakovať široké discovery. Rieši stratu kandidátov typu CLOSER web admin/Shoroh support.
- English-demand evidence scale: pri neurčitých frázach typu „active English communication“ rozlišovať explicitnú CEFR úroveň, dennú telefonickú komunikáciu, písomný kontakt a iba občasné čítanie dokumentácie; zabráni binárnemu rejectu pri nepresne formulovanom jazykovom požiadavku a umožní konzistentný A2/B1/B2 ranking.
- Application assessment effort cost: odhadnúť neplatený čas na test task, AI/video interview, portfólio a viacstupňový výber; znížiť application ROI pri rolách, kde náročnosť výberu nezodpovedá reálnej odmene a fitu.
- ATS location-entitlement proof: pri všeobecnom `Remote` označení vyžadovať explicitný zoznam podporovaných krajín alebo inú canonical evidenciu, že možno pracovať zo Slovenska; bez toho ponechať `locationEligibility: unknown`.

## Source audit — 10. 9. 2026 10:39
- Reálne preverených **10 source families**, z toho **9 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Kariera.sk, Pretlak/StartupJobs, Upwork, Reddit/WordPress komunity a Facebook public index.
- Profesia: `ok`; viac fresh BA admin/support výsledkov, 0 promotion. FINAL-CD Opel servisná administratíva je `ba-area`, ale B1 AJ + 2 roky podobnej praxe + advanced Office/accounting stack ju držia pod promotion prahom. Persea a Kanadevia majú ešte vyšší jazykovo-praxový burden. SUPTel je duplicate/existing candidate. RFA/AUTO-Prestige ostali bez promotion, kým nie je same-run canonical detail kompletne overený.
- Priame company careers: `ok`; Slovak Telekom DevOps/Network Security boli lokálne BA, ale hard-skill mismatch.
- LinkedIn Jobs: `ok`; 5 adjacent hitov, 0 promotion. Rhythm&Ridge WordPress/WooCommerce remote je student-only; HireOn/TalentPop/CloudTalk/Concentrix majú silný jazykový alebo shift burden.
- Worki: `checked`; 0 nových vhodných unique hitov.
- Brigada.sk: `checked`; 0 nových vhodných konkrétnych hitov.
- Kariera.sk: `ok`; Caspian BA admin 950 EUR je ekonomicky slabý, DENIMA multilingual phone role jazykovo nevhodná, CPM indexed home-work listing inactive.
- Pretlak/StartupJobs: `ok`; Stretchfit ostáva Mid/Senior creative mismatch; bez vhodnej non-hard-dev delty.
- Upwork: `ok`; 8 relevantných/adjacent WordPress/WooCommerce/e-commerce/VA výsledkov, ale prevažne 5–100 USD fixed, Expert/custom development alebo explicitná silná AJ; 0 promotion.
- Reddit/komunity: `checked`; 0 konkrétnych vhodných hiring dopytov.
- Facebook public index: `limited`; **0 verified hits**, žiadny konkrétny verejne overiteľný hiring post s priamym linkom. Nexus/local authenticated ingestion nebol spustený.

### Audit počty 10:39
- source families checked: **10**
- nové LIVE promotions: **0**
- LIVE feed delta: **0**, zostáva **51**
- Facebook verified hits: **0**
- LIVE mix: Profesia **49,0 %**, non-Profesia **51,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 10:39.
- `source-audit.json`: aktualizovaný na 10:39.
- `jobs-data.json`: bez zmeny; nevznikol nový promotion-grade unique hit.

### Rozvoj pridaný 10:39
- Detail-verification freshness lock: kandidát z result-page feedu nesmie dostať LIVE promotion, kým v tom istom behu nebol otvorený canonical detail a overené aspoň lokalita, jazyk, forma spolupráce a povinné požiadavky; eliminuje false-positive z krátkych listingov typu RFA/AUTO-Prestige.
- Eligibility-reason rejection codebook: pri každom vyradenom kandidátovi ukladať jeden primárny reject code (`language`/`skill`/`student`/`inactive`/`location`/`economics`) a supporting evidence URL; umožní presné source-success analytics bez dvojitého započítavania jedného kandidáta do viacerých reject kategórií.

## Source audit — 10. 9. 2026 21:53
- Reálne preverených **11 source families**, z toho **10 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Kariera/Zoznam, Služby zamestnanosti, Pretlak/StartupJobs, Upwork, Reddit/WordPress komunity a Facebook public index.
- Profesia: `checked`; 0 nových unique promotion-grade výsledkov.
- Priame company careers: `checked`; 0 novej canonical promotion-grade delty.
- LinkedIn Jobs: `checked`; 0 nového konkrétneho promotion-grade kandidáta v public-index discovery.
- Worki: `checked`; 0 novej vhodnej unique delty.
- Brigada.sk: `checked`; 0 nových vhodných konkrétnych hitov.
- Kariera/Zoznam: `ok`; 4 relevantné/adjacent výsledky. **Grafton Office Manager**, Bratislava, 1 750–2 000 EUR, je obsahovo silná administratíva, ale canonical detail vyžaduje aktívnu komunikáciu v angličtine; bez promotion. CLOSER web admin a Shoroh IKT support zostávajú bez promotion pre nedostatočný same-run detail evidence. SOCIUMS IT Architect je hard reject: AJ C1/C2 + Java/CATIA + B+E.
- Služby zamestnanosti: `ok`; staršie Servers.com Support Engineer varianty v Bratislave sú Linux/server/network heavy a mimo preferovaného L1/support scope; 0 promotion.
- Pretlak/StartupJobs: `ok`; Aukro Account Manager HU je remote/hybrid, ale maďarský trh/jazyk a sales burden sú mismatch; 0 promotion.
- Upwork: `ok`; 8 relevantných/adjacent WordPress/WooCommerce/VA výsledkov. Najbližší je **Junior Digital Marketing & WordPress Assistant**, Worldwide remote, 8–10 USD/h, 6+ mesiacov, ale má 20–50 proposals, 7 interviewing a English-facing apply/communication; bez promotion. Ďalšie výsledky boli low-budget, strong-English, evidence-heavy alebo development-heavy.
- Reddit/komunity: `checked`; 0 konkrétnych vhodných hiring dopytov.
- Facebook public index: `limited`; **0 verified hits**, žiadny konkrétny verejne overiteľný hiring post s priamym linkom. Nexus/local authenticated ingestion nebol spustený.

### Audit počty 21:53
- source families checked: **11**
- nové LIVE promotions: **0**
- LIVE feed delta: **0**, zostáva **51**
- Facebook verified hits: **0**
- LIVE mix: Profesia **49,0 %**, non-Profesia **51,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 21:53.
- `source-audit.json`: aktualizovaný na 21:53.
- `jobs-data.json`: bez zmeny; nevznikol nový promotion-grade unique hit.

### Rozvoj pridaný 21:53
- Search-to-detail promotion debt queue: result-page kandidáta s dobrým fitom, ktorého canonical detail nebol v rovnakom behu kompletne získaný, zaradiť do prioritnej verification queue s TTL a overiť ho v nasledujúcom behu pred širokým discovery; znižuje opakované strácanie kandidátov cez neúplnú verejnú indexáciu.
- English-demand evidence scale: rozlíšiť explicitnú CEFR úroveň, aktívne hovorenie, telefonovanie, písomnú komunikáciu a iba čítanie technickej dokumentácie; scoring potom penalizuje reálny jazykový burden namiesto nepresného binárneho English rejectu.

## Source audit — 11. 9. 2026 11:20
- Reálne preverených **11 source families**, z toho **10 mimo Profesia**: Profesia, priame company careers, LinkedIn Jobs, Worki, Brigada.sk, Kariera/Zoznam, Služby zamestnanosti/ÚPSVR, Pretlak/StartupJobs/WordPress Jobs, Upwork, Reddit/WordPress komunity a Facebook public index.
- Profesia: `checked`; 0 nových unique promotion-grade výsledkov.
- Priame company careers: `ok`; msg life Slovakia verejný inventory bol dostupný, ale viditeľné IT roly mali B2/C1 alebo hard DevOps/integration/development burden; 0 promotion.
- LinkedIn Jobs: `ok`; Marlink Support Engineer = AJ B2 + telecom/networking, TalentPop remote = nemčina + angličtina, SupportYourApp = fluent English; 0 promotion.
- Worki: `checked`; 0 novej vhodnej unique delty.
- Brigada.sk: `checked`; 0 nových vhodných konkrétnych hitov.
- Kariera/Zoznam: `checked`; 0 novej vhodnej unique promotion-grade delty.
- Služby zamestnanosti/ÚPSVR: `ok`; **Metrohm Research Slovakia — IT Support Specialist**, Einsteinova 33, Bratislava-Petržalka, 1 800 EUR/mes., TPP na neurčito, nástup 1.10.2026, ponuka do 11.10.2026. Veľmi dobrý troubleshooting/support prienik a `ba-area`, ale canonical detail uvádza AJ B1 aj B2, minimálne 1 rok praxe a VŠ I. stupňa; ponechané ako silný verification kandidát, nie automatická LIVE promotion.
- Pretlak/StartupJobs/WordPress Jobs: `checked`; 0 vhodnej non-hard-dev Slovakia-from-home delty.
- Upwork: `ok`; fresh WordPress/VA hity boli prevažne low-budget fixed-price, Expert/development-heavy, USA/Spanish-restricted alebo so silnou angličtinou/slabou ekonomikou; 0 promotion.
- Reddit/WordPress komunity: `checked`; výsledky boli supply-side `FOR HIRE`, nie konkrétne hiring dopyty; 0 verified hiring hits.
- Facebook public index: `limited`; **0 verified hits**, bez konkrétneho verejne overiteľného postu a priameho linku. Autentizovaný Nexus/local ingestion ostáva backlog a nebol spustený.

### Audit počty 11:20
- source families checked: **11**
- nové LIVE promotions: **0**
- LIVE feed delta: **0**, zostáva **51**
- Facebook verified hits: **0**
- LIVE mix: Profesia **49,0 %**, non-Profesia **51,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 11:20.
- `source-audit.json`: aktualizovaný na 11:20.
- `jobs-data.json`: bez zmeny; Metrohm zostáva verification-only pre jazykovo/kvalifikačný burden.

### Rozvoj pridaný 11:20
- Ambiguous multi-value requirement semantics resolver: pri canonical detailoch, ktoré uvádzajú viac hodnôt toho istého požiadavku (napr. AJ B1 aj B2), automaticky rozlíšiť minimum, preferovaný cieľ, rozsah alebo chybnú duplicitu; kým význam nie je jednoznačný, nezvyšovať jazykový hard-gate nad úroveň priamo dokazateľnú zdrojom. Rieši false reject/promotion pri štruktúrovaných štátnych ponukách typu Metrohm.
- Targeted clarification queue for high-fit candidates: ak silný `ba-area`/`remote-ok` kandidát neprejde iba pre jednu nejasnú požiadavku, uložiť presnú otázku na overenie, verejný kontakt a TTL; ďalší verification krok potom cielene zisťuje konkrétnu nejasnosť namiesto opakovania celého discovery. Autentizované kontaktovanie sa nespúšťa automaticky.

## Source audit — 12. 9. 2026 12:05
- Reálne preverených **12 source families**, z toho **11 mimo Profesia**: Profesia, priame company/ATS careers, LinkedIn Jobs, Worki, Práca za rohom, Kariera/Zoznam/ÚPSVR, Pretlak, StartupJobs, WordPress Jobs, Upwork, Reddit/WordPress komunity a Facebook public index.
- Profesia: `checked`; 0 nových unique promotion-grade výsledkov.
- Priame company/ATS careers: `ok`; **Umbrel — Customer Support (non-technical)** je obsahovo zaujímavý remote support/logistics/orders fit, ale canonical verejne uvádza iba `Remote` bez dôkazu, že pracovný/kontraktačný vzťah je dostupný zo Slovenska. Preto `locationEligibility: unknown`, bez LIVE promotion. **OnHires — Customer Support Technician** je Europe-remote, ale VPS/networking/sysadmin-heavy. Foxelli má explicitnú Slovakia eligibility, no support/marketing roly padajú na fluent/near-native English, specialist experience alebo sales/marketing scope.
- LinkedIn Jobs: `ok`; **NATEK — Salesforce CRM Support Manager**, Remote/Bratislava, je platform-owner/governance/Salesforce-heavy a nad preferovaným support scope.
- Worki: `checked`; 0 novej vhodnej unique delty.
- Práca za rohom: `checked`; 0 novej vhodnej unique delty.
- Kariera/Zoznam/ÚPSVR: `ok`; čerstvé BA admin výsledky zahŕňajú INTERNATIONAL CONSTRUCTION AB od 850 EUR/mes. a ďalšie generic admin roly; DENIMA canonical vyžaduje viacjazyčnú telefonickú komunikáciu. Bez promotion pre ekonomiku/jazyk/fit.
- Pretlak: `checked`; 0 vhodnej non-hard-dev delty.
- StartupJobs: `checked`; 0 novej Slovakia-executable suitable delty.
- WordPress Jobs: `checked`; 0 novej vhodnej non-hard-dev hiring delty.
- Upwork: `ok`; **WordPress Content Automation & Blog QA VA**, publikované 10. 9. 2026, Worldwide remote, part-time/ongoing, školenie na interný systém poskytujú, 5–10 proposals. Veľmi dobrý WordPress + AI/content automation prienik, ale požaduje strong written English a verejný budget je uvedený ako iba 6 USD fixed-price, takže bez promotion do LIVE. Ďalšie e-commerce/VA hity boli low-pay, staršie alebo tool/English-heavy.
- Reddit/WordPress komunity: `limited`; 0 vhodných current hiring dopytov, prevažne FOR HIRE supply-side alebo stale/closed employer posts.
- Facebook public index: `limited`; **0 verified hits**, žiadny konkrétny verejne overiteľný hiring post s priamym linkom. Autentizovaný Nexus/local ingestion nebol spustený.

### Audit počty 12:05
- source families checked: **12**
- nové LIVE promotions: **0**
- LIVE feed delta: **0**, zostáva **51**
- Facebook verified hits: **0**
- LIVE mix: Profesia **49,0 %**, non-Profesia **51,0 %**
- zamknuté UI/renderery/baseline/bootstrap: **bez zmeny**
- `job-sources.json`: aktualizovaný na 12:05.
- `source-audit.json`: aktualizovaný na 12:05.
- `jobs-data.json`: bez zmeny; nevznikol nový promotion-grade unique hit.

### Rozvoj pridaný 12:05
- Application assessment effort cost: pri každej role odhadnúť neplatený čas na test task, video/AI interview, portfólio a viacstupňový výber a zahrnúť ho do application ROI. Pomôže nestrácať čas na nízko platených rolách s disproporčne náročným náborom.
- ATS location-entitlement proof: pri všeobecnom `Remote` označení z ATS vyžadovať explicitný hiring-country list alebo inú canonical evidenciu, že kontrakt možno uzavrieť zo Slovenska. Bez dôkazu ponechať `locationEligibility: unknown` a nepromovať do LIVE.
