# KomArena Job Radar — CHANGELOG

## 2026-09-11 — fresh source promotion + self-discovering delta feed

### 1. Reálny source audit + nový high-confidence PORT System match
- Reálne prehľadané aktuálne Profesia Bratislava administratíva/zákaznícka podpora, Kariera/Zoznam, Práca za rohom, oficiálna IKEA careers a BA/Senec technická/support discovery.
- Nová promotion-grade LIVE ponuka: `Špecialista podpory zákazníkov` — PORT System Slovakia, Petržalka, 1 750–2 000 € brutto, Po–Pi bez víkendov/sviatkov, nízka fyzická záťaž, interné zaškolenie a iba základná angličtina.
- Slovak Telekom B2B support, IKEA popredajný servis a SUPTel dispečing boli reálne znovu otvorené/potvrdené; ich 11.9. `verifiedAt` vznikol iba z tejto kontroly.
- SuperFaktura nebola automaticky promovaná kvôli mierne pokročilej angličtine, RFA kvôli stredne pokročilej angličtine a FINAL-CD ostáva nižšia priorita kvôli mierne pokročilej AJ plus požiadavke podobnej praxe/účtovníctva.

### 2. Delta manifest namiesto každodenného hardcodovania engine
- Pridaný `jobs-delta-index.json`, ktorý explicitne registruje povolené fresh delta súbory vrátane `jobs-fresh-delta-20260911.json`.
- `job-radar-feed-merge-v1.js` už nemusí dostať ručne dopísané každé nové dátumové delta meno; načíta manifest a následne konkrétne vrstvy.
- Ak manifest chýba, je prázdny alebo neplatný, engine zachová bezpečný fallback na známe delta súbory. Tým sa znižuje riziko, že čerstvá denná vrstva existuje v repozitári, ale LIVE runtime ju vôbec nevidí.

### 3. Expiry gate pre ponuky s `expiresAt`
- LIVE eligibility teraz kontroluje aj reálny čas `expiresAt` a po jeho uplynutí ponuku fail-closed karantenizuje ako `expired-at`, aj keď jej historický `status` zostal `active`.
- Health diagnostika samostatne počíta `expired-at`, takže expirované ponuky sa nepletú so stale-verification alebo broken-link prípadmi.

### 4. Bezpečný a diagnostikovateľný delta manifest
- Manifest akceptuje iba názvy v tvare `jobs-fresh-delta.json` alebo `jobs-fresh-delta-YYYYMMDD.json`; iné cesty/URL sú odmietnuté.
- Duplicitné názvy sa odstránia a počet načítavaných vrstiev je obmedzený na posledných 14 registrovaných deliet, aby sa zabránilo nekontrolovanému rastu requestov.
- `JobRadarFeedHealth` teraz vystavuje `deltaIndexMode`, `deltaIndexError` a presný zoznam `deltaFiles`, takže je viditeľné, či LIVE beží z manifestu alebo fallbacku.

### 5. Pravdivá čerstvosť auditu
- `source-audit.json` bol aktualizovaný výsledkom skutočného sweepu o 08:07, nie dotknutím timestampu. Obsahuje `freshPromoted=1` a `existingReverified=3` s konkrétnymi dôvodmi prijatia/odmietnutia.
- Obsahová zmena a source-verification čas ostávajú explicitne oddelené.

### Kontroly / regresia
- CRM/localStorage kľúče a existujúce `jobs` rozhranie neboli zmenené; cache namespace zostal `komarenaJobRadarFeed:v7`, takže existujúci fallback stav ostáva spätne kompatibilný.
- Fallback poradie live → cache → baseline zostalo zachované; delta manifest má navyše vlastný fallback zoznam.
- Nový PORT záznam má `promotionEligible=true`, `scoreConfidence=99`, aktívny link check a reálny dnešný `verifiedAt`.
- Zamknuté vizuálne súbory neboli editované.

