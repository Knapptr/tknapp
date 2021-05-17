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
import TypeFilter from "../components/TypeFilter"
import { Helmet } from "react-helmet"

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
          tags: string[]
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
      tags: post.node.frontmatter.tags,
      type: post.node.frontmatter.type,
      description: post.node.frontmatter.description,
      image: post.node.frontmatter.image,
      slug: post.node.fields.slug,
    }))
    return allPosts
  }
  const filterPostsByType = (type: PostTypes): void => {
    const allPosts = initializePosts(rawPosts)
    if (type === "all") {
      setCurrentPosts(allPosts)
    } else {
      const filteredPosts = allPosts.filter(post => post.type === type)
      setCurrentPosts(filteredPosts)
    }
  }

  const [currentPosts, setCurrentPosts] = useState(initializePosts(rawPosts))

  return (
    <Layout>
      <Helmet>
        <title>Posts-Tknapp</title>
        <meta
          name="description"
          content="Ramblings, musings and diatribes by Tyler Knapp"
        />
      </Helmet>
      <header tw="py-3 px-6 bg-tertiary-fill mb-8 rounded-lg">
        <Header tw="mx-auto text-center">Posts</Header>
        <div tw="flex justify-center gap-6 flex-wrap">
          <div>
            <h2>Filter by post type:</h2>
            <TypeFilter filter={filterPostsByType} />
          </div>
          <div tw="flex flex-col justify-center items-center">
            <h2>or:</h2>
            <Link tw="font-tmono font-bold hover:text-secondary-fg " to="/tags">
              Sort by tags
            </Link>
          </div>
        </div>
      </header>
      <ContentBounds tw="">
        <div tw="flex flex-col items-center flex-initial justify-center">
          <ul tw="flex flex-col gap-4 ">
            {currentPosts.map(post => {
              return (
                <li tw="hover:shadow-2xl hover:brightness-100 filter brightness-95 transition-all duration-300">
                  <PostShort
                    title={post.title}
                    date={post.date}
                    tags={post.tags}
                    description={post.description}
                    type={post.type}
                    image={post.image}
                    slug={post.slug}
                  />
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
      filter: {
        frontmatter: { published: { eq: true } }
        fields: { contentType: { eq: "posts" } }
      }
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
