import { Horizontal, Image, spacing, width } from "@kokitotsos/react-components"
import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { FileConnection, MarkdownRemarkConnection } from "../../gatsby-types"
import { findImageByRelativePath } from "../utils/imageUtils"
import { edgeToPerson } from "../utils/personUtils"

const StyledHorizontal = styled(Horizontal)`
  margin-left: ${-spacing.medium / 2}px;
  margin-right: ${-spacing.medium / 2}px;

  @media (max-width: ${width.mobileMenu}px) {
    border-left: 0;
    border-right: 0;
    left: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    max-width: none;
    position: relative;
    right: 50%;
    width: 100vw;
  }

  > * {
    flex: 0 1 calc(${100 / 4}% - ${spacing.medium}px);
    height: 250px;
    margin-left: ${spacing.medium / 2}px;
    margin-right: ${spacing.medium / 2}px;
    margin-top: ${spacing.medium}px;

    @media (max-width: ${width.desktop}px) {
      flex: 0 1 calc(${100 / 3}% - ${spacing.medium}px);
    }

    @media (max-width: ${width.tablet}px) {
      flex: 0 1 calc(${100 / 2}% - ${spacing.medium}px);
    }

    @media (max-width: ${width.mobile}px) {
      border-left: 0;
      border-right: 0;
      margin-left: 0;
      margin-right: 0;
      flex: 0 1 100%;
    }
  }
`

interface QueryResult {
  persons: MarkdownRemarkConnection
  images: FileConnection
}

export class PersonList extends React.PureComponent {
  public render() {
    return <StaticQuery query={query} render={this.renderList} />
  }

  private renderList = ({ images, persons }: QueryResult) => (
    <StyledHorizontal wrapRows={true}>
      {persons.edges
        .map((edge) => edgeToPerson(edge))
        .map((person) => {
          if (person === undefined) {
            return null
          }
          const image =
            findImageByRelativePath(images.edges, person.imageSrc) ||
            findImageByRelativePath(images.edges, "/assets/medarbetare_default.jpg")
          return (
            <Image
              href={person.href}
              infoAdditionalText={person.tagLine}
              infoText={person.name}
              key={`person_${person.id}`}
              src={image && image.src}
              srcSet={image && image.srcSet}
            />
          )
        })}
    </StyledHorizontal>
  )
}

const query = graphql`query PersonsQuery {
  persons: allMarkdownRemark(
    filter: {frontmatter: {type: {eq: "person"}, alumni: {ne: true}}}
    sort: {frontmatter: {title: ASC}}
  ) {
    edges {
      node {
        ...PersonFragment
      }
    }
  }
  images: allFile(
    filter: {internal: {mediaType: {eq: "image/jpeg"}}, relativePath: {regex: "/^medarbetare_[^-]*\\.jpg/"}}
  ) {
    edges {
      node {
        ...ImageFragment
      }
    }
  }
}`
