# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 29. 8. 2026 09:29 CEST

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
9. **Lanža — Vodič/ka online nákupov — Match 91** — BA + okolie; online nákupy, nie jedlo; 1 500–3 000 €/mes., služobné vozidlo, B bez tachografu.
10. **VÚB — Digitálny agent/agentka — Match 90** — 100 % home office / Slovensko, 1 480 €/mes.; SŠ s maturitou, firma zaškoľuje.
11. **IZY VAPE — Back Office & Operations Coordinator – e-commerce | Remote — Match 90** — BA/prevažne HO, 1 600–2 000 €/mes.; e-shop/objednávky/reklamácie/logistika/AI.
12. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, ceny a landing pages.
13. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia, 1 520 €/mes. + bonus.
14. **Upwork — WooCommerce Assistant — Match 89** — worldwide remote, 5–10 USD/h; mínus US Mountain Time.
15. **ALL SPORTS — e-shop Bauer Hockey — Match 88**.
16. **Akfos — kuriér/vodič B, kusové zásielky — Match 88** — Bratislava, 1 500 €/mes., ASAP; skrátený úväzok/dohoda/živnosť, bez tachografu a bez C/C+E.
17. **SuperFaktura — Supportový parťák — Match 87**.
18. **Cerkam Facility Services — Terénny administratívny pracovník — Match 86** — Bratislava, od 1 500 €/mes. + bonusy.
19. **RM Biznis servis / Worki — Manažér servisu klientov — Match 86** — väčšina práce online, občas BA, 10–15 €/h.
20. **Bookio — B2B/SaaS online support — Match 85**.
21. **AI & Tech Assistant / Upwork — Match 84** — worldwide remote; web/low-no-code/QA/AI workflows; language + competition risk.
22. **Dotypos SK — Technický support — Match 84**.
23. **Pandora — Associate Assistant, eCommerce Operations — Match 84**.
24. **Allit — End-User Support — Match 84**.
25. **3MON — IT & Operations Support — Match 84**.
26. **STU — Web špecialista CMS/web — Match 83**.
27. **VNET — IT customer support — Match 82**.
28. **LAST MILE — Operátor NOC / Hotline podpora — Match 82**.
29. **Confilogi — Operátor zákazníckej linky 100 % HO — Match 82** — remote SK, 1 520–2 200 €/mes.; mínus predaj, živnosť a víkendy.
30. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 29. 8. 2026 09:29 CEST — LATEST
Reálne prehľadané skupiny: **Profesia; LinkedIn Jobs; direct company careers; Worki.sk; Brigada.sk; Práca za rohom/Kariera; Služby zamestnanosti; Pretlak; WordPress Jobs; Upwork/freelance; Reddit/WP komunity; Facebook verejná indexácia.** Spolu **12 nezávislých kontrolovaných skupín**, z toho 11 mimo Profesia.

### Výsledky tohto behu
- **Nové aktívne položky do `jobs-data.json`: 0.** Obsah LIVE feedu sa nezmenil, preto sa `jobs-data.json.updatedAt` neposúva kozmeticky a zostáva **29. 8. 2026 06:35:54 CEST**.
- **LinkedIn — Wolt Support Associate FT/PT, Bratislava:** čerstvá lokálna support rola, ale explicitne vyžaduje **English minimum B2**, preto neprešla jazykovým profilom. Zdroj: https://sk.linkedin.com/jobs/view/support-associate-full-time-at-wolt-4447674791
- **Služby zamestnanosti — Metrohm Research Slovakia, IT Support Specialist, Petržalka, 1 800 €/mes.:** práca je veľmi relevantná na troubleshooting a end-user support, ale požaduje **VŠ I. stupňa, aspoň 1 rok praxe a AJ B1–B2**, preto sa neaktivovala. Zdroj: https://sluzbyzamestnanosti.gov.sk/pracovne-ponuky/67ad9499-6440-468b-bf41-6b0e3df33264
- **Upwork — WordPress → GoHighLevel Website Migration Contractor:** worldwide remote, 150 USD za prvé 2 test weby, ale vyžaduje už preukázanú prax v **native GoHighLevel Website Builder** a pri kontrole má 20–50 proposals; hard-skill + competition gate. Zdroj: https://www.upwork.com/freelance-jobs/apply/WordPress-GoHighLevel-Website-Migration-Contractor_~022093515018380851799/
- **Upwork — WordPress Landing Page Designer & Developer:** worldwide remote, 40 USD fixed, 15–20 proposals a už 5 interviewing; nízka hodnota a rozbehnutý výber, bez aktivácie. Zdroj: https://www.upwork.com/freelance-jobs/apply/WordPress-Landing-Page-Designer-Developer-Needed_~022093526607484637907/
- **Worki:** existujúci RM Biznis servis je stále medzi aktuálnymi BA admin výsledkami a už je v LIVE; ďalšie home-office výsledky sú finančný predaj, jazykovo špecifické alebo mimo profilu.
- **Brigada.sk:** dnešné BA výsledky sú prevažne retail/dokladanie (napr. 13,15 €/h), teda použiteľná núdzová brigáda, ale nie lepší strategický smer než aktívne admin/web/driver možnosti.
- **Priame kariéry:** Websupport Customer Success Advisor a O2 Digital Content Admin zostávajú verejne dostupné; bez významnej zmeny. O2 junior SIM/identity je zaujímavý rastový smer, ale jeho technické predpoklady sú nad aktuálny bezpečný fit.
- **Reddit / WordPress komunity:** najčerstvejšie indexované výsledky sú `FOR HIRE` ponuky freelancerov, nie hiring dopyty; bez aktivácie.
- **Facebook:** **0 verified hits**. Verejná indexácia WordPress Slovensko, WooCommerce SK+CZ a BA pracovných skupín neposkytla konkrétny aktuálny hiring post s priamym overiteľným linkom; coverage ostáva `limited` a nič sa nepredstiera.

