import * as React from "react"
import styled from "styled-components"

import { onMobile } from "./layout"

export interface CollageImage {
  src: string
  srcSet?: string
  width?: number
  height?: number
}

export interface CollageProps {
  images: CollageImage[]
}

// Kollaget går i full fönsterbredd. Raden centreras och får gå utanför kanterna på smala skärmar,
// som utspridda foton på ett bord.
const Table = styled.div`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  overflow: hidden;
  padding: var(--spacing-40) 0 var(--spacing-64);
  white-space: nowrap;

  ${onMobile} {
    padding: var(--spacing-24) 0 var(--spacing-40);
  }
`

const Row = styled.div`
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`

const Photo = styled.div<{ $rotate: number; $scale: number; $lift: number; $front: boolean }>`
  display: inline-block;
  position: relative;
  z-index: ${({ $front }) => ($front ? 2 : 1)};
  margin: 0 -48px;
  border: 6px solid var(--border-default);
  box-shadow: 0 8px 24px rgb(0 0 0 / 45%);
  vertical-align: middle;
  transform: ${({ $rotate, $scale, $lift }) =>
    `rotate(${$rotate}deg) scale(${$scale}) translateY(${$lift}px)`};
  transition: transform 200ms ease;

  &:hover {
    z-index: 3;
    transform: rotate(0deg) scale(1.04);
  }

  img {
    display: block;
    width: auto;
    height: 240px;
  }

  ${onMobile} {
    margin: 0 -24px;
    border-width: 4px;

    img {
      height: 140px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

// Samma "slump" vid varje rendering (server och webbläsare måste vara överens): vridning mellan
// -5 och 5 grader, varannan bild lite mindre och längre bak, som i det gamla kollaget.
const pseudoRandom = (index: number) => {
  const x = Math.sin(index * 9301 + 49297) * 233280
  return x - Math.floor(x)
}

// Bildkollage, till exempel bilder från kontoret eller från en KitsCon.
export const Collage = ({ images }: CollageProps) =>
  images.length > 0 ? (
    <Table>
      <Row>
        {images.map((image, index) => {
          const front = index % 2 === 0
          return (
            <Photo
              key={image.src}
              $rotate={pseudoRandom(index) * 10 - 5}
              $scale={front ? 1 : 1 - pseudoRandom(index + 100) * 0.1}
              $lift={front ? 24 : 0}
              $front={front}
            >
              <img
                src={image.src}
                srcSet={image.srcSet}
                width={image.width}
                height={image.height}
                sizes="(max-width: 600px) 240px, 440px"
                alt=""
                loading="lazy"
              />
            </Photo>
          )
        })}
      </Row>
    </Table>
  ) : null
