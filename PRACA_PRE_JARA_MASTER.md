# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 30. 8. 2026 02:26 CEST

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
1. **LUNYS — E-commerce špecialista — Match 96** — Bratislava/Most pri Bratislave; WooCommerce/Shoptet/Magento, správa e-shopu, testovanie a AI. Fresh canonical LinkedIn 29.8. 21:34 zobrazuje plný inzerát bez closure banneru v načítanom obsahu; zostáva active.
2. **HEATING PRO — Technický pracovník/pracovníčka – sklad, rozvoz, nákup — Match 94** — Stará Vajnorská 17, Bratislava; 1 600–2 500 €/mes., ihneď, 7:00–15:30, vodičák B, bez cudzieho jazyka, firma zaučí. Technicko-logistická zhoda; mínus bežná fyzická manipulácia s materiálom.
3. **LEAF — Implementation Support Specialist — Match 94** — prevažne remote; customer support + back-office + reporty + web obsah + AI automatizácie.
4. **OVB — Špecialista/ka pre AI a automatizáciu — Match 93** — Bratislava remote/hybrid, od 2 000 €/mes.; AI agenti a procesy.
5. **Ryvenia — Shoptet Specialist — Match 93** — Bratislava/full remote/hybrid; produkty, kategórie, CSV, migrácie, QA.
6. **Zenea — E-Commerce Specialist — Match 92** — Nivy Tower Bratislava/hybrid, 1 600–2 000 €/mes.; Shopify, produkty, nákupná cesta, UGC/influenceri, Asana, Klaviyo, Excel/reporting; AJ iba výhodou. Hlavný gap: Shopify/Klaviyo namiesto WooCommerce.
7. **Energohub — Office manager / koordinátor firemných procesov — Match 92** — Dúbravka, od 1 800 €/mes.; koordinácia, CRM/digitálne nástroje, procesy a AI; pracovná AJ iba výhodou.
8. **Penta Real Estate — Sales Administrator — Match 92** — Bratislava, 1 800 €/mes. + bonus + HO; CRM, dáta, reporty, dokumenty a podpora.
9. **Hilti — Implementation & Service Specialist — Match 92** — Bratislava, od 1 800 €/mes. + bonusy + auto; implementation/service/CRM.
10. **Websupport — Customer Success Advisor — Match 91** — hosting, SSL, troubleshooting, weby a customer support.
11. **Lanža — Vodič/ka online nákupov — Match 91** — BA + okolie; online nákupy, nie jedlo; 1 500–3 000 €/mes., služobné vozidlo, B bez tachografu.
12. **VÚB — Digitálny agent/agentka — Match 90** — 100 % home office / Slovensko, 1 480 €/mes.; SŠ s maturitou, firma zaškoľuje.
13. **IZY VAPE — Back Office & Operations Coordinator – e-commerce | Remote — Match 90** — BA/prevažne HO, 1 600–2 000 €/mes.; e-shop/objednávky/reklamácie/logistika/AI.
14. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, ceny a landing pages.
15. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia, 1 520 €/mes. + bonus.
16. **Upwork — WooCommerce Assistant — Match 89** — worldwide remote, 5–10 USD/h; mínus US Mountain Time.
17. **ALL SPORTS — e-shop Bauer Hockey — Match 88**.
18. **Akfos — kuriér/vodič B, kusové zásielky — Match 88** — Bratislava, 1 500 €/mes., ASAP; bez tachografu a bez C/C+E.
19. **Upwork — Virtual Assistant for Book Coaching Business — Match 88** — worldwide remote, 10–15 USD/h; WordPress + ActiveCampaign + administratíva.
20. **SuperFaktura — Supportový parťák — Match 87**.
21. **Cerkam Facility Services — Terénny administratívny pracovník — Match 86** — Bratislava, od 1 500 €/mes. + bonusy.
22. **RM Biznis servis / Worki — Manažér servisu klientov — Match 86** — väčšina práce online, občas BA, 10–15 €/h.
23. **Bookio — B2B/SaaS online support — Match 85**.
24. **AI & Tech Assistant / Upwork — Match 84** — worldwide remote; web/low-no-code/QA/AI workflows; language + competition risk.
25. **Dotypos SK — Technický support — Match 84**.
26. **Pandora — Associate Assistant, eCommerce Operations — Match 84**.
27. **Allit — End-User Support — Match 84**.
28. **3MON — IT & Operations Support — Match 84**.
29. **STU — Web špecialista CMS/web — Match 83**.
30. **VNET — IT customer support — Match 82**.
31. **LAST MILE — Operátor NOC / Hotline podpora — Match 82**.
32. **Confilogi — Operátor zákazníckej linky 100 % HO — Match 82** — remote SK, 1 520–2 200 €/mes.; mínus predaj, živnosť a víkendy.
33. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 30. 8. 2026 02:26 CEST — LATEST
Reálne prehľadané skupiny: **Profesia; priame firemné kariéry; LinkedIn Jobs; Worki.sk; Brigada.sk; Pretlak; StartupJobs; WordPress Jobs; Upwork/freelance; Služby zamestnanosti/Kariera; Reddit/WP komunity; Facebook verejná indexácia.** Spolu **12 nezávislých kontrolovaných skupín**, minimálne 8 source families a viac než 5 mimo Profesia.

