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
  animation: ${Wave} 3s linear;
`

const IndexPage = () => {
  return (
    <Layout>
      <Container tw="py-24 font-tmono bg-tertiary-fill">
        <ContentBounds>
          <Header tw="text-5xl md:text-7xl mb-12">
            Hello!<WavingHand>👋</WavingHand>
          </Header>
          <h3 tw="max-w-prose font-bold  p-2 text-base md:text-lg text-secondary-fg font-tsans">
            I'm Tyler - a web developer, summer camp director, musician, and
            chips and salsa enthusiast.
          </h3>
          <h4 tw="mt-6 text-primary-fg text-right font-bold text-xl">
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
