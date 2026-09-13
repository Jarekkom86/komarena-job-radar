# KomArena Job Radar — CHANGELOG

## 2026-09-13 — 3 fresh promotions + inactive-link cleanup + resilient delta discovery

### 1. Reálny source audit + 3 nové high-confidence LIVE ponuky
- Reálne prehľadaných 13 zdrojových rodín pre Bratislavu/BA okolie a vhodné remote roly; audit nebol vytvorený iba zmenou timestampu.
- Nová promotion-grade ponuka: `Spracovateľ/Spracovateľka služieb pre klientov – Call centrum` — Prvá stavebná sporiteľňa, Bratislava, 1 500–1 700 € brutto, flexibilný pracovný čas a možnosť práce doma. Náplň: telefón/e-mail/chat, bankové systémy, spracovanie požiadaviek a administratívy; angličtina nie je hard gate.
- Nová promotion-grade ponuka: `Back Office Asistent/ka (4-hodinový úväzok)` — PROPLUSCO, Bratislava, 700 € brutto, skrátený úväzok. Administratíva, dochádzka, cestovné podklady, archivácia, Excel/Outlook a interné systémy; bez cudzojazyčnej podmienky.
- Nová promotion-grade ponuka: `Školiteľ/ka a podpora siete – INSIA Slovensko` — Bratislava-Nové Mesto + občasný home office, 1 500 € brutto. Prvý kontakt pre používateľov systému Yeti, technická/prevádzková podpora, testovanie funkcionalít, školenia a interné projekty; bez angličtiny ako hard gate.
- CREATIVE sites a SUPTel boli priamo znovu otvorené a re-verifikované; iba preto dostali nový `verifiedAt`/`linkCheckedAt` z 13.9.
- Slovak Telekom B2B support bol priamo otvorený a Kariera.sk dnes explicitne uvádza, že ponuka je neaktívna a nedá sa na ňu reagovať. Novší negatívny záznam preto fail-closed potláča staršiu aktívnu verziu.

### 2. Stabilné source-job ID deduplikovanie
- `job-radar-feed-merge-v1.js` teraz pred fuzzy firma+názov dedupe rozpoznáva stabilný identifikátor ponuky z URL/zdroja pre Profesia, Kariera.sk, Práca za rohom, LinkedIn a Upwork; podporuje aj explicitné `sourceJobId`.
- Alternatívna alebo lokalizovaná URL tej istej inzercie už má menšiu šancu vytvoriť duplicitnú kartu.
- Konflikty stále rešpektujú evidence-aware pravidlo: novší reálny negatívny dôkaz môže potlačiť starší pozitívny snapshot a novšia skutočná re-verifikácia ho môže neskôr znovu aktivovať.

### 3. Dynamický fallback pre čerstvé denné delty
- Ak `jobs-delta-index.json` chýba, je neplatný alebo starší než 48 hodín, runtime už nie je odkázaný na ručne hardcodovaný starý fallback.
- Vygeneruje bounded fallback pre základný `jobs-fresh-delta.json` plus posledných 7 kalendárnych denných delta súborov a spojí ho s tým, čo ešte vie z manifestu.
- Tým sa znižuje riziko, že existuje dnešná overená delta, ale LIVE ju neuvidí iba preto, že manifest/cache ostal zastaraný.

### 4. Manifest freshness observability + bezpečnejšia identity normalizácia
- `JobRadarFeedHealth` teraz vystavuje `deltaIndexStale` a rozlišuje režimy `stale-index+dynamic-fallback` / `dynamic-fallback` od normálneho live manifestu.
- Finálna identity deduplikácia normalizuje bežný šum právnej formy firmy (`s.r.o.`, `a.s.` a pod.) a boilerplate v názvoch pracovných pozícií, aby sa znížili duplicitné karty spôsobené iba formátovaním.
- CRM/localStorage kľúče, poznámky, hviezdičky, prečítané stavy a workflow statusy neboli zmenené.

