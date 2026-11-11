import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

// Global CSS i samma ordning på alla sidor: grundåterställning, kartans stilar (LocationMap) och
// sist kits-ui. Importeras kartans CSS bara där kartan används blir ordningen olika mellan sidorna.
import "normalize.css"
import "mapbox-gl/dist/mapbox-gl.css"
import "@kits-ab/kits-ui/styles.css"

import { ContentYamlConnection } from "../../gatsby-types"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { Container } from "../components/web/Container"
import { KitsRouter } from "../components/web/KitsRouter"
import { SiteFooter } from "../components/web/SiteFooter"
import { SiteHeader } from "../components/web/SiteHeader"
import "../styles/fonts.css"
import { SiteGlobalStyles } from "../styles/SiteGlobalStyles"

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: React.ReactNode
}

const BreadcrumbBar = styled(Container)`
  padding-top: var(--spacing-24);
`

interface QueryResult {
  kits: ContentYamlConnection
}

export class DefaultLayout extends React.PureComponent<DefaultLayoutProps> {
  public render() {
    return (
      <>
        <SiteGlobalStyles />
        <KitsRouter>
          <Helmet>
            <html lang="sv" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
            />
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          </Helmet>
          <Helmet defaultTitle="KITS" titleTemplate="%s | KITS" />
          <SiteHeader currentPath={this.props.location.pathname} />
          <main>
            {this.props.location.pathname !== "/" && (
              <BreadcrumbBar>
                <Breadcrumbs location={this.props.location} />
              </BreadcrumbBar>
            )}
            {this.props.children}
          </main>
          <KitsFooter />
        </KitsRouter>
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
          email
        }
      }
    }
  }
`
