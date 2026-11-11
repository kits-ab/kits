# Skill kits-profil-2026 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. Skillen skrivs med superpowers:writing-skills (testa med scenarier före och efter).

**Goal:** En skill som får Claude Code, Codex och Antigravity att bygga om kits.se till den nya profilen på samma sätt: rätt källor, bara kits-ui-tokens, inga nya texter, samma struktur och samma verifiering.

**Architecture:** `.agents/skills/kits-profil-2026/SKILL.md` (kort, alltid laddad när skillen används) plus referensfiler som läses vid behov. `.claude/skills` är redan en symlänk till `.agents/skills`, så alla tre agenterna hittar den. Skillen hänvisar till designdokumentet för motiveringar i stället för att upprepa dem.

**Tech Stack:** Markdown (Agent Skills-format: frontmatter med `name` och `description`).

**Spec:** `docs/superpowers/specs/2026-11-11-kits-profil-2026-design.md`

## Global Constraints

- Arbetskatalog: worktreet `/Users/patrik/utv/kits/web/kits2026`, branch `kits2026`.
- Skillen skrivs på svenska, utan långa tankstreck (– —), kort och instruerande. `SKILL.md` högst ~150 rader.
- Frontmatter: bara `name` och `description` (fungerar i alla tre agenterna).
- Skillen beskriver bara det som inte syns i koden. Inga generella råd.
- Namnen nedan är bindande; plan 3 bygger exakt dessa filer och komponenter.
- `.agents/` är i dag okommittad på Patriks begäran. Committa inte skillen utan att fråga.

**Bindande namn som skillen beskriver (byggs i plan 3):**

| Vad                       | Sökväg / namn                                                                                                                                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tema och typografiläge    | `gatsby-ssr.tsx`: `<html lang="sv" data-theme="dark" data-typography="web">`                                                                                                                                                              |
| Typsnitt                  | `static/fonts/IBMPlexSans-Variable.woff2`, `static/fonts/DMMono-Regular.woff2`, `src/styles/fonts.css`                                                                                                                                    |
| Globala stilar            | `src/styles/SiteGlobalStyles.tsx`                                                                                                                                                                                                         |
| kits-ui                   | `@kits-ab/kits-ui` och `@kits-ab/kits-ui/styles.css` (yalc tills publicerat)                                                                                                                                                              |
| Router för kits-ui-länkar | `src/components/web/KitsRouter.tsx` (React Aria `RouterProvider` med Gatsbys `navigate`)                                                                                                                                                  |
| Webbkomponenter           | `src/components/web/`: `SiteHeader`, `SiteFooter`, `Container`, `Section`, `Stack`, `Grid`, `Hero`, `Eyebrow`, `Prose`, `SplitSection`, `MasterDetail`, `ContentCard`, `ContactCard`, `ContactBand`, `KitsConTimeline`, `KitsConSchedule` |
| Sektionstoner             | `Section tone="default" \| "raised" \| "light"` (`light` sätter `data-theme="light"`)                                                                                                                                                     |

## Review Focus

- En agent som får "gör som i skissen" lägger till skissens texter (eyebrows, rubriker). Skillen ska få den att låta bli och fråga (scenario S2).
- En agent använder skissernas hex (`#8B5F76`, `#F4C542`) i stället för tokens (scenario S5).
- En agent ändrar länkmål eller gör flera gula knappar på samma vy (scenario S4).
- En agent gör sidor ljusa eller lägger till temaväxlare (scenario S3).
- En agent säger "klart" utan att ha kört build, kontrast och skärmbilder (scenario S1).

---

### Task 1: Baslinje utan skill (RED)

**Files:**

- Create: `docs/superpowers/plans/skill-scenarier.md` (scenarier och observerat beteende)

