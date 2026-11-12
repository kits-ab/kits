import { Typography } from "@kokitotsos/kits-ui"
import { format, isSameDay, parseISO } from "date-fns"
import { sv } from "date-fns/locale"
import * as React from "react"
import styled from "styled-components"

import { onMobile } from "./layout"
import { LocationMap } from "./LocationMap"
import { Prose } from "./Prose"
import { Stack } from "./Stack"
import { TextLink } from "./TextLink"
import { TimeslotIcon } from "./TimeslotIcon"
import { MarkdownRemarkFrontmatterSchema } from "../../../gatsby-types"
import type { Person } from "../../types/Person"
import { formatWeekday } from "../../utils/dateUtils"
import { toHTML } from "../../utils/markdownUtils"
import { findPersonsByIds } from "../../utils/personUtils"

export interface KitsConScheduleProps {
  schema: MarkdownRemarkFrontmatterSchema[]
  persons: Person[]
}

interface Presenter {
  name: string
  href?: string
  avatarSrc?: string
  avatarSrcSet?: string
}

const slotGap = 24

const isPresentation = (type?: string) => type === "presentation" || type === "externalpresentation"

const formatTime = (time: string) => format(parseISO(time), "HH:mm", { locale: sv })

const Day = styled.section`
  & + & {
    margin-top: var(--spacing-96);
  }
`

const Slots = styled.ol`
  display: flex;
  flex-direction: column;
  gap: ${slotGap}px;
  margin: var(--spacing-32) 0 0;
  padding: 0;
  list-style: none;
`

const Slot = styled.li<{ $presentation: boolean; $connected: boolean }>`
  position: relative;
  border: 1px solid var(--border-dark);
  border-radius: var(--radius-sm);

  /* Samma 12 % som korten, så att lila text klarar 4,5:1. */
  background-color: ${({ $presentation }) =>
    $presentation ? "color-mix(in srgb, var(--bg-brand) 12%, transparent)" : "var(--bg-surface)"};

  /* Poster som följer direkt på varandra kopplas ihop med ett streck vid tiderna. */
  &::before {
    display: ${({ $connected }) => ($connected ? "block" : "none")};
    content: "";
    position: absolute;
    right: var(--spacing-56);
    bottom: 100%;
    width: 2px;
    height: ${slotGap}px;
    background-color: var(--border-brand);
  }

  ${onMobile} {
    &::before {
      right: var(--spacing-40);
    }
  }
`

const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--spacing-24);
  align-items: center;
  padding: var(--spacing-24) var(--spacing-40);

  ${onMobile} {
    gap: var(--spacing-16);
    padding: var(--spacing-16) var(--spacing-20);
  }
`

const IconBox = styled.div`
  display: flex;
  color: var(--text-secondary);
`

const Avatar = styled.img`
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;

  ${onMobile} {
    width: 48px;
    height: 48px;
  }
`

const AvatarFallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--bg-surface);
  color: var(--text-secondary);

  ${onMobile} {
    width: 48px;
    height: 48px;
  }
`

const Times = styled.div`
  min-width: 64px;
  text-align: right;
  font-variant-numeric: tabular-nums;
`

const Body = styled.div`
  padding: var(--spacing-20) var(--spacing-40) var(--spacing-24);
  border-top: 1px solid var(--border-dark);

  ${onMobile} {
    padding: var(--spacing-16) var(--spacing-20) var(--spacing-20);
  }
`

const Video = styled.iframe`
  display: block;
  width: 100%;
  max-width: 560px;
  aspect-ratio: 16 / 9;
  border: 0;
`

const Download = styled.div`
  display: flex;
  gap: var(--spacing-8);
  align-items: center;
  color: var(--text-brand);
`

const presentersOf = (slot: MarkdownRemarkFrontmatterSchema, persons: Person[]): Presenter[] => {
  const internal = slot.presenters ? findPersonsByIds(persons, slot.presenters) : []
  if (internal.length > 0) {
    return internal
  }
  return slot.externalpresenter ? [slot.externalpresenter] : []
}

