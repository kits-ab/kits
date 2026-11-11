import { Link, Tag, Typography } from "@kits-ab/kits-ui"
import { graphql, Link as GatsbyLink } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { MarkdownField } from "../components/MarkdownField"
import { Seo } from "../components/Seo"
import { ContactBand } from "../components/web/ContactBand"
import { ContentCard } from "../components/web/ContentCard"
import { Grid } from "../components/web/Grid"
import { Hero } from "../components/web/Hero"
import { readableMaxWidth } from "../components/web/layout"
import { MasterDetail } from "../components/web/MasterDetail"
import { Section } from "../components/web/Section"
import { Stack } from "../components/web/Stack"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"

// Rubrikerna i innehållet är "Keep IT Secure  \nCybersäkerhet": första raden blir etikett.
const splitHeading = (heading: string) => {
  const [label, ...rest] = heading.split("\n").map((part) => part.trim())
  return rest.length > 0 ? { label, title: rest.join(" ") } : { label: undefined, title: label }
}

const Intro = styled.div`
  max-width: ${readableMaxWidth}px;
`

const HeadingLink = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.12em;
  }

  &:focus-visible {
    outline: 3px solid var(--primary-border);
    outline-offset: 3px;
  }
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-8);
`

const List = styled.ul`
  margin: 0;
  padding-left: var(--spacing-24);
  color: var(--text-secondary);
`

interface AreaGroup {
  heading?: string
  areas: string[]
}

const SectionIntro = ({ heading, url, text }: { heading: string; url?: string; text?: string }) => {
  const { label, title } = splitHeading(heading)
  return (
    <Intro>
      <Stack $gap={16}>
        {label && (
          <Typography variant="mono" color="brand">
            {label}
          </Typography>
        )}
        <Typography variant="h2" as="h2">
          {url ? <HeadingLink to={url}>{title}</HeadingLink> : title}
        </Typography>
        {text && (
          <Typography variant="body" color="secondary">
            {text}
          </Typography>
        )}
      </Stack>
    </Intro>
  )
}

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

  const kitsec = splitHeading(frontmatter.kitsec.heading)

  return (
    <DefaultLayout location={location} layout="profil2026">
      <Seo
        title={frontmatter.title}
        description={frontmatter.seoDescription}
        pathname={location.pathname}
        jsonLd={[serviceSchema]}
      />
      <Hero
        variant="text"
        heading={frontmatter.heading}
        lead={<MarkdownField text={frontmatter.lead} inline={true} />}
      />

      <Section spaceTop={96}>
        <Stack $gap={64}>
          <SectionIntro
            heading={frontmatter.kitsec.heading}
            url={frontmatter.kitsec.url}
            text={frontmatter.kitsec.text}
          />
          <MasterDetail
            label={kitsec.title}
            items={frontmatter.kitsec.subServices.map((service) => {
              const areaGroups: AreaGroup[] = [
                { heading: service.areasHeading1, areas: service.areas1 ?? [] },
                { heading: service.areasHeading2, areas: service.areas2 ?? [] },
                { areas: service.areas ?? [] }
              ].filter((group) => group.areas.length > 0)
              return {
                id: service.url,
                title: service.title,
                content: (
                  <Stack $gap={24}>
                    <Stack $gap={8}>
                      {kitsec.label && (
                        <Typography variant="mono" color="brand">
                          {kitsec.label}
                        </Typography>
                      )}
                      <Typography variant="h2" as="h3">
                        <HeadingLink to={service.url}>{service.title}</HeadingLink>
                      </Typography>
                    </Stack>
                    <Stack $gap={12}>
                      <Typography variant="subtitle" as="h4">
                        Tjänstekategorier
                      </Typography>
                      <Tags>
                        {service.categories.map((category) => (
                          <Tag key={category} variant="neutral" label={category} slim />
                        ))}
                      </Tags>
                    </Stack>
                    {areaGroups.length > 0 && (
                      <Stack $gap={12}>
                        <Typography variant="subtitle" as="h4">
                          Områden
                        </Typography>
                        {areaGroups.map((group, index) => (
                          <Stack key={index} $gap={8}>
                            {group.heading && (
                              <Typography variant="body" as="h5">
                                {group.heading}
                              </Typography>
                            )}
                            <List>
                              {group.areas.map((area) => (
                                <li key={area}>{area}</li>
                              ))}
                            </List>
                          </Stack>
                        ))}
                      </Stack>
                    )}
                  </Stack>
                )
              }
            })}
          />
        </Stack>
      </Section>

      <Section>
        <Stack $gap={64}>
          <SectionIntro
            heading={frontmatter.packagedOffers.heading}
            text={frontmatter.packagedOffers.text}
          />
          <Grid $columns={3}>
            {frontmatter.packagedOffers.offers.map((offer) => (
              <ContentCard key={offer.url} title={offer.title} href={offer.url} tone="brand">
                <Typography variant="body" color="secondary">
                  {offer.text}
                </Typography>
              </ContentCard>
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section>
        <Stack $gap={64}>
          <SectionIntro
            heading={frontmatter.kis.heading}
            url={frontmatter.kis.url}
            text={frontmatter.kis.text}
          />
          <Grid $columns={3}>
            {frontmatter.kis.subServices.map((service) => (
              <ContentCard
                key={service.url}
                label={service.categories.join(" · ")}
                title={service.title}
                href={service.url}
              >
                {service.areas && (
                  <Typography variant="body" color="secondary">
                    Områden: {service.areas.join(", ")}
                  </Typography>
                )}
              </ContentCard>
            ))}
          </Grid>
        </Stack>
      </Section>

      <ContactBand
        heading={frontmatter.cta.heading}
        text={<MarkdownField text={frontmatter.cta.content} inline={true} />}
        action={
          <Link
            href={frontmatter.cta.buttonUrl}
            variant="button"
            buttonVariant="primary"
            size="large"
          >
            {frontmatter.cta.buttonText}
          </Link>
        }
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
