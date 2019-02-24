import { graphql } from "gatsby"

import { types } from "@kokitotsos/react-components"

import { FileEdge, MarkdownRemarkEdge } from "../types/graphql"
import { findImageByRelativePath } from "./imageUtils"

export const personFragment = graphql`
  fragment PersonFragment on MarkdownRemark {
    fields {
      href
    }
    frontmatter {
      id
      title
      tagLine
      alumni
      image
      avatar
      phone
      email
      social {
        github
        linkedin
        microblog
        keybase
        twitter
      }
      tags
    }
  }
`

export const edgeToPerson = (
  edge: MarkdownRemarkEdge,
  avatars?: FileEdge[]
): types.Person | undefined => {
  if (!edge || !edge.node || !edge.node.fields || !edge.node.frontmatter) {
    return undefined
  }

  const person = edge.node.frontmatter

  const phone = person.phone ? new types.PhoneNumber(person.phone) : undefined
  const email = person.email ? new types.Email(person.email) : undefined

  const social = person.social || {}
  const github = social.github
    ? new types.Username(social.github, types.SocialType.GitHub)
    : undefined
  const linkedin = social.linkedin
    ? new types.Username(social.linkedin, types.SocialType.LinkedIn)
    : undefined
  const microblog = social.microblog
    ? new types.Username(social.microblog, types.SocialType.MicroBlog)
    : undefined
  const keybase = social.keybase
    ? new types.Username(social.keybase, types.SocialType.Keybase)
    : undefined
  const twitter = social.twitter
    ? new types.Username(social.twitter, types.SocialType.Twitter)
    : undefined

  const href =
    edge.node.frontmatter.alumni !== true && edge.node.fields ? edge.node.fields.href : undefined

  const avatar = avatars ? findImageByRelativePath(avatars, person.avatar) : undefined

  return {
    id: person.id,
    name: person.title,
    tagLine: person.tagLine,
    imageSrc: person.image,
    avatarSrc: avatar ? avatar.src : undefined,
    avatarSrcSet: avatar ? avatar.srcSet : undefined,
    href,
    phone,
    email,
    social: {
      github,
      linkedin,
      microblog,
      keybase,
      twitter
    },
    tags: person.tags
  }
}

export const findPersonById = (persons: types.Person[], id: string) => {
  return persons.find(person => person.id === id)
}

export const findPersonsByIds = (persons: types.Person[], ids: string[]) => {
  return persons.filter(person => ids.indexOf(person.id) !== -1)
}
