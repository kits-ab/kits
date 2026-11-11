# kits.se i ny grafisk profil 2026: design

Status: utkast för godkännande · Branch: `kits2026` · Skrivet 2026-11-11

## Syfte

kits.se ska byggas om till KITS nya grafiska profil (Johanna Grahn, 2026). Arbetet ska ge ett
underlag och en skill som agenter (Claude Code, Codex, Antigravity) följer när de bygger om sajten,
så att resultatet blir konsekvent oavsett vem eller vad som bygger.

Steget är en ren profilbyte ("reskin"): samma sidor, samma URL:er, samma texter och bilder, ny
visuell form. Strukturförändringarna i Alex plan (`kits-website-restructure-plan.md`) är ett senare,
separat projekt. Källor som rekommenderar ordningen "struktur före visuellt" gäller när båda görs
samtidigt; ett profilbyte som lämnar struktur och URL:er orörda kan göras först.

## Mål

- Hela sajten i ny profil: färger, typografi, avstånd och komponenter, i mörkt tema som skisserna.
- Ett designsystem: **kits-ui** är enda källan för tokens och baskomponenter.
- Tillgänglighet: WCAG 2.2 AA för text, fokus och interaktion, även i ljusa band.
- Webbkomponenter som senare kan flyttas till kits-ui eller till en react-components v5 utan
  omskrivning.
- En skill i `.agents/skills/kits-profil-2026/SKILL.md` som beskriver reglerna och arbetssättet.

## Icke-mål

- Ny struktur, nya sidor, borttagna sidor, ändrade URL:er eller redirects (Alex plan).
- Nya eller omskrivna texter. Det gäller även skissernas eyebrows (`--- KONTAKT` osv.), som
  utelämnas i detta steg. Komponenterna stöder eyebrows så att de kan fyllas i senare.
- Nya bilder, utom partikelbilden i startsidans hero.
- Ljust tema för sajten. Ljust läge saknar förlaga och kan läggas till senare (kits-ui har tokens).
- Nya CMS-fält, ändrade GraphQL-queries för innehåll eller ändrade länkmål.
- Byte av ramverk. Gatsby 5 kräver React 18 och det gäller hela projektet.
- Cyberakademin-sidan i skisserna (den har bara platshållartext; `_cyberakademi.tsx` förblir
  avstängd).

## Anti-mål (misslyckande även om det tekniskt fungerar)

- Besökare ser en blandning av gammal och ny profil.
- Egna färger, storlekar eller typsnitt i sajten vid sidan av kits-ui:s tokens.
- Text eller kontroller som underkänns på kontrast, i mörka eller ljusa band.
- Blinkande tema vid sidladdning (fel färger innan JavaScript har körts).
- Beroenden som drar in ett andra CSS-in-JS-bibliotek (Emotion via MUI).

## Beslut

| Fråga                            | Beslut                                                                                                                                                                                                                                  | Beslutat av |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Källa för färger och typografi   | kits-ui. Skisserna styr layout och komposition, inte färgvärden.                                                                                                                                                                        | Patrik      |
| Tema                             | Mörkt, som skisserna och Brand Guidelines ("Website: dark by default"). Startsidans Cybersäkerhet-band är ljust som i skissen. Ingen växlare. (Först beslutades "följ systemet", ändrat när det framkom att ljust läge saknar förlaga.) | Patrik      |
| Eyebrows                         | Utelämnas i detta steg, komponenterna stöder dem.                                                                                                                                                                                       | Patrik      |
| npm-organisation och publicering | Patrik skapar `@kits-ab` på npmjs.com och publicerar. Till dess kopplas kits-ui in lokalt med yalc. Publicering ska vara klar före första deploy preview.                                                                               | Patrik      |
| Licens för kits-ui               | Apache-2.0, som kits.se och react-components.                                                                                                                                                                                           | Patrik      |
| Meny                             | Tjänster · Karriär · KitsCon · Om oss + Kontakt-knapp. Keep IT Simple/Secure ut ur menyn, sidorna finns kvar.                                                                                                                           | Patrik      |
| Komponenter                      | kits-ui för tokens och baskomponenter, webbspecifika komponenter lokalt i sajten.                                                                                                                                                       | Patrik      |
| Förvaltning av kits-ui           | Vi (Patrik och agenterna) förvaltar och publicerar.                                                                                                                                                                                     | Patrik      |
| Publicering                      | Publikt på npm som `@kits-ab/kits-ui`.                                                                                                                                                                                                  | Patrik      |
| Bilder                           | Partikelbilden från Figma får användas i startsidans hero.                                                                                                                                                                              | Patrik      |
| Lansering                        | Allt på en gång. Arbetet sker lokalt mot dev-servern, sedan deploy preview, merge när allt är klart.                                                                                                                                    | Patrik      |
| Senare flytt                     | Webbkomponenterna flyttas när de är stabila till kits-ui eller react-components v5 (ett designsystem, inga dubbla tokens). Val görs senare.                                                                                             | Patrik      |

