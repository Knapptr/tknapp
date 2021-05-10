import { format, parseISO } from "date-fns"
import { Link } from "gatsby"
import { GatsbyImageProps, getImage, GatsbyImage } from "gatsby-plugin-image"
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks"
import { styled } from "twin.macro"
import TypeStripe from "./TypeStripe"
import React from "react"
import tw from "twin.macro"
import "twin.macro"

import { Container, Header, Text, ColContainer, NavLink } from "./styled"

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
    <div tw="bg-secondary-fill pt-5 h-full rounded-xl">
      <TypeStripe type={type} tw="py-0.5 px-4 font-tmono mb-2">
        {type ? type.toLowerCase() : "other"}
      </TypeStripe>
      <Container tw="pt-1 pb-3 flex-grow h-full">
        <ColContainer tw="flex-nowrap">
          <div tw=" w-3/4 md:w-1/2 order-2 sm:order-none text-center mx-auto sm:text-left">
            <h6 tw="font-light font-tmono text-tertiary-fg">
              {format(parseISO(date), "MMM d, y")}
            </h6>
            <Header as="h3" tw="text-lg md:text-xl xl:text-2xl ">
              <NavLink tw="hover:underline" to={slug}>
                {title}
              </NavLink>
            </Header>
            <Text tw="">{description}</Text>
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
        </ColContainer>
      </Container>
    </div>
  )
}

export default PostShort
