import type { GatsbySSR } from "gatsby"
import * as React from "react"

// Temat och webbtypografin sätts redan i server-renderad HTML, så att sidan är mörk innan
// JavaScript har körts.
export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHtmlAttributes,
  setHeadComponents
}) => {
  setHtmlAttributes({ lang: "sv", "data-theme": "dark", "data-typography": "web" })
  setHeadComponents([
    <link
      key="font-ibm-plex-sans"
      rel="preload"
      href="/fonts/IBMPlexSans-Variable.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
  ])
}
