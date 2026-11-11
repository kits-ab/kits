import { graphql } from "gatsby"

import { findImageByRelativePath } from "./imageUtils"
import { FileEdge, MarkdownRemarkEdge, O365User } from "../../gatsby-types"
import { Email, Person, PhoneNumber, SocialType, Username } from "../types/Person"

// Bara det som syns i listor (namn, titel, porträtt). Telefon, e-post, sociala konton och taggar
// hämtas inte, eftersom allt en query hämtar hamnar i sidans publika page-data.json.
export const personPublicFragment = graphql`
  fragment PersonPublicFragment on MarkdownRemark {
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
    }
  }
`

// Alla uppgifter om en person. Använd bara där personens egna kontaktuppgifter ska visas.
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
): Person | undefined => {
  if (!edge || !edge.node || !edge.node.fields || !edge.node.frontmatter) {
    return undefined
  }

  const person = edge.node.frontmatter

  const phone = person.phone ? new PhoneNumber(person.phone) : undefined
  const email = person.email ? new Email(person.email) : undefined

  const social = person.social || {}
  const github = social.github ? new Username(social.github, SocialType.GitHub) : undefined
  const linkedin = social.linkedin ? new Username(social.linkedin, SocialType.LinkedIn) : undefined
  const keybase = social.keybase ? new Username(social.keybase, SocialType.Keybase) : undefined
  const twitter = social.twitter ? new Username(social.twitter, SocialType.Twitter) : undefined

  // const href =
  //   edge.node.frontmatter.alumni !== true && edge.node.fields ? edge.node.fields.href : undefined
  const href = undefined

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

export const findPersonById = (persons: Person[], id: string) => {
  return persons.find((person) => person.id === id)
}

export const findPersonsByIds = (persons: (Person | undefined)[], ids: string[]) => {
  return persons.filter(
    (person) => person !== undefined && ids.indexOf(person.id) !== -1
  ) as Person[]
}

export const enrichPersonWithO365 = (person: Person, o365user: O365User) => {
  if (o365user && o365user.mobilePhone) {
    person.phone = new PhoneNumber(o365user.mobilePhone.replace(/\+46/, "0"))
  }
}
