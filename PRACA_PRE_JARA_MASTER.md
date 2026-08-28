# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 28. 8. 2026 09:28 CEST

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
6. **Hilti — Implementation & Service Specialist — Match 92** — Bratislava, od 1 800 €/mes. + bonusy + služobné auto; implementácia ON!Track/Fleet Management, školenia, reklamácie, CRM. 28. 8. 2026 znovu potvrdené priamo na Hilti Careers.
7. **Websupport — Customer Success Advisor — Match 91** — weby, hosting, SSL, troubleshooting a zákaznícka komunikácia; 28. 8. 2026 09:28 znovu potvrdené priamo na firemnej kariére ako aktívne.
8. **IZY VAPE — Back Office & Operations Coordinator – e-commerce | Remote — Match 90** — Bratislava/prevažne HO, 1 600–2 000 €/mes.; e-shop, objednávky, reklamácie, logistika, fulfillment, dokumenty, procesy a AI. Riziko: stredne pokročilá AJ treba potvrdiť; nástup november–december 2026.
9. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, atribúty, ceny a landing pages; 28. 8. 2026 znovu potvrdené na priamom O2 detaili s aktívnym `Prihlásiť sa`.
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

## SOURCE AUDIT — 28. 8. 2026 09:28 CEST
Reálne prehľadané zdroje/families: Profesia; priame firemné kariéry; LinkedIn Jobs; Brigada.sk; Worki.sk; Služby zamestnanosti/Kariera; Pretlak/tech-creative; WordPress Jobs; Upwork; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 0.** Feed zostal fail-closed; žiadny kandidát nebol pridaný iba kvôli počtu.
- **Websupport Customer Success Advisor:** znovu potvrdený priamo na firemnom detaili; 1 260 €/mes. + variabilná zložka, Bratislava, TPP. Existing LIVE item.
- **O2 Digital Content Admin:** priamy O2 detail je stále aktívny a obsahuje `Prihlásiť sa`; 8 €/h, Bratislava, HO možný. Existing LIVE item.
- **Hilti Implementation & Service Specialist:** priamy Hilti detail je stále aktívny; Bratislava, min. 1 800 € + bonusy + služobné auto, AJ iba výhodou. Existing LIVE item.
- **LinkedIn/Foxelli:** Slovakia-eligible remote support/e-commerce roly majú fluent/near-native English, phone upsell a pri časti rolí nočné/večerné smeny; starší Crochet detail je už closed. Neaktivované.
- **LinkedIn/TalentPop:** 100 % remote, ale fluent German + English. Neaktivované.
- **LinkedIn/Netzon:** BA/hybrid tech support, ale fluent Dutch + English. Neaktivované.
- **Kariera/BILLA IT asistent:** explicitne neaktívna ponuka; nevzkriesená.
- **Kariera/Caspian pomocný administratívny pracovník:** Bratislava a lokalitne OK, ale 950 €/mes. a generická administratíva sú pod praktickou hodnotou existujúcich možností.
- **Upwork — Remote Business Administrator + Executive Assistant:** worldwide remote, 500 USD fixed, ongoing/contract-to-hire a <5 proposals. Pozitívne: nízka konkurencia a admin scope. Mínusy: mandatory bookkeeping, business-development podpora viazaná na zahraničný biznis a nejasná jazyková náročnosť; zatiaľ neaktivované.
- **Upwork — eCommerce Virtual Assistant:** worldwide remote, ale iba 50 USD fixed pri komplexnej e-commerce operatíve a 10–15 proposals; nízka efektívna hodnota.
- **Upwork — nové WP/Woo leady:** prevažne 5–50 USD fixed, hard PHP alebo 10–50 proposals; bez nového high-value kandidáta.
- **Reddit:** dnešné WordPress výsledky sú prevažne `[FOR HIRE]`, nie hiring leady.
- **Facebook:** **0 verified hits**. Prioritné WP/Woo/BA skupiny boli znovu prehľadané cez verejnú indexáciu; bez konkrétneho hiring postu s verejne overiteľným priamym linkom.

