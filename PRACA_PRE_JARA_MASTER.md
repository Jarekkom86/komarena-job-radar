# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 27. 8. 2026 18:25 CEST

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
16. **AI & Tech Assistant / Upwork — Match 84** — worldwide remote, web updates, low/no-code, QA, tracking a AI workflows; mínus mandatory English bez úrovne a 20–50 proposals.
17. **Dotypos SK — Technický support — Match 84** — Bratislava; Android/pokladne, výjazdy, klientsky support; AJ konflikt treba potvrdiť.
18. **Pandora — Associate Assistant, eCommerce Operations — Match 84**.
19. **Allit — End-User Support — Match 84**.
20. **3MON — IT & Operations Support — Match 84**.
21. **STU — Web špecialista CMS/web — Match 83**.
22. **VNET — IT customer support — Match 82**.
23. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 27. 8. 2026 18:25 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak; StartupJobs/WordPress Jobs; Upwork; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 0.** Kvalita mala prednosť pred kvótou; LIVE feed ostal fail-closed nezmenený.
- **Profesia:** bez nového kandidáta, ktorý by prebil aktuálne LIVE možnosti a prešiel BA/remote + jazykovým/hard-skill gateom.
- **Priame firemné kariéry:** bez nového samostatného high-fit kandidáta nad existujúce Hilti/Penta/O2/Websupport výsledky.
- **LinkedIn:** Foxelli Crochet Customer Support je 100 % remote a Slovakia-eligible, ale vyžaduje špecializovanú crochet expertízu a fluent/near-native English. 0 pridaných.
- **Brigada.sk:** bez nového relevantného web/admin/tech hitu.
- **Worki:** zachytené aktualizované výsledky v Novom Meste nad Váhom a Nitre/Trnave; sú mimo BA hard gate bez vhodného remote režimu a tematicky slabé. 0 pridaných.
- **Práca za rohom:** bez nového samostatného vhodného kandidáta; Profesia mirrory sa stále nepočítajú ako nezávislý source hit.
- **Služby zamestnanosti/Kariera:** bez nového kandidáta s vhodnou lokalitou, jazykmi a požiadavkami.
- **Pretlak:** bez nového kandidáta nad aktuálny LIVE; OVB AI ostáva high-fit výsledok.
- **StartupJobs/WordPress Jobs:** bez nového Slovakia-remote kandidáta s primeranou AJ a bez hard-development požiadaviek.
- **Upwork:** reálne skontrolované čerstvé worldwide výsledky. **Part-Time Web Developer / Virtual Assistant / Data Specialist** je geograficky vhodný a flexibilný, ale má iba 3–8 USD/h, 20–50 proposals a príliš všeobecný web-development scope. **WordPress Small Fix** má 15 USD fixed a 20–50 proposals. **WordPress Developer for WooCommerce** má 5 USD fixed a 20–50 proposals. **WordPress / Elementor Web Designer & Support Specialist** je síce na karte Worldwide, ale detail explicitne obmedzuje rolu na Philippines/UK, vyžaduje fluent English, expert úroveň a 8:30–17:00 UK; preto neprešiel location/language gate. 0 pridaných.
- **Reddit:** recent verejné výsledky neobsahovali nový aktuálny Slovakia-eligible hiring lead s lepšou kvalitou; starší WordPress/WooCommerce content-assistant ostáva iba discovery stopa. 0 pridaných.
- **Facebook:** **0 verified hits**. Priame verejné vyhľadanie WordPress Slovensko, WooCommerce SK+CZ a BA pracovných skupín vracia login/temporary block namiesto konkrétnych overiteľných group postov. Audit bol sprísnený zo `limited` na `blocked` pre tento konkrétny beh. Autentizovaný Nexus/local ingestion ostáva backlog potreba.

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
50. **Fuzzy cross-source role identity resolver — NOVÉ** — deduplikovať rovnakú pozíciu aj vtedy, keď má na firemnom career webe, LinkedIne a jobboarde odlišný názov alebo URL. Kombinovať normalizovaný názov firmy, význam názvu pozície, lokalitu a kľúčové požiadavky; pri zhode zachovať stabilné interné ID, vybrať najlepší canonical zdroj a zlúčiť dôkazy namiesto vytvorenia dvoch kariet. Prínos: menej duplikátov, presnejší source mix a bohatšie overenie jednej príležitosti.
51. **Remote-country eligibility memory — NOVÉ** — evidovať časovo obmedzenú, dôkazom podloženú pamäť, z ktorých krajín konkrétny zamestnávateľ/platformová rola reálne prijíma remote ľudí. Ukladať `eligibleCountries`, zdroj dôkazu a expiry; nikdy neodvodzovať Slovakia-eligibility iba zo slova `Worldwide`, ak detail uvádza užší country list. Prínos: rýchlejší hard location gate, menej opakovaného overovania a menej falošných remote hitov typu „Worldwide karta, Philippines/UK detail“.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
