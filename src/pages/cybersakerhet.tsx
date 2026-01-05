import {
  Breakout,
  DevelopmentIcon,
  Horizontal,
  Lead,
  MainHeading,
  Offer,
  OfferType,
  SecurityIcon,
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

interface CybersecurityPageProps extends PageProps {
  data: {
    page: MarkdownRemarkConnection
  }
}

const CybersecurityPage = ({ data, location }: CybersecurityPageProps) => {
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
                to="/cybersakerhet/it-sakerhet"
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
                to="/cybersakerhet/ot-sakerhet"
                style={{ textDecoration: "none", color: "inherit", display: "contents" }}
              >
                <StyledOffer
                  heading={page.section2.heading}
                  icon={<SecurityIcon />}
                  type={OfferType.Type2}
                  zIndex={2}
                >
                  <p>{page.section2.content}</p>
                </StyledOffer>
              </Link>
            </StyledHorizontal>
          </Wrapper>
        </Breakout>
      </Vertical>
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
