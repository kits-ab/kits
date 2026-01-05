import {
  Breakout,
  DevelopmentIcon,
  Horizontal,
  IntegrationIcon,
  Lead,
  MainHeading,
  Offer,
  OfferType,
  ProjectIcon,
  spacing,
  types,
  Vertical,
  width,
  Wrapper
} from "@kokitotsos/react-components"
import { graphql, Link } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import { MarkdownRemarkConnection } from "../../gatsby-types"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"

const StyledHorizontal = styled(Horizontal)`
  margin-left: ${-spacing.large}px;
  margin-right: ${-spacing.large}px;
  padding: 25px 0;
`

const StyledOffer = styled(Offer)`
  width: 50%;

  @media (max-width: ${width.tablet}px) {
    width: 100%;

    > * {
      padding-left: 55px;
      padding-right: 55px;
    }
  }
`

interface TeknikPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
  }
}

const TeknikPage = ({ data, location }: TeknikPageProps) => {
  const page = data.page.edges[0].node.frontmatter

  return (
    <DefaultLayout location={location}>
      <Helmet title={page.title} meta={[{ name: "description", content: page.seoDescription }]} />
      <Vertical spacing={spacing.large}>
        <MainHeading>{page.heading}</MainHeading>
        <Lead>{page.lead}</Lead>

        <Breakout style={{ overflowX: "hidden" }}>
          <Wrapper>
            <StyledHorizontal wrapRows={true} alignVertical={types.Alignment.Start}>
              <Link
                to="/teknik-och-utveckling/systemutveckling"
                style={{ textDecoration: "none", color: "inherit", display: "contents" }}
              >
                <StyledOffer
                  heading={page.section1.heading}
                  icon={<DevelopmentIcon />}
                  type={OfferType.Type1}
                  zIndex={3}
                >
                  <p>{page.section1.content}</p>
                </StyledOffer>
              </Link>

              <Link
                to="/teknik-och-utveckling/projektledning"
                style={{ textDecoration: "none", color: "inherit", display: "contents" }}
              >
                <StyledOffer
                  heading={page.section2.heading}
                  icon={<ProjectIcon />}
                  type={OfferType.Type2}
                  zIndex={1}
                >
                  <p>{page.section2.content}</p>
                </StyledOffer>
              </Link>

              <Link
                to="/teknik-och-utveckling/integration"
                style={{ textDecoration: "none", color: "inherit", display: "contents" }}
              >
                <StyledOffer
                  heading={page.section3.heading}
                  icon={<IntegrationIcon />}
                  type={OfferType.Type3}
                  zIndex={2}
                >
                  <p>{page.section3.content}</p>
                </StyledOffer>
              </Link>

              <Link
                to="/kitsstudio"
                style={{ textDecoration: "none", color: "inherit", display: "contents" }}
              >
                <StyledOffer
                  heading={page.section4.heading}
                  icon={<DevelopmentIcon />}
                  type={OfferType.Type4}
                  zIndex={4}
                >
                  <p>{page.section4.content}</p>
                </StyledOffer>
              </Link>
            </StyledHorizontal>
          </Wrapper>
        </Breakout>
      </Vertical>
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
