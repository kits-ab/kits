import { Location } from "@kokitotsos/react-components"
import { graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import {
  ContentYamlConnection,
  MarkdownRemark,
  MarkdownRemarkConnection,
  MarkdownRemarkEdge
} from "../../gatsby-types"
import { Seo } from "../components/Seo"
import { ContactCard } from "../components/web/ContactCard"
import { Grid } from "../components/web/Grid"
import { Hero } from "../components/web/Hero"
import { onMobile } from "../components/web/layout"
import { Prose } from "../components/web/Prose"
import { Section } from "../components/web/Section"
import { Stack } from "../components/web/Stack"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"
import { edgeToPerson } from "../utils/personUtils"

// contacts.person kopplas till personen i gatsby-node.js (createSchemaCustomization), så att
// sidan bara hämtar kontaktpersonernas uppgifter och inte alla medarbetares.
interface Contact {
  role: string
  person: MarkdownRemark | null
}

interface AboutPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
    metadata: ContentYamlConnection
  }
}

// Skissen drar in brödtexten från rubrikkanten och har den i primär textfärg.
const Story = styled(Prose)`
  padding-left: var(--spacing-96);
  color: var(--text-primary);

  ${onMobile} {
    padding-left: 0;
  }
`

export default ({ data, location }: AboutPageProps) => {
  const page = data.page.edges[0]
  const metadata = data.metadata.edges[0]
  const contacts = metadata.node.contacts as unknown as Contact[]

  return (
    <DefaultLayout location={location}>
      <Seo
        title={page.node.frontmatter.title}
        description={page.node.frontmatter.seoDescription}
        pathname={location.pathname}
      />
      <Hero
        variant="text"
        heading={page.node.frontmatter.heading}
        lead={page.node.frontmatter.lead}
      />

      <Section spaceTop={64}>
        <Stack $gap={96}>
          <Story html={page.node.html} />
          <Grid $columns={2}>
            {contacts.map((contact) => {
              const person = contact.person
                ? edgeToPerson({ node: contact.person } as MarkdownRemarkEdge)
                : undefined
              if (person === undefined) {
                return null
              }
              return (
                <ContactCard
                  key={person.id}
                  role={contact.role}
                  name={person.name}
                  phone={person.phone?.toString()}
                  email={person.email?.toString()}
                />
              )
            })}
          </Grid>
        </Stack>
      </Section>

      <Location
        coordinates={metadata.node.coordinates}
        title={metadata.node.name}
        subtitle={metadata.node.address.street}
      />
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query AboutPageQuery {
    page: allMarkdownRemark(filter: { frontmatter: { type: { eq: "aboutPage" } } }) {
      edges {
        node {
          frontmatter {
            title
            seoDescription
            heading
            lead
            section1 {
              heading
            }
          }
          html
        }
      }
    }
    metadata: allContentYaml {
      edges {
        node {
          name
          coordinates
          address {
            street
          }
          contacts {
            role
            person {
              fields {
                href
              }
              frontmatter {
                id
                title
                phone
                email
              }
            }
          }
        }
      }
    }
  }
`