## Källmaterial och hur motsägelser löses

Material: `underlag/grafisk-profil-2026/` (lokalt, ignorerat av git), repot `kits-ab/kits-ui`
(senaste commit 2026-10-09).

| Motsägelse                                            | Källor                                                                         | Lösning                                                                                               |
| ----------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Lila: `#96667F` / `#8B5F76` / `#8A5F76`               | Brand Guidelines, Design Decisions / skisser, banners / PPT-mallar             | kits-ui: `#96667F` (`--primary-400`).                                                                 |
| Gul: `F4C542`, `FFD43B`, `F4BD00`, `FFC000`, `E3D548` | olika                                                                          | kits-ui: `#F4BD00` ljust, `#FFD43B` mörkt (`--interactive-accent`).                                   |
| Mörk bakgrund: `0A090B`, `1F1820`, `181918`, `000`    | olika                                                                          | kits-ui: mörkt tema `--bg-page #141514`, ytor `#1F1F1E`; ljust tema `--bg-page #F4F4F4`.              |
| Accent grön eller gul                                 | Brand Guidelines säger båda                                                    | Gul (Design Decisions, kits-ui "Switch accent color to yellow"). Grönt bara för status/success.       |
| Mörkt som standard eller inte                         | Brand Guidelines "dark by default", skisser bara mörka, kits-ui ljust standard | Mörkt (beslut). kits-ui:s mörka tokens används.                                                       |
| H1 34 och vikter 300–600                              | Brand Guidelines mot Figma/kits-ui H1 60 Bold                                  | kits-ui:s skala (H1 60/72 Bold osv.), med mobilanpassning (se kits-ui-rättningar).                    |
| Mono: DM Mono eller IBM Plex Mono                     | Brand Guidelines mot PPT-mallar                                                | DM Mono (kits-ui `--font-mono`).                                                                      |
| Innehållsbredd 1388 / 1110 / 1200                     | skisser / Figma-grid / nuvarande sajt                                          | 1388 px innehåll (62 px marginal vid 1512 px bredd), som skisserna. Byggarens val hur det skalar ned. |
| Kontrastvärden                                        | Brand Guidelines anger fel värden                                              | Räknas om; kits-ui:s textfärger klarar AA och används.                                                |
| KitsCon och Cyberakademin                             | Alex tar bort KitsCon och flyttar Cyberakademin; skisserna behåller            | Profilbytet rör inte strukturen: KitsCon finns kvar, Cyberakademin förblir avstängd.                  |

## Rättningar i kits-ui (görs först, i kits-ui-repot)

1. Paketnamn `@kits-ab/kits-ui`, licens Apache-2.0, publiceras publikt på npm av Patrik.
   README:s `npm install kits-ui` pekar i dag på en främmande persons paket och ska rättas.
2. Temat ska fungera utan JavaScript och kunna sättas per element: tokens genereras så att både
   `[data-theme='dark']` och `[data-theme='light']` fungerar på vilket element som helst, inte bara
   via `ThemeProvider` på dokumentroten. Sajten sätter `data-theme="dark"` på `<html>` vid
   server-renderingen (ingen blink) och `data-theme="light"` på startsidans Cybersäkerhet-band.
3. `--text-on-brand` (`#181918` på `#96667F` = 3,78:1) underkänns: byt till en färg som klarar 4,5:1
   (vit ger 4,66:1).
4. `--bg-brand-subtle` är grön (`#E3E9E0`), en rest från den gröna accenten: rätta till en lila ton.
5. Ta bort beroendet `@mui/icons-material` (drar in `@mui/material` och Emotion), använd egna
   SVG-ikoner.
6. Typografi: brödtext 16 px för webben (kits-ui har 14 px) och mobilanpassade rubrikstorlekar.
   Byggaren väljer hur (t.ex. en webbvariant eller `clamp()`), men det ska ske i kits-ui, inte i
   sajten.