### MASTER DESIGN LOCK — overenie hashov
- `komarena-job-radar-v6.5.html`: očakávaný `18fd009f1f9f041a207b067c5dcc0661f1647199`.
- `job-radar-v6.css`: očakávaný `5157753d3525a99191e78374f7a074315bf7809a`.
- `job-radar-v6.5-enhance.js`: očakávaný `fbb56af1213723b68deb9dc6ffc9e4c9de7fd80d`.
- `komarena-job-radar-jr-master.webp`: očakávaný `ded775849800577277c4581ee5c30db6e43bba54`.
- MASTER dizajn bol zachovaný; finálne SHA sú overené po zápise nižšie v tejto run kontrole.

---

## 2026-09-10 — real source refresh + promotion reliability hardening

### 1. Reálny ranný source audit + promotion-grade delta
- Reálne prehľadané zdroje pre Bratislavu/BA okolie a vhodné remote roly: Profesia, priame firemné/Kariera ponuky, Worki, Brigada.sk, verejný LinkedIn/tech discovery, Upwork a verejné komunity.
- Nové promotion-grade LIVE položky boli pridané iba po otvorení aktívneho detailu: `Administratívny pracovník/pracovníčka dispečingu` — SUPTel (Bratislava, občasný home office, TPP/skrátený úväzok, 1 250 € + 13. plat, nástup ihneď, bez cudzojazyčného hard gate) a `Asistent/ka autorizovaného servisu OPEL` — FINAL-CD plus (Ružinov, od 1 400 €, servisná administratíva, zákaznícka komunikácia, fakturácia).
- IKEA kontaktné centrum, Slovak Telekom B2B support a finby administratíva boli priamo znovu otvorené a re-verifikované; ich nový `verifiedAt` vznikol iba na základe skutočnej kontroly detailu.
- INDEX NOSLUŠ archív bol takisto znovu otvorený, ale po zistení explicitnej fyzickej zdatnosti, práce s paletami a asistencie pri nakládke/vykládke bol nastavený `promotionEligible=false` a karantenizovaný.
- Grafton complaint analyst nebol promovaný: aktuálny detail vyžaduje B1 angličtinu plus technické vzdelanie/prax.

### 2. Dátové delty bez deštruktívneho prepisu hlavného feedu
- Pridaný `jobs-fresh-delta-20260910.json`, takže nový overený obsah možno bezpečne doplniť bez nutnosti rekonštruovať a prepisovať celý 65 kB `jobs-data.json`.
- `job-radar-feed-merge-v1.js` teraz načítava základné feedy aj dátované fresh delty a deduplikuje ich podľa URL a firma+názov.
- Pri konflikte vyhrá novšie reálne `verifiedAt`; pri rovnosti následne vyššia `scoreConfidence` a až potom autorita zdroja.

### 3. High-confidence + link-check promotion gate
- Promotion položka s `promotionEligible=true` a `scoreConfidence < 80` sa už nedostane do LIVE.
- Promotion položka bez `linkStatus` alebo bez `linkCheckedAt` sa karantenizuje ako `link-unverified`.
- Link-check starší než 48 hodín sa karantenizuje ako `link-stale`; známe 404/410/inactive/expired ostávajú fail-closed.
- Health diagnostika teraz samostatne počíta `low-confidence`, `link-unverified` a `link-stale` dôvody karantény.

### 4. Pravdivá trojitá čerstvosť v source health
- `job-radar-source-layer-v1.js` už nezobrazuje iba vek obsahu a auditu. Samostatne sleduje `LIVE obsah`, `ponuky overené` a `zdroje`.
- Chýbajúce alebo viac než 48 h staré overenie LIVE ponúk vyvolá warning nezávisle od času zápisu feed súboru.
- Source health preberá aj nové quarantine signály z feedu, takže nedostatočne overené promotion položky nie sú skryté za zeleným stavom.

### 5. Dôkazový source audit
- `source-audit.json` bol obnovený na základe reálneho sweepu z 10.9.2026 08:56, nie iba zmenou timestampu.
- Audit eviduje `freshPromoted=2`, `existingReverified=4`, z toho 3 naďalej eligible a 1 vedome karantenizovanú.
- Verejné Facebook/community výsledky bez konkrétneho prístupného hiring detailu ostávajú `limited/checked`, nie „overené“.

