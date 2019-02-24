import { isSameDay } from "date-fns"
import { graphql } from "gatsby"
import * as React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import {
  Breakout,
  Collage,
  ContentHeading,
  Horizontal,
  Lead,
  MainHeading,
  SectionHeading,
  spacing,
  SubHeading,
  Text,
  Timeline,
  Timeslot,
  types,
  Vertical,
  width,
  Wrapper
} from "@kokitotsos/react-components"

import { DefaultLayout } from "../layouts/DefaultLayout"
import {
  FileConnection,
  MarkdownRemark,
  MarkdownRemarkConnection,
  Schema_2
} from "../types/graphql"
import { PageProps } from "../types/PageProps"
import { formatPeriod, formatWeekday } from "../utils/dateUtils"
import { findImagesByRelativePaths } from "../utils/imageUtils"
import { toHTML } from "../utils/markdownUtils"
import { edgeToPerson, findPersonsByIds } from "../utils/personUtils"

const StyledBreakout = styled(Breakout)`
  background-color: var(--background2);
  margin-bottom: 150px !important;
  padding: ${spacing.huge}px 0;

  .collage {
    margin-bottom: -150px;
    margin-top: ${spacing.large}px;
  }
`

const StyledSectionHeading = styled(SectionHeading)`
  &:not(:first-child) {
    margin-top: ${spacing.huge}px;
  }
`

const StyledHorizontal = styled(Horizontal)`
  @media (max-width: ${width.mobileMenu}px) {
    text-align: center;

    img {
      margin: 0 auto !important;
    }
  }
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
  const kitscons = data.kitscons
  const avatars = data.avatars.edges
  const persons = data.persons.edges.map(edge => edgeToPerson(edge, avatars))

  const collageImages = findImagesByRelativePaths(
    data.collageImages.edges,
    kitscon.frontmatter.images
  )

  const timelineEvents = kitscons.edges.map(edge => ({
    href: edge.node.fields.href,
    date: edge.node.frontmatter.start
  }))

  return (
    <DefaultLayout location={location}>
      <Helmet title={page.node.frontmatter.title} />

      <Vertical spacing={spacing.large}>
        <MainHeading>{page.node.frontmatter.heading}</MainHeading>
        <Lead>{page.node.frontmatter.lead}</Lead>
      </Vertical>

      <StyledBreakout>
        <Wrapper>
          <Timeline events={timelineEvents} />
        </Wrapper>
        <Collage className="collage" images={collageImages} />
      </StyledBreakout>

      <Vertical spacing={spacing.large}>
        <StyledHorizontal spacing={spacing.large} breakpoint={width.mobileMenu}>
          <img src={kitscon.frontmatter.image} style={{ width: 200, height: 200 }} />
          <Vertical style={{ flex: 1 }}>
            <ContentHeading>{kitscon.frontmatter.title}</ContentHeading>
            <SubHeading>{kitscon.frontmatter.tagLine}</SubHeading>
            <SubHeading>
              {formatPeriod(kitscon.frontmatter.start, kitscon.frontmatter.end)},{" "}
              {kitscon.frontmatter.location}
            </SubHeading>
            <Text style={{ marginTop: 20 }}>{kitscon.html}</Text>
          </Vertical>
        </StyledHorizontal>
        <Vertical>
          {kitscon.frontmatter.schema && renderSchema(persons, kitscon.frontmatter.schema)}
        </Vertical>
      </Vertical>
    </DefaultLayout>
  )
}

const renderSchema = (persons: types.Person[], schema: Schema_2[]) => {
  let previousTime: string
  let previousSchema: Schema_2
  let connect = false

  const schemaContent: React.ReactNode[] = []

  schema.forEach(s => {
    if (!isSameDay(s.start, previousTime)) {
      if (previousSchema) {
        schemaContent.push(renderPresentation(persons, previousSchema, connect, true))
        previousSchema = undefined
      }
      schemaContent.push(<StyledSectionHeading>{formatWeekday(s.start)}</StyledSectionHeading>)
    }

    if (previousSchema) {
      const showEndTime = previousSchema.end !== s.start
      schemaContent.push(renderPresentation(persons, previousSchema, connect, showEndTime))
    }

    connect = previousSchema && previousSchema.end === s.start
    previousTime = s.start

    previousSchema = s
  })

  if (previousSchema) {
    schemaContent.push(renderPresentation(persons, previousSchema, connect, true))
  }

  return schemaContent
}

const renderPresentation = (
  persons: types.Person[],
  presentation: Schema_2,
  connect: boolean,
  showEndTime: boolean
) => {
  const presenters = presentation.presenters
    ? findPersonsByIds(persons, presentation.presenters)
    : undefined
  return (
    <Timeslot
      presenters={presenters}
      heading={presentation.title}
      startTime={presentation.start as any}
      endTime={presentation.end as any}
      href={presentation.href}
      location={
        presentation.location && presentation.location.coordinates
          ? (presentation.location as any)
          : undefined
      }
      type={presentation.type as types.TimeslotType}
      presentation={presentation.presentation}
      connectToPrevious={connect}
      showEndTime={showEndTime}
    >
      {presentation.details && toHTML(presentation.details)}
    </Timeslot>
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
      frontmatter {
        title
        tagLine
        location
        start
        end
        image
        images
        schema {
          start
          end
          href
          title
          details
          presenters
          location {
            coordinates
            title
          }
          presentation
          type
        }
      }
      html
    }

    latestKitscon: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "conference" }, active: { eq: true } } }
      limit: 1
      sort: { order: DESC, fields: [frontmatter___start] }
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
            images
            schema {
              start
              end
              href
              title
              details
              presenters
              location {
                coordinates
                title
              }
              presentation
              type
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
            start
          }
        }
      }
    }

    persons: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "person" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          ...PersonFragment
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
        internal: { mediaType: { eq: "image/jpeg" } }
        relativePath: { regex: "/^kitscon_collage_/" }
      }
    ) {
      edges {
        node {
          ...ImageFragmentCollage
        }
      }
    }
  }
`
