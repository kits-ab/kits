import {
  Breakout,
  colors,
  ContentHeading,
  Horizontal,
  SectionHeading,
  Lead,
  MainHeading,
  spacing,
  Text,
  types,
  Vertical,
  width,
  Wrapper,
  SubHeading
} from "@kokitotsos/react-components"
import { graphql, Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { Seo } from "../components/Seo"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"

const StyledBreakout = styled(Breakout)`
  background-color: ${colors.background2};
  background-color: var(--background2);
  padding: ${spacing.large}px 0;
`

const StyledSectionHeading = styled(SectionHeading)`
  > span {
    background-color: ${colors.background2} !important;
    background-color: var(--background2) !important;
  }
`

interface TjansterPageProps extends PageProps {
  data: {
    page: {
      frontmatter: {
        title: string
        seoDescription: string
        heading: string
        lead: string
        lead2: string
        kis: {
          heading: string
          url: string
          text: string
          subServices: {
            title: string
            url: string
            categories: string[]
            areas?: string[]
          }[]
        }
        kitsec: {
          heading: string
          url: string
          text: string
          subServices: {
            title: string
            url: string
            categories: string[]
            areas?: string[]
            areasHeading1?: string
            areas1?: string[]
            areasHeading2?: string
            areas2?: string[]
          }[]
        }
        packagedOffers: {
          heading: string
          text: string
          offers: {
            title: string
            url: string
            text: string
          }[]
        }
      }
    }
  }
}

const TjansterPage = ({ data, location }: TjansterPageProps) => {
  const { frontmatter } = data.page

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: frontmatter.title,
    description: frontmatter.seoDescription,
    provider: {
      "@type": "Organization",
      name: "KITS",
      url: "https://kits.se"
    },
    serviceType: "IT Consulting",
    areaServed: "Sweden",
    offers: [
      ...frontmatter.kis.subServices.map((service) => ({
        "@type": "Offer",
        name: service.title,
        url: `https://kits.se${service.url}`,
        description: service.categories ? service.categories.join(", ") : ""
      })),
      ...frontmatter.kitsec.subServices.map((service) => ({
        "@type": "Offer",
        name: service.title,
        url: `https://kits.se${service.url}`,
        description: service.categories ? service.categories.join(", ") : ""
      }))
    ]
  }

  return (
    <DefaultLayout location={location}>
      <Seo
        title={frontmatter.title}
        description={frontmatter.seoDescription}
        pathname={location.pathname}
        jsonLd={[serviceSchema]}
      />
      <Vertical spacing={spacing.large}>
        <MainHeading>{frontmatter.heading}</MainHeading>
        <Lead>
          {frontmatter.lead.split("Keep IT Simple").map((part, index, arr) => (
            <React.Fragment key={index}>
              {part}
              {index < arr.length - 1 && (
                <>
                  <span style={{ fontWeight: "bold" }}>Keep IT Simple</span>
                  {
                    index === 0 &&
                      "" /* hack to match original text spacing/structure if needed, strictly following md content now */
                  }
                </>
              )}
            </React.Fragment>
          ))}
          {/* The above split/map is a bit risky if text changes. simpler to just render the lead text directly or use a specific bolding strategy if needed. 
               Given the markdown has the text as plain string, we might lose the bolding unless we process it. 
               For now, let's just render the lead text. If bolding is strict requirement we can use HTML in markdown or parse.
               Let's try to match the specific "Keep IT Simple" / "Keep IT Secure" bolding if present in the string.
           */}
          {/* Actually, let's just render the text. It's cleaner. If user wants bold, we can add HTML in MD. */}
          {/* Re-reading the original component, it had specific spans. 
               "Vårt erbjudande bygger på två kompletterande principer: Keep IT Simple att skapa... och Keep IT Secure att säkerställa..."
           */}
          Vårt erbjudande bygger på två kompletterande principer:{" "}
          <span style={{ fontWeight: "bold" }}>Keep IT Simple</span> att skapa tydliga, effektiva
          och hållbara system och <span style={{ fontWeight: "bold" }}>Keep IT Secure</span> att
          säkerställa att de är robusta och trygga över tid.
        </Lead>

        <Lead>{frontmatter.lead2}</Lead>

        <Vertical spacing={spacing.medium}>
          <Link to={frontmatter.kis.url} style={{ textDecoration: "none", color: "inherit" }}>
            <SectionHeading>
              {frontmatter.kis.heading.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i === 0 && <br />}
                </React.Fragment>
              ))}
            </SectionHeading>
          </Link>
          <Text>
            <p>{frontmatter.kis.text}</p>
          </Text>

          <Horizontal
            breakpoint={width.tablet}
            distribute={true}
            spacing={spacing.large}
            alignVertical={types.Alignment.Start}
          >
            {frontmatter.kis.subServices.map((service, index) => (
              <Vertical key={index} spacing={spacing.small}>
                <Link to={service.url} style={{ textDecoration: "none", color: "inherit" }}>
                  <ContentHeading>{service.title}</ContentHeading>
                </Link>
                <Text>
                  <p>
                    <SubHeading>Tjänstekategorier</SubHeading>
                  </p>
                  <ul>
                    {service.categories.map((cat, idx) => (
                      <li key={idx}>{cat}</li>
                    ))}
                  </ul>
                  {service.areas && (
                    <>
                      <p>
                        <SubHeading>Områden</SubHeading>
                      </p>
                      <ul>
                        {service.areas.map((area, idx) => (
                          <li key={idx}>{area}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </Text>
              </Vertical>
            ))}
          </Horizontal>
        </Vertical>
      </Vertical>

      <StyledBreakout>
        <Wrapper>
          <Vertical spacing={spacing.medium}>
            <Link to={frontmatter.kitsec.url} style={{ textDecoration: "none", color: "inherit" }}>
              <StyledSectionHeading>
                {frontmatter.kitsec.heading.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i === 0 && <br />}
                  </React.Fragment>
                ))}
              </StyledSectionHeading>
            </Link>
            <Text>
              <p>{frontmatter.kitsec.text}</p>
            </Text>

            <Horizontal
              breakpoint={width.tablet}
              distribute={true}
              spacing={spacing.large}
              alignVertical={types.Alignment.Start}
            >
              {frontmatter.kitsec.subServices.map((service, index) => (
                <Vertical key={index} spacing={spacing.small}>
                  <Link to={service.url} style={{ textDecoration: "none", color: "inherit" }}>
                    <ContentHeading>{service.title}</ContentHeading>
                  </Link>
                  <Text>
                    <p>
                      <SubHeading>Tjänstekategorier</SubHeading>
                    </p>
                    <ul>
                      {service.categories.map((cat, idx) => (
                        <li key={idx}>{cat}</li>
                      ))}
                    </ul>
                    {service.areasHeading1 && (
                      <>
                        <p>
                          <SubHeading>Områden</SubHeading>
                        </p>
                        <p>
                          <SubHeading>{service.areasHeading1}</SubHeading>
                        </p>
                        <ul>
                          {service.areas1?.map((area, idx) => (
                            <li key={idx}>{area}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {service.areasHeading2 && (
                      <>
                        <p>
                          <SubHeading>{service.areasHeading2}</SubHeading>
                        </p>
                        <ul>
                          {service.areas2?.map((area, idx) => (
                            <li key={idx}>{area}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {service.areas && (
                      <>
                        <p>
                          <SubHeading>Områden</SubHeading>
                        </p>
                        <ul>
                          {service.areas.map((area, idx) => (
                            <li key={idx}>{area}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </Text>
                </Vertical>
              ))}
            </Horizontal>
          </Vertical>
        </Wrapper>
      </StyledBreakout>

      <Wrapper>
        <Vertical spacing={spacing.medium} style={{ marginTop: spacing.large }}>
          <SectionHeading>{frontmatter.packagedOffers.heading}</SectionHeading>
          <Text>
            <p>{frontmatter.packagedOffers.text}</p>
          </Text>

          <Horizontal
            breakpoint={width.tablet}
            distribute={true}
            spacing={spacing.large}
            alignVertical={types.Alignment.Start}
          >
            {frontmatter.packagedOffers.offers.map((offer, index) => (
              <Vertical key={index} spacing={spacing.small}>
                <Link to={offer.url} style={{ textDecoration: "none", color: "inherit" }}>
                  <ContentHeading>{offer.title}</ContentHeading>
                </Link>
                <Text>
                  <p>{offer.text}</p>
                </Text>
              </Vertical>
            ))}
          </Horizontal>
        </Vertical>
      </Wrapper>
    </DefaultLayout>
  )
}

export const query = graphql`
  query ServicesPageQuery {
    page: markdownRemark(frontmatter: { type: { eq: "servicesPage" } }) {
      frontmatter {
        title
        seoDescription
        heading
        lead
        lead2
        kis {
          heading
          url
          text
          subServices {
            title
            url
            categories
            areas
          }
        }
        kitsec {
          heading
          url
          text
          subServices {
            title
            url
            categories
            areas
            areasHeading1
            areas1
            areasHeading2
            areas2
          }
        }
        packagedOffers {
          heading
          text
          offers {
            title
            url
            text
          }
        }
      }
    }
  }
`

export default TjansterPage
