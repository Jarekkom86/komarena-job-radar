# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 2. 9. 2026 01:34 CEST

## Architektúra a ochrana UI
- Aktuálny používateľský MASTER: `komarena-job-radar-v6.4.html`.
- Autoritatívny živý feed: `jobs-data.json` (`schemaVersion: 1`).
- Bootstrap diverzity: `jobs-data-nonprof.json` — **zamknutý**, automat ho nemení.
- Register zdrojov: `job-sources.json`.
- Pravdivý audit prístupu: `source-audit.json`.
- Stabilný BA fallback: `baseline-jobs.json` — **zamknutý**.
- UI/renderery/index/baseline sú zamknuté; automat mení iba povolené dátové súbory a tento MASTER.
- CRM localStorage: `pracaPreJaraCRM-v3`; používateľské editácie: `pracaPreJaraEdits-v1`.

## Ranking profil
1. WordPress/WooCommerce, web/e-shop/CMS/content/product admin, Shoptet/Shopify/Upgates, maintenance webov/e-shopov.
2. Technický support, Smart Home/IoT/Home Assistant, AI integrácie bez hard developmentu, troubleshooting/reklamácie/IT support.
3. Administratíva/back-office/customer care/operations.
4. Vodič B/kuriér bez tachografu.
5. Sklad/logistika.

### Tvrdý lokalitný gate
- Aktívny feed povoľuje iba **Bratislavu + rozumné okolie/denný dojazd**, alebo **skutočný remote/home-office vykonateľný zo Slovenska bez pravidelného dochádzania do vzdialeného mesta**.
- Mimo BA onsite alebo pravidelný hybrid do vzdialeného mesta = `reject-distance`.
- Nejasná lokalita/remote politika = `locationEligibility: unknown`; najprv overiť, nie odporúčať.
- Nové položky evidujú `locationEligibility` a `locationReason`.

### Negatívne filtre
- AJ A2 preferovaná; B1 mierny/stredný mínus; B2/C1 výrazný mínus.
- Povinný ďalší cudzí jazyk, hard PHP/fullstack/Laravel/React/Vue, pokročilé Linux/Docker/API alebo povinná špecializovaná kvalifikácia bez dôkazu praxe = silná penalizácia alebo hard gate.
- Lokalita BA/okolie alebo overený remote/HO je hard gate, nie bonus.
- Agregátor/repost nesmie prebiť priamy firemný zdroj.

