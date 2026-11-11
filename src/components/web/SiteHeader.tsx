import { IconButton, KitsLogo, Link } from "@kits-ab/kits-ui"
import { Link as GatsbyLink } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { contentMaxWidth, headerMinHeight, onMobile, pageGutter } from "./layout"

export interface SiteHeaderLink {
  text: string
  href: string
}

export interface SiteHeaderProps {
  currentPath: string
}

const links: SiteHeaderLink[] = [
  { text: "Tjänster", href: "/tjanster" },
  { text: "Karriär", href: "/karriar" },
  { text: "KitsCon", href: "/kitscon" },
  { text: "Om oss", href: "/om-oss" }
]

const contactLink: SiteHeaderLink = { text: "Kontakt", href: "/kontakt" }

const isCurrent = (currentPath: string, href: string) =>
  currentPath === href || currentPath.startsWith(`${href}/`)

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--bg-page);

  &::after {
    content: "";
    display: block;
    height: 1px;
    background: linear-gradient(
      to right,
      var(--interactive-primary) 50%,
      var(--interactive-accent)
    );
  }
`

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-32);
  max-width: ${contentMaxWidth + 2 * pageGutter}px;
  min-height: ${headerMinHeight}px;
  margin: 0 auto;
  padding: var(--spacing-16) ${pageGutter}px;

  ${onMobile} {
    padding: var(--spacing-12) var(--spacing-16);
  }
`

const LogoLink = styled(GatsbyLink)`
  display: inline-flex;
  color: var(--text-primary);

  &:focus-visible {
    outline: 3px solid var(--primary-border);
    outline-offset: 3px;
  }
`

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--spacing-40);

  ${onMobile} {
    display: none;
  }
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: var(--spacing-40);
  margin: 0;
  padding: 0;
  list-style: none;
`

const NavLink = styled(GatsbyLink)`
  color: var(--text-primary);
  font-size: var(--type-body-size);
  line-height: var(--type-body-line);
  text-decoration: none;

  &:hover,
  &[aria-current="page"] {
    color: var(--text-brand);
  }

  &:focus-visible {
    outline: 3px solid var(--primary-border);
    outline-offset: 3px;
  }
`

const MenuToggle = styled.div`
  display: none;

  ${onMobile} {
    display: block;
  }
`

const MobilePanel = styled.nav`
  display: none;

  ${onMobile} {
    display: block;
    padding: var(--spacing-8) var(--spacing-16) var(--spacing-24);
    border-top: 1px solid var(--border-default);
    background-color: var(--bg-page);
  }
`

const MobileList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
  margin: 0 0 var(--spacing-24);
  padding: 0;
  list-style: none;
`

export const SiteHeader = ({ currentPath }: SiteHeaderProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const panelId = "site-header-menu"

  React.useEffect(() => {
    setIsOpen(false)
  }, [currentPath])

  React.useEffect(() => {
    if (!isOpen) {
      return
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", closeOnEscape)
    return () => document.removeEventListener("keydown", closeOnEscape)
  }, [isOpen])

  const renderLinks = () =>
    links.map((link) => (
      <li key={link.href}>
        <NavLink
          to={link.href}
          aria-current={isCurrent(currentPath, link.href) ? "page" : undefined}
        >
          {link.text}
        </NavLink>
      </li>
    ))

  const renderContact = () => (
    <Link href={contactLink.href} variant="button" buttonVariant="brand-outline" size="medium">
      {contactLink.text}
    </Link>
  )

  return (
    <StyledHeader>
      <Bar>
        <LogoLink to="/" aria-label="KITS, till startsidan">
          <KitsLogo variant="kits" width={64} />
        </LogoLink>
        <DesktopNav aria-label="Huvudmeny">
          <NavList>{renderLinks()}</NavList>
          {renderContact()}
        </DesktopNav>
        <MenuToggle>
          <IconButton
            icon={isOpen ? "close" : "menu"}
            aria-label={isOpen ? "Stäng menyn" : "Öppna menyn"}
            aria-expanded={isOpen}
            aria-controls={panelId}
            onPress={() => setIsOpen((open) => !open)}
          />
        </MenuToggle>
      </Bar>
      {isOpen && (
        <MobilePanel id={panelId} aria-label="Huvudmeny">
          <MobileList>{renderLinks()}</MobileList>
          {renderContact()}
        </MobilePanel>
      )}
    </StyledHeader>
  )
}
