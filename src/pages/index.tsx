import * as React from "react"
import { useContext } from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import tw, { styled, theme } from "twin.macro"
import Sub from "../components/subel"
import TestTwo from "../components/test2"
import TestThree from "../components/test3"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "twin.macro"
import {
  ContentBounds,
  Container,
  Header,
  DivideHR,
  Text,
  FloatFrame,
  Caption,
  ExternalLink,
  ColContainer,
  Button,
} from "../components/styled"

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <ContentBounds>
          <Header>Hello!</Header>
          <h3 tw="max-w-prose font-bold font-tmono p-2 text-lg md:text-xl">
            I'm Tyler - a web developer, summer camp director, musician and
            general dork.
            <br /> <br />
            <span tw="text-secondary-fg">Welcome to my internet thing.</span>
          </h3>
          <DivideHR />
          <ColContainer></ColContainer>
        </ContentBounds>
      </Container>
      <ContentBounds></ContentBounds>
    </Layout>
  )
}

export default IndexPage
