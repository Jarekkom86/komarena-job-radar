# KomArena Job Radar — CHANGELOG

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
- Upozorní, ak sú LIVE dáta staršie než 2 hodiny alebo audit starší než 60 minút.
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
