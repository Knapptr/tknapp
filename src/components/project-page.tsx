import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Layout from "./layout"
import { parseISO, format } from "date-fns"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import Stylesheet from "../stylesheetProvider"
import ContentLayout from "./ContentLayout"

const ProjectPage = ({ data: { mdx } }: IQueryData) => {
  const project = {
    title: mdx.frontmatter.title,
    tags: mdx.frontmatter.tags,
    description: mdx.frontmatter.description,
    body: mdx.body,
    emoji: mdx.frontmatter.emoji,
    example: mdx.frontmatter.example,
    code: mdx.frontmatter.code,
    type: "project",
  }

  return (
    <>
      <ContentLayout content={project}></ContentLayout>
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
        tags: string[]
        description: string
        code: string
        example: string
        emoji: string
      }
    }
  }
}
export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        tags
        description
        emoji
        code
        example
      }
    }
  }
`
export default ProjectPage
