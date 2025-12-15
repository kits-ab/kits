import { types } from "@kokitotsos/react-components"
import { graphql } from "gatsby"

import { findImageByRelativePath } from "./imageUtils"
import { FileEdge, MarkdownRemarkEdge, O365User } from "../../gatsby-types"

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
      keybase,
      twitter
    },
    tags: person.tags
  }
}

export const findPersonById = (persons: types.Person[], id: string) => {
  return persons.find((person) => person.id === id)
}

export const findPersonsByIds = (persons: (types.Person | undefined)[], ids: string[]) => {
  return persons.filter(
    (person) => person !== undefined && ids.indexOf(person.id) !== -1
  ) as types.Person[]
}

export const enrichPersonWithO365 = (person: types.Person, o365user: O365User) => {
  if (o365user && o365user.mobilePhone) {
    person.phone = new types.PhoneNumber(o365user.mobilePhone.replace(/\+46/, "0"))
  }
}
