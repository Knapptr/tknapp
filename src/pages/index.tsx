import * as React from "react"
import { useContext } from "react"
import { useState } from "react"
import { graphql, Link, PageProps } from "gatsby"
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
  SubHeader,
} from "../components/styled"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"
import PostShort from "../components/PostShort"

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
  cursor: default;
  &:hover {
    animation: ${Wave} 1.5s linear;
  }
`
const renderTwoMostRecent = (posts: IPostData[]) => {
  return posts.map(post => (
    <li
      key={post.node.frontmatter.title}
      tw="flex-1 flex flex-col hover:shadow-2xl filter brightness-95 hover:(brightness-100) transition-all duration-300 cursor-pointer"
    >
      <PostShort
        title={post.node.frontmatter.title}
        description={post.node.frontmatter.description}
        date={post.node.frontmatter.date}
        image={post.node.frontmatter.image}
        tags={post.node.frontmatter.tags.split(",")}
        type={post.node.frontmatter.type}
        slug={post.node.fields.slug}
      />
    </li>
  ))
}

const IndexPage = ({ data }: PageProps<IPageQueryData>) => {
  return (
    <Layout>
      <Container tw="py-12 font-tmono ">
        <ContentBounds tw="gap-4">
          <Header tw="text-5xl md:text-7xl mb-12 text-center md:text-left">
            <WavingHand>👋</WavingHand>Hello!
          </Header>
          <div tw="flex flex-col md:flex-row font-bold  p-2 text-base text-tertiary-fg font-tsans gap-3 justify-center items-center">
            <StaticImage
              alt="me! my head!"
              src="../images/mecxbaumann.jpg"
              tw="rounded-full max-w-xs shadow-lg"
              placeholder="blurred"
            />
            <h3 tw="text-center md:text-left max-w-sm text-xl">
              I'm Tyler - a web developer, summer camp director, musician and
              general dork. I like bikes, games, chips, salsa, and making things
              with computers.
            </h3>
          </div>
          <h4 tw="mt-6 text-center md:text-left text-primary-fg font-bold text-3xl sm:text-4xl md:text-5xl">
            Welcome to my internet thing.
          </h4>
          <ColContainer></ColContainer>
        </ContentBounds>
      </Container>
      {/* The recent posts div gets a slightly larger max width */}
      <section tw="mt-12 max-w-6xl mx-auto  px-5 rounded-lg bg-tertiary-fill py-4">
        <header tw="bg-primary-fill py-1 m-2">
          <SubHeader tw="text-center text-base">Most recent posts:</SubHeader>
        </header>
        <ul tw="flex flex-col lg:flex-row justify-center gap-3">
          {renderTwoMostRecent(data.allMdx.edges)}
        </ul>
      </section>
    </Layout>
  )
}

interface IPostData {
  node: {
    fields: {
      slug: string
    }
    frontmatter: {
      image: FileNode
      date: string
      description: string
      title: string
      tags: string
      type: string
    }
  }
}
interface IPageQueryData {
  allMdx: {
    edges: IPostData[]
  }
}

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 2
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            date
            description
            title
            tags
            type
          }
        }
      }
    }
  }
`

export default IndexPage
