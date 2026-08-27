# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 27. 8. 2026 19:29 CEST

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

## SOURCE AUDIT — 27. 8. 2026 19:29 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak; StartupJobs/WordPress Jobs; Upwork; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 0.** Kvalita mala prednosť pred kvótou; LIVE feed ostal fail-closed nezmenený.
- **Profesia:** čerstvá INDEX NOSLUŠ administratívna výpomoc v BA za 1 650 € má relevantnú archiváciu/skenovanie/faktúry, ale ekonomické vzdelanie, účtovníctvo a AJ B1–B2 znižujú praktickú zhodu; nepridaná. MicroStep aplikačný inžinier je mimo profilu.
- **Priame firemné kariéry:** bez nového samostatného high-fit kandidáta nad existujúce Hilti/Penta/O2/Pandora/VNET/Websupport výsledky.
- **LinkedIn:** iSklad Account Executive v Senci je geograficky vhodný a e-commerce/tech-logistics, ale jadro je akvizícia a sales; nepridaný.
- **Brigada.sk:** aktuálny BA PHP programátor je hard development; ostatné viditeľné výsledky sú mimo BA alebo tematicky slabé.
- **Worki:** Administrátor e-shopu / zákaznícka podpora Shield-Sk je už obsadený alebo zrušený; nepridaný.
- **Práca za rohom:** bez nového samostatného vhodného kandidáta; Profesia mirrory sa stále nepočítajú ako nezávislý source hit.
- **Služby zamestnanosti/Kariera:** Naturzon e-shop support je v Poprade bez overeného remote režimu = `reject-distance`. Starší BA administratívny výsledok je nízko platený a neprebíja LIVE feed.
- **Pretlak:** CloseRocket Customer Success & UX Partner je čerstvý BA hit, ale fluent English je tvrdý problém. Poll60 CEO je príliš sales/leadership. PUELLAvone CRM je Košice remote/on-site a vyžaduje mid CRM/Bloomreach špecializáciu; 0 pridaných.
- **StartupJobs/WordPress Jobs:** Medevio BDR SK je 100 % remote a geograficky vhodný, 34–56 tis. Kč, ale primárne outbound sales; neprebíja preferované web/tech/admin možnosti. WordPress Jobs bez nového vhodného non-hard-dev Slovakia-remote hitu.
- **Upwork:** reálne skontrolované čerstvé worldwide výsledky. WooCommerce developer 5 USD fixed, Elementor build 20 USD fixed, WP text edit 30 USD fixed a ďalšie malé úlohy majú 20–50 proposals alebo hard-dev/low-value profil. Part-time assistant s povinným screen-sharing/camera režimom je nevhodný. 0 pridaných.
- **Reddit:** dnešné výsledky dominujú `[FOR HIRE]` ponuky freelancerov, nie hiring dopyty pre Jara. 0 eligible hiring hitov.
- **Facebook:** **0 verified hits**. Verejná indexácia neposkytla konkrétny aktuálny WordPress/WooCommerce/BA hiring post s priamym overiteľným linkom. Audit ostáva `blocked`; autentizovaný Nexus/local ingestion je naďalej potrebný pre spoľahlivé pokrytie.

### Run summary
- Source families reálne skontrolované: **12**.
- Nové aktívne položky: **0**.
- Vyradené lokalitou: **1**.
- Vyradené jazykovým/hard-skill gateom: **5**.
- Vyradené ako slabé/nízka hodnota: **7**.
- Duplikát / `[FOR HIRE]` / nevhodný typ leadu: **4**.

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
52. **Discovery-to-active quarantine lane — NOVÉ** — každý nový kandidát, ktorý ešte nemá potvrdenú lokalitu/remote politiku, jazyk, apply path alebo mandatory requirements, najprv dostať do krátkej `candidate` vrstvy mimo aktívneho Radaru. Aktivovať až po splnení minimálneho evidence setu. Prínos: menej falošných TOP hitov, menej neskorších opráv a žiadne miešanie neoverených search snippetov s reálne overenými ponukami.
53. **Cross-source corroboration score — NOVÉ** — ak sa tá istá rola objaví na firemnej kariére, LinkedIne alebo jobboarde, nezakladať ďalšiu kartu, ale zvýšiť `scoreConfidence`/`activeProof` iba vtedy, keď druhý nezávislý zdroj potvrdzuje firmu, názov, lokalitu a aktívnosť. Mirrory jedného zdroja sa nerátajú. Prínos: vyššia dôvera v TOP ponuky bez skresľovania source mixu alebo vytvárania duplicít.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
