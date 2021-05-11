import { format, parseISO } from "date-fns"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import "twin.macro"
import tw from "twin.macro"
import { Button, Header, LinkButton, TagBadge } from "./styled"
import Layout from "./layout"
import TypeStripe from "./TypeStripe"
import { Container, ContentBounds } from "./styled"
import { Link } from "gatsby"

interface Props {
  data: {
    type?: string
    title: string
    tags: string[]
    date?: string
    image?: FileNode
    description: string
    code?: string
    example?: string
    emoji?: string
  }
}
const ContentHeaders = ({
  data: { type, title, tags, date, image, description, emoji, code, example },
}: Props) => {
  const processedImage = image ? getImage(image) : null
  return (
    <>
      {type && <TypeStripe type={type}>{type}</TypeStripe>}
      <div tw=" mt-12 mx-auto max-w-3xl px-8">
        <header tw="mb-8">
          <Header tw="flex  items-center justify-between mb-4 flex-wrap">
            {title}
          </Header>

          <div tw="flex gap-1 mb-2">
            {tags.map(tag => (
              <Link tw="mb-2" to={`/tags/${tag}`}>
                <TagBadge>{tag}</TagBadge>
              </Link>
            ))}
          </div>
          <div tw="flex gap-3 flex-wrap">
            {example && (
              <LinkButton target="_blank" href={example}>
                Running Example
              </LinkButton>
            )}
            {code && (
              <LinkButton target="_blank" href={code}>
                Code
              </LinkButton>
            )}
          </div>
          <div tw="flex flex-col justify-between items-start gap-2">
            {date && (
              <h6 tw=" font-tmono text-right inline">
                {format(parseISO(date), "MMM d, y")}
              </h6>
            )}
          </div>
        </header>
        {processedImage ? (
          <div tw="flex justify-center max-w-xl mx-auto shadow-2xl">
            <GatsbyImage image={processedImage} alt={description} />
          </div>
        ) : null}
      </div>
    </>
  )
}

export default ContentHeaders
