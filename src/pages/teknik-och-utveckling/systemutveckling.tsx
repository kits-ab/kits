import { Breakout, Lead, MainHeading, spacing, Text, Vertical } from "@kokitotsos/react-components"
import * as React from "react"
import { Helmet } from "react-helmet"

import { DefaultLayout } from "../../layouts/DefaultLayout"
import { PageProps } from "../../types/PageProps"

const SystemutvecklingPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="Systemutveckling" />
      <Vertical spacing={spacing.large}>
        <MainHeading>Systemutveckling</MainHeading>
        <Lead>Vi bygger robusta system.</Lead>
        <Text>Innehåll kommer snart.</Text>
      </Vertical>
    </DefaultLayout>
  )
}

export default SystemutvecklingPage
