# 0002. kits-ui som designsystem

- Datum: 2026-11-12
- Status: Beslutat

## Bakgrund

kits.se byggdes med `@kokitotsos/react-components`, ett komponentbibliotek för den gamla grafiska
profilen. KITS grafiska profil 2026 (Brand Guidelines och Johannas skisser) har nya färger,
typografi och komponenter. kits-ui är KITS designsystem för den nya profilen, med tokens som
CSS-variabler, ett ljust och ett mörkt tema och komponenter i React.

## Beslut

Vi använder `@kokitotsos/kits-ui` från npm som designsystem för kits.se. Versionen är låst exakt i
`package.json`. `@kokitotsos/react-components` är borttaget från sajten. Stilen laddas globalt med
`@kokitotsos/kits-ui/styles.css` i `src/layouts/DefaultLayout.tsx`, och färger, avstånd och
typografi tas från designsystemets CSS-variabler i stället för hårdkodade värden.

Källkoden finns i `kits-ab/kits-ui`.

## Konsekvenser

- Ändringar i designsystemet görs i kits-ui, publiceras som ny version och uppgraderas här.
- Favikon och manifestikon kommer från kits-ui.
- Det gamla biblioteket kan avvecklas och dess repo arkiveras.
