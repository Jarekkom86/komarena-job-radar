# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 27. 8. 2026 15:28 CEST

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
3. **OVB — Špecialista/ka pre AI a automatizáciu — Match 93** — Bratislava remote/hybrid, od 2 000 €/mes.; AI agenti, procesy, automatizácia, CX a interné zavádzanie AI. Základy SQL sa očakávajú; Python/API/LangChain/Make/n8n sú výhodou, nie podmienkou.
4. **Ryvenia — Shoptet Specialist — Match 93** — Bratislava/full remote/hybrid; produkty, kategórie, ceny, CSV, migrácie, QA.
5. **Penta Real Estate — Sales Administrator — Match 92** — Bratislava, 1 800 €/mes. + ročný bonus + home office; CRM, klientský portál, dáta, reporty, dokumenty, systémy a klientská podpora.
6. **Hilti — Implementation & Service Specialist — Match 92** — Bratislava, od 1 800 €/mes. + bonusy + služobné auto; implementácia ON!Track/Fleet Management, školenia, reklamácie, CRM.
7. **Websupport — Customer Success Advisor — Match 91** — weby, hosting, SSL, troubleshooting a zákaznícka komunikácia.
8. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, atribúty, ceny a landing pages.
9. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia, 1 520 €/mes. + bonus.
10. **Upwork — WooCommerce Assistant — Match 89** — worldwide remote, <30 h/týždeň, 3–6 mesiacov, 5–10 USD/h; mínus US Mountain Time.
11. **ALL SPORTS — e-shop Bauer Hockey — Match 88**.
12. **SuperFaktura — Supportový parťák — Match 87**.
13. **RM Biznis servis / Worki — Manažér servisu klientov — Match 86** — väčšina práce online, občas Bratislava, 10–15 €/h, pružný čas, bez požiadavky na prax; mínus výkonová odmena a mesačná skúšobná doba.
14. **Bookio — B2B/SaaS online support — Match 85**.
15. **Dotypos SK — Technický support — Match 84** — Bratislava, 1 200 €/mes.; klientsky technický support, Android/pokladne, výjazdy, pred-/popredajný servis, vodič B; vhodné aj pre absolventa. Riziko: štruktúra uvádza AJ B1–B2, text iba mierne pokročilú AJ — treba potvrdiť.
16. **Pandora — Associate Assistant, eCommerce Operations — Match 84**.
17. **Allit — End-User Support — Match 84**.
18. **3MON — IT & Operations Support — Match 84**.
19. **STU — Web špecialista CMS/web — Match 83**.
20. **VNET — IT customer support — Match 82**.
21. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 27. 8. 2026 15:28 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak; StartupJobs/WordPress Jobs; Upwork; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 1 — RM Biznis servis / Worki, manažér servisu klientov, Bratislava/online.**
- **Profesia:** bez nového kandidáta, ktorý by kvalitou, lokalitou a podmienkami prebil LIVE.
- **Priame firemné kariéry:** Websupport Customer Success bol znovu potvrdený ako aktívny. O2 má aktívne BA pozície; nový senior Group Product Manager je mimo profilu a predajný konzultant je skôr retail fallback, preto 0 pridaných.
- **LinkedIn:** Foxelli Customer Support & Sales Agent je 100 % remote a Slovakia-eligible, ale vyžaduje **fluent/near-native English** a neskoré zmeny 16:00–00:00/18:00–02:00 UTC+3, preto nepridaný. Ďalšie čerstvé support výsledky mali jazykový alebo seniority gate.
- **Brigada.sk:** čerstvé BA výsledky boli najmä gastro/manipulačné práce bez lepšieho fitu; 0 pridaných.
- **Worki:** **RM Biznis servis pridaný** — administratíva existujúcich klientov, komunikácia s finančnými inštitúciami a katastrom, väčšina práce online, občas Bratislava, 10–15 €/h, bez praxe. Riziko: odmena podľa výkonu, osobný pohovor a mesačná skúšobná doba.
- **Práca za rohom:** bez nového originálneho hitu; Profesia mirrory sa nepočítajú ako nezávislý zdroj.
- **Služby zamestnanosti / Kariera:** bez nového vhodného kandidáta nad existujúci Dotypos LIVE.
- **Pretlak:** ui42 office part-time je BA, ale vyžaduje VŠ študentský status; OVB už je v LIVE. 0 nových prírastkov.
- **StartupJobs/WordPress Jobs:** bez nového aktuálneho kandidáta spĺňajúceho Slovensko-remote, jazyk a hard-skill gate.
- **Upwork:** WordPress/Elementor Support Specialist je na výsledkovej stránke Worldwide, ale detail explicitne obmedzuje lokáciu na **Philippines/UK** a vyžaduje fluent English; WooCommerce 500-error job vyžaduje PHP a má 15–20 proposals; ďalšie expert maintenance roly mali vysokú konkurenciu. 0 pridaných.
- **Reddit:** recent výsledky dominantne `[FOR HIRE]`; hiring posty boli US-only alebo hard-development. 0 eligible verified hits.
- **Facebook:** stále **0 verified hits**. Verejná indexácia WordPress Slovensko, WooCommerce SK+CZ a BA pracovných skupín neposkytla konkrétny aktuálny hiring post s priamym linkom; stav zostáva `limited`. Autentizovaný Nexus/local ingestion ostáva backlog potreba.

### LIVE mix hlavného `jobs-data.json`
- **24 aktívnych položiek**.
- Profesia: **10/24 = 41,7 %**.
- LinkedIn: **2/24 = 8,3 %**.
- Priame firemné kariéry: **6/24 = 25,0 %**.
- GROWNi/Pretlak/Kariera/Worki/iný job board mimo Profesia: **4/24 = 16,7 %**.
- Freelance: **2/24 = 8,3 %**.
- **Mimo Profesia spolu: 14/24 = 58,3 %.**

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
42. Language-evidence conflict resolver — keď štruktúrované pole a text inzerátu uvádzajú inú úroveň jazyka, Radar má konflikt explicitne označiť, znížiť confidence a nevytvárať falošne presný language gate.
43. Worksite-obligation classifier — oddeliť `officeDays`, `fieldTravel`, `serviceArea`, `remoteCountryEligibility` a `mandatoryOnsiteCity`, aby tvrdý BA/remote gate neoklamalo slovo „remote“.
44. **Eligibility schema completeness gate — NOVÉ** — nový záznam nesmie dostať `status: active`, kým nemá `locationEligibility`, `locationReason`, `verifiedAt`, `sourceTrust` a `scoreConfidence`. Praktický prínos: žiadne nové odporúčanie neobíde lokalitný alebo dôkazový gate iba preto, že scraper vynechal pole.
45. **Hard-gate negative evidence cache — NOVÉ** — pri canonical URL ukladať overené dôvody vyradenia ako fluent/B2-C1 jazyk, student-only, country restriction, vzdialený mandatory onsite alebo hard-development. Pri ďalších behoch ich najprv revalidovať podľa TTL namiesto opakovaného plného hodnotenia. Praktický prínos: viac času a search budgetu ostane na nové príležitosti a rovnaké nevhodné ponuky sa nebudú vracať ako falošne nové.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
