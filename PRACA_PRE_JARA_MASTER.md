# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 27. 8. 2026 01:26 CEST

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
1. **LUNYS — E-commerce špecialista — Match 96** — WooCommerce/Shoptet/Magento, denná správa e-shopu, kategórie, testovanie, promo a AI. Originálny LinkedIn inzerát bol znovu potvrdený ako aktívny 27. 8. 2026 00:23 CEST: https://sk.linkedin.com/jobs/view/e-commerce-%C5%A1pecialista-%E2%80%93-spr%C3%A1va-a-rozvoj-e-shopu-at-lunys-4427140866
2. **LEAF — Implementation Support Specialist — Match 94** — prevažne remote, flexibilný skrátený úväzok; customer support + back-office + reporty + fakturačné podklady + obsahové úpravy webov + praktické AI automatizácie. https://growni.sk/praca/leaf-hladame-motor-nie-volant-implementation-support-specialist
3. **Ryvenia — Shoptet Specialist — Match 93** — Bratislava/full remote/hybrid; produkty, kategórie, ceny, CSV, migrácie, QA. https://sk.linkedin.com/jobs/view/shoptet-specialist-freelance-fulltime-part-time-hybrid-at-ryvenia-4254309724
4. **Websupport — Customer Success Advisor — Match 91** — weby, hosting, SSL, troubleshooting a zákaznícka komunikácia. https://www.websupport.sk/kariera/customer-success-advisor/
5. **O2 — Digital Content Admin — Match 90** — 8 €/h, web/e-shop, produkty, atribúty, ceny a landing pages. https://kariera.o2.sk/jobs/88971
6. **Plutvy.sk — e-shop zákaznícka podpora — Match 89** — Petržalka, Po–Pia, 1 520 €/mes. + bonus. https://www.profesia.sk/praca/plutvy/O5346653
7. **Upwork — WooCommerce Assistant — Match 89** — worldwide remote, <30 h/týždeň, 3–6 mesiacov, 5–10 USD/h; <5 proposals pri poslednom overení. Mínus: US Mountain Time okno. https://www.upwork.com/freelance-jobs/apply/WooCommerce-Assistant_~022091929951949047161/
8. **ALL SPORTS — e-shop Bauer Hockey — Match 88** — 1 600 €/mes., WordPress výhoda.
9. **SuperFaktura — Supportový parťák — Match 87** — online support, e-shop napojenia, exporty, troubleshooting.
10. **Bookio — B2B/SaaS online support — Match 85** — Petržalka/hybrid, živnosť, od 1 500 €/mes.
11. **Pandora — Associate Assistant, eCommerce Operations — Match 84** — priamy firemný zdroj, part-time.
12. **Allit — End-User Support — Match 84**.
13. **3MON — IT & Operations Support — Match 84** — B1 AJ mínus.
14. **STU — Web špecialista CMS/web — Match 83**.
15. **VNET — IT customer support — Match 82**.
16. **Upwork — WordPress Website Updates & Maintenance — Match 80**.

## SOURCE AUDIT — 27. 8. 2026 01:26 CEST
Reálne prehľadané source families: Profesia; priame firemné kariéry; LinkedIn; Brigada.sk; Worki; Práca za rohom; Služby zamestnanosti/Kariera; Pretlak/StartupJobs/WordPress Jobs; Upwork a ďalšie freelance indexy; Reddit; Facebook verejná indexácia.

### Výsledky tohto behu
- **Nové položky do `jobs-data.json`: 0.** Fail-closed pravidlo zachované; žiadna slabá ponuka nebola pridaná iba kvôli diverzite.
- **LinkedIn:** nájdené dve aktuálne Wolt Support Associate pozície v Bratislave (part-time aj full-time). Obe vyžadujú minimálne B2 AJ a zmeny vrátane večerov/víkendov, preto nepridané do prioritného feedu.
- **Reddit:** nájdený čerstvý urgentný dopyt `Looking for a Wordpress dev / designer` z 26. 8. 2026. Scope je veľmi stručný, rozpočet chýba a už je tam viacero reakcií, preto neprebil existujúce kvalitnejšie freelance položky.
- **Profesia / firemné kariéry / Brigada.sk / Worki / Práca za rohom / Služby zamestnanosti/Kariera / Pretlak / StartupJobs / WordPress Jobs / Upwork / ďalšie freelance indexy:** reálne prehľadané; bez nového kvalitnejšieho prírastku.
- **Facebook:** stále 0 verified hits. Verejná indexácia WordPress Slovensko, WooCommerce SK+CZ a BA pracovných skupín neposkytla konkrétny aktuálny priamy post; stav zostáva `limited`.

### LIVE mix hlavného `jobs-data.json`
- Posledný zapísaný stav zostáva **19 aktívnych položiek**.
- Profesia/Profesia-linked: **11 z 19 = 57,9 %** podľa aktuálne uložených source polí.
- Priame firemné kariéry: **4 z 19 = 21,1 %**.
- LinkedIn: **1 z 19 = 5,3 %**.
- GROWNi/iný job board mimo Profesia: **1 z 19 = 5,3 %**.
- Freelance: **2 z 19 = 10,5 %**.
- Poznámka: LUNYS má už overený originálny LinkedIn zdroj; po bezpečnej source migrácii klesne reálny Profesia podiel bez mazania ponúk.

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
14. **Source canonical migration queue** — pri overení kvalitnejšieho primárneho zdroja vytvoriť bezpečný dátový migračný krok (napr. LUNYS Profesia → LinkedIn) s kontrolou stabilného ID, CRM väzby a canonical dedupe pred zápisom.
15. **Closed-listing negative cache** — ukladať `no longer accepting`/zrušené výsledky s časom overenia a TTL, aby sa uzavreté inzeráty zbytočne nevyhodnocovali v každom hodinovom behu.
16. **Evidence snapshot fingerprint — NOVÉ** — pri každom úspešnom overení uložiť minimálny fingerprint kľúčových faktov (title/company/pay/status/source + verifiedAt), aby sa zachytili tiché zmeny inzerátu bez zmeny URL a Radar vedel upozorniť na zmenu mzdy, formy alebo stavu.
17. **Adaptive recheck SLA — NOVÉ** — frekvenciu opätovného overenia riadiť podľa priority a volatility: `today`/čerstvé freelance položky kontrolovať častejšie, stabilné firemné kariéry redšie a `limited`/blocked zdroje s backoffom. Zníži zbytočné dotazy a presunie kapacitu na ponuky, kde rozhoduje čas.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Aktuálny MASTER UI: v6.4; automat UI nemení.
