import * as remark from "remark"
import * as remarkHTML from "remark-html"

export const toHTML = (content: string) => {
  return (remark as any)()
    .use(remarkHTML)
    .processSync(content)
    .toString()
}
