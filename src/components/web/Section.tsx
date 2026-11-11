import * as React from "react"
import styled from "styled-components"

import { Container } from "./Container"
import { onMobile, SpacingStep, spacing } from "./layout"

export type SectionTone = "default" | "raised" | "light"

export interface SectionProps {
  tone?: SectionTone
  // Avstånd ovanför innehållet; standard 120 px (80 px på mobil). Mindre direkt efter en Hero.
  spaceTop?: SpacingStep
  children: React.ReactNode
  className?: string
}

const background: Record<SectionTone, string> = {
  default: "transparent",
  raised: "var(--bg-surface)",
  light: "var(--bg-page)"
}

const StyledSection = styled.section<{ $tone: SectionTone; $spaceTop?: SpacingStep }>`
  padding: ${({ $spaceTop = 120 }) => spacing($spaceTop)} 0 var(--spacing-120);
  background-color: ${({ $tone }) => background[$tone]};
  color: var(--text-primary);

  ${onMobile} {
    padding: ${({ $spaceTop }) =>
        $spaceTop && $spaceTop < 80 ? spacing($spaceTop) : "var(--spacing-80)"}
      0 var(--spacing-80);
  }
`

// Ett band i full bredd. tone="light" låser bandet i ljust tema och målar egen bakgrund.
export const Section = ({ tone = "default", spaceTop, children, className }: SectionProps) => (
  <StyledSection
    $tone={tone}
    $spaceTop={spaceTop}
    data-theme={tone === "light" ? "light" : undefined}
    className={className}
  >
    <Container>{children}</Container>
  </StyledSection>
)
