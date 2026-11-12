import { createGlobalStyle } from "styled-components"

export const SiteGlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html[data-theme],
  html[data-theme] body {
    background-color: var(--bg-page);
    color: var(--text-primary);
    font-family: var(--font);
  }

  /* Fullbreda delar (kollaget) är 100vw breda, vilket inkluderar skrollisten. */
  body {
    overflow-x: hidden;
  }

  strong,
  b {
    font-weight: 700;
  }
`
