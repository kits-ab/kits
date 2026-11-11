import { KitsLogo, Typography } from "@kits-ab/kits-ui"
import * as React from "react"
import styled from "styled-components"

import { onMobile } from "./layout"

export interface SiteFooterProps {
  name: string
  street: string
  postalCode: string
  city: string
  email: string
}

const StyledFooter = styled.footer`
  margin-top: var(--spacing-80);
  background: radial-gradient(
    ellipse at 50% 0%,
    color-mix(in srgb, var(--bg-brand) 18%, transparent),
    transparent 60%
  );
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-32);
  padding: var(--spacing-48) var(--spacing-56);
  border-top: 1px solid var(--border-default);

  ${onMobile} {
    flex-direction: column;
    align-items: flex-start;
    padding: var(--spacing-32) 0;
  }
`

const Gutter = styled.div`
  padding: 0 var(--spacing-32);

  ${onMobile} {
    padding: 0 var(--spacing-16);
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--spacing-16);
  text-align: right;

  ${onMobile} {
    align-items: flex-start;
    text-align: left;
  }
`

const Address = styled(Typography)`
  font-style: normal;
  line-height: 1.8;
`

const MonoLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;

  &:hover {
    color: var(--text-brand);
  }

  &:focus-visible {
    outline: 3px solid var(--primary-border);
    outline-offset: 3px;
  }
`

export const SiteFooter = ({ name, street, postalCode, city, email }: SiteFooterProps) => (
  <StyledFooter>
    <Gutter>
      <Inner>
        <KitsLogo variant="secure" width={104} />
        <Details>
          <Address variant="mono" forwardedAs="address">
            {name} · {street} · {postalCode} {city}
          </Address>
          <Typography variant="mono" as="p">
            <MonoLink href={`mailto:${email}`}>{email}</MonoLink>
          </Typography>
        </Details>
      </Inner>
    </Gutter>
  </StyledFooter>
)
