# 0007. Mörkt tema, styrt på ett ställe

- Datum: 2026-11-12
- Status: Beslutat

## Bakgrund

Brand Guidelines säger "Website: dark by default", och skisserna finns bara i mörkt. kits-ui har
både ett ljust och ett mörkt tema som styrs med `data-theme`. Att följa webbläsarens inställning
övervägdes först, men ljust läge saknar förlaga och har inte kontrollerats.

## Beslut

Sajten är mörk. Temat väljs på ett enda ställe, `siteTheme` i `src/theme.ts`:

- `"dark"`: alltid mörkt. Gäller nu.
- `"system"`: följer webbläsarens inställning (`prefers-color-scheme`). Används när det finns
  skisser för ljust läge, eller för att testa det.

`data-theme` sätts på `<html>` vid server-renderingen, så sidan blinkar inte. I läget `"system"`
byter ett skript i `<head>` tema innan sidan ritas. Det som inte kan styras med CSS, till exempel
kartans stil, läser temat med `usePageTheme()`. Delar som alltid ska vara mörka eller ljusa, som
hero-bilder och startsidans ljusa band, sätter `data-theme` på sitt eget element.

## Konsekvenser

- Ingen temaväxlare på sajten.
- Innan `"system"` sätts i produktion ska alla sidor gås igenom i ljust läge, med skisser och
  kontrastkontroll ([0004](0004-tillganglighet-fore-skiss.md)).
- Ny kod som behöver veta temat använder `usePageTheme()` och hårdkodar inte mörkt.
