# kits-ui: rättningar inför kits.se — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Gör kits-ui redo att användas av kits.se: eget paketnamn, licens, tema per element utan JavaScript, rätta brand-tokens, inga MUI-beroenden, mobilanpassad typografi med webbläge, en länk som ser ut som en knapp och tester mot React 18.

**Architecture:** All ändring sker i repot `kits-ab/kits-ui` (React, TypeScript, vanlig CSS med tokens genererade från `src/tokens/index.ts`). Tokens-CSS byggs av en ren funktion som kan testas; komponenter ändras enligt repots mönster (komponent, story, CSS i samma mapp). Publiceringen görs manuellt av Patrik efter planen.

**Tech Stack:** React 18/19, TypeScript, Vite (lib mode), Vitest + Testing Library, Storybook 10, react-aria-components.

**Spec:** `docs/superpowers/specs/2026-11-11-kits-profil-2026-design.md` (i kits.se-repot, branch `kits2026`), avsnittet "Rättningar i kits-ui".

## Global Constraints

- Arbetskatalog: `~/utv/kits/web/components/kits-ui` (klon av `git@github.com:kits-ab/kits-ui.git`), branch `kits-web-2026` från `main`.
- Paketnamn `@kits-ab/kits-ui`, licens `Apache-2.0`, version `0.1.0`, publiceras publikt på npm. Agenter publicerar aldrig; det gör Patrik.
- `peerDependencies` oförändrade: `react` och `react-dom` `>=18.2 <20`. Allt ska fungera med React 18.3.1 (kits.se kör Gatsby 5).
- Följ kits-ui:s `AGENTS.md`: komponent-, story- och CSS-fil i samma mapp, tokens i stället för hårdkodade värden, React Aria för interaktion.
- Kontrastkrav WCAG AA: 4,5:1 för normal text.
- Inga nya styling-system eller beroenden. `@mui/icons-material` tas bort.
- Inga AI-attributionsrader i commits eller PR:er. Pusha inte och skapa ingen PR utan att Patrik säger till.
- Kör `npm run check` före sista committen; enskilda tasks kör `npm test` och `npm run lint`.

## Review Focus

- En sektion med `data-theme="light"` inuti `<html data-theme="dark">` måste få ljusa textfärger, inte ärva mörka (test i Task 2).
- `PageHeader` och `DatePicker` använder `--text-on-brand`; när den blir vit måste deras text fortfarande vara läsbar (stories granskas visuellt i Task 3).
- Ikoner ska ha samma storlek och linje mot text som med MUI (`1em`-beteende ersätts av exakta px från `sizeMap`); kontrollera Button med ikon och Link med pil i Storybook (Task 4).
- Konsumenter som följer gamla instruktioner (`kits-ui/styles.css`, `npm install kits-ui`) ska inte finnas kvar i någon dokumentation (grep i Task 1).
- `src/tokens/tokens.css` är genererad; testerna ska gå mot funktionen som bygger den, inte mot en inaktuell fil (Task 2).

---

### Task 0: Klona och verifiera utgångsläget

**Files:** inga ändringar.

- [ ] **Step 1: Klona och skapa branch**

```bash
git clone git@github.com:kits-ab/kits-ui.git ~/utv/kits/web/components/kits-ui
cd ~/utv/kits/web/components/kits-ui
git switch -c kits-web-2026
npm ci
```

- [ ] **Step 2: Kör utgångskontroll**

Run: `npm test && npm run lint && npm run test:typecheck`
Expected: allt passerar. Om något redan fallerar: notera det och fråga Patrik innan du fortsätter.

---

### Task 1: Paketidentitet, licens och dokumentation

**Files:**

- Modify: `package.json` (name, version, license, repository, publishConfig, files)
- Create: `LICENSE` (Apache License 2.0, copyright `2026 KITS AB`)
- Modify: `README.md`, `AGENTS.md`, `docs/AGENT_GUIDE.md`, `docs/KITS_GUIDELINES.md`, `docs/examples/Quickstart.tsx`, `llms.txt`, `RELEASING.md`, `scripts/check-package.mjs` (bara om den refererar paketnamnet)
- Test: `src/package.test.ts`

