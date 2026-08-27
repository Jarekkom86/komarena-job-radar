# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 27. 8. 2026 10:33 CEST

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

## SOURCE AUDIT — 27. 8. 2026 10:33 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak/StartupJobs/WordPress Jobs; Upwork; ďalšie freelance indexy; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 0.** Fail-closed feed zostal nezmenený, pretože žiadny nový výsledok neprebil súčasný LIVE feed kombináciou fitu, odmeny, dôveryhodnosti, jazyka a praktickej šance na úspech.
- **Profesia:** čerstvé kandidáty zahŕňajú Decathlon Eurovea servisného technika (1 295–1 412 €/mes.) a Up Slovensko Špecialistu služieb zákazníkom (1 300 €/mes. + KPI). Decathlon má servisný presah, ale nižšiu odmenu a retail charakter; Up Slovensko je prevažne aktívna telefonická starostlivosť/retencia existujúcich zákazníkov. Ani jedna ponuka neprebila existujúce technické/e-commerce TOP možnosti. NAY výsledok bol mimo profilu; nemecké support roly boli jazykovo vyradené.
- **Priame firemné kariéry:** reálne vyhľadané career/support/e-commerce/implementation výsledky; bez nového priameho detailu, ktorý by prebil Penta/Hilti/Websupport/O2/VNET/Pandora.
- **LinkedIn:** verejný index v tomto okne vracal prevažne staršie alebo už známe výsledky; G4S IT Support je približne 3 roky starý, ENJOY Gaming približne mesiac. 0 nových verified čerstvých kandidátov do LIVE.
- **Brigada.sk:** overené aktuálne BA/Senec termíny 27.–31. 8. vrátane pokladne/dokladania 6,25–13,15 €/h, manipulačných prác 8–10,50 €/h a skladu 6,50–7 €/h. Ide o fallback retail/sklad, nie prioritný web/tech/admin smer, preto neboli pridané.
- **Worki:** reálne vyhľadané administratíva/e-shop/support výsledky; bez nového verified aktívneho detailu nad už známe alebo zrušené položky.
- **Práca za rohom:** viditeľné Up Slovensko, OfficeLand e-shop a support/admin ponuky. Up je Profesia mirror a nepočíta sa ako nezávislý source hit; OfficeLand je starší a neprebil aktuálne web/e-shop TOP položky.
- **Služby zamestnanosti/Kariera:** overené customer-care/admin/e-shop výsledky. Služby zamestnanosti majú Cleaning24 customer care za 1 000 € a starší NEONIX internetový predaj, ktorý vyžaduje angličtinu aj čínštinu; Kariera ukazuje viacero BA support/admin rolí, ale bez lepšieho výsledku než aktuálny LIVE feed.
- **WordPress Jobs/Pretlak/StartupJobs:** WordPress Jobs aktuálne uvádza 6 otvorených pozícií. Najbližší support projekt je bezpečnostné vyšetrovanie + clean rebuild + hosting migration, čo je už hard-technical/security scope; ostatné sú development/performance roly. Bez nového vhodného hitu.
- **Upwork:** nový verified hit `WooCommerce Expert Needed for Checkout, 500 Error & Store Management`, $20 fixed, 15–20 proposals. Vyžaduje PHP, server/500-error troubleshooting a silný WooCommerce development scope; nízky budget + hard skills + konkurencia = nepridaný.
- **Reddit:** dnešné výsledky sú opäť prevažne `[FOR HIRE]` ponuky iných WordPress/WooCommerce developerov, nie hiring dopyty pre Jara.
- **Facebook:** stále **0 verified hits**. Verejná indexácia WordPress Slovensko, WooCommerce SK+CZ a BA pracovných skupín neposkytla konkrétny aktuálny hiring post s priamym overiteľným linkom; stav zostáva `limited`. Autentizovaný Nexus/local ingestion zostáva backlog potreba, nie predstierané pokrytie.

### LIVE mix hlavného `jobs-data.json`
- Stav zostáva **21 aktívnych položiek**.
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
30. **Closed-result suppression fingerprint** — uložiť title+company+canonical source pre výsledky explicitne označené `No longer accepting applications`; ďalšie discovery ich nebude opakovane spracúvať až do TTL alebo zmeny canonical detailu.
31. **Support-intensity gate** — pri support/remote rolách extrahovať SLA typu `odpoveď do 15 min`, on-call/emergency režim, večery/víkendy a minimálny týždenný rozsah. Vysoká support intenzita bude samostatná penalizácia ešte pred Match skóre.
32. **Apply-now decision score** — oddeliť profilový Match od okamžitej akčnej priority podľa čerstvosti, konkurencie, source trust, friction, odmeny, commute/timezone a apply-path integrity.
33. **Near-fit rescue checklist** — pri ponukách tesne pod TOP oddeliť tvrdé blokery od 1–3 rýchlo overiteľných medzier bez vymýšľania kvalifikácií.
34. **Rejection-reason query feedback loop — NOVÉ** — agregovať dôvody vyradenia (`B2/nemčina`, hard PHP/Linux/Docker, študent-only, nočné/víkendové zmeny, mimo BA, slabá odmena, vysoká konkurencia) a používať ich pri ďalšom discovery na automatické spresnenie query a source allocation. Cieľ: menej opakovaného prehľadávania rovnakých nevhodných výsledkov a viac search kapacity pre kandidátov, ktorí majú reálnu šancu prejsť rankingom.
35. **Critical-evidence expiry — NOVÉ** — ku kritickým poliam `active/apply path`, mzda, jazyk, režim, termín, hard requirements a competition ukladať samostatný `evidenceVerifiedAt` + TTL podľa volatility. Po expirácii sa údaj nesmie považovať za čerstvý iba preto, že karta zostáva v LIVE; položka prejde do `reverify` a nemôže dostať `priority: today` bez nového dôkazu. Cieľ: znížiť falošné TOP priority na starých alebo potichu zmenených inzerátoch.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
