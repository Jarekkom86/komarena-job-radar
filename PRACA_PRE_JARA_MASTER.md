# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 27. 8. 2026 08:33 CEST

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
4. **Penta Real Estate — Sales Administrator — Match 92** — Bratislava, TPP, 1 800 €/mes. + ročný bonus + home office; CRM, klientský portál, dáta, reporty, dokumenty, koordinácia dodávateľov systémov a klientská podpora.
5. **Hilti — Implementation & Service Specialist — Match 92** — Bratislava, TPP, od 1 800 €/mes. + bonusy + služobné auto; implementácia ON!Track/Fleet Management, školenia, reklamácie, CRM.
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

## SOURCE AUDIT — 27. 8. 2026 08:33 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak/StartupJobs/WordPress Jobs; Upwork; ďalšie freelance indexy; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 0.** Žiadny nový nález neprebil aktuálny LIVE feed kombináciou fitu, podmienok, aktuálnosti a dôveryhodnosti. Fail-closed feed zostáva nezmenený.
- **Profesia:** reálne prehľadané BA WordPress/WooCommerce/e-shop/admin/IT support/vodič výsledky; bez nového kandidáta, ktorý by prebil existujúce TOP položky.
- **Priame firemné kariéry:** prehľadané všeobecné BA career výsledky; bez nového priameho detailu vhodnejšieho než aktuálne Penta/Hilti/Websupport/O2.
- **LinkedIn:** LUNYS zostáva silný aktívny canonical hit. Top4Mobile Administrátor e-shopu/zákaznícka podpora bol nájdený, ale LinkedIn uvádza `No longer accepting applications`, takže nebol pridaný.
- **Brigada.sk / Worki / Práca za rohom / Služby zamestnanosti / Kariera / Pretlak / StartupJobs / WordPress Jobs:** reálne vyhľadané; bez nového verified kandidáta s lepším profilovým fitom. Profesia mirrory sa nerátajú ako druhý zdroj.
- **Upwork:** čerstvé WooCommerce/WordPress zákazky boli reálne prehľadané. Existujúci WooCommerce Assistant ostáva lepší hit: <5 proposals a non-development scope. WordPress/Elementor Support Specialist má >30 h/týždeň, emergency ticket reakciu do 15 min a náročnú zákaznícku komunikáciu; WooCommerce checkout/500-error vyžaduje PHP/server troubleshooting a má $20 fixed; Expert WordPress Developer vyžaduje PHP. Nepridané.
- **Reddit:** potvrdené dva reálne hiring posty. Urgentný `Looking for a Wordpress dev / designer` je čerstvý, ale bez rozpočtu a dostatočného scope a už s viacerými reakciami. `I'm looking for a website creator` je reálny WooCommerce-capable dopyt, ale bez transparentného rozpočtu a so širším build/migration scope. Zostávajú community lead kandidáti, nie LIVE top joby.
- **Facebook:** stále **0 verified hits**. Verejná indexácia WordPress Slovensko, WooCommerce SK+CZ a BA pracovných skupín neposkytla konkrétny aktuálny hiring post s priamym overiteľným linkom; stav zostáva `limited`. Autentizovaný Nexus/local ingestion zostáva backlog potreba, nie predstierané pokrytie.

### LIVE mix hlavného `jobs-data.json`
- Posledný potvrdený stav: **21 aktívnych položiek**.
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
20. **Mandatory-requirement gate** — explicitne extrahovať jazyky, certifikácie, status študenta, nočné zmeny, cestovanie a hard skills do `hardBlockReasons`.
21. **Employer relationship memory** — prepájať ponuky rovnakej firmy s CRM históriou: predchádzajúce reakcie, odpovede, kontakty a pohovory.
22. **Applicant-velocity signal** — pri zdrojoch s počtom applicants/proposals ukladať tempo rastu medzi recheckmi.
23. **Evidence coverage score** — merať, koľko kritických polí je priamo overených z detailu.
24. **Source latency / crawl-delay score** — merať rozdiel medzi zverejnením a prvým objavením vo vyhľadávaní.
25. **Effective hourly value** — normalizovať odmenu a odpočítať odhadovaný neplatený čas.
26. **Requirement provenance map** — ku kritickým filtrom ukladať zdroj a čas dôkazu.
27. **Opportunity aging state machine** — `new/fresh/aging/stale/reverify` podľa publishedAt, verifiedAt a apply path.
28. **Coverage-debt counter** — počítať po sebe idúce behy s `limited/blocked/0 verified hits` a eskalovať zdroj do technického backlogu.
29. **Community lead lane** — oddeliť necenové community dopyty od klasických jobov pomocou `budgetUnknown`, `scopeClarity`, `replyFriction`, `visibleCompetition`.
30. **Closed-result suppression fingerprint — NOVÉ** — uložiť title+company+canonical source pre výsledky explicitne označené `No longer accepting applications`; ďalšie discovery ich nebude opakovane spracúvať až do TTL alebo zmeny canonical detailu. Šetrí search kapacitu a bráni opakovanému návratu Top4Mobile-typu uzavretých ponúk.
31. **Support-intensity gate — NOVÉ** — pri support/remote rolách extrahovať SLA typu `odpoveď do 15 min`, on-call/emergency režim, večery/víkendy a minimálny týždenný rozsah. Vysoká support intenzita bude samostatná penalizácia ešte pred Match skóre, aby technicky vhodná rola nevyzerala lepšie, než je prakticky zvládnuteľná.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
