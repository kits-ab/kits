import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"

interface SeoProps {
  description?: string
  lang?: string
  meta?: any[]
  title: string
  image?: string
  pathname?: string
  article?: boolean
}

export const Seo = ({
  description,
  lang = "sv",
  meta = [],
  title,
  image,
  pathname,
  article
}: SeoProps) => {
  const { site } = useStaticQuery(graphql`
    query SeoMetaData {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteUrl = site.siteMetadata?.siteUrl

  const socialImage = image ? (image.startsWith("http") ? image : `${siteUrl}${image}`) : undefined
  const canonical = pathname ? `${siteUrl}${pathname}` : undefined

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
    />
  )
}
