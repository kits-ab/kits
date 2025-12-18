import {
  Breakout,
  Button,
  colors,
  ContentHeading,
  Horizontal,
  Lead,
  MainHeading,
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
import styled from "styled-components"

import { MarkdownRemarkConnection } from "../../gatsby-types"
import { Seo } from "../components/Seo"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"

interface IndexPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
  }
}

const StyledBreakout = styled(Breakout)`
  background-color: ${colors.background2};
  background-color: var(--background2);
  padding-bottom: ${spacing.large}px;
  padding-top: ${spacing.large}px;
`

export default ({ data, location }: IndexPageProps) => {
  const page = data.page.edges[0]

  return (
    <DefaultLayout location={location}>
      <Seo
        title={page.node.frontmatter.title}
        description={page.node.frontmatter.seoDescription}
        pathname={location.pathname}
      />

      <Vertical spacing={spacing.large}>
        <MainHeading>{page.node.frontmatter.heading}</MainHeading>
        <Lead>{page.node.frontmatter.lead}</Lead>
      </Vertical>

      <StyledBreakout>
        <Wrapper>
          <Horizontal
            breakpoint={width.tablet}
            distribute={true}
            separator={true}
            spacing={spacing.large}
            style={{ alignItems: "stretch" }}
          >
            <Vertical alignHorizontal={types.Alignment.Center} spacing={spacing.large}>
              <Vertical
                alignHorizontal={types.Alignment.Center}
                spacing={spacing.small}
                className="max-100"
                style={{ flexGrow: 1 }}
              >
                <SubHeading>{page.node.frontmatter.section1.subheading}</SubHeading>
                <ContentHeading>{page.node.frontmatter.section1.heading}</ContentHeading>
                <Text className="is-flexed is-centered max-100">
                  <p>{page.node.frontmatter.section1.content}</p>
                </Text>
              </Vertical>
              <Button href="/tjanster">Läs mer om våra tjänster</Button>
            </Vertical>
            <Vertical alignHorizontal={types.Alignment.Center} spacing={spacing.large}>
              <Vertical
                alignHorizontal={types.Alignment.Center}
                spacing={spacing.small}
                className="max-100"
                style={{ flexGrow: 1 }}
              >
                <SubHeading>{page.node.frontmatter.section2.subheading}</SubHeading>
                <ContentHeading>{page.node.frontmatter.section2.heading}</ContentHeading>
                <Text className="is-flexed is-centered max-100">
                  <p>{page.node.frontmatter.section2.content}</p>
                </Text>
              </Vertical>
              <Button href="/karriar">Läs mer om att jobba på KITS</Button>
            </Vertical>
          </Horizontal>
        </Wrapper>
      </StyledBreakout>
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
          }
        }
      }
    }
  }
`