## Aktuálne TOP / významné LIVE priority
1. **HEATING PRO — Technický pracovník/pracovníčka – sklad, rozvoz, nákup — Match 94** — Bratislava; 1 600–2 500 €/mes., ihneď, vodičák B, bez cudzieho jazyka.
2. **LEAF — Implementation Support Specialist — Match 94** — prevažne remote; customer support + back-office + web obsah + AI automatizácie.
3. **OVB — Špecialista/ka pre AI a automatizáciu — Match 93** — Bratislava remote/hybrid, od 2 000 €/mes.
4. **Ryvenia — Shoptet Specialist — Match 93** — Bratislava/full remote/hybrid.
5. **Košík.sk — Kuriér Bratislava — Match 93** — BA-Devínska Nová Ves/BA okolie; 2 500–3 000 €/mes., canonical detail až 150 €/deň, živnosť, vodičák B min. 2 roky, ihneď.
6. **Upwork — WooCommerce Product Listing & Upload Specialist — Match 92** — Worldwide remote; 10–30 USD/h; 50–75 produktov; Dutch iba preferované, ChatGPT fallback povolený.
7. **Zenea — E-Commerce Specialist — Match 92** — Bratislava/hybrid, 1 600–2 000 €/mes.; Shopify/Klaviyo/Excel/reporting.
8. **Energohub — Office manager / koordinátor procesov — Match 92** — Dúbravka, od 1 800 €/mes.; CRM, procesy, AI.
9. **Penta Real Estate — Sales Administrator — Match 92** — Bratislava, 1 800 €/mes. + bonus + HO.
10. **Hilti — Implementation & Service Specialist — Match 92** — Bratislava, od 1 800 €/mes. + bonusy + auto.
11. **Hellmann Worldwide Logistics — Asistent/ka oddelenia cestnej prepravy — Match 92** — Ružinov; dokumenty, skenovanie, evidencia, fakturácia, A2 AJ.
12. **Websupport — Customer Success Advisor — Match 91** — Bratislava; weby, hosting, SSL, troubleshooting, onboarding a rast smerom k WordPressu; 1 260 €/mes. + variabilná zložka.
13. **Lanža — Vodič/ka online nákupov — Match 91** — BA + okolie; 1 500–3 000 €/mes.
14. **Lachim Trans — Kuriér pre GLS depo Malacky — Match 91** — Malacky a okolie; od 1 900 €/mes., živnosť/s.r.o., vodičák B.
15. **DATALAN — Servisný technik — Match 90** — Petržalka; servis notebookov/PC, diagnostika bez pájkovania, administratíva servisných požiadaviek, vodič B, B1 AJ, občasný HO; od 1 200 €/mes. + variabilná zložka.
16. **ČSOB — Operátor IT Service Desk-u — Match 90** — Bratislava/občasný HO; L1 support, Remote Desktop, ServiceNow, účty/heslá, notebooky/mobily; vhodné aj pre absolventov; B1 AJ mínus.
17. **VÚB — Digitálny agent/agentka — Match 90** — 100 % home office / Slovensko.
18. **IZY VAPE — Back Office & Operations Coordinator – e-commerce — Match 90** — BA/prevažne HO.
19. **O2 — Digital Content Admin — Match 90** — web/e-shop, produkty, ceny, landing pages.
20. **Slovak Telekom — Magenta Experience Center Eurovea — Match 89** — Bratislava; 1 750 €/mes. pri nástupe, smart-home/technologické ukážky, customer care + predaj, bez povinnej AJ; mínus krátky/dlhý týždeň a sales intensity.
21. **Alza.sk — AlzaBox Špecialista — Match 89** — Bratislava, 1 430 € fix + až 610 € variabilná zložka; Po–Pi flexibilne, čiastočný HO, Excel, vodičák B, AI nástroje.
22. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia.
23. **Upwork — WooCommerce Assistant — Match 89** — worldwide remote; mínus US Mountain Time.
24. **BOELS — Shop Advisor / Klientsky poradca pre hobbymarkety — Match 89** — Bratislava-Ružinov; Po–Pi flexibilne, výjazdy z domu, servisné vozidlo, jednoduchá technická údržba, vodičák B, od 1 400 €/mes. + bonus.
25. **ALL SPORTS — e-shop Bauer Hockey — Match 88**.

> Poznámka ku konzistencii: LUNYS E-commerce špecialista bol odstránený z LIVE po canonical LinkedIn stave „No longer accepting applications“. Predchádzajúci MASTER ho omylom ešte uvádzal ako TOP #1; rozpor zostáva opravený.

## SOURCE AUDIT — 2. 9. 2026 01:34 CEST — LATEST
Reálne prehľadané source families: **Profesia; priame firemné careers; LinkedIn Jobs/company posts; Worki.sk; Brigada.sk; Kariera.sk/Zoznam; Práca za rohom; Pretlak/StartupJobs; Upwork freelance; Reddit/WordPress komunity; Facebook verejná indexácia.** Spolu **11 nezávislých source families**, z toho **10 mimo Profesia**.

