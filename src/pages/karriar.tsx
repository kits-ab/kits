import { Link, Typography } from "@kits-ab/kits-ui"
import { graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import {
  FileConnection,
  MarkdownRemarkConnection,
  MarkdownRemarkEdge,
  TeamtailorJob,
  TeamtailorJobConnection
} from "../../gatsby-types"
import { MarkdownField } from "../components/MarkdownField"
import { Seo } from "../components/Seo"
import { Collage } from "../components/web/Collage"
import { Grid } from "../components/web/Grid"
import { Hero } from "../components/web/Hero"
import { Prose } from "../components/web/Prose"
import { Section } from "../components/web/Section"
import { SplitSection } from "../components/web/SplitSection"
import { Stack } from "../components/web/Stack"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"
import { findImageByRelativePath, findImagesByRelativePaths } from "../utils/imageUtils"

const Brand = styled.span`
  color: var(--text-brand);
`

// Skissen sätter rubrikens sista ord i lila.
const lastWordInBrand = (text: string) => {
  const i = text.lastIndexOf(" ")
  return i < 0 ? (
    <Brand>{text}</Brand>
  ) : (
    <>
      {text.slice(0, i)} <Brand>{text.slice(i + 1)}</Brand>
    </>
  )
}

interface JobPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
    activeJob: TeamtailorJob
    jobs: TeamtailorJobConnection
    benefits: MarkdownRemarkConnection
    images: FileConnection
    personaImages: FileConnection
    cyberAcademyImages: FileConnection
  }
}

interface State {
  selectedIndex?: number
}

const initialState: State = { selectedIndex: undefined }

export default class JobPage extends React.PureComponent<JobPageProps, State> {
  state = initialState

  render() {
    const { data, location } = this.props

    const page = data.page.edges[0]
    const { frontmatter } = page.node
    // const activeJob = data.activeJob
    // const jobs = data.jobs.edges
    const benefits = data.benefits.edges
    const images = data.images.edges
    // const personaImages = data.personaImages.edges
    const cyberAcademyImage = findImageByRelativePath(
      data.cyberAcademyImages.edges,
      frontmatter.cyberAcademy.image
    )

    const benefitsWithImage = benefits.filter((edge) => edge.node.frontmatter.image)
    const benefitsWithoutImage = benefits.filter((edge) => !edge.node.frontmatter.image)

    const galleryImages = findImagesByRelativePaths(images, frontmatter.images)

    // Vilande: jobbannonserna (Personas) från Teamtailor visas inte just nu. Se git-historiken
    // för den gamla renderingen; queryn och handleClick finns kvar.

    return (
      <DefaultLayout location={location}>
        <Seo
          title={frontmatter.title}
          description={frontmatter.seoDescription}
          pathname={location.pathname}
        />
        <Hero
          variant="text"
          heading={frontmatter.heading}
          lead={frontmatter.lead}
          action={
            <Link
              href="https://jobb.kits.se/"
              target="_blank"
              rel="noopener noreferrer"
              variant="button"
              buttonVariant="primary"
              size="large"
            >
              Ansök direkt på jobb.kits.se
            </Link>
          }
        />

        <Section>
          <SplitSection image={cyberAcademyImage}>
            <Stack $gap={24}>
              <Typography variant="mono" color="brand" as="h2">
                {frontmatter.cyberAcademy.heading}
              </Typography>
              <Typography variant="h2" as="p">
                {lastWordInBrand(frontmatter.cyberAcademy.lead)}
              </Typography>
              <Stack $gap={16}>
                {frontmatter.cyberAcademy.content.map((paragraph, index) => (
                  <Typography key={index} variant="body" color="secondary">
                    {paragraph}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </SplitSection>
        </Section>

        <Section tone="raised">
          <Stack $gap={80}>
            <Typography variant="h2" as="h2">
              {frontmatter.section1.heading}
            </Typography>
            {benefitsWithImage.map((edge: MarkdownRemarkEdge, index: number) => (
              <SplitSection
                key={edge.node.frontmatter.title}
                image={findImageByRelativePath(images, edge.node.frontmatter.image)}
                imageSide={index % 2 === 0 ? "left" : "right"}
              >
                <Stack $gap={16}>
                  <Typography variant="h3" as="h3">
                    {edge.node.frontmatter.title}
                  </Typography>
                  <Prose html={edge.node.html} />
                </Stack>
              </SplitSection>
            ))}
          </Stack>
        </Section>

        <Section>
          <Stack $gap={80}>
            <Collage images={galleryImages} />
            <Grid $columns={2}>
              {benefitsWithoutImage.map((edge) => (
                <Stack key={edge.node.frontmatter.title} $gap={16}>
                  <Typography variant="h3" as="h3">
                    {edge.node.frontmatter.title}
                  </Typography>
                  <Prose html={edge.node.html} />
                </Stack>
              ))}
            </Grid>
          </Stack>
        </Section>

        <Section tone="raised">
          <Stack $gap={24}>
            <Typography variant="h2" as="h2">
              {frontmatter.section2.heading}
            </Typography>
            <Typography variant="body" color="secondary">
              <MarkdownField text={frontmatter.section2.content} inline={true} />
            </Typography>
            <div>
              <Link
                href="mailto:patrik@kits.se"
                variant="button"
                buttonVariant="primary"
                size="large"
              >
                Kontakta oss
              </Link>
            </div>
          </Stack>
        </Section>
      </DefaultLayout>
    )
  }

  private handleClick = (index: number, href: string) => {
    this.setState({ selectedIndex: index })

    // Replace the url to handle refresh.
    window.history.replaceState({}, "", href)
  }
}

export const pageQuery = graphql`
  query JobPageQuery($href: String = "") {
    page: allMarkdownRemark(filter: { frontmatter: { type: { eq: "careerPage" } } }) {
      edges {
        node {
          frontmatter {
            title
            seoDescription
            heading
            lead
            cyberAcademy {
              heading
              lead
              lead
              content
              image
            }
            section1 {
              heading
            }
            section2 {
              content
              heading
            }
            images
          }
        }
      }
    }
    activeJob: teamtailorJob(fields: { href: { eq: $href } }) {
      id
    }
    jobs: allTeamtailorJob {
      edges {
        node {
          fields {
            href
          }
          id
          links {
            careersite_job_apply_url
            careersite_job_url
          }
          attributes {
            title
            body
            apply_button_text
            human_status
          }
        }
      }
    }
    benefits: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "benefit" } } }
      sort: { frontmatter: { index: ASC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            image
          }
          html
        }
      }
    }
    images: allFile(
      filter: {
        internal: { mediaType: { eq: "image/jpeg" } }
        relativePath: { regex: "/^formaner_/" }
      }
    ) {
      edges {
        node {
          ...ImageFragmentWide
        }
      }
    }
    personaImages: allFile(
      filter: {
        internal: { mediaType: { eq: "image/png" } }
        relativePath: { regex: "/^persona_/" }
      }
      sort: { relativePath: ASC }
    ) {
      edges {
        node {
          ...ImageFragmentPersona
        }
      }
    }
    cyberAcademyImages: allFile(
      filter: {
        internal: { mediaType: { in: ["image/jpeg", "image/png"] } }
        relativePath: { regex: "/^cyberacademy_/" }
      }
    ) {
      edges {
        node {
          ...ImageFragmentWide
        }
      }
    }
  }
`
