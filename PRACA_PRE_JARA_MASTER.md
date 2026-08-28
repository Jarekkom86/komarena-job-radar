# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 28. 8. 2026 07:20 CEST

## Architektúra a ochrana UI
- Aktuálny používateľský MASTER: `komarena-job-radar-v6.4.html`.
- Autoritatívny živý feed: `jobs-data.json` (`schemaVersion: 1`).
- Bootstrap diverzity: `jobs-data-nonprof.json` — zamknutý, automat ho nemení.
- Register zdrojov: `job-sources.json`.
- Pravdivý audit reálneho prístupu: `source-audit.json`.
- Stabilný široký BA fallback: `baseline-jobs.json` — zamknutý.
- UI/renderery/index/baseline sú zamknuté; automat mení iba dátové súbory a tento MASTER.
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
- Nejasná lokalita/remote politika = `locationEligibility: unknown` a najprv overiť, nie odporúčať.
- Nové položky evidujú `locationEligibility` a `locationReason`; staršie položky sa kontrolujú postupne fail-closed bez hromadného mazania.

### Negatívne filtre
- AJ A2 preferovaná; B1 mierny/stredný mínus; B2/C1 výrazný mínus.
- Povinný ďalší cudzí jazyk, hard PHP/fullstack/Laravel/React/Vue, pokročilé Linux/Docker/API bez preukázanej praxe = silná penalizácia alebo hard gate.
- Lokalita BA/okolie alebo overený remote/HO je hard gate, nie bonus.
- Agregátor/repost nesmie prebiť priamy firemný zdroj.