### Kontroly / regresia
- Finálny `job-radar-feed-merge-v1.js` bol po zápise znovu načítaný; počas implementácie zachytená strict-mode deklarácia `deltas` bola opravená pred dokončením. Finálny blob SHA: `12e6d42c641a2407d0080b8f2edd13af87539ae1`.
- `job-radar-source-layer-v1.js` bol po zápise znovu načítaný; finálny blob SHA: `a62c410e7be33b63d63efa3f2d48797f73147b8d`.
- `jobs-fresh-delta-20260910.json` je uložený ako samostatná dátová vrstva; `source-audit.json` bol následne obnovený reálnym výsledkom auditu.
- CRM/localStorage kľúče, stav používateľa, poznámky a existujúce dátové rozhranie `jobs` neboli zmenené. Fallback live → cache → baseline zostal zachovaný.
- Zamknuté vizuálne súbory neboli editované.

### MASTER DESIGN LOCK — overenie hashov
- `komarena-job-radar-v6.5.html`: `18fd009f1f9f041a207b067c5dcc0661f1647199` — zhodný s lockom.
- `job-radar-v6.css`: `5157753d3525a99191e78374f7a074315bf7809a` — zhodný s lockom.
- `job-radar-v6.5-enhance.js`: `fbb56af1213723b68deb9dc6ffc9e4c9de7fd80d` — zhodný s lockom.
- `komarena-job-radar-jr-master.webp`: `ded775849800577277c4581ee5c30db6e43bba54` — zhodný s lockom.
- MASTER dizajn bol zachovaný presne; fingerprint sa nezmenil.

---

## 2026-09-09 — morning source verification + feed hardening

### 1. Reálny source audit a nová promotion-grade ponuka
- Znova prehľadané verejné zdroje pre Bratislavu/BA okolie a vhodné remote roly: Profesia customer support/admin, Senec admin/logistics, Kariera/Zoznam, verejný LinkedIn index a pomocné agregované detaily iba na kontrolu požiadaviek.
- Nová high-confidence LIVE ponuka: `Pracovník*čka kontaktného centra IKEA – popredajný servis` (Profesia ID 5354960), Bratislava/čiastočne z domu, od 1 260 €, angličtina iba výhodou, prax nie je nutná.
- Priamo znovu otvorené a potvrdené existujúce LIVE položky Slovak Telekom B2B back office a finby reception/admin. Ich `verifiedAt` bol obnovený len preto, že detail bol reálne skontrolovaný.
- Bookio nebolo promované kvôli explicitnému B2 English hard gate; DHL 4h transport admin kvôli B1 English hard gate; SuperFaktura ostáva `needs-confirmation`, nie high-confidence promotion.

### 2. Pravdivé oddelenie content age vs. verification age
- `job-radar-feed-merge-v1.js` teraz vystavuje samostatné `contentUpdatedAt`, `verificationUpdatedAt` a `sourceVerificationAt`.
- `verificationUpdatedAt` sa počíta z reálneho `verifiedAt` LIVE položiek, nie z času zápisu JSON súboru.
- Health vrstva obsahuje `latestJobVerifiedAt`, `latestJobPublishedAt`, `freshContentUpdatedAt` a `freshSourceVerificationAt`, takže nový timestamp súboru už nemôže predstierať čerstvé ponuky.

### 3. Fail-closed LIVE eligibility + link-health gate
- LIVE merge teraz karantenizuje položky so `status=inactive/expired`, `promotionEligible=false`, známym `linkStatus=broken/inactive/expired/404/410`, chýbajúcim `verifiedAt`, budúcim chybným timestampom alebo overením starším ako 48 hodín.
- Pridané diagnostické počty dôvodov karantény (`stale`, `ineligible`, `link`, `unverified`, `status`, `future-verification`).
- Tým sa znižuje riziko, že neaktívna alebo iba historicky nájdená ponuka zostane medzi LIVE kartami.

