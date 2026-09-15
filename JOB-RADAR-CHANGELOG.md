# KomArena Job Radar — CHANGELOG

## 2026-09-15 — truthful verification refresh + evidence-quality hardening

### 1. Reálny source audit bez umelého promovania
- Reálne preverené aktuálne verejné zdroje pre Bratislavu/BA okolie a vhodné remote roly.
- PSS `Spracovateľ/Spracovateľka služieb pre klientov – Call centrum` bola 15.9. reálne znovu overená na canonical firemnom detaile aj zozname voľných miest: Bratislava, 1 500–1 700 €, flexibilný čas a možnosť práce doma; apply action zostáva dostupný.
- Staffino Technical Support Specialist / Project Coordinator ostáva verification-needed: verejný index je sľubný, ale bez dostatočne overeného full detailu sa nepromuje.
- ALUFIX administratíva/analytika ostáva mimo novej promotion vrstvy pre explicitný B2 English hard penalty.
- Žiadna nová ponuka nebola promovaná len preto, aby radar vyzeral čerstvo.

### 2. Evidence-quality helper bez zásahu do dizajnu
- Pridaný `job-radar-feed-quality-v1.js` ako samostatný ne-vizuálny helper.
- Rozlišuje content age a verification age a kontroluje chýbajúce link evidence, verification↔link drift a future-dated publication/verification.
- Helper nemení DOM, CSS ani CRM/localStorage kľúče; je pripravený pre ďalšiu diagnostickú integráciu bez zásahu do MASTER vzhľadu.

### 3. Denná delta vrstva je striktne evidence-only
- Pridaný `jobs-fresh-delta-20260915.json`.
- Obsahuje iba PSS, ktorá bola v tomto rune skutočne znovu otvorená a potvrdená.
- Discovery-only kandidáti sú uložené oddelene a runtime ich nemôže omylom načítať ako LIVE `jobs`.

### 4. Deterministická registrácia dnešnej vrstvy
- `jobs-delta-index.json` explicitne registruje `jobs-fresh-delta-20260915.json`.
- Bounded same-repository manifest/fallback politika zostáva zachovaná; žiadny externý alebo nevalidovaný názov delta súboru sa nepridáva.

### 5. Source audit teraz explicitne odlišuje tri veky
- `source-audit.json` schemaVersion 9 explicitne uvádza content change age, job verification evidence a source-verification age ako oddelené koncepty.
- Secondary indexing sa používa iba ako discovery/corroboration a nesmie sám posunúť `verifiedAt`.

### Kontroly / regresia
- `jobs-fresh-delta-20260915.json` obsahuje `updatedAt`, `sourceVerificationAt`, `verifiedAt` a `linkCheckedAt` z reálnej kontroly 15.9.; nejde o timestamp-only refresh starého záznamu.
- PSS canonical detail a company career list boli verejne dostupné a obsahovali aktívnu vacancy/application surface.
- Existujúci feed engine, CRM/localStorage schéma a fallback poradie neboli menené.
- Nový helper je izolovaný súbor a nie je vložený do locked HTML; preto nemôže meniť aktuálny MASTER runtime ani vizuál.

### MASTER DESIGN LOCK — finálne overenie
- `komarena-job-radar-v6.5.html` = `18fd009f1f9f041a207b067c5dcc0661f1647199` — zhodné s lockom.
- `job-radar-v6.css` = `5157753d3525a99191e78374f7a074315bf7809a` — zhodné s lockom.
- `job-radar-v6.5-enhance.js` = `fbb56af1213723b68deb9dc6ffc9e4c9de7fd80d` — zhodné s lockom.
- `komarena-job-radar-jr-master.webp` = `ded775849800577277c4581ee5c30db6e43bba54` — zhodné s lockom.
- MASTER DESIGN LOCK zachovaný presne; žiadny locked visual file nebol modifikovaný.

---

## 2026-09-14 — verified IKEA customer-service promotion + evidence freshness hardening

