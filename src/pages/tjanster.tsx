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

import { CallToAction } from "../components/CallToAction"
import { MarkdownField } from "../components/MarkdownField"
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
        offer1: string
        offer2: string
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
        cta: {
          heading: string
          content: string
          buttonText: string
          buttonUrl: string
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
          <MarkdownField text={frontmatter.lead} inline={true} />
        </Lead>

        <Horizontal
          breakpoint={width.tablet}
          distribute={true}
          spacing={spacing.large}
          alignVertical={types.Alignment.Start}
        >
          <Vertical spacing={spacing.small}>
            <Lead className="is-centered">
              <p>
                <MarkdownField text={frontmatter.offer1} inline={true} />
              </p>
            </Lead>
          </Vertical>
          <Vertical spacing={spacing.small}>
            <Lead className="is-centered">
              <p>
                <MarkdownField text={frontmatter.offer2} inline={true} />
              </p>
            </Lead>
          </Vertical>
        </Horizontal>

        <Lead>
          <MarkdownField text={frontmatter.lead2} inline={true} />
        </Lead>

        <Vertical spacing={spacing.medium}>
          <Link to={frontmatter.kis.url} style={{ textDecoration: "none", color: "inherit" }}>
            <SectionHeading>
              <MarkdownField text={frontmatter.kis.heading} inline={true} />
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
                <MarkdownField text={frontmatter.kitsec.heading} inline={true} />
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

      <CallToAction
        heading={frontmatter.cta.heading}
        content={frontmatter.cta.content}
        buttonText={frontmatter.cta.buttonText}
        buttonHref={frontmatter.cta.buttonUrl}
      />
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
        offer1
        offer2
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
        cta {
          heading
          content
          buttonText
          buttonUrl
        }
      }
    }
  }
`

export default TjansterPage