### 5. Pravdivý audit a oddelená čerstvosť
- `source-audit.json` bol obnovený na základe skutočnej kontroly z 13.9.2026 08:09 a eviduje `freshPromoted=3`, `existingReverified=2` a `existingQuarantined=1`.
- `contentChangedAt` a `sourceVerificationAt` ostávajú samostatné; nový timestamp súboru bez dôkazu na zdroji nemení ponuku na „čerstvú“.
- Slabé kandidáty boli explicitne odmietnuté: PROPLUSCO 1 700 € back office kvôli B1–B2 AJ + krátkemu projektu, WEM Advisory kvôli stredne pokročilej AJ/finance scope, ESET kvôli B2 AJ, Bory dokumentárny pracovník kvôli zdravotníckej kvalifikácii a Upwork customer-support VA kvôli 3–5 USD/h + 50+ proposals.

### Kontroly / regresia
- Finálny `job-radar-feed-merge-v1.js` bol po zápise znovu načítaný z GitHubu; blob SHA `95c86186734ed6d5069a23a86a7b36fb6a6ba379`.
- Lokálna presná kópia uloženého JS prešla `node --check` bez syntaktickej chyby.
- Cielený Node test potvrdil: novší neaktívny Telekom záznam prepisuje starší aktívny snapshot, Kariera ID sa extrahuje ako `kariera:1561503` a 7-dňový dynamický fallback zahŕňa `jobs-fresh-delta-20260913.json`.
- `jobs-fresh-delta-20260913.json` bol po zápise znovu načítaný z GitHubu; blob SHA `ad04a24aacd18c0eb2e0a9a46fac47ba9247db6d`.
- Fallback live → validovaná cache → baseline zostal zachovaný; feed cache namespace sa posunul iba na interné `v9`, CRM/localStorage stav používateľa sa nemení.
- Žiadny zamknutý vizuálny súbor nebol editovaný.

### MASTER DESIGN LOCK — finálne overenie
- `komarena-job-radar-v6.5.html`: `18fd009f1f9f041a207b067c5dcc0661f1647199` — zhodný s lockom.
- `job-radar-v6.css`: `5157753d3525a99191e78374f7a074315bf7809a` — zhodný s lockom.
- `job-radar-v6.5-enhance.js`: `fbb56af1213723b68deb9dc6ffc9e4c9de7fd80d` — zhodný s lockom.
- `komarena-job-radar-jr-master.webp`: `ded775849800577277c4581ee5c30db6e43bba54` — zhodný s lockom.
- MASTER DESIGN LOCK zostal presne zachovaný.

---

## 2026-09-12 — promotion-grade e-commerce/L1 support + feed integrity hardening

### 1. Reálny source audit + 2 nové high-confidence LIVE ponuky
- Reálne preverené aktuálne Bratislava/BA zdroje: Profesia, Práca za rohom, Kariera/Zoznam, IKEA Careers, priame firemné kariérne stránky a verejné cross-board indexy použité iba na discovery/corroboration.
- Nová promotion-grade ponuka: `Customer Success Specialist (E-commerce)` — CREATIVE sites, Bratislava/Eurovea + občasný home office, od 1 600 € brutto + variabilná zložka. Náplň je veľmi blízka cieľovému profilu: e-shop support, bugy/admin, ERP integrácie, importy, automatizácie a koordinácia menších webových úloh. Angličtina je výhoda, nie podmienka.
- Nová promotion-grade ponuka: `Špecialista/špecialistka softvérovej podpory (L1)` — ANASOFT, Bratislava/Karlova Ves + občasný home office, 1 500 € brutto. Rola je explicitne vhodná pre absolventa/bez praxe a pokrýva tickety, incidenty, troubleshooting, dokumentáciu a eskalácie; angličtina nie je hard gate.
- Slovak Telekom B2B support, IKEA popredajný servis a SUPTel dispečing boli v tomto rune priamo znovu otvorené a re-verifikované; iba preto dostali nový 12.9. `verifiedAt`/`linkCheckedAt`.
- PORT System nebol umelo timestampovo obnovený. Jeho 11.9. overenie zostáva v 48 h okne a dnešný verejný index ho iba corroboroval; presný pôvodný detail sa nepodarilo priamo znovu otvoriť.
- ENGIE recepcia nebola promovaná pre stredne pokročilú AJ, DTSE IT support pre B2 AJ a Eric SK e-shop administratíva ostáva iba doplnková/sezónna možnosť pri 7 €/h.

