import styled from "styled-components"

import { onMobile, SpacingStep, spacing } from "./layout"

export const Grid = styled.div<{ $columns: 1 | 2 | 3; $gap?: SpacingStep }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, minmax(0, 1fr));
  gap: ${({ $gap = 40 }) => spacing($gap)};

  ${onMobile} {
    grid-template-columns: minmax(0, 1fr);
  }
`
