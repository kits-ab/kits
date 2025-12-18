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

interface AppSecTrainingPageProps extends PageProps {
  data: {
    page: {
      frontmatter: {
        title: string
        seoDescription: string
        heading: string
        lead: string
        text1: string
        text2: string
        trainingContent: {
          heading: string
          items: string[]
        }
      }
    }
  }
}

const AppSecTrainingPage = ({ data, location }: AppSecTrainingPageProps) => {
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
            <p>{frontmatter.text1}</p>
          </Text>
          <Text>
            <p>{frontmatter.text2}</p>
          </Text>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <ContentHeading>{frontmatter.trainingContent.heading}</ContentHeading>
          <Text>
            <ul>
              {frontmatter.trainingContent.items.map((item, index) => (
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
  query AppSecTrainingPageQuery {
    page: markdownRemark(frontmatter: { type: { eq: "appSecTrainingPage" } }) {
      frontmatter {
        title
        seoDescription
        heading
        lead
        text1
        text2
        trainingContent {
          heading
          items
        }
      }
    }
  }
`

export default AppSecTrainingPage
