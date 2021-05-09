import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { graphql, Link, PageProps } from "gatsby"
import {
  Button,
  Container,
  ContentBounds,
  Header,
  Text,
} from "../components/styled"
import TagSorter, { PostTypes } from "../components/PostTypeSort"
import PostShort from "../components/PostShort"
import "twin.macro"
import { GatsbyImageProps } from "gatsby-plugin-image"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"

export interface QueryPosts {
  allMdx: {
    edges: {
      node: {
        fields: {
          slug: string
        }
        frontmatter: {
          date: string
          title: string
          tags: string
          type: string
          description: string
          image: FileNode
        }
      }
    }[]
  }
}
export interface PostInState {
  title: string
  date: string
  tags: string[]
  type: string
  description: string
  image: any
}

export type Posts = PostInState[]

const PostsPage = ({ data }: PageProps<QueryPosts>) => {
  const rawPosts = data.allMdx.edges
  type RawPosts = typeof rawPosts

  const initializePosts = (posts: RawPosts) => {
    let allPosts = posts.map(post => ({
      title: post.node.frontmatter.title,
      date: post.node.frontmatter.date,
      tags: post.node.frontmatter.tags.split(","),
      type: post.node.frontmatter.type,
      description: post.node.frontmatter.description,
      image: post.node.frontmatter.image,
      slug: post.node.fields.slug,
    }))
    return allPosts
  }
  const filterPostsByType = (type: PostTypes) => {
    const allPosts = initializePosts(rawPosts)
    if (type === "all") {
      setCurrentPosts(allPosts)
      return
    }
    const filteredPosts = allPosts.filter(post => post.type === type)
    setCurrentPosts(filteredPosts)
  }

  const [currentPosts, setCurrentPosts] = useState(initializePosts(rawPosts))

  return (
    <Layout>
      <ContentBounds tw="">
        <header tw="py-3 px-4">
          <Header>Posts</Header>
          <Text tw="my-0">
            These cover all sorts of subjects. Looking for something more
            specific? Try narrowing it down by subject:
          </Text>
          <ul tw="flex justify-center gap-1 flex-wrap">
            <li>
              <Button>All</Button>
            </li>
            <li>
              <Button>Code</Button>
            </li>
            <li>
              <Button>Music</Button>
            </li>
            <li>
              <Button>Other</Button>
            </li>
          </ul>
        </header>
        <div tw="flex flex-col items-center justify-center">
          <ul tw="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {currentPosts.map(post => {
              return (
                <li tw="hover:shadow-2xl filter brightness-95 hover:(brightness-100) transition-all duration-300">
                  <Link to={post.slug}>
                    <PostShort
                      title={post.title}
                      date={post.date}
                      tags={post.tags}
                      description={post.description}
                      type={post.type}
                      image={post.image}
                      slug={post.slug}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
          {/* <div tw="bg-secondary-fill my-4 rounded py-2 px-4 col-span-7 md:col-span-2 row-end-auto">
            <TagSorter setSortBy={filterPostsByType} />
          </div> */}
        </div>
      </ContentBounds>
    </Layout>
  )
}
export const query = graphql`
  query MyQuery {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
            type
            tags
            description
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`

export default PostsPage
