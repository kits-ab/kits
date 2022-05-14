import { remark } from "remark"
import remarkHtml from "remark-html"

export const toHTML = (content: string) => {
  return remark().use(remarkHtml).processSync(content).toString()
}
