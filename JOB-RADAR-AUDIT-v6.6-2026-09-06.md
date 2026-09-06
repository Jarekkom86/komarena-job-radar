# KomArena Job Radar — audit + v6.6

Dátum: 2026-09-06
Rozsah: UI/UX, reakcie, cielený obsah CV, workflow, filtre, mobil, accessibility, branding a HR QA.

## Zistené chyby

1. **Generátor reakcií bol príliš generický.** Širšie „technické“ ponuky vedel automaticky otočiť na Smart Home/IoT/Home Assistant, aj keď jadrom ponuky bol sklad, rozvoz alebo nákup.
2. **CV bolo generované ako univerzálny textový profil.** Pevne pretláčalo WordPress, IoT a retail bez toho, aby sa najprv zoradili požiadavky konkrétnej ponuky.
3. **Chýbala HR kontrola dôkazov.** Používateľ nevidel, ktoré tvrdenie je priamo podložené, ktoré iba čiastočne a čo treba pred odoslaním overiť.
4. **Workflow bol príliš hrubý.** Medzi „Mám záujem“ a odoslanou reakciou chýbal stav „Reakcia pripravená“ a chýbal samostatný stav odpovede firmy.
5. **Nové workflow stavy neboli zahrnuté do pohľadu `Riešim`.** Pôvodný legacy filter poznal iba staré CRM stavy.
6. **Dnešný fokus nerešpektoval source filter.** Karta skrytá filtrom zdroja mohla zostať v TOP 3 fokus paneli.
7. **PDF/print bol iba `<pre>` text.** Výstup nepôsobil ako profesionálny pracovný dokument a HTML download mal zbytočne vysokú prioritu.
8. **Branding nepoužíval schválený JR symbol.** Hlavička bola iba text `KomArena.sk`.
9. **Accessibility a mobilný modal boli nedotiahnuté.** Chýbal jasný `focus-visible`, ESC close, backdrop close, `role=dialog`/`aria-modal` a body scroll lock.
10. **HR skóre vedelo zostať príliš vysoké aj pri hard-gap požiadavke.** Napríklad pozícia s povinnou angličtinou B2 mohla dostať vysoké skóre len preto, že sedela technická náplň.
11. **Cielený titul CV nebol vždy správne prioritizovaný.** WordPress administrátor mohol skončiť pod všeobecným titulom „Administratíva“ a čistá vodičská rola pod „Technická prevádzka / sklad“.

## Aplikované zlepšenia

### 1. MASTER logo a brand lockup
- Použitý schválený **JR ribbon monogram s radarom v R** z KomArena Brand Family MASTER.
- Hlavička používa hierarchiu `KomArena` → `JOB RADAR` → `PRÍLEŽITOSTI V REÁLNOM ČASE`.
- UI je označené ako MASTER v6.6.

### 2. Evidence-first relevance engine
- Ponuka sa najprv rozloží na požiadavky: sklad, objednávky, rozvoz, nákup, technika, zákazník, operations, administratíva, leadership, web/e-commerce a IoT.
- Následne sa priradia iba pravdivé, podložené dôkazy z používateľovho pracovného profilu/CV.
- IoT sa pri bežnej technickej pozícii už automaticky netlačí do popredia; používa sa primárne pri explicitnom Smart Home/IoT scope.
- Nákup je pri absencii priamej nákupnej praxe označený iba ako čiastočná zhoda cez objednávky a zásobovú operatívu.

### 3. HR QA panel
- Modal zobrazuje `HR pripravenosť /100`.
- Zobrazuje mapovanie `požiadavka → dôkaz`.
- Zobrazuje varovania pre hard-gap signály, napr. VZV, elektro vyhláška, C/C+E, B2/C1 alebo špecializovaná HVAC kvalifikácia.
- Ak existuje hard-gap, HR pripravenosť je konzervatívne zastropovaná na **68/100**, aby vysoká obsahová zhoda nezakryla zásadnú podmienku.
- Čiastočná zhoda sa explicitne označí a generátor z nej nesmie spraviť nepravdivú špecializáciu.