7. Typsnitt: kits-ui levererar inte typsnittsfiler. Sajten laddar dem själv (se nedan); kits-ui:s
   README ska säga det tydligt.
8. Komponenternas tester ska köras mot React 18 så länge kits.se använder Gatsby 5.
9. En länk som ser ut som en knapp behövs, eftersom sajtens knappar i dag navigerar (till sidor,
   `mailto:` och jobb.kits.se). kits-ui:s regel "style aldrig en länk som en knapp" ska få ett
   uttryckligt undantag i form av en `Link`-variant för knappar.

## Sajten: grund

- **Tokens:** kits-ui:s CSS importeras en gång i layouten. Sajten använder bara semantiska tokens
  (`--text-primary`, `--bg-surface`, `--interactive-accent` …), aldrig palettfärger eller hex.
- **Typsnitt:** IBM Plex Sans (variabel, vikt 100–700) och DM Mono (400) som woff2 på egen server
  under `static/fonts/`, med `font-display: swap` och preload av Plex. Filerna finns i underlaget
  (OFL-licens). Inte Google Fonts (GDPR, Münchendomen 2022).
- **Tema:** mörkt. `data-theme="dark"` sätts på `<html>` vid server-renderingen
  (`gatsby-ssr`), så att rätt färger gäller redan innan JavaScript körs. Ljusa band sätter
  `data-theme="light"` på sitt eget element.
- **Fram till publicering:** kits-ui kopplas in lokalt med yalc (`yalc` finns redan som
  devDependency). Innan första deploy preview byts det mot den publicerade versionen.
- **Layout:** sidmarginal 62 px och innehållsbredd 1388 px på skrivbord, en kolumn på mobil.
  Sektionsavstånd 120 px skrivbord, 80 px mobil (kits-ui:s riktlinjer).
- **react-components:** fasas ut sida för sida på branchen. Vid lansering ska inga sidor använda
  den gamla profilen. Om komponenter som `Location` (karta) behålls ska de få kits-ui:s färger.

## Sajten: komponenter

Webbkomponenter byggs i `src/components/` med styled-components, tar bara emot props (ingen GraphQL)
och använder bara kits-ui:s tokens och komponenter.

| Behov (skisser)                                       | Ersätter i dag                                                          | Källa                                                                                    |
| ----------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Sidhuvud: logotyp, meny, Kontakt-knapp, gradientlinje | `Header`                                                                | lokal, utgår från vilande `SiteHeader.tsx`; `KitsLogo` från kits-ui                      |
| Sidfot                                                | `Footer`                                                                | kits-ui `Footer` om den räcker, annars lokal                                             |
| Rubriker och ingress                                  | `MainHeading`, `Lead`, `SectionHeading`, `ContentHeading`, `SubHeading` | kits-ui `Typography`                                                                     |
| Eyebrow (`--- ETIKETT`, DM Mono versaler)             | –                                                                       | lokal, bygger på `Typography` mono                                                       |
| Brödtext från Markdown inkl. kodfärger                | `Text`                                                                  | lokal `Prose`                                                                            |
| Knappar och länkar                                    | `Button`, `Link`                                                        | kits-ui `Button`, `Link`                                                                 |
| Hero (bild resp. text)                                | `MainHeading` + `Lead`                                                  | lokal                                                                                    |
| Sektion/band i full bredd                             | `Breakout`                                                              | lokal                                                                                    |
| Stack, rader, rutnät, container                       | `Vertical`, `Horizontal`, `Wrapper`                                     | lokala, med kits-ui:s spacing                                                            |
| Delad sektion (bild + text)                           | `Media`                                                                 | lokal                                                                                    |
| Lista med detaljvy                                    | –                                                                       | lokal (Tjänster, KitsCon)                                                                |
| Innehållskort                                         | `Offer`                                                                 | lokal, ev. kits-ui `Card`                                                                |
| Kontaktkort                                           | `Contact`                                                               | lokal                                                                                    |
| Kontaktband med glöd                                  | `CallToAction`                                                          | lokal, ev. kits-ui `GradientBackground`                                                  |
| Taggar                                                | –                                                                       | kits-ui `Tag`                                                                            |
| Brödsmulor                                            | `Breadcrumbs` (lokal)                                                   | kits-ui `Breadcrumbs`                                                                    |
| KitsCon: tidslinje, dagsschema                        | `Timeline`, `Timeslot`                                                  | lokala; skisserna har inte gjort om dem, så de byggs i systemets stil med samma beteende |
| Karta                                                 | `Location`                                                              | befintlig, med kits-ui-färger                                                            |
| Bildkollage                                           | `Collage`                                                               | lokal eller befintlig, byggarens val                                                     |

