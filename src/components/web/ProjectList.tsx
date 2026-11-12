import { Typography } from "@kokitotsos/kits-ui"
import * as React from "react"

import { Prose } from "./Prose"
import { SplitImage, SplitSection } from "./SplitSection"
import { Stack } from "./Stack"
import { TextLink } from "./TextLink"

export interface ProjectListItem {
  key: string
  title: string
  href?: string
  image?: SplitImage
  html: string
}

export interface ProjectListProps {
  heading: string
  items: ProjectListItem[]
}

// Lista med projekt: rubrik och sedan bild och text per projekt, bilden omväxlande till vänster
// och höger.
export const ProjectList = ({ heading, items }: ProjectListProps) => (
  <Stack $gap={80}>
    <Typography variant="h2" as="h2">
      {heading}
    </Typography>
    {items.map((item, index) => (
      <SplitSection
        key={item.key}
        image={item.image}
        imageSide={index % 2 === 0 ? "left" : "right"}
      >
        <Stack $gap={16}>
          <Typography variant="h3" as="h3">
            {item.href ? <TextLink href={item.href}>{item.title}</TextLink> : item.title}
          </Typography>
          <Prose html={item.html} />
        </Stack>
      </SplitSection>
    ))}
  </Stack>
)
