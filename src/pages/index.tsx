import * as React from "react"
import { useContext } from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import tw, { styled, theme } from "twin.macro"
import { keyframes } from "@emotion/react"
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

const Wave = keyframes`
    0%{
      transform: rotate(0deg);
    }
    50%{
      transform: rotate(45deg);
    }
    100%{
      transform: rotate(0deg);
    }
`
const WavingHand = styled.span`
  display: inline-block;
  transform-origin: bottom right;
  animation: ${Wave} 1.5s linear;
`

const IndexPage = () => {
  return (
    <Layout>
      <Container tw="py-12 font-tmono">
        <ContentBounds tw="gap-4">
          <Header tw="text-5xl md:text-7xl mb-12">
            <WavingHand>👋</WavingHand>Hello!
          </Header>
          <div tw="flex flex-col md:flex-row font-bold  p-2 text-base text-tertiary-fg font-tsans gap-3 justify-center items-center">
            <StaticImage
              alt="me! my head!"
              src="../images/mecxbaumann.jpg"
              tw="rounded-full max-w-xs shadow-lg"
              placeholder="blurred"
            />
            <h3 tw="max-w-sm">
              I'm Tyler - a web developer, summer camp director, musician and
              general dork. I like bikes, games, chips, salsa, and making things
              with computers.
            </h3>
            <h3 tw="max-w-xs"></h3>
          </div>
          <h4 tw="mt-6  text-primary-fg font-bold text-3xl sm:text-4xl md:text-5xl">
            Welcome to my internet thing.
          </h4>
          <ColContainer></ColContainer>
        </ContentBounds>
      </Container>
      <ContentBounds></ContentBounds>
    </Layout>
  )
}

export default IndexPage
