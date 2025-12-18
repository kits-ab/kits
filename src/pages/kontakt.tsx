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
      <Vertical spacing={spacing.large}>
        <MainHeading>{frontmatter.heading}</MainHeading>
        <Lead>{frontmatter.lead}</Lead>

        <Horizontal
          breakpoint={width.tablet}
          distribute={true}
          spacing={spacing.large}
          alignVertical={types.Alignment.Start}
        >
          <Vertical spacing={spacing.medium}>
            <ContentHeading>{frontmatter.generalContact.heading}</ContentHeading>
            <Text>
              <p>
                <strong>E-post:</strong>{" "}
                <a href={`mailto:${frontmatter.generalContact.email}`}>
                  {frontmatter.generalContact.email}
                </a>
              </p>
            </Text>

            <ContentHeading>{frontmatter.address.heading}</ContentHeading>
            <Text>
              <p>
                {metadata.node.name}
                <br />
                {metadata.node.address.street}
                <br />
                {frontmatter.address.city}
              </p>
            </Text>
          </Vertical>

          <Vertical spacing={spacing.medium}>
            <ContentHeading>{frontmatter.directContact.heading}</ContentHeading>
            <Text>
              <p>
                <strong>{frontmatter.directContact.sales.label}</strong>
              </p>
              <p>
                {frontmatter.directContact.sales.name}
                <br />
                Telefon: {frontmatter.directContact.sales.phone}
                <br />
                E-post:{" "}
                <a href={`mailto:${frontmatter.directContact.sales.email}`}>
                  {frontmatter.directContact.sales.email}
                </a>
              </p>
              <p>
                <strong>{frontmatter.directContact.management.label}</strong>
              </p>
              <p>
                {frontmatter.directContact.management.name}
                <br />
                Telefon: {frontmatter.directContact.management.phone}
                <br />
                E-post:{" "}
                <a href={`mailto:${frontmatter.directContact.management.email}`}>
                  {frontmatter.directContact.management.email}
                </a>
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
          <ContentHeading>{frontmatter.cta.career.heading}</ContentHeading>
          <Button href={frontmatter.cta.career.url}>{frontmatter.cta.career.buttonText}</Button>
        </Vertical>

        <Vertical spacing={spacing.medium} alignHorizontal={types.Alignment.Center}>
          <ContentHeading>{frontmatter.cta.services.heading}</ContentHeading>
          <Button href={frontmatter.cta.services.url}>{frontmatter.cta.services.buttonText}</Button>
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
