import { Button, Lead, MainHeading, spacing, Vertical } from "@kokitotsos/react-components"
import * as React from "react"
import { Helmet } from "react-helmet"

import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"

export default ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="404: Sidan hittades inte" />

      <Vertical spacing={spacing.large}>
        <MainHeading>Status 404</MainHeading>
        <Lead>
          Sidan du försöker nå finns inte. Klicka på knappen nedan för att komma tillbaka till
          startsidan igen.
        </Lead>
      </Vertical>
      <Button href="/" style={{ alignSelf: "center", maxWidth: 400 }}>
        Till startsidan
      </Button>
    </DefaultLayout>
  )
}
