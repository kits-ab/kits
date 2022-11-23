import { graphql } from "gatsby"

import { FileEdge } from "../../gatsby-types"

export const imageFragmentCollage = graphql`
  fragment ImageFragmentCollage on File {
    relativePath
    childImageSharp {
      gatsbyImageData(layout: FIXED, height: 200, quality: 100)
    }
  }
`

export const imageFragmentPersona = graphql`
  fragment ImageFragmentPersona on File {
    relativePath
    childImageSharp {
      gatsbyImageData(layout: FIXED, height: 100, quality: 100)
    }
  }
`

export const imageFragment = graphql`
  fragment ImageFragment on File {
    relativePath
    childImageSharp {
      gatsbyImageData(
        layout: FIXED
        width: 450
        height: 250
        quality: 100
        transformOptions: {
            fit: COVER
            cropFocus: ENTROPY
        }
      )
    }
  }
`

export const imageFragmentAvatar = graphql`
  fragment ImageFragmentAvatar on File {
    relativePath
    childImageSharp {
      gatsbyImageData(layout: FIXED, width: 150, height: 150, quality: 100)
    }
  }
`

export const imageFragmentSmall = graphql`
  fragment ImageFragmentSmall on File {
    relativePath
    childImageSharp {
      gatsbyImageData(layout: FIXED, width: 150, height: 83, quality: 100)
    }
  }
`

export const findImageByRelativePath = (images: FileEdge[], relativePath: string | undefined) => {
  if (relativePath && relativePath.charAt(0) !== '/') {
    relativePath = `/${relativePath}`
  }
  const img = images.find((image) => `/assets/${image.node.relativePath}` === relativePath)
  if (img) {
    return {
      src: img.node.childImageSharp.gatsbyImageData.images.fallback.src,
      srcSet: img.node.childImageSharp.gatsbyImageData.images.fallback.srcSet
    }
  } else {
    return undefined
  }
}

export const findImagesByRelativePaths = (images: FileEdge[], relativePaths: string[]) => {
  return relativePaths
    ? (relativePaths
        .map((relativePath) => findImageByRelativePath(images, relativePath))
        .filter((image) => image !== undefined) as { src: any; srcSet: any }[])
    : []
}
