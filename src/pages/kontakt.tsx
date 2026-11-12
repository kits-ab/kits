import { Link, Typography } from "@kokitotsos/kits-ui"
import { graphql } from "gatsby"
import * as React from "react"

import { ContentYamlConnection } from "../../gatsby-types"
import { Seo } from "../components/Seo"
import { ContactCard } from "../components/web/ContactCard"
import { Grid } from "../components/web/Grid"
import { Hero } from "../components/web/Hero"
import { LocationMap } from "../components/web/LocationMap"
import { Section } from "../components/web/Section"
import { Stack } from "../components/web/Stack"
import { TextLink } from "../components/web/TextLink"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"

interface ContactPageProps extends PageProps {
  data: {
    metadata: ContentYamlConnection
    page: {
      frontmatter: {
        title: string
        seoDescription: string
        heading: string
        lead: string
        generalContact: {
          heading: string
          email: string
        }
        address: {
          heading: string
          city: string
        }
        directContact: {
          heading: string
          sales: {
            label: string
            name: string
            phone: string
            email: string
          }
          management: {
            label: string
            name: string
            phone: string
            email: string
          }
        }
        cta: {
          career: {
            heading: string
            buttonText: string
            url: string
          }
          services: {
            heading: string
            buttonText: string
            url: string
          }
        }
      }
    }
  }
}

const ContactPage = ({ data, location }: ContactPageProps) => {
  const metadata = data.metadata.edges[0]
  const { frontmatter } = data.page

  return (
    <DefaultLayout location={location}>
      <Seo
        title={frontmatter.title}
        description={frontmatter.seoDescription}
        pathname={location.pathname}
      />
      <Hero variant="text" heading={frontmatter.heading} lead={frontmatter.lead} />

      <Section spaceTop={96}>
        <Stack $gap={64}>
          <Stack $gap={16}>
            <Typography variant="h3" as="h2">
              {frontmatter.generalContact.heading}
            </Typography>
            <Typography variant="body">
              <TextLink href={`mailto:${frontmatter.generalContact.email}`}>
                {frontmatter.generalContact.email}
              </TextLink>
            </Typography>
            <Typography variant="body">
              {metadata.node.name}
              <br />
              {metadata.node.address.street}
              <br />
              {frontmatter.address.city}
            </Typography>
          </Stack>

          <Stack $gap={24}>
            <Typography variant="h3" as="h2">
              {frontmatter.directContact.heading}
            </Typography>
            <Grid $columns={2}>
              {[frontmatter.directContact.sales, frontmatter.directContact.management].map(
                (person) => (
                  <ContactCard
                    key={person.email}
                    name={person.name}
                    phone={person.phone}
                    email={person.email}
                  />
                )
              )}
            </Grid>
          </Stack>
        </Stack>
      </Section>

      <LocationMap
        coordinates={metadata.node.coordinates}
        title={metadata.node.name}
        subtitle={metadata.node.address.street}
      />

      <Section>
        <Grid $columns={2}>
          <Stack $gap={24}>
            <Typography variant="h2" as="h2">
              {frontmatter.cta.career.heading}
            </Typography>
            <div>
              <Link
                href={frontmatter.cta.career.url}
                variant="button"
                buttonVariant="accent"
                size="large"
              >
                {frontmatter.cta.career.buttonText}
              </Link>
            </div>
          </Stack>
          <Stack $gap={24}>
            <Typography variant="h2" as="h2">
              {frontmatter.cta.services.heading}
            </Typography>
            <div>
              <Link
                href={frontmatter.cta.services.url}
                variant="button"
                buttonVariant="primary"
                size="large"
              >
                {frontmatter.cta.services.buttonText}
              </Link>
            </div>
          </Stack>
        </Grid>
      </Section>
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
    page: markdownRemark(frontmatter: { type: { eq: "contactPage" } }) {
      frontmatter {
        title
        seoDescription
        heading
        lead
        generalContact {
          heading
          email
        }
        address {
          heading
          city
        }
        directContact {
          heading
          sales {
            label
            name
            phone
            email
          }
          management {
            label
            name
            phone
            email
          }
        }
        cta {
          career {
            heading
            buttonText
            url
          }
          services {
            heading
            buttonText
            url
          }
        }
      }
    }
  }
`
export default ContactPage
