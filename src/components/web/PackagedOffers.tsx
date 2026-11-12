import { Typography } from "@kokitotsos/kits-ui"
import * as React from "react"

import { ContentCard } from "./ContentCard"
import { Grid } from "./Grid"
import { SectionIntro } from "./SectionIntro"
import { Stack } from "./Stack"

export interface PackagedOffersProps {
  heading: string
  text?: string
  offers: { title: string; url: string; text: string }[]
}

// Paketerade erbjudanden: inledning och ett klickbart lila kort per erbjudande.
export const PackagedOffers = ({ heading, text, offers }: PackagedOffersProps) => (
  <Stack $gap={64}>
    <SectionIntro heading={heading} text={text} />
    <Grid $columns={3}>
      {offers.map((offer) => (
        <ContentCard key={offer.url} title={offer.title} href={offer.url} tone="brand">
          <Typography variant="body" color="secondary">
            {offer.text}
          </Typography>
        </ContentCard>
      ))}
    </Grid>
  </Stack>
)
