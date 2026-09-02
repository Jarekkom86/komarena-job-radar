# KomArena.sk Job Radar / Práca pre Jara — MASTER

Aktualizované: 2. 9. 2026 11:23 CEST

## Architektúra a ochrana UI
- Aktuálny používateľský MASTER: `komarena-job-radar-v6.4.html`.
- Autoritatívny živý feed: `jobs-data.json` (`schemaVersion: 1`).
- Bootstrap diverzity: `jobs-data-nonprof.json` — **zamknutý**, automat ho nemení.
- Register zdrojov: `job-sources.json`.
- Pravdivý audit prístupu: `source-audit.json`.
- Stabilný BA fallback: `baseline-jobs.json` — **zamknutý**.
- UI/renderery/index/baseline sú zamknuté; automat mení iba povolené dátové súbory a tento MASTER.
- CRM localStorage: `pracaPreJaraCRM-v3`; používateľské editácie: `pracaPreJaraEdits-v1`.

## Ranking profil
1. WordPress/WooCommerce, web/e-shop/CMS/content/product admin, Shoptet/Shopify/Upgates, maintenance webov/e-shopov.
2. Technický support, Smart Home/IoT/Home Assistant, AI integrácie bez hard developmentu, troubleshooting/reklamácie/IT support.
3. Administratíva/back-office/customer care/operations.
4. Vodič B/kuriér bez tachografu.
5. Sklad/logistika.

### Tvrdý lokalitný gate
- Aktívny feed povoľuje iba **Bratislavu + rozumné okolie/denný dojazd**, alebo **skutočný remote/home-office vykonateľný zo Slovenska bez pravidelného dochádzania do vzdialeného mesta**.
- Mimo BA onsite alebo pravidelný hybrid do vzdialeného mesta = `reject-distance`.
- Nejasná lokalita/remote politika = `locationEligibility: unknown`; najprv overiť, nie odporúčať.
- Nové položky evidujú `locationEligibility` a `locationReason`.

### Negatívne filtre
- AJ A2 preferovaná; B1 mierny/stredný mínus; B2/C1 výrazný mínus.
- Povinný ďalší cudzí jazyk, hard PHP/fullstack/Laravel/React/Vue, pokročilé Linux/Docker/API alebo povinná špecializovaná kvalifikácia bez dôkazu praxe = silná penalizácia alebo hard gate.
- Lokalita BA/okolie alebo overený remote/HO je hard gate, nie bonus.
- Agregátor/repost nesmie prebiť priamy firemný zdroj.

## Aktuálny stav LIVE
- Autoritatívny feed má aktuálne **45 LIVE položiek**.
- Posledný sourcing audit: **11 source families**, z toho **10 mimo Profesia**.
- LIVE mix: **Profesia 22/45 = 48,9 %**, mimo Profesia **23/45 = 51,1 %**.
- Facebook verejná indexácia: `limited`, **0 verified hits**; žiadne fiktívne pokrytie.
- Pending/verification queue: **30 kandidátov**.
- Posledný beh nepridal nový LIVE job.
- LinkedIn verejne potvrdil dve Wolt Support Associate roly v Bratislave: Full Time 1 340–1 410 €/mes. a Part Time 7,70 €/h. Obe však explicitne vyžadujú minimálne B2 angličtinu, preto boli vyradené z LIVE podľa jazykového ranking pravidla.
- Upwork priniesol čerstvé worldwide remote VA/e-commerce výsledky, ale nové hity boli buď nízkej hodnoty, scope-nejasné alebo jazykovo slabšie; Sales Assistant 1 800 USD a Website & SEO Management 15–30 USD/h zostávajú vo verification.
- SAV Asistent/ka riaditeľa zostáva `promotion-ready`: Bratislava, 1 800 €, 08:00–16:00, AJ A1–A2, deadline 15.10.2026; požaduje aspoň 5 rokov praxe.

## Denné zlepšenia — 2. 9. 2026

### 1. Remote Timezone Compatibility Gate — IMPLEMENTOVANÉ
Súbor: `job-radar-remote-timezone-policy-v1.json`.

Problém: označenie `Worldwide remote` alebo `remote-ok` ešte neznamená, že je ponuka prakticky vykonateľná zo Slovenska. Najmä freelance/US remote ponuky môžu vyžadovať pravidelnú nočnú zmenu alebo pevný americký pracovný čas.

