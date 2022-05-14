import {
  Breakout,
  Button,
  Collage,
  colors,
  Horizontal,
  Lead,
  MainHeading,
  Media,
  Persona,
  Personas,
  SectionHeading,
  spacing,
  SubHeading,
  Text,
  types,
  Vertical,
  width,
  Wrapper
} from "@kokitotsos/react-components"
import { graphql } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import {
  FileConnection,
  MarkdownRemarkConnection,
  MarkdownRemarkEdge,
  TeamtailorJob,
  TeamtailorJobConnection
} from "../../gatsby-types"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"
import { findImageByRelativePath, findImagesByRelativePaths } from "../utils/imageUtils"

const StyledBreakout = styled(Breakout)`
  background-color: ${colors.background2};
  background-color: var(--background2);
  margin-top: 150px !important;
  padding: ${spacing.huge}px 0;

  .collage {
    margin-top: -150px;
    margin-bottom: ${spacing.large}px;
  }
`

const StyledPersonaContent = styled(Vertical)`
  @media (max-width: ${width.mobileMenu}px) {
    align-items: center;
  }
`

interface JobPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
    activeJob: TeamtailorJob
    jobs: TeamtailorJobConnection
    benefits: MarkdownRemarkConnection
    images: FileConnection
    collageImages: FileConnection
    personaImages: FileConnection
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
    const activeJob = data.activeJob
    const jobs = data.jobs.edges
    const benefits = data.benefits.edges
    const images = data.images.edges
    const personaImages = data.personaImages.edges

    const benefitsWithImage = benefits.filter(edge => edge.node.frontmatter.image)
    const benefitsWithoutImage = benefits.filter(edge => !edge.node.frontmatter.image)

    const collageImages = findImagesByRelativePaths(
      data.collageImages.edges,
      page.node.frontmatter.images
    )

    return (
      <DefaultLayout location={location}>
        <Helmet title={page.node.frontmatter.title} />

        <Vertical spacing={spacing.large}>
          <MainHeading>{page.node.frontmatter.heading}</MainHeading>
          <Lead>{page.node.frontmatter.lead}</Lead>
        </Vertical>
        <Personas>
          {jobs.map((edge, index) => {
            return (
              <Persona
                key={"person" + index}
                iconSrc={personaImages[index].node.childImageSharp.gatsbyImageData.images.fallback.src}
                iconSrcSet={personaImages[index].node.childImageSharp.gatsbyImageData.images.fallback.srcSet}
                isActive={
                  this.state.selectedIndex !== undefined
                    ? this.state.selectedIndex === index
                    : activeJob
                    ? activeJob.id === edge.node.id
                    : index === 0
                }
                name={edge.node.attributes.title}
                onClick={this.handleClick.bind(this, index, edge.node.fields.href)}
              >
                <StyledPersonaContent spacing={spacing.large}>
                  <Text>{edge.node.attributes.body}</Text>
                  <Button
                    href={edge.node.links.careersite_job_apply_url}
                    openInNewWindow={true}
                    style={{ maxWidth: 280 }}
                  >
                    Ansök direkt i Teamtailor
                  </Button>
                </StyledPersonaContent>
              </Persona>
            )
          })}
        </Personas>

        <SectionHeading>{page.node.frontmatter.section1.heading}</SectionHeading>
        {benefitsWithImage.map((edge: MarkdownRemarkEdge, index: number) => {
          const image = findImageByRelativePath(images, edge.node.frontmatter.image)
          return (
            <React.Fragment key={"benefit" + index}>
              {index === 3 && (
                <StyledBreakout>
                  <Collage className="collage" images={collageImages} />
                  <Wrapper>
                    <Horizontal
                      breakpoint={width.tablet}
                      distribute={true}
                      separator={true}
                      spacing={spacing.large}
                    >
                      {benefitsWithoutImage.map((edge2, index2) => (
                        <Vertical key={"benefit2" + index2} spacing={spacing.small}>
                          <SubHeading>{edge2.node.frontmatter.title}</SubHeading>
                          <Text>{edge2.node.html}</Text>
                        </Vertical>
                      ))}
                    </Horizontal>
                  </Wrapper>
                </StyledBreakout>
              )}
              <Media
                heading={edge.node.frontmatter.title}
                src={image && image.src}
                srcSet={image && image.srcSet}
              >
                {edge.node.html}
              </Media>
            </React.Fragment>
          )
        })}

        <SectionHeading>{page.node.frontmatter.section2.heading}</SectionHeading>
        <Vertical alignHorizontal={types.Alignment.Center} spacing={spacing.large}>
          <Text>
            <p>{page.node.frontmatter.section2.content}</p>
          </Text>
          <Button href="mailto:info@kits.se">Kontakta oss</Button>
        </Vertical>
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
    page: allMarkdownRemark(filter: { frontmatter: { type: { eq: "jobPage" } } }) {
      edges {
        node {
          frontmatter {
            title
            heading
            lead
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
      sort: { order: ASC, fields: [frontmatter___index] }
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
          ...ImageFragment
        }
      }
    }

    collageImages: allFile(
      filter: {
        internal: { mediaType: { eq: "image/jpeg" } }
        relativePath: { regex: "/^formaner_/" }
      }
    ) {
      edges {
        node {
          ...ImageFragmentCollage
        }
      }
    }

    personaImages: allFile(
      filter: {
        internal: { mediaType: { eq: "image/png" } }
        relativePath: { regex: "/^persona_/" }
      }
      sort: { order: ASC, fields: [relativePath] }
    ) {
      edges {
        node {
          ...ImageFragmentPersona
        }
      }
    }
  }
`
