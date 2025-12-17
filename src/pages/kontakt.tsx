import {
  Breakout,
  Button,
  ContentHeading,
  Horizontal,
  Lead,
  Location,
  MainHeading,
  spacing,
  Text,
  types,
  Vertical,
  width
} from "@kokitotsos/react-components"
import { graphql } from "gatsby"
import * as React from "react"

import { ContentYamlConnection } from "../../gatsby-types"
import { Seo } from "../components/Seo"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"

interface ContactPageProps extends PageProps {
  data: {
    metadata: ContentYamlConnection
  }
}

const ContactPage = ({ data, location }: ContactPageProps) => {
  const metadata = data.metadata.edges[0]

  return (
    <DefaultLayout location={location}>
      <Seo
        title="Kontakta oss"
        description="Kontakta KITS för hjälp med systemutveckling, integration och cybersäkerhet. Här hittar du kontaktuppgifter till våra kontor och nyckelpersoner."
        pathname={location.pathname}
      />
      <Vertical spacing={spacing.large}>
        <MainHeading>Kontakta oss</MainHeading>
        <Lead>
          Vill du veta mer om våra tjänster eller hur vi kan hjälpa er organisation?
          <br />
          Hör av dig till oss, vi svarar snabbt.
        </Lead>

        <Horizontal
          breakpoint={width.tablet}
          distribute={true}
          spacing={spacing.large}
          alignVertical={types.Alignment.Start}
        >
          <Vertical spacing={spacing.medium}>
            <ContentHeading>Allmän kontakt</ContentHeading>
            <Text>
              <p>
                <strong>E-post:</strong> <a href="mailto:info@kits.se">info@kits.se</a>
              </p>
            </Text>

            <ContentHeading>Adress</ContentHeading>
            <Text>
              <p>
                {metadata.node.name}
                <br />
                {metadata.node.address.street}
                <br />
                411 36 Göteborg
              </p>
            </Text>
          </Vertical>

          <Vertical spacing={spacing.medium}>
            <ContentHeading>Kontakta oss direkt</ContentHeading>
            <Text>
              <p>
                <strong>För affärsförfrågningar och samarbeten:</strong>
              </p>
              <p>
                Johan Herbo, Säljchef
                <br />
                Telefon: 0730 – 74 07 18
                <br />
                E-post: <a href="mailto:johan.herbo@kits.se">johan.herbo@kits.se</a>
              </p>
              <p>
                <strong>För företagsledning och övergripande frågor:</strong>
              </p>
              <p>
                Patrik Nilsson, VD
                <br />
                Telefon: 0708 – 27 74 99
                <br />
                E-post: <a href="mailto:patrik.nilsson@kits.se">patrik.nilsson@kits.se</a>
              </p>
            </Text>
          </Vertical>
        </Horizontal>

        <Breakout>
          <Location
            coordinates={metadata.node.coordinates}
            title={metadata.node.name}
            subtitle={metadata.node.address.street}
          />
        </Breakout>

        <Vertical spacing={spacing.medium} alignHorizontal={types.Alignment.Center}>
          <ContentHeading>Vill du jobba hos oss?</ContentHeading>
          <Button href="/karriar">Besök vår karriärsida</Button>
        </Vertical>

        <Vertical spacing={spacing.medium} alignHorizontal={types.Alignment.Center}>
          <ContentHeading>Våra tjänster</ContentHeading>
          <Button href="/tjanster">Läs mer om vad vi kan göra</Button>
        </Vertical>
      </Vertical>
    </DefaultLayout>
  )
}

export const query = graphql`
  query ContactPageQuery {
    metadata: allContentYaml {
      edges {
        node {
          name
          coordinates
          address {
            street
          }
        }
      }
    }
  }
`
export default ContactPage
