import styled from "styled-components"

// Lila textlänk (e-post, telefon och liknande i löptext och kort).
export const TextLink = styled.a`
  color: var(--text-brand);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.16em;
  }

  &:focus-visible {
    outline: 3px solid var(--primary-border);
    outline-offset: 3px;
  }
`
