# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 26. 8. 2026 20:23 CEST

## Architektúra a ochrana UI
- MASTER UI: `komarena-job-radar-v6.html` + `job-radar-v6.css` + `job-radar-v6.1.js`.
- Autoritatívny živý feed: `jobs-data.json` (`schemaVersion: 1`).
- Register hľadaných zdrojov: `job-sources.json` (`schemaVersion: 1`).
- Používateľský vstup: `index.html` / `komarena-job-radar-v4.html` smeruje na MASTER v6.
- **UI je zamknuté:** automat nesmie meniť v6 HTML/CSS/JS, `index.html` ani `komarena-job-radar-v4.html`.
- Legacy snapshot zostáva iba ako historický fallback; nové ponuky idú do JSON feedu.
- Otvorená stránka kontroluje `jobs-data.json` každých 5 minút.
- CRM localStorage: `pracaPreJaraCRM-v3`; používateľské editácie: `pracaPreJaraEdits-v1`.
- CRM/editácie sa pri automatickom refreshe nesmú resetovať.

## Implementované v6.1
- JSON-first feed s HTML fallbackom.
- canonical URL deduplikácia.
- `sourceType`, `sourceTrust`, `verifiedAt`, `expiresAt`, `scoreConfidence`.
- normalizácia odmeny cez `payHour` / `payMonth`, keď je spoľahlivo dostupná.
- `priority: today` + filter **🔥 Reagovať dnes**.
- nový typ `origin: zakazka` pre verejne overené freelance/FB/community dopyty.
- pri workflow `Reagované` sa lokálne uloží `appliedAt` a automatický follow-up +3 dni.
- export CRM v schéme v2 vrátane používateľských editácií.
- source precedence: priamy firemný zdroj > kvalitný job board > agregátor > komunitný repost.

## Ranking profil
1. WordPress/WooCommerce správca, web/e-shop administrátor, CMS/content/product admin, Shoptet/Shopify/Upgates administrácia, maintenance webov/e-shopov.
2. Technický support, Smart Home/IoT, Home Assistant, diagnostika, troubleshooting, reklamácie/claims, servis, IT support.
3. Administratíva/back-office/zákaznícky servis/operations.
4. Rýchla alternatíva: vodič B/kuriér bez tachografu.
5. Nižšie: sklad/logistika.

### Negatívne filtre
- Angličtina A2: B2/C1/komunikatívna AJ ako tvrdá podmienka výrazne znižuje skóre.
- B1 je mierny až stredný mínus, nie automatické vyradenie.
- Hard PHP/fullstack/Laravel/React/Vue sa penalizujú veľmi výrazne.
- Bratislava/okolie = bonus; mimo BA preferovať remote/hybrid.

## KomArena Match 0–100
- zhoda roly: max 40
- dôkazy v CV: max 25
- praktickosť/lokalita/remote: max 15
- angličtina: max 10
- odmena/rast: max 10
- penalizácie za hard blockers a špeciálne oprávnenia

