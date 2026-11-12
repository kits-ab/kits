import * as React from "react"
import { Map as MapboxMap, Popup } from "react-map-gl/mapbox"
import styled from "styled-components"

import { usePageTheme } from "../../theme"

export interface LocationMapProps {
  // [latitud, longitud], som i innehållet (kits.yml, KitsCon-schemat).
  coordinates: number[]
  title?: string
  subtitle?: string
}

// Publik Mapbox-token (pk.) från miljövariabeln MAPBOX_KEY (Netlify, lokalt i .env). Den läggs in
// i webbläsarkoden vid bygget, se onCreateWebpackConfig i gatsby-node.js.
const mapboxAccessToken = process.env.MAPBOX_KEY

// Kartan följer sidans tema.
const mapStyles = {
  dark: "mapbox://styles/mapbox/dark-v9",
  light: "mapbox://styles/mapbox/light-v9"
}

const Frame = styled.div`
  height: 240px;
  overflow: hidden;
  background-color: var(--bg-surface);
`

const Label = styled(Popup)`
  .mapboxgl-popup-content {
    padding: var(--spacing-8) var(--spacing-12);
    border-radius: var(--radius-sm);
    background-color: color-mix(in srgb, var(--bg-page) 85%, transparent);
    color: var(--text-primary);
    font-family: var(--font);
    box-shadow: none;
  }

  .mapboxgl-popup-tip {
    border-top-color: color-mix(in srgb, var(--bg-page) 85%, transparent) !important;
  }

  strong,
  span {
    display: block;
    line-height: 1.3;
  }

  strong {
    font-size: var(--type-body-size);
    font-weight: 500;
  }

  span {
    color: var(--text-secondary);
    font-size: var(--type-mono-size);
  }
`

// Karta över en plats med namnet i en etikett. Kartan går inte att flytta eller zooma, den
// visar bara var platsen ligger.
export const LocationMap = ({ coordinates, title, subtitle }: LocationMapProps) => {
  const [latitude, longitude] = coordinates
  const theme = usePageTheme()
  return (
    <Frame>
      <MapboxMap
        mapboxAccessToken={mapboxAccessToken}
        initialViewState={{ longitude, latitude, zoom: 14 }}
        style={{ height: "100%", width: "100%" }}
        mapStyle={mapStyles[theme]}
        attributionControl={false}
        doubleClickZoom={false}
        dragPan={false}
        dragRotate={false}
        keyboard={false}
        scrollZoom={false}
        touchPitch={false}
        touchZoomRotate={false}
      >
        {title && (
          <Label
            longitude={longitude}
            latitude={latitude}
            anchor="bottom"
            closeButton={false}
            closeOnClick={false}
          >
            <strong>{title}</strong>
            {subtitle && <span>{subtitle}</span>}
          </Label>
        )}
      </MapboxMap>
    </Frame>
  )
}
