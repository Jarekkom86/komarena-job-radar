# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 27. 8. 2026 20:21 CEST

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

## SOURCE AUDIT — 27. 8. 2026 20:21 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak; StartupJobs/WordPress Jobs; Upwork; Freelancer/Twine/Contra; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 0.** Kvalita mala prednosť pred kvótou; LIVE feed ostal fail-closed nezmenený.
- **Profesia:** bez nového samostatného BA/remote kandidáta, ktorý by prebil aktuálne silné web/tech/admin možnosti.
- **Priame firemné kariéry:** Voxwise System Integration Expert je Bratislava/hybrid a 3 500 €/mes., ale vyžaduje hands-on Bloomreach/similar platform, API/webhooks/data integrations a C1 English; hard-skill/language reject.
- **LinkedIn:** Foxelli Crochet Support je 100 % remote a Slovakia-eligible, ale vyžaduje špecializovanú crochet podporu; KLARSTEIN Italy/Germany vyžadujú vysokú taliančinu/nemčinu; Tesco digital campaign rola je marketingovo seniornejšia. 0 pridaných.
- **Brigada.sk:** bez nového vhodného WordPress/e-shop/admin/support hitu; hard-dev a tematicky slabé výsledky nepridané.
- **Worki:** bez novej aktívnej BA/remote ponuky, ktorá by prešla quality gate a nebola už pokrytá alebo neaktívna.
- **Práca za rohom:** čerstvý SZRB metodik v Bratislave je procesne zaujímavý, ale vyžaduje VŠ II. stupňa a bankové/metodické zameranie. Penta Sales Administrator je už canonical pokrytý priamou Penta career stránkou.
- **Služby zamestnanosti/Kariera:** Vean administratívny pracovník v BA je iba 20 h/týždeň za 400 €/mes.; staršie jazykové supporty sú neaktívne alebo vyžadujú B2/C1. 0 pridaných.
- **Pretlak:** bez nového kandidáta lepšieho než existujúci OVB AI/automation; vyššia AJ a špecializovaný MarTech ostávajú gate.
- **StartupJobs/WordPress Jobs:** KLARSTEIN Germany je remote-from-Slovakia, ale vyžaduje C1 nemčinu. WordPress Jobs bez nového vhodného non-hard-dev Slovakia-remote hitu.
- **Upwork:** WordPress/Elementor Web Designer & Support Specialist je tematicky silný, ale >30 h/týždeň, helpdesk s urgentnými ticketmi do 15 minút a výrazná priama zákaznícka komunikácia bez potvrdenej jazykovej kompatibility. Dnešné malé WP/WooCommerce fixy sú 5–15 USD fixed s 10–50 proposals alebo hard-dev/low-value. 0 pridaných.
- **Freelancer/Twine/Contra:** Freelancer verejne indexuje najmä staré/uzavreté projekty; Twine momentálne nemá vhodný WordPress remote job; Contra bez overiteľného čerstvého high-fit hitu.
- **Reddit:** dominujú `[FOR HIRE]` ponuky freelancerov alebo U.S.-only/hard-dev hiring. 0 eligible hiring hitov.
- **Facebook:** **0 verified hits**. Verejná indexácia neposkytla konkrétny aktuálny WordPress/WooCommerce/BA hiring post s priamym overiteľným linkom. Audit ostáva `blocked`; autentizovaný Nexus/local ingestion je naďalej potrebný pre spoľahlivé pokrytie.

### Run summary
- Source families reálne skontrolované: **12+**.
- Nové aktívne položky: **0**.
- Vyradené lokalitou: **0**.
- Vyradené jazykovým/hard-skill gateom: **6**.
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
52. **Discovery-to-active quarantine lane** — každý nový kandidát, ktorý ešte nemá potvrdenú lokalitu/remote politiku, jazyk, apply path alebo mandatory requirements, najprv dostať do krátkej `candidate` vrstvy mimo aktívneho Radaru. Aktivovať až po splnení minimálneho evidence setu.
53. **Cross-source corroboration score** — ak sa tá istá rola objaví na firemnej kariére, LinkedIne alebo jobboarde, nezakladať ďalšiu kartu, ale zvýšiť `scoreConfidence`/`activeProof` iba vtedy, keď druhý nezávislý zdroj potvrdzuje firmu, názov, lokalitu a aktívnosť.
54. **Requirement-delta detector — NOVÉ** — pri opakovanej kontrole tej istej canonical ponuky porovnať mandatory požiadavky so starším evidence snapshotom. Ak pribudne vyššia AJ, nový onsite/hybrid záväzok, certifikácia, pracovný čas alebo hard skill, automaticky znížiť confidence/priority a poslať položku na revalidáciu namiesto tichého ponechania starého skóre. Prínos: TOP ponuky zostanú pravdivé aj keď zamestnávateľ po publikovaní zmení podmienky.
55. **Application follow-up timing engine — NOVÉ** — po stave `reagovane` vypočítať odporúčaný follow-up podľa typu kanála (career form, email, recruiter, freelance), dátumu reakcie a deadline; typicky 2–5 pracovných dní, bez automatického posielania. Prínos: menej zabudnutých reakcií a vyššia šanca dostať odpoveď bez spamovania firiem.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
