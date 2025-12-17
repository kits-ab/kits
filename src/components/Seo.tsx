import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"

interface SeoProps {
  description?: string
  lang?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: any[]
  title: string
  image?: string
  pathname?: string
  article?: boolean
  jsonLd?: Record<string, unknown>[]
}

export const Seo = ({
  description,
  lang = "sv",
  meta = [],
  title,
  image,
  pathname,
  article,
  jsonLd
}: SeoProps) => {
  const { site } = useStaticQuery(graphql`
    query SeoMetaData {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteUrl = site.siteMetadata?.siteUrl

  const socialImage = image ? (image.startsWith("http") ? image : `${siteUrl}${image}`) : undefined
  const canonical = pathname ? `${siteUrl}${pathname}` : undefined

  // Default Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KITS",
    url: siteUrl,
    logo: `${siteUrl}/assets/logo.png`, // Assuming this exists, can be adjusted
    sameAs: ["https://www.linkedin.com/company/kits-ab/", "https://www.facebook.com/kitsab/"]
  }

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: defaultTitle,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  const schemas = [organizationSchema, websiteSchema, ...(jsonLd || [])]

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical
              }
            ]
          : []
      }
      meta={[
        {
          name: "description",
          content: metaDescription
        },
        {
          property: "og:title",
          content: title
        },
        {
          property: "og:description",
          content: metaDescription
        },
        {
          property: "og:type",
          content: article ? "article" : "website"
        },
        {
          property: "twitter:card",
          content: "summary_large_image"
        },
        {
          property: "twitter:creator",
          content: site.siteMetadata?.author || ""
        },
        {
          property: "twitter:title",
          content: title
        },
        {
          property: "twitter:description",
          content: metaDescription
        }
      ]
        .concat(
          socialImage
            ? [
                {
                  property: "og:image",
                  content: socialImage
                },
                {
                  property: "twitter:image",
                  content: socialImage
                }
              ]
            : []
        )
        .concat(meta)}
    >
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