### Run summary
- Reálne skontrolované zdrojové skupiny: **12**.
- Nové aktívne položky: **0**.
- Vyradené jazykovým/hard-skill gateom: **5**.
- Vyradené ako slabé/nízka hodnota: **5**.
- Duplicitné/existing: **6**.
- Vyradené pre freshness/evidence: **3**.
- Vyradené pre lokalitu: **2**.

### LIVE mix
- Aktívny feed: **33 položiek**.
- Source mix zostáva približne **Profesia 45,5 % / mimo Profesia 54,5 %**.
- `source-audit.json.updatedAt` = **29. 8. 2026 09:29 CEST**.
- Audit freshness a content freshness sa vedú oddelene: search bol vykonaný teraz, ale LIVE obsah sa nezmenil.

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
84. Commute-adjusted opportunity value.
85. Application-channel conversion tracker.
86. Employer legitimacy & reputation gate.
87. Duplicate application guard.
88. Income-start latency score.
89. Phone-load compatibility flag.
90. Scope-to-pay mismatch detector.
91. Verification escalation queue.
92. Employer response-latency memory.
93. Selection-process ROI score.
94. Source parser/schema drift sentinel.
95. Mandatory source-family SLA watchdog.
96. Recruiter/company hiring-activity signal.
97. Application reuse cluster.
98. Compensation evidence confidence band.
99. Application prerequisite completeness check.
100. Contract-form net-value normalizer.
101. Trainable-gap cost estimator.
102. Market-relative compensation percentile.
103. Employer multi-application concentration guard.
104. Employer-paid cost ownership map.
105. Schedule-premium / weekend burden normalizer.
106. Workload-intensity extractor.
107. Remote workplace & privacy burden flag.
108. Zero-hit reason classifier.
109. Role-family source blind-spot matrix.
110. Duty-mix decomposition.
111. Same-role repost churn-risk signal.
112. Search-depth coverage quota.
113. Search-index staleness detector.
114. CV requirement coverage score.
115. Query-to-hire attribution ledger.
116. Near-miss language substitution miner.
117. Opportunity evidence TTL by field.
118. Onboarding-vs-recurring travel classifier.
119. Screening-question evidence prefill map.
120. Search freshness vs content freshness split.
121. Calendar-aware source weighting.
122. Probation & termination-risk extractor.
123. Exclusivity / non-compete / IP-risk flag.
124. Selection-location burden gate.
125. Critical-field conflict bundle.
126. Remote employment jurisdiction & invoicing compatibility gate.
127. Opportunity dominance graph.
128. **Contractor payment-latency & cash-flow risk — NOVÉ** — pri freelance/živnostenských ponukách evidovať prvý možný dátum výplaty, fakturačný cyklus, splatnosť (napr. 14/30/60 dní), platformový hold a prípadnú podmienku schválenia timesheetu. Z vypočítanej reálnej dostupnosti peňazí vznikne samostatný cash-flow risk, aby vysoká hodinovka s prvou platbou o 45–60 dní neprebila ponuku s nižšou sadzbou, ale rýchlym príjmom.
129. **Variable-pay dependency ratio — NOVÉ** — oddeliť garantovaný základ od provízií, bonusov, OTE a výkonovej zložky a vypočítať, aká časť deklarovanej odmeny je skutočne garantovaná. Pri ponukách typu „1 500–3 000 €“ alebo „od X + neobmedzené bonusy“ sa bude ranking opierať primárne o garantovanú sumu a variabilná časť dostane samostatnú confidence/risk vrstvu. Praktický prínos: menej času na ponuky s marketingovo nafúknutou odmenou a lepšie porovnanie TPP vs. živnosť/freelance.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.