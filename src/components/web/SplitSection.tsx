import * as React from "react"
import styled from "styled-components"

import { headerMinHeight, onMobile } from "./layout"

export interface SplitImage {
  src: string
  srcSet?: string
}

export interface SplitSectionProps {
  image?: SplitImage
  imageSide?: "left" | "right"
  // För lång text: bilden ligger överst och följer med när texten skrollar.
  stickyImage?: boolean
  children: React.ReactNode
}

const Split = styled.div<{ $imageSide: "left" | "right"; $sticky: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-96);
  align-items: ${({ $sticky }) => ($sticky ? "start" : "center")};

  & > img {
    position: ${({ $sticky }) => ($sticky ? "sticky" : "static")};
    top: calc(${headerMinHeight}px + var(--spacing-32));
  }

  & > :first-child {
    order: ${({ $imageSide }) => ($imageSide === "left" ? 0 : 1)};
  }

  ${onMobile} {
    grid-template-columns: 1fr;
    gap: var(--spacing-32);

    & > :first-child {
      order: 0;
    }

    & > img {
      position: static;
    }
  }
`

const Image = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
`

// Bild och text sida vid sida (staplas på mobil, bilden först). Utan bild blir det bara text.
// Ligger i en Section; sköter inte egen bakgrund eller luft.
export const SplitSection = ({
  image,
  imageSide = "left",
  stickyImage = false,
  children
}: SplitSectionProps) =>
  image ? (
    <Split $imageSide={imageSide} $sticky={stickyImage}>
      <Image
        src={image.src}
        srcSet={image.srcSet}
        sizes="(max-width: 600px) 100vw, 50vw"
        alt=""
        loading="lazy"
      />
      <div>{children}</div>
    </Split>
  ) : (
    <div>{children}</div>
  )
