import * as React from "react"
import ReactMarkdown from "react-markdown"

interface MarkdownFieldProps {
  text: string
  /** If true, removes the wrapping paragraph tag. Useful for inline text. */
  inline?: boolean
}

export const MarkdownField: React.FC<MarkdownFieldProps> = ({ text, inline }) => {
  if (!text) return null

  if (inline) {
    return (
      <ReactMarkdown
        components={{
          p: React.Fragment
        }}
      >
        {text}
      </ReactMarkdown>
    )
  }

  return <ReactMarkdown>{text}</ReactMarkdown>
}