### Run summary
- Zdrojové families reálne skontrolované: **11**.
- Nové aktívne položky: **0**.
- Vyradené lokalitou/country eligibility: **0**.
- Vyradené jazykovým/hard-skill gateom: **6**.
- Vyradené ako slabé/nízka hodnota alebo nízka šanca: **7**.
- Duplikát / `[FOR HIRE]` / closed alebo nevhodný typ leadu: **5**.

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
66. **Employer-template reuse detector** — rozpozná, keď firma opakovane používa takmer rovnaký text náplne pre rozdielne názvy, mzdy alebo role.
67. **Vehicle-obligation classifier** — samostatne rozlíši `vodičák B výhoda`, `vodičák B povinný`, `vlastné auto povinné`, `služobné auto poskytnuté` a `terén bez jasného vozidla`.
68. **Client-engagement freshness signal** — pri freelance zdrojoch oddelene sleduje `postedAt`, `lastViewedByClient`, `interviewing`, `hires` a aktívne kontrakty.
69. **Emergency-response SLA compatibility gate** — identifikuje roly, ktoré vyžadujú pevné online hodiny, okamžité reakcie, permanentnú dostupnosť alebo videohovory, a porovná ich s reálnou dostupnosťou.
70. **Multi-role employer collision guard** — ak má jedna firma súčasne viac vhodných otvorených rolí, zoskupí ich, vyberie jeden primárny smer reakcie a upozorní pred paralelným poslaním viacerých nesúrodých žiadostí.
71. **Rejected-role resurrection trigger** — pri už vyradenej ponuke sleduje zmenu kritického dôkazu a pri relevantnej zmene ju vráti do quarantine/review.
72. **Unpaid assessment workload/risk flag** — odhalí test task/case study/trial a označí neprimerane veľké neplatené zadanie pred reakciou.
73. **Portfolio evidence auto-selector** — pre každú TOP ponuku vyberie 2–3 najrelevantnejšie už preukázané dôkazy do reakcie/CV bez vymýšľania skillov.
74. **Audit-feed reconciliation invariant** — prepočíta source mix/active count/eligibility priamo z feedu a porovná s auditom a MASTER.
75. **Remote engagement-model verifier** — pri remote rolách overí, či firma reálne vie zamestnať/kontrahovať človeka zo Slovenska, nie iba či text obsahuje remote/worldwide.
76. **Onboarding/trainability signal** — samostatne vyhodnotí, či firma výslovne zaškolí, prijíma absolventa/človeka bez praxe, alebo naopak očakáva okamžitú samostatnosť a viacročnú skúsenosť.
77. **Physical/field-work burden classifier** — z textu rozlíši kancelársku prácu, občasný terén, pravidelné výjazdy, dlhé státie, sklad/manipuláciu a fyzickú záťaž.
78. **Source-access degradation detector** — porovná dnešný `status/hits` zdroja s jeho vlastnou históriou a rozlíši „na trhu nič nie je“ od „zdroj sa prestal indexovať, vrátil login wall alebo technicky degradoval“.
79. **CV/reaction variant outcome tracker** — pri každej reálnej reakcii uloží, aká verzia CV/reaction framingu bola použitá a spojí ju s výsledkom `odpoveď / pohovor / zamietnutie / bez reakcie`.
80. **Application-cost / platform-credit guard — NOVÉ** — pri freelance a platených kanáloch eviduje reálny náklad reakcie (napr. Upwork Connects, platený boost, cestu na osobné kolo alebo iný povinný vstupný náklad) a porovná ho s odhadovanou hodnotou a konkurenciou. Prínos: Radar nebude míňať čas ani platené kredity na 5–50 USD leady s nízkou pravdepodobnosťou návratnosti.
81. **Hard-gate substitution search — NOVÉ** — keď inak silná ponuka vypadne na jednom tvrdom gate (napr. fluent German/English, nočné smeny, vzdialený onsite), automat spustí cielený follow-up search na rovnakú firmu a najbližšiu role-family s prijateľnými podmienkami. Prínos: rejection nie je slepá ulička; napríklad silný e-commerce support hit s fluent German môže okamžite viesť k hľadaniu slovenskej/bezjazykovej alternatívy u rovnakého employer clusteru.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