### 4. Freshness-aware deduplikácia
- Pri duplicitách rovnakej URL alebo firma+názov teraz vyhrá novšie reálne overenie; až pri rovnakom `verifiedAt` rozhoduje kvalita/autorita zdroja.
- Dôvod: starší firemný alebo agregovaný záznam už nemôže prebiť čerstvejšiu verifikáciu tej istej ponuky len kvôli typu zdroja.

### 5. Source audit je dôkazový, nie timestampový
- `source-audit.json` bol prepísaný výsledkom reálneho ranného follow-up auditu a obsahuje konkrétne promoted/reverified/rejected výsledky a dôvody.
- Audit explicitne rozlišuje zmenu obsahu od času kontroly zdrojov.

### Kontroly / regresia
- CRM/localStorage kľúče a dátové rozhranie `jobs` zostali nezmenené; nové polia sú aditívne a spätne kompatibilné.
- Fallback poradie live → cache → baseline zostalo zachované.
- JSON dátové súbory boli zapísané cez GitHub contents API a následne znovu načítané z repozitára; JS bol znovu načítaný z nového blobu na kontrolu presného uloženého obsahu.
- Žiadny zamknutý vizuálny súbor nebol upravený.

### MASTER DESIGN LOCK — overenie hashov
- `komarena-job-radar-v6.5.html`: `18fd009f1f9f041a207b067c5dcc0661f1647199` — zhodný s lockom.
- `job-radar-v6.css`: `5157753d3525a99191e78374f7a074315bf7809a` — zhodný s lockom.
- `job-radar-v6.5-enhance.js`: `fbb56af1213723b68deb9dc6ffc9e4c9de7fd80d` — zhodný s lockom.
- `komarena-job-radar-jr-master.webp`: `ded775849800577277c4581ee5c30db6e43bba54` — zhodný s lockom.
- MASTER dizajn bol zachovaný bez zmeny fingerprintu.

---

## 2026-09-08 — TRUE FRESH refresh 09:29

### 9. Reálne čerstvé ponuky, nie iba nový timestamp
- Pridaný `jobs-fresh-delta.json` s verejne overenými aktuálnymi ponukami z rána 8.9.2026.
- Do fresh vrstvy boli zaradené: Henkel `Analyst Application Support`, Riešenia `Digital Account Manager`, aktuálne potvrdený Slovak Telekom support a NAY Elektrošpecialista.
- Každá položka má vlastný `verifiedAt`; čerstvosť sa teda viaže na reálne overenie ponuky, nie na umelé prepísanie hlavného feedu.

### 10. Feed merge používa fresh delta
- `job-radar-feed-merge-v1.js` teraz spája hlavný LIVE feed + non-Profesia feed + `jobs-fresh-delta.json`.
- Pri rovnakej firme a názve vyhrá pri rovnakej kvalite zdroja novšie reálne overenie.
- Feed vystavuje `verificationUpdatedAt` a počet fresh položiek cez `feedParts.fresh` / `JobRadarFeedHealth.freshJobs`.

### 11. Fresh source audit
- Pridaný `source-audit-live.json` s reálnou kontrolou zdrojov o 09:29.
- `job-radar-source-audit-v1.js` načíta najprv fresh audit a až potom legacy audit; pri výpadku ostáva cache fallback.
- Audit explicitne rozlišuje Profesia, konkrétne firemné ponuky a limited LinkedIn public coverage.

### MASTER DESIGN LOCK — kontrola
- Nebol upravený žiadny zamknutý vizuálny súbor: `komarena-job-radar-v6.5.html`, `job-radar-v6.css`, `job-radar-v6.5-enhance.js`, `komarena-job-radar-jr-master.webp`.
- Funkčný refresh prebehol iba cez dátové a feed/audit vrstvy.

---

## 2026-09-08 — screenshot stability pass

### 6. Operational freshness ≠ vek poslednej zmeny obsahu
- Opravený stav zo screenshotu, kde sa zobrazovalo `LIVE feed: 3 d` ako problém napriek tomu, že source audit prebehol dnes.
- Radar teraz rozlišuje `LIVE obsah` (kedy sa naposledy reálne zmenil zoznam) a `overenie zdrojov` (kedy boli zdroje naposledy skontrolované).
- Ak audit prebehol a nenašiel novú vhodnú promotion-grade deltu, starší obsah sa už automaticky netvári ako pokazený feed.

