# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 27. 8. 2026 07:22 CEST

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
- Povinný ďalší cudzí jazyk, hard PHP/fullstack/Laravel/React/Vue, pokročilé Linux/Docker/API bez preukázanej praxe = silná penalizácia alebo hard gate.
- Bratislava/okolie = bonus; mimo BA preferovať remote/hybrid.
- Agregátor/repost nesmie prebiť priamy firemný zdroj.

## Aktuálne TOP / čerstvo overené
1. **LUNYS — E-commerce špecialista — Match 96** — WooCommerce/Shoptet/Magento, denná správa e-shopu, kategórie, testovanie, promo a AI. Canonical zdroj: LinkedIn.
2. **LEAF — Implementation Support Specialist — Match 94** — prevažne remote, flexibilný skrátený úväzok; customer support + back-office + reporty + fakturačné podklady + obsahové úpravy webov + praktické AI automatizácie.
3. **Ryvenia — Shoptet Specialist — Match 93** — Bratislava/full remote/hybrid; produkty, kategórie, ceny, CSV, migrácie, QA.
4. **Penta Real Estate — Sales Administrator — Match 92** — Bratislava, TPP, 1 800 €/mes. + ročný bonus + home office; CRM, klientský portál, dáta, reporty, dokumenty, koordinácia dodávateľov systémov a klientská podpora. Priamy firemný career link, bez tvrdej vyššej AJ v overenom detaile.
5. **Hilti — Implementation & Service Specialist — Match 92** — Bratislava, TPP, od 1 800 €/mes. + bonusy + služobné auto; implementácia ON!Track/Fleet Management, školenia, reklamácie, CRM. Priamy career detail bol znovu overený 27. 8. ráno.
6. **Websupport — Customer Success Advisor — Match 91** — weby, hosting, SSL, troubleshooting a zákaznícka komunikácia; priamy detail bol znovu overený.
7. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, atribúty, ceny a landing pages; priamy detail bol znovu overený.
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

## SOURCE AUDIT — 27. 8. 2026 07:22 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak/StartupJobs/WordPress Jobs; Upwork; Freelancer/Twine a ďalšie freelance indexy; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 0.** Žiadny nový nález neprebil existujúci LIVE feed kombináciou fitu, podmienok, aktuálnosti a dôveryhodnosti. Fail-closed feed zostal na 21 aktívnych položkách.
- **Profesia:** čerstvé BA WordPress/e-shop/admin/IT-support výsledky boli reálne prehľadané. Bez nového kandidáta, ktorý by kvalitou prebil aktuálny feed.
- **Priame firemné kariéry:** znovu overené boli Hilti, Websupport a O2. Hilti detail naďalej potvrdzuje Implementation & Service Specialist v Bratislave, min. SŠ, MS Office, angličtinu iba ako výhodu, mzdu od 1 800 € + ročné bonusy a služobné auto. Penta detail v tomto behu vrátil cache-miss; existujúca položka sa preto nemaže ani neoznačuje za neaktívnu bez negatívneho dôkazu.
- **LinkedIn:** Wolt Support Associate Part Time aj Full Time sú aktuálne, ale majú minimálne B2 AJ; part-time navyše večery/víkendy. Nepridané pre jazykový hard gate.
- **Brigada.sk:** aktuálne BA hity zahŕňajú obchodné zmeny 29. 8. za 13,15 €/h a manipulačné práce v sklade začiatkom septembra za 10,50 €/h. Sú reálne a aktuálne, ale patria do nižšej priority než web/admin/tech a neprebíjajú aktuálny feed.
- **Worki:** nájdený Telesales Manager Bratislava 1 200–2 500 €/mes. s CRM/reportingom a vodič/sklad EPF Group Devínska Nová Ves 1 273–1 600 €/mes. Nepridané: sales/skladový charakter má slabší profilový fit.
- **Práca za rohom / Služby zamestnanosti / Kariera / Pretlak / StartupJobs / WordPress Jobs:** reálne prehľadané; bez nového nezávislého verified kandidáta. Profesia mirrory sa nerátajú ako druhý zdroj.
- **Upwork:** nájdené čerstvé WordPress/WooCommerce zákazky, ale žiadna neprebila existujúci WooCommerce Assistant. Checkout/500-error/store-management má iba $20 fixed, vyžaduje PHP/server troubleshooting a 15–20 proposals. WordPress Website Changes má $200 fixed a 50+ proposals. WordPress Small Fix má $15, 20–50 proposals a už jeden hire. Ďalšie joby sú hard-development heavy.
- **Freelancer/Twine/ďalšie freelance indexy:** Freelancer má aktívne WordPress/WooCommerce projekty, ale často desiatky až stovky bidov a development-heavy scope. Twine pri WordPress filtri aktuálne neukazuje otvorené WordPress joby. Bez nového kvalitného prírastku.
- **Reddit:** na rozdiel od predchádzajúceho behu boli potvrdené **2 reálne hiring posty**: urgentný `Looking for a Wordpress dev / designer` a `I'm looking for a website creator` pre online language-learning business s WooCommerce možnosťou. Do LIVE feedu nešli: prvý nemá rozpočet ani dostatočný scope a už má viac verejných reakcií; druhý je širší build/migration projekt bez transparentného rozpočtu. Ostatné dnešné výsledky sú FOR HIRE.
- **Facebook:** stále **0 verified hits**. Verejná indexácia WordPress Slovensko, WooCommerce SK+CZ a BA pracovných skupín neposkytla konkrétny aktuálny hiring post s priamym overiteľným linkom; stav zostáva `limited`. Autentizovaný Nexus/local ingestion zostáva backlog potreba, nie predstierané pokrytie.

