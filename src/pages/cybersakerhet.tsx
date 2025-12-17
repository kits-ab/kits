import {
  Breakout,
  DevelopmentIcon,
  Horizontal,
  Lead,
  MainHeading,
  Offer,
  OfferType,
  SecurityIcon,
  spacing,
  types,
  Vertical,
  width,
  Wrapper
} from "@kokitotsos/react-components"
import { Link } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"

const StyledHorizontal = styled(Horizontal)`
  margin-left: ${-spacing.large}px;
  margin-right: ${-spacing.large}px;
  padding: 25px 0;
`

const StyledOffer = styled(Offer)`
  width: 50%;

  @media (max-width: ${width.tablet}px) {
    width: 100%;

    > * {
      padding-left: 55px;
      padding-right: 55px;
    }
  }
`

const CybersecurityPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="Cybersäkerhet" />
      <Vertical spacing={spacing.large}>
        <MainHeading>Cybersäkerhet</MainHeading>
        <Lead>
          Vi hjälper organisationer att skydda applikationer, plattformar och verksamhetskritiska
          miljöer. Vårt säkerhetserbjudande omfattar säkerhetsgranskningar, arkitekturstöd,
          utbildningar och specialiserade tjänster för både IT- och OT-miljöer. Nedan finner du en
          översikt av våra tjänstekategorier och områden.
        </Lead>

        <Breakout style={{ overflowX: "hidden" }}>
          <Wrapper>
            <StyledHorizontal wrapRows={true} alignVertical={types.Alignment.Start}>
              <Link
                to="/cybersakerhet/it-sakerhet"
                style={{ textDecoration: "none", color: "inherit", display: "contents" }}
              >
                <StyledOffer
                  heading="IT-säkerhet"
                  icon={<DevelopmentIcon />}
                  type={OfferType.Type1}
                  zIndex={3}
                >
                  <p>
                    Vi hjälper organisationer att stärka säkerheten i sina IT-miljöer genom
                    penetrationstestning, säker design, kodgranskningar och utbildningar. Vårt fokus
                    ligger på att identifiera och åtgärda sårbarheter i både mjukvara och system,
                    från webb och moln till inbyggda enheter.
                  </p>
                </StyledOffer>
              </Link>

              <Link
                to="/cybersakerhet/ot-sakerhet"
                style={{ textDecoration: "none", color: "inherit", display: "contents" }}
              >
                <StyledOffer
                  heading="OT-säkerhet"
                  icon={<SecurityIcon />}
                  type={OfferType.Type2}
                  zIndex={2}
                >
                  <p>
                    Vi säkrar industriella styrsystem och driftskritisk infrastruktur utan att
                    påverka tillgängligheten. Våra experter granskar arkitektur, nätverk och
                    komponenter i OT-, ICS- och SCADA-miljöer för att säkerställa motståndskraft mot
                    cyberhot.
                  </p>
                </StyledOffer>
              </Link>
            </StyledHorizontal>
          </Wrapper>
        </Breakout>
      </Vertical>
    </DefaultLayout>
  )
}

export default CybersecurityPage