## Aktuálne TOP / čerstvo overené
1. **LUNYS — E-commerce špecialista — Match 96** — WooCommerce/Shoptet/Magento, denná správa e-shopu, kategórie, testovanie, promo mechaniky a AI. https://www.profesia.sk/praca/lunys/O5277221
2. **Ryvenia — Shoptet Specialist — Match 93** — Bratislava / full remote / hybrid — freelance/full-time/part-time; produkty, kategórie, ceny, CSV, migrácie a testovanie bez hard developmentu. Kontakt: kariera@ryvenia.sk. https://sk.linkedin.com/jobs/view/shoptet-specialist-freelance-fulltime-part-time-hybrid-at-ryvenia-4254309724
3. **Websupport — Customer Success Advisor — Match 91** — weby, hosting, SSL, troubleshooting, zákaznícka komunikácia a rast k WordPress/tech support. https://www.websupport.sk/kariera/customer-success-advisor/
4. **O2 Slovakia — Digital Content Admin (brigáda) — Match 90** — 8 €/h — správa webu/e-shopu, produkty, atribúty, ceny, parametre, popisy a landing pages. https://kariera.o2.sk/jobs/88971
5. **Plutvy.sk — Predajca / zákaznícka podpora e-shopu — Match 89** — Petržalka, Po–Pia 8:30–17:00, bez víkendov, 1 520 €/mes. + výkonnostná odmena do 150 €. Práca s e-shopom, objednávkami, interným systémom a zákazníckou komunikáciou; skúsenosť s e-shopom/podporou je iba výhoda a sortiment zaškolia. Nástup ihneď až 15. 9. Kontakt: Juraj Bubeník, MBA, +421 944 909 004. https://www.profesia.sk/praca/plutvy/O5346653
6. **ALL SPORTS SLOVAKIA — Špecialista e-shop predaj Bauer Hockey — Match 88** — 1 600 €/mes. — WordPress je výhoda. https://www.profesia.sk/praca/all-sports-slovakia/O5305006
7. **SuperFaktura — Supportový parťák/parťáčka — Match 87** — Bratislava, 7-hodinový pracovný deň, 5× home office/mesiac, od 1 200 €/mes. Online chat, FB komentáre, e-mail, telefón, e-shop napojenia, exporty a troubleshooting. Firma nehľadá programátora a zaškoľuje. Mínus: občasná AJ / mierne pokročilá. https://www.profesia.sk/praca/superfaktura/O5346896
8. **Bookio — Online zákaznícka podpora B2B/SaaS — Match 85** — Petržalka / občasný home office, živnosť, od 1 500 €/mes. + provízie. Onboarding klientov a nastavovanie webového rezervačného systému. https://www.profesia.sk/praca/bookio/O5340612
9. **Pandora — ECommerce Operations Assistant — Match 84** — 30 h/týždeň, 938 €/mes., AJ A2. Mínus: väčší podiel fulfillment/sklad. https://www.profesia.sk/praca/pandora-jewelry-slovakia/O5345914
10. **Allit — IT Administrator / End-User Support — Match 84** — Karlova Ves / home office, 1 300–1 700 €/mes. + bonusy. https://www.profesia.sk/praca/allit/O5339937
11. **3MON — IT & Operations Support — Match 84** — Petržalka / občasný home office, 2 000 €/mes., mínus AJ približne B1. https://www.profesia.sk/praca/3mon/O5338490
12. **STU — Web špecialista CMS/web — Match 83** — Bratislava, 1 200–1 400 €/mes. https://www.profesia.sk/praca/strojnicka-fakulta-stu-v-bratislave/O5299104
13. **VNET — IT customer support specialist — Match 82** — Petržalka / občasný home office, od 1 300 €/mes. https://www.vnet.sk/sk/spolocne/kariera/
14. **MH Teplárenský holding — IT Technik/Helpdesk — Match 80** — Nové Mesto, 1 800 €/mes. + 5 %, incidenty a end-user support. Mínus: B1 AJ a požadovaná skúsenosť s podporou PC. https://www.profesia.sk/praca/mh-teplarensky-holding/O5346861
15. **Trenujeme — e-commerce asistent / brigáda — Match 76** — 6,60 €/h + provízie; živnosť 8 €/h; AJ A2. Mínus: cyklistický sortiment a základný servis. https://www.profesia.sk/praca/trenujeme/O5335564
16. **Brightpick — Remote technik robotizovaného skladu — Match 68** — od 1 500 €/mes. + diéty. Technicky dobré, ale AJ B2 a výrazné cestovanie sú silné mínusy.

## Kontrola zdrojov — 26. 8. 2026 20:23
- Profesia: zachytená nová silná ponuka Plutvy.sk; overená priamo v detaile inzerátu.
- WordPress Jobs (`jobs.wordpress.net`): verejný oficiálny WordPress job board, aktuálne 6 otvorených pozícií/projektov; pridaný do `job-sources.json`. V tomto behu sa nenašiel kandidát s lepšou praktickou zhodou než lokálne TOP ponuky — aktuálne projekty sú prevažne hard-development alebo geograficky nevhodné.
- Reddit `r/wordpressjobs`: nové príspevky sú prevažne kandidáti hľadajúci prácu alebo nízkorozpočtové hard-development ponuky; nič nebolo pridané do aktívneho feedu.
- Verejná FB indexácia v tomto behu neposkytla konkrétny nový overiteľný dopyt s priamym verejným linkom; feed preto nebol znečistený neovereným repostom.

