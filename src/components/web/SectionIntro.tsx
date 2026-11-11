import { Typography } from "@kits-ab/kits-ui"
import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { readableMaxWidth } from "./layout"
import { Stack } from "./Stack"

export interface SectionIntroProps {
  // "Keep IT Secure  \nCybersäkerhet": första raden blir etikett, resten rubrik.
  heading: string
  url?: string
  text?: React.ReactNode
}

// Rubrikerna i innehållet är "Keep IT Secure  \nCybersäkerhet": första raden blir etikett.
export const splitHeading = (heading: string) => {
  const [label, ...rest] = heading.split("\n").map((part) => part.trim())
  return rest.length > 0 ? { label, title: rest.join(" ") } : { label: undefined, title: label }
}

const Intro = styled.div`
  max-width: ${readableMaxWidth}px;
`

export const HeadingLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.12em;
  }

  &:focus-visible {
    outline: 3px solid var(--primary-border);
    outline-offset: 3px;
  }
`

// Inledning till en sektion: etikett, rubrik (länk om url finns) och text.
export const SectionIntro = ({ heading, url, text }: SectionIntroProps) => {
  const { label, title } = splitHeading(heading)
  return (
    <Intro>
      <Stack $gap={16}>
        {label && (
          <Typography variant="mono" color="brand">
            {label}
          </Typography>
        )}
        <Typography variant="h2" as="h2">
          {url ? <HeadingLink to={url}>{title}</HeadingLink> : title}
        </Typography>
        {text && (
          <Typography variant="body" color="secondary" as="div">
            {text}
          </Typography>
        )}
      </Stack>
    </Intro>
  )
}
