import styled from "styled-components"

import { SpacingStep, spacing } from "./layout"

export const Stack = styled.div<{ $gap?: SpacingStep }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap = 24 }) => spacing($gap)};
`
