// Mått från profil 2026 som kits-ui saknar tokens för. contentMaxWidth och pageGutter gäller
// sidornas innehåll (Container); sidhuvud och sidfot går nästan kant i kant med --spacing-32.
// Brytpunkten är densamma som kits-ui:s mobilskala för typografin
// (src/tokens/index.ts, mobileTypographyCssVars).
export const mobileMaxWidth = 600
export const contentMaxWidth = 1388
export const pageGutter = 62
export const headerMinHeight = 80

// Största bredd för ingress och löptext (skissernas ≈ 900 px).
export const readableMaxWidth = 900

// Startsidans hero med bild (skissens ≈ 900 px höga hero).
export const heroImageMinHeight = 900

export const onMobile = `@media (max-width: ${mobileMaxWidth}px)`

// Avstånd i kits-ui:s skala (--spacing-<steg>).
export type SpacingStep =
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 28
  | 32
  | 40
  | 44
  | 48
  | 56
  | 64
  | 80
  | 96
  | 120

export const spacing = (step: SpacingStep) => `var(--spacing-${step})`
