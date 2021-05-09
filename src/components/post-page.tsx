import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Layout from "./layout"
import { parseISO, format } from "date-fns"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import Kbd from "./kbd"
import {
  Container,
  ContentBounds,
  DivideHR,
  Header,
  Text,
  NavLink,
} from "./styled"
import tw, { styled } from "twin.macro"
import "twin.macro"
import { string } from "prop-types"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"

///these are the elements provided to posts in mdx
const shortcodes = { Kbd }

const PostStyles = styled.div`
  ${tw`mt-12 max-w-prose mx-auto text-secondary-fg`}
  p {
    ${tw`my-4`};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`font-tmono text-primary-fg font-bold py-2`}
  }
  h1 {
    ${tw`text-3xl`}
  }
  h2 {
    ${tw`text-2xl`};
  }
  h3 {
    ${tw`text-xl`};
  }
  a {
    ${tw` text-tertiary-fg font-bold hover:text-primary-fg hover:underline`}
  }
  h3 {
    ${tw`text-xl `}
  }
  a {
    ${tw``}
  }
  code {
    ${tw`font-tmono bg-primary-fill py-1 px-1 inline-block`}
  }

  ul {
    li {
      &::before {
        content: "👉";
        margin-right: 0.25rem;
      }
    }
  }

  ol {
    list-style: decimal;
    li {
      margin-left: 1.25rem;
      padding-left: 0.25rem;
    }
  }
  blockquote {
    ${tw`py-0.5 px-6 bg-primary-fill rounded-2xl text-base `}
    strong {
      ${tw`font-tmono`}
    }
  }
  /* For blocks of code */
  pre {
    ${tw`block bg-primary-fill py-2 px-4`}
  }
  img {
    ${tw`mx-auto block my-6`}
  }
`

const PostPage = ({ data: { mdx } }: IQueryData) => {
  const procImage = getImage(mdx.frontmatter.image)
  const tags = mdx.frontmatter.tags.split(",")
  return (
    <>
      <Layout>
        <ContentBounds>
          <Container>
            <header tw="mb-8">
              <Header>{mdx.frontmatter.title}</Header>
              <div tw="flex justify-between items-start">
                <div tw="flex gap-1">
                  {tags.map(tag => (
                    <div tw="font-tmono text-xs shadow rounded-xl px-2 py-1 bg-tertiary-fill">
                      <h6>{tag}</h6>
                    </div>
                  ))}
                </div>
                <h6 tw=" font-tmono text-right inline">
                  {format(parseISO(mdx.frontmatter.date), "MMM d, y")}
                </h6>
              </div>
            </header>
            {procImage ? (
              <div tw="flex justify-center max-w-xl mx-auto shadow-2xl">
                <GatsbyImage
                  image={procImage}
                  alt={mdx.frontmatter.description}
                />
              </div>
            ) : null}

            <PostStyles>
              <Text>
                <MDXProvider components={shortcodes}>
                  <MDXRenderer>{mdx.body}</MDXRenderer>
                </MDXProvider>
              </Text>
            </PostStyles>
          </Container>
          <NavLink tw="mx-auto" to="/posts">
            Back to Posts
          </NavLink>
        </ContentBounds>
      </Layout>
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
        tags: string
        description: string
        image: FileNode
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