### 1. Reálny source audit + 1 nová high-confidence LIVE ponuka
- Reálne prehľadané aktuálne zdroje pre Bratislavu/BA okolie a vhodné remote roly: Profesia/Práca za rohom, priame firemné kariéry/ATS, IKEA Careers, Worki, Kariera/Zoznam, verejný LinkedIn index a lokálne verejné mirrors ako sekundárny dôkaz.
- Nová promotion-grade ponuka: `Pracovník*čka na oddelení Služby zákazníkom` — IKEA Bratislava, od 1 400 € brutto vrátane príplatkov za dva víkendy. Oficiálna kariéra stále umožňuje prihlásenie; náplň zahŕňa služby zákazníkom, vrátenie/výmenu tovaru, reklamácie, pokladňu a výdaj objednávok. V aktuálnom detaile nie je cudzojazyčný hard gate.
- PSS `Spracovateľ/Spracovateľka služieb pre klientov – Call centrum` bol reálne znovu otvorený na oficiálnej kariére a potvrdený aktívny; stále uvádza 1 500–1 700 €, flexibilný čas a možnosť práce doma.
- SUPTel `Administratívny pracovník/pracovníčka dispečingu` bol reálne znovu otvorený v plnom detaile Práca za rohom a potvrdený aktívny; plný/skrátený úväzok a 13. plat zostávajú uvedené.
- Brightpick `Remote technik/technička robotizovaného skladu` nebol promovaný: Kariera explicitne uvádza, že ponuka je neaktívna, hoci iné mirrors ju resurfacingom označujú ako čerstvú. Canonical negatívny status vyhráva fail-closed.
- ÚNMS sieťový špecialista nebol promovaný pre stredne pokročilú angličtinu a širší admin/server/security scope; IKEA Picker nebol promovaný pre manuálnu manipuláciu s tovarom, paletový vozík a nakládku.

### 2. Stable source-job ID dedupe rozšírené o IKEA a Nalgoo
- `job-radar-feed-merge-v1.js` teraz rozpoznáva stabilný source key aj pre `jobs.ikea.com/.../24107/<id>` a `*.nalgoo-jobs.com/jobs/<id>`.
- Lokalizované IKEA URL alebo alternatívne Nalgoo/company cesty už nemajú vytvárať duplicitné LIVE karty iba preto, že URL je jazykovo alebo doménovo odlišná.
- Health dedupe diagnostika teraz navyše vystavuje počet `stableSourceKeys`, takže pokrytie stabilným identifikátorom je merateľné.

### 3. Future-publication quarantine
- Promotion engine po novom fail-closed karantenizuje záznam, ktorého `publishedAt` je viac než 10 minút v budúcnosti (`future-publication`).
- Chybný import alebo posunutý timestamp tak nemôže ovplyvniť freshness/ranking len preto, že dátum publikovania vyzerá novší než realita.

### 4. Verification ↔ link-evidence drift gate
- Pre `promotionEligible=true` musí reálne linkové overenie časovo korešpondovať s `verifiedAt`.
- Ak je `verifiedAt` posunuté o viac než 60 minút za posledný `linkCheckedAt`, záznam sa karantenizuje ako `evidence-drift`.
- Toto priamo bráni tomu, aby sa stará ponuka tvárila ako čerstvá iba zmenou verification timestampu bez opätovného otvorenia linku.

### 5. Evidence-surface observability
- `JobRadarFeedHealth` teraz obsahuje `evidenceSurfaces`, takže je viditeľné, koľko eligible ponúk pochádza z canonical company detailu, plného job-board detailu alebo záznamu bez explicitne označeného evidence surface.
- Nové 14.9. delta záznamy explicitne používajú `canonical-company-detail` alebo `full-jobboard-detail`.
- Content age (`updatedAt`), job verification age (`verifiedAt`) a source audit age (`sourceVerificationAt`) ostávajú samostatné.

### Kontroly / regresia
- `job-radar-feed-merge-v1.js` bol po zápise znovu načítaný z GitHubu; blob SHA `480510819256c9bb21e67f2aca04b8cceecc4a75`.
- Cielený Node test prešiel: IKEA source key → `ikea:98043883120`, Nalgoo source key → `nalgoo:91926`, future `publishedAt` → `future-publication`, posunutý `verifiedAt` bez nového link checku → `evidence-drift`, validný čerstvý záznam zostáva eligible.
- `node --check` pre cielenú implementáciu nových helperov/gates prešiel bez syntax chyby.
- `jobs-fresh-delta-20260914.json` bol pridaný a `jobs-delta-index.json` ho explicitne registruje; nový timestamp vznikol z reálnej kontroly zdrojov, nie iba dotknutím súboru.
- CRM/localStorage kľúče, poznámky, hviezdičky a workflow statusy neboli zmenené. Zmena `v9` → `v10` sa týka iba internej feed-cache vrstvy.
- Fallback live → validovaná cache → baseline zostal zachovaný.

### MASTER DESIGN LOCK — finálne overenie
- MASTER design bol zachovaný podľa `JOB-RADAR-DESIGN-LOCK.json`.
