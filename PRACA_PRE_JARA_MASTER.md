# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 29. 8. 2026 19:28 CEST

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
- **LUNYS — UZAVRETÉ / vyradiť z aktívneho TOP.** Canonical LinkedIn detail 29. 8. 2026 už uvádza, že neprijíma žiadosti; `jobs-data.json` čaká na bezpečný atómový status patch.
1. **LEAF — Implementation Support Specialist — Match 94** — prevažne remote; customer support + back-office + reporty + web obsah + AI automatizácie.
2. **OVB — Špecialista/ka pre AI a automatizáciu — Match 93** — Bratislava remote/hybrid, od 2 000 €/mes.; AI agenti a procesy.
3. **Ryvenia — Shoptet Specialist — Match 93** — Bratislava/full remote/hybrid; produkty, kategórie, CSV, migrácie, QA.
4. **Energohub — Office manager / koordinátor firemných procesov — Match 92** — Dúbravka, od 1 800 €/mes.; koordinácia, CRM/digitálne nástroje, procesy a AI; pracovná AJ iba výhodou.
5. **Penta Real Estate — Sales Administrator — Match 92** — Bratislava, 1 800 €/mes. + bonus + HO; CRM, dáta, reporty, dokumenty a podpora.
6. **Hilti — Implementation & Service Specialist — Match 92** — Bratislava, od 1 800 €/mes. + bonusy + auto; implementation/service/CRM.
7. **Websupport — Customer Success Advisor — Match 91** — hosting, SSL, troubleshooting, weby a customer support.
8. **Lanža — Vodič/ka online nákupov — Match 91** — BA + okolie; online nákupy, nie jedlo; 1 500–3 000 €/mes., služobné vozidlo, B bez tachografu.
9. **VÚB — Digitálny agent/agentka — Match 90** — 100 % home office / Slovensko, 1 480 €/mes.; SŠ s maturitou, firma zaškoľuje.
10. **IZY VAPE — Back Office & Operations Coordinator – e-commerce | Remote — Match 90** — BA/prevažne HO, 1 600–2 000 €/mes.; e-shop/objednávky/reklamácie/logistika/AI.
11. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, ceny a landing pages.
12. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia, 1 520 €/mes. + bonus.
13. **Upwork — WooCommerce Assistant — Match 89** — worldwide remote, 5–10 USD/h; mínus US Mountain Time.
14. **ALL SPORTS — e-shop Bauer Hockey — Match 88**.
15. **Akfos — kuriér/vodič B, kusové zásielky — Match 88** — Bratislava, 1 500 €/mes., ASAP; skrátený úväzok/dohoda/živnosť, bez tachografu a bez C/C+E.
16. **Upwork — Virtual Assistant for Book Coaching Business — Match 88** — worldwide remote, 10–15 USD/h; WordPress aktualizácie + ActiveCampaign + administratíva; mínus 20–50 proposals a malý client spend.
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

## SOURCE AUDIT — 29. 8. 2026 19:28 CEST — LATEST
Reálne prehľadané skupiny: **Profesia; direct company careers/GROWNi; LinkedIn Jobs; Worki.sk; Brigada.sk; Pretlak/StartupJobs/WordPress Jobs; Upwork/freelance; Reddit/WP komunity; Facebook verejná indexácia; cross-source corroboration.** Spolu **10 nezávislých kontrolovaných skupín**, minimálne 8 source families a viac než 5 mimo Profesia.

### Výsledky tohto behu
- **Nové aktívne položky: 0.** Nenašiel sa nový kandidát, ktorý by po lokalitnom, jazykovom, hard-skill a value gate prekonal existujúce priority.
- **Významná zmena:** LUNYS canonical LinkedIn listing už neprijíma žiadosti; v MASTER je vyradený z TOP. `jobs-data.json` zatiaľ obsahuje starý `active` stav a vyžaduje bezpečný atómový status patch bez rizika straty ostatných validných položiek.
- **Upwork:** 29.8. pribudli worldwide VA/admin/WordPress hity, ale väčšina bola low-value fixed-price; full-time UK-hours VA vyžaduje strong written/spoken English. Žiadny nový winner.
- **LinkedIn:** Wolt Bratislava Support Associate vyžaduje **minimum B2 English**, preto zostáva hard language reject. citeturn733107search12turn733107search13
- **Brigada.sk:** BA pokladňa/dokladanie za **13,15 €/h** bola viazaná na rannú zmenu 29.8.; večer už nie je reálne akčná. citeturn733107search14
- **Worki:** bez nového aktívneho winnera; starý SFÉRA Support L1 je už obsadený/zrušený. citeturn733107search15
- **Facebook:** **0 verified hits**; verejná indexácia neposkytla konkrétny aktuálny hiring post s priamym overiteľným linkom. Coverage zostáva `limited`.

