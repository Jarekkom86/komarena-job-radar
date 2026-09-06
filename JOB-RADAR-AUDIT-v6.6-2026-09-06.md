# KomArena Job Radar — audit + v6.6 improvement patch

Dátum: 2026-09-06
Rozsah: UI/UX, reakcie, cielený obsah CV, workflow, filtre, mobil, accessibility, branding.

## Zistené chyby

1. **Generátor reakcií bol príliš generický.** Každú širšie „technickú“ pozíciu vedel otočiť na Smart Home/IoT/Home Assistant, aj keď jadrom ponuky bol sklad, rozvoz alebo nákup.
2. **CV bolo generované ako univerzálny textový profil.** Pevne pretláčalo WordPress, IoT a retail bez toho, aby sa najprv zoradili požiadavky konkrétnej ponuky.
3. **Chýbala HR kontrola dôkazov.** Používateľ nevidel, ktoré tvrdenie je priamo podložené, ktoré iba čiastočne a čo treba pred odoslaním overiť.
4. **Workflow bol príliš hrubý.** Medzi „Mám záujem“ a „Reagované“ chýbal stav „Reakcia pripravená“ a chýbal samostatný stav odpovede firmy.
5. **Dnešný fokus nerešpektoval source filter.** Karta skrytá filtrom zdroja mohla zostať v TOP 3 fokus paneli.
6. **PDF/print bol iba `<pre>` text.** Výstup nepôsobil ako profesionálny pracovný dokument a HTML download mal zbytočne vysokú prioritu.
7. **Branding nepoužíval schválený JR symbol.** Hlavička bola iba text `KomArena.sk`.
8. **Accessibility a mobilný modal boli nedotiahnuté.** Chýbal jasný `focus-visible`, ESC close, backdrop close, `role=dialog`/`aria-modal` a body scroll lock.

## Aplikované zlepšenia

### 1. MASTER logo a brand lockup
- Použitý schválený **JR ribbon monogram s radarom v R** z KomArena Brand Family MASTER.
- Hlavička používa hierarchiu `KomArena` → `JOB RADAR` → `PRÍLEŽITOSTI V REÁLNOM ČASE`.
- UI označené ako MASTER v6.6.

### 2. Evidence-first relevance engine
- Ponuka sa najprv rozloží na požiadavky: sklad, objednávky, rozvoz, nákup, technika, zákazník, operations, administratíva, leadership, web/e-commerce, IoT.
- Následne sa priradia iba overené dôkazy z MASTER profilu.
- IoT sa pri bežnej technickej pozícii už automaticky netlačí do popredia; používa sa primárne pri explicitnom Smart Home/IoT scope.

### 3. HR QA panel
- Modal zobrazuje `HR pripravenosť /100`.
- Zobrazuje mapovanie `požiadavka → dôkaz`.
- Zobrazuje varovania pre hard-gap signály (napr. VZV, elektro vyhláška, C/C+E, B2/C1, špecializovaná HVAC kvalifikácia).
- Čiastočná zhoda sa explicitne označí a generátor nesmie z nej spraviť nepravdivú špecializáciu.

### 4. Lepší workflow
- Pridaný stav **Reakcia pripravená**.
- Pridaný stav **Odpoveď od firmy**.
- Pôvodné `Reagované` sa v UI zobrazuje presnejšie ako **Odoslaná** kvôli spätnej kompatibilite s CRM dátami.
- V modale je rýchle tlačidlo na označenie reakcie ako pripravenej.

### 5. Profesionálnejší CV print/PDF
- Primárne CTA je **Tlač / uložiť PDF**.
- HTML export je sekundárny technický výstup.
- Print používa A4 layout, sekcie Profil / Kľúčové zručnosti / Relevantná prax / Ďalšie.
- Verejný repozitár nedostáva nové súkromné kontaktné údaje ani fotografiu; finálny export má používať schválenú hlavičku MASTER CV.

### 6. Oprava source-filter vs. Dnešný fokus
- TOP 3 teraz vyberá iba z kariet, ktoré sú po zdrojovom filtri reálne viditeľné.
- Zmena source filtra okamžite prepočíta fokus.

### 7. „Prečo toto skóre“ priamo na karte
- Každá karta dostane krátke vysvetlenie HR zhody z najsilnejších podložených dôkazov.
- Ak sa v texte objaví hard-gap signál, karta ukáže upozornenie na overenie.

### 8. Accessibility + mobile modal
- `focus-visible` pre klávesnicu.
- `role="dialog"`, `aria-modal`, `aria-label` na workflow/poznámke.
- ESC a klik na backdrop zatvoria modal.
- Pri otvorenom modale sa zamkne scroll stránky.
- Mobilný modal má menší padding, sticky header a lepšiu výšku textových polí.

## Regresný príklad — HEATING PRO

Pre titul `Technický pracovník/pracovníčka – sklad, rozvoz, nákup` engine prioritizuje:
1. sklad / zásoby / inventúry,
2. rozvoz / vodič B,
3. nákup — iba ako čiastočnú zhodu cez objednávky a zásobovú operatívu,
4. technickú diagnostiku,
5. zákaznícku komunikáciu, ak je v texte ponuky.

Smart Home/IoT sa už nepoužije ako hlavný argument len preto, že názov obsahuje slovo „technický“.

## QA
- JavaScript syntax: `node --check` PASS.
- Evidence-engine regresia pre HEATING PRO: PASS; sklad/rozvoz/nákup/technika sú pred IoT.
- Backward compatibility: zachovaný `CRM_KEY=pracaPreJaraCRM-v3` a pôvodná hodnota stavu `reagovane`.
- Patch nezasahuje do live feedu, baseline ani source-audit dát.
