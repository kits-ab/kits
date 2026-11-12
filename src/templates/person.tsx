import { Tag, Typography } from "@kokitotsos/kits-ui"
import { graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { FileConnection, MarkdownRemark, MarkdownRemarkEdge, O365User } from "../../gatsby-types"
import { PersonList } from "../components/PersonList"
import { Seo } from "../components/Seo"
import { onMobile } from "../components/web/layout"
import { Prose } from "../components/web/Prose"
import { Section } from "../components/web/Section"
import { Stack } from "../components/web/Stack"
import { TextLink } from "../components/web/TextLink"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"
import { findImageByRelativePath } from "../utils/imageUtils"
import { edgeToPerson, enrichPersonWithO365 } from "../utils/personUtils"

interface PersonPageProps extends PageProps {
  data: {
    person: MarkdownRemark
    images: FileConnection
    o365person: O365User
  }
}

const Profile = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: var(--spacing-64);
  align-items: start;

  ${onMobile} {
    grid-template-columns: 1fr;
    gap: var(--spacing-32);
  }
`

const Portrait = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-8) var(--spacing-24);
`

const socialNames: Record<string, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  keybase: "Keybase",
  twitter: "Twitter"
}

export default ({ data, location }: PersonPageProps) => {
  const person = edgeToPerson({ node: data.person } as MarkdownRemarkEdge)!
  const images = data.images
  const firstname = person.name.split(" ")[0]
  const image =
    findImageByRelativePath(images.edges, person.imageSrc) ||
    findImageByRelativePath(images.edges, "/assets/medarbetare_default.jpg")
  enrichPersonWithO365(person, data.o365person)
  const social = Object.entries(person.social ?? {}).filter(([, username]) => username)

  return (
    <DefaultLayout location={location}>
      <Seo title={person.name} pathname={location.pathname} />

      <Section spaceTop={64}>
        <Profile>
          {image && <Portrait src={image.src} srcSet={image.srcSet} alt="" />}
          <Stack $gap={24}>
            <Stack $gap={8}>
              <Typography variant="h1" as="h1">
                {person.name}
              </Typography>
              <Typography variant="subtitle" color="secondary">
                {person.tagLine}
              </Typography>
            </Stack>
            {person.tags && (
              <Row>
                {person.tags.map((tag: string) => (
                  <Tag key={tag} variant="neutral" label={tag} slim />
                ))}
              </Row>
            )}
            <Prose html={data.person.html} />
            <Typography variant="mono" as="div">
              <Row>
                {person.phone && (
                  <TextLink href={person.phone.toLink()}>{person.phone.toString()}</TextLink>
                )}
                {person.email && (
                  <TextLink href={person.email.toLink()}>{person.email.toString()}</TextLink>
                )}
                {social.map(([type, username]) => (
                  <TextLink key={type} href={username!.toLink()}>
                    {socialNames[type] ?? type}
                  </TextLink>
                ))}
              </Row>
            </Typography>
          </Stack>
        </Profile>
      </Section>

      <Section tone="raised">
        <Stack $gap={48}>
          <Typography variant="h2" as="h2">
            {firstname}
            {firstname.endsWith("s") ? "" : "s"} kollegor
          </Typography>
          <PersonList />
        </Stack>
      </Section>
    </DefaultLayout>
  )
}

export const query = graphql`
  query PersonPageQuery($href: String, $email: String) {
    person: markdownRemark(fields: { href: { eq: $href } }) {
      html
      ...PersonFragment
    }

    o365person: o365User(mail: {eq: $email})  {
      mobilePhone
      officeLocation
      businessPhones
    }

    images: allFile(
      filter: {
        internal: { mediaType: { eq: "image/jpeg" } }
        relativePath: { regex: "/^medarbetare_[^-]*\\.jpg/" }
      }
    ) {
      edges {
        node {
          ...ImageFragmentWide
        }
      }
    }
  }
`
