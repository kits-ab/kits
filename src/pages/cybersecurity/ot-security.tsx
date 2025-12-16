import { Breakout, Lead, MainHeading, spacing, Text, Vertical } from "@kokitotsos/react-components"
import * as React from "react"
import { Helmet } from "react-helmet"

import { DefaultLayout } from "../../layouts/DefaultLayout"
import { PageProps } from "../../types/PageProps"

const OTSecurityPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="OT Security" />
      <Vertical spacing={spacing.large}>
        <MainHeading>OT Security</MainHeading>
        <Lead>
          Vi hjälper verksamheter att skydda industriella styrsystem, produktion och samhällsviktig
          infrastruktur. Våra konsulter arbetar med säkerhetsgranskningar, riskbedömningar och
          arkitektur för OT-, ICS- och SCADA-miljöer där driftsäkerhet och kontinuitet är avgörande.
        </Lead>

        <Vertical spacing={spacing.medium}>
          <MainHeading>OT Security – tjänstebeskrivning</MainHeading>
          <Text>
            Våra konsulter fokuserar på säkerhet i OT- och ICS/SCADA-miljöer genom att granska
            arkitektur, nätverkssegmentering, industriella protokoll och sårbarheter i styrsystemens
            komponenter. Analyserna genomförs med full insyn i systemens konfiguration och processer
            för att möjliggöra säkra och driftsäkra granskningar utan påverkan på produktionen.
          </Text>
          <Text>
            Arbetet anpassas till relevanta regelverk och standarder såsom NIS2, IEC 62443 och krav
            för samhällsviktig verksamhet, inklusive industriella styrsystem, kritisk infrastruktur
            och andra driftkritiska miljöer.
          </Text>
        </Vertical>

        <Vertical spacing={spacing.medium} style={{ marginTop: spacing.large }}>
          <MainHeading>Vad vi gör inom OT Security</MainHeading>
          <Text>
            <ul>
              <li>OT Security Assessments & Architecture</li>
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
          <MainHeading>OT Security – områden vi arbetar inom</MainHeading>
          <Text>
            <ul>
              <li>ICS (Industrial Control Systems)</li>
              <li>SCADA-system</li>
              <li>DCS (Distributed Control Systems)</li>
              <li>Industriella nätverk och kritiska protokoll</li>
              <li>Produktionsanläggningar och driftmiljöer</li>
              <li>Samhällsviktig infrastruktur</li>
            </ul>
          </Text>
        </Vertical>
      </Vertical>
    </DefaultLayout>
  )
}

export default OTSecurityPage
