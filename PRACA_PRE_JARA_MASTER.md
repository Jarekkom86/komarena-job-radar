# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 28. 8. 2026 17:29 CEST

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
9. **VÚB — Digitálny agent/agentka — Match 90** — 100 % home office / Slovensko, 1 480 €/mes.; SŠ s maturitou, firma zaškoľuje; mínus bankový predaj a zmeny.
10. **IZY VAPE — Back Office & Operations Coordinator – e-commerce | Remote — Match 90** — BA/prevažne HO, 1 600–2 000 €/mes.; e-shop/objednávky/reklamácie/logistika/AI. Riziko: AJ a neskorší nástup.
11. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, ceny a landing pages.
12. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia, 1 520 €/mes. + bonus.
13. **Upwork — WooCommerce Assistant — Match 89** — worldwide remote, 5–10 USD/h; mínus US Mountain Time.
14. **ALL SPORTS — e-shop Bauer Hockey — Match 88**.
15. **SuperFaktura — Supportový parťák — Match 87**.
16. **Cerkam Facility Services — Terénny administratívny pracovník — Match 86** — Bratislava, od 1 500 €/mes. + bonusy.
17. **RM Biznis servis / Worki — Manažér servisu klientov — Match 86** — väčšina práce online, občas BA, 10–15 €/h.
18. **Bookio — B2B/SaaS online support — Match 85**.
19. **AI & Tech Assistant / Upwork — Match 84** — worldwide remote; web/low-no-code/QA/AI workflows; language + competition risk.
20. **Dotypos SK — Technický support — Match 84**.
21. **Pandora — Associate Assistant, eCommerce Operations — Match 84**.
22. **Allit — End-User Support — Match 84**.
23. **3MON — IT & Operations Support — Match 84**.
24. **STU — Web špecialista CMS/web — Match 83**.
25. **VNET — IT customer support — Match 82**.
26. **LAST MILE — Operátor NOC / Hotline podpora — Match 82** — Ružinov; first-line support; mínus 6–8 €/h a B1 AJ.
27. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 28. 8. 2026 17:29 CEST
Reálne prehľadané skupiny: **Profesia/Práca za rohom; direct company careers; LinkedIn Jobs; Worki.sk; Brigada.sk; Pretlak/WordPress Jobs; Upwork; Reddit/WP komunity; Facebook verejná indexácia; doplnkové direct/public web discovery.**

### Výsledky tohto behu
- **Nové aktívne položky do `jobs-data.json`: 0.** Žiadny nový kandidát neprešiel súčasne BA/remote, jazykovým, hard-skill a value gateom tak, aby bezpečne prebil existujúce LIVE priority.
- **Upwork — Designer needed to clean Wordpress site:** worldwide remote, WooCommerce product/checkout + performance, ale iba **30 USD fixed** a už **10–15 proposals**; value/competition reject.
- **Upwork — Wordpress expert:** worldwide remote, jednoduchá mobile/desktop oprava, ale iba **35 USD fixed** a **20–50 proposals**; value/competition reject.
- **Upwork — WooCommerce checkout/500 error/store management:** worldwide remote, ale mandatory PHP + server/error troubleshooting; hard-dev reject.
- **Wolt — Support Associate, Bratislava:** lokalita sedí, ale minimum **B2 English**; hard-language reject.
- **Worki — Shield-Sk e-shop admin/support:** Bratislava a obsahovo vhodné, ale detail už výslovne uvádza, že miesto bolo obsadené alebo zrušené; closed-result suppression.
- **Worki — administratívna podpora predaja, Bánovce nad Bebravou:** mimo BA a aktívny EN/DE; location + language reject.
- **Brigada.sk:** čerstvé BA výsledky sú najmä gastro/obsluha; vzdialené onsite brigády typu Levice sú location reject. Bez vhodného admin/web/tech winnera.
- **Reddit:** aktuálne výsledky sú prevažne `[FOR HIRE]` ponuky freelancerov, nie hiring dopyty; bez nového vhodného verified leada.
- **Facebook:** **0 verified hits**. Verejná indexácia neposkytla stabilný konkrétny aktuálny hiring post s priamym overiteľným linkom; nič sa nepredstiera.

### Run summary
- Reálne skontrolované zdrojové skupiny: **10**.
- Nové aktívne položky: **0**.
- Vyradené lokalitou: **3**.
- Quarantine pre nejasnú remote-country eligibility: **0**.
- Vyradené jazykovým/hard-skill gateom: **4**.
- Vyradené ako slabé/nízka hodnota: **5**.
- `[FOR HIRE]` / nevhodný typ leadu / duplicita: **2**.

### LIVE mix hlavného feedu
Feed sa v tomto behu nemenil. Posledný potvrdený stav ostáva **30 aktívnych položiek** po pridaní VÚB v predchádzajúcom refreshe; zdrojový mix ostáva pod 60 % Profesia a non‑Profesia discovery zostáva povinná priorita.

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
86. **Employer legitimacy & reputation gate** — oddelene od `sourceTrust` overí samotného zamestnávateľa/klienta.
87. **Duplicate application guard** — pred reakciou kontroluje canonical role identity a už použité application channels.
88. **Income-start latency score** — odhaduje čas od reakcie po prvý reálny príjem.
89. **Phone-load compatibility flag** — klasifikuje podiel telefonovania oddelene od všeobecného support labelu.
90. **Scope-to-pay mismatch detector** — porovná rozsah povinností a senioritu proti odmene.
91. **Verification escalation queue** — high-fit lead s jedným kritickým unknown dostane cielené overenie pred ďalším broad searchom.
92. **Employer response-latency memory** — medián času od reakcie po prvú odpoveď podľa firmy a kanála.
93. **Selection-process ROI score** — porovná náročnosť výberového procesu proti mzde, Match skóre a pravdepodobnosti odpovede.
94. **Source parser/schema drift sentinel** — pri každom zdroji uloží minimálny očakávaný dôkazový kontrakt a pri zmene štruktúry zdroj označí ako degraded namiesto falošného `checked`.
95. **Mandatory source-family SLA watchdog** — vedie `lastSuccessfulCheckAt` pre povinné source families a odhalí rodinu, ktorá nebola úspešne skontrolovaná v stanovenom okne.
96. **Recruiter/company hiring-activity signal — NOVÉ** — pri high-fit firmách bude sledovať čerstvosť ďalších otvorených pozícií a verejnej náborovej aktivity firmy/recruitera. Praktický prínos: vyššiu prioritu dostane firma, ktorá reálne aktívne naberá práve teraz, nie iba starý stále indexovaný inzerát.
97. **Application reuse cluster — NOVÉ** — zoskupí podobné roly (napr. e-shop admin/support, AI operations, IT support) a pripraví spoločný claim-safe základ CV/argumentov, ktorý sa následne len cielene upraví pre konkrétnu firmu. Praktický prínos: viac kvalitných personalizovaných reakcií za rovnaký čas bez skĺznutia ku generickému spamu.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.