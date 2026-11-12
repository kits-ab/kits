import {
  addMonths,
  addYears,
  differenceInDays,
  isBefore,
  parseISO,
  startOfYear,
  subMonths
} from "date-fns"
import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { TimeslotIcon } from "./TimeslotIcon"

export interface KitsConTimelineEvent {
  href: string
  date: string
  title: string
}

export interface KitsConTimelineProps {
  events: KitsConTimelineEvent[]
  // Konferensen som visas på sidan just nu markeras.
  activeHref?: string
}

// Många konferenser får inte plats på en smal skärm, så tidslinjen skrollar i sidled där.
const Scroller = styled.nav`
  overflow-x: auto;
  padding: var(--spacing-8) 0;
`

// Marginalen ger plats åt markörer och årtal som ligger vid linjens ändar.
const Track = styled.div`
  position: relative;
  min-width: 640px;
  height: 72px;
  margin: 0 var(--spacing-32);

  &::before {
    content: "";
    position: absolute;
    top: 32px;
    right: 0;
    left: 0;
    height: 1px;
    background-color: var(--border-default);
  }
`

const Marker = styled(Link)`
  position: absolute;
  top: 6px;
  display: flex;
  padding: var(--spacing-4);
  color: var(--text-secondary);
  transform: translateX(-50%);
  transition:
    color 120ms ease,
    transform 120ms ease;

  &:hover,
  &[data-active="true"] {
    color: var(--text-brand);
    transform: translateX(-50%) scale(1.3);
  }

  &:focus-visible {
    outline: 3px solid var(--primary-border);
    outline-offset: 2px;
  }
`

const Year = styled.span`
  position: absolute;
  top: 32px;
  padding-top: var(--spacing-12);
  color: var(--text-secondary);
  font-family: var(--font-mono);
  font-size: var(--type-mono-size);
  transform: translateX(-50%);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 8px;
    background-color: var(--border-default);
  }
`

const toPosition = (start: Date, interval: number, date: Date) =>
  (differenceInDays(start, date) / interval) * 100

// Tidslinje över alla konferenser med en markör per konferens och årtal under linjen.
export const KitsConTimeline = ({ events, activeHref }: KitsConTimelineProps) => {
  const sorted = [...events]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((event) => ({ ...event, parsed: parseISO(event.date) }))

  if (sorted.length === 0) {
    return null
  }

  const start = subMonths(sorted[0].parsed, 2)
  const end = addMonths(sorted[sorted.length - 1].parsed, 2)
  const interval = differenceInDays(start, end)

  const years: Date[] = []
  for (let year = startOfYear(addYears(start, 1)); isBefore(year, end); year = addYears(year, 1)) {
    years.push(year)
  }

  return (
    <Scroller aria-label="Alla KitsCon">
      <Track>
        {sorted.map((event) => (
          <Marker
            key={event.href}
            to={event.href}
            aria-label={event.title}
            title={event.title}
            data-active={event.href === activeHref}
            aria-current={event.href === activeHref ? "true" : undefined}
            style={{ left: `${toPosition(start, interval, event.parsed)}%` }}
          >
            <TimeslotIcon type="location" size={16} />
          </Marker>
        ))}
        {years.map((year) => (
          <Year
            key={year.getFullYear()}
            aria-hidden="true"
            style={{ left: `${toPosition(start, interval, year)}%` }}
          >
            {year.getFullYear()}
          </Year>
        ))}
      </Track>
    </Scroller>
  )
}
