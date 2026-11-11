import { Typography } from "@kits-ab/kits-ui"
import { graphql } from "gatsby"
import * as React from "react"

import { MarkdownRemarkConnection } from "../../gatsby-types"
import { Seo } from "../components/Seo"
import { ContentCard } from "../components/web/ContentCard"
import { Grid } from "../components/web/Grid"
import { Hero } from "../components/web/Hero"
import { Section } from "../components/web/Section"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"

interface CybersecurityPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
  }
}

const CybersecurityPage = ({ data, location }: CybersecurityPageProps) => {
  const page = data.page.edges[0].node.frontmatter

  return (
    <DefaultLayout location={location}>
      <Seo title={page.title} description={page.seoDescription} pathname={location.pathname} />
      <Hero variant="text" heading={page.heading} lead={page.lead} />

      <Section spaceTop={96}>
        <Grid $columns={2}>
          {[
            { ...page.section1, href: "/cybersakerhet/it-sakerhet" },
            { ...page.section2, href: "/cybersakerhet/ot-sakerhet" }
          ].map((section) => (
            <ContentCard
              key={section.href}
              title={section.heading}
              href={section.href}
              tone="brand"
              headingLevel="h2"
            >
              <Typography variant="body" color="secondary">
                {section.content}
              </Typography>
            </ContentCard>
          ))}
        </Grid>
      </Section>
    </DefaultLayout>
  )
}

export default CybersecurityPage

export const pageQuery = graphql`
  query CybersecurityPageQuery {
    page: allMarkdownRemark(filter: { frontmatter: { type: { eq: "cybersecurityPage" } } }) {
      edges {
        node {
          frontmatter {
            title
            seoDescription
            heading
            lead
            section1 {
              heading
              content
            }
            section2 {
              heading
              content
            }
          }
        }
      }
    }
  }
`
