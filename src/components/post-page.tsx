import React from "react"
import { graphql } from "gatsby"
import Kbd from "./kbd"
import { NavLink } from "./styled"
import "twin.macro"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"
///these are the elements provided to posts in mdx
const shortcodes = { Kbd }
import ContentLayout from "./ContentLayout"

const PostPage = ({ data: { mdx } }: IQueryData) => {
  const post = {
    type: mdx.frontmatter.type,
    title: mdx.frontmatter.title,
    tags: mdx.frontmatter.tags,
    image: mdx.frontmatter.image,
    description: mdx.frontmatter.description,
    date: mdx.frontmatter.date,
    body: mdx.body,
  }
  return (
    <>
      <ContentLayout content={post}>
        <NavLink tw="mx-auto mt-6" to="/posts">
          Back to Posts
        </NavLink>
      </ContentLayout>
    </>
  )
}

interface IQueryData {
  data: {
    mdx: {
      id: string
      body: any
      frontmatter: {
        title: string
        date: string
        tags: string[]
        description: string
        image: FileNode
        type: string
      }
    }
  }
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        tags
        type
        description
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

export default PostPage
