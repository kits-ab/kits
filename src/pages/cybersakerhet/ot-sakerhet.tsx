import { Link, Typography } from "@kits-ab/kits-ui"
import { graphql } from "gatsby"
import * as React from "react"

import { Seo } from "../../components/Seo"
import { BulletList } from "../../components/web/BulletList"
import { ContactBand } from "../../components/web/ContactBand"
import { Grid } from "../../components/web/Grid"
import { Hero } from "../../components/web/Hero"
import { PackagedOffers } from "../../components/web/PackagedOffers"
import { Section } from "../../components/web/Section"
import { Stack } from "../../components/web/Stack"
import { DefaultLayout } from "../../layouts/DefaultLayout"
import { PageProps } from "../../types/PageProps"

interface OTSecurityPageProps extends PageProps {
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
          items: string[]
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

const OTSecurityPage = ({ data, location }: OTSecurityPageProps) => {
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
        <Grid $columns={2}>
          <Stack $gap={16}>
            <Typography variant="h3" as="h2">
              {frontmatter.whatWeDo.heading}
            </Typography>
            <BulletList items={frontmatter.whatWeDo.items} />
          </Stack>
          <Stack $gap={16}>
            <Typography variant="h3" as="h2">
              {frontmatter.areas.heading}
            </Typography>
            <BulletList items={frontmatter.areas.items} />
          </Stack>
        </Grid>
      </Section>

      <Section>
        <PackagedOffers
          heading={frontmatter.packagedOffers.heading}
          text={frontmatter.packagedOffers.text}
          offers={frontmatter.packagedOffers.offers}
        />
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
  query OTSecurityPageQuery {
    page: markdownRemark(frontmatter: { type: { eq: "otSecurityPage" } }) {
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
          items
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

export default OTSecurityPage
