// Granskningssida för byggstenarna i profil 2026. Finns bara i dev-servern (gatsby-node.js
// tar bort den i produktionsbygget).
import { Typography } from "@kokitotsos/kits-ui"
import * as React from "react"

import { Grid } from "../components/web/Grid"
import { Hero } from "../components/web/Hero"
import { Prose } from "../components/web/Prose"
import { Section } from "../components/web/Section"
import { Stack } from "../components/web/Stack"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"

const prose = `<h2>Rubrik i Prose</h2><p>Brödtext från Markdown med en <a href="/kontakt">länk</a> och <strong>fetstil</strong>.</p><ul><li>Punkt ett</li><li>Punkt två</li></ul><h3>Underrubrik</h3><p>Kod: <code>npm start</code></p>`

export default ({ location }: PageProps) => (
  <DefaultLayout location={location}>
    <Hero
      variant="image"
      image="/assets/framsida_02.jpg"
      heading="Hero med bild"
      lead="Ingress i hero, alltid mörk."
    />
    <Hero variant="text" heading="Hero med text" lead="Ingress i textvarianten." />
    {(["default", "raised", "light"] as const).map((tone) => (
      <Section key={tone} tone={tone}>
        <Stack $gap={24}>
          <Typography variant="h2" as="h2">
            Section tone={tone}
          </Typography>
          <Grid $columns={3}>
            {[1, 2, 3].map((n) => (
              <Stack key={n} $gap={8}>
                <Typography variant="h3" as="h3">
                  Kolumn {n}
                </Typography>
                <Typography variant="body" color="secondary">
                  Text i en kolumn i Grid med tre kolumner.
                </Typography>
              </Stack>
            ))}
          </Grid>
          <Prose html={prose} />
        </Stack>
      </Section>
    ))}
  </DefaultLayout>
)
