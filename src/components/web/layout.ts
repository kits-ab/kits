// Mått från profil 2026 som kits-ui saknar tokens för. Används av SiteHeader, Container m.fl.
// Brytpunkten är densamma som kits-ui:s mobilskala för typografin
// (src/tokens/index.ts, mobileTypographyCssVars).
export const mobileMaxWidth = 600
export const contentMaxWidth = 1388
export const pageGutter = 62
export const headerMinHeight = 80

export const onMobile = `@media (max-width: ${mobileMaxWidth}px)`
