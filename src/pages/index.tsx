import { Link, Typography } from "@kits-ab/kits-ui"
import { graphql } from "gatsby"
import * as React from "react"

import { MarkdownRemarkConnection } from "../../gatsby-types"
import { Seo } from "../components/Seo"
import { ContactBand } from "../components/web/ContactBand"
import { Hero } from "../components/web/Hero"
import { Section } from "../components/web/Section"
import { SectionIntro } from "../components/web/SectionIntro"
import { SplitSection } from "../components/web/SplitSection"
import { Stack } from "../components/web/Stack"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"

interface IndexPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
    services: {
      frontmatter: {
        kitsec: { heading: string; url: string; text: string }
      }
    }
  }
}

export default ({ data, location }: IndexPageProps) => {
  const { frontmatter } = data.page.edges[0].node
  const { kitsec } = data.services.frontmatter
  const section2Image = frontmatter.images?.[0]

  return (
    <DefaultLayout location={location} layout="profil2026">
      <Seo
        title={frontmatter.title}
        description={frontmatter.seoDescription}
        pathname={location.pathname}
      />
      <Hero
        variant="image"
        image="/assets/framsida_partiklar.jpg"
        heading={frontmatter.heading}
        lead={frontmatter.lead}
        action={
          <Link href="/tjanster" variant="button" buttonVariant="accent" size="large">
            Läs mer om våra tjänster
          </Link>
        }
      />

      <Section tone="light">
        <SectionIntro heading={kitsec.heading} url={kitsec.url} text={kitsec.text} />
      </Section>

      <Section>
        <SplitSection image={section2Image ? { src: section2Image } : undefined} imageSide="right">
          <Stack $gap={24}>
            <Typography variant="mono" color="brand">
              {frontmatter.section2.subheading}
            </Typography>
            <Typography variant="h2" as="h2">
              {frontmatter.section2.heading}
            </Typography>
            <Typography variant="body" color="secondary">
              {frontmatter.section2.content}
            </Typography>
            <div>
              <Link href="/karriar" variant="button" buttonVariant="primary" size="large">
                Läs mer om att jobba på KITS
              </Link>
            </div>
          </Stack>
        </SplitSection>
      </Section>

      <ContactBand
        label={frontmatter.section1.subheading}
        heading={frontmatter.section1.heading}
        text={frontmatter.section1.content}
      />
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    page: allMarkdownRemark(filter: { frontmatter: { type: { eq: "indexPage" } } }) {
      edges {
        node {
          frontmatter {
            title
            seoDescription
            heading
            lead
            section1 {
              subheading
              heading
              content
            }
            section2 {
              subheading
              heading
              content
            }
            images
          }
        }
      }
    }
    services: markdownRemark(frontmatter: { type: { eq: "servicesPage" } }) {
      frontmatter {
        kitsec {
          heading
          url
          text
        }
      }
    }
  }
`
