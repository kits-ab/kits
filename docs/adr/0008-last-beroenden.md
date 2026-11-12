# 0008. Låsta beroenden

- Datum: 2026-11-12
- Status: Beslutat

## Bakgrund

Sajten bygger på Gatsby 5 och React 18 tillsammans med många plugins, Decap CMS och
styled-components. Uppgraderingar har tidigare brutit bygget eller CMS:et, och flera paket kräver
samma version av React och graphql.

## Beslut

Beroenden har exakta versioner i `package.json`, med få undantag. `overrides` låser React,
React DOM, graphql, styled-components, Decap CMS och React-typerna, så att alla paket använder
samma versioner. `package-lock.json` committas.

Nya eller uppgraderade beroenden, och ändringar av versioner eller `overrides`, görs bara efter
ett beslut.

## Konsekvenser

- Uppgraderingar görs medvetet, en i taget, med bygge och kontroll av sajten och CMS:et.
- Säkerhetsuppdateringar kräver också ett beslut, men ska prioriteras.
