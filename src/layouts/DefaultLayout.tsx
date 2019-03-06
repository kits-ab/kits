import Link from "gatsby-link"
import * as React from "react"
import Helmet from "react-helmet"
import { createGlobalStyle } from "styled-components"

import {
  Breakout,
  Footer,
  GlobalStyles as GlobalComponentStyles,
  Header,
  LinkContext,
  spacing,
  types,
  Vertical,
  width,
  Wrapper
} from "@kokitotsos/react-components"
import { graphql, StaticQuery } from "gatsby"
import { ContentYamlConnection } from "../types/graphql"

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
`

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
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
        <LinkContext.Provider value={{ linkComponent: Link as any, navLinkComponent: Link as any }}>
          <Helmet>
            <html lang="sv" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
            />
          </Helmet>
          <Wrapper spacing={spacing.huge} style={{ minHeight: "100%" }}>
            <Helmet defaultTitle="KITS" titleTemplate="%s | KITS" />
            <Breakout>
              <Header
                breakpoint={width.mobileMenu}
                links={[
                  { text: "Om KITS", href: "/om" },
                  { text: "Erbjudanden", href: "/erbjudanden" },
                  { text: "Bli en av oss", href: "/jobb" },
                  { text: "KitsCon", href: "/kitscon" },
                  { text: "Blogg", href: "/blogg" }
                ]}
              />
            </Breakout>
            <Vertical spacing={spacing.huge} style={{ flex: "1 1 auto", marginTop: 120 }}>
              {this.props.children}
            </Vertical>
            <Breakout style={{ flex: 0 }}>
              <StaticQuery query={query} render={renderFooter} />
            </Breakout>
          </Wrapper>
        </LinkContext.Provider>
      </>
    )
  }
}

const renderFooter = ({ kits }: QueryResult) => {
  const kitsInfo = kits.edges[0].node
  return (
    <Footer
      info={{
        name: kitsInfo.name,
        street: kitsInfo.address.street,
        postalCode: new types.PostalCode(kitsInfo.address.postalCode),
        city: kitsInfo.address.city,
        phone: new types.PhoneNumber(kitsInfo.phone),
        email: new types.Email(kitsInfo.email),
        social: {
          facebook: new types.Username(kitsInfo.social.facebook, types.SocialType.Facebook),
          github: new types.Username(kitsInfo.social.github, types.SocialType.GitHub),
          linkedin: new types.Username(kitsInfo.social.linkedin, types.SocialType.LinkedIn),
          twitter: new types.Username(kitsInfo.social.twitter, types.SocialType.Twitter)
        }
      }}
    />
  )
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
