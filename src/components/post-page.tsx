import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Layout from "./layout"
import { parseISO, format } from "date-fns"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import Kbd from "./kbd"
import Stylesheet from "../stylesheetProvider"
import {
  Container,
  ContentBounds,
  DivideHR,
  Header,
  Text,
  NavLink,
} from "./styled"
import "twin.macro"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"
import TypeStripe from "./TypeStripe"
import ContentHeaders from "./ContentHeaders"
///these are the elements provided to posts in mdx
const shortcodes = { Kbd }
import ContentLayout from "./ContentLayout"

const PostPage = ({ data: { mdx } }: IQueryData) => {
  const procImage = getImage(mdx.frontmatter.image)
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
