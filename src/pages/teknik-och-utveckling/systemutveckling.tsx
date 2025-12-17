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

const SystemutvecklingPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="Systemutveckling">
        <meta
          name="description"
          content="Vi utvecklar moderna, skalbara och säkra digitala lösningar. Våra experter inom systemutveckling hjälper er med arkitektur, frontend, backend och molntjänster."
        />
      </Helmet>
      <Vertical spacing={spacing.large}>
        <MainHeading>Systemutveckling</MainHeading>
        <Lead>
          Vi utvecklar moderna, skalbara och hållbara digitala lösningar. Våra utvecklare arbetar
          med moderna ramverk, robusta arkitekturer och pragmatiska arbetssätt för att skapa system
          som är enkla att använda, vidareutveckla och integrera i komplexa miljöer.
        </Lead>

        <Vertical spacing={spacing.medium}>
          <ContentHeading>Det här kan vi hjälpa er med</ContentHeading>
          <Text>
            <p>
              Vi bygger allt från webbtjänster och API:er till cloud-native plattformar och mobila
              applikationer. Våra team består av frontend-, backend- och fullstackutvecklare som
              behärskar moderna teknikstackar och tar ansvar för hela utvecklingskedjan.
            </p>
            <p>
              Vi arbetar enligt principen Keep IT Simple, lösningar ska vara tydliga,
              välstrukturerade och baserade på beprövade mönster. Samtidigt integrerar vi Keep IT
              Secure i varje del av utvecklingen, från design till leverans.
            </p>
          </Text>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <ContentHeading>Vår kompetens innefattar:</ContentHeading>
          <Text>
            <ul>
              <li>Frontend, backend och fullstack</li>
              <li>API- och mikrotjänstutveckling</li>
              <li>Cloud-native system i AWS och Azure</li>
              <li>Webbtjänster och digitala plattformar</li>
              <li>Mobilapplikationer</li>
              <li>Modernisering av befintliga system</li>
            </ul>
          </Text>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <ContentHeading>Vad ni kan förvänta er</ContentHeading>
          <Text>
            <p>
              Vi arbetar tätt tillsammans med kundens team, tar stort ansvar för kvalitet och lägger
              stor vikt vid enkelhet, stabilitet och långsiktig hållbarhet i arkitektur och
              implementation.
            </p>
          </Text>
        </Vertical>
      </Vertical>
    </DefaultLayout>
  )
}

export default SystemutvecklingPage
