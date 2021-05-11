import React from "react"
import { graphql } from "gatsby"
import ContentLayout from "./ContentLayout"
import { NavLink } from "./styled"
import { Helmet } from "react-helmet"
import "twin.macro"

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
      <Helmet>
        <title>{project.title + "-Tknapp"}</title>
        <meta name="description" content={project.description} />
      </Helmet>
      <ContentLayout content={project}>
        <NavLink tw="mx-auto mt-6" to="/projects">
          Back to Projects
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
