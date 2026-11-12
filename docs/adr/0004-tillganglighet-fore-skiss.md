# 0004. Tillgänglighet går före skissen

- Datum: 2026-11-12
- Status: Beslutat

## Bakgrund

Skisserna för profil 2026 innehåller kombinationer som inte klarar kontrastkraven. Lila text på
kortens bakgrund med 20 % färgton når till exempel inte 4,5:1, och en lila tagg på en mörk yta
underkänns.

## Beslut

kits.se ska uppfylla WCAG 2.2 AA för text, fokus och interaktion. När skissen och kraven krockar
följer vi kraven och ligger så nära skissen som möjligt. Exempel:

- Kort har 12 % färgton i stället för 20 %.
- Taggar på ytor är neutrala i stället för lila.

## Konsekvenser

- Sajten kan avvika något från skisserna. Avvikelserna kommenteras i koden där de görs.
- Nya sidor och komponenter kontrolleras med Lighthouse eller axe, i mörka och ljusa band.
