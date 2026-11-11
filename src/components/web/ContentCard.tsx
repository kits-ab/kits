import { Typography } from "@kits-ab/kits-ui"
import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { Stack } from "./Stack"

export interface ContentCardProps {
  label?: string
  title: string
  // Hela kortet blir klickbart när href finns (länken ligger på rubriken).
  href?: string
  tone?: "surface" | "brand"
  children?: React.ReactNode
}

const Card = styled.div<{ $tone: "surface" | "brand" }>`
  position: relative;
  height: 100%;
  padding: var(--spacing-48) var(--spacing-40);
  border: 1px solid var(--border-dark);
  border-radius: var(--radius-sm);

  /* Samma 12 % som ContactCard, så att lila text klarar 4,5:1. */
  background-color: ${({ $tone }) =>
    $tone === "brand"
      ? "color-mix(in srgb, var(--bg-brand) 12%, transparent)"
      : "var(--bg-surface)"};
  transition: border-color 120ms ease;

  &:has(a:hover) {
    border-color: var(--border-brand);
  }
`

const TitleLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }

  &:focus-visible {
    outline: none;
  }

  &:focus-visible::after {
    outline: 3px solid var(--primary-border);
    outline-offset: 3px;
  }
`

// Kort med etikett, rubrik och text, till exempel en tjänst eller ett erbjudande.
export const ContentCard = ({
  label,
  title,
  href,
  tone = "surface",
  children
}: ContentCardProps) => (
  <Card $tone={tone}>
    <Stack $gap={16}>
      <Stack $gap={8}>
        {label && (
          <Typography variant="mono" color="brand">
            {label}
          </Typography>
        )}
        <Typography variant="h3" as="h3">
          {href ? <TitleLink to={href}>{title}</TitleLink> : title}
        </Typography>
      </Stack>
      {children}
    </Stack>
  </Card>
)
