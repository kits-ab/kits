import { Link } from "@kokitotsos/kits-ui"
import * as React from "react"
import { Helmet } from "react-helmet"

import { Hero } from "../components/web/Hero"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"

export default ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="404: Sidan hittades inte" />
      <Hero
        variant="text"
        heading="Status 404"
        lead="Sidan du försöker nå finns inte. Klicka på knappen nedan för att komma tillbaka till startsidan igen."
        action={
          <Link href="/" variant="button" buttonVariant="primary" size="large">
            Till startsidan
          </Link>
        }
      />
    </DefaultLayout>
  )
}
