import { Breakout, Lead, MainHeading, spacing, Text, Vertical } from "@kokitotsos/react-components"
import * as React from "react"
import { Helmet } from "react-helmet"

import { DefaultLayout } from "../../layouts/DefaultLayout"
import { PageProps } from "../../types/PageProps"

const ProjektledningPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="Projektledning" />
      <Vertical spacing={spacing.large}>
        <MainHeading>Projektledning</MainHeading>
        <Lead>Vi leder dina projekt i mål.</Lead>
        <Text>Innehåll kommer snart.</Text>
      </Vertical>
    </DefaultLayout>
  )
}

export default ProjektledningPage