- [ ] **Step 1: Skriv scenarierna** i `skill-scenarier.md`. Varje scenario körs av en ny subagent som får läsa repot och `underlag/` men inte `.agents/skills/kits-profil-2026/`. Agenten ska svara med exakt vilka filer, komponenter, värden och kommandon den skulle använda (ingen kod skrivs):
  - **S1** "Bygg om /kontakt till den nya grafiska profilen. Säg till när det är klart."
  - **S2** "Skissen för Om oss har etiketten '--- KONTAKT' ovanför kontaktkorten. Lägg in den."
  - **S3** "Gör startsidans hero och resten av sidan i den nya profilen."
  - **S4** "Knappen 'Kontakta oss' på /tjanster ska vara gul och gå till /kontakt, som i skissen."
  - **S5** "Rubrikerna på /om-oss ska ha den lila färgen från Brand Guidelines."
  - **S6** "Bygg om /cybersakerhet/pentest. Det finns ingen skiss för den sidan."

  För varje scenario: förväntat korrekt beteende, enligt specen (t.ex. S2: inga nya texter i steg 1, fråga Patrik; S4: en gul knapp per vy, länkmålet `mailto:salj@kits.se` ändras inte; S5: `--text-brand`, inte `#96667F`, eftersom den inte klarar AA som text).

- [ ] **Step 2: Kör S1–S6 utan skill** med sex parallella subagenter.

- [ ] **Step 3: Notera avvikelser** ordagrant i `skill-scenarier.md`: vad agenten valde, vilka rationaliseringar den använde.
      Expected: minst hälften av scenarierna avviker från förväntat beteende. Annars: skärp scenarierna så att de prövar reglerna.

---

### Task 2: Referensfiler

**Files:**

- Create: `.agents/skills/kits-profil-2026/references/kallor.md`
- Create: `.agents/skills/kits-profil-2026/references/tokens.md`
- Create: `.agents/skills/kits-profil-2026/references/komponenter.md`
- Create: `.agents/skills/kits-profil-2026/references/sidor.md`
- Create: `.agents/skills/kits-profil-2026/references/verifiering.md`

**Interfaces:**

- Produces: filerna som `SKILL.md` (Task 3) länkar till.

- [ ] **Step 1: `kallor.md`**: var materialet ligger (`underlag/grafisk-profil-2026/`, Figma-renderingar, kits-ui-repot), att kits-ui gäller vid konflikt, och motsägelsetabellen ur specen (avsnittet "Källmaterial och hur motsägelser löses").

- [ ] **Step 2: `tokens.md`**: de semantiska tokens sajten får använda, grupperade (text, bakgrund, interaktion, kant, spacing, typografivarianter), med regeln "bara semantiska tokens, aldrig palett eller hex"; gult bara för en primär CTA per vy; kontrasttabellen ur specen med de underkända paren i skisserna (`#8B5F76` på mauve-tint 2,76:1, `#464746` på `#181918` 1,89:1, `#96667F` som text 4,26:1). Värdena hämtas ur `@kits-ab/kits-ui` `src/tokens/tokens.css` efter plan 1, inte ur skisserna.

- [ ] **Step 3: `komponenter.md`**: tabellen "gammalt → nytt" ur specens "Sajten: komponenter", med de bindande namnen ovan och för varje webbkomponent: syfte, vilka props den tar (bara data, ingen GraphQL), vilka kits-ui-delar den bygger på. Regeln att `@kokitotsos/react-components` inte får användas på en ombyggd sida (undantag `Location`, med kits-ui-färger).

- [ ] **Step 4: `sidor.md`**: sidtabellen ur specen, innehållsreglerna (befintliga texter, bilder och länkmål; sektioner bara på sajten behålls; sektioner bara i skissen utelämnas; platshållare ersätts med befintlig bild eller utelämnas; inga eyebrows; `/kitscon` oförändrad struktur) och var varje skiss ligger (`underlag/grafisk-profil-2026/Redesigns i PDF/Hemsidan/<Sida>.pdf`).

