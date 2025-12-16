import { Breakout, Lead, MainHeading, spacing, Text, Vertical } from "@kokitotsos/react-components"
import { Link } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"

import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"

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

        <Vertical spacing={spacing.medium}>
          <Link
            to="/teknik-och-utveckling/systemutveckling"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MainHeading>Systemutveckling</MainHeading>
          </Link>
          <Text>
            Vi utvecklar allt från webbtjänster och API:er till cloud-native lösningar och mobila
            applikationer. Våra frontend-, backend- och fullstackutvecklare arbetar med moderna
            ramverk, arkitekturer och arbetssätt för att skapa robusta och framtidssäkra system.
          </Text>
          <Link to="/teknik-och-utveckling/systemutveckling">Läs mer →</Link>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <Link
            to="/teknik-och-utveckling/integration"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MainHeading>Integration</MainHeading>
          </Link>
          <Text>
            Vi bygger och kopplar samman system genom API-utveckling, middleware, dataflöden och
            molnintegrationer. Våra integrationsspecialister hjälper er skapa stabila, säkra och
            effektiva informationsflöden mellan affärssystem, plattformar och applikationer.
          </Text>
          <Link to="/teknik-och-utveckling/integration">Läs mer →</Link>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <Link
            to="/teknik-och-utveckling/projektledning"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MainHeading>Projektledning</MainHeading>
          </Link>
          <Text>
            Vi driver tekniska projekt och införanden med fokus på struktur, leverans och kvalitet.
            Våra projektledare och leveransledare säkerställer att utvecklingsteam, produktägare och
            verksamhet arbetar mot samma mål och att lösningar implementeras framgångsrikt.
          </Text>
          <Link to="/teknik-och-utveckling/projektledning">Läs mer →</Link>
        </Vertical>
      </Vertical>
    </DefaultLayout>
  )
}

export default TeknikPage
