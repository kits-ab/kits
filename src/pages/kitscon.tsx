import { Typography } from "@kokitotsos/kits-ui"
import { graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { FileConnection, MarkdownRemark, MarkdownRemarkConnection } from "../../gatsby-types"
import { Seo } from "../components/Seo"
import { Collage } from "../components/web/Collage"
import { Hero } from "../components/web/Hero"
import { KitsConSchedule } from "../components/web/KitsConSchedule"
import { KitsConTimeline } from "../components/web/KitsConTimeline"
import { onMobile } from "../components/web/layout"
import { Prose } from "../components/web/Prose"
import { Section } from "../components/web/Section"
import { Stack } from "../components/web/Stack"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"
import type { Person } from "../types/Person"
import { formatPeriod } from "../utils/dateUtils"
import { findImagesByRelativePaths } from "../utils/imageUtils"
import { edgeToPerson } from "../utils/personUtils"

const Intro = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--spacing-56);
  align-items: start;

  ${onMobile} {
    grid-template-columns: 1fr;
    gap: var(--spacing-24);
  }
`

const Logo = styled.img`
  display: block;
  width: 200px;
  height: 200px;
`

interface KitsConPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
    activeKitscon: MarkdownRemark
    latestKitscon: MarkdownRemarkConnection
    kitscons: MarkdownRemarkConnection
    persons: MarkdownRemarkConnection
    avatars: FileConnection
    collageImages: FileConnection
  }
}

export default ({ data, location }: KitsConPageProps) => {
  const page = data.page.edges[0]
  const kitscon = data.activeKitscon || data.latestKitscon.edges[0].node
  const { frontmatter } = kitscon
  const avatars = data.avatars.edges
  const persons = data.persons.edges
    .map((edge) => edgeToPerson(edge, avatars))
    .filter((person) => person !== undefined) as Person[]

  const collageImages = findImagesByRelativePaths(
    data.collageImages.edges,
    frontmatter.collageImages
      ? frontmatter.collageImages.map((collageImage) => collageImage.collageImage)
      : []
  )

  const timelineEvents = data.kitscons.edges.map((edge) => ({
    href: edge.node.fields.href,
    date: edge.node.frontmatter.start,
    title: edge.node.frontmatter.title
  }))

  return (
    <DefaultLayout location={location}>
      <Seo
        title={page.node.frontmatter.title}
        description="KitsCon, vår årliga utvecklarkonferens. Inspirerande föreläsningar om det senaste inom teknik, utveckling och säkerhet. Se program och talare."
        pathname={location.pathname}
      />
      <Hero
        variant="text"
        heading={page.node.frontmatter.heading}
        lead={page.node.frontmatter.lead}
      />

      <Section spaceTop={64}>
        <KitsConTimeline events={timelineEvents} activeHref={kitscon.fields?.href} />
      </Section>

      <Section tone="raised">
        <Stack $gap={80}>
          <Intro>
            {frontmatter.image && <Logo src={frontmatter.image} alt="" />}
            <Stack $gap={24}>
              <Stack $gap={8}>
                <Typography variant="h2" as="h2">
                  {frontmatter.title}
                </Typography>
                {frontmatter.tagLine && (
                  <Typography variant="subtitle">{frontmatter.tagLine}</Typography>
                )}
                <Typography variant="body" color="secondary">
                  {formatPeriod(frontmatter.start, frontmatter.end)}, {frontmatter.location}
                </Typography>
              </Stack>
              <Prose html={kitscon.html} />
            </Stack>
          </Intro>
          {collageImages.length > 0 && <Collage images={collageImages} />}
        </Stack>
      </Section>

      {frontmatter.schema && (
        <Section>
          <KitsConSchedule schema={frontmatter.schema} persons={persons} />
        </Section>
      )}
    </DefaultLayout>
  )
}

export const query = graphql`
  query KonferensInfoQuery($href: String = "") {
    page: allMarkdownRemark(filter: { frontmatter: { type: { eq: "kitsconPage" } } }) {
      edges {
        node {
          frontmatter {
            title
            heading
            lead
            section1 {
              heading
            }
          }
        }
      }
    }

    activeKitscon: markdownRemark(fields: { href: { eq: $href } }) {
      fields {
        href
      }
      frontmatter {
        title
        tagLine
        location
        start
        end
        image
        collageImages {
          collageImage
        }
        schema {
          start
          end
          href
          title
          details
          presenters
          externalpresenter {
            name
            href
            avatarSrc
          }
          location {
            coordinates
            title
          }
          presentation
          type
          youtubeId
        }
      }
      html
    }

    latestKitscon: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "conference" }, active: { eq: true } } }
      limit: 1
      sort: { frontmatter: { start: DESC } }
    ) {
      edges {
        node {
          fields {
            href
          }
          frontmatter {
            title
            tagLine
            location
            start
            end
            image
            collageImages {
              collageImage
            }
            schema {
              start
              end
              href
              title
              details
              presenters
              externalpresenter {
                name
                href
                avatarSrc
              }
              location {
                coordinates
                title
              }
              presentation
              type
              youtubeId
            }
          }
          html
        }
      }
    }

    kitscons: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "conference" }, active: { eq: true } } }
    ) {
      edges {
        node {
          fields {
            href
          }
          frontmatter {
            title
            start
          }
        }
      }
    }

    persons: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "person" } } }
      sort: { frontmatter: { title: ASC } }
    ) {
      edges {
        node {
          ...PersonPublicFragment
        }
      }
    }

    avatars: allFile(
      filter: {
        internal: { mediaType: { eq: "image/jpeg" } }
        relativePath: { regex: "/^medarbetare_.*-avatar/" }
      }
    ) {
      edges {
        node {
          ...ImageFragmentAvatar
        }
      }
    }

    collageImages: allFile(
      filter: {
        internal: { mediaType: { in: ["image/jpeg", "image/png"] } }
        relativePath: { regex: "/^kitscon_collage_/" }
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
