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

interface SystemutvecklingPageProps extends PageProps {
  data: {
    page: {
      frontmatter: {
        title: string
        seoDescription: string
        heading: string
        lead: string
        section1: {
          heading: string
          text1: string
          text2: string
        }
        section2: {
          heading: string
          items: string[]
        }
        section3: {
          heading: string
          text: string
        }
      }
    }
  }
}

const SystemutvecklingPage = ({ data, location }: SystemutvecklingPageProps) => {
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
          <ContentHeading>{frontmatter.section1.heading}</ContentHeading>
          <Text>
            <p>{frontmatter.section1.text1}</p>
            <p>{frontmatter.section1.text2}</p>
          </Text>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <ContentHeading>{frontmatter.section2.heading}</ContentHeading>
          <Text>
            <ul>
              {frontmatter.section2.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Text>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <ContentHeading>{frontmatter.section3.heading}</ContentHeading>
          <Text>
            <p>{frontmatter.section3.text}</p>
          </Text>
        </Vertical>
      </Vertical>
    </DefaultLayout>
  )
}

export const query = graphql`
  query SystemutvecklingPageQuery {
    page: markdownRemark(frontmatter: { type: { eq: "systemDevPage" } }) {
      frontmatter {
        title
        seoDescription
        heading
        lead
        section1 {
          heading
          text1
          text2
        }
        section2 {
          heading
          items
        }
        section3 {
          heading
          text
        }
      }
    }
  }
`

export default SystemutvecklingPage
