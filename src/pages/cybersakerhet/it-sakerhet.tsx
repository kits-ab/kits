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
  Link,
  width
} from "@kokitotsos/react-components"
import { graphql } from "gatsby"
import * as React from "react"

import { CallToAction } from "../../components/CallToAction"
import { Seo } from "../../components/Seo"
import { DefaultLayout } from "../../layouts/DefaultLayout"
import { PageProps } from "../../types/PageProps"

interface ITSecurityPageProps extends PageProps {
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
          groups: {
            title: string
            items: string[]
          }[]
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
        cta: {
          heading: string
          content: string
          buttonText: string
          buttonUrl: string
        }
      }
    }
  }
}

const ITSecurityPage = ({ data, location }: ITSecurityPageProps) => {
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
          <Vertical spacing={spacing.small}>
            <ContentHeading>{frontmatter.whatWeDo.heading}</ContentHeading>
            <Text>
              <ul>
                {frontmatter.whatWeDo.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Text>
          </Vertical>

          <Vertical spacing={spacing.small}>
            <ContentHeading>{frontmatter.areas.heading}</ContentHeading>
            <Text>
              {frontmatter.areas.groups.map((group, index) => (
                <React.Fragment key={index}>
                  <p>{group.title}</p>
                  <ul>
                    {group.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </React.Fragment>
              ))}
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

        <CallToAction
          heading={frontmatter.cta.heading}
          content={frontmatter.cta.content}
          buttonText={frontmatter.cta.buttonText}
          buttonHref={frontmatter.cta.buttonUrl}
        />
      </Vertical>
    </DefaultLayout>
  )
}

export const query = graphql`
  query ITSecurityPageQuery {
    page: markdownRemark(frontmatter: { type: { eq: "itSecurityPage" } }) {
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
          groups {
            title
            items
          }
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
        cta {
          heading
          content
          buttonText
          buttonUrl
        }
      }
    }
  }
`

export default ITSecurityPage
