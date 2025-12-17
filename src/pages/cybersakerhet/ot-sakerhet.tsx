import {
  Breakout,
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

const OTSecurityPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="OT-säkerhet">
        <meta
          name="description"
          content="Säkra industriella styrsystem och kritisk infrastruktur med KITS. Vi erbjuder säkerhetsgranskning, arkitekturstöd och expertis inom OT, ICS och SCADA."
        />
      </Helmet>
      <Vertical spacing={spacing.large}>
        <MainHeading>OT-säkerhet</MainHeading>
        <Lead>
          Vi hjälper verksamheter att skydda industriella styrsystem, produktion och samhällsviktig
          infrastruktur. Våra konsulter arbetar med säkerhetsgranskningar, riskbedömningar och
          arkitektur för OT-, ICS- och SCADA-miljöer där driftsäkerhet och kontinuitet är avgörande.
        </Lead>

        <Horizontal
          breakpoint={width.tablet}
          distribute={true}
          spacing={spacing.large}
          alignVertical={types.Alignment.Start}
        >
          <Vertical spacing={spacing.medium}>
            <ContentHeading>Vad vi gör</ContentHeading>
            <Text>
              <ul>
                <li>Säkerhetsgranskning och arkitektur för OT-miljöer</li>
                <li>Arkitektur-, segmenterings- och nätverksgranskningar</li>
                <li>Säkerhet i ICS/SCADA, DCS och IIoT</li>
                <li>Genomgång av industriella protokoll (Modbus, OPC-UA, DNP3 m.fl.)</li>
                <li>Identifiering av sårbarheter i styrsystem och komponenter</li>
                <li>Gap-analys mot NIS2 och IEC 62443</li>
                <li>Rekommendationer för säkerhetsnivåer och segmentering</li>
                <li>Stöd i design och förbättring av OT-säkerhetsarkitektur</li>
              </ul>
            </Text>
          </Vertical>

          <Vertical spacing={spacing.medium}>
            <ContentHeading>Områden vi arbetar inom</ContentHeading>
            <Text>
              <ul>
                <li>Industriella styrsystem (ICS)</li>
                <li>SCADA-system</li>
                <li>DCS (Distributed Control Systems)</li>
                <li>Industriella nätverk och kritiska protokoll</li>
                <li>Produktionsanläggningar och driftmiljöer</li>
                <li>Samhällsviktig infrastruktur</li>
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
            <Link
              to="/cybersakerhet/ot-sakerhetsexpert"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ContentHeading>OT Security Expert</ContentHeading>
            </Link>
            <Text>
              <p>
                Få tillgång till en dedikerad OT-säkerhetsspecialist som stöttar er i strategiska
                beslut, taktisk planering och det dagliga säkerhetsarbetet. Perfekt för
                organisationer som behöver löpande rådgivning, stöd till OT-ansvariga och vägledning
                kring NIS2, IEC 62443 och skydd av driftkritiska miljöer.
              </p>
            </Text>
          </Vertical>
        </Horizontal>
      </Vertical>
    </DefaultLayout>
  )
}

export default OTSecurityPage
