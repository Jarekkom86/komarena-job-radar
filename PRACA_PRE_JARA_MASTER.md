# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 28. 8. 2026 15:24 CEST

## Architektúra a ochrana UI
- Aktuálny používateľský MASTER: `komarena-job-radar-v6.4.html`.
- Autoritatívny živý feed: `jobs-data.json` (`schemaVersion: 1`).
- Bootstrap diverzity: `jobs-data-nonprof.json` — zamknutý, automat ho nemení.
- Register zdrojov: `job-sources.json`.
- Pravdivý audit prístupu: `source-audit.json`.
- Stabilný BA fallback: `baseline-jobs.json` — zamknutý.
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
- Povinný ďalší cudzí jazyk, hard PHP/fullstack/Laravel/React/Vue, pokročilé Linux/Docker/API bez preukázanej praxe = silná penalizácia alebo hard gate.
- Lokalita BA/okolie alebo overený remote/HO je hard gate, nie bonus.
- Agregátor/repost nesmie prebiť priamy firemný zdroj.

## Aktuálne TOP
1. **LUNYS — E-commerce špecialista — Match 96** — WooCommerce/Shoptet/Magento, denná správa e-shopu, kategórie, testovanie, promo a AI. Canonical: LinkedIn.
2. **LEAF — Implementation Support Specialist — Match 94** — prevažne remote; customer support + back-office + reporty + web obsah + AI automatizácie.
3. **OVB — Špecialista/ka pre AI a automatizáciu — Match 93** — Bratislava remote/hybrid, od 2 000 €/mes.; AI agenti a procesy.
4. **Ryvenia — Shoptet Specialist — Match 93** — Bratislava/full remote/hybrid; produkty, kategórie, CSV, migrácie, QA.
5. **Energohub — Office manager / koordinátor firemných procesov — Match 92** — Dúbravka, od 1 800 €/mes.; koordinácia, CRM/digitálne nástroje, procesy a AI; pracovná AJ iba výhodou.
6. **Penta Real Estate — Sales Administrator — Match 92** — Bratislava, 1 800 €/mes. + bonus + HO; CRM, dáta, reporty, dokumenty a podpora.
7. **Hilti — Implementation & Service Specialist — Match 92** — Bratislava, od 1 800 €/mes. + bonusy + auto; implementation/service/CRM.
8. **Websupport — Customer Success Advisor — Match 91** — hosting, SSL, troubleshooting, weby a customer support.
9. **IZY VAPE — Back Office & Operations Coordinator – e-commerce | Remote — Match 90** — BA/prevažne HO, 1 600–2 000 €/mes.; e-shop/objednávky/reklamácie/logistika/AI. Riziko: AJ a neskorší nástup.
10. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, ceny a landing pages.
11. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia, 1 520 €/mes. + bonus.
12. **Upwork — WooCommerce Assistant — Match 89** — worldwide remote, 5–10 USD/h; mínus US Mountain Time.
13. **ALL SPORTS — e-shop Bauer Hockey — Match 88**.
14. **SuperFaktura — Supportový parťák — Match 87**.
15. **Cerkam Facility Services — Terénny administratívny pracovník — Match 86** — Bratislava, od 1 500 €/mes. + bonusy.
16. **RM Biznis servis / Worki — Manažér servisu klientov — Match 86** — väčšina práce online, občas BA, 10–15 €/h.
17. **Bookio — B2B/SaaS online support — Match 85**.
18. **AI & Tech Assistant / Upwork — Match 84** — worldwide remote; web/low-no-code/QA/AI workflows; language + competition risk.
19. **Dotypos SK — Technický support — Match 84**.
20. **Pandora — Associate Assistant, eCommerce Operations — Match 84**.
21. **Allit — End-User Support — Match 84**.
22. **3MON — IT & Operations Support — Match 84**.
23. **STU — Web špecialista CMS/web — Match 83**.
24. **VNET — IT customer support — Match 82**.
25. **LAST MILE — Operátor NOC / Hotline podpora — Match 82** — Ružinov; first-line support; mínus 6–8 €/h a B1 AJ.
26. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 28. 8. 2026 15:24 CEST
Reálne prehľadané zdrojové skupiny: **Profesia; direct company careers; LinkedIn Jobs; Brigada.sk; Worki.sk; Práca za rohom; Kariera/Služby zamestnanosti; Pretlak/tech-creative; StartupJobs/WordPress Jobs; Upwork; Freelancermap/Freelancer a ďalšie freelance indexy; Reddit/WP komunity; Facebook verejná indexácia.**

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 1 — Energohub, Office manager / koordinátor firemných procesov, Match 92.** Dúbravka, od 1 800 €/mes., SŠ s maturitou; firma hľadá reálnu administratívnu/koordinačnú prax, Microsoft 365, CRM/digitálne nástroje a aktívne využívanie AI. Pracovná AJ a energetika sú výhodou, nie podmienkou. Výber zahŕňa dve krátke otázky, telefonát, osobný pohovor a krátke praktické zadanie. citeturn588865search0turn790925search1
- **TRIGON — Špecialista zákazníckeho servisu M/Ž:** BA kraj a 1 600 €/mes., ale detail vyžaduje pokročilú angličtinu aj nemčinu; hard-language reject. citeturn790925search0
- **LinkedIn / Foxelli:** 100 % remote e-commerce support je Slovakia-eligible, ale jedna rola je crochet-specific a druhá má nočný support/sales režim; bez nového LIVE winnera. citeturn461648search1turn461648search6
- **Upwork — WordPress Webmaster:** worldwide remote, ale fluent English, US business hours a PHP; 20–50 proposals. Hard-language/timezone/hard-skill reject. citeturn461648search0
- **Upwork — WordPress Site Speed Optimization:** 18–30 USD/h, ale mandatory PHP a 20–50 proposals. Hard-skill/competition reject. citeturn461648search4
- **Upwork — WordPress Expert:** 50+ proposals a PHP mandatory. Reject pre competition + hard-dev. citeturn461648search7
- **Upwork — AI Virtual Assistant & Automation Specialist:** worldwide remote, ale 5–10 USD/h, 20–50 proposals a WordPress/digital marketing scope; neprebil existujúce silnejšie leady. citeturn461648search2
- **Upwork — Elementor quick fixes:** iba 5 USD fixed, 10–15 proposals; value reject. citeturn461648search3
- **Reddit:** aktuálne WP/Woo výsledky sú prevažne `[FOR HIRE]` alebo staršie US-only hiring posty; bez nového vhodného dopytu. citeturn461648reddit120turn461648reddit123
- **Facebook:** **0 verified hits**. Prioritné WP/Woo/BA skupiny boli znovu kontrolované verejnou indexáciou; login/indexing limit zostáva, preto sa nič nepredstiera.
- **Ostatné slovenské a tech/creative zdroje:** search bol vykonaný, ale ďalší plne overiteľný výsledok neprešiel lokalitou, jazykom, hard-skill alebo value gateom.

