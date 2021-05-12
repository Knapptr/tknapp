import Layout from "../components/layout"
import { ContentBounds, Header } from "../components/styled"
import { graphql, PageProps } from "gatsby"
import ProjectShort from "../components/ProjectShort"
import "twin.macro"
import React from "react"
import { Helmet } from "react-helmet"

const ProjectPage = ({ data }: PageProps<IQuery>) => {
  const projects = data.allMdx.edges
  return (
    <Layout>
      <Helmet>
        <title>Projects-Tknapp</title>
        <meta
          name="description"
          content="Projects created to learn various software development techniques and frameworks."
        />
      </Helmet>
      <header tw="py-3 px-6 bg-tertiary-fill mb-8 rounded-lg">
        <Header tw="mx-auto text-center">Projects</Header>
      </header>
      <ContentBounds>
        <ul tw="flex flex-wrap gap-4 justify-center">
          {projects.map(projectData => {
            const project = {
              title: projectData.node.frontmatter.title,
              description: projectData.node.frontmatter.description,
              emoji: projectData.node.frontmatter.emoji,
              slug: projectData.node.fields.slug,
              example: projectData.node.frontmatter.example,
              tags: projectData.node.frontmatter.tags,
              code: projectData.node.frontmatter.code,
            }
            return (
              <li tw="w-80 flex-grow flex-shrink">
                <ProjectShort project={project} />
              </li>
            )
          })}
        </ul>
      </ContentBounds>
    </Layout>
  )
}

export default ProjectPage

interface IQuery {
  allMdx: {
    edges: {
      node: {
        fields: {
          slug: string
        }
        frontmatter: {
          code: string
          description: string
          emoji: string
          example: string
          tags: string[]
          title: string
        }
      }
    }[]
  }
}

export const pageQuery = graphql`
  query projects {
    allMdx(
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
            code
            description
            emoji
            example
            tags
            title
          }
        }
      }
    }
  }
`