## Zdrojový radar — `job-sources.json`
### Najvyššia dôvera / priorita
- priame firemné kariérne stránky
- Profesia
- LinkedIn Jobs
- Brigada.sk
- Práca za rohom
- Worki
- Služby zamestnanosti
- Pretlak / StartupJobs podľa typu roly
- WordPress Jobs (`jobs.wordpress.net`) — priamy verejný WordPress job board

### Freelance / zákazky
- Upwork
- Freelancer
- Twine
- Freelancermap
- Useme
- PeoplePerHour
- Contra
- Reddit `r/wordpressjobs`
- ďalšie verejne indexované WordPress/WooCommerce dopyty

### Facebook / komunity — iba verejne dostupná alebo indexovaná vrstva
- Práca, brigády Bratislava a okolie / BratislavaDen.sk — https://www.facebook.com/groups/464113493609559/
- WordPress Slovensko — https://www.facebook.com/groups/174080056127650
- WooCommerce Komunita SK + CZ — https://www.facebook.com/groups/Woocommerce.SK.CZ/
- Copywriteri SK
- Marketeri, copywriteri, SEO optimalizátori

**Pravidlo:** FB má len čiastočné verejné pokrytie. Súkromné/prihlásením chránené príspevky sa nesmú označovať ako prejdené. Konkrétny FB/community dopyt sa do `jobs-data.json` pridá iba s overiteľným verejným linkom a nižším `sourceTrust`.

## Neaktívne / nezaradené
- Top4Mobile — Administrátor e-shopu / zákaznícka podpora: no longer accepting.
- SecTec — Marketing asistent: neaktívne.
- Zenea — E-Commerce Specialist: neaktívna.
- iRefurb Solutions — Ecommerce Specialist: neaktívna.
- Global Blue — 2nd level Application Support: neaktívna.
- TZS FIRST E Commerce — Content Manager: veľmi dobrá nemčina + dobrá angličtina = zásadný blocker.
- Allegro — Junior podpora partnerov: plynulá maďarčina + slovenčina = blocker.
- Madviso intern: obsahovo relevantné, ale prvé 3 mesiace neplatené = nízka priorita.
- Concentrix remote: čeština native + komunikatívna AJ = blocker.

## Application Builder
Na každej ponuke, brigáde aj zákazke pripravuje personalizovanú reakciu a cielené CV iba z MASTER profilu a faktických údajov položky. Nevymýšľa kvalifikácie ani hard skills.

## BACKLOG — ďalšie zmysluplné rozšírenia
1. **Import CRM backupu** — obnova exportovaného JSON po vyčistení prehliadača alebo na inom zariadení.
2. **Source dashboard** — koľko ponúk prišlo z job boardov / priamych career pages / FB / freelance a akú majú úspešnosť.
3. **Commute/distance** — odhad dojazdu z Miloslavova/BA pri lokálnych ponukách.
4. **Deadline alert** — zvýrazniť ponuky s blížiacim sa koncom alebo nástupom.
5. **Cross-device sync** — presun CRM z čistého localStorage na server/cloud.
6. **Nexus ingestion** — neskôr presun hourly ingestion/normalizácie do KomArena Nexus.
7. **GitHub Actions / lokálny agent 5-min polling** — až po stabilizácii zdrojového ingestu; ChatGPT automat zostáva hourly.
8. **Company/contact enrichment** — verejný kontakt, career e-mail, možnosť priameho oslovenia, ak je overiteľný.
9. **Freshness decay** — pri neznovuoverenej ponuke postupne znižovať confidence/priority, aby staršie inzeráty nezostávali navždy v TOP.

## Live repository
Repozitár: `Jarekkom86/komarena-job-radar`.
Používateľský link: `komarena-job-radar-v4.html` → MASTER v6.1.
