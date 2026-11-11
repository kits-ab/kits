import { GradientBackground, Typography } from "@kits-ab/kits-ui"
import * as React from "react"
import styled from "styled-components"

import { Container } from "./Container"
import { onMobile, readableMaxWidth } from "./layout"
import { Stack } from "./Stack"

export interface ContactBandProps {
  heading: string
  text?: React.ReactNode
  action?: React.ReactNode
}

const Inner = styled.div`
  max-width: ${readableMaxWidth}px;
  margin: 0 auto;
  padding: var(--spacing-120) 0;
  text-align: center;

  ${onMobile} {
    padding: var(--spacing-80) 0;
  }
`

// Avslutande band med glöd i bakgrunden: rubrik, kort text och en knapp, centrerat.
export const ContactBand = ({ heading, text, action }: ContactBandProps) => (
  <GradientBackground as="section" baseColor="var(--bg-page)">
    <Container>
      <Inner>
        <Stack $gap={24}>
          <Typography variant="h2" as="h2">
            {heading}
          </Typography>
          {text && (
            <Typography variant="body" color="secondary" as="div">
              {text}
            </Typography>
          )}
          {action && <div>{action}</div>}
        </Stack>
      </Inner>
    </Container>
  </GradientBackground>
)