### 2. Fail-closed validácia live JSON a cache
- `job-radar-feed-merge-v1.js` teraz pred cacheovaním a použitím validuje payloady: job feed musí obsahovať `jobs` pole a delta manifest `files` pole.
- Neplatný cached payload sa odstráni namiesto toho, aby ďalej kontaminoval fallback.
- Feed cache namespace je zámerne posunutý na `komarenaJobRadarFeed:v8`, aby sa po zavedení stricter validácie nepoužívali potenciálne nevalidné legacy cache dáta. CRM/localStorage stav používateľa sa nemení.

### 3. Evidence-aware deduplikácia
- Novší chybný/future-dated/incomplete záznam už nemôže automaticky prekryť starší validný reálne overený záznam tej istej ponuky.
- Explicitné novšie negatívne dôkazy (`inactive`, `expired`, `promotionEligible=false`, broken link) naďalej fail-closed potlačia staršiu aktívnu verziu; následná reálna novšia re-verifikácia môže ponuku znovu aktivovať.
- Tým sa znižuje riziko, že agregátor alebo chybný import vyradí dobrú ponuku, alebo naopak že starší pozitívny snapshot prežije reálne ukončenie inzercie.

### 4. Dedupe observability + load diagnostics
- `JobRadarFeedHealth` a `feedParts` teraz vystavujú počty vstupných záznamov, URL kolízií, identity kolízií, náhrad a výsledný deduplikovaný počet.
- Health vrstva eviduje aj `loadErrors` a `deltaIndexUpdatedAt`, takže výpadok alebo nevalidný konkrétny feed/delta súbor je diagnostikovateľný bez zmeny MASTER UI.

### 5. Deterministická retencia delta manifestu
- Dátované `jobs-fresh-delta-YYYYMMDD.json` sa pred 14-vrstvovým limitom zoradia podľa dátumu; neusporiadaný manifest už nemôže omylom zahodiť novšiu deltu a ponechať staršiu.
- Nedátovaný `jobs-fresh-delta.json` sa zachová ako základná vrstva a manifest stále akceptuje iba bezpečný rovnakorepozitárový názov podľa whitelist regexu.
- Pridaný a zaregistrovaný `jobs-fresh-delta-20260912.json`; obsahová čerstvosť (`updatedAt`) a source-verification čerstvosť (`sourceVerificationAt` / `verifiedAt`) ostávajú oddelené.

### 6. Pravdivý source audit
- `source-audit.json` bol prepísaný výsledkom skutočnej kontroly z 12.9.2026 08:35, nie zmenou timestampu bez dôkazu.
- Audit eviduje `freshPromoted=2`, `existingReverified=3` a explicitne zaznamenáva, že PORT System nebol timestampovo obnovený bez priameho reopen dôkazu.
- Rejected kandidáti majú konkrétne dôvody a cross-board indexy sa používajú iba na discovery/corroboration, nie ako jediný dôkaz pre promotion.

### Kontroly / regresia
- Finálny `job-radar-feed-merge-v1.js` bol po zápise znovu načítaný z GitHubu; blob SHA `38358a3cd06d5a8d6384504686bed5bfcb55ba2a`.
- Uložený JavaScript prešiel `node --check` bez syntaktickej chyby.
- `jobs-fresh-delta-20260912.json` bol po zápise znovu načítaný; blob SHA `d345b1b66d5b45d5cdc69f246aabdacc77a8c464`.
- CRM/localStorage kľúče ani používateľské workflow stavy neboli zmenené. Zmena `v7` → `v8` sa týka iba internej feed-cache vrstvy.
- Fallback live → validovaná cache → baseline zostal zachovaný.
- Žiadny zamknutý vizuálny súbor nebol editovaný.

### MASTER DESIGN LOCK — overenie
- `komarena-job-radar-v6.5.html`: `18fd009f1f9f041a207b067c5dcc0661f1647199`.
- `job-radar-v6.css`: `5157753d3525a99191e78374f7a074315bf7809a`.
- `job-radar-v6.5-enhance.js`: `fbb56af1213723b68deb9dc6ffc9e4c9de7fd80d`.
- `komarena-job-radar-jr-master.webp`: `ded775849800577277c4581ee5c30db6e43bba54`.
- MASTER dizajn zostal presne zachovaný; finálne hashe boli po zápisoch znovu porovnané s `JOB-RADAR-DESIGN-LOCK.json`.

---

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
