# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 1. 9. 2026 22:38 CEST

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
1. **LUNYS — E-commerce špecialista — Match 96** — Bratislava/Most pri Bratislave; WooCommerce/Shoptet/Magento, správa e-shopu, testovanie a AI.
2. **HEATING PRO — Technický pracovník/pracovníčka – sklad, rozvoz, nákup — Match 94** — Bratislava; 1 600–2 500 €/mes., ihneď, vodičák B, bez cudzieho jazyka.
3. **LEAF — Implementation Support Specialist — Match 94** — prevažne remote; customer support + back-office + web obsah + AI automatizácie.
4. **OVB — Špecialista/ka pre AI a automatizáciu — Match 93** — Bratislava remote/hybrid, od 2 000 €/mes.
5. **Ryvenia — Shoptet Specialist — Match 93** — Bratislava/full remote/hybrid.
6. **Košík.sk — Kuriér Bratislava — Match 93** — BA-Devínska Nová Ves/BA okolie; 2 500–3 000 €/mes., canonical detail až 150 €/deň, živnosť, vodičák B min. 2 roky, ihneď.
7. **Upwork — WooCommerce Product Listing & Upload Specialist — Match 92** — Worldwide remote; 10–30 USD/h; 50–75 produktov; Dutch iba preferované, ChatGPT fallback povolený.
8. **Zenea — E-Commerce Specialist — Match 92** — Bratislava/hybrid, 1 600–2 000 €/mes.; Shopify/Klaviyo/Excel/reporting.
9. **Energohub — Office manager / koordinátor procesov — Match 92** — Dúbravka, od 1 800 €/mes.; CRM, procesy, AI.
10. **Penta Real Estate — Sales Administrator — Match 92** — Bratislava, 1 800 €/mes. + bonus + HO.
11. **Hilti — Implementation & Service Specialist — Match 92** — Bratislava, od 1 800 €/mes. + bonusy + auto.
12. **Websupport — Customer Success Advisor — Match 91** — weby, hosting, SSL, troubleshooting.
13. **Lanža — Vodič/ka online nákupov — Match 91** — BA + okolie; 1 500–3 000 €/mes.
14. **DATALAN — Servisný technik — Match 90** — Petržalka; servis notebookov/PC, diagnostika bez pájkovania, administratíva servisných požiadaviek, vodič B, B1 AJ, občasný HO; od 1 200 €/mes. + variabilná zložka.
15. **VÚB — Digitálny agent/agentka — Match 90** — 100 % home office / Slovensko.
16. **IZY VAPE — Back Office & Operations Coordinator – e-commerce — Match 90** — BA/prevažne HO.
17. **O2 — Digital Content Admin — Match 90** — web/e-shop, produkty, ceny, landing pages.
18. **Slovak Telekom — Magenta Experience Center Eurovea — Match 89** — Bratislava; 1 750 €/mes. pri nástupe, smart-home/technologické ukážky, customer care + predaj, bez povinnej AJ; mínus krátky/dlhý týždeň a sales intensity.
19. **Alza.sk — AlzaBox Špecialista — Match 89** — Bratislava, 1 430 € fix + až 610 € variabilná zložka; Po–Pi flexibilne, čiastočný HO, Excel, vodičák B, AI nástroje; realitná/obchodná prax iba výhodou.
20. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia.
21. **Upwork — WooCommerce Assistant — Match 89** — worldwide remote; mínus US Mountain Time.
22. **BOELS — Shop Advisor / Klientsky poradca pre hobbymarkety — Match 89** — Bratislava-Ružinov; Po–Pi flexibilne, výjazdy z domu, servisné vozidlo, jednoduchá technická údržba, vodičák B, od 1 400 €/mes. + bonus.
23. **ALL SPORTS — e-shop Bauer Hockey — Match 88**.
24. **Akfos — kuriér/vodič B, kusové zásielky — Match 88**.
25. **Upwork — Virtual Assistant for Book Coaching Business — Match 88**.

## SOURCE AUDIT — 1. 9. 2026 22:38 CEST — LATEST
Reálne prehľadané source families: **Profesia; priame firemné careers; LinkedIn Jobs/company posts; Worki.sk; Brigada.sk; Kariera.sk/Zoznam; Práca za rohom; Pretlak/StartupJobs; Upwork freelance; Reddit/WordPress komunity; Facebook verejná indexácia.** Spolu **11 nezávislých source families**, z toho **10 mimo Profesia**.

