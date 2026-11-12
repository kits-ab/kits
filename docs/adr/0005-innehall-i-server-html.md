# 0005. Allt innehåll i den server-renderade HTML:en

- Datum: 2026-11-12
- Status: Beslutat

## Bakgrund

Gatsby renderar sidorna till HTML vid bygget. Innehåll som bara renderas i webbläsaren syns inte
för sökmotorer, länkförhandsvisningar eller besökare utan JavaScript. Vid jämförelsen med den
gamla sajten saknades OT-säkerhetens detaljer på Tjänster i HTML:en, eftersom bara den valda
fliken renderades. React 18 lade också in osynliga NUL-tecken i HTML:en på två KitsCon-sidor.

## Beslut

Allt innehåll ska finnas i den byggda HTML:en. Interaktiva komponenter renderar allt innehåll och
döljer det som inte visas, till exempel med `hidden`, i stället för att utelämna det. Efter bygget
tar `onPostBuild` i `gatsby-node.js` bort NUL-tecken ur HTML-filerna.

## Konsekvenser

- Flikar, utfällbara delar och liknande måste rendera alla paneler.
- Kontrollera nytt innehåll i `public/<sökväg>/index.html` efter `npm run build`.
- Innehåll som hämtas i webbläsaren efter laddning undviks.
