import {
  Breakout,
  DevelopmentIcon,
  Horizontal,
  IntegrationIcon,
  Lead,
  MainHeading,
  Offer,
  OfferType,
  ProjectIcon,
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

const TeknikPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="Teknik & Utveckling" />
      <Vertical spacing={spacing.large}>
        <MainHeading>Teknik & utveckling</MainHeading>
        <Lead>
          Vi hjälper organisationer att bygga moderna, skalbara och hållbara digitala lösningar.
          Våra team arbetar med systemutveckling, integrationer och teknisk projektledning och kan
          förstärka era befintliga team eller driva hela leveranser. Nedan hittar du en översikt av
          våra fokusområden och länkar vidare till respektive tjänst.
        </Lead>

        <Breakout style={{ overflowX: "hidden" }}>
          <Wrapper>
            <StyledHorizontal wrapRows={true} alignVertical={types.Alignment.Start}>
              <Link
                to="/teknik-och-utveckling/systemutveckling"
                style={{ textDecoration: "none", color: "inherit", display: "contents" }}
              >
                <StyledOffer
                  heading="Systemutveckling"
                  icon={<DevelopmentIcon />}
                  type={OfferType.Type1}
                  zIndex={3}
                >
                  <p>
                    Vi utvecklar allt från webbtjänster och API:er till cloud-native lösningar och
                    mobila applikationer. Våra frontend-, backend- och fullstackutvecklare arbetar
                    med moderna ramverk, arkitekturer och arbetssätt för att skapa robusta och
                    framtidssäkra system.
                  </p>
                </StyledOffer>
              </Link>

              <Link
                to="/teknik-och-utveckling/projektledning"
                style={{ textDecoration: "none", color: "inherit", display: "contents" }}
              >
                <StyledOffer
                  heading="Projektledning"
                  icon={<ProjectIcon />}
                  type={OfferType.Type2}
                  zIndex={1}
                >
                  <p>
                    Vi driver tekniska projekt och införanden med fokus på struktur, leverans och
                    kvalitet. Våra projektledare och leveransledare säkerställer att
                    utvecklingsteam, produktägare och verksamhet arbetar mot samma mål och att
                    lösningar implementeras framgångsrikt.
                  </p>
                </StyledOffer>
              </Link>

              <Link
                to="/teknik-och-utveckling/integration"
                style={{ textDecoration: "none", color: "inherit", display: "contents" }}
              >
                <StyledOffer
                  heading="Integration"
                  icon={<IntegrationIcon />}
                  type={OfferType.Type3}
                  zIndex={2}
                >
                  <p>
                    Vi bygger och kopplar samman system genom API-utveckling, middleware, dataflöden
                    och molnintegrationer. Våra integrationsspecialister hjälper er skapa stabila,
                    säkra och effektiva informationsflöden mellan affärssystem, plattformar och
                    applikationer.
                  </p>
                </StyledOffer>
              </Link>

              <Link
                to="/kitsstudio"
                style={{ textDecoration: "none", color: "inherit", display: "contents" }}
              >
                <StyledOffer
                  heading="KITS Studio"
                  icon={<DevelopmentIcon />}
                  type={OfferType.Type4}
                  zIndex={4}
                >
                  <p>
                    KITS Studio är en del av KITS där vi tar fram högkvalitativ mjukvara, samtidigt
                    som vi satsar helhjärtat på att utveckla våra konsulter till att bli bättre
                    systemutvecklare.
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

export default TeknikPage
