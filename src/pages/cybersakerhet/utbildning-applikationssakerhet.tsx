import {
  ContentHeading,
  Lead,
  MainHeading,
  spacing,
  Text,
  Vertical
} from "@kokitotsos/react-components"
import * as React from "react"
import { Helmet } from "react-helmet"

import { DefaultLayout } from "../../layouts/DefaultLayout"
import { PageProps } from "../../types/PageProps"

const AppSecTrainingPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="Utbildning i applikationssäkerhet">
        <meta
          name="description"
          content="Lär er bygga säkra applikationer med vår utbildning baserad på OWASP Top 10 och ASVS. Praktisk träning för utvecklare och DevOps-team."
        />
      </Helmet>
      <Vertical spacing={spacing.large}>
        <MainHeading>Utbildning i applikationssäkerhet</MainHeading>
        <Lead>
          En praktisk utbildning för utvecklare, arkitekter och DevOps-team som vill lära sig
          identifiera, förstå och förebygga sårbarheter i moderna applikationer.
        </Lead>

        <Vertical spacing={spacing.medium}>
          <Text>
            <p>
              Vi erbjuder en praktiskt inriktad kurs i applikationssäkerhet där deltagarna lär sig
              att identifiera, förstå och förebygga vanliga sårbarheter i moderna applikationer.
              Utbildningen baseras på OWASP ASVS och OWASP Top 10 och täcker secure coding, threat
              modeling och hur säkerhet integreras i hela utvecklingsprocessen.
            </p>
          </Text>
          <Text>
            <p>
              Kursen riktar sig till utvecklare, tekniska ledare och DevOps-team som vill stärka
              sitt säkerhetsarbete och skapa robusta och säkra applikationer från start.
            </p>
          </Text>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <ContentHeading>Vad utbildningen innehåller</ContentHeading>
          <Text>
            <ul>
              <li>Genomgång av OWASP ASVS och OWASP Top 10</li>
              <li>Identifiering och exploatering av vanliga sårbarheter</li>
              <li>Secure coding-principer</li>
              <li>Threat modeling</li>
              <li>Säkerhet genom hela SDLC</li>
              <li>Praktiska övningar och hands-on moment</li>
            </ul>
          </Text>
        </Vertical>
      </Vertical>
    </DefaultLayout>
  )
}

export default AppSecTrainingPage
