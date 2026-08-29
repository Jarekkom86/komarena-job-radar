# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 29. 8. 2026 06:35 CEST

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

## SOURCE AUDIT — 29. 8. 2026 06:35 CEST — LATEST
Reálne prehľadané skupiny: **Profesia; LinkedIn Jobs; direct company careers; Worki.sk; Brigada.sk; Služby zamestnanosti/Kariera; Pretlak; WordPress Jobs; Upwork/freelance; Reddit/WP komunity; Facebook verejná indexácia.** Spolu 11 nezávislých kontrolovaných skupín, z toho výrazná väčšina mimo Profesia.

### Výsledky tohto behu
- **Nové aktívne položky do `jobs-data.json`: 1 — Akfos, kuriér/vodič B, Bratislava.** Overený detail: rozvoz kusových zásielok v pridelenom rajóne, pridelené vozidlo, skener/platobný terminál, približne 6:00–15:00/16:00, skrátený úväzok/dohoda/živnosť, 1 500 €/mes., ASAP, vodičák B bez tachografu. Lanža zostáva vyššie, pretože má lepší pay range a preferovaný online-grocery model.
- **Profesia:** čerstvý Akfos aktivovaný; Lanža znovu potvrdená. Tenus koordinátor bol vyradený pre B2 AJ a cestovanie; Galanta elektroúdržba a Zvolen technická rola nespĺňajú profil/lokalitu alebo kvalifikáciu.
- **LinkedIn:** Multitude Office Manager je zaujímavý BA admin kandidát s 1 900 €, ale vyžaduje komfortnú hovorenú AJ. Brady Customer Service vyžaduje English + German; Marlink B2; SupportYourApp fluent English; Roche strong English + špecifické diagnostické zázemie. Bez aktivácie.
- **Priame firemné kariéry:** O2/Websupport/Hilti lane preverený. O2 Junior špecialista na SIM/identity je aktívny, BA a 2 500 €/mes., ale očakáva 3 roky IT/cyber/telco a základy kryptografie, databáz a Active Directory — príliš veľký hard-skill gap oproti vhodnejším LIVE rolám.
- **Upwork:** fresh worldwide WordPress výsledky prevažne $5–35 fixed-price, 15–50 proposals alebo hard PHP/strong English. Full-time remote VA za $650 vyžaduje silnú hovorenú aj písanú angličtinu. Bez nového LIVE winnera.
- **Worki / Brigada / Služby zamestnanosti / Kariera:** bez nového BA/remote winnera nad existujúce priority; technické výsledky často narážajú na vyššiu AJ/VŠ/hard-skill požiadavky.
- **Pretlak / WordPress Jobs:** bez nového A2-compatible BA/remote non-hard-dev winnera s primeranou ekonomikou.
- **Reddit / WordPress komunity:** čerstvé výsledky sú prevažne `FOR HIRE`, nie hiring leady.
- **Facebook:** **0 verified hits**. Verejná indexácia WordPress Slovensko, WooCommerce SK+CZ a BA pracovných skupín neposkytla konkrétny aktuálny hiring post s priamym overiteľným linkom; coverage ostáva `limited`.

### Run summary
- Reálne skontrolované zdrojové skupiny: **11**.
- Nové aktívne položky: **1**.
- Vyradené jazykovým/hard-skill gateom: **7**.
- Vyradené ako slabé/nízka hodnota: **4**.
- Duplicitné/existing: **4**.
- Vyradené pre freshness/evidence: **5**.
- Vyradené pre lokalitu: **2**.