**Interfaces:**

- Produces: importvägarna `@kits-ab/kits-ui` och `@kits-ab/kits-ui/styles.css`, som kits.se använder.

- [ ] **Step 1: Skriv det fallerande testet** `src/package.test.ts`

```ts
import pkg from "../package.json"

describe("package identity", () => {
  it("is published as @kits-ab/kits-ui under Apache-2.0", () => {
    expect(pkg.name).toBe("@kits-ab/kits-ui")
    expect(pkg.license).toBe("Apache-2.0")
    expect(pkg.version).toBe("0.1.0")
    expect(pkg.publishConfig).toEqual({ access: "public" })
  })
  it("does not depend on MUI", () => {
    expect(Object.keys(pkg.dependencies ?? {})).not.toContain("@mui/icons-material")
  })
})
```

(Det andra testet fallerar tills Task 4 är klar; markera det `it.todo` här och gör om det till `it` i Task 4.)

- [ ] **Step 2: Kör testet och se det falla**

Run: `npx vitest --run --project unit src/package.test.ts`
Expected: FAIL på `name`.

- [ ] **Step 3: Uppdatera `package.json`**

`name: "@kits-ab/kits-ui"`, `version: "0.1.0"`, `license: "Apache-2.0"`, `repository: { "type": "git", "url": "git+https://github.com/kits-ab/kits-ui.git" }`, `publishConfig: { "access": "public" }`. Lägg till `LICENSE`.

- [ ] **Step 4: Uppdatera dokumentationen**

- Ersätt alla `kits-ui/styles.css` med `@kits-ab/kits-ui/styles.css`, `from 'kits-ui'` med `from '@kits-ab/kits-ui'` och `npm install kits-ui` med `npm install @kits-ab/kits-ui`.
- README "Fonts": paketet levererar inga typsnittsfiler; appen ska ladda IBM Plex Sans (variabel, vikt 100–700) och DM Mono 400 från egen server med `font-display: swap`, inte från Google Fonts.
- README: nytt avsnitt "Tema utan JavaScript" (innehåll från Task 2) och "Webbtypografi" (från Task 5) — skriv rubrikerna nu, fyll i texten i respektive task.
- `RELEASING.md` steg 7: "Publish to npm (`npm publish --access public`) as a member of the `@kits-ab` npm organisation."

- [ ] **Step 5: Verifiera**

