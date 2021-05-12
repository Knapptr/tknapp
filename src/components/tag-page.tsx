import { graphql, Link, PageProps } from "gatsby"
import React from "react"
import Layout from "./layout"
import {
  ContainerBelowStripe,
  ContentBounds,
  ContentContainer,
  Header,
  NavLink,
  ShortContainer,
  TagBadge,
  Text,
} from "./styled"
import "twin.macro"
import ContentLayout from "./ContentLayout"
import { Icon } from "@fortawesome/fontawesome-svg-core"
import TypeStripe from "./TypeStripe"
import { format, parseISO } from "date-fns"

interface PropsWithTag extends PageProps {
  pageContext: {
    tag: string
  }
}
const TagPage = ({
  pageContext,
  data: {
    allMdx: { edges },
  },
}: PropsWithTag & IQueryData) => {
  const renderLayout = (node: IContent) => {
    const content = {
      title: node.frontmatter.title,
      tags: node.frontmatter.tags,
      description: node.frontmatter.description,
      type: node.fields.contentType === "posts" ? "post" : "project",
      slug: node.fields.slug,
      date: node.frontmatter.date,
      postType: node.frontmatter.type,
    }

    return (
      <ShortContainer tw="w-96 h-auto flex-grow">
        <TypeStripe type={content.type}>{content.type}</TypeStripe>
        <ContainerBelowStripe tw=" mt-1 justify-start">
          <div tw="mb-6">
            <div tw="flex mb-2 items-baseline flex-wrap-reverse text-lg">
              <NavLink to={content.slug}>{content.title}</NavLink>
              {content.postType && (
                <TypeStripe
                  tw="ml-2 flex items-baseline flex-grow -mr-4"
                  type={content.postType}
                >
                  {content.postType}

                  <span tw="text-sm ml-auto font-tmono">
                    {content.date && format(parseISO(content.date), "MMM d, y")}
                  </span>
                </TypeStripe>
              )}
            </div>
            <div tw="flex flex-wrap gap-1">
              {content.tags.map(tag => (
                <Link to={`/tags/${tag}`}>
                  <TagBadge>
                    <p tw="text-sm">{tag}</p>
                  </TagBadge>
                </Link>
              ))}
            </div>
          </div>
          <Text>{content.description}</Text>
        </ContainerBelowStripe>
      </ShortContainer>
    )
  }

  return (
    <>
      <Layout>
        <ContentBounds>
          <header tw="py-3 px-6 bg-tertiary-fill mb-8 rounded-lg">
            <Header tw="mx-auto text-center text-tertiary-fg">
              <div tw="flex flex-wrap">
                <Link to="/tags">tags/</Link>
                <span tw="text-primary-fg">{pageContext.tag}</span>
              </div>
            </Header>
          </header>
          <div tw="flex flex-wrap gap-4 justify-center">
            {edges.map(edge => {
              return renderLayout(edge.node)
            })}
          </div>
          <NavLink tw="mt-6 mx-auto" to="/tags">
            View All Tags
          </NavLink>
        </ContentBounds>
      </Layout>
    </>
  )
}

interface IContent {
  frontmatter: {
    description: string
    title: string
    tags: string[]
    date?: string
    type?: string
  }
  fields: {
    slug: string
    contentType: string
  }
}
interface IQueryData {
  data: {
    allMdx: {
      edges: {
        node: IContent
      }[]
    }
  }
}
export const pageQuery = graphql`
  query tags($tag: [String]) {
    allMdx(
      filter: { frontmatter: { tags: { in: $tag }, published: { eq: true } } }
    ) {
      edges {
        node {
          frontmatter {
            description
            title
            tags
            date
            type
          }
          fields {
            slug
            contentType
          }
        }
      }
    }
  }
`
export default TagPage
