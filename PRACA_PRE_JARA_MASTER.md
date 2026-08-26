# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 26. 8. 2026 23:30 CEST

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
- AJ A2 je preferovaná. B1 = mierny/stredný mínus; B2/C1 = výrazný mínus.
- Hard PHP/fullstack/Laravel/React/Vue, pokročilé Linux/Docker/API bez preukázanej praxe = silná penalizácia.
- Bratislava/okolie = bonus; mimo BA preferovať remote/hybrid.
- Agregátor/repost nesmie prebiť priamy firemný zdroj.

## Aktuálne TOP / čerstvo overené
1. **LUNYS — E-commerce špecialista — Match 96** — WooCommerce/Shoptet/Magento, denná správa e-shopu, kategórie, testovanie, promo a AI. https://www.profesia.sk/praca/lunys/O5277221
2. **LEAF — Implementation Support Specialist — Match 94** — prevažne remote, flexibilný skrátený úväzok; customer support + back-office + reporty + fakturačné podklady + obsahové úpravy webov + praktické AI automatizácie. https://growni.sk/praca/leaf-hladame-motor-nie-volant-implementation-support-specialist
3. **Ryvenia — Shoptet Specialist — Match 93** — Bratislava/full remote/hybrid; produkty, kategórie, ceny, CSV, migrácie, QA. https://sk.linkedin.com/jobs/view/shoptet-specialist-freelance-fulltime-part-time-hybrid-at-ryvenia-4254309724
4. **Websupport — Customer Success Advisor — Match 91** — priamo overené 26. 8. 2026 medzi 10 otvorenými pozíciami; weby, hosting, SSL, troubleshooting a zákaznícka komunikácia. https://www.websupport.sk/kariera/customer-success-advisor/
5. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, atribúty, ceny a landing pages. https://kariera.o2.sk/jobs/88971
6. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia, 1 520 €/mes. + bonus. https://www.profesia.sk/praca/plutvy/O5346653
7. **Upwork — WooCommerce Assistant — Match 89 — NOVÉ / REAGOVAŤ DNES** — worldwide remote, <30 h/týždeň, 3–6 mesiacov, 5–10 USD/h. Správa produktov, variácií, atribútov, kategórií, objednávok, cien, obrázkov a jednoduchých WP zmien; klient výslovne nechce developera. Pri overení <5 proposals, klient od 2011, 57k USD spend a 219 hires. Mínus: väčšina US Mountain Time pracovného dňa, približne 16:00–00:00 CEST. https://www.upwork.com/freelance-jobs/apply/WooCommerce-Assistant_~022091929951949047161/
8. **ALL SPORTS — e-shop Bauer Hockey — Match 88** — 1 600 €/mes., WordPress výhoda. https://www.profesia.sk/praca/all-sports-slovakia/O5305006
9. **SuperFaktura — Supportový parťák — Match 87** — online support, e-shop napojenia, exporty, troubleshooting. https://www.profesia.sk/praca/superfaktura/O5346896
10. **Bookio — B2B/SaaS online support — Match 85** — Petržalka/hybrid, živnosť, od 1 500 €/mes. https://www.profesia.sk/praca/bookio/O5340612
11. **Pandora — Associate Assistant, eCommerce Operations — Match 84** — priamy firemný zdroj, part-time; pozícia zverejnená 24. 8. 2026. https://careers.pandoragroup.com/associate-assistant-ecommerce-operations/job/742A6332A4E899B8B70877A8044F29E2
12. **Allit — End-User Support — Match 84** — Karlova Ves/home office, 1 300–1 700 €/mes.
13. **3MON — IT & Operations Support — Match 84** — Petržalka/hybrid, 2 000 €/mes., B1 AJ mínus.
14. **STU — Web špecialista CMS/web — Match 83** — 1 200–1 400 €/mes.
15. **VNET — IT customer support — Match 82** — Petržalka/hybrid, od 1 300 €/mes.
16. **Upwork — WordPress Website Updates & Maintenance — Match 80** — worldwide remote, <30 h/týždeň, 1–3 mesiace, contract-to-hire.