### Výsledky tohto behu
- **Nové aktívne položky: 0.** `jobs-data.json` zostáva fail-closed na **44 LIVE položkách**; obsahový timestamp **2. 9. 2026 00:11:10 CEST** nebol umelo posunutý.
- **LIVE mix:** Profesia **21 / 44 = 47,7 %**, mimo Profesia **23 / 44 = 52,3 %**. Profesia zostáva pod 60 % health limitom.
- **Profesia / Práca za rohom:** **IZY VAPE — Back Office & Operations Coordinator – e-commerce | Remote** je stále verejne aktívny, 1 600–2 000 €/mes., prevažne home office zo Slovenska, s príležitostnými plánovanými stretnutiami v Bratislave. Náplň zahŕňa e-shop objednávky, logistiku, reklamácie, reporty, Trello a AI. Ide o už známu LIVE prioritu, preto bez duplicity.
- **Práca za rohom:** potvrdený je aj známy **Lachim Trans — kuriér GLS Malacky**, spolu s ďalšími známymi BA vodičskými výsledkami; bez novej unikátnej promotion-grade delty.
- **Priame firemné careers:** BA support/technické careers boli reálne preverené; bez nového canonical detailu, ktorý by prekonal súčasný LIVE/verification set.
- **LinkedIn:** verejná indexácia BA WordPress/WooCommerce/support bola reálne preverená; bez nového konkrétneho promotion-grade detailu; coverage bez loginu ostáva `limited`.
- **Worki.sk / Brigada.sk / Kariera.sk:** BA technická podpora, administratíva, e-shop, kuriér a sklad discovery boli preverené; bez novej vhodnej promotion-grade delty.
- **Pretlak / StartupJobs:** discovery pre WordPress/e-commerce/support prebehla; Pretlak výsledky boli prevažne freelancer profily, nie nové hiring ponuky.
- **Upwork:** Worldwide remote WordPress/WooCommerce VA discovery bola reálne preverená; tento sweep nepriniesol nový verejne overiteľný kandidát s lepším evidence/value profilom než existujúca verification queue.
- **Reddit/komunity:** čerstvý r/wordpressjobs výsledok bol **FOR HIRE** WordPress/Shopify freelancer, teda nie hiring dopyt; nepridáva sa.
- **Facebook:** **0 verified hits**, status `limited`; nebol nájdený konkrétny verejne overiteľný hiring post s priamym linkom. Autentizovaný Nexus/local ingestion ostáva backlog a automat ho nespúšťa.
- Žiadna existujúca LIVE položka nebola odstránená a nedošlo k strate kategórie.

### Run summary
- Reálne skontrolované source families: **11**.
- Nové aktívne položky zapísané: **0**.
- Významné pending/verification kandidáty: **15**.
- LIVE feed: **44 aktívnych položiek**.
- Mix: **Profesia 47,7 % / mimo Profesia 52,3 %**.
- `jobs-data.json.updatedAt` = **2. 9. 2026 00:11:10 CEST**.

## Rozvojový backlog — nové položky z tohto behu
1. **Applied-state suppression gate** — synchronizovať stav už odoslaných reakcií/CRM tak, aby discovery znovu neoznačoval už osloveného zamestnávateľa ako nový významný hit. Pri zmene platu, pracovného režimu, deadline alebo statusu sa má položka stále zobraziť ako material-change event.
2. **Material-change notification fingerprint** — pre stabilné job ID ukladať fingerprint z platu, lokality, remote režimu, deadline/statusu a kľúčových požiadaviek. Opakované kontroly majú upozorniť iba vtedy, keď sa fingerprint materiálne zmení; tým sa odstráni hodinové opakovanie známych LIVE ponúk bez straty dôležitých zmien.

## Stav ochrany / zápisu
- `jobs-data.json`: **nezmenený**, pretože nevznikla nová unikátna promotion-grade delta; 44 LIVE položiek zachovaných.
- `job-sources.json`: **aktualizovaný** o čerstvý audit/freshness poznámky.
- `source-audit.json`: **aktualizovaný** po reálnom 11-family audite.
- `PRACA_PRE_JARA_MASTER.md`: **aktualizovaný**; audit zosúladený s týmto behom a pridané 2 nové backlog zlepšenia.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index: **nedotknuté / zamknuté**.
