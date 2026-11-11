import * as React from "react"
import styled from "styled-components"

import { onMobile } from "./layout"

export interface GalleryProps {
  images: { src: string; srcSet?: string }[]
}

// Rader med samma höjd där bilderna växer tills raden är full, så att bilder med olika format
// och antal fyller ytan utan hål.
const Rows = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-16);

  ${onMobile} {
    gap: var(--spacing-8);
  }
`

const Image = styled.img`
  flex: 1 1 auto;
  height: 280px;
  min-width: 200px;
  object-fit: cover;

  ${onMobile} {
    height: 140px;
    min-width: 120px;
  }
`

// Bildkollage, till exempel bilder från kontoret.
export const Gallery = ({ images }: GalleryProps) => (
  <Rows>
    {images.map((image) => (
      <Image
        key={image.src}
        src={image.src}
        srcSet={image.srcSet}
        sizes="(max-width: 600px) 50vw, 33vw"
        alt=""
        loading="lazy"
      />
    ))}
  </Rows>
)