### Výsledky tohto behu
- **Nové aktívne položky: 0.** `jobs-data.json` zostáva fail-closed na **44 LIVE položkách**; obsahový timestamp **16:21:02 CEST** nebol umelo posunutý.
- **LIVE mix:** Profesia **20 / 44 = 45,5 %**, mimo Profesia **24 / 44 = 54,5 %**.
- **ČSOB — Operátor IT Service Desk-u:** 1. 9. 2026 o 22:38 znovu čerstvo potvrdený na Profesia pre Bratislavu s občasným home office, od 1 200 €/mes.; ostáva `promotion-ready`.
- **NAY — Elektrošpecialista/tka Bratislava Danubia:** canonical NAY detail je stále verejne dostupný, Bratislava, plný úväzok, priemer 1 550 €/mes.; ostáva `promotion-ready`.
- **Nový Upwork kandidát:** `Need Basic WooCommerce Website (Design & Development)` — Worldwide remote, **2 000 USD fixed-price**, contract-to-hire, mobile-first WooCommerce e-shop, produktové stránky, checkout, blog, SEO, testovanie a launch. Je to hodnotný lead, ale vyžaduje kompletný design+development ownership a má **50+ proposals / 5 interviewing**, preto ide do `verification`, nie LIVE.
- **Kariera.sk:** Slovenská pošta — brigáda triediča zásielok v Bratislave ostáva low-priority verification pre manuálnu záťaž/nočné zmeny.
- **Facebook:** **0 verified hits**, status `limited`; nebol nájdený konkrétny verejne overiteľný hiring post s priamym linkom. Autentizovaný Nexus/local ingestion ostáva backlog a automat ho nespúšťa.
- Žiadna existujúca LIVE položka nebola odstránená a nedošlo k strate kategórie.

### Run summary
- Reálne skontrolované source families: **11**.
- Nové aktívne položky zapísané: **0**.
- Významné pending kandidáty: **14**.
- LIVE feed: **44 aktívnych položiek**.
- Mix: **Profesia 45,5 % / mimo Profesia 54,5 %**.
- `jobs-data.json.updatedAt` = **1. 9. 2026 16:21:02 CEST**.
- `source-audit.json.updatedAt` = **1. 9. 2026 22:38:16 CEST**.

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
112. Application authorship constraint flag.
113. Minimum weekly earning potential gate.
114. Remote exception frequency cap.
115. English modality decomposer.
116. Community location-proof handshake.
117. Scope-to-portfolio evidence matcher.
118. Search-result evidence aging clock.
119. Source-family zero-yield rotation.
120. Listing-language ambiguity quarantine.
121. Invite-to-interview efficiency signal.
122. Fresh-hit confirmation retry window.
123. Source-check evidence ledger.
124. Canonical application-route health monitor.
125. Fresh competitor-pressure decay.
126. Search-to-apply stale-link verifier — pred odporúčaním overiť, že indexovaný výsledok stále vedie na aktívny detail/apply route; znižuje false-positive čerstvé hity a šetrí čas pri reakcii.
127. Remote pay-floor calibrator — pri freelance/remote ponukách porovnať hodinovku s jazykovou, timezone a platformovou záťažou a automaticky potlačiť nízku efektívnu hodnotu aj pri dobrom skill matchi.
128. **Hybrid attendance obligation verifier** — pri hybrid/remote ponukách extrahovať minimálnu frekvenciu onsite návštev a mesto; vzdialená Praha/Brno rola nesmie prejsť gateom iba preto, že používa slovo remote.
129. **Platform-skill transferability score** — rozlíšiť prenositeľné e-commerce skúsenosti (WooCommerce → Shopify/Shoptet/iný CMS) od skutočne povinných špecializovaných skillov; zlepší ranking bez predstierania kvalifikácií.
130. **Hiring-post edit diff watcher** — pri každom rechecku porovnať kritické polia aktívneho inzerátu (mzda, jazyk, miesto, onsite frekvencia, povinné skills) a upozorniť iba na zmenu, ktorá mení eligibility, ranking alebo reakčnú stratégiu.
131. **Source-family query rotation entropy guard** — udržiavať stabilnú kontrolnú query sadu, ale zároveň rotovať synonymá rolí pre web/e-shop, support, admin, vodič a logistiku, aby opakovaný audit nevytváral falošný pocit coverage z rovnakých dopytov.
132. **Freelance effort-to-value estimator** — pri fixed-price WordPress/WooCommerce zákazkách odhadnúť rozsah podľa stránok, produktov, customizácie, checkoutu, launchu a supportu; porovnať s odmenou a konkurenciou, aby vysoká nominálna suma neprebila zlý hodinový výnos.
133. **Promotion-ready aging watchdog** — promotion-ready položky nesmú zostať hodiny iba vo verification queue kvôli write pipeline; po prekročení SLA eskalovať technický blocker a prioritne vykonať bezpečný parse/dedupe/validate/write bez zásahu do zamknutých súborov.
