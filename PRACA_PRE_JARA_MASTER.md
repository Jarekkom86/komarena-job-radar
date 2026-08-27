# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 28. 8. 2026 01:37 CEST

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
14. **RM Biznis servis / Worki — Manažér servisu klientov — Match 86** — väčšina práce online, občas Bratislava, 10–15 €/h.
15. **Bookio — B2B/SaaS online support — Match 85**.
16. **AI & Tech Assistant / Upwork — Match 84** — worldwide remote; web updates, low/no-code, QA, tracking a AI workflows; mandatory English bez úrovne a 20–50 proposals.
17. **Dotypos SK — Technický support — Match 84** — Bratislava; Android/pokladne, výjazdy, klientsky support; AJ konflikt treba potvrdiť.
18. **Pandora — Associate Assistant, eCommerce Operations — Match 84**.
19. **Allit — End-User Support — Match 84**.
20. **3MON — IT & Operations Support — Match 84**.
21. **STU — Web špecialista CMS/web — Match 83**.
22. **VNET — IT customer support — Match 82**.
23. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 28. 8. 2026 01:37 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak/StartupJobs; WordPress Jobs/tech-creative boards; Upwork; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 0.** Kvalita mala prednosť pred kvótou; LIVE feed ostal fail-closed nezmenený.
- **Profesia / Práca za rohom:** čerstvý **Cerkam Facility Services — Terénny administratívny pracovník**, Bratislava, od 1 500 €/mes., je profilovo zaujímavý, ale dostupný verejný detail ho súčasne radí do administratívy, obchodu, terénu a vodičských činností. Povinné podmienky sa nepodarilo overiť v kvalite potrebnej na LIVE aktiváciu, preto zostáva mimo feedu do detailného rechecku. STU asistent vyžaduje pokročilú AJ a ďalší jazyk; Orange IT/security brigáda vyžaduje B2, pokročilý Linux a študentský status.
- **Priame firemné kariéry:** bez nového BA/Slovakia-remote kandidáta, ktorý by prebil existujúce Hilti/Websupport/O2/Penta direct-source roly.
- **LinkedIn:** Wolt Support Associate Bratislava je aktívny, ale vyžaduje minimálne **B2 English** a študentský/part-time shift režim; hard language gate.
- **Brigada.sk / Worki:** bez nového high-fit BA admin/e-shop/IT/AI výsledku nad aktuálny LIVE threshold.
- **Služby zamestnanosti/Kariera:** **Naturzon — Administratíva a zákaznícka podpora pre e-shop** má veľmi dobrú obsahovú zhodu, bez praxe a iba **A1–A2 AJ**, ale pracovisko je **Poprad** a detail neuvádza remote/home office, preto `reject-distance`. **StartSeason** je Bratislava-Rača, ale vyžaduje VŠ I. stupňa, 6 mesiacov praxe a ruštinu B1/B2.
- **Pretlak / StartupJobs / WordPress Jobs:** bez nového non-hard-dev BA/Slovakia-remote kandidáta lepšieho než aktuálny LIVE TOP.
- **Upwork:** čerstvé worldwide WordPress/WooCommerce zákazky zahŕňajú WooCommerce checkout/server maintenance, WordPress setup/deployment za 300 USD a Elementor/WordPress fixy. Najlepšie nové výsledky mali typicky 15–50 proposals, hard PHP/development požiadavky alebo nízky fixed budget; žiadny neprekonal aktuálne LIVE freelance položky.
- **Reddit:** najnovšie výsledky sú prevažne `[FOR HIRE]` ponuky freelancerov, nie hiring leady vhodné pre Jara.
- **Facebook:** **0 verified hits**. Verejná indexácia neposkytla konkrétny overiteľný aktuálny hiring post; obsah skupín ostáva login/temporary-block obmedzený. Autentizovaný Nexus/local ingestion zostáva potrebný.

### Run summary
- Source families reálne skontrolované: **12**.
- Nové aktívne položky: **0**.
- Vyradené lokalitou: **1**.
- Vyradené jazykovým/hard-skill/vzdelanostným gateom: **6**.
- Vyradené ako slabé/nízka hodnota: **8**.
- Duplikát / `[FOR HIRE]` / nevhodný typ leadu: **5**.

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
64. **Repost freshness laundering detector — NOVÉ** — mirror alebo agregátor nesmie zmeniť starú ponuku na „dnešnú“ iba tým, že ju znovu načítal alebo publikoval. `publishedAt` sa pri cross-source zhodách viaže na najstarší dôveryhodný canonical publication timestamp a zvlášť sa eviduje `lastSeenAt`. Prínos: čerstvé TOP výsledky nebudú zaplavené starými recyklovanými inzerátmi, ktoré mirror označil ako „pred pár hodinami“.
65. **Source-specific evidence contract — NOVÉ** — pred aktiváciou sa podľa typu zdroja vyžaduje minimum kľúčových dôkazov: Služby zamestnanosti = lokalita + vzdelanie + jazyk + pracovný čas; Upwork = worldwide/country restriction + mandatory skills + proposals + budget; LinkedIn/company = workplace/remote + language + employment type; Profesia/mirror = canonical source + mandatory requirements. Ak kritické pole chýba, kandidát ide do quarantine/recheck namiesto LIVE. Prínos: menej falošne vhodných výsledkov a menej ručných recheckov.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
