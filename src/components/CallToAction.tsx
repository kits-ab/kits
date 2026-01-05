import {
  Button,
  SectionHeading,
  spacing,
  Text,
  types,
  Vertical
} from "@kokitotsos/react-components"
import * as React from "react"

import { MarkdownField } from "./MarkdownField"

interface CallToActionProps {
  heading: string
  content: string
  buttonText: string
  buttonHref: string
}

export const CallToAction: React.FC<CallToActionProps> = ({
  heading,
  content,
  buttonText,
  buttonHref
}) => {
  return (
    <>
      <SectionHeading>{heading}</SectionHeading>
      <Vertical alignHorizontal={types.Alignment.Center} spacing={spacing.large}>
        <Text>
          <p>
            <MarkdownField text={content} inline={true} />
          </p>
        </Text>
        <Button href={buttonHref}>{buttonText}</Button>
      </Vertical>
    </>
  )
}