## Aktuálne TOP / čerstvo overené
1. **LUNYS — E-commerce špecialista — Match 96** — WooCommerce/Shoptet/Magento, denná správa e-shopu, kategórie, testovanie, promo a AI. Canonical: LinkedIn.
2. **LEAF — Implementation Support Specialist — Match 94** — prevažne remote, flexibilný skrátený úväzok; customer support + back-office + reporty + fakturačné podklady + obsahové úpravy webov + AI automatizácie.
3. **OVB — Špecialista/ka pre AI a automatizáciu — Match 93** — Bratislava remote/hybrid, od 2 000 €/mes.; AI agenti, procesy, automatizácia, CX a interné zavádzanie AI.
4. **Ryvenia — Shoptet Specialist — Match 93** — Bratislava/full remote/hybrid; produkty, kategórie, ceny, CSV, migrácie, QA.
5. **Penta Real Estate — Sales Administrator — Match 92** — Bratislava, 1 800 €/mes. + ročný bonus + home office; CRM, klientský portál, dáta, reporty, dokumenty, systémy a klientská podpora.
6. **Hilti — Implementation & Service Specialist — Match 92** — Bratislava, od 1 800 €/mes. + bonusy + služobné auto; implementácia ON!Track/Fleet Management, školenia, reklamácie, CRM.
7. **Websupport — Customer Success Advisor — Match 91** — weby, hosting, SSL, troubleshooting a zákaznícka komunikácia; 28. 8. 2026 ráno znovu potvrdené priamo na firemnej kariére ako aktívne.
8. **IZY VAPE — Back Office & Operations Coordinator – e-commerce | Remote — Match 90** — Bratislava/prevažne HO, 1 600–2 000 €/mes.; e-shop, objednávky, reklamácie, logistika, fulfillment, dokumenty, procesy a AI. Riziko: stredne pokročilá AJ treba potvrdiť; nástup november–december 2026.
9. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, atribúty, ceny a landing pages.
10. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia, 1 520 €/mes. + bonus.
11. **Upwork — WooCommerce Assistant — Match 89** — worldwide remote, <30 h/týždeň, 3–6 mesiacov, 5–10 USD/h; mínus US Mountain Time.
12. **ALL SPORTS — e-shop Bauer Hockey — Match 88**.
13. **SuperFaktura — Supportový parťák — Match 87**.
14. **Cerkam Facility Services — Terénny administratívny pracovník — Match 86** — Bratislava, od 1 500 €/mes. + bonusy, evidencia zákazníckych požiadaviek, objednávky, interný systém, klientská komunikácia a terén.
15. **RM Biznis servis / Worki — Manažér servisu klientov — Match 86** — väčšina práce online, občas Bratislava, 10–15 €/h.
16. **Bookio — B2B/SaaS online support — Match 85**.
17. **AI & Tech Assistant / Upwork — Match 84** — worldwide remote; web updates, low/no-code, QA, tracking a AI workflows; mandatory English bez úrovne a 20–50 proposals.
18. **Dotypos SK — Technický support — Match 84** — Bratislava; Android/pokladne, výjazdy, klientsky support; AJ konflikt treba potvrdiť.
19. **Pandora — Associate Assistant, eCommerce Operations — Match 84**.
20. **Allit — End-User Support — Match 84**.
21. **3MON — IT & Operations Support — Match 84**.
22. **STU — Web špecialista CMS/web — Match 83**.
23. **VNET — IT customer support — Match 82**.
24. **LAST MILE — Operátor NOC / Hotline podpora — Match 82** — Ružinov, Bratislava; first-line service desk, tickety, základný troubleshooting, skrátený úväzok/dohoda/živnosť/stáž, firma zaučí; mínus 6–8 €/h a B1 AJ.
25. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 28. 8. 2026 07:20 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak/StartupJobs; WordPress Jobs/tech-creative boards; Upwork/freelance; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 0.** Feed zostal fail-closed; žiadny kandidát nebol pridaný iba preto, aby sa zvýšil počet.
- **Powerlogy — Marketing Specialist:** aktualizované 27. 8. 2026, Bratislava/hybrid, od 1 600 € na faktúru. Náplň má silný prienik s e-shopom, obsahom, AI search a WordPress/WooCommerce sú bonus. Explicitná požiadavka je však **slovenčina aj angličtina na veľmi dobrej úrovni**, preto neprešiel A2-centric language gateom.
- **Wolt — Support Associate (Part Time):** Bratislava, customer/courier/venue support, ale explicitne vyžaduje professional working proficiency English minimálne B2; vyradené jazykovým gateom.
- **Upwork — Remote I.T Professional for Small Design Firm:** worldwide remote, Windows/AI/helpdesk, 10–20 h/týždeň, ale 200 USD fixed + 3+ roky IT supportu. Skillovo zaujímavé, ekonomicky slabé a experience threshold je vyšší; neaktivované.
- **Upwork — eCommerce VA / Business Administrator / WordPress:** eCommerce VA má iba 50 USD fixed; Business Administrator 500 USD fixed má mandatory bookkeeping; WordPress/WooCommerce leady sú prevažne 5–50 USD fixed, hard-development alebo už 20–50 proposals. U.S.-only Digital Operations Assistant bol vyradený country eligibility gateom.
- **WordPress Jobs:** aktuálne 7 open positions, ale portál uvádza **0 % remote-friendly**. Nové 27. 8. sú Houston/Slippery Rock USA; ďalšie sú development/hard-skill alebo mimo BA/remote gate.
- **Priame firemné kariéry:** Websupport znovu potvrdený ako aktívny; VNET career stránka skontrolovaná. Bez nového silného direct-company leadu.
- **Pretlak/StartupJobs:** CloseRocket Customer Success & UX Partner je BA onsite, ale fluent English je nutnosť. Luigi's Box výsledky sú hard-dev/English nevhodné. XDENT StartupJobs je primárne sales rola.
- **Reddit:** dnešný r/wordpressjobs výsledok je `[FOR HIRE]`, nie hiring lead.
- **Facebook:** **0 verified hits**. Verejný výsledok naďalej vracia Join/Log Into Facebook; prioritné WP/Woo/BA skupiny nemajú konkrétny aktuálny hiring post s verejne overiteľným priamym linkom.

