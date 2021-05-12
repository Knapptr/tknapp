import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import React from "react"
import { ContentBounds, Header, NavLink } from "../components/styled"
import "twin.macro"
import { Helmet } from "react-helmet"
import tw, { styled } from "twin.macro"

const SmallTypeFlag = styled.span`
  ${tw`py-0.5 px-1 font-tmono text-xs text-gray-800 rounded`}
  ${({ children }) => (children === "project" ? tw`bg-project` : tw`bg-other`)}
`

const TagsPage = ({
  data: {
    allMdx: { distinct, edges },
  },
}: IQueryData) => {
  //alphabatize tags
  const tags = distinct

  const getPostsByTagRenderLogic = (tag: string) => {
    const allRelatedPosts = edges
      .filter(edge => edge.node.frontmatter.tags.includes(tag))
      .map(edge => (
        <li tw="bg-tertiary-fill px-3 py-1 rounded hover:shadow">
          <Link tw="flex items-baseline  " to={edge.node.fields.slug}>
            {edge.node.frontmatter.title}
            <SmallTypeFlag tw="ml-auto">
              {edge.node.fields.contentType === "projects" ? "project" : "post"}
            </SmallTypeFlag>
          </Link>
        </li>
      ))
    const render = allRelatedPosts.slice(0, 3)
    if (allRelatedPosts.length > 3) {
      render.push(
        <NavLink tw="hover:underline" to={`/tags/${tag}`}>
          <p tw="font-tmono text-sm">
            and {allRelatedPosts.length - 3} more...
          </p>
        </NavLink>
      )
    }
    return render
  }
  return (
    <>
      <Layout>
        <Helmet>
          <title>Tags-Tknapp</title>
          <meta name="description" content="Tagged content on tknapp.net" />
        </Helmet>
        <header tw="py-3 px-6 bg-tertiary-fill mb-8 rounded-lg">
          <Header tw="mx-auto text-center">Tags</Header>
        </header>
        <ContentBounds>
          <div>
            <div tw="flex flex-wrap gap-4">
              {tags.map(tag => (
                <div tw="w-56 py-2 px-2 bg-secondary-fill flex-grow">
                  <NavLink tw="hover:underline" to={`/tags/${tag}`}>
                    <h1 tw="font-bold font-tmono text-lg mb-2 ">{tag}</h1>
                  </NavLink>
                  <ul tw="flex flex-col gap-2">
                    {getPostsByTagRenderLogic(tag)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </ContentBounds>
      </Layout>
    </>
  )
}

export default TagsPage
interface IQueryData {
  data: {
    allMdx: {
      distinct: string[]
      edges: {
        node: {
          fields: {
            slug: string
            contentType: string
          }
          frontmatter: {
            title: string
            description: string
            tags: string[]
          }
        }
      }[]
    }
  }
}
export const pageQuery = graphql`
  query tagsPageQuery {
    allMdx(filter: { frontmatter: { published: { eq: true } } }) {
      distinct(field: frontmatter___tags)
      edges {
        node {
          fields {
            slug
            contentType
          }
          frontmatter {
            title
            description
            tags
          }
        }
      }
    }
  }
`
