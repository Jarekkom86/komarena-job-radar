# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 27. 8. 2026 14:23 CEST

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
13. **Bookio — B2B/SaaS online support — Match 85**.
14. **Dotypos SK — Technický support — Match 84** — Bratislava, 1 200 €/mes.; klientsky technický support, Android/pokladne, výjazdy, pred-/popredajný servis, vodič B; vhodné aj pre absolventa. Riziko: štruktúra uvádza AJ B1–B2, text iba mierne pokročilú AJ — treba potvrdiť.
15. **Pandora — Associate Assistant, eCommerce Operations — Match 84**.
16. **Allit — End-User Support — Match 84**.
17. **3MON — IT & Operations Support — Match 84**.
18. **STU — Web špecialista CMS/web — Match 83**.
19. **VNET — IT customer support — Match 82**.
20. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 27. 8. 2026 14:23 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak; StartupJobs/WordPress Jobs; Upwork; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 1 — Dotypos SK, Technický support, Bratislava.**
- **Profesia:** bez nového kandidáta, ktorý by kvalitou a podmienkami prebil LIVE.
- **Priame firemné kariéry:** GA Drilling IT Operations Specialist je Bratislava a funkčne relevantný, ale vyžaduje **fluent English**, 2–4 roky IT operations a M365/Entra, preto nepridaný.
- **LinkedIn:** Foxelli Crochet Customer Support je 100 % remote zo Slovenska, ale vyžaduje špecifické crochet know-how a ponúka do 800 € netto/freelance; SupportYourApp má fluent English hard gate. 0 pridaných.
- **Brigada.sk:** reálne prehľadané BA IT/admin/e-shop brigády; bez nového konkrétneho vhodného hitu.
- **Worki:** reálne prehľadané BA/HO IT/e-shop/admin; bez nového aktívneho kandidáta pre LIVE.
- **Práca za rohom:** bez nového originálneho hitu; Profesia mirrory sa nepočítajú ako nezávislý zdroj.
- **Služby zamestnanosti / Kariera:** **Dotypos Technický support pridaný**. Metrohm IT Support Specialist má explicitnú AJ B1–B2 a VŠ I. stupňa. CLOSER Administrátor webových stránok vyžaduje vysoké JavaScript/XML/Access/DB2 a pokročilý Windows Server, preto nepridaný.
- **Pretlak:** CloseRocket Customer Success & UX Partner je BA a zaujímavý, ale Fluent EN je hard gate; ui42 office rola vyžaduje študentský status; OVB už je v LIVE.
- **StartupJobs/WordPress Jobs:** Dreamup Customer Care je 100 % remote, ale vyžaduje poľštinu; Neuschl2 WordPress/project rola má Praha/občasné onsite stretnutia a agentúrnu prax; WordPress Jobs bez nového vhodného indexovaného hitu.
- **Upwork:** WordPress/Elementor Support Specialist je explicitne remote iba Philippines/UK + fluent English + expert level + 4.50–5.46 USD/h, takže neprešiel lokalitným ani jazykovým gate. Ďalší e-commerce build je expert PHP/JS a má 20–50 proposals. 0 pridaných.
- **Reddit:** recent hiring výsledok bol US-only hard WordPress development; ostatné dominantne `[FOR HIRE]`. 0 eligible verified hits.
- **Facebook:** stále **0 verified hits**. Verejná indexácia WordPress Slovensko, WooCommerce SK+CZ a BA pracovných skupín neposkytla konkrétny aktuálny hiring post s priamym linkom; stav zostáva `limited`. Autentizovaný Nexus/local ingestion ostáva backlog potreba.

### LIVE mix hlavného `jobs-data.json`
- **23 aktívnych položiek**.
- Profesia: **10/23 = 43,5 %**.
- LinkedIn: **2/23 = 8,7 %**.
- Priame firemné kariéry: **6/23 = 26,1 %**.
- GROWNi/Pretlak/Kariera/iný job board mimo Profesia: **3/23 = 13,0 %**.
- Freelance: **2/23 = 8,7 %**.
- **Mimo Profesia spolu: 13/23 = 56,5 %.**

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
42. **Language-evidence conflict resolver — NOVÉ** — keď štruktúrované pole a text inzerátu uvádzajú inú úroveň jazyka (napr. Dotypos B1–B2 vs. „mierne pokročilý študent“), Radar má konflikt explicitne označiť, znížiť confidence a nevytvárať falošne presný language gate. Praktický prínos: menej zbytočne vyradených near-fit rolí aj menej prehnane optimistických odporúčaní.
43. **Worksite-obligation classifier — NOVÉ** — oddeliť `officeDays`, `fieldTravel`, `serviceArea`, `remoteCountryEligibility` a `mandatoryOnsiteCity`. Praktický prínos: tvrdý BA/remote gate nebude oklamaný slovom „remote“, keď ponuka v skutočnosti vyžaduje pravidelné onsite dni alebo terénne cestovanie mimo rozumného regiónu.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