const SlotView = ({
  slot,
  persons,
  connected,
  showEndTime
}: {
  slot: MarkdownRemarkFrontmatterSchema
  persons: Person[]
  connected: boolean
  showEndTime: boolean
}) => {
  const presentation = isPresentation(slot.type)
  const presenters = presentation ? presentersOf(slot, persons) : []
  const lead = presenters[0]
  const title = slot.href ? <TextLink href={slot.href}>{slot.title}</TextLink> : slot.title
  const hasBody =
    slot.details ||
    slot.youtubeId ||
    slot.presentation ||
    (slot.location && slot.location.coordinates)

  return (
    <Slot $presentation={presentation} $connected={connected}>
      <Header>
        {presentation ? (
          lead?.avatarSrc ? (
            <Avatar src={lead.avatarSrc} srcSet={lead.avatarSrcSet} alt="" />
          ) : (
            <AvatarFallback aria-hidden="true">
              <TimeslotIcon type="workshop" size={24} />
            </AvatarFallback>
          )
        ) : (
          <IconBox>
            <TimeslotIcon type={slot.type ?? "location"} />
          </IconBox>
        )}
        <Stack $gap={4}>
          {presenters.length > 0 && (
            <Typography variant="mono" color="brand">
              {presenters.map((presenter, index) => (
                <React.Fragment key={presenter.name}>
                  {index > 0 && ", "}
                  {presenter.href ? (
                    <TextLink href={presenter.href}>{presenter.name}</TextLink>
                  ) : (
                    presenter.name
                  )}
                </React.Fragment>
              ))}
            </Typography>
          )}
          <Typography variant={presentation ? "h3" : "subtitle"} as="h3">
            {title}
          </Typography>
        </Stack>
        <Times>
          <Typography variant="subtitle" as="div">
            <time dateTime={slot.start}>{formatTime(slot.start)}</time>
          </Typography>
          {showEndTime && slot.end && (
            <Typography variant="body" color="secondary" as="div">
              till <time dateTime={slot.end}>{formatTime(slot.end)}</time>
            </Typography>
          )}
        </Times>
      </Header>
      {hasBody && (
        <Body>
          <Stack $gap={16}>
            {slot.details && <Prose html={toHTML(slot.details)} />}
            {slot.youtubeId && (
              <Video
                src={`https://www.youtube.com/embed/${slot.youtubeId}`}
                title={`Video: ${slot.title}`}
                loading="lazy"
                allowFullScreen
              />
            )}
            {slot.presentation && (
              <Download>
                <TimeslotIcon type="attachment" size={16} />
                <TextLink href={slot.presentation}>Ladda ner presentation</TextLink>
              </Download>
            )}
          </Stack>
        </Body>
      )}
      {slot.location && slot.location.coordinates && (
        <LocationMap
          coordinates={slot.location.coordinates as number[]}
          title={slot.location.title ?? undefined}
        />
      )}
    </Slot>
  )
}

// Konferensens schema, en rubrik per dag. Poster där en slutar när nästa börjar kopplas ihop
// och den förstas sluttid döljs.
export const KitsConSchedule = ({ schema, persons }: KitsConScheduleProps) => {
  const days: MarkdownRemarkFrontmatterSchema[][] = []
  schema.forEach((slot) => {
    const day = days[days.length - 1]
    if (day && isSameDay(parseISO(day[0].start), parseISO(slot.start))) {
      day.push(slot)
    } else {
      days.push([slot])
    }
  })

  return (
    <div>
      {days.map((day) => (
        <Day key={day[0].start}>
          <Typography variant="h2" as="h2">
            {formatWeekday(day[0].start)}
          </Typography>
          <Slots>
            {day.map((slot, index) => (
              <SlotView
                key={slot.start}
                slot={slot}
                persons={persons}
                connected={index > 0 && day[index - 1].end === slot.start}
                showEndTime={index === day.length - 1 || day[index + 1].start !== slot.end}
              />
            ))}
          </Slots>
        </Day>
      ))}
    </div>
  )
}
