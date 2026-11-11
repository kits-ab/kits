import * as React from "react"
import styled from "styled-components"

export interface BulletListProps {
  items: string[]
}

const List = styled.ul`
  margin: 0;
  padding-left: var(--spacing-24);
  color: var(--text-secondary);
  font-size: var(--type-body-size);
  line-height: var(--type-body-line);

  li + li {
    margin-top: var(--spacing-4);
  }
`

// Punktlista i brödtextens stil.
export const BulletList = ({ items }: BulletListProps) => (
  <List>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </List>
)
