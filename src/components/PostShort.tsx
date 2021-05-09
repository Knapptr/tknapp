import { format, parseISO } from "date-fns"
import { Link } from "gatsby"
import { GatsbyImageProps, getImage, GatsbyImage } from "gatsby-plugin-image"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"

import React from "react"
import "twin.macro"

import {
  Container,
  Header,
  Button,
  DivideHR,
  Text,
  ColContainer,
  NavLink,
} from "./styled"

const PostShort = ({
  title,
  date,
  description,
  tags,
  type,
  image,
  slug,
}: {
  image: FileNode
  title: string
  date: string
  description: string
  tags: string[]
  type: string
  slug: string
}) => {
  const procImage = getImage(image)
  return (
    // <Link tw=" border hover:shadow-2xl transition-all" to={slug}>
    <Container tw="py-8">
      <ColContainer tw="flex-nowrap">
        <div tw=" w-3/4 md:w-1/2 order-2 sm:order-none">
          <h6 tw="font-light font-tmono text-tertiary-fg">
            {format(parseISO(date), "MMM d, y")}
          </h6>
          <Header as="h3" tw="text-lg md:text-xl xl:text-2xl ">
            <NavLink tw="hover:underline" to={slug}>
              {title}
            </NavLink>
          </Header>
          {/* <DivideHR /> */}
          <Text>{description}</Text>
        </div>
        <div tw="w-full md:w-1/2 relative md:max-h-48">
          {procImage ? (
            <GatsbyImage
              tw="h-full max-h-48 w-full"
              alt="surfin dog"
              image={procImage}
            />
          ) : null}
          <div tw="absolute bottom-4  gap-1 right-2 flex  flex-wrap-reverse content-end items-end justify-end">
            {tags.map(tag =>
              tag !== "none" ? (
                <h6 tw="bg-primary-fill rounded-2xl py-1 px-4 border border-secondary-fg cursor-pointer opacity-75 ">
                  {tag}
                </h6>
              ) : null
            )}
          </div>
        </div>
        {/* Image Placeholder */}

        {/* <div tw="w-64 h-64 bg-purple-700 self-center">
          <div tw="flex items-end inset-full h-full justify-end p-6 gap-1 font-tmono text-xs content-end  flex-wrap">
            {tags.map(tag => (
              <a tw="bg-primary-fill rounded-2xl py-1 px-4 border border-secondary-fg cursor-pointer hover:(filter brightness-110 shadow-lg)">
                {tag}
              </a>
            ))}
          </div> */}
        {/* </div> */}
      </ColContainer>
    </Container>
    // </Link>
  )
}

export default PostShort
