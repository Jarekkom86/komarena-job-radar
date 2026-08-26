# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 26. 8. 2026 22:23 CEST

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
2. **LEAF — Implementation Support Specialist — Match 94** — prevažne remote, flexibilný skrátený úväzok; customer support + back-office + reporty + fakturačné podklady + obsahové úpravy webov + praktické AI automatizácie. AJ B1, ale LEAF výslovne nevyžaduje perfektnú angličtinu. Nástup ihneď/dohodou; prihlášky priebežne, najneskôr 14. 9. 2026. https://growni.sk/praca/leaf-hladame-motor-nie-volant-implementation-support-specialist
3. **Ryvenia — Shoptet Specialist — Match 93** — Bratislava/full remote/hybrid; produkty, kategórie, ceny, CSV, migrácie, QA. https://sk.linkedin.com/jobs/view/shoptet-specialist-freelance-fulltime-part-time-hybrid-at-ryvenia-4254309724
4. **Websupport — Customer Success Advisor — Match 91** — weby, hosting, SSL, troubleshooting a zákaznícka komunikácia. https://www.websupport.sk/kariera/customer-success-advisor/
5. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, atribúty, ceny a landing pages. https://kariera.o2.sk/jobs/88971
6. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia, 1 520 €/mes. + bonus. https://www.profesia.sk/praca/plutvy/O5346653
7. **ALL SPORTS — e-shop Bauer Hockey — Match 88** — 1 600 €/mes., WordPress výhoda. https://www.profesia.sk/praca/all-sports-slovakia/O5305006
8. **SuperFaktura — Supportový parťák — Match 87** — online support, e-shop napojenia, exporty, troubleshooting. https://www.profesia.sk/praca/superfaktura/O5346896
9. **Bookio — B2B/SaaS online support — Match 85** — Petržalka/hybrid, živnosť, od 1 500 €/mes. https://www.profesia.sk/praca/bookio/O5340612
10. **Pandora — Associate Assistant, eCommerce Operations — Match 84** — priamy firemný zdroj, part-time; pozícia zverejnená 24. 8. 2026. https://careers.pandoragroup.com/associate-assistant-ecommerce-operations/job/742A6332A4E899B8B70877A8044F29E2
11. **Allit — End-User Support — Match 84** — Karlova Ves/home office, 1 300–1 700 €/mes.
12. **3MON — IT & Operations Support — Match 84** — Petržalka/hybrid, 2 000 €/mes., B1 AJ mínus.
13. **STU — Web špecialista CMS/web — Match 83** — 1 200–1 400 €/mes.
14. **VNET — IT customer support — Match 82** — Petržalka/hybrid, od 1 300 €/mes.
15. **Upwork — WordPress Website Updates & Maintenance — Match 80** — čerstvá 26. 8., worldwide remote, <30 h/týždeň, 1–3 mesiace, contract-to-hire; 15–20 proposals pri overení. https://www.upwork.com/freelance-jobs/apply/Freelance-WordPress-Developer-Website-Updates-Maintenance_~022092525710921207591/

## SOURCE AUDIT — 26. 8. 2026 22:23 CEST
Reálne boli prehľadané minimálne tieto nezávislé source families: Profesia; priame firemné kariérne stránky; LinkedIn; GROWNi; Brigada.sk; Worki; Práca za rohom; Kariera/Služby zamestnanosti; Pretlak/StartupJobs/WordPress Jobs; Upwork; Freelancermap; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Pridané do `jobs-data.json`: 2 nové položky** — LEAF Implementation Support Specialist a Upwork WordPress Website Updates & Maintenance.
- **Primárny zdroj opravený: 1 položka** — Pandora bola prepnutá z Profesia na priamy `careers.pandoragroup.com` link; firemný zdroj potvrdzuje zverejnenie 24. 8. 2026.
- **GROWNi:** 2 relevantné kandidáty; LEAF pridaný, Enco nepridané pre B2 AJ + Shopify/FB Ads požiadavky.
- **Upwork:** aspoň 5 čerstvých WP projektov overených; 1 pridaný, ďalšie vyradené pre hard-dev, extrémne nízky budget alebo 50+ proposals.
- **Freelancermap:** 3 relevantné WP/WooCommerce projekty; nepridané pre nemčinu alebo vyššiu technickú náročnosť.
- **Reddit:** dnešné WordPress posty overené; bez prírastku — urgentný dopyt je bez rozpočtu a s vysokou konkurenciou, veľa postov je FOR HIRE.
- **Facebook:** 0 verified hits. Verejná indexácia WordPress Slovensko, WooCommerce SK+CZ a BA pracovných skupín neposkytla konkrétny aktuálny priamy post; stav zostáva `limited`, nič sa nevymýšľalo.
- **Profesia:** kontrolovaný široký BA trh; bez nového kandidáta, ktorý by v tomto behu prebil existujúce TOP.
- **LinkedIn:** prehľadané verejne indexované BA e-commerce/support výsledky; bez nového silnejšieho fitu.
- **Brigada.sk / Worki / Práca za rohom / Kariera / Služby zamestnanosti / Pretlak / StartupJobs / WordPress Jobs:** skontrolované; bez nového kvalitného prírastku nad súčasný feed. Mirror Profesia sa nepočíta ako nezávislý výsledok.

### LIVE mix hlavného `jobs-data.json` po tomto behu
- Profesia / Profesia-linked URL: približne **56 %**.
- Priame firemné kariéry: približne **22 %**.
- LinkedIn: približne **6 %**.
- GROWNi/iný job board mimo Profesia: približne **6 %**.
- Freelance: približne **6 %**.
- Hlavný LIVE feed je teda **pod 60 % Profesia hranicou**; v6.4 navyše mergeuje zamknutý non-Profesia bootstrap.

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
10. **Application friction score — NOVÉ** — samostatne hodnotiť čas/náročnosť reakcie (portfólio, test, formulár, cover letter, účet, jazyk). Umožní uprednostniť rýchlo podateľné kvalitné ponuky, keď je cieľ reagovať ešte dnes.
11. **Competition signal — NOVÉ** — pri platformách, ktoré ho verejne ukazujú, ukladať `proposals/applicants/interviewing` a penalizovať zákazky s extrémnou konkurenciou; napr. Upwork 15–20 vs. 50+ proposals.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