### Run summary
- Source families reálne skontrolované: **12**.
- Nové aktívne položky: **0**.
- Vyradené lokalitou/country eligibility: **3**.
- Vyradené jazykovým/hard-skill gateom: **5**.
- Vyradené ako slabé/nízka hodnota alebo nízka šanca: **6**.
- Duplikát / `[FOR HIRE]` / closed alebo nevhodný typ leadu: **4**.

### LIVE mix hlavného `jobs-data.json`
- **28 aktívnych položiek**.
- Profesia: **12/28 = 42,9 %**.
- LinkedIn: **2/28 = 7,1 %**.
- Priame firemné kariéry: **7/28 = 25,0 %**.
- GROWNi/Pretlak/Kariera/Worki/iný job board mimo Profesia: **4/28 = 14,3 %**.
- Freelance: **3/28 = 10,7 %**.
- **Mimo Profesia spolu: 16/28 = 57,1 %.**

## FAIL-CLOSED pravidlá
- Existujúca aktívna položka sa nemaže iba preto, že ju nový search nenašiel.
- Pokles feedu >20 % alebo strata celej kategórie = zápis sa nevykoná.
- Duplikát: firemný career link > originálny LinkedIn/company post > Profesia > iný job board > agregátor/repost.
- Facebook/community položka vyžaduje konkrétny verejne overiteľný post a priamy link.
- Mimo BA/okolia sa nová aktívna položka povoľuje iba pri jednoznačne overenom remote/HO vykonateľnom zo Slovenska.

## Application Builder
Personalizovaná reakcia a cielené CV sa generujú iba z faktických údajov MASTER profilu a konkrétnej položky. Nevymýšľajú sa kvalifikácie ani hard skills.

