import * as React from "react"
import styled from "styled-components"

import { Container } from "./Container"
import { onMobile } from "./layout"

export type SectionTone = "default" | "raised" | "light"

export interface SectionProps {
  tone?: SectionTone
  children: React.ReactNode
  className?: string
}

const background: Record<SectionTone, string> = {
  default: "transparent",
  raised: "var(--bg-surface)",
  light: "var(--bg-page)"
}

const StyledSection = styled.section<{ $tone: SectionTone }>`
  padding: var(--spacing-120) 0;
  background-color: ${({ $tone }) => background[$tone]};
  color: var(--text-primary);

  ${onMobile} {
    padding: var(--spacing-80) 0;
  }
`

// Ett band i full bredd. tone="light" låser bandet i ljust tema och målar egen bakgrund.
export const Section = ({ tone = "default", children, className }: SectionProps) => (
  <StyledSection
    $tone={tone}
    data-theme={tone === "light" ? "light" : undefined}
    className={className}
  >
    <Container>{children}</Container>
  </StyledSection>
)