Riešenie:
- flexibilný/asynchrónny remote alebo rozumný prekryv s 07:00–19:00 Europe/Bratislava = `compatible`;
- pravidelná neskorá práca po 22:00 s čiastočným prekryvom = `review`;
- prevažne nočná zmena 22:00–06:00 alebo povinný US shift bez alternatívy = `reject-schedule`;
- nejasná povinná timezone dostupnosť = `unknown`, overiť pred `APPLY-FIRST`.

Bezpečnosť: politika nemení `locationEligibility`, CRM, stabilné ID ani zamknuté UI; iba pridáva druhý praktický gate pre remote ponuky.

Prínos: menej času na nominálne remote ponuky, ktoré by v realite znamenali pravidelné nočné zmeny alebo nevhodný režim zo Slovenska.

### 2. Application Link Health + Canonical Apply Gate — IMPLEMENTOVANÉ
Súbor: `job-radar-application-link-health-policy-v1.json`.

Problém: aktívne vyzerajúci mirror/agregátor alebo starý detail môže viesť na zatvorenú pozíciu, generickú career stránku alebo nefunkčný apply flow. To znižuje reálnu úspešnosť a plytvá časom pri reakcii.

Riešenie:
- aktívny canonical detail + overená cesta na reakciu = `apply-ready`;
- aktívny detail bez overeného apply/contact = `verify-application-path`;
- iba mirror bez canonical potvrdenia = `verify-canonical`, nesmie byť `APPLY-FIRST` iba na základe mirroru;
- canonical stav closed/expired/no longer accepting/404/410 = `reject-inactive`;
- redirect na inú rolu alebo generickú career homepage = `quarantine`;
- transient network chyba nikdy automaticky nemaže existujúcu LIVE položku.

Bezpečnosť: zachované stabilné ID, canonical dedupe, CRM, fail-closed správanie a BA/remote hard gate.

Prínos: TOP kandidáti budú mať vyššiu pravdepodobnosť, že sa na nich dá okamžite a reálne reagovať, namiesto strácania času na mŕtvych alebo presmerovaných odkazoch.

## Rozvojový backlog
- Source-family zero-result anomaly detector.
- Verification-to-LIVE transaction ledger.
- Freelance client-risk gate.
- Physical-load & shift suitability extractor.
- Verification evidence snapshot hash.
- Fixed-price effort normalization.
- Freshness-weighted verification budget.
- Hard-vs-soft requirement extractor.
- Canonical-vs-aggregator location contradiction detector.
- Verification queue SLA + auto-expiry.
- Applied-state suppression gate.
- Material-change notification fingerprint.
- Short-window opportunity urgency gate.
- Application-friction score.
- Public-index stale-result quarantine.
- Role-scope complexity budget.
- Source-query evidence manifest.
- Verification value-decay score.
- **Language-hard-gate evidence cache** — pri explicitne overenej B2/C1 požiadavke ukladať canonical evidence fingerprint a krátku TTL cache, aby sa rovnaký jazykovo nevhodný repost nehodnotil opakovane v každom hodinovom behu.
- **Mirror-family independence checker** — porovnať title+company, textový fingerprint a canonical cieľ; mirror/repost sa nesmie počítať ako nezávislý source-family hit ani zvyšovať diversity metriku.
- Autentizovaný Facebook ingestion cez Nexus/local agent.
- Source-success analytics, publishedAt/<24h priority, commute/distance, deadline alerts, company contact enrichment, duplicate cluster report, reply probability, GitHub Actions polling a cross-device sync.

## Stav ochrany / zápisu
- `jobs-data.json`: obsahovo nezmenený; feed zostal fail-closed na 45 LIVE položkách.
- `job-sources.json`: aktualizovaný audit timestamp a poznámky pre skutočne kontrolované zdroje.
- `source-audit.json`: aktualizovaný po reálnom audite 11 source families; Wolt B2 roly sú evidované ako language reject a Facebook zostáva 0 verified hits.
- `PRACA_PRE_JARA_MASTER.md`: aktualizovaný o aktuálny LIVE stav a dve nové backlog zlepšenia.
- `jobs-data-nonprof.json`, `baseline-jobs.json`, MASTER UI/renderery/index, CRM: **nedotknuté / zamknuté**.