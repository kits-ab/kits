import { Typography } from "@kits-ab/kits-ui"
import { types } from "@kokitotsos/react-components"
import { format, parseISO } from "date-fns"
import { sv } from "date-fns/locale"
import * as React from "react"
import styled from "styled-components"

import { Prose } from "./Prose"
import { Stack } from "./Stack"

export interface ArticleViewProps {
  title: string
  // Datum i ISO-format, som fields.date i innehållet.
  date: string
  authors: types.Person[]
  // Blogginlägg visar första författarens porträtt, nyheter gör det inte.
  showAvatar?: boolean
  html: string
}

const Header = styled.header`
  display: flex;
  gap: var(--spacing-24);
  align-items: center;
`

// Inläggets egen rubrik är h2, så rubrikerna i texten tas ett steg ned i storlek.
const Body = styled(Prose)`
  h2 {
    font-size: var(--type-h3-size);
    line-height: var(--type-h3-line);
  }

  h3 {
    font-size: var(--type-subtitle-size);
    line-height: var(--type-subtitle-line);
  }
`

const Avatar = styled.img`
  flex: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`

// Ett blogginlägg eller en nyhet: rubrik, datum och författare, och texten.
export const ArticleView = ({
  title,
  date,
  authors,
  showAvatar = false,
  html
}: ArticleViewProps) => {
  const avatar = showAvatar ? authors.find((author) => author.avatarSrc) : undefined
  return (
    <article>
      <Stack $gap={40}>
        <Header>
          {avatar && <Avatar src={avatar.avatarSrc} srcSet={avatar.avatarSrcSet} alt="" />}
          <Stack $gap={8}>
            <Typography variant="h2" as="h2">
              {title}
            </Typography>
            <Typography variant="mono" color="brand">
              <time dateTime={date}>{format(parseISO(date), "d MMMM yyyy", { locale: sv })}</time>
              {authors.length > 0 && ` · ${authors.map((author) => author.name).join(", ")}`}
            </Typography>
          </Stack>
        </Header>
        <Body html={html} />
      </Stack>
    </article>
  )
}
