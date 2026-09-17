# KomArena Job Radar — CHANGELOG

## 2026-09-17 08:54 — follow-up audit + evidence scoring / negative-cache hardening

- Reálny follow-up sweep preveril aktuálne Bratislava/BA okolie pre IT support, administratívu, zákaznícku podporu a reklamačno-servisné roly. Žiadna nová promotion-grade ponuka neprešla všetkými gate-mi; LIVE feed preto nebol umelo doplnený ani timestampovo omladený.
- DHL Group `IT Support (Male/Female)` zostáva aktuálne verejne dostupný na Profesia (Bratislava Airport, 2 000–2 200 €), ale full detail má explicitnú angličtinu B2, preto ostáva vyradený.
- `source-audit.json` schema v13 zaznamenáva nový source-verification čas samostatne od content/job verification age.
- `job-radar-feed-quality-v1.js` dostal 4 funkčné zlepšenia: (1) deterministický `listingFingerprint()` odstraňujúci bežné tracking parametre, (2) `negativeCacheRecord()` pre krátkodobé potlačenie explicitne zatvorených/neaktívnych listingov, (3) číselný `evidenceScore()` 0–100 s penalizáciou stale/weak/negative evidence, (4) nový coherence gate `publication-after-verification`, ktorý odhalí časovo nemožnú evidenciu. `auditJobs()` teraz sumarizuje priemerné/minimálne evidence score a pripravuje negative-cache záznamy.

### Kontroly / regresia
- Žiadny CRM/localStorage kľúč ani používateľský workflow nebol zmenený.
- Žiadny locked vizuálny súbor nebol zapisovaný.
- Finálne SHA presne sedia s DESIGN LOCK: HTML `18fd009f1f9f041a207b067c5dcc0661f1647199`, CSS `5157753d3525a99191e78374f7a074315bf7809a`, enhance JS `fbb56af1213723b68deb9dc6ffc9e4c9de7fd80d`, MASTER WebP `ded775849800577277c4581ee5c30db6e43bba54`.
- MASTER DESIGN LOCK zachovaný presne.

---

## 2026-09-16 08:42 — follow-up audit + evidence reliability hardening

- Reálny sweep: Profesia Senec/admin/customer-support a Kariera Bratislava IT/support. GEBRÜDER WEISS customer service (Senec, 1 200 €, objednávky/reklamácie/vratky) a Konecta remote back office (1 300–1 400 €) ostávajú discovery-only, pretože neboli kompletne potvrdené všetky hard gates z promotion-grade detailu.
- Metrohm IT Support (1 800 €) bol otvorený v plnom detaile a vyradený pre B1/B2 angličtinu + prax. Grafton Analytik zákazníckych sťažností (2 000 €) bol otvorený v plnom detaile a vyradený pre B1, technické VŠ I. stupňa a podobnú prax. Žiadny `verifiedAt` nebol posunutý iba kvôli resurfacingu.
- `job-radar-feed-quality-v1.js` dostal 5 bezpečných zlepšení: 48h stale-link-check gate; future-link-check gate; centralizovanú B2/C1/C2/fluent/advanced-English hard-gate diagnostiku; dávkový `auditJobs()` pass/fail agregátor; a robustnejší výber najnovšieho platného timestampu pre age diagnostiku.
- `source-audit.json` schema v12 zaznamenáva follow-up source-verification čas oddelene od content/job verification age.

### Kontroly / regresia
- CRM/localStorage ani runtime workflow neboli zmenené; locked vizuálne súbory neboli zapisované.
- Finálne SHA: HTML `18fd009f1f9f041a207b067c5dcc0661f1647199`, CSS `5157753d3525a99191e78374f7a074315bf7809a`, enhance JS `fbb56af1213723b68deb9dc6ffc9e4c9de7fd80d`, MASTER WebP `ded775849800577277c4581ee5c30db6e43bba54`; presná zhoda s DESIGN LOCK.
- MASTER DESIGN LOCK zachovaný presne.

---

## 2026-09-15 09:11 — follow-up source audit + promotion evidence hardening

- Reálny follow-up sweep preveril PSS canonical detail, Profesia, Práca za rohom, DHL full detail, LinkedIn public indexing a remote/web discovery. PSS Call centrum bolo znovu otvorené a potvrdené aktívne; 1 500–1 700 €, Bratislava, flexibilný čas a možnosť práce doma.
- Nové discovery kandidáty Simplaq, BKIS technická podpora podujatí, Tatra Leasing Middle Office a DHL 4h transport admin ostávajú `verification-needed`, pretože list/search resurfacing nie je full-detail verification evidence. DHL IT Support bol naopak plne overený a zámerne vyradený pre explicitnú angličtinu B2.
- `job-radar-feed-quality-v1.js` dostal 4 funkčné zlepšenia: (1) validáciu bezpečnej http/https URL, (2) kontrolu silného evidence surface, (3) diagnostiku jazykového a fyzického hard gate, (4) spoločný prehľad troch nezávislých vekov — content, job verification a source verification.
- `jobs-fresh-delta-20260915.json` schema v2 striktne oddeľuje reálne reverified `jobs` od `discoveryOnly`; discovery položky nedostávajú `verifiedAt`.
- `source-audit.json` schema v10 zaznamenáva 6 kontrolovaných rodín, 7 kandidátov, 1 re-verifikovanú existujúcu ponuku a 0 umelo promovaných nových ponúk.

### Kontroly / regresia
- CRM/localStorage kľúče ani runtime workflow neboli zmenené.
- Locked vizuálne súbory neboli zapisované.
- Finálne Git blob SHA: HTML `18fd009f1f9f041a207b067c5dcc0661f1647199`, CSS `5157753d3525a99191e78374f7a074315bf7809a`, enhance JS `fbb56af1213723b68deb9dc6ffc9e4c9de7fd80d`, MASTER WebP `ded775849800577277c4581ee5c30db6e43bba54`; všetky presne zhodné s `JOB-RADAR-DESIGN-LOCK.json`.
- MASTER DESIGN LOCK zachovaný presne.

---

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
- Helper nemení DOM, CSS ani CRM/localStorage kľúče.

### 3. Denná delta vrstva je striktne evidence-only
- Pridaný `jobs-fresh-delta-20260915.json`.
- Obsahuje iba ponuky v tomto rune skutočne znovu otvorené a potvrdené.
- Discovery-only kandidáti sú uložené oddelene a runtime ich nemôže omylom načítať ako LIVE `jobs`.

### 4. Deterministická registrácia dnešnej vrstvy
- `jobs-delta-index.json` explicitne registruje `jobs-fresh-delta-20260915.json`.
- Bounded same-repository manifest/fallback politika zostáva zachovaná.

### 5. Source audit explicitne odlišuje tri veky
- Content change age, job verification evidence a source-verification age sú samostatné koncepty.
- Secondary indexing sa používa iba ako discovery/corroboration a nesmie sám posunúť `verifiedAt`.

### MASTER DESIGN LOCK
- MASTER DESIGN LOCK zachovaný presne; žiadny locked visual file nebol modifikovaný.