- [ ] **Step 5: `verifiering.md`**: checklistan ur specens "Verifiering" med exakta kommandon:
  - `npm test`, `npm run build`
  - Chrome DevTools: `lighthouse_audit` (kategori accessibility, inga kontrastfel), skärmbild i 1512×982 och 390×844, jämförd med skissens PDF på stil och komponenter
  - `grep -rnE "#[0-9a-fA-F]{3,8}\b|font-size:" src --include=*.tsx | grep -v "var(--"` ska inte ge träffar i ändrade filer
  - `git checkout -- gatsby-types.ts` om typerna inte ändrats i sak

- [ ] **Step 6: Granska** att varje fil bara innehåller sådant som inte syns i koden och att inget motsäger specen.

---

### Task 3: SKILL.md (GREEN)

**Files:**

- Create: `.agents/skills/kits-profil-2026/SKILL.md`

- [ ] **Step 1: Skriv frontmatter**

```yaml
---
name: kits-profil-2026
description: Bygg om kits.se till KITS nya grafiska profil 2026 med kits-ui. Använd när någon vill byta stil, färger, typografi eller komponenter på en sida, bygga om en sida enligt Johannas skisser eller arbetar på branchen kits2026.
---
```

- [ ] **Step 2: Skriv innehållet** i denna ordning, med svar på avvikelserna från Task 1 i första hand:
  1. Gränser (en mening var): reskin, inga nya texter eller bilder (utom partikelbilden i startsidans hero), struktur, URL:er och länkmål orörda, mörkt tema, eyebrows väntar.
  2. Källordning vid konflikt: kits-ui > skisserna (layout) > Brand Guidelines. Länk till `references/kallor.md`.
  3. Hårda regler: bara semantiska kits-ui-tokens; en gul (accent) knapp per vy; `Link variant="button"` för navigerande knappar; inga hex eller px-typografi i sajten; webbkomponenter tar bara props.
  4. Arbetsgång per sida: läs skissen och sidans nuvarande innehåll → välj komponenter ur `references/komponenter.md` → bygg → verifiera enligt `references/verifiering.md` → visa Patrik skärmbilder.
  5. Fråga Patrik först: nya texter, ändrade länkmål, nya bilder, nya CMS-fält, avvikelser från specen.
  6. Kända fallgropar: React 18 (Gatsby 5), MUI/Emotion får inte komma in, temablink (tema sätts i `gatsby-ssr.tsx`), skissernas kontrastfel, KitsCon-skissen är skärmdumpar av gamla sajten.
  7. Länk till specen för motiveringar.

- [ ] **Step 3: Kontrollera längd och ton**

Run: `wc -l .agents/skills/kits-profil-2026/SKILL.md && grep -n "[–—]" -r .agents/skills/kits-profil-2026/`
Expected: högst ~150 rader; inga långa tankstreck.

---

### Task 4: Scenarier med skill och REFACTOR

**Files:**

- Modify: `docs/superpowers/plans/skill-scenarier.md`
- Modify: `.agents/skills/kits-profil-2026/SKILL.md` och referensfiler vid behov

- [ ] **Step 1: Kör S1–S6 igen** med sex nya subagenter som först läser skillen.

- [ ] **Step 2: Jämför** mot förväntat beteende och notera i `skill-scenarier.md`.
      Expected: alla sex följer förväntat beteende.

- [ ] **Step 3: Täpp till luckor** för varje kvarstående avvikelse: lägg till en uttrycklig regel eller ett motargument mot den rationalisering agenten använde, kör om just det scenariot.

- [ ] **Step 4: Gör skillen upptäckbar**: lägg till i `AGENTS.md` under "Innehåll": "Ny grafisk profil 2026: se `.agents/skills/kits-profil-2026/SKILL.md`." Kontrollera att `.claude/skills/kits-profil-2026/SKILL.md` går att läsa via symlänken.

- [ ] **Step 5: Fråga Patrik** om skillen, referensfilerna, scenarierna och AGENTS.md-raden ska committas på `kits2026`.
