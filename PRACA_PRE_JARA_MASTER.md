# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 27. 8. 2026 13:30 CEST

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

### Negatívne filtre
- AJ A2 preferovaná; B1 mierny/stredný mínus; B2/C1 výrazný mínus.
- Povinný ďalší cudzí jazyk, hard PHP/fullstack/Laravel/React/Vue, pokročilé Linux/Docker/API bez preukázanej praxe = silná penalizácia alebo hard gate.
- Bratislava/okolie bonus; mimo BA preferovať remote/hybrid.
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
14. **Pandora — Associate Assistant, eCommerce Operations — Match 84**.
15. **Allit — End-User Support — Match 84**.
16. **3MON — IT & Operations Support — Match 84**.
17. **STU — Web špecialista CMS/web — Match 83**.
18. **VNET — IT customer support — Match 82**.
19. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 27. 8. 2026 13:30 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Pretlak; StartupJobs/WordPress Jobs; Upwork; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 1 — OVB Špecialista/ka pre AI a automatizáciu.**
- **Profesia:** čerstvé BA WordPress/e-shop/support/admin výsledky; bez nového kandidáta nad LIVE.
- **Priame firemné kariéry:** bez nového detailu nad existujúce Penta/Hilti/Websupport/O2/VNET/Pandora.
- **LinkedIn:** SupportYourApp CX Operations Consultant je AI/automation relevantný, ale má **fluent English hard gate**, preto 0 pridaných.
- **Brigada.sk:** reálne prehľadané IT/admin/e-shop brigády; bez nového konkrétneho výsledku nad existujúci LIVE.
- **Worki:** Administrátor e-shopu / zákaznícka podpora Shield-Sk ostáva explicitne obsadený/zrušený.
- **Práca za rohom:** bez nového originálneho hitu; mirror Profesia sa nepočíta ako nezávislý zdroj.
- **Pretlak:** **OVB AI/automatizácia pridaná**. CloseRocket Customer Success & UX Partner je nový, ale vyžaduje Fluent EN; RIEŠENIA Digital Account Manager vyžaduje C1 AJ a 2 roky agentúrnej praxe; ui42 office rola vyžaduje študentský status.
- **StartupJobs/WordPress Jobs:** bez nového kandidáta, ktorý by fitom/jazykom/odmenou prebil LIVE.
- **Upwork:** WooCommerce checkout/500-error má hard PHP a 15–20 proposals za 20 USD fixed; WordPress Small Fix má 20–50 proposals za 15 USD; Expert WordPress job je PHP-heavy. **0 pridaných.**
- **Reddit:** dnešné výsledky sú prevažne `[FOR HIRE]`, nie hiring dopyty; 0 verified hiring hits.
- **Facebook:** stále **0 verified hits**. Verejná indexácia WordPress Slovensko, WooCommerce SK+CZ a BA pracovných skupín neposkytla konkrétny aktuálny hiring post s priamym linkom; stav zostáva `limited`. Autentizovaný Nexus/local ingestion ostáva backlog potreba.

### LIVE mix hlavného `jobs-data.json`
- **22 aktívnych položiek**.
- Profesia: **10/22 = 45,5 %**.
- LinkedIn: **2/22 = 9,1 %**.
- Priame firemné kariéry: **6/22 = 27,3 %**.
- GROWNi/Pretlak/iný job board mimo Profesia: **2/22 = 9,1 %**.
- Freelance: **2/22 = 9,1 %**.
- **Mimo Profesia spolu: 12/22 = 54,5 %.**

## FAIL-CLOSED pravidlá
- Existujúca aktívna položka sa nemaže iba preto, že ju nový search nenašiel.
- Pokles feedu >20 % alebo strata celej kategórie = zápis sa nevykoná.
- Duplikát: firemný career link > originálny LinkedIn/company post > Profesia > iný job board > agregátor/repost.
- Facebook/community položka vyžaduje konkrétny verejne overiteľný post a priamy link.

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
40. **Selection-task readiness pack — NOVÉ** — pri ponukách s praktickou úlohou automaticky identifikovať očakávaný typ zadania a pripraviť krátky dôkazový balík z existujúcich projektov/skúseností bez vymýšľania skillov. Cieľ: zvýšiť úspešnosť v rolách ako OVB, kde rozhoduje spôsob uvažovania a konkrétny výstup, nie iba CV.
41. **Role-age vs active-proof split — NOVÉ** — oddeliť vek pôvodného zverejnenia od dnešného dôkazu, že apply cesta je stále aktívna. Cieľ: nepenalizovať kvalitnú staršiu ponuku iba kvôli dátumu, ak je formulár stále otvorený, ale súčasne ju neoznačiť ako „čerstvú“.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