Run: `npx vitest --run --project unit src/package.test.ts && grep -rn "kits-ui/styles\|from 'kits-ui'\|install kits-ui" --include=*.md --include=*.ts --include=*.tsx --include=*.txt . | grep -v node_modules | grep -v "@kits-ab"`
Expected: testet passerar; grep ger ingen träff.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json LICENSE README.md AGENTS.md docs llms.txt RELEASING.md src/package.test.ts scripts
git commit -m "chore: Publicera som @kits-ab/kits-ui under Apache-2.0"
```

---

### Task 2: Tema per element utan JavaScript

**Files:**

- Create: `src/tokens/buildTokensCss.ts`
- Modify: `scripts/generate-tokens-css.ts` (anropar `buildTokensCss()` och skriver filen)
- Regenerate: `src/tokens/tokens.css`
- Test: `src/tokens/buildTokensCss.test.ts`

**Interfaces:**

- Produces: `buildTokensCss(): string`. Genererad CSS där
  - `:root` innehåller `staticCssVars`,
  - selektorn skrivs exakt som `:root,\n[data-theme='light'] {` och innehåller `cssVars.light`,
  - `[data-theme='dark']` innehåller `cssVars.dark`.
    Konsumenter kan sätta `data-theme` på `<html>` vid server-rendering och på enskilda sektioner. `ThemeProvider` behålls oförändrad.

- [ ] **Step 1: Skriv de fallerande testerna**

```ts
import { buildTokensCss } from "./buildTokensCss"
import { cssVars, staticCssVars } from "./index"

const block = (css: string, selector: string) =>
  css.slice(css.indexOf(selector + " {"), css.indexOf("}", css.indexOf(selector + " {")))

describe("buildTokensCss", () => {
  const css = buildTokensCss()
  it("applies light tokens to :root and to [data-theme=light]", () => {
    const light = block(css, ":root,\n[data-theme='light']")
    expect(light).toContain(`--text-primary: ${cssVars.light["--text-primary"]};`)
  })
  it("applies dark tokens to [data-theme=dark] on any element", () => {
    const dark = block(css, "[data-theme='dark']")
    expect(dark).toContain(`--text-primary: ${cssVars.dark["--text-primary"]};`)
  })
  it("keeps static tokens out of theme blocks", () => {
    const dark = block(css, "[data-theme='dark']")
    expect(dark).not.toContain(`--font-mono: ${staticCssVars["--font-mono"]}`)
    expect(css).toContain(`--font-mono: ${staticCssVars["--font-mono"]};`)
  })
})
```

Plus ett DOM-test i samma fil: injicera `buildTokensCss()` i ett `<style>` i jsdom, skapa `<html data-theme="dark"><section data-theme="light"><p/></section></html>` och kontrollera med `getComputedStyle(p).getPropertyValue('--text-primary').trim()` att värdet är `cssVars.light['--text-primary']`. Om jsdom inte beräknar custom properties från stylesheets: flytta det testet till Storybook-projektet (`*.stories.tsx` med play-funktion) i stället.

- [ ] **Step 2: Kör och se dem falla**

Run: `npx vitest --run --project unit src/tokens/buildTokensCss.test.ts`
Expected: FAIL, `buildTokensCss` saknas.

- [ ] **Step 3: Implementera `buildTokensCss()` och låt `scripts/generate-tokens-css.ts` använda den**

- [ ] **Step 4: Regenerera och kör testerna**

Run: `npm run tokens:generate && npx vitest --run --project unit src/tokens`
Expected: PASS; `git diff src/tokens/tokens.css` visar bara selektorändringarna.

- [ ] **Step 5: README "Tema utan JavaScript"**: sätt `data-theme` på `<html>` (t.ex. i Gatsbys `onRenderBody`) och på enskilda sektioner för att låsa deras tema.

- [ ] **Step 6: Commit**

```bash
git add src/tokens scripts/generate-tokens-css.ts README.md
git commit -m "feat: Tema via data-theme på valfritt element, utan JavaScript"
```

---

### Task 3: Rätta brand-tokens och lås kontrasten med tester

**Files:**

- Modify: `src/tokens/index.ts` (`--text-on-brand`, `--bg-brand-subtle` i `cssVars.light` rad ~533/572 och `cssVars.dark` rad ~596/635)
- Regenerate: `src/tokens/tokens.css`
- Test: `src/tokens/contrast.test.ts`

**Interfaces:**

- Produces: `--text-on-brand: #FFFFFF` i båda teman; `--bg-brand-subtle` = lila ton (`light`: `#E8DCE2` = primary-100, `dark`: `#2D1E26` = dark primary-100).

- [ ] **Step 1: Skriv de fallerande testerna** `src/tokens/contrast.test.ts`

Hjälpfunktion `contrast(a: string, b: string): number` (WCAG 2.x relativ luminans, hex `#RRGGBB`) i testfilen. Testfall, för `mode` i `['light', 'dark']`:

```ts
expect(contrast(v(mode, "--text-on-brand"), v(mode, "--bg-brand"))).toBeGreaterThanOrEqual(4.5)
for (const text of ["--text-primary", "--text-secondary", "--text-brand"])
  for (const bg of ["--bg-page", "--bg-surface"])
    expect(contrast(v(mode, text), v(mode, bg))).toBeGreaterThanOrEqual(4.5)
expect(v(mode, "--bg-brand-subtle")).not.toBe(v(mode, "--status-success-bg"))
```

där `v(mode, name)` läser `cssVars[mode][name]`.

- [ ] **Step 2: Kör och se dem falla**

Run: `npx vitest --run --project unit src/tokens/contrast.test.ts`
Expected: FAIL på `--text-on-brand` (3,78) och `--bg-brand-subtle`. Om andra par fallerar: rapportera dem till Patrik, ändra inte fler tokens än de två i denna task.

- [ ] **Step 3: Ändra de två tokens i `src/tokens/index.ts`, kör `npm run tokens:generate`**

- [ ] **Step 4: Kör testerna**

Run: `npx vitest --run --project unit src/tokens`
Expected: PASS.

- [ ] **Step 5: Granska visuellt** `npm run storybook`: PageHeader och DatePicker (vald dag) i båda teman. Texten ska vara vit på lila och läsbar.

- [ ] **Step 6: Commit**

```bash
git add src/tokens
git commit -m "fix: Vit text på brand-ytor och lila bg-brand-subtle"
```

---

### Task 4: Ikoner utan MUI

**Files:**

- Create: `src/components/Icons/iconPaths.ts`
- Modify: `src/components/Icons/Icon.tsx`
- Modify: `package.json`, `package-lock.json` (ta bort `@mui/icons-material`)
- Modify: `AGENTS.md` (ersätt regeln "When using icons from MUI…" med "Lägg till ikoner som SVG-path i `iconPaths.ts` (Material Icons Filled, Apache-2.0)")
- Create: `NOTICE` (Material Icons © Google, Apache-2.0)
- Test: `src/components/Icons/Icon.test.tsx` (finns; utöka)

**Interfaces:**

- Consumes: oförändrade `IconName`, `IconSize`, `IconProps`.
- Produces: `iconPaths: Record<IconName, string>` (SVG `d` för en 24×24 viewBox). `Icon` renderar `<svg viewBox="0 0 24 24" width={px} height={px} fill="currentColor" aria-hidden="true" focusable="false" class={className} style={{ color }}><path d={iconPaths[name]} /></svg>`.

- [ ] **Step 1: Skriv de fallerande testerna**

```ts
it.each(Object.keys(iconPaths) as IconName[])('renders %s as an inline svg', (name) => {
  const { container } = render(<Icon variant={name} size="small" />);
  const svg = container.querySelector('svg')!;
  expect(svg.getAttribute('aria-hidden')).toBe('true');
  expect(svg.getAttribute('width')).toBe('16');
  expect(svg.querySelector('path')!.getAttribute('d')).toMatch(/^M/);
});
```

samt att `iconPaths` har exakt samma nycklar som `IconName`-listan (19 st). Gör om `it.todo` i `src/package.test.ts` (Task 1) till ett riktigt test.

- [ ] **Step 2: Kör och se dem falla**

Run: `npx vitest --run --project unit src/components/Icons src/package.test.ts`
Expected: FAIL, `iconPaths` saknas.

- [ ] **Step 3: Skapa `iconPaths.ts`** med `d`-strängarna från respektive fil i `node_modules/@mui/icons-material/<Namn>.js` (samma ikoner som i dag: Add, ArrowBack, ArrowForward, CalendarMonth, Check, ChevronLeft, ChevronRight, Close, Delete, Edit, HomeFilled, Info, Menu, MoreVert, Search, Settings, UploadFile, Warning, Error). Skriv om `Icon.tsx`. Avinstallera sedan: `npm uninstall @mui/icons-material`.

- [ ] **Step 4: Kör testerna och sök efter rester**

Run: `npm test && grep -rn "@mui" src package.json`
Expected: PASS; grep ger ingen träff.

- [ ] **Step 5: Granska visuellt** i Storybook: Button med ikon, IconButton, Link med pil, Alert, SearchField, DatePicker. Storlek och linjering som tidigare.

- [ ] **Step 6: Commit**

```bash
git add src/components/Icons package.json package-lock.json AGENTS.md NOTICE src/package.test.ts
git commit -m "refactor: Egna SVG-ikoner i stället för @mui/icons-material"
```

---

### Task 5: Typografi som tokens, mobilskala och webbläge

**Files:**

- Modify: `src/tokens/index.ts` (nya statiska tokens), `src/tokens/buildTokensCss.ts` (media query och webbläge)
- Modify: `src/components/Typography/typography.css` (storlekar via variabler)
- Regenerate: `src/tokens/tokens.css`
- Modify: `README.md` ("Webbtypografi"), `docs/KITS_GUIDELINES.md` (Typography)
- Test: `src/tokens/buildTokensCss.test.ts` (utöka)

**Interfaces:**

- Produces, i `:root`: `--type-h1-size: 60px; --type-h1-line: 72px; --type-h2-size: 40px; --type-h2-line: 64px; --type-h3-size: 28px; --type-h3-line: 48px; --type-subtitle-size: 20px; --type-subtitle-line: 40px; --type-body-size: 14px; --type-body-line: 24px; --type-body-large-size: 18px; --type-body-large-line: 30px` (dagens värden, så apparna inte ändras).
- `@media (max-width: 600px) { :root { --type-h1-size: 40px; --type-h1-line: 48px; --type-h2-size: 32px; --type-h2-line: 40px; --type-h3-size: 24px; --type-h3-line: 32px; } }`
- `[data-typography='web'] { --type-body-size: 16px; --type-body-line: 24px; }` — kits.se sätter `data-typography="web"` på `<html>`.
- `typography.css` använder `var(--type-…)` för `h1`, `h2`, `h3`, `subtitle`, `body`, `body-semibold`, `semibold`, `body-large`. Övriga varianter (label, tag, mono, small, table-\*) behåller sina px-värden.

- [ ] **Step 1: Skriv de fallerande testerna**: `buildTokensCss()` innehåller `--type-h1-size: 60px;` i `:root`, blocket `@media (max-width: 600px)` med `--type-h1-size: 40px;`, och blocket `[data-typography='web']` med `--type-body-size: 16px;`.

- [ ] **Step 2: Kör och se dem falla**

Run: `npx vitest --run --project unit src/tokens/buildTokensCss.test.ts`
Expected: FAIL på `--type-h1-size`.

- [ ] **Step 3: Implementera tokens, generering och `typography.css`**

- [ ] **Step 4: Kör testerna och granska**

Run: `npm run tokens:generate && npm test`
Expected: PASS. I Storybook: Typography-storyn ser ut som innan i 1280 px bredd; i 375 px är H1 40 px.

- [ ] **Step 5: Dokumentera** `data-typography="web"` och mobilskalan i README och KITS_GUIDELINES.

- [ ] **Step 6: Commit**

```bash
git add src/tokens src/components/Typography README.md docs/KITS_GUIDELINES.md
git commit -m "feat: Typografi via tokens, mobilskala och webbläge"
```

---

### Task 6: Länk som ser ut som en knapp

**Files:**

- Modify: `src/components/Link/Link.tsx`, `src/components/Link/link.css`, `src/components/Link/Link.stories.tsx`
- Modify: `docs/KITS_GUIDELINES.md` ("Actions and navigation"), `AGENTS.md` ("Consuming KITS UI")
- Test: `src/components/Link/Link.test.tsx`

**Interfaces:**

- Consumes: `ButtonProps['variant']` och `ButtonProps['size']` från `Button.tsx`, klasserna `storybook-button`, `storybook-button--<size>`, `storybook-button--<variant>` i `button.css`.
- Produces: `LinkProps` får `variant?: 'inline' | 'standalone' | 'button'`, `buttonVariant?: 'primary' | 'accent' | 'outline' | 'tertiary'` (standard `'primary'`), `size?: 'small' | 'medium' | 'large'` (standard `'medium'`). Med `variant="button"` renderas en `<a>` med klasserna `kits-link kits-link--button storybook-button storybook-button--<size> storybook-button--<buttonVariant>`. `buttonVariant` och `size` ignoreras för andra varianter.

- [ ] **Step 1: Skriv de fallerande testerna**

```tsx
it("renders a navigating link styled as an accent button", () => {
  render(
    <Link href="/kontakt" variant="button" buttonVariant="accent" size="large">
      Kontakta oss
    </Link>
  )
  const a = screen.getByRole("link", { name: "Kontakta oss" })
  expect(a).toHaveAttribute("href", "/kontakt")
  expect(a).toHaveClass(
    "kits-link--button",
    "storybook-button",
    "storybook-button--large",
    "storybook-button--accent"
  )
})
it("defaults to a medium primary button", () => {
  render(
    <Link href="/x" variant="button">
      X
    </Link>
  )
  expect(screen.getByRole("link")).toHaveClass(
    "storybook-button--medium",
    "storybook-button--primary"
  )
})
```

- [ ] **Step 2: Kör och se dem falla**

Run: `npx vitest --run --project unit src/components/Link`
Expected: FAIL.

- [ ] **Step 3: Implementera** i `Link.tsx`; i `link.css` neutralisera länkfärg och understrykning för `.kits-link--button` så att knappklassernas färger gäller (inklusive `:hover`).

- [ ] **Step 4: Kör testerna och granska** Storybook: story "As button" med primary, accent och outline, fokusring synlig med tangentbord.

- [ ] **Step 5: Dokumentera undantaget**: "Navigerande call-to-actions (t.ex. Kontakta oss) använder `Link variant="button"`. Det är det enda tillåtna sättet att få en länk att se ut som en knapp."

- [ ] **Step 6: Commit**

```bash
git add src/components/Link docs/KITS_GUIDELINES.md AGENTS.md
git commit -m "feat: Link variant=button för navigerande call-to-actions"
```

---

### Task 7: Tester mot React 18

**Files:**

- Modify: `package.json` (skript `test:react18`)
- Modify: `.github/workflows/ci.yml` (extra jobb)

**Interfaces:**

- Produces: `npm run test:react18` kör enhetstesterna med React 18.3.1.

- [ ] **Step 1: Lägg till skriptet** `"test:react18": "npm install --no-save react@18.3.1 react-dom@18.3.1 @types/react@18.3.27 @types/react-dom@18.3.7 && vitest --run --project unit"`

- [ ] **Step 2: Kör det**

Run: `npm run test:react18`
Expected: PASS. Fallerar något enbart på React 18: rätta i komponenten (inte i testet) och notera i CHANGELOG. Kör `npm ci` efteråt för att återställa React 19 lokalt.

- [ ] **Step 3: Lägg till CI-jobbet** `react18` i `ci.yml` som kör `npm ci && npm run test:react18`.

- [ ] **Step 4: Commit**

```bash
git add package.json .github/workflows/ci.yml
git commit -m "ci: Kör enhetstester även mot React 18"
```

---

### Task 8: Version 0.1.0 klar för publicering

**Files:**

- Modify: `CHANGELOG.md` (avsnitt `## 0.1.0` med Task 1–7)

- [ ] **Step 1: Uppdatera CHANGELOG** med användarsynliga ändringar: nytt paketnamn, Apache-2.0, `data-theme` per element, ändrade `--text-on-brand`/`--bg-brand-subtle`, MUI borttaget, typografitokens och `data-typography="web"`, `Link variant="button"`, React 18-tester.

- [ ] **Step 2: Full kontroll**

Run: `npm ci && npm run check && npm pack --dry-run`
Expected: `check` passerar; paketlistan innehåller `dist/index.js`, `dist/index.umd.cjs`, `dist/index.d.ts`, `dist/index.css`, `LICENSE`, `NOTICE`, `README.md`.

- [ ] **Step 3: Lokal publicering för kits.se**

Run: `npx yalc publish`
Expected: `@kits-ab/kits-ui@0.1.0 published in store`. (kits.se kopplar in den i plan 3.)

- [ ] **Step 4: Commit**

```bash
git add CHANGELOG.md
git commit -m "chore: Version 0.1.0"
```

- [ ] **Step 5: Lämna över till Patrik** (agenten gör inget av detta):
  1. Skapa organisationen `kits-ab` på npmjs.com om den inte finns.
  2. Granska branchen `kits-web-2026` (kod, tillgänglighet, Storybook) och pusha/merga.
  3. `npm login` och `npm publish --access public` från `main`.
  4. `git tag v0.1.0 && git push --tags`.
