/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import "@fontsource/itim"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import tw, { GlobalStyles, styled, theme } from "twin.macro"
import { Global } from "@emotion/react"
import baseStyles from "../baseStyles"
import "@fontsource/inter"
import "@fontsource/jetbrains-mono"
import NavBar from "./NavBar"
import { ThemeContext, ThemeProvider } from "../themecontext"
import { ContentBounds } from "./styled"
const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <NavBar />
      <main>{children}</main>
    </>
  )
}

export default Layout
