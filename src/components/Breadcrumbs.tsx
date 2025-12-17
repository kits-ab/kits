import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import { colors, fonts, spacing } from "@kokitotsos/react-components"

const BreadcrumbContainer = styled.nav`
  margin-bottom: ${spacing.small}px;
  font-family: ${fonts.light};
  font-size: 14px;
  color: ${colors.text2};
  color: var(--text2);
`

const BreadcrumbList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: "/";
    margin: 0 ${spacing.small}px;
    color: ${colors.text2};
    color: var(--text2);
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.text1};
  color: var(--text1);
  &:hover {
    text-decoration: underline;
  }
`

const CurrentPage = styled.span`
  color: ${colors.text2};
  color: var(--text2);
`

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

export const Breadcrumbs = ({ location }: BreadcrumbsProps) => {
  if (!location) return null

  const pathnames = location.pathname.split("/").filter((x) => x)

  if (pathnames.length === 0) return null // Don't show on home page if handled there, or if empty

  return (
    <BreadcrumbContainer aria-label="breadcrumb">
      <BreadcrumbList>
        <BreadcrumbItem>
          <StyledLink to="/">Hem</StyledLink>
        </BreadcrumbItem>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`
          const isLast = index === pathnames.length - 1
          const name =
            nameMap[value] || value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, " ")

          return (
            <BreadcrumbItem key={to}>
              {isLast ? (
                <CurrentPage aria-current="page">{name}</CurrentPage>
              ) : (
                <StyledLink to={to}>{name}</StyledLink>
              )}
            </BreadcrumbItem>
          )
        })}
      </BreadcrumbList>
    </BreadcrumbContainer>
  )
}
