import {
  GlobalStyles as GlobalComponentStyles,
  LinkContext,
  spacing,
  Vertical,
  Wrapper
} from "@kokitotsos/react-components"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"

import "@kits-ab/kits-ui/styles.css"

import { ContentYamlConnection } from "../../gatsby-types"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { KitsRouter } from "../components/web/KitsRouter"
import { SiteFooter } from "../components/web/SiteFooter"
import { SiteHeader } from "../components/web/SiteHeader"
import "../styles/fonts.css"
import { SiteGlobalStyles } from "../styles/SiteGlobalStyles"

const GlobalSiteStyles = createGlobalStyle`
  html {
    background-color: var(--background1);
    box-sizing: border-box;
    height: 100%;
  }

  body {
    height: 100%;
    overflow-x: hidden;
  }

  #___gatsby {
    height: 100%;

    & > * {
      height: 100%;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  .is-centered {
    text-align: center;
  }

  .is-flexed {
    flex: 1 1 auto;
  }

  .max-100 {
    max-width: 100%;
  }

  strong, b {
    font-weight: 700;
  }
`

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: React.ReactNode
}

interface QueryResult {
  kits: ContentYamlConnection
}

export class DefaultLayout extends React.PureComponent<DefaultLayoutProps> {
  public render() {
    return (
      <>
        <GlobalComponentStyles />
        <GlobalSiteStyles />
        <SiteGlobalStyles />
        <LinkContext.Provider
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          value={{ linkComponent: Link as any, navLinkComponent: Link as any }}
        >
          <KitsRouter>
            <Helmet>
              <html lang="sv" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
              />
              <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
              <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Helmet>
            <SiteHeader currentPath={this.props.location.pathname} />
            <Wrapper spacing={spacing.huge} style={{ minHeight: "100%" }}>
              <Helmet defaultTitle="KITS" titleTemplate="%s | KITS" />
              <Vertical
                spacing={spacing.huge}
                style={{ flex: "1 1 auto", marginTop: spacing.large }}
              >
                <Breadcrumbs location={this.props.location} />
                {this.props.children}
              </Vertical>
            </Wrapper>
            <KitsFooter />
          </KitsRouter>
        </LinkContext.Provider>
      </>
    )
  }
}

function KitsFooter() {
  const renderFooter = ({ kits }: QueryResult) => {
    const kitsInfo = kits.edges[0].node
    return (
      <SiteFooter
        name={kitsInfo.name}
        street={kitsInfo.address.street}
        postalCode={kitsInfo.address.postalCode}
        city={kitsInfo.address.city}
        email={kitsInfo.email}
      />
    )
  }
  const data = useStaticQuery(query)
  return renderFooter(data)
}

const query = graphql`
  query KITSInfoQuery {
    kits: allContentYaml {
      edges {
        node {
          name
          address {
            street
            postalCode
            city
          }
          phone
          email
          social {
            facebook
            github
            linkedin
            twitter
          }
        }
      }
    }
  }
`
