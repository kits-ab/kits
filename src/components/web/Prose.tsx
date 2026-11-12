import * as React from "react"
import styled from "styled-components"

import { readableMaxWidth } from "./layout"

export interface ProseProps {
  html: string
  className?: string
}

// Brödtext från Markdown. Typografin kommer från kits-ui:s typografitokens, eftersom
// Typography-komponenten inte kan användas på rå HTML.
const StyledProse = styled.div`
  max-width: ${readableMaxWidth}px;
  color: var(--text-secondary);
  font-size: var(--type-body-size);
  line-height: var(--type-body-line);

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }

  h2,
  h3 {
    margin: var(--spacing-48) 0 var(--spacing-16);
    color: var(--text-primary);
  }

  h2 {
    font-size: var(--type-h2-size);
    line-height: var(--type-h2-line);
    font-weight: 700;
  }

  h3 {
    font-size: var(--type-h3-size);
    line-height: var(--type-h3-line);
    font-weight: 400;
  }

  p,
  ul,
  ol {
    margin: 0 0 var(--spacing-16);
  }

  ul,
  ol {
    padding-left: var(--spacing-24);
  }

  li + li {
    margin-top: var(--spacing-8);
  }

  strong {
    color: var(--text-primary);
  }

  a {
    color: var(--text-brand);
    text-underline-offset: 0.16em;
  }

  a:focus-visible {
    outline: 3px solid var(--primary-border);
    outline-offset: 3px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  code {
    font-family: var(--font-mono);
    font-size: 0.9em;
  }

  pre {
    overflow-x: auto;
    padding: var(--spacing-16);
    margin: 0 0 var(--spacing-16);
    background-color: var(--bg-surface);
    border: 1px solid var(--border-default);
  }

  .token.comment {
    color: var(--text-secondary);
  }

  .token.keyword,
  .token.tag {
    color: var(--text-brand);
  }

  .token.string,
  .token.attr-value {
    color: var(--status-success-text);
  }

  .token.number,
  .token.boolean {
    color: var(--text-accent);
  }

  .token.function,
  .token.class-name {
    color: var(--status-info-text);
  }
`

export const Prose = ({ html, className }: ProseProps) => (
  <StyledProse className={className} dangerouslySetInnerHTML={{ __html: html }} />
)
