import * as React from "react"

// Sajtens färgtema styrs här och bara här.
// "dark": alltid mörkt, som skisserna.
// "system": följer webbläsarens inställning (prefers-color-scheme). Använd när det finns skisser
// för ljust läge, eller för att testa det.
export type SiteTheme = "dark" | "system"
export const siteTheme: SiteTheme = "dark"

export type ThemeMode = "light" | "dark"

// Körs i <head> före första renderingen när temat är "system", så att sidan inte blinkar till i
// fel tema. Byter också tema om användaren ändrar inställningen medan sidan är öppen.
export const followSystemThemeScript = `(function () {
  var query = window.matchMedia("(prefers-color-scheme: light)");
  var apply = function () {
    document.documentElement.setAttribute("data-theme", query.matches ? "light" : "dark");
  };
  apply();
  query.addEventListener("change", apply);
})();`

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributeFilter: ["data-theme"] })
  return () => observer.disconnect()
}

const getMode = (): ThemeMode =>
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"

// Temat som gäller på sidan just nu, för det som inte kan styras med CSS (till exempel kartans
// stil). Server-renderingen är alltid mörk.
export const usePageTheme = (): ThemeMode =>
  React.useSyncExternalStore(subscribe, getMode, () => "dark")
