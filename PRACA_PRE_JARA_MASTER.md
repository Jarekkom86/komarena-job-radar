# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 28. 8. 2026 11:18 CEST

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
5. **Penta Real Estate — Sales Administrator — Match 92** — Bratislava, 1 800 €/mes. + bonus + HO; CRM, dáta, reporty, dokumenty a podpora.
6. **Hilti — Implementation & Service Specialist — Match 92** — Bratislava, od 1 800 €/mes. + bonusy + auto; implementation/service/CRM.
7. **Websupport — Customer Success Advisor — Match 91** — hosting, SSL, troubleshooting, weby a customer support.
8. **IZY VAPE — Back Office & Operations Coordinator – e-commerce | Remote — Match 90** — BA/prevažne HO, 1 600–2 000 €/mes.; e-shop/objednávky/reklamácie/logistika/AI. Riziko: AJ a neskorší nástup.
9. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, ceny a landing pages.
10. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia, 1 520 €/mes. + bonus.
11. **Upwork — WooCommerce Assistant — Match 89** — worldwide remote, 5–10 USD/h; mínus US Mountain Time.
12. **ALL SPORTS — e-shop Bauer Hockey — Match 88**.
13. **SuperFaktura — Supportový parťák — Match 87**.
14. **Cerkam Facility Services — Terénny administratívny pracovník — Match 86** — Bratislava, od 1 500 €/mes. + bonusy.
15. **RM Biznis servis / Worki — Manažér servisu klientov — Match 86** — väčšina práce online, občas BA, 10–15 €/h.
16. **Bookio — B2B/SaaS online support — Match 85**.
17. **AI & Tech Assistant / Upwork — Match 84** — worldwide remote; web/low-no-code/QA/AI workflows; language + competition risk.
18. **Dotypos SK — Technický support — Match 84**.
19. **Pandora — Associate Assistant, eCommerce Operations — Match 84**.
20. **Allit — End-User Support — Match 84**.
21. **3MON — IT & Operations Support — Match 84**.
22. **STU — Web špecialista CMS/web — Match 83**.
23. **VNET — IT customer support — Match 82**.
24. **LAST MILE — Operátor NOC / Hotline podpora — Match 82** — Ružinov; first-line support; mínus 6–8 €/h a B1 AJ.
25. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 28. 8. 2026 11:18 CEST
Reálne prehľadané zdrojové skupiny: **Profesia; direct company careers; LinkedIn Jobs; Brigada.sk; Worki.sk; Práca za rohom; Služby zamestnanosti; Pretlak; WordPress Jobs; Upwork; Freelancermap/public freelance discovery; Reddit/WP komunity; Facebook verejná indexácia.**

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 0.** Feed zostal fail-closed; nič sa nepridalo iba kvôli počtu.
- **SupportYourApp — Remote E-Commerce Customer Support Consultant:** remote gate by prešiel, ale konkrétny verejný detail vyžaduje **C1 English v hovorení aj písaní** a skúsenosť s e-commerce supportom. Hard language reject.
- **Wolt — Support Associate Bratislava:** lokalita je vhodná a po zaučení je možný HO, ale požaduje **minimálne B2 English**. Neaktivované.
- **Websupport:** existujúci Customer Success Advisor je naďalej potvrdený priamo na firemnej kariére; nejde o nový lead.
- **Worki:** Shield-Sk Administrátor e-shopu / zákaznícka podpora je explicitne obsadený/zrušený.
- **Práca za rohom:** nález IZY VAPE je iba mirror už evidovaného Profesia inzerátu; žiadny nový nezávislý hit.
- **Služby zamestnanosti:** dohľadaná BA administratíva za 400 €/mes. je staršia a hodnotovo nevyhovujúca.
- **Pretlak:** CloseRocket Customer Success & UX Partner je BA onsite, ale role/jazyková náročnosť je vyššia než aktuálny profil; neaktivované.
- **Upwork:** čerstvé worldwide výsledky zahŕňali WooCommerce build/maintenance za 5 USD, e-commerce VA za 50 USD, WP setup za 300 USD a remote admin/VA. Vyradené pre nízky budget, 20–50 proposals, hard-development alebo slabý risk/value profil; U.S.-only assistant vyradený country gateom.
- **Reddit:** aktuálne výsledky prevažne `[FOR HIRE]`, nie hiring dopyty.
- **Facebook:** **0 verified hits**. Prioritné WP/Woo/BA skupiny boli znovu kontrolované cez verejnú indexáciu; login/indexing limit zostáva, preto sa nič nepredstiera.

### Run summary
- Reálne skontrolované zdrojové skupiny: **13**.
- Nové aktívne položky: **0**.
- Vyradené lokalitou/country eligibility: **1**.
- Vyradené jazykovým/hard-skill gateom: **6**.
- Vyradené ako slabé/nízka hodnota: **7**.
- Duplikát / `[FOR HIRE]` / nevhodný typ leadu: **5**.

### LIVE mix hlavného feedu
- Posledný potvrdený stav: **28 aktívnych položiek**.
- Profesia: **12/28 = 42,9 %**.
- LinkedIn: **2/28 = 7,1 %**.
- Priame firemné kariéry: **7/28 = 25,0 %**.
- Ostatné jobboardy mimo Profesia: **4/28 = 14,3 %**.
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
84. **Commute-adjusted opportunity value — NOVÉ** — spojí odmenu, pracovný čas, počet onsite dní, reálny čas dochádzky, palivo/parkovanie a prípadný HO do jednej porovnateľnej efektívnej hodinovej hodnoty. Prínos: dve podobne platené BA ponuky už nebudú hodnotené rovnako, ak jedna stojí výrazne viac času a peňazí na dochádzanie.
85. **Application-channel conversion tracker — NOVÉ** — CRM bude oddelene sledovať reakcie, odpovede a pohovory podľa kanála podania (`direct email`, `company form`, `LinkedIn`, `Profesia`, `Upwork` a pod.) a pri rovnakom leade preferovať kanál s historicky vyššou úspešnosťou. Prínos: menej slepých reakcií a viac pohovorov z rovnakého času.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
