# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 27. 8. 2026 16:36 CEST

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
6. **Hilti — Implementation & Service Specialist — Match 92** — Bratislava, od 1 800 €/mes. + bonusy + služobné auto; implementácia ON!Track/Fleet Management, školenia, reklamácie, CRM.
7. **Websupport — Customer Success Advisor — Match 91** — weby, hosting, SSL, troubleshooting a zákaznícka komunikácia.
8. **IZY VAPE — Back Office & Operations Coordinator – e-commerce | Remote — Match 90** — Bratislava/prevažne HO, 1 600–2 000 €/mes.; objednávky, e-shop, reklamácie, logistika, fulfillment, dokumenty, procesy a AI. Riziko: AJ stredne pokročilá treba potvrdiť; plánovaný nástup november–december 2026.
9. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, atribúty, ceny a landing pages.
10. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia, 1 520 €/mes. + bonus.
11. **Upwork — WooCommerce Assistant — Match 89** — worldwide remote, <30 h/týždeň, 3–6 mesiacov, 5–10 USD/h; mínus US Mountain Time.
12. **ALL SPORTS — e-shop Bauer Hockey — Match 88**.
13. **SuperFaktura — Supportový parťák — Match 87**.
14. **RM Biznis servis / Worki — Manažér servisu klientov — Match 86** — väčšina práce online, občas Bratislava, 10–15 €/h.
15. **Bookio — B2B/SaaS online support — Match 85**.
16. **AI & Tech Assistant / Upwork — Match 84** — čerstvý worldwide remote, web updates, low/no-code, QA, tracking a AI workflows; mínus mandatory English bez úrovne a 20–50 proposals.
17. **Dotypos SK — Technický support — Match 84** — Bratislava; Android/pokladne, výjazdy, klientsky support; AJ konflikt treba potvrdiť.
18. **Pandora — Associate Assistant, eCommerce Operations — Match 84**.
19. **Allit — End-User Support — Match 84**.
20. **3MON — IT & Operations Support — Match 84**.
21. **STU — Web špecialista CMS/web — Match 83**.
22. **VNET — IT customer support — Match 82**.
23. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 27. 8. 2026 16:36 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak; StartupJobs/WordPress Jobs; Upwork; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 2 — IZY VAPE Back Office & Operations Coordinator a Upwork AI & Tech Assistant.**
- **Profesia:** pridaný čerstvý IZY VAPE Back Office & Operations Coordinator – e-commerce | Remote, zverejnený 27. 8. 2026. Overených 1 600–2 000 €/mes., Bratislava/prevažne HO, e-shop operatíva, objednávky, reklamácie, logistika a AI. AJ je uvedená ako stredne pokročilá, preto `unknown`/B1 risk; nástup je plánovaný až november–december 2026.
- **Priame firemné kariéry:** reálne kontrolované; bez nového samostatného kandidáta v tomto behu.
- **LinkedIn:** Wolt part-time je študentská zmenová rola; Foxelli je remote a Slovakia-eligible, ale jazykovo/specializačne príliš náročný. 0 pridaných.
- **Brigada.sk:** bez nového výsledku, ktorý by prebil aktuálne web/admin/tech možnosti.
- **Worki:** RM Biznis servis už je v LIVE; staré/uzavreté IZY VAPE výsledky boli správne potlačené. 0 pridaných.
- **Práca za rohom:** našiel IZY VAPE ako mirror Profesia a pomohol overiť detail: prevažne práca z domu, občasné plánované stretnutia v Bratislave, 1 600–2 000 €. Mirror sa nepočíta ako nezávislý zdroj; canonical ostal Profesia.
- **Služby zamestnanosti/Kariera:** viaceré BA admin/support výsledky boli vyradené pre povinné ďalšie jazyky (ukrajinčina/kirgizština C1/C2, srbčina B1/B2) alebo slabší fit.
- **Pretlak:** CloseRocket Customer Success & UX Partner je čerstvý a BA, ale predchádzajúce detailné overenie potvrdilo fluent English hard gate; OVB ostáva v LIVE.
- **StartupJobs/WordPress Jobs:** bez nového aktuálneho kandidáta spĺňajúceho Slovakia-remote, jazyk a hard-skill gate.
- **Upwork:** pridaný **AI & Tech Assistant**, zverejnený približne 4 hodiny pred kontrolou: worldwide remote, part-time ~5 h/deň, web updates, low/no-code, tracking, QA a AI-assisted workflows, bez senior-dev požiadavky. Povinná je English bez uvedenej úrovne a už bolo 20–50 proposals, preto iba Match 84. Ďalšie WordPress/Elementor výsledky mali vyššiu náročnosť, vysokú konkurenciu alebo slabšie podmienky.
- **Reddit:** recent hiring výsledky boli US-only alebo hard WordPress developer; väčšina nových príspevkov je `[FOR HIRE]`. 0 eligible verified hits.
- **Facebook:** stále **0 verified hits**. Verejná indexácia WordPress Slovensko, WooCommerce SK+CZ a BA pracovných skupín neposkytla konkrétny aktuálny hiring post s priamym linkom; stav zostáva `limited`. Autentizovaný Nexus/local ingestion ostáva backlog potreba.

### LIVE mix hlavného `jobs-data.json`
- **26 aktívnych položiek**.
- Profesia: **11/26 = 42,3 %**.
- LinkedIn: **2/26 = 7,7 %**.
- Priame firemné kariéry: **6/26 = 23,1 %**.
- GROWNi/Pretlak/Kariera/Worki/iný job board mimo Profesia: **4/26 = 15,4 %**.
- Freelance: **3/26 = 11,5 %**.
- **Mimo Profesia spolu: 15/26 = 57,7 %.**

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
46. **Application-window vs start-date decoupler — NOVÉ** — Radar má oddeliť `applyUrgency` od `startUrgency`. Čerstvá ponuka môže vyžadovať reakciu dnes, aj keď nástup je až o 2–4 mesiace; naopak stará ponuka s nástupom „ihneď“ nemá automaticky dostať vysokú prioritu. Praktický prínos: presnejšie `Reagovať dnes` a menej falošného pocitu naliehavosti.
47. **Industry compatibility flag — NOVÉ** — evidovať odvetvie firmy a voliteľný `industryPreference`/`industryRisk` bez automatického vyradenia. Praktický prínos: pri ponukách z regulovaných alebo osobne menej želaných segmentov (napr. vaping, gambling, adult, agresívny predaj) vie Radar oddeliť pracovnú zhodu od sektorovej vhodnosti a pred reakciou upozorniť na kontext.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
