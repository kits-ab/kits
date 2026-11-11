import { Typography } from "@kits-ab/kits-ui"
import * as React from "react"
import styled from "styled-components"

import { Stack } from "./Stack"
import { TextLink } from "./TextLink"

export interface ContactCardProps {
  role?: string
  name: string
  phone?: string
  email?: string
}

const Card = styled.div`
  padding: var(--card-padding);
  border: 1px solid var(--border-dark);
  border-radius: var(--radius-sm);

  /* Skissen har 20 %; 12 % behövs för att lila text (--text-brand) ska klara 4,5:1. */
  background-color: color-mix(in srgb, var(--bg-brand) 12%, transparent);
`

// Kontaktkort för en person: roll (valfri), namn, telefon och e-post.
export const ContactCard = ({ role, name, phone, email }: ContactCardProps) => (
  <Card>
    <Stack $gap={8}>
      {role && (
        <Typography variant="mono" color="brand">
          {role}
        </Typography>
      )}
      <Typography variant="subtitle" as="p">
        {name}
      </Typography>
      {phone && (
        <Typography variant="mono" color="secondary">
          {phone}
        </Typography>
      )}
      {email && (
        <Typography variant="mono">
          <TextLink href={`mailto:${email}`}>{email}</TextLink>
        </Typography>
      )}
    </Stack>
  </Card>
)
