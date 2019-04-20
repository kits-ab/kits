import { graphql } from "gatsby"

import { FileEdge } from "../types/graphql"

export const imageFragmentCollage = graphql`
  fragment ImageFragmentCollage on File {
    relativePath
    childImageSharp {
      fixed(height: 200, quality: 100) {
        src
        srcSet
      }
    }
  }
`

export const imageFragmentPersona = graphql`
  fragment ImageFragmentPersona on File {
    relativePath
    childImageSharp {
      fixed(height: 100, quality: 100) {
        src
        srcSet
      }
    }
  }
`

export const imageFragment = graphql`
  fragment ImageFragment on File {
    relativePath
    childImageSharp {
      fixed(width: 450, height: 250, quality: 100) {
        src
        srcSet
      }
    }
  }
`

export const imageFragmentAvatar = graphql`
  fragment ImageFragmentAvatar on File {
    relativePath
    childImageSharp {
      fixed(width: 150, height: 150, cropFocus: CENTER, quality: 100) {
        src
        srcSet
      }
    }
  }
`

export const imageFragmentSmall = graphql`
  fragment ImageFragmentSmall on File {
    relativePath
    childImageSharp {
      fixed(width: 150, height: 83, quality: 100) {
        src
        srcSet
      }
    }
  }
`

export const findImageByRelativePath = (images: FileEdge[], relativePath: string) => {
  const img = images.find(image => `/assets/${image.node.relativePath}` === relativePath)
  if (img) {
    return {
      src: img.node.childImageSharp.fixed.src,
      srcSet: img.node.childImageSharp.fixed.srcSet
    }
  } else {
    return undefined
  }
}

export const findImagesByRelativePaths = (images: FileEdge[], relativePaths: string[]) => {
  return relativePaths
    ? relativePaths
        .map(relativePath => findImageByRelativePath(images, relativePath))
        .filter(image => image !== undefined)
    : []
}
