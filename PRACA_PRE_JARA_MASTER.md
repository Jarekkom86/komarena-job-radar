# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 28. 8. 2026 02:35 CEST

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
8. **IZY VAPE — Back Office & Operations Coordinator – e-commerce | Remote — Match 90** — Bratislava/prevažne HO, 1 600–2 000 €/mes.; e-shop, objednávky, reklamácie, logistika, fulfillment, dokumenty, procesy a AI. Riziko: stredne pokročilá AJ treba potvrdiť; nástup november–december 2026.
9. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, atribúty, ceny a landing pages.
10. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia, 1 520 €/mes. + bonus.
11. **Upwork — WooCommerce Assistant — Match 89** — worldwide remote, <30 h/týždeň, 3–6 mesiacov, 5–10 USD/h; mínus US Mountain Time.
12. **ALL SPORTS — e-shop Bauer Hockey — Match 88**.
13. **SuperFaktura — Supportový parťák — Match 87**.
14. **Cerkam Facility Services — Terénny administratívny pracovník — Match 86** — Bratislava, od 1 500 €/mes. + bonusy, evidencia zákazníckych požiadaviek, objednávky, interný systém, klientská komunikácia a terén. Čerstvé 27. 8. 2026; riziko je vyšší podiel terénu a možné obchodné presahy.
15. **RM Biznis servis / Worki — Manažér servisu klientov — Match 86** — väčšina práce online, občas Bratislava, 10–15 €/h.
16. **Bookio — B2B/SaaS online support — Match 85**.
17. **AI & Tech Assistant / Upwork — Match 84** — worldwide remote; web updates, low/no-code, QA, tracking a AI workflows; mandatory English bez úrovne a 20–50 proposals.
18. **Dotypos SK — Technický support — Match 84** — Bratislava; Android/pokladne, výjazdy, klientsky support; AJ konflikt treba potvrdiť.
19. **Pandora — Associate Assistant, eCommerce Operations — Match 84**.
20. **Allit — End-User Support — Match 84**.
21. **3MON — IT & Operations Support — Match 84**.
22. **STU — Web špecialista CMS/web — Match 83**.
23. **VNET — IT customer support — Match 82**.
24. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 28. 8. 2026 02:35 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak/StartupJobs; WordPress Jobs/tech-creative boards; Upwork; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 1.** Aktivovaný **Cerkam Facility Services — Terénny administratívny pracovník**, Bratislava, od 1 500 €/mes. + odmeny/bonusy, `Match 86`, `priority: today`, `locationEligibility: ba-area`.
- **Cerkam recheck:** aktuálny Profesia detail `O5348670` potvrdzuje dátum zverejnenia 27. 8. 2026, Bratislavu, administratívne/klientske zaradenie a mzdu od 1 500 €. Práca za rohom dopĺňa evidenciu zákazníckych požiadaviek, telefón/e-mail/osobnú komunikáciu, objednávky, interný systém a terén. Verejný detail nezobrazuje povinnú elektrotechnickú vyhlášku ani vyššiu AJ; skóre ostáva konzervatívne kvôli terénu a obchodno-vodičským kategóriám.
- **LinkedIn:** Wolt Support Associate Bratislava zostáva nevhodný pre minimum B2 English. Foxelli remote support/sales roly sú síce Slovakia-eligible, ale vyžadujú fluent/near-native English; sewing variant navyše špecializovanú praktickú skúsenosť.
- **Priame firemné kariéry:** Penta/Hilti/O2/Websupport línie skontrolované; bez novej direct-source BA/Slovakia-remote roly lepšej než aktuálny TOP.
- **Brigada.sk / Worki:** bez nového high-fit BA admin/e-shop/IT výsledku nad aktuálny LIVE threshold.
- **Pretlak / StartupJobs:** CloseRocket Customer Success & UX Partner je čerstvý BA kandidát, ale jazykový a customer-success/sales profil je výrazne náročnejší; neaktivované.
- **WordPress Jobs:** bez nového non-hard-dev Slovakia-remote výsledku.
- **Upwork:** čerstvé worldwide WordPress/WooCommerce zákazky zahŕňali WooCommerce build/maintenance za 5 USD, Elementor fixy za 5–50 USD a checkout/server maintenance. Väčšina mala 15–50 proposals, nízky budget alebo mandatory PHP/development; 0 pridaných.
- **Reddit:** najnovšie výsledky prevažne `[FOR HIRE]`, nie nový vhodný hiring lead.
- **Facebook:** **0 verified hits**. Verejná indexácia neposkytla konkrétny overiteľný aktuálny hiring post; obsah skupín ostáva login/temporary-block obmedzený. Autentizovaný Nexus/local ingestion zostáva potrebný.

### Run summary
- Source families reálne skontrolované: **12**.
- Nové aktívne položky: **1**.
- Vyradené lokalitou: **0**.
- Vyradené jazykovým/hard-skill gateom: **5**.
- Vyradené ako slabé/nízka hodnota: **8**.
- Duplikát / `[FOR HIRE]` / nevhodný typ leadu: **4**.

### LIVE mix hlavného `jobs-data.json`
- **27 aktívnych položiek**.
- Profesia: **12/27 = 44,4 %**.
- LinkedIn: **2/27 = 7,4 %**.
- Priame firemné kariéry: **6/27 = 22,2 %**.
- GROWNi/Pretlak/Kariera/Worki/iný job board mimo Profesia: **4/27 = 14,8 %**.
- Freelance: **3/27 = 11,1 %**.
- **Mimo Profesia spolu: 15/27 = 55,6 %.**

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
66. **Employer-template reuse detector — NOVÉ** — rozpozná, keď firma opakovane používa takmer rovnaký text náplne pre rozdielne názvy, mzdy alebo role. Cerkam má starší podobný text pri „Zapisovanie revízií elektriny“ a nový pri „Terénny administratívny pracovník“. Systém nesmie také ponuky zlúčiť iba podľa podobnosti popisu. Prínos: menej chybných fuzzy dedupe a presnejší ranking konkrétnej aktuálnej role.
67. **Vehicle-obligation classifier — NOVÉ** — samostatne rozlíši `vodičák B výhoda`, `vodičák B povinný`, `vlastné auto povinné`, `služobné auto poskytnuté` a `terén bez jasného vozidla`. Prínos: terénne/support/vodičské ponuky sa nebudú javiť vhodne len preto, že lokalita sedí; Radar vopred ukáže reálny logistický náklad a potenciálny blocker.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
