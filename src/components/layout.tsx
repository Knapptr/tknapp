/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import "@fontsource/itim"
import { useStaticQuery, graphql } from "gatsby"
import tw, { GlobalStyles, styled, theme } from "twin.macro"
import "@fontsource/inter"
import "@fontsource/jetbrains-mono"
import NavBar from "./NavBar"
import Footer from "./Footer"
import "twin.macro"
import { Helmet } from "react-helmet"
import favicon from "../images/favicon.ico"

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
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <div tw="flex flex-col min-h-screen">
        <GlobalStyles />
        <NavBar />
        <main tw="flex-grow">{children}</main>
        <Footer tw="flex-shrink-0" />
      </div>
    </>
  )
}

export default Layout
