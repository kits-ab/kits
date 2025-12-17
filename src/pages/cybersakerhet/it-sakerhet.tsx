import {
  ContentHeading,
  Horizontal,
  Lead,
  MainHeading,
  SectionHeading,
  spacing,
  Text,
  types,
  Vertical,
  width
} from "@kokitotsos/react-components"
import { Link } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"

import { DefaultLayout } from "../../layouts/DefaultLayout"
import { PageProps } from "../../types/PageProps"

const ITSecurityPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="IT-säkerhet">
        <meta
          name="description"
          content="Vi stärker er IT-säkerhet genom penetrationstestning, kodgranskning, säker arkitektur och utbildning. Skydda era applikationer och molnmiljöer med KITS."
        />
      </Helmet>
      <Vertical spacing={spacing.large}>
        <MainHeading>IT-säkerhet</MainHeading>
        <Lead>
          Vi hjälper organisationer att stärka säkerheten i sina IT-miljöer genom
          penetrationstestning, säker design, kodgranskningar och utbildningar. Fokus ligger på att
          identifiera sårbarheter, förbättra arkitektur och integrera säkerhet i
          utvecklingsprocessen. Nedan hittar du våra tjänster inom IT-säkerhet.
        </Lead>

        <Horizontal
          breakpoint={width.tablet}
          distribute={true}
          spacing={spacing.large}
          alignVertical={types.Alignment.Start}
        >
          <Vertical spacing={spacing.small}>
            <ContentHeading>Vad vi gör</ContentHeading>
            <Text>
              <ul>
                <li>Penetrationstestning</li>
                <li>Kodgranskning och kvalitetssäkring</li>
                <li>Säker systemdesign och arkitektur</li>
                <li>Utbildning och kompetensstöd</li>
              </ul>
            </Text>
          </Vertical>

          <Vertical spacing={spacing.small}>
            <ContentHeading>Områden vi arbetar inom</ContentHeading>
            <Text>
              <p>Programvara och moln</p>
              <ul>
                <li>Applikationssäkerhet / Mobilsäkerhet</li>
                <li>Molnsäkerhet (AWS och Azure)</li>
              </ul>
              <p>Utrustning och system</p>
              <ul>
                <li>Säkerhet för uppkopplade enheter (IoT)</li>
                <li>Säkerhet i inbyggda system</li>
                <li>Fordonssäkerhet</li>
              </ul>
            </Text>
          </Vertical>
        </Horizontal>

        <Vertical spacing={spacing.small} style={{ marginTop: spacing.large }}>
          <SectionHeading>Paketerade erbjudanden</SectionHeading>
          <Text>
            <p>
              Våra paketerade erbjudanden är tydligt avgränsade tjänster med definierat innehåll,
              metodik och leveransformat. De är framtagna för att snabbt ge er konkreta resultat,
              oavsett om ni behöver testa säkerheten i ett system, stärka skyddet i en driftkritisk
              miljö eller höja kompetensen i utvecklingsteamet.
            </p>
          </Text>
        </Vertical>

        <Horizontal
          breakpoint={width.tablet}
          distribute={true}
          spacing={spacing.large}
          alignVertical={types.Alignment.Start}
        >
          <Vertical spacing={spacing.small}>
            <Link to="/cybersakerhet/pentest" style={{ textDecoration: "none", color: "inherit" }}>
              <ContentHeading>Pentest</ContentHeading>
            </Link>
            <Text>
              <p>
                Penetrationstestning av webbapplikationer, API:er, molnmiljöer, IoT-enheter och
                andra digitala system.
              </p>
            </Text>
          </Vertical>

          <Vertical spacing={spacing.small}>
            <Link
              to="/cybersakerhet/utbildning-applikationssakerhet"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ContentHeading>Utbildning i applikationssäkerhet</ContentHeading>
            </Link>
            <Text>
              <p>
                En praktiskt inriktad utbildning som lär utvecklare, arkitekter och DevOps-team att
                förebygga sårbarheter och arbeta säkerhetsmedvetet i hela utvecklingskedjan.
              </p>
            </Text>
          </Vertical>
        </Horizontal>
      </Vertical>
    </DefaultLayout>
  )
}

export default ITSecurityPage