### Výsledky tohto behu
- **Nové aktívne položky: 0.** Nevznikol nový kandidát, ktorý by bezpečne prešiel locality/language/hard-skill/value gateom a prebil aktuálne priority.
- **LinkedIn Jobs:** čerstvý **Orange Senior Fleet Officer** je v Bratislave a ponúka 1 600 € + bonusy + čiastočný HO, ale vyžaduje 3–5 rokov skúseností s fleetom, pokročilý Excel, angličtinu a 24/7 pohotovostnú podporu podľa rozpisu; preto sa neaktivoval.
- **WordPress Jobs:** aktuálne uvádza 10 otvorených pozícií. Nové 27.–28.8. sú prevažne WordPress developer/security/performance/full-stack/server scope alebo geograficky viazané; bez vhodného Slovakia-eligible non-hard-dev leadu.
- **Upwork:** čerstvé WordPress/VA/e-commerce výsledky existujú, ale nové kandidáty sú dev-heavy, language-heavy alebo neprekonávajú existujúce LIVE priority.
- **Reddit:** verejne indexované aktuálne hiring posty pre website creator a WordPress dev/designer nemajú dostatočne jasný pay/scope/eligibility dôkaz pre bezpečnú LIVE aktiváciu.
- **Facebook:** **0 verified hits**, coverage `limited`; žiadny fiktívny post.

### Run summary
- Reálne skontrolované zdrojové skupiny: **12**.
- Nové aktívne položky: **0**.
- Významne zmenené priority: **0**.
- Vyradené jazykovým/hard-skill gateom: **5**.
- Vyradené ako slabé/nízka hodnota: **4**.
- Duplicitné/existing: **3**.
- Vyradené pre freshness/evidence: **4**.

### LIVE mix
- `jobs-data.json`: **36 aktívnych položiek**.
- Posledný potvrdený mix po pridaní HEATING PRO: približne **Profesia 17 / 36 = 47,2 %; mimo Profesia 19 / 36 = 52,8 %**.
- `jobs-data.json.updatedAt` = **30. 8. 2026 01:15:21 CEST**.
- `source-audit.json.updatedAt` = **30. 8. 2026 02:26:18 CEST**.
- `jobs-data.json.updatedAt` sa neposúva bez reálnej obsahovej zmeny.

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
115. **Platform-gap transferability score** — rozlíši blízko prenositeľný gap (WooCommerce → Shopify, ActiveCampaign → Klaviyo) od skutočne nového hard-skill gapu; zníži falošné vyradenia kvalitných e-commerce rolí.
116. **Closure-proof quorum** — status `closed` sa zmení až po dostatočnom canonical dôkaze (explicitný closure banner/404/expired + recheck), aby jeden nekonzistentný indexovaný signál nevyradil stále aktívnu ponuku.
117. **Micro-budget exploit filter** — pri freelance ponukách odhalí extrémne nízky fixed budget voči rozsahu a označeniu projektu (napr. 5 USD za komplexnú WooCommerce operatívu), aby skillovo presné, ale ekonomicky nezmyselné zákazky nezahlcovali TOP výsledky.
118. **Verified client economics score** — kombinuje klientský spend, počet hires, konkurenciu a reálny budget konkrétnej zákazky; vysoká história klienta sama nesmie kompenzovať neudržateľnú cenu konkrétneho projektu.
119. **Weekend/night source-pattern booster** — meria, ktoré source families reálne publikujú kvalitné BA/remote ponuky cez víkend a v nočných hodinách; v týchto oknách presunie viac discovery kapacity na zdroje s historicky vyšším čerstvým výnosom bez porušenia povinného 8-family minima.
120. **Known-employer career delta watchlist** — pre overené firmy s vysokým matchom (napr. Hilti, Penta, Websupport, Foxelli) porovná snapshot ich career stránky medzi behmi a zvýrazní iba nové roly alebo zmenu kritických požiadaviek; znižuje čas stratený opakovaným čítaním nezmenených career stránok.
121. **Role-title alias learner** — učí sa neštandardné názvy pozícií z reálnej náplne práce (napr. „operations agent“, „digital coordinator“, „implementation support“) a mapuje ich na e-commerce/support/admin role families; zvyšuje recall bez rozšírenia hard-skill tolerancie.
122. **Application-pack stale-evidence invalidator** — pri zmene canonical požiadaviek, lokality, mzdy, closure statusu alebo eligibility automaticky označí už pripravené CV/reakciu za `stale`, aby sa neposlala verzia založená na starých podmienkach.