### 4. Lepší workflow
- Pridaný stav **Reakcia pripravená**.
- Pridaný stav **Odpoveď od firmy**.
- Pôvodné `Reagované` sa v UI zobrazuje presnejšie ako **Odoslaná** kvôli spätnej kompatibilite s CRM dátami.
- V modale je rýchle tlačidlo na označenie reakcie ako pripravenej.
- Pohľad **Riešim** zahŕňa: Mám záujem → Reakcia pripravená → Odoslaná → Odpoveď od firmy → Pohovor → Prijaté.

### 5. Profesionálnejší CV print/PDF
- Primárne CTA je **Tlač / uložiť PDF**.
- HTML export je sekundárny technický výstup.
- Print používa A4 layout, sekcie Profil / Kľúčové zručnosti / Relevantná prax / Ďalšie.
- Cielený titul CV sa prispôsobuje dominantnému typu ponuky: web/e-commerce, technická podpora, administratíva, sklad/logistika alebo vodič B.
- Verejný repozitár nedostáva nové súkromné kontaktné údaje ani fotografiu; finálny export má používať schválenú hlavičku MASTER CV.

### 6. Oprava source-filter vs. Dnešný fokus
- TOP 3 vyberá iba z kariet, ktoré sú po zdrojovom filtri reálne viditeľné.
- Zmena source filtra okamžite prepočíta fokus.
- Zachovaný je mobilný dock, uloženie filtrov a tlačidlo na ich vyčistenie.

### 7. „Prečo toto skóre“ priamo na karte
- Každá karta dostane krátke vysvetlenie HR zhody z najsilnejších podložených dôkazov.
- Ak sa v texte objaví hard-gap signál, karta ukáže upozornenie na overenie.

### 8. Accessibility + mobile modal
- `focus-visible` pre klávesnicu.
- `role="dialog"`, `aria-modal`, `aria-label` na workflow/poznámke.
- ESC a klik na backdrop zatvoria modal.
- Pri otvorenom modale sa zamkne scroll stránky.
- Mobilný modal má menší padding, sticky header a lepšiu výšku textových polí.

## Regresné testy

### HEATING PRO — technický pracovník: sklad, rozvoz, nákup
Engine prioritizuje:
1. sklad / zásoby / inventúry,
2. rozvoz / vodič B,
3. nákup — iba ako čiastočnú zhodu,
4. technickú diagnostiku,
5. zákaznícku komunikáciu, ak je v texte ponuky.

Smart Home/IoT sa nepoužije ako hlavný argument len preto, že názov obsahuje slovo „technický“.

### WordPress / WooCommerce administrátor
- Cielený titul CV: **WORDPRESS | WOOCOMMERCE | E-COMMERCE OPERATIONS**.
- Web/e-commerce obsah má prednosť pred všeobecným administratívnym rámcom.

### L1 technická podpora s B2
- B2 sa zachytí ako hard-gap.
- HR pripravenosť je zastropovaná na **68/100** a používateľ dostane varovanie pred odoslaním.

### Vodič B / rozvoz
- Cielený titul CV: **VODIČ B | LOGISTIKA | OPERATÍVA**.
- Nezobrazuje sa ako generická technická alebo IoT rola.

## QA
- JavaScript syntax: `node --check` — **PASS**.
- Evidence-engine regresia HEATING PRO — **PASS**.
- WordPress CV routing — **PASS**.
- B2 hard-gap score cap — **PASS**.
- Vodičský CV routing — **PASS**.
- Backward compatibility: zachovaný `CRM_KEY=pracaPreJaraCRM-v3` a pôvodná hodnota stavu `reagovane`.
- Patch nemení autoritatívny live feed, baseline ani pravidlá source auditu; tie sa môžu aktualizovať samostatným Job Radar sweepom.
