import { Location, types } from "@kokitotsos/react-components"
import { graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { ContentYamlConnection, MarkdownRemarkConnection } from "../../gatsby-types"
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
import { edgeToPerson, findPersonById } from "../utils/personUtils"

interface AboutPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
    metadata: ContentYamlConnection
    persons: MarkdownRemarkConnection
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
  const persons = data.persons.edges
    .map((edge) => edgeToPerson(edge))
    .filter((person) => person !== undefined) as types.Person[]

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
            {metadata.node.contacts.map((contact) => {
              const person = findPersonById(persons, contact.personId)
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
            personId
          }
        }
      }
    }
    persons: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "person" }, alumni: { ne: true } } }
      sort: { frontmatter: { title: ASC } }
    ) {
      edges {
        node {
          ...PersonFragment
        }
      }
    }
  }
`
