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

const IntegrationPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="Integration">
        <meta
          name="description"
          content="Vi skapar stabila och säkra integrationslösningar som får era system att samverka. Expertis inom API-utveckling, integrationsarkitektur och molnintegrationer."
        />
      </Helmet>
      <Vertical spacing={spacing.large}>
        <MainHeading>Integration</MainHeading>
        <Lead>
          Vi skapar stabila, säkra och effektiva integrationslösningar som får era system att
          kommunicera. Våra integrationsspecialister hjälper organisationer att bygga datadrivna
          flöden, robusta API:er och moderna integrationsarkitekturer.
        </Lead>

        <Vertical spacing={spacing.medium}>
          <ContentHeading>Det här erbjuder vi</ContentHeading>
          <Text>
            <p>
              Vi utvecklar integrationer mellan affärssystem, plattformar och applikationer med
              hjälp av moderna tekniker, molntjänster och beprövade mönster. Oavsett om ni behöver
              API-utveckling, middleware, ETL-flöden eller molnintegrationer arbetar vi strukturerat
              och transparent genom hela processen.
            </p>
            <p>
              Med Keep IT Simple fokuserar vi på begriplig arkitektur och långsiktig förvaltbarhet.
              Med Keep IT Secure säkerställer vi att dataflöden och API:er följer branschens
              säkerhetskrav.
            </p>
          </Text>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <ContentHeading>Vår integrationskompetens omfattar</ContentHeading>
          <Text>
            <ul>
              <li>API-design och API-utveckling</li>
              <li>Systemintegration och middleware</li>
              <li>ERP- och CRM-integrationer</li>
              <li>Dataflöden och ETL-processer</li>
              <li>Integrationer i AWS och Azure</li>
              <li>Eventbaserad arkitektur (Kafka, SNS/SQS m.fl.)</li>
            </ul>
          </Text>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <ContentHeading>Värdet för er organisation</ContentHeading>
          <Text>
            <p>
              Ni får integrationslösningar som är stabila, dokumenterade, skalbara och säkra, som
              stödjer både dagens och framtidens behov.
            </p>
          </Text>
        </Vertical>
      </Vertical>
    </DefaultLayout>
  )
}

export default IntegrationPage
