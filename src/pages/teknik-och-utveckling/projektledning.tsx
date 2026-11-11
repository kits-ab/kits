import { Link, Typography } from "@kits-ab/kits-ui"
import { graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { Seo } from "../../components/Seo"
import { BulletList } from "../../components/web/BulletList"
import { ContactBand } from "../../components/web/ContactBand"
import { Hero } from "../../components/web/Hero"
import { readableMaxWidth } from "../../components/web/layout"
import { Section } from "../../components/web/Section"
import { Stack } from "../../components/web/Stack"
import { DefaultLayout } from "../../layouts/DefaultLayout"
import { PageProps } from "../../types/PageProps"

const Readable = styled.div`
  max-width: ${readableMaxWidth}px;
`

interface ProjectManagementPageProps extends PageProps {
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

const ProjektledningPage = ({ data, location }: ProjectManagementPageProps) => {
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
              <Typography variant="h3" as="h2">
                {frontmatter.section1.heading}
              </Typography>
              <Typography variant="body" color="secondary">
                {frontmatter.section1.text1}
              </Typography>
              <Typography variant="body" color="secondary">
                {frontmatter.section1.text2}
              </Typography>
            </Stack>
            <Stack $gap={16}>
              <Typography variant="h3" as="h2">
                {frontmatter.section2.heading}
              </Typography>
              <BulletList items={frontmatter.section2.items} />
            </Stack>
            <Stack $gap={16}>
              <Typography variant="h3" as="h2">
                {frontmatter.section3.heading}
              </Typography>
              <Typography variant="body" color="secondary">
                {frontmatter.section3.text}
              </Typography>
            </Stack>
          </Stack>
        </Readable>
      </Section>

      <ContactBand
        heading={frontmatter.cta.heading}
        text={frontmatter.cta.content}
        action={
          <Link
            href={frontmatter.cta.buttonUrl}
            variant="button"
            buttonVariant="primary"
            size="large"
          >
            {frontmatter.cta.buttonText}
          </Link>
        }
      />
    </DefaultLayout>
  )
}

export const query = graphql`
  query ProjectManagementPageQuery {
    page: markdownRemark(frontmatter: { type: { eq: "projectManagementPage" } }) {
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

export default ProjektledningPage
