# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 27. 8. 2026 12:19 CEST

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
3. **Ryvenia — Shoptet Specialist — Match 93** — Bratislava/full remote/hybrid; produkty, kategórie, ceny, CSV, migrácie, QA.
4. **Penta Real Estate — Sales Administrator — Match 92** — Bratislava, 1 800 €/mes. + ročný bonus + home office; CRM, klientský portál, dáta, reporty, dokumenty, systémy a klientská podpora.
5. **Hilti — Implementation & Service Specialist — Match 92** — Bratislava, od 1 800 €/mes. + bonusy + služobné auto; implementácia ON!Track/Fleet Management, školenia, reklamácie, CRM.
6. **Websupport — Customer Success Advisor — Match 91** — weby, hosting, SSL, troubleshooting a zákaznícka komunikácia.
7. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, atribúty, ceny a landing pages.
8. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia, 1 520 €/mes. + bonus.
9. **Upwork — WooCommerce Assistant — Match 89** — worldwide remote, <30 h/týždeň, 3–6 mesiacov, 5–10 USD/h; mínus US Mountain Time.
10. **ALL SPORTS — e-shop Bauer Hockey — Match 88**.
11. **SuperFaktura — Supportový parťák — Match 87**.
12. **Bookio — B2B/SaaS online support — Match 85**.
13. **Pandora — Associate Assistant, eCommerce Operations — Match 84**.
14. **Allit — End-User Support — Match 84**.
15. **3MON — IT & Operations Support — Match 84**.
16. **STU — Web špecialista CMS/web — Match 83**.
17. **VNET — IT customer support — Match 82**.
18. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 27. 8. 2026 12:19 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak/StartupJobs/WordPress Jobs; Upwork; ďalšie freelance indexy; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 0.** Fail-closed feed zostal nezmenený. Dnešné nové kandidáty neprešli kombináciou fitu, jazyka, odmeny, eligibility, technických požiadaviek a praktickej šance na úspech.
- **Profesia:** reálne prehľadané čerstvé BA e-shop/WordPress/support/customer-support výsledky; bez nového kandidáta nad LIVE.
- **Priame firemné kariéry:** bez nového detailu nad Penta/Hilti/Websupport/O2/VNET/Pandora.
- **LinkedIn:** verified Wolt part-time/full-time Support Associate, Crypto Voucher Customer Support & Risk Analyst a NATEK Customer Success Manager. Wolt a Crypto Voucher majú **B2 AJ hard gate**; NATEK je US-market customer-success/sales s vyšším jazykovým a obchodným rizikom. **0 pridaných.**
- **Brigada.sk:** verified dlhodobá administratívna pomoc Toyota Financial Services za **7 €/h**, ale vyžaduje platný **študentský status**; dnešné retail/sklad zmeny sú nižší fit. **0 pridaných.**
- **Worki:** relevantný Administrátor e-shopu / zákaznícka podpora Shield-Sk je už obsadený alebo zrušený.
- **Práca za rohom:** Crypto Voucher je mirror/alternatívny index tej istej ponuky; mirror sa nepočíta ako nový nezávislý zdroj.
- **Služby zamestnanosti/Kariera:** reálne prehľadané; časť detailov je neaktívna alebo má cudzí jazyk/nižší fit.
- **Pretlak/StartupJobs/WordPress Jobs:** WordPress Jobs má čerstvé projekty **Enfold CSS/plugin fixes** a **WordPress/Elementor maintenance**, ale prvý má nejasný budget a pravdepodobný custom-code/plugin zásah, druhý vyžaduje silné HTML/CSS a skúsené WordPress portfolio. StartupJobs priniesol automation/WP-adjacent roly mimo SR s vyšším skill/location rizikom. **0 pridaných.**
- **Upwork:** WordPress/Elementor Web Designer & Support Specialist má 10–15 proposals, no je full-time 30+ h, Expert, vyžaduje fluent English, povoľuje iba Philippines/UK a ponúka **4.50–5.46 USD/h**; WordPress Small Fix je **15 USD** pri 20–50 proposals; existujúca Website Updates & Maintenance už je v LIVE. **0 nových pridaných.**
- **Ďalšie freelance indexy:** objavil sa WordPress maintenance/support scope, ale vyžaduje 3+ roky WP, PHP debugging, hooks/actions, SEO/indexing a security/performance troubleshooting; neprebil existujúce LIVE zákazky.
- **Reddit:** dnešné výsledky sú prevažne `[FOR HIRE]`, nie hiring dopyty; 0 verified hiring hits.
- **Facebook:** stále **0 verified hits**. Verejná indexácia WordPress Slovensko, WooCommerce SK+CZ a BA pracovných skupín neposkytla konkrétny aktuálny hiring post s priamym linkom; stav zostáva `limited`. Autentizovaný Nexus/local ingestion ostáva backlog potreba.

### LIVE mix hlavného `jobs-data.json`
- **21 aktívnych položiek**.
- Profesia: **10/21 = 47,6 %**.
- LinkedIn: **2/21 = 9,5 %**.
- Priame firemné kariéry: **6/21 = 28,6 %**.
- GROWNi/iný job board mimo Profesia: **1/21 = 4,8 %**.
- Freelance: **2/21 = 9,5 %**.
- **Mimo Profesia spolu: 11/21 = 52,4 %.**

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
34. Rejection-reason query feedback loop — agregovať dôvody vyradenia a používať ich na spresnenie query/source allocation.
35. Critical-evidence expiry — samostatný evidenceVerifiedAt + TTL pre active/apply path, mzdu, jazyk, režim, termín, hard requirements a competition.
36. Compensation-form normalizer — normalizovať TPP/živnosť/dohodu/freelance na porovnateľnú odhadovanú čistú hodinovú hodnotu vrátane neplateného času a fixných nákladov.
37. Discovery-query diversity ledger — ukladať, ktoré query/synonymá boli použité na ktorom zdroji a rotovať ich v ďalších behoch.
38. **Direct-contact advantage score — NOVÉ** — samostatne bodovať kvalitu cesty k reálnemu človeku: priamy recruiter e-mail/telefón alebo firemný formulár > platformový login > anonymný agregátor. Cieľ: pri rovnakom Match uprednostniť príležitosti, kde sa dá reagovať priamo a je vyššia šanca na odpoveď.
39. **Search saturation detector — NOVÉ** — ukladať fingerprint top výsledkov pre kombináciu source+query a po N behoch bez nového canonical hitu automaticky vynútiť synonymá, inú kategóriu alebo source allocation. Cieľ: neplytvať behmi na opakované vracanie rovnakých SERP výsledkov a zvyšovať discovery recall bez znižovania coverage flooru.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