### Run summary
- Reálne skontrolované zdrojové skupiny: **13**.
- Nové aktívne položky: **1**.
- Vyradené lokalitou/country eligibility: **2**.
- Vyradené jazykovým/hard-skill gateom: **8**.
- Vyradené ako slabé/nízka hodnota: **7**.
- Duplikát / `[FOR HIRE]` / nevhodný typ leadu: **5**.

### LIVE mix hlavného feedu
- Potvrdený stav: **29 aktívnych položiek**.
- Profesia: **13/29 = 44,8 %**.
- LinkedIn: **2/29 = 6,9 %**.
- Priame firemné kariéry: **7/29 = 24,1 %**.
- Ostatné jobboardy mimo Profesia: **4/29 = 13,8 %**.
- Freelance: **3/29 = 10,3 %**.
- **Mimo Profesia spolu: 16/29 = 55,2 %.**

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
62. Sales-intensity classifier.
63. Guaranteed-pay floor gate.
64. Repost freshness laundering detector.
65. Source-specific evidence contract.
66. Employer-template reuse detector.
67. Vehicle-obligation classifier.
68. Client-engagement freshness signal.
69. Emergency-response SLA compatibility gate.
70. Multi-role employer collision guard.
71. Rejected-role resurrection trigger.
72. Unpaid assessment workload/risk flag.
73. Portfolio evidence auto-selector.
74. Audit-feed reconciliation invariant.
75. Remote engagement-model verifier.
76. Onboarding/trainability signal.
77. Physical/field-work burden classifier.
78. Source-access degradation detector.
79. CV/reaction variant outcome tracker.
80. Application-cost / platform-credit guard.
81. Hard-gate substitution search.
82. Claim-safe application evidence matrix.
83. Daily application capacity scheduler.
84. **Commute-adjusted opportunity value** — spojí odmenu, pracovný čas, počet onsite dní, reálny čas dochádzky, palivo/parkovanie a HO do porovnateľnej efektívnej hodinovej hodnoty.
85. **Application-channel conversion tracker** — sleduje odpovede a pohovory podľa kanála podania a pri rovnakom leade preferuje historicky úspešnejší kanál.
86. **Employer legitimacy & reputation gate** — oddelene od `sourceTrust` overí samotného zamestnávateľa/klienta: konzistentnosť identity firmy, históriu kariérnych ponúk, verejnú stopu, podozrivé platobné alebo náborové signály a pri freelance aj vek/históriu klienta.
87. **Duplicate application guard** — CRM pred otvorením reakcie skontroluje canonical role identity, firmu, názov pozície a už použité application channels, aby sa tá istá pozícia neposlala druhýkrát cez Profesia/LinkedIn/company form/mirror.
88. **Income-start latency score** — odhadne, kedy po reakcii môže reálne prísť prvý príjem: zohľadní plánovaný nástup, dĺžku výberu, neplatené školenie/skúšku, fakturačnú splatnosť pri živnosti/freelance a výplatný cyklus.
89. **Phone-load compatibility flag** — z dôkazov v inzeráte klasifikuje podiel telefonovania (`low / mixed / high / 90%+`) oddelene od všeobecného customer-support labelu.
90. **Scope-to-pay mismatch detector** — porovná šírku zodpovedností, požadovanú senioritu, pracovný čas a technický rozsah proti reálnej odmene. Praktický prínos: odfiltruje ponuky typu „WordPress + Shopify + webdev + leadgen + 6 dní týždenne“ za symbolický fixed budget ešte pred tým, než zaberú miesto v TOP alebo čas na reakciu.
91. **Verification escalation queue** — high-fit lead, ktorý je blokovaný iba jedným kritickým neznámym údajom (napr. AJ, remote-country eligibility, mzda alebo funkčný apply path), dostane cielené overenie canonical zdroja pred ďalším širokým discovery kolom. Praktický prínos: menej kvalitných ponúk zostane zbytočne v quarantine a čas sa nespotrebuje na opakované všeobecné vyhľadávanie.
92. **Employer response-latency memory — NOVÉ** — z CRM histórie bude ukladať medián času od reakcie po prvú odpoveď podľa firmy a application channelu. Praktický prínos: realistickejšie follow-up termíny, skoršie odhalenie ghost-prone kanálov a lepšie rozhodnutie, kde investovať ďalšiu reakciu.
93. **Selection-process ROI score — NOVÉ** — porovná počet kôl, video/AI interview, praktické zadanie, nutné onsite návštevy a odhadovaný čas výberu proti mzde, Match skóre a pravdepodobnosti odpovede. Praktický prínos: dlhý výberový proces pri slabej ponuke nebude zbytočne spotrebúvať čas, zatiaľ čo kvalitná ponuka s primeraným procesom zostane vysoko.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
