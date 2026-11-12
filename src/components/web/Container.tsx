import styled from "styled-components"

import { contentMaxWidth, onMobile, pageGutter } from "./layout"

// Sidans innehållsbredd: 1388 px och 62 px marginal på datorn, 16 px på mobil.
export const Container = styled.div`
  max-width: ${contentMaxWidth + 2 * pageGutter}px;
  margin: 0 auto;
  padding: 0 ${pageGutter}px;

  ${onMobile} {
    padding: 0 var(--spacing-16);
  }
`
