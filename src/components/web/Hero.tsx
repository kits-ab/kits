import { Typography } from "@kokitotsos/kits-ui"
import * as React from "react"
import styled from "styled-components"

import { Container } from "./Container"
import { heroImageMinHeight, onMobile, readableMaxWidth } from "./layout"
import { Stack } from "./Stack"

export interface HeroProps {
  variant: "image" | "text"
  heading: string
  lead?: React.ReactNode
  image?: string
  action?: React.ReactNode
}

// Ingen luft under: nästa Section bestämmer avståndet (spaceTop).
const TextHero = styled.section`
  padding: var(--spacing-120) 0 0;

  ${onMobile} {
    padding: var(--spacing-64) 0 0;
  }
`

const ImageHero = styled.section<{ $image?: string }>`
  display: flex;
  align-items: center;
  min-height: min(${heroImageMinHeight}px, 90vh);
  padding: var(--spacing-120) 0;
  background-color: var(--bg-page);
  background-image: ${({ $image }) => ($image ? `url(${$image})` : "none")};
  background-position: center;
  background-size: cover;

  ${onMobile} {
    min-height: auto;
    padding: var(--spacing-80) 0;
  }
`

const Lead = styled.div`
  max-width: ${readableMaxWidth}px;
`

const FullWidth = styled(Container)`
  width: 100%;
`

const Content = ({ heading, lead, action }: Omit<HeroProps, "variant" | "image">) => (
  <Stack $gap={24}>
    <Typography variant="h1" as="h1">
      {heading}
    </Typography>
    {lead && (
      <Lead>
        <Typography variant="body" color="secondary" as="div">
          {lead}
        </Typography>
      </Lead>
    )}
    {action && <div>{action}</div>}
  </Stack>
)

// Sidans inledning. variant="image" är startsidans mörka hero med bild i full bredd.
export const Hero = ({ variant, image, ...content }: HeroProps) =>
  variant === "image" ? (
    <ImageHero $image={image} data-theme="dark">
      <FullWidth>
        <Content {...content} />
      </FullWidth>
    </ImageHero>
  ) : (
    <TextHero>
      <Container>
        <Content {...content} />
      </Container>
    </TextHero>
  )