## Sajten: sidor

Sidor med skiss byggs i skissens stil och med dess komponenter, men innehållet styr:

- Sajtens nuvarande texter, bilder och länkmål används oförändrade, i de fält som redan finns.
- Sektioner som finns på sajten men inte i skissen behålls, i ny stil (t.ex. nyheter och blogg på
  startsidan, kartan, sociala länkar i sidfoten).
- Sektioner som bara finns i skissen och saknar innehåll på sajten tas inte med (t.ex.
  Cyberakademi-avsnitten, som länkar till en avstängd sida).
- Där skissen har en grå platshållare används sajtens befintliga bild på motsvarande plats; finns
  ingen, utelämnas bilden.
- `/kitscon` och `/kitscon/<id>` förblir samma sida som i dag, i stil med skissen "KitsCon
  details".

| Sida                                                                                                         | Skiss                                                               |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| `/`                                                                                                          | Home                                                                |
| `/tjanster`                                                                                                  | Tjänster                                                            |
| `/om-oss`                                                                                                    | Om oss                                                              |
| `/karriar`, `/jobb/<slug>`                                                                                   | Karriär                                                             |
| `/kontakt`                                                                                                   | Kontakt                                                             |
| `/kitscon`, `/kitscon/<id>`                                                                                  | KitsCon details (tidslinje, schema) och KitsCon (tidigare upplagor) |
| `/cybersakerhet` med undersidor, `/teknik-och-utveckling` med undersidor, `/kitsstudio`, blogg, nyheter, 404 | ingen skiss: byggs av samma komponenter och mönster                 |

Sidor med `_`-prefix och personsidorna förblir avstängda.

## Verifiering (gäller varje sida)

- `npm test` och `npm run build` går igenom.
- Tillgänglighet: Lighthouse/axe utan kontrastfel, även i ljusa band; synlig fokus;
  tangentbordsnavigering i menyn.
- Skärmbild i 1512 px bredd jämförs med skissen när det gäller stil och komponenter (färger,
  typografi, avstånd, kort, knappar), inte sidans exakta sammansättning, som styrs av innehållet.
  390 px bredd kontrolleras också.
- Ingen hex eller px-storlek för typografi i sajtens kod (sök efter `#[0-9a-f]{3,6}` och
  `font-size:` utanför tokens).
- `gatsby-types.ts` återställs om typerna inte ändrats i sak.

## Skillen

`.agents/skills/kits-profil-2026/SKILL.md` ska innehålla, kort:

1. Syfte och gränser (reskin, inga nya texter/bilder, struktur orörd).
2. Var källorna finns och vilken som gäller vid konflikt (tabellen ovan).
3. Tokenregler: bara semantiska kits-ui-tokens, gult bara för en primär CTA per vy.
4. Komponenttabellen (gammalt → nytt) och regeln att webbkomponenter är rena props-komponenter.
5. Sidtabellen och hur sidor utan skiss byggs.
6. Arbetsgång per sida och verifieringslistan ovan.
7. Kända fallgropar: React 18, temablink, MUI/Emotion, platshållarbilder, kontrastfel i skisserna.

Detaljer som bara behövs ibland (fullständig tokenlista, kontrasttabell, skissernas mått) läggs i
separata referensfiler bredvid `SKILL.md`.

## Lämnas åt byggaren

- Exakt hur innehållsbredden skalar mellan 390 och 1512 px.
- Om kits-ui:s `Footer` och `Card` räcker eller om lokala behövs.
- Hur `Collage` och KitsCons tidslinje och schema ser ut, inom systemets regler.
- Ordningen sidorna byggs i, så länge sidhuvud, sidfot och typografi kommer först.

## Mina beslut (Claude) att granska

- Sektioner som bara finns på sajten behålls; sektioner som bara finns i skissen utelämnas.
- Länkmål ändras inte ("Kontakta oss" fortsätter till `mailto:salj@kits.se`).
- `/kitscon` byggs inte om till en översikt med tidigare upplagor; den förblir dagens sida.
- Skisserna jämförs på stil, inte på exakt sammansättning.
- Innehållsbredd 1388 px enligt skisserna, inte Figma-gridets 1110 px.
- Brödtext 16 px på webben (kits-ui har 14 px).
- yalc fram till publicering.

## Öppna frågor

Inga.
