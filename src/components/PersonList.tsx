import { Typography } from "@kits-ab/kits-ui"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { FileConnection, MarkdownRemarkConnection } from "../../gatsby-types"
import { findImageByRelativePath } from "../utils/imageUtils"
import { edgeToPerson } from "../utils/personUtils"
import { onMobile } from "./web/layout"
import { Stack } from "./web/Stack"

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--spacing-40) var(--spacing-24);
  margin: 0;
  padding: 0;
  list-style: none;

  ${onMobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-24) var(--spacing-16);
  }
`

const Portrait = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
`

const CardLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:focus-visible {
    outline: 3px solid var(--primary-border);
    outline-offset: 3px;
  }
`

interface QueryResult {
  persons: MarkdownRemarkConnection
  images: FileConnection
}

// Alla medarbetare (utom alumner) med porträtt, namn och titel.
export function PersonList() {
  const { images, persons }: QueryResult = useStaticQuery(query)
  return (
    <Grid>
      {persons.edges
        .map((edge) => edgeToPerson(edge))
        .map((person) => {
          if (person === undefined) {
            return null
          }
          const image =
            findImageByRelativePath(images.edges, person.imageSrc) ||
            findImageByRelativePath(images.edges, "/assets/medarbetare_default.jpg")
          const card = (
            <Stack $gap={12}>
              {image && (
                <Portrait
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes="(max-width: 600px) 50vw, 240px"
                  alt=""
                  loading="lazy"
                />
              )}
              <Stack $gap={4}>
                <Typography variant="subtitle" as="p">
                  {person.name}
                </Typography>
                <Typography variant="body" color="secondary">
                  {person.tagLine}
                </Typography>
              </Stack>
            </Stack>
          )
          return (
            <li key={person.id}>
              {person.href ? <CardLink to={person.href}>{card}</CardLink> : card}
            </li>
          )
        })}
    </Grid>
  )
}

const query = graphql`query PersonsQuery {
  persons: allMarkdownRemark(
    filter: {frontmatter: {type: {eq: "person"}, alumni: {ne: true}}}
    sort: {frontmatter: {title: ASC}}
  ) {
    edges {
      node {
        ...PersonPublicFragment
      }
    }
  }
  images: allFile(
    filter: {internal: {mediaType: {eq: "image/jpeg"}}, relativePath: {regex: "/^medarbetare_[^-]*\\.jpg/"}}
  ) {
    edges {
      node {
        ...ImageFragmentWide
      }
    }
  }
}`
