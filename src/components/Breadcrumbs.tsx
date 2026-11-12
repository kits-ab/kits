import { Breadcrumbs as KitsBreadcrumbs } from "@kokitotsos/kits-ui"
import * as React from "react"
import { Helmet } from "react-helmet"

interface BreadcrumbsProps {
  location: {
    pathname: string
  }
}

const nameMap: { [key: string]: string } = {
  tjanster: "Tjänster",
  "teknik-och-utveckling": "Teknik & Utveckling",
  cybersakerhet: "Cybersäkerhet",
  karriar: "Karriär",
  kitscon: "KitsCon",
  "om-oss": "Om oss",
  kontakt: "Kontakt",
  systemutveckling: "Systemutveckling",
  integration: "Integration",
  projektledning: "Projektledning",
  "it-sakerhet": "IT-säkerhet",
  "ot-sakerhet": "OT-säkerhet",
  pentest: "Pentest",
  "ot-sakerhetsexpert": "OT-säkerhetsexpert",
  "utbildning-applikationssakerhet": "Utbildning AppSec"
}

const toName = (segment: string) =>
  nameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")

export const Breadcrumbs = ({ location }: BreadcrumbsProps) => {
  if (!location) return null

  const pathnames = location.pathname.split("/").filter((x) => x)

  if (pathnames.length === 0) return null

  const crumbs = pathnames.map((segment, index) => ({
    href: `/${pathnames.slice(0, index + 1).join("/")}`,
    name: toName(segment)
  }))

  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hem",
        item: typeof window !== "undefined" ? window.location.origin : ""
      },
      ...crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.name,
        item: typeof window !== "undefined" ? `${window.location.origin}${crumb.href}` : crumb.href
      }))
    ]
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbListSchema)}</script>
      </Helmet>
      <KitsBreadcrumbs
        items={[
          { key: "/", label: "Hem", href: "/" },
          ...crumbs.map((crumb) => ({ key: crumb.href, label: crumb.name, href: crumb.href }))
        ]}
      />
    </>
  )
}
