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
import { Helmet } from "react-helmet"
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
  NavLink,
  HomeSection,
} from "../components/styled"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"
import PostShort from "../components/PostShort"
import ProjectShort from "../components/ProjectShort"

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
      tw="flex-1 hover:shadow-2xl filter brightness-95 hover:(brightness-100) transition-all duration-300 cursor-pointer"
    >
      <Link to={post.node.fields.slug}>
        <PostShort
          title={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          date={post.node.frontmatter.date}
          image={post.node.frontmatter.image}
          tags={post.node.frontmatter.tags}
          type={post.node.frontmatter.type}
          slug={post.node.fields.slug}
        />
      </Link>
    </li>
  ))
}
const renderProject = (project: IProjectData) => (
  <Link to={project.node.fields.slug}>
    <ProjectShort
      project={{
        title: project.node.frontmatter.title,
        code: project.node.frontmatter.code,
        slug: project.node.fields.slug,
        emoji: project.node.frontmatter.emoji,
        example: project.node.frontmatter.example,
        tags: project.node.frontmatter.tags,
        description: project.node.frontmatter.description,
      }}
    />
  </Link>
)

const IndexPage = ({ data }: PageProps<IPageQueryData>) => {
  return (
    <>
      <Helmet>
        <title>Tknapp</title>
        <meta
          name="description"
          content="The personal webpage of Tyler Knapp"
        />
      </Helmet>
      <Layout>
        <Container tw="py-12 font-tmono bg-secondary-fill ">
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
                general dork. I like bikes, games, chips, salsa, and making
                things with computers.
              </h3>
            </div>
            <h4 tw="mt-6 text-center md:text-left text-primary-fg font-bold text-3xl sm:text-4xl md:text-5xl">
              Welcome to my internet thing.
            </h4>
          </ContentBounds>
        </Container>
        <HomeSection>
          <header tw=" py-1 m-2">
            <SubHeader tw="text-center text-base">Most recent posts:</SubHeader>
          </header>
          <ul tw="flex flex-col lg:flex-row justify-center gap-6 my-24">
            {renderTwoMostRecent(data.posts.edges)}
          </ul>

          <NavLink to="/posts" tw="hover:underline text-center block">
            view all posts
          </NavLink>
        </HomeSection>

        <HomeSection>
          <header tw=" py-1 m-2">
            <SubHeader tw="text-center text-base">
              Most Recent Project
            </SubHeader>
          </header>
          <div tw="mx-auto max-w-md my-24">
            {renderProject(data.project.edges[0])}
          </div>

          <NavLink to="/projects" tw="hover:underline text-center block">
            view all projects
          </NavLink>
        </HomeSection>

        <HomeSection>
          <header tw=" py-1 m-2">
            <SubHeader tw="text-center text-base">
              Want to get in touch?
            </SubHeader>
          </header>
          <div tw="flex flex-col items-center text-center my-12 gap-12 font-tsans text-lg max-w-prose mx-auto">
            <p>
              I'm open to new developoment opportunties!
              <br /> Just looking to chat about code, synthesizers, or to argue
              over the best episode of <em>TNG</em>? I'd love to hear from you.
              <p tw="text-xs">
                (The best episode of TNG is <em>Who Watches the Watchers</em>{" "}
                tied with <em>Darmok</em>
                .)
              </p>
            </p>
            <div tw="">
              <p>
                Shoot me an email at{" "}
                <a
                  href="mailto:knapptr@gmail.com"
                  tw="font-bold hover:underline"
                >
                  knapptr@gmail.com
                </a>
                <br />
                or{" "}
                <Link tw="font-bold hover:underline" to="/contact">
                  learn about more ways to say hello.
                </Link>
                <br />
                lets work together.
              </p>
            </div>
          </div>
        </HomeSection>
      </Layout>
    </>
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
      tags: string[]
      type: string
    }
  }
}
interface IProjectData {
  node: {
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      description: string
      emoji: string
      tags: string[]
      code: string
      example: string
    }
  }
}
interface IPageQueryData {
  posts: {
    edges: IPostData[]
  }
  project: {
    edges: IProjectData[]
  }
}

export const pageQuery = graphql`
  query {
    posts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 2
      filter: {
        fields: { contentType: { eq: "posts" } }
        frontmatter: { published: { eq: true } }
      }
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
    project: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1
      filter: {
        fields: { contentType: { eq: "projects" } }
        frontmatter: { published: { eq: true } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            emoji
            description
            title
            tags
            code
            example
          }
        }
      }
    }
  }
`

export default IndexPage
