# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 27. 8. 2026 04:25 CEST

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
4. **Hilti — Implementation & Service Specialist — Match 92** — Bratislava, TPP, od 1 800 €/mes. + bonusy + služobné auto; implementácia ON!Track/Fleet Management, školenia, reklamácie, CRM.
5. **Websupport — Customer Success Advisor — Match 91** — weby, hosting, SSL, troubleshooting a zákaznícka komunikácia.
6. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, atribúty, ceny a landing pages.
7. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia, 1 520 €/mes. + bonus.
8. **Upwork — WooCommerce Assistant — Match 89** — worldwide remote, <30 h/týždeň, 3–6 mesiacov, 5–10 USD/h; pri kontrole 04:25 stále <5 proposals, klient naposledy aktívny približne pred hodinou; mínus US Mountain Time.
9. **ALL SPORTS — e-shop Bauer Hockey — Match 88**.
10. **SuperFaktura — Supportový parťák — Match 87**.
11. **Bookio — B2B/SaaS online support — Match 85**.
12. **Pandora — Associate Assistant, eCommerce Operations — Match 84**.
13. **Allit — End-User Support — Match 84**.
14. **3MON — IT & Operations Support — Match 84**.
15. **STU — Web špecialista CMS/web — Match 83**.
16. **VNET — IT customer support — Match 82**.
17. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 27. 8. 2026 04:25 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak/StartupJobs/WordPress Jobs; Upwork; ďalšie freelance indexy; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 0.** Kvalitu som neobchádzal kvótou a LIVE feed zostáva stabilný.
- **Profesia:** aktuálny BA customer-support index obsahuje Würth, MH Helpdesk, Brightpick a ďalšie support roly. Würth je obsahovo zaujímavý, ale už overený detail má B1 AJ + B1 NJ; nič nové neprebilo existujúci TOP.
- **LinkedIn:** čerstvý Wolt Support Associate Part Time je customer-support fit, ale explicitne ide o študentskú part-time shift rolu s večermi a víkendmi, preto nebol pridaný.
- **Priame firemné kariéry:** reálne prehľadané support/e-commerce/implementation dotazy; bez nového kvalitnejšieho direct-source hitu. Hilti/Websupport/Pandora zostávajú platné podľa posledného priameho overenia.
- **Brigada.sk / Worki / Práca za rohom / Služby zamestnanosti/Kariera / Pretlak / StartupJobs / WordPress Jobs:** reálne prehľadané; bez nového vhodného kandidáta. Mirror Profesia sa naďalej neráta ako nezávislý hit.
- **Upwork:** existujúci WooCommerce Assistant bol znovu potvrdený ako najlepší čerstvý freelance hit: <5 proposals, 2 interviewing, 3 hires, klient ho videl približne pred hodinou. Nové výsledky boli slabšie: AI WooCommerce plugin vyžaduje hotový plugin/codebase + PHP/AI Bot; WordPress completion má hard PHP/JS a 50+ proposals; Elementor audit 400 USD je expert-level a zahŕňa fluent-English copy editing; drobné editácie 5–30 USD majú zlý pomer odmena/konkurencia.
- **Reddit:** čerstvé výsledky sú prevažne `FOR HIRE`, nie hiring dopyty. 0 nových verified hiring hits.
- **Facebook:** stále **0 verified hits**. Verejná indexácia WordPress Slovensko, WooCommerce SK+CZ a BA pracovných skupín neposkytla konkrétny aktuálny hiring post s priamym overiteľným linkom; stav zostáva `limited`.

### LIVE mix hlavného `jobs-data.json`
- **20 aktívnych položiek.**
- Profesia: **10 z 20 = 50 %**.
- LinkedIn: **2 z 20 = 10 %**.
- Priame firemné kariéry: **5 z 20 = 25 %**.
- GROWNi/iný job board mimo Profesia: **1 z 20 = 5 %**.
- Freelance: **2 z 20 = 10 %**.
- **Mimo Profesia spolu: 10 z 20 = 50 %.** Diverzita ostáva na cieľovej úrovni bez umelého mazania kvalitných Profesia položiek.

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
22. **Applicant-velocity signal — NOVÉ** — pri zdrojoch s počtom applicants/proposals ukladať nielen absolútny počet, ale aj tempo rastu medzi recheckmi. Ponuka, ktorá ide z <5 na 20+ proposals za pár hodín, dostane urgentnejší deadline na reakciu než statická ponuka s rovnakým skóre.
23. **Evidence coverage score — NOVÉ** — pri každej položke merať, koľko kritických polí je priamo overených z detailu: aktívny apply path, odmena, forma, jazyk, lokalita/remote, hard requirements, publishedAt a kontakt. Vysoký Match s nízkym evidence coverage nesmie byť automaticky `priority: today` bez dodatočného overenia.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