### LIVE mix
- Aktívny feed: **33 položiek**.
- Odhadovaný source mix po pridaní Akfos: **Profesia ~45,5 % / mimo Profesia ~54,5 %**.
- `jobs-data.json.updatedAt` = **29. 8. 2026 06:35 CEST**, pretože pribudla reálna pracovná položka.
- `source-audit.json.updatedAt` = **29. 8. 2026 06:35 CEST** ako dôkaz aktuálneho multi-source searchu.

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
108. **Zero-hit reason classifier** — rozlíši `no-results`, `all-rejected`, `duplicate-only`, `access-blocked`, `parser-degraded` a `query-mismatch`.
109. **Role-family source blind-spot matrix** — vedie maticu `source family × cieľový smer`, aby počet skontrolovaných zdrojov nezakryl dieru v konkrétnom lane.
110. **Duty-mix decomposition** — odhadne podiel cieľovej práce vs. cold sales/telefonovanie/heavy physical/hard development a upraví Match podľa reálnej náplne.
111. **Same-role repost churn-risk signal** — sleduje opakované zverejňovanie rovnakej roly jedným zamestnávateľom ako možný retention/churn risk.
112. **Search-depth coverage quota** — každý zdroj dostane rotujúcu povinnosť kontrolovať nielen top výsledky/prvú stránku, ale aj hlbšiu vzorku výsledkov a alternatívne zoradenie.
113. **Search-index staleness detector** — vedie fingerprint výsledkov, `publishedAt`, `crawledAt` a opakované rovnaké SERP položky; starý cache sa označí `index-stale` namiesto falošného `checked/no-results`.
114. **CV requirement coverage score** — pred odporúčaním reakcie vypočíta percento požiadaviek ponuky, ktoré majú reálny dôkaz v MASTER CV/profile. Rozdelí ich na `proven`, `trainable-gap`, `unsupported`.
115. **Query-to-hire attribution ledger** — ku každej prijatej/odmietnutej položke uloží presný discovery query variant a source path, ktorý ju našiel, aby bolo možné merať skutočný yield query formulácií.
116. **Near-miss language substitution miner** — pri vyradení silnej remote/BA roly iba kvôli poľštine/B2/C1 automaticky spustí cielený search na tú istú role-family s `Slovak/Czech/A2/no language required`, aby každý kvalitný reject vytvoril okamžitú náhradnú discovery vetvu namiesto slepého konca.
117. **Opportunity evidence TTL by field** — každému kritickému poľu (`salary`, `remotePolicy`, `language`, `publishedAt`, `applicationOpen`, `worksite`) pridelí vlastnú dobu platnosti a pri expirácii obnoví iba konkrétny dôkaz.
118. **Onboarding-vs-recurring travel classifier** — oddelí jednorazové onboarding/školenie/cestu od pravidelného hybridného dochádzania. Vďaka tomu sa 100 % remote rola s jednorazovým školením zbytočne nevyradí, ale pravidelný vzdialený hybrid neprejde lokalitným gateom.
119. **Screening-question evidence prefill map** — pri top ponuke vytiahne typické screening otázky z apply flow a ku každej priradí iba overené fakty z MASTER profilu/CV (`proven`, `needs-confirmation`, `unsupported`). Skráti reakciu a zabráni nepravdivým odpovediam bez automatického odoslania.
120. **Search freshness vs content freshness split** — oddelí `lastSearchAt` od `jobs-data.updatedAt`. Radar tak nebude označovať feed za stale len preto, že posledný search nenašiel novú ponuku; zároveň sa nebude falošne meniť timestamp pracovných dát bez reálnej zmeny obsahu.
121. **Calendar-aware source weighting** — cez víkend zvýši discovery kapacitu pre Upwork/freelance, community a remote indexy, ktoré reálne publikujú aj mimo pracovných dní; firemné kariéry/ÚPSVR pritom ostanú povinne kontrolované.
122. **Probation & termination-risk extractor — NOVÉ** — pri ponuke oddelene vytiahne skúšobnú dobu, dobu určitú/neurčitú, výpovednú lehotu, agentúrny/contract-to-hire model a výkonové podmienky. Cieľ: vysoký Match nesmie zakryť vysoké riziko rýchlej straty príjmu alebo nejasnej stability.
123. **Exclusivity / non-compete / IP-risk flag — NOVÉ** — pri verejne dostupných podmienkach označí exkluzivitu, zákaz konkurenčnej práce, rozsah prevodu IP, povinný monitoring alebo neprimerané obmedzenia freelancera/zamestnanca. Neháda podmienky, iba eviduje dôkaz alebo `unknown`; pomáha vyradiť právne nevýhodné zákazky ešte pred investíciou času do reakcie.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.