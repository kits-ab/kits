import { Icon } from "@kokitotsos/kits-ui"
import * as React from "react"
import styled from "styled-components"

import { onMobile } from "./layout"

export interface MasterDetailItem {
  id: string
  title: string
  content: React.ReactNode
}

export interface MasterDetailProps {
  items: MasterDetailItem[]
  // Tillgänglig rubrik för listan, till exempel sektionens rubrik.
  label: string
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: 5fr 6fr;
  gap: var(--spacing-80);
  align-items: start;

  ${onMobile} {
    grid-template-columns: 1fr;
    gap: var(--spacing-24);
  }
`

const List = styled.div`
  border: 1px solid var(--border-dark);
  border-radius: var(--radius-sm);
`

const Row = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--spacing-28) var(--spacing-40);
  border: 0;
  background: transparent;
  color: var(--text-primary);
  font: inherit;
  font-size: var(--type-subtitle-size);
  line-height: var(--type-subtitle-line);
  text-align: left;
  cursor: pointer;

  & + & {
    border-top: 1px solid var(--border-dark);
  }

  &[aria-selected="true"] {
    background-color: var(--bg-surface);
  }

  &:hover {
    color: var(--text-brand);
  }

  &:focus-visible {
    outline: 3px solid var(--primary-border);
    outline-offset: -3px;
  }

  svg {
    color: var(--text-brand);
  }

  ${onMobile} {
    padding: var(--spacing-20) var(--spacing-24);
  }
`

const Panel = styled.div`
  padding: var(--spacing-56) var(--spacing-64);
  border: 1px solid var(--border-dark);
  border-radius: var(--radius-sm);
  background-color: var(--bg-surface);

  ${onMobile} {
    padding: var(--spacing-32) var(--spacing-24);
  }
`

// Lista till vänster, detalj till höger. Listan är en vertikal flikgrupp: piltangenter, Home och
// End flyttar mellan raderna, och vald rad visar sin detalj. Länkar ligger i detaljen.
export const MasterDetail = ({ items, label }: MasterDetailProps) => {
  const [activeId, setActiveId] = React.useState(items[0]?.id)
  const rowRefs = React.useRef<(HTMLButtonElement | null)[]>([])
  const baseId = React.useId()
  const active = items.find((item) => item.id === activeId) ?? items[0]

  if (!active) {
    return null
  }

  const select = (index: number) => {
    setActiveId(items[index].id)
    rowRefs.current[index]?.focus()
  }

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = items.length - 1
    const next = {
      ArrowDown: index === last ? 0 : index + 1,
      ArrowUp: index === 0 ? last : index - 1,
      Home: 0,
      End: last
    }[event.key]
    if (next !== undefined) {
      event.preventDefault()
      select(next)
    }
  }

  return (
    <Layout>
      <List role="tablist" aria-orientation="vertical" aria-label={label}>
        {items.map((item, index) => {
          const selected = item.id === active.id
          return (
            <Row
              key={item.id}
              ref={(el) => {
                rowRefs.current[index] = el
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(item.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {item.title}
              {selected && (
                <span aria-hidden="true">
                  <Icon variant="arrow-forward" size="small" />
                </span>
              )}
            </Row>
          )
        })}
      </List>
      <Panel
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active.id}`}
        tabIndex={0}
      >
        {active.content}
      </Panel>
    </Layout>
  )
}
