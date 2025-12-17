import {
  ContentHeading,
  Horizontal,
  Lead,
  MainHeading,
  SectionHeading,
  spacing,
  Text,
  types,
  Vertical,
  width,
  Link
} from "@kokitotsos/react-components"
import { graphql } from "gatsby"
import * as React from "react"

import { Seo } from "../../components/Seo"
import { DefaultLayout } from "../../layouts/DefaultLayout"
import { PageProps } from "../../types/PageProps"

interface OTSecurityPageProps extends PageProps {
  data: {
    page: {
      frontmatter: {
        title: string
        seoDescription: string
        heading: string
        lead: string
        whatWeDo: {
          heading: string
          items: string[]
        }
        areas: {
          heading: string
          items: string[]
        }
        packagedOffers: {
          heading: string
          text: string
          offers: {
            title: string
            url: string
            text: string
          }[]
        }
      }
    }
  }
}

const OTSecurityPage = ({ data, location }: OTSecurityPageProps) => {
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
            <ContentHeading>{frontmatter.whatWeDo.heading}</ContentHeading>
            <Text>
              <ul>
                {frontmatter.whatWeDo.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Text>
          </Vertical>

          <Vertical spacing={spacing.medium}>
            <ContentHeading>{frontmatter.areas.heading}</ContentHeading>
            <Text>
              <ul>
                {frontmatter.areas.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Text>
          </Vertical>
        </Horizontal>

        <Vertical spacing={spacing.small} style={{ marginTop: spacing.large }}>
          <SectionHeading>{frontmatter.packagedOffers.heading}</SectionHeading>
          <Text>
            <p>{frontmatter.packagedOffers.text}</p>
          </Text>
        </Vertical>

        <Horizontal
          breakpoint={width.tablet}
          distribute={true}
          spacing={spacing.large}
          alignVertical={types.Alignment.Start}
        >
          {frontmatter.packagedOffers.offers.map((offer, index) => (
            <Vertical key={index} spacing={spacing.small}>
              <Link to={offer.url} style={{ textDecoration: "none", color: "inherit" }}>
                <ContentHeading>{offer.title}</ContentHeading>
              </Link>
              <Text>
                <p>{offer.text}</p>
              </Text>
            </Vertical>
          ))}
        </Horizontal>
      </Vertical>
    </DefaultLayout>
  )
}

export const query = graphql`
  query OTSecurityPageQuery {
    page: markdownRemark(frontmatter: { type: { eq: "otSecurityPage" } }) {
      frontmatter {
        title
        seoDescription
        heading
        lead
        whatWeDo {
          heading
          items
        }
        areas {
          heading
          items
        }
        packagedOffers {
          heading
          text
          offers {
            title
            url
            text
          }
        }
      }
    }
  }
`

export default OTSecurityPage
