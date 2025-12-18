import {
  ContentHeading,
  Lead,
  MainHeading,
  spacing,
  Text,
  Vertical
} from "@kokitotsos/react-components"
import { graphql } from "gatsby"
import * as React from "react"

import { Seo } from "../../components/Seo"
import { DefaultLayout } from "../../layouts/DefaultLayout"
import { PageProps } from "../../types/PageProps"

interface OTSecExpertPageProps extends PageProps {
  data: {
    page: {
      frontmatter: {
        title: string
        seoDescription: string
        heading: string
        lead: string
        text: string
        whatYouGet: {
          heading: string
          items: string[]
        }
      }
    }
  }
}

const OTSecExpertPage = ({ data, location }: OTSecExpertPageProps) => {
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

        <Vertical spacing={spacing.medium}>
          <Text>
            <p>{frontmatter.text}</p>
          </Text>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <ContentHeading>{frontmatter.whatYouGet.heading}</ContentHeading>
          <Text>
            <ul>
              {frontmatter.whatYouGet.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Text>
        </Vertical>
      </Vertical>
    </DefaultLayout>
  )
}

export const query = graphql`
  query OTSecExpertPageQuery {
    page: markdownRemark(frontmatter: { type: { eq: "otSecExpertPage" } }) {
      frontmatter {
        title
        seoDescription
        heading
        lead
        text
        whatYouGet {
          heading
          items
        }
      }
    }
  }
`

export default OTSecExpertPage
