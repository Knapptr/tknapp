import React, { useContext, useState } from "react"
import tw, { styled, TwComponent, TwFn } from "twin.macro"
import "twin.macro"
import { Link } from "gatsby"
import ThemeSwitch from "./ThemeSwitch"
import CollapsedMenu from "./collapsedMenu"
import { TitleHeader, NavList, NavLink, Nav, ContentBounds } from "./styled"

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const toggleHamburger = () => {
    setHamburgerOpen(o => !o)
  }
  return (
    <>
      <div tw="w-full bg-primary-fill mb-3 md:mb-4 lg:mb-6">
        <Nav>
          <header>
            <Link to="/">
              <TitleHeader>Tyler Knapp</TitleHeader>
            </Link>
          </header>
          <div tw="ml-auto flex gap-2 sm:gap-4 md:gap-6 items-center">
            <ThemeSwitch />
            <NavList tw="hidden sm:flex">
              <NavLink activeClassName="active" to="/about">
                About
              </NavLink>
              <NavLink activeClassName="active" to="/posts">
                Posts
              </NavLink>
              <NavLink activeClassName="active" to="/projects">
                Projects
              </NavLink>
              <NavLink activeClassName="active" to="/contact">
                Contact
              </NavLink>
            </NavList>
            <nav tw="sm:hidden ml-auto">
              <CollapsedMenu isOpen={hamburgerOpen} toggle={toggleHamburger} />
            </nav>
          </div>
        </Nav>
        {/* Hamburgy */}
        <div tw="sm:hidden">
          {hamburgerOpen && (
            <NavList tw="">
              <NavLink activeClassName="active" to="/about">
                About
              </NavLink>
              <NavLink activeClassName="active" to="/posts">
                Posts
              </NavLink>
              <NavLink activeClassName="active" to="/projects">
                Projects
              </NavLink>
              <NavLink activeClassName="active" to="/contact">
                Contact
              </NavLink>
            </NavList>
          )}
        </div>
      </div>
    </>
  )
}
export default NavBar
