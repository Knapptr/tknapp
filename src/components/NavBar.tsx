import React, { useContext } from "react"
import tw, { styled, TwComponent, TwFn } from "twin.macro"
import "twin.macro"
import { Link } from "gatsby"
import ThemeSwitch from "./ThemeSwitch"
import { TitleHeader, NavList, NavLink, Nav } from "./styled"

const NavBar = () => {
  return (
    <>
      <Nav>
        <header>
          <Link to="/">
            <TitleHeader>Tyler Knapp</TitleHeader>
          </Link>
        </header>
        <NavList>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavList>
        <ThemeSwitch />
      </Nav>
    </>
  )
}
export default NavBar
