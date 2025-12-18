import {
  colors,
  fonts,
  Horizontal,
  Logotype,
  MenuIcon,
  spacing,
  types,
  width,
  Wrapper
} from "@kokitotsos/react-components"
import { cssVar } from "@kokitotsos/react-components/dist/utils/cssUtils"
import { Link } from "gatsby"
import * as React from "react"
import { useCallback, useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"

/* -------------------------------------------------------------------------- */
/*                                Types                                       */
/* -------------------------------------------------------------------------- */

export interface SiteLink extends types.Link {
  subItems?: SiteLink[]
}

export type SiteHeaderProps = types.BaseProps & {
  breakpoint?: number
  links: SiteLink[]
}

/* -------------------------------------------------------------------------- */
/*                                Styles                                      */
/* -------------------------------------------------------------------------- */

const StyledHeader = styled.header<{ breakpoint: number }>`
  background-color: ${colors.background4};
  background-color: var(--background4);
  box-shadow: 0 1px 3px 0 ${colors.lineShadow};
  box-shadow: 0 1px 3px 0 var(--lineShadow);
  left: 0;
  position: fixed;
  right: 0;
  z-index: 10;
  width: 100%;

  @media (max-width: ${(props) => props.breakpoint}px) {
    position: absolute;
  }

  @media (height <= 400px) {
    position: absolute;
  }
`

const StyledHorizontal = styled(Horizontal)`
  height: 60px;
`

const StyledLogotypeWrapper = styled.div`
  flex: 0 0 auto;
  margin-right: ${spacing.large}px;
  height: 100%;
  position: relative;

  > a {
    bottom: -18px;
    display: inline-block;
    position: relative;

    > svg {
      position: relative;
      z-index: 12;
    }

    &::before {
      background-color: ${colors.background1};
      background-color: var(--background1);
      bottom: 22px;
      content: "";
      height: 4px;
      left: -10px;
      opacity: 1;
      position: absolute;
      right: -10px;
      z-index: 11;
    }
  }
`

/* -------------------------------------------------------------------------- */
/*                                Menu Components                             */
/* -------------------------------------------------------------------------- */

const StyledNav = styled.nav<{ breakpoint: number; isFloating: boolean; isOpen: boolean }>`
  font-family: ${fonts.light};
  font-size: 16px;
  font-weight: 400;
  flex: 1;

  .Menu-expanded {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: ${(props) => props.breakpoint}px) {
      display: none;
    }
  }

  .Menu-collapsed {
    cursor: pointer;
    display: none;
    justify-content: flex-end;

    @media (max-width: ${(props) => props.breakpoint}px) {
      display: flex;
    }

    > span {
      margin-right: ${spacing.small}px;
    }
  }

  ${(props) =>
    props.isOpen &&
    css`
      @media (max-width: ${props.breakpoint}px) {
        background-color: ${colors.background4};
        background-color: var(--background4);
        inset: 0;
        display: flex;
        flex-direction: column;
        font-size: 24px;
        padding: ${spacing.large}px;
        position: fixed;
        z-index: 13;

        .Menu-expanded {
          display: flex;
          flex-direction: column;
          margin-top: ${spacing.large}px;

          > * {
            margin-bottom: ${spacing.large}px;
            margin-left: 0;
          }
        }

        .Menu-collapsed {
          display: flex;
          position: absolute;
          right: ${spacing.large}px;
          top: ${spacing.large}px;
        }
      }
    `}
`

const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  &:hover > div {
    display: flex;
  }
`

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${colors.background4};
  background-color: var(--background4);
  box-shadow: 0 4px 6px rgb(0 0 0 / 10%);
  flex-direction: column;
  min-width: 200px;
  padding: ${spacing.small}px 0;
  z-index: 20;

  > a {
    padding: ${spacing.small}px ${spacing.medium}px;
    white-space: nowrap;

    &:hover {
      background-color: rgb(0 0 0 / 5%);
    }
  }

  @media (max-width: ${width.mobileMenu}px) {
    position: static;
    display: flex;
    box-shadow: none;
    padding-left: ${spacing.medium}px;
    background-color: transparent;

    > a {
      padding: ${spacing.small}px 0;
      font-size: 18px;
    }
  }
`

const StyledLink = styled(Link)`
  color: ${colors.text1};
  color: var(--text1);
  cursor: pointer;
  text-decoration: none;

  &.is-active {
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
  }
`

const StyledSpan = styled.span`
  color: ${colors.text1};
  color: var(--text1);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const SiteMenu = ({ links, breakpoint = 500 }: { links: SiteLink[]; breakpoint?: number }) => {
  const [isFloating, setIsFloating] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLElement>(null)

  const getProps = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) => {
    return isPartiallyCurrent ? { className: "is-active" } : {}
  }

  const handleClick = () => {
    setIsOpen((previousIsOpen) => !previousIsOpen)
  }

  const handleDocumentClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (isOpen && !(menuRef.current as unknown as Element).contains(e.target as Node)) {
        setIsOpen(false)
      }
    },
    [isOpen]
  )

  const handleScroll = () => {
    setIsFloating(window.scrollY > 60)
    setIsOpen(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleDocumentClick, false)
      document.addEventListener("touchend", handleDocumentClick, false)
    } else {
      document.removeEventListener("click", handleDocumentClick, false)
      document.removeEventListener("touchend", handleDocumentClick, false)
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick, false)
      document.removeEventListener("touchend", handleDocumentClick, false)
    }
  }, [isOpen, handleDocumentClick])

  return (
    <StyledNav breakpoint={breakpoint} isFloating={isFloating} isOpen={isOpen} ref={menuRef}>
      <Horizontal breakpoint={breakpoint} className="Menu-expanded">
        {links.map((link, index) => {
          if (link.subItems && link.subItems.length > 0) {
            return (
              <DropdownWrapper key={index}>
                <StyledSpan>{link.text} ▾</StyledSpan>
                <DropdownMenu>
                  {link.subItems.map((subLink, subIndex) => (
                    <StyledLink
                      activeClassName="is-active"
                      getProps={getProps}
                      to={subLink.href || "#"}
                      key={subIndex}
                      onClick={() => setIsOpen(false)}
                    >
                      {subLink.text}
                    </StyledLink>
                  ))}
                </DropdownMenu>
              </DropdownWrapper>
            )
          }

          return (
            <StyledLink
              activeClassName="is-active"
              getProps={getProps}
              to={link.href || "#"}
              key={index}
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </StyledLink>
          )
        })}
      </Horizontal>
      <Horizontal className="Menu-collapsed" onClick={handleClick}>
        <span>Meny</span>
        <MenuIcon
          floatingPosition={{ right: 20, top: 15 }}
          isFloating={isFloating}
          isOpen={isOpen}
        />
      </Horizontal>
    </StyledNav>
  )
}

/* -------------------------------------------------------------------------- */
/*                                SiteHeader Component                        */
/* -------------------------------------------------------------------------- */

export const SiteHeader = ({ links, breakpoint = 500, ...restProps }: SiteHeaderProps) => {
  return (
    <StyledHeader breakpoint={breakpoint} {...restProps}>
      <Wrapper>
        <StyledHorizontal alignVertical={types.Alignment.End}>
          <StyledLogotypeWrapper>
            <Link to="/">
              <Logotype color={cssVar("--text1") || colors.text1} width={80} />
            </Link>
          </StyledLogotypeWrapper>
          <SiteMenu breakpoint={breakpoint} links={links} />
        </StyledHorizontal>
      </Wrapper>
    </StyledHeader>
  )
}
