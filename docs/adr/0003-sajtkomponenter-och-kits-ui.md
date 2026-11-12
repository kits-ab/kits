# 0003. Sajtspecifika komponenter i src/components/web/

- Datum: 2026-11-12
- Status: Beslutat

## Bakgrund

Sajten behöver komponenter som bara är meningsfulla här, till exempel KitsCon-schemat, kontaktkort
och sidhuvud. Andra delar, som knappar, typografi, taggar och ikoner, är gemensamma för allt som
KITS bygger i den nya profilen.

## Beslut

Komponenter som är specifika för kits.se ligger i `src/components/web/` och byggs med kits-ui:s
komponenter och CSS-variabler samt styled-components. Det som är generiskt, och som andra KITS-ytor
också skulle behöva, läggs i kits-ui i stället.

## Konsekvenser

- En komponent som visar sig vara generisk flyttas till kits-ui och tas bort här.
- Ändringar i kits-ui kräver en ny version och en uppgradering, så små sajtbehov löses först här.
