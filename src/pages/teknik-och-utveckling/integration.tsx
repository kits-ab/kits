import { Breakout, Lead, MainHeading, spacing, Text, Vertical } from "@kokitotsos/react-components"
import * as React from "react"
import { Helmet } from "react-helmet"

import { DefaultLayout } from "../../layouts/DefaultLayout"
import { PageProps } from "../../types/PageProps"

const IntegrationPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="Integration" />
      <Vertical spacing={spacing.large}>
        <MainHeading>Integration</MainHeading>
        <Lead>Vi kopplar ihop dina system.</Lead>
        <Text>Innehåll kommer snart.</Text>
      </Vertical>
    </DefaultLayout>
  )
}

export default IntegrationPage