### Run summary
- Reálne skontrolované zdrojové skupiny: **10**.
- Nové aktívne položky: **0**.
- Významne zmenené priority: **1 (LUNYS closure)**.
- Vyradené jazykovým/hard-skill gateom: **4**.
- Vyradené ako slabé/nízka hodnota: **7**.
- Duplicitné/existing: **4**.
- Vyradené pre freshness/evidence: **2**.

### LIVE mix
- Fyzický `jobs-data.json` má stále **34 položiek**, ale **efektívne oprávnených je 33**, pretože LUNYS má canonical closure evidence.
- Posledný potvrdený source mix pred closure ostáva približne **Profesia 44,1 % / mimo Profesia 55,9 %**; po status patchi sa mix znovu prepočíta.
- `jobs-data.json.updatedAt` = **29. 8. 2026 10:27:16 CEST** — obsahový status patch LUNYS čaká na bezpečnú mutáciu.
- `source-audit.json.updatedAt` = **29. 8. 2026 19:28:47 CEST**.
- `job-sources.json.updatedAt` = **29. 8. 2026 19:28:47 CEST**.
- Freshness reason: **`content-change-pending-safe-feed-mutation`**.

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
128. Contractor payment-latency & cash-flow risk.
129. Variable-pay dependency ratio.
130. Freelance client-budget realism detector.
131. Evidence-backed skill adjacency map.
132. Candidate-data / payment scam gate.
133. Channel-specific language burden classifier.
134. Feed freshness reason code.
135. Low-value freelance suppression floor.
136. Behavioral preference calibrator.
137. Role-family outcome calibration.
138. Freshness-proof promotion rule.
139. Required-tool specificity burden.
140. Shift-start feasibility gate.
141. Rolling source-mix window.
142. **Title-vs-scope seniority resolver** — senioritu neodvodzovať z názvu `Manager/Specialist/Junior`, ale zo skutočných povinností, ownershipu, požadovaných rokov praxe, rozhodovacích právomocí a hard-skillov.
143. **Application-deadline confidence model** — rozlíšiť explicitný deadline, `open until filled`, inferred deadline a neoverený/žiadny deadline; každý stav dostane confidence a vlastnú recheck SLA.
144. **Generic-post / low-specificity suppression** — pri freelance a VA inzerátoch merať konkrétnosť zadania: jasné deliverables, workload/hodiny, nástroje, zodpovednosť, časové pásmo a spôsob odovzdania.
145. **Freelance hire-to-spend anomaly signal** — pri Upwork/freelance klientoch počítať spend na hire, pomer aktívnych hires, vek účtu a opakované micro-contracty.
146. **Employer stability / continuity signal** — pre TPP a dlhodobé kontrakty oddeliť legitimitu firmy od pravdepodobnosti stabilnej práce: vek a veľkosť firmy, opakované náborové churn signály, verejné rušenie pobočiek/layoffs, dĺžka existencie role a dôveryhodné finančno-prevádzkové signály.
147. **Contract-duration / continuity score** — explicitne normalizovať dobu kontraktu a pravdepodobnosť pokračovania: TPP neurčito, TPP určito, 6+ mesiacov, 3–6 mesiacov, 1–3 mesiace, jednorazová zákazka; oddeliť `contract-to-hire` marketing od reálne doloženého pokračovania.
148. **Atomic feed mutation pipeline — NOVÉ** — pri každej statusovej alebo obsahovej zmene použiť `parse → mutate → schema validate → count/category invariant → commit`; ak validácia zlyhá, feed ostáva nedotknutý a zmena ide do explicitnej patch queue. Praktický prínos: odstráni dnešný problém, keď closure LUNYS vieme overiť, ale nechceme riskovať stratu validných položiek pri full-file rewrite.
149. **Actionability cutoff timestamp — NOVÉ** — pre časovo viazané brigády, jednorazové zmeny a urgentné zákazky ukladať `lastUsefulApplyAt`/`actionableUntil`, nie iba `publishedAt` alebo deadline. Praktický prínos: ranná brigáda sa večer automaticky prestane tváriť ako relevantný hit, aj keď stránka ostáva indexovaná.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.