import { Breakout, Lead, MainHeading, spacing, Text, Vertical } from "@kokitotsos/react-components"
import { Link } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"

import { DefaultLayout } from "../../layouts/DefaultLayout"
import { PageProps } from "../../types/PageProps"

const ITSecurityPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="IT Security" />
      <Vertical spacing={spacing.large}>
        <MainHeading>IT Security</MainHeading>
        <Lead>
          Vi hjälper organisationer att stärka säkerheten i sina IT-miljöer genom
          penetrationstestning, säker design, kodgranskningar och utbildningar. Fokus ligger på att
          identifiera sårbarheter, förbättra arkitektur och integrera säkerhet i
          utvecklingsprocessen. Nedan hittar du våra tjänster inom IT-säkerhet.
        </Lead>

        <Vertical spacing={spacing.medium}>
          <Link to="/cybersecurity/pentest" style={{ textDecoration: "none", color: "inherit" }}>
            <MainHeading>Pentest</MainHeading>
          </Link>
          <Text>
            Penetrationstestning av webbapplikationer, API:er, molnmiljöer, IoT-enheter och andra
            digitala system.
          </Text>
          <Link to="/cybersecurity/pentest">Läs mer →</Link>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <Link
            to="/cybersecurity/appsec-training"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MainHeading>Utbildning i applikationssäkerhet</MainHeading>
          </Link>
          <Text>
            En praktiskt inriktad utbildning som lär utvecklare, arkitekter och DevOps-team att
            förebygga sårbarheter och arbeta säkerhetsmedvetet i hela utvecklingskedjan.
          </Text>
          <Link to="/cybersecurity/appsec-training">Läs mer →</Link>
        </Vertical>

        <Vertical spacing={spacing.medium} style={{ marginTop: spacing.large }}>
          <MainHeading>IT Security – våra tjänstekategorier</MainHeading>
          <Text>
            <ul>
              <li>Penetration Testing</li>
              <li>Secure Design & Architecture</li>
              <li>Code Review & Assurance</li>
              <li>Training & Enablement</li>
            </ul>
          </Text>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <MainHeading>Områden inom IT Security</MainHeading>
          <Text>
            <ul>
              <li>Application Security / Mobile App Security</li>
              <li>Cloud Security (AWS & Azure)</li>
              <li>IoT Security</li>
              <li>Embedded Security</li>
              <li>Automotive Cybersecurity</li>
            </ul>
          </Text>
        </Vertical>
      </Vertical>
    </DefaultLayout>
  )
}

export default ITSecurityPage
