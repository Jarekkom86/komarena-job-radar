# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 27. 8. 2026 02:21 CEST

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
1. **LUNYS — E-commerce špecialista — Match 96** — WooCommerce/Shoptet/Magento, denná správa e-shopu, kategórie, testovanie, promo a AI. Canonical zdroj bol bezpečne migrovaný z Profesia na originálny LinkedIn inzerát: https://sk.linkedin.com/jobs/view/e-commerce-%C5%A1pecialista-%E2%80%93-spr%C3%A1va-a-rozvoj-e-shopu-at-lunys-4427140866
2. **LEAF — Implementation Support Specialist — Match 94** — prevažne remote, flexibilný skrátený úväzok; customer support + back-office + reporty + fakturačné podklady + obsahové úpravy webov + praktické AI automatizácie. https://growni.sk/praca/leaf-hladame-motor-nie-volant-implementation-support-specialist
3. **Ryvenia — Shoptet Specialist — Match 93** — Bratislava/full remote/hybrid; produkty, kategórie, ceny, CSV, migrácie, QA. https://sk.linkedin.com/jobs/view/shoptet-specialist-freelance-fulltime-part-time-hybrid-at-ryvenia-4254309724
4. **Hilti — Implementation & Service Specialist — Match 92 — NOVÉ / REAGOVAŤ DNES** — Bratislava, TPP, od 1 800 €/mes. + ročné bonusy + služobné auto. Implementácia ON!Track/Fleet Management, zákaznícke dáta, školenia, reklamácie, CRM Salesforce a MS Office. Minimálne SŠ s maturitou; predaj/Hilti skúsenosť a angličtina sú iba výhodou. Priamy firemný zdroj: https://careers.hilti.group/de-de/jobs/18369-sk/implementation-service-specialist/
5. **Websupport — Customer Success Advisor — Match 91** — weby, hosting, SSL, troubleshooting a zákaznícka komunikácia. https://www.websupport.sk/kariera/customer-success-advisor/
6. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, atribúty, ceny a landing pages. https://kariera.o2.sk/jobs/88971
7. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia, 1 520 €/mes. + bonus. https://www.profesia.sk/praca/plutvy/O5346653
8. **Upwork — WooCommerce Assistant — Match 89** — worldwide remote, <30 h/týždeň, 3–6 mesiacov, 5–10 USD/h; <5 proposals pri poslednom overení. Mínus: US Mountain Time okno. https://www.upwork.com/freelance-jobs/apply/WooCommerce-Assistant_~022091929951949047161/
9. **ALL SPORTS — e-shop Bauer Hockey — Match 88** — 1 600 €/mes., WordPress výhoda.
10. **SuperFaktura — Supportový parťák — Match 87** — online support, e-shop napojenia, exporty, troubleshooting.
11. **Bookio — B2B/SaaS online support — Match 85** — Petržalka/hybrid, živnosť, od 1 500 €/mes.
12. **Pandora — Associate Assistant, eCommerce Operations — Match 84** — priamy firemný zdroj, part-time.
13. **Allit — End-User Support — Match 84**.
14. **3MON — IT & Operations Support — Match 84** — B1 AJ mínus.
15. **STU — Web špecialista CMS/web — Match 83**.
16. **VNET — IT customer support — Match 82**.
17. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 27. 8. 2026 02:21 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak/StartupJobs/WordPress Jobs; Upwork a ďalšie freelance indexy; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 1 — Hilti Implementation & Service Specialist (Match 92).**
- **Source migrácie: 1 — LUNYS Profesia → originálny LinkedIn**, stabilné ID zachované.
- **Priame firemné kariéry:** Hilti Careers priamo potvrdilo aktívnu Bratislava rolu; preferované pred LinkedIn duplikátom.
- **LinkedIn:** Hilti, Wolt a Marlink boli aktuálne indexované. Wolt/Marlink vyžadujú B2 AJ; METRO Customer Success Manager bol síce veľmi zaujímavý obsahovo, ale LinkedIn ho explicitne označuje `No longer accepting applications`, preto nebol pridaný.
- **Profesia:** čerstvé BA support/helpdesk/customer-service výsledky skontrolované; bez nového kandidáta, ktorý by prebil Hilti alebo TOP feed.
- **Brigada.sk:** čerstvé BA brigády skontrolované; aktuálny retail/pokladňa hit na 27.–28. 8. má nízky profilový fit, preto nepridaný.
- **Worki / Práca za rohom / Služby zamestnanosti/Kariera / Pretlak / StartupJobs / WordPress Jobs:** reálne prehľadané; bez nového kvalitnejšieho prírastku.
- **Upwork:** nájdených viacero čerstvých WordPress/WooCommerce zákaziek z 26. 8. 2026. Väčšina mala hard PHP/development, 20–50 alebo 50+ proposals, U.S.-only obmedzenie alebo veľmi nízky budget; nepridané iba kvôli diverzite.
- **Reddit:** čerstvé výsledky boli prevažne `FOR HIRE` ponuky freelancerov, nie nové hiring dopyty.
- **Facebook:** stále **0 verified hits**. WordPress Slovensko, WooCommerce SK+CZ a BA pracovné skupiny nemajú cez verejnú indexáciu konkrétny aktuálny hiring post s priamym overiteľným linkom; stav zostáva `limited`.

