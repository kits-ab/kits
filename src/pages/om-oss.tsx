import {
  Breakout,
  Contact,
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
import { Helmet } from "react-helmet"

import { ContentYamlConnection, MarkdownRemarkConnection } from "../../gatsby-types"
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

export default ({ data, location }: AboutPageProps) => {
  const page = data.page.edges[0]
  const metadata = data.metadata.edges[0]
  const persons = data.persons.edges
    .map((edge) => edgeToPerson(edge))
    .filter((person) => person !== undefined) as types.Person[]

  return (
    <DefaultLayout location={location}>
      <Helmet title={page.node.frontmatter.title} />

      <Vertical spacing={spacing.large}>
        <MainHeading>{page.node.frontmatter.heading}</MainHeading>
        <Lead>{page.node.frontmatter.lead}</Lead>
      </Vertical>

      <Breakout>
        <Location
          coordinates={metadata.node.coordinates}
          title={metadata.node.name}
          subtitle={metadata.node.address.street}
        />
      </Breakout>

      <Horizontal breakpoint={width.tablet} separator={true} spacing={spacing.large}>
        <Text>{page.node.html}</Text>

        <Vertical spacing={spacing.medium}>
          {metadata.node.contacts.map((contact) => {
            const person = findPersonById(persons, contact.personId)
            if (person === undefined) {
              return null
            }
            person.role = contact.role
            return (
              <Contact key={`contact_${person.id}`} info={person} type={types.ContactType.Role} />
            )
          })}
        </Vertical>
      </Horizontal>
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
