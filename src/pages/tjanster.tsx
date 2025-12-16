import { Breakout, Lead, MainHeading, spacing, Text, Vertical } from "@kokitotsos/react-components"
import { Link } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"

import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"

const TjansterPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="Tjänster" />
      <Vertical spacing={spacing.large}>
        <MainHeading>Våra tjänster</MainHeading>
        <Lead>
          Vi hjälper företag att utveckla, modernisera och säkra sina digitala lösningar. Vårt
          erbjudande består av två huvudområden: Teknik & utveckling och Cybersecurity. Tillsammans
          täcker de hela kedjan från systemutveckling och integration till avancerade
          säkerhetsgranskningar och skydd av verksamhetskritiska miljöer. Utforska våra tjänster
          nedan för att se hur vi kan stärka er organisation.
        </Lead>

        <Vertical spacing={spacing.medium}>
          <Link to="/teknik-och-utveckling" style={{ textDecoration: "none", color: "inherit" }}>
            <MainHeading>Keep IT Simple – Teknik & utveckling</MainHeading>
          </Link>
          <Text>
            Vi utvecklar moderna system och digitala lösningar inom frontend, backend, cloud och
            integration. Våra konsulter stärker utvecklingsteam, driver projekt och levererar
            skalbara och långsiktigt hållbara tekniska plattformar.
          </Text>

          <Vertical spacing={spacing.small}>
            <Link
              to="/teknik-och-utveckling/systemutveckling"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Text style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Systemutveckling</Text>
            </Link>
            <Text>
              <strong>Tjänstekategorier:</strong> Frontend, Backend, Fullstack, Arkitektur
              <br />
              <strong>Områden:</strong> Webb & API, Cloud-native, Mobilappar
            </Text>
          </Vertical>

          <Vertical spacing={spacing.small}>
            <Link
              to="/teknik-och-utveckling/integration"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Text style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Integration</Text>
            </Link>
            <Text>
              <strong>Tjänstekategorier:</strong> Systemintegration, API-utveckling
              <br />
              <strong>Områden:</strong> ERP/CRM, E-handel, IoT, Molnintegrationer
            </Text>
          </Vertical>

          <Vertical spacing={spacing.small}>
            <Link
              to="/teknik-och-utveckling/projektledning"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Text style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Projektledning</Text>
            </Link>
            <Text>
              <strong>Tjänstekategorier:</strong> Projektledning, Leveransledning
              <br />
              <strong>Områden:</strong> Systemutveckling, Införandeprojekt
            </Text>
          </Vertical>
        </Vertical>

        <Vertical spacing={spacing.medium} style={{ marginTop: spacing.large }}>
          <Link to="/cybersecurity" style={{ textDecoration: "none", color: "inherit" }}>
            <MainHeading>Keep IT Secure – Cybersecurity</MainHeading>
          </Link>
          <Text>
            Vi hjälper organisationer att skydda applikationer, plattformar och verksamhetskritiska
            miljöer genom säkerhetsgranskningar, arkitekturarbete, utbildningar och specialiserade
            OT-tjänster. Vårt säkerhetserbjudande är uppdelat i tjänstekategorier och områden.
          </Text>

          <Text>
            <strong>Tjänstekategorier:</strong>
            <ul>
              <li>Penetration Testing</li>
              <li>Secure Design & Architecture</li>
              <li>OT Security Assessments & Architecture</li>
              <li>Code Review & Assurance</li>
              <li>Training & Enablement</li>
            </ul>
          </Text>

          <Text>
            <strong>Områden:</strong>
          </Text>
          <Text>
            <Link
              to="/cybersecurity/it-security"
              style={{ textDecoration: "underline", color: "inherit" }}
            >
              <em>Software & Cloud</em>
            </Link>
            <br />• Application Security / Mobile App Security
            <br />• Cloud Security (AWS & Azure)
          </Text>
          <Text>
            <em>Devices & Systems</em>
            <br />• IoT Security
            <br />• Embedded Security
            <br />• Automotive Cybersecurity
            <br />• Operational Environments
          </Text>
          <Text>
            <Link
              to="/cybersecurity/ot-security"
              style={{ textDecoration: "underline", color: "inherit" }}
            >
              <em>OT Security</em>
            </Link>
            <br />• ICS, SCADA & Critical Infrastructure
          </Text>

          <Text>
            <strong>Paketerade erbjudanden:</strong>
            <ul>
              <li>
                <Link to="/cybersecurity/pentest">Pentest</Link>
              </li>
              <li>
                <Link to="/cybersecurity/ot-security">OT Security</Link>
              </li>
              <li>
                <Link to="/cybersecurity/appsec-training">Utbildning i applikationssäkerhet</Link>
              </li>
            </ul>
          </Text>
        </Vertical>
      </Vertical>
    </DefaultLayout>
  )
}

export default TjansterPage
