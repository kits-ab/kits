import { Typography } from "@kits-ab/kits-ui"
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
    <DefaultLayout location={location} layout="profil2026">
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
                {frontmatter.text}
              </Typography>
            </Stack>
            <Stack $gap={16}>
              <Typography variant="h3" as="h2">
                {frontmatter.whatYouGet.heading}
              </Typography>
              <BulletList items={frontmatter.whatYouGet.items} />
            </Stack>
          </Stack>
        </Readable>
      </Section>
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
