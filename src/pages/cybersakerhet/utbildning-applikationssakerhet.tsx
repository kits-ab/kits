import { Typography } from "@kokitotsos/kits-ui"
import { graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { Seo } from "../../components/Seo"
import { BulletList } from "../../components/web/BulletList"
import { Hero } from "../../components/web/Hero"
import { readableMaxWidth } from "../../components/web/layout"
import { Section } from "../../components/web/Section"
import { Stack } from "../../components/web/Stack"
import { DefaultLayout } from "../../layouts/DefaultLayout"
import { PageProps } from "../../types/PageProps"

const Readable = styled.div`
  max-width: ${readableMaxWidth}px;
`

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
      <Hero variant="text" heading={frontmatter.heading} lead={frontmatter.lead} />

      <Section spaceTop={96}>
        <Readable>
          <Stack $gap={48}>
            <Stack $gap={16}>
              <Typography variant="body" color="secondary">
                {frontmatter.text1}
              </Typography>
              <Typography variant="body" color="secondary">
                {frontmatter.text2}
              </Typography>
            </Stack>
            <Stack $gap={16}>
              <Typography variant="h3" as="h2">
                {frontmatter.trainingContent.heading}
              </Typography>
              <BulletList items={frontmatter.trainingContent.items} />
            </Stack>
          </Stack>
        </Readable>
      </Section>
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