### 7. Audit cache / self-recovery
- `job-radar-source-audit-v1.js` si ukladá posledný úspešný source audit do localStorage.
- Pri dočasnom výpadku GitHub/RawGitHack sa zobrazí posledná uložená kontrola namiesto prázdneho alebo rozbitého Source Audit panelu.
- Stav cache sa propaguje do source health diagnostiky, takže fallback nie je skrytý.

### 8. Pravdivejšie health pravidlá + ochrana času
- UI upozorňuje na skutočne zastarané operačné pokrytie zdrojov, nie iba na to, že sa niekoľko hodín nezmenil obsah feedu.
- Pri čerstvom audite a nulovej vhodnej delte sa zobrazí stav `Zdroje overené • LIVE obsah bez novej vhodnej delty`.
- Pridaná kontrola chybných/budúcich timestampov a samostatná detekcia starého obsahu bez čerstvého auditu.

### MASTER DESIGN LOCK — kontrola
- Nebol upravený žiadny zamknutý vizuálny súbor: `komarena-job-radar-v6.5.html`, `job-radar-v6.css`, `job-radar-v6.5-enhance.js`, `komarena-job-radar-jr-master.webp`.
- Zmeny sú iba vo funkčných vrstvách `job-radar-source-layer-v1.js` a `job-radar-source-audit-v1.js`.

---

## 2026-09-08

### 1. Legacy v6.4 URL → canonical repository
- Starý verejný vstup cez `Jarekkom86/dochadzka-pro-sk` teraz presmeruje na canonical repo `Jarekkom86/komarena-job-radar`.
- Dôvod: po premenovaní repozitára mohli relatívne JS/JSON assety cez RawGitHack zostať na starej ceste a radar pôsobil ako zamrznutý.

### 2. Odolný feed merge
- `job-radar-feed-merge-v1.js` používa canonical absolute feed URL.
- Pridaná lokálna cache posledných funkčných `jobs-data.json`, `jobs-data-nonprof.json` a baseline dát.
- Pri výpadku live feedu sa použije cache; ak hlavný feed nie je dostupný a cache neexistuje, použije sa `baseline-jobs.json`.
- Feed vystavuje diagnostický stav cez `window.JobRadarFeedHealth`.

### 3. Pravdivá čerstvosť dát
- Zdrojový radar už nezlieva čas LIVE feedu a čas source auditu do jednej „najčerstvejšej“ hodnoty.
- Samostatne zobrazuje vek LIVE ponúk a vek auditu zdrojov.
- Pôvodný prísny warning iba podľa veku obsahu bol následne v screenshot stability passe nahradený operačným freshness modelom.
- Upozorní aj pri cache/baseline fallback režime.

### 4. MASTER DESIGN LOCK
- Pridaný `JOB-RADAR-MASTER-RULES.md`.
- Funkčné updatey nesmú meniť schválený vzhľad, DOM/CSS hierarchiu ani branding bez explicitného pokynu používateľa.
- APP/ENGINE, DATA a DESIGN verzie sú oddelené.

### 5. Stabilizačný modul pre ďalšiu integráciu
- Pridaný `job-radar-stability-v1.js` s canonical asset routingom, cache/fallback mechanizmom a diagnostikou chýb assetov.
- Modul je pripravený ako samostatná stabilizačná vrstva pre ďalší MASTER shell bez potreby meniť dizajn.

### MASTER dizajn
- Zachovaný ako pravidlo. Dnešné zásahy cielili na routing, feed, fallback, čerstvosť a governance; nevytvárajú nový vizuálny redesign.

### Kontroly
- Overená existencia a obsah upravených súborov cez GitHub connector.
- Zachovaný CRM/localStorage kľúč a dátové rozhranie `jobs` / `updatedAt`.
- Starý v6.4 vstup ostáva kompatibilný ako verejný entrypoint.
