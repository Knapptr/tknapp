import React from "react"
import "twin.macro"
import tw from "twin.macro"
import Layout from "./layout"
import { Container, ContentBounds } from "./styled"
import ContentHeaders from "./ContentHeaders"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import shortcodes from "./shortcodes"
import Stylesheet from "../stylesheetProvider"

interface Props {
  data: {
    type?: string
    title: string
    tags: string[]
    date?: string
    image?: FileNode
    description: string
    body: any
  }
}
const ContentLayout = ({
  content,
  children,
}: {
  children?: string | JSX.Element | JSX.Element[]
  content: Props["data"]
}) => {
  return (
    <Layout>
      <ContentBounds>
        <div tw="bg-secondary-fill rounded-lg py-6">
          <ContentHeaders data={content} />
          <Stylesheet>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{content.body}</MDXRenderer>
            </MDXProvider>
          </Stylesheet>
        </div>
        {children}
      </ContentBounds>
    </Layout>
  )
}

export default ContentLayout