## SOURCE AUDIT — 26. 8. 2026 23:30 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak/StartupJobs/WordPress Jobs; Upwork a ďalšie freelance indexy; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Pridané do `jobs-data.json`: 1 nová položka** — Upwork WooCommerce Assistant, Match 89, priority `today`.
- **Websupport:** Customer Success Advisor znovu potvrdený priamo na firemnej kariére; `verifiedAt` obnovené.
- **Upwork:** minimálne 6 relevantných WP/Woo výsledkov skontrolovaných; nový WooCommerce Assistant bol jasne najlepší pomer fit/konkurencia/technická náročnosť. AI WooCommerce plugin za 1 000 USD vyradený ako hard development; ďalšie WP projekty mali vyššiu konkurenciu alebo horší fit.
- **LinkedIn:** TZS Content Manager aktívny, ale medzinárodný content/jazykový profil je slabší fit; Wolt support vyžaduje min. B2 AJ; Top4Mobile už neprijíma.
- **Služby zamestnanosti/Kariera:** Snooti – Špecialista v oblasti predaja IKT overený, ale vyžaduje španielčinu C1/C2, preto vyradený.
- **Reddit:** dnešný urgentný WordPress dev/designer dopyt overený, ale bez rozpočtu a už s viacerými reakciami; nepridaný.
- **Facebook:** 0 verified hits. Verejná indexácia WordPress Slovensko, WooCommerce SK+CZ a BA pracovných skupín stále neposkytla konkrétny aktuálny priamy post; stav zostáva `limited`.
- **Brigada.sk / Worki / Práca za rohom / Pretlak / StartupJobs / WordPress Jobs / ďalšie freelance indexy:** skontrolované; bez nového kvalitnejšieho prírastku.

### LIVE mix hlavného `jobs-data.json` po tomto behu
- Profesia/Profesia-linked: **11 z 19 = 57,9 %**.
- Priame firemné kariéry: **4 z 19 = 21,1 %**.
- LinkedIn: **1 z 19 = 5,3 %**.
- GROWNi/iný job board mimo Profesia: **1 z 19 = 5,3 %**.
- Freelance: **2 z 19 = 10,5 %**.
- LIVE feed je po pridaní non-Profesia zákazky znovu **pod 60 % Profesia hranicou**.

## FAIL-CLOSED pravidlá
- Existujúca aktívna položka sa nemaže iba preto, že ju nový search nenašiel.
- Pokles feedu >20 % alebo strata celej kategórie = zápis sa nesmie vykonať.
- Pri duplikáte: priamy firemný career link > originálny LinkedIn/company post > Profesia > iný job board > agregátor/repost.
- Facebook/community položka vyžaduje konkrétny verejne overiteľný post a priamy link.

## Application Builder
Personalizovaná reakcia a cielené CV sa generujú iba z faktických údajov MASTER profilu a konkrétnej položky. Nevymýšľajú sa kvalifikácie ani hard skills.

## BACKLOG — ďalšie zmysluplné rozšírenia
1. **Import CRM backupu** — obnova JSON CRM na inom zariadení/po vyčistení prehliadača.
2. **Source-success analytics** — merať nielen počty ponúk, ale pomer reakcia → odpoveď → pohovor podľa zdroja.
3. **Commute/distance** — odhad dojazdu z BA okolia a penalizácia nereálneho dochádzania.
4. **Deadline alert** — zvýraznenie blížiaceho sa konca výberového procesu/nástupu.
5. **Cross-device sync** — CRM mimo čistého localStorage.
6. **Nexus authenticated Facebook ingestion** — iba cez autorizovaný lokálny agent; bez predstierania verejného prístupu.
7. **PublishedAt / <24 h priority** — pri čerstvých ponukách automaticky zvýšiť prioritu bez zmeny samotného Match skóre.
8. **Company/contact enrichment** — verejné career e-maily a priame kontakty, iba keď sú overiteľné.
9. **Freshness decay** — confidence/priority klesá, ak sa položka dlhšie nedá znovu overiť.
10. **Application friction score** — hodnotiť čas/náročnosť reakcie (portfólio, test, formulár, cover letter, účet, jazyk).
11. **Competition signal** — ukladať proposals/applicants/interviewing a penalizovať extrémnu konkurenciu.
12. **Timezone compatibility score — NOVÉ** — pri remote zákazkách prepočítať požadované pracovné okno na Europe/Bratislava a penalizovať nočné alebo nereálne prekrytie; WooCommerce Assistant ukázal, že remote samo osebe nestačí.
13. **Client quality/risk signal — NOVÉ** — pri freelance platformách hodnotiť históriu klienta (spend, počet hires, vek účtu, aktivita, platobná história ak je verejná) oddelene od Match skóre; pomôže filtrovať riskantné alebo neefektívne zákazky.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