### LIVE mix hlavného `jobs-data.json`
- **21 aktívnych položiek.**
- Profesia: **10 z 21 = 47,6 %**.
- LinkedIn: **2 z 21 = 9,5 %**.
- Priame firemné kariéry: **6 z 21 = 28,6 %**.
- GROWNi/iný job board mimo Profesia: **1 z 21 = 4,8 %**.
- Freelance: **2 z 21 = 9,5 %**.
- **Mimo Profesia spolu: 11 z 21 = 52,4 %.** Diverzita zostáva nad cieľovou hranicou bez umelého mazania kvalitných Profesia položiek.

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
14. **Source canonical migration queue** — bezpečný presun na kvalitnejší primárny zdroj pri zachovaní stabilného ID/CRM väzby.
15. **Closed-listing negative cache** — ukladať `no longer accepting`/zrušené výsledky s časom overenia a TTL.
16. **Evidence snapshot fingerprint** — uložiť fingerprint title/company/pay/status/source + verifiedAt a zachytiť tiché zmeny inzerátu.
17. **Adaptive recheck SLA** — `today`/čerstvé freelance kontrolovať častejšie, stabilné firemné kariéry redšie, blocked zdroje s backoffom.
18. **Apply-path integrity check** — pred `priority: today` overiť reálny aktívny apply path.
19. **Source-yield allocator s exploration floor** — dynamicky presúvať search kapacitu podľa verified hit yield, ale zachovať minimálne 8 source families.
20. **Mandatory-requirement gate** — explicitne extrahovať jazyky, certifikácie, status študenta, nočné zmeny, cestovanie a hard skills do `hardBlockReasons`; zásadná nesplnená podmienka nesmie zostať skrytá za vysokým Match skóre.
21. **Employer relationship memory** — prepájať ponuky rovnakej firmy s CRM históriou: predchádzajúce reakcie, odpovede, kontakty a pohovory.
22. **Applicant-velocity signal** — pri zdrojoch s počtom applicants/proposals ukladať tempo rastu medzi recheckmi.
23. **Evidence coverage score** — merať, koľko kritických polí je priamo overených z detailu; nízke coverage nesmie automaticky dostať `priority: today`.
24. **Source latency / crawl-delay score** — merať rozdiel medzi časom zverejnenia a časom, keď sa výsledok prvýkrát objaví vo vyhľadávaní. Zdroje s veľkým oneskorením nepoužívať na „čerstvé <24 h“ alerty bez priameho rechecku.
25. **Effective hourly value** — normalizovať mesačnú/hodinovú/fixed odmenu na porovnateľnú hodinovú hodnotu a odpočítať odhadovaný neplatený čas (commute, proposals, nočné časové okná).
26. **Requirement provenance map** — ku každému kritickému filtru (jazyk, študent, vodičák, certifikácia, hard skill, zmeny) ukladať presný zdroj a čas dôkazu.
27. **Opportunity aging state machine** — rozlišovať `new/fresh/aging/stale/reverify` podľa publishedAt, verifiedAt a dostupnosti apply path.
28. **Coverage-debt counter — NOVÉ** — pri každej source family počítať po sebe idúce behy s `limited/blocked/0 verified hits`. Po prekročení prahu sa zdroj automaticky eskaluje do technického backlogu (napr. FB → autorizovaný Nexus ingestion) namiesto tichého dlhodobého nulového pokrytia.
29. **Community lead lane — NOVÉ** — oddeliť necenové community dopyty (Reddit/FB) od klasických jobov: ukladať `budgetUnknown`, `scopeClarity`, `replyFriction` a `visibleCompetition`. Vďaka tomu sa urgentný WordPress dopyt môže zobraziť ako rýchly lead bez toho, aby umelo dostal vysoké Match skóre ako riadna pracovná ponuka.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
