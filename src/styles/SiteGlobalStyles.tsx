import { createGlobalStyle } from "styled-components"

// styled-components lägger in globala stilar i den ordning modulerna laddas, inte i
// renderingsordning. [data-theme] ger högre specificitet än de gamla stilarnas html/body,
// så att profil 2026 vinner under övergången.
export const SiteGlobalStyles = createGlobalStyle`
  html[data-theme],
  html[data-theme] body {
    background-color: var(--bg-page);
    color: var(--text-primary);
    font-family: var(--font);
  }
`
