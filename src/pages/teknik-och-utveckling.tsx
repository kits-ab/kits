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

interface TeknikPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
  }
}

const TeknikPage = ({ data, location }: TeknikPageProps) => {
  const page = data.page.edges[0].node.frontmatter

  return (
    <DefaultLayout location={location} layout="profil2026">
      <Seo title={page.title} description={page.seoDescription} pathname={location.pathname} />
      <Hero variant="text" heading={page.heading} lead={page.lead} />

      <Section spaceTop={96}>
        <Grid $columns={2}>
          {[
            { ...page.section1, href: "/teknik-och-utveckling/systemutveckling" },
            { ...page.section2, href: "/teknik-och-utveckling/projektledning" },
            { ...page.section3, href: "/teknik-och-utveckling/integration" },
            { ...page.section4, href: "/kitsstudio" }
          ].map((section) => (
            <ContentCard key={section.href} title={section.heading} href={section.href}>
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

export default TeknikPage

export const pageQuery = graphql`
  query TeknikPageQuery {
    page: allMarkdownRemark(filter: { frontmatter: { type: { eq: "techDevPage" } } }) {
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
            section3 {
              heading
              content
            }
            section4 {
              heading
              content
            }
          }
        }
      }
    }
  }
`
