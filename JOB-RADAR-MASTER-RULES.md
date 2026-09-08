# KomArena Job Radar — MASTER pravidlá

Platné od: 2026-09-08

## 1. MASTER DESIGN LOCK

Aktuálny schválený vizuálny vzhľad Job Radaru je MASTER a je nemenný pri bežných funkčných aktualizáciách.

Bez výslovného pokynu používateľa sa NESMIE meniť:
- farebný systém, typografia a vizuálna hierarchia,
- rozloženie hlavných sekcií, kariet, filtrov a modalov,
- rozmery, spacing, rádiusy, hlavné CTA a responzívny charakter,
- branding a identita KomArena Job Radar,
- existujúce CSS selektory alebo DOM štruktúra spôsobom, ktorý mení vzhľad.

Funkčné zmeny sa majú implementovať oddelene v JS/dátovej vrstve. Ak je nutná vizuálna zmena, musí dostať samostatné DESIGN rev číslo a výslovné schválenie.

## 2. Oddelené verzie

- DESIGN verzia: mení sa iba po schválení vzhľadu.
- APP/ENGINE verzia: môže rásť pri funkčných zlepšeniach bez zmeny dizajnu.
- DATA verzia/updatedAt: môže sa meniť pri každom job sweep-e bez zmeny aplikácie.

Nikdy sa nemá kopírovať celý HTML/CSS shell iba preto, že pribudla nová funkcia.

## 3. Stabilita pred novými funkciami

Každý update musí zachovať:
- načítanie live feedu,
- fallback posledných funkčných dát,
- funkčné filtre, CRM stav, poznámky a localStorage,
- spätnú kompatibilitu existujúcich stavov,
- funkčné externé odkazy,
- mobilnú použiteľnosť.

Ak nový feature rozbije základný tok, feature sa nepromuje do MASTER.

## 4. Denné pravidlo: minimálne 3 zlepšenia

Každý denný rozvojový cyklus má priniesť aspoň 3 konkrétne užitočné zlepšenia. Za zlepšenie sa počíta napríklad:
- oprava reálnej chyby alebo regresie,
- zvýšenie stability alebo fallbacku,
- lepší job matching / deduplikácia / scoring,
- kvalitnejšie zdroje alebo čerstvejšie dáta,
- lepšia kontrola neplatných ponúk a linkov,
- lepšia automatizácia workflowu, reakcií, CV alebo e-mailových odpovedí,
- výkon, accessibility alebo bezpečnostná oprava, pokiaľ nemení MASTER dizajn.

Nepočítajú sa kozmetické zmeny bez funkčného prínosu, premenovanie verzie ani zmena textu iba kvôli číslu verzie.

## 5. Povinný changelog

Každý update musí stručne zapísať:
- dátum,
- presne čo sa zmenilo,
- prečo,
- či bol MASTER dizajn zachovaný,
- aké regresné kontroly prešli.

## 6. Fail-safe pravidlo

Ak live feed zlyhá, radar sa nesmie tváriť ako prázdny bez vysvetlenia. Preferované poradie je:
1. live dáta,
2. posledná lokálna cache,
3. stabilný baseline,
4. až potom zobraziť jasnú diagnostiku chyby.

## 7. Repo canonical

Canonical repository je `Jarekkom86/komarena-job-radar`.
Starý názov `Jarekkom86/dochadzka-pro-sk` sa nesmie používať pre nové assety alebo dátové URL.

## 8. FRESH-FIRST poradie

Predvolené zobrazenie LIVE ponúk musí vždy dávať navrch najčerstvejšie reálne overené ponuky.

Poradie pri predvolenom sortovaní:
1. novší `verifiedAt`,
2. pri rovnakom overení vyšší KomArena Match,
3. staršie overené ponuky až pod nimi.

Ponuka sa nesmie dostať navrch iba preto, že má vysoké score, ak bola overená skôr než novšia vhodná ponuka. Explicitné používateľské sorty ako hviezdičky, naposledy pozerané alebo neprečítané majú zostať rešpektované.
