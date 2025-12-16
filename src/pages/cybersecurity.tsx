import { Breakout, Lead, MainHeading, spacing, Text, Vertical } from "@kokitotsos/react-components"
import { Link } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"

import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"

const CybersecurityPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="Cybersecurity" />
      <Vertical spacing={spacing.large}>
        <MainHeading>Cybersecurity</MainHeading>
        <Lead>
          Vi hjälper organisationer att skydda applikationer, plattformar och verksamhetskritiska
          miljöer. Vårt säkerhetserbjudande omfattar säkerhetsgranskningar, arkitekturstöd,
          utbildningar och specialiserade tjänster för både IT- och OT-miljöer. Nedan finner du en
          översikt av våra tjänstekategorier, områden och paketerade erbjudanden.
        </Lead>

        <Vertical spacing={spacing.medium} style={{ marginTop: spacing.large }}>
          <MainHeading>Tjänstekategorier</MainHeading>
          <Text>
            <ul>
              <li>Penetration Testing</li>
              <li>Secure Design & Architecture</li>
              <li>OT Security Assessments & Architecture</li>
              <li>Code Review & Assurance</li>
              <li>Training & Enablement</li>
            </ul>
          </Text>
          <Text>
            Dessa kategorier beskriver de huvudsakliga typer av tjänster vi utför inom
            cybersäkerhet. De fungerar som grunden för våra uppdrag och säkerhetsgranskningar.
          </Text>
        </Vertical>

        <Vertical spacing={spacing.medium} style={{ marginTop: spacing.large }}>
          <MainHeading>Områden</MainHeading>

          <Link
            to="/cybersecurity/it-security"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Text style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Software & Cloud</Text>
          </Link>
          <Text>
            • Application Security / Mobile App Security
            <br />• Cloud Security (AWS & Azure)
          </Text>

          <Text style={{ fontWeight: "bold", fontSize: "1.2rem", marginTop: spacing.small }}>
            Devices & Systems
          </Text>
          <Text>
            • IoT Security
            <br />• Embedded Security
            <br />• Automotive Cybersecurity
            <br />• Operational Environments
          </Text>

          <Link
            to="/cybersecurity/ot-security"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Text style={{ fontWeight: "bold", fontSize: "1.2rem", marginTop: spacing.small }}>
              OT Security
            </Text>
          </Link>
          <Text>• ICS, SCADA & Critical Infrastructure</Text>

          <Text style={{ marginTop: spacing.small }}>
            Dessa områden visar var vi verkar tekniskt – från klassiska IT-miljöer till avancerade
            embedded-system och industriella driftmiljöer.
          </Text>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <MainHeading>Paketerade erbjudanden</MainHeading>

          <Vertical spacing={spacing.small}>
            <Link to="/cybersecurity/pentest" style={{ textDecoration: "none", color: "inherit" }}>
              <Text style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Pentest</Text>
            </Link>
            <Text>
              Manuell och automatiserad penetrationstestning av applikationer, molnmiljöer,
              IoT-enheter och andra system.
            </Text>
            <Link to="/cybersecurity/pentest">Läs mer →</Link>
          </Vertical>

          <Vertical spacing={spacing.small}>
            <Link
              to="/cybersecurity/ot-security"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Text style={{ fontWeight: "bold", fontSize: "1.2rem" }}>OT Security</Text>
            </Link>
            <Text>
              Granskning och säkerhetsbedömning av industriella styrsystem, ICS/SCADA-miljöer och
              annan verksamhetskritisk infrastruktur.
            </Text>
            <Link to="/cybersecurity/ot-security">Läs mer →</Link>
          </Vertical>

          <Vertical spacing={spacing.small}>
            <Link
              to="/cybersecurity/appsec-training"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Text style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                Utbildning i applikationssäkerhet
              </Text>
            </Link>
            <Text>
              En praktiskt inriktad utbildning baserad på OWASP ASVS och OWASP Top 10, riktad till
              utvecklingsteam och arkitekter.
            </Text>
            <Link to="/cybersecurity/appsec-training">Läs mer →</Link>
          </Vertical>
        </Vertical>
      </Vertical>
    </DefaultLayout>
  )
}

export default CybersecurityPage