## BACKLOG — ďalšie zmysluplné rozšírenia
1. Import CRM backupu.
2. Source-success analytics.
3. Commute/distance.
4. Deadline alert.
5. Cross-device sync.
6. Nexus authenticated Facebook ingestion.
7. PublishedAt / <24 h priority.
8. Company/contact enrichment.
9. Freshness decay.
10. Application friction score.
11. Competition signal.
12. Timezone compatibility score.
13. Client quality/risk signal.
14. Source canonical migration queue.
15. Closed-listing negative cache.
16. Evidence snapshot fingerprint.
17. Adaptive recheck SLA.
18. Apply-path integrity check.
19. Source-yield allocator s exploration floor.
20. Mandatory-requirement gate.
21. Employer relationship memory.
22. Applicant-velocity signal.
23. Evidence coverage score.
24. Source latency / crawl-delay score.
25. Effective hourly value.
26. Requirement provenance map.
27. Opportunity aging state machine.
28. Coverage-debt counter.
29. Community lead lane.
30. Closed-result suppression fingerprint.
31. Support-intensity gate.
32. Apply-now decision score.
33. Near-fit rescue checklist.
34. Rejection-reason query feedback loop.
35. Critical-evidence expiry.
36. Compensation-form normalizer.
37. Discovery-query diversity ledger.
38. Direct-contact advantage score.
39. Search saturation detector.
40. Selection-task readiness pack.
41. Role-age vs active-proof split.
42. Language-evidence conflict resolver.
43. Worksite-obligation classifier.
44. Eligibility schema completeness gate.
45. Hard-gate negative evidence cache.
46. Application-window vs start-date decoupler.
47. Industry compatibility flag.
48. Work-schedule compatibility profile.
49. Employment-condition contradiction detector.
50. Fuzzy cross-source role identity resolver.
51. Remote-country eligibility memory.
52. Discovery-to-active quarantine lane.
53. Cross-source corroboration score.
54. Requirement-delta detector.
55. Application follow-up timing engine.
56. Opportunity scarcity score.
57. Canonical source failover chain.
58. Top-result actionability diversity guard.
59. Minimum viable opportunity threshold.
60. Cross-source location conflict quarantine.
61. Search-index/detail contradiction gate.
62. **Sales-intensity classifier** — rozlíši customer support/back-office od cold-calling, akvizície alebo provízneho predaja a znižuje prioritu takých rolí.
63. **Guaranteed-pay floor gate** — oddelí garantovanú základnú mzdu od maximálnej/províznej odmeny a zabráni marketingovému hornému číslu deformovať ranking.
64. **Repost freshness laundering detector** — mirror alebo agregátor nesmie zmeniť starú ponuku na „dnešnú“ iba tým, že ju znovu načítal alebo publikoval; `publishedAt` sa viaže na najstarší dôveryhodný canonical timestamp a zvlášť sa eviduje `lastSeenAt`.
65. **Source-specific evidence contract** — podľa typu zdroja sa pred LIVE aktiváciou vyžaduje minimálna sada dôkazov; pri chýbajúcom kritickom poli ide kandidát do quarantine/recheck.
66. **Employer-template reuse detector** — rozpozná, keď firma opakovane používa takmer rovnaký text náplne pre rozdielne názvy, mzdy alebo role. Prínos: menej chybných fuzzy dedupe a presnejší ranking konkrétnej aktuálnej role.
67. **Vehicle-obligation classifier** — samostatne rozlíši `vodičák B výhoda`, `vodičák B povinný`, `vlastné auto povinné`, `služobné auto poskytnuté` a `terén bez jasného vozidla`.
68. **Client-engagement freshness signal** — pri freelance zdrojoch oddelene sleduje `postedAt`, `lastViewedByClient`, `interviewing`, `hires` a aktívne kontrakty.
69. **Emergency-response SLA compatibility gate** — identifikuje roly, ktoré vyžadujú pevné online hodiny, okamžité reakcie, permanentnú dostupnosť alebo videohovory, a porovná ich s reálnou dostupnosťou.
70. **Multi-role employer collision guard** — ak má jedna firma súčasne viac vhodných otvorených rolí, zoskupí ich, vyberie jeden primárny smer reakcie a upozorní pred paralelným poslaním viacerých nesúrodých žiadostí.
71. **Rejected-role resurrection trigger** — pri už vyradenej ponuke sleduje zmenu kritického dôkazu a pri relevantnej zmene ju vráti do quarantine/review.
72. **Unpaid assessment workload/risk flag** — odhalí test task/case study/trial a označí neprimerane veľké neplatené zadanie pred reakciou.
73. **Portfolio evidence auto-selector** — pre každú TOP ponuku vyberie 2–3 najrelevantnejšie už preukázané dôkazy do reakcie/CV bez vymýšľania skillov.
74. **Audit-feed reconciliation invariant** — prepočíta source mix/active count/eligibility priamo z feedu a porovná s auditom a MASTER.
75. **Remote engagement-model verifier** — pri remote rolách overí, či firma reálne vie zamestnať/kontrahovať človeka zo Slovenska, nie iba či text obsahuje remote/worldwide.
76. **Onboarding/trainability signal — NOVÉ** — samostatne vyhodnotí, či firma výslovne zaškolí, prijíma absolventa/človeka bez praxe, alebo naopak očakáva okamžitú samostatnosť a viacročnú skúsenosť. Prínos: adjacent technické/support roly dostanú realistickejšie skóre; „firma zaučí“ môže zvýšiť šancu aj pri miernom skill gape, kým „3+ years required“ zníži prioritu.
77. **Physical/field-work burden classifier — NOVÉ** — z textu rozlíši kancelársku prácu, občasný terén, pravidelné výjazdy, dlhé státie, sklad/manipuláciu a fyzickú záťaž. Prínos: e-shop/support/admin rola nebude hodnotená len podľa názvu, ak jej reálna náplň obsahuje významný sklad, nosenie alebo častý terén; ranking bude viac odrážať praktický pracovný deň.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
