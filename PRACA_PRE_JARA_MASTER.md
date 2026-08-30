# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 30. 8. 2026 15:22 CEST

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

## SOURCE AUDIT — 30. 8. 2026 15:22 CEST — LATEST
Reálne prehľadané skupiny: **Profesia; priame firemné careers; LinkedIn Jobs; Worki.sk; Brigada.sk; Kariera.sk; Pretlak; StartupJobs; WordPress Jobs; Upwork; Reddit/WordPress komunity; Facebook verejná indexácia.** Spolu **12 nezávislých source families**, z toho 11 mimo Profesia.

### Výsledky tohto behu
- **Nové aktívne položky: 0.** Žiadny nový kandidát bezpečne neprešiel locality/language/hard-skill/value gateom.
- **Nový silný komunitný lead v quarantine:** Reddit r/wordpressjobs — `I'm looking for a website creator`. Dopyt je na online language-learning business: online shop pre digitálne produkty, WordPress/WooCommerce ako preferovaná možnosť, newsletter integration, Etsy sync, basic SEO, Home/Shop/About/Blog/Contact/newsletter a training. Vecný fit je veľmi vysoký, predbežne **94/100**, ale autor postu neuvádza krajinu ani explicitnú remote/country eligibility. Preto `locationEligibility: unknown` a zákazka sa **neaktivuje**, kým nebude overené, že ju možno vykonať zo Slovenska bez onsite povinnosti.
- **Profesia / Worki / Brigada.sk / Kariera.sk:** BA/remote výsledky preverené; bez nového kvalifikovaného winnera. HEATING PRO zostáva existing LIVE priorita.
- **LinkedIn + priame careers:** bez nového overeného kandidáta nad LIVE priority; staré/no-longer-accepting a language-heavy výsledky sa nezaraďujú.
- **Pretlak / StartupJobs:** bez nového Slovakia-compatible non-hard-dev winnera.
- **WordPress Jobs:** aktuálny verejný feed má 10 otvorených pozícií; nové roly z 27.–28.8. sú prevažne development/security/performance alebo region-bound, preto neprechádzajú hard-skill/location profilom.
- **Upwork:** `Website & SEO Management 2026` zostáva pending remote-ok lead (15–30 USD/h, 6+ mesiacov), ale live aktivácia zostáva zadržaná pre praktickú spoken/written English náročnosť a aplikačný friction. Nové všeobecné výsledky ho neprekonali pomerom fit/odmena/konkurencia.
- **Facebook:** **0 verified hits**, coverage `limited`; WordPress Slovensko, WooCommerce SK+CZ aj BA jobs boli verejne vyhľadané, ale bez konkrétneho overiteľného hiring postu a priameho linku.

### Run summary
- Reálne skontrolované source families: **12**.
- Nové aktívne položky: **0**.
- Významné pending/quarantine kandidáty: **1 nový + 1 existujúci pending**.
- Vyradené jazykovým/hard-skill gateom: **3**.
- Vyradené ako slabé/nízka hodnota: **3**.
- Duplicitné/existing: **3**.
- Vyradené pre freshness/evidence: **2**.
- Quarantine pre nejasnú lokalitu/remote eligibility: **1**.

### LIVE mix
- `jobs-data.json`: **36 aktívnych položiek**.
- Potvrdený mix: približne **Profesia 17 / 36 = 47,2 %; mimo Profesia 19 / 36 = 52,8 %**.
- `jobs-data.json.updatedAt` = **30. 8. 2026 01:15:21 CEST**; bez reálnej kvalifikovanej obsahovej delty sa timestamp umelo neposúva.
- `source-audit.json.updatedAt` = **30. 8. 2026 15:22:27 CEST**.

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
112. Application authorship constraint flag — detegovať ponuky, ktoré výslovne vyžadujú vlastnoručne napísanú odpoveď alebo zakazujú AI-generovaný text, a zabrániť automatickému použitiu Application Builder výstupu bez manuálnej úpravy.
113. Minimum weekly earning potential gate — počítať realistický týždenný/mesačný earning potential z hodinovej sadzby a dostupného rozsahu hodín; tiny-hour zákazky držať v side-gig lane, aby neprebíjali stabilnejšie príležitosti.
114. Remote exception frequency cap — extrahovať frekvenciu povinných onsite návštev pri „remote“ rolách a `remote-ok` povoliť iba pod definovaným limitom; nejasnú frekvenciu držať ako `unknown`, aby občasná Praha/Brno nevytvárala falošný remote fit.
115. English modality decomposer — rozložiť jazykový gate na reading/writing/phone/video/sales; povinnú live spoken English penalizovať výraznejšie než čítanie dokumentácie alebo jednoduché písanie, aby CEFR údaj nebol príliš hrubý filter.
116. Community location-proof handshake — pri Reddit/FB/community dopytoch automaticky hľadať explicitný country/remote dôkaz v poste, profile a komentároch a až potom povoliť `remote-ok`; pri absencii dôkazu ponechať `unknown` a nevkladať do LIVE.
117. Scope-to-portfolio evidence matcher — rozložiť dopyt na konkrétne deliverables (napr. WooCommerce, newsletter, Etsy, SEO, training) a ku každému priradiť existujúci dôkaz praxe alebo označiť gap; zrýchli rozhodnutie, či reagovať a ktoré referencie použiť.