### LIVE mix hlavného `jobs-data.json`
- **20 aktívnych položiek.**
- Profesia: **10 z 20 = 50 %**.
- LinkedIn: **2 z 20 = 10 %**.
- Priame firemné kariéry: **5 z 20 = 25 %**.
- GROWNi/iný job board mimo Profesia: **1 z 20 = 5 %**.
- Freelance: **2 z 20 = 10 %**.
- **Mimo Profesia spolu: 10 z 20 = 50 %.** Cieľ diverzity dosiahnutý bez mazania kvalitných Profesia položiek.

## FAIL-CLOSED pravidlá
- Existujúca aktívna položka sa nemaže iba preto, že ju nový search nenašiel.
- Pokles feedu >20 % alebo strata celej kategórie = zápis sa nesmie vykonať.
- Pri duplikáte: priamy firemný career link > originálny LinkedIn/company post > Profesia > iný job board > agregátor/repost.
- Facebook/community položka vyžaduje konkrétny verejne overiteľný post a priamy link.

## Application Builder
Personalizovaná reakcia a cielené CV sa generujú iba z faktických údajov MASTER profilu a konkrétnej položky. Nevymýšľajú sa kvalifikácie ani hard skills.

## BACKLOG — ďalšie zmysluplné rozšírenia
1. **Import CRM backupu** — obnova JSON CRM na inom zariadení/po vyčistení prehliadača.
2. **Source-success analytics** — merať pomer reakcia → odpoveď → pohovor podľa zdroja.
3. **Commute/distance** — odhad dojazdu a penalizácia nereálneho dochádzania.
4. **Deadline alert** — zvýraznenie blížiaceho sa konca výberového procesu/nástupu.
5. **Cross-device sync** — CRM mimo čistého localStorage.
6. **Nexus authenticated Facebook ingestion** — iba cez autorizovaný lokálny agent.
7. **PublishedAt / <24 h priority** — zvýšiť prioritu čerstvých ponúk bez zmeny Match skóre.
8. **Company/contact enrichment** — verejné career e-maily a priame kontakty.
9. **Freshness decay** — confidence/priority klesá, ak sa položka dlhšie nedá znovu overiť.
10. **Application friction score** — čas/náročnosť reakcie.
11. **Competition signal** — proposals/applicants/interviewing.
12. **Timezone compatibility score** — prepočet požadovaného pracovného okna na Europe/Bratislava.
13. **Client quality/risk signal** — história freelance klienta oddelene od Match skóre.
14. **Source canonical migration queue** — bezpečný presun na kvalitnejší primárny zdroj pri zachovaní stabilného ID/CRM väzby; prvý reálny prípad LUNYS bol vykonaný 27. 8. 2026.
15. **Closed-listing negative cache** — ukladať `no longer accepting`/zrušené výsledky s časom overenia a TTL.
16. **Evidence snapshot fingerprint** — uložiť fingerprint title/company/pay/status/source + verifiedAt a zachytiť tiché zmeny inzerátu.
17. **Adaptive recheck SLA** — `today`/čerstvé freelance kontrolovať častejšie, stabilné firemné kariéry redšie, blocked zdroje s backoffom.
18. **Apply-path integrity check — NOVÉ** — pred označením `priority: today` overiť, že klik vedie na reálne aktívny apply path a nie iba starý index, login wall, geo-restriction alebo `no longer accepting`. Zníži stratený čas pri reakcii a falošné TOP výsledky.
19. **Source-yield allocator s exploration floor — NOVÉ** — merať počet kvalitných verified hitov na jednotku search úsilia podľa zdroja a dynamicky presúvať viac kapacity na zdroje, ktoré prinášajú reálne vhodné ponuky, ale vždy zachovať povinné minimum 8 source families a pravidelnú exploráciu slabších zdrojov. Cieľ: vyšší počet relevantných hitov bez návratu k mono-zdroju Profesia.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
