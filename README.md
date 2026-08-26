# KomArena Job Radar

Osobný dashboard na prehľad pracovných ponúk, rýchle hodnotenie zhody a prípravu
reakcie na inzerát. Projekt ukazuje návrh používateľského rozhrania, prácu so
stavom v prehliadači a praktickú automatizáciu job-search workflow.

> Portfóliový prototyp, nie komerčná pracovná služba.

## Čo projekt rieši

- zobrazuje pracovné ponuky a brigády v jednotných kartách,
- sleduje stav ponuky, hviezdičku, poznámku a počet otvorení,
- uchováva používateľské úpravy lokálne v prehliadači,
- hodnotí ponuky podľa praktických kritérií zhody,
- pripravuje koncept personalizovanej reakcie a CV bez vymýšľania kvalifikácií,
- zachováva odkaz na pôvodný pracovný inzerát.

## Technológie

- HTML5 a responzívne CSS,
- vanilla JavaScript bez build procesu,
- `localStorage` pre lokálny CRM stav,
- single-file prototyp vhodný na rýchle lokálne spustenie.

## Rýchle spustenie

1. Stiahni alebo naklonuj repozitár.
2. Otvor `komarena-job-radar-v4.html` v modernom prehliadači.
3. Dáta a poznámky sa ukladajú iba do `localStorage` daného prehliadača.

## Štruktúra repozitára

| Súbor | Účel |
| --- | --- |
| `komarena-job-radar-v4.html` | Hlavný interaktívny dashboard |
| `brigady-ba-2026-08-26.html` | Menší prehľad brigád |
| `PRACA_PRE_JARA_MASTER.md` | Kritériá hodnotenia a funkčný popis |
| `Praca-pre-Jara/` | Priebežné aktualizácie projektu |

## Bezpečnosť a súkromie

Projekt neobsahuje prihlasovanie ani serverovú databázu. Stav používateľa zostáva
v lokálnom prehliadači. Verejné odkazy na ponuky môžu časom expirovať a ukážkové
dáta sa neaktualizujú automaticky.

## Stav

Funkčný prototyp určený na prezentáciu UX, dátového modelu a praktického
workflow. Ďalším krokom môže byť oddelenie dát od UI, testy a nasadenie statickej
demo verzie.
