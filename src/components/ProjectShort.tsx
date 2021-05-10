import { graphql, Link } from "gatsby"
import React from "react"
import tw, { styled } from "twin.macro"
import "twin.macro"
import { LinkButton, TagBadge, Text } from "./styled"
import TypeStripe from "./TypeStripe"

interface Props {
  project: {
    title: string
    description: string
    tags: string[]
    emoji: string
    slug: string
    example: string
    code: string
  }
}
const ProjectShort = ({ project }: Props) => {
  return (
    <div tw="flex flex-col cursor-default bg-tertiary-fill py-4 h-full rounded hover:(filter brightness-100 shadow-2xl) brightness-95 transition-all duration-300 ">
      <TypeStripe type="project">project</TypeStripe>
      <div tw="px-4 h-full flex flex-col justify-center">
        <header tw="">
          <div tw="flex items-baseline gap-2 ">
            <span tw="text-2xl lg:text-4xl">{project.emoji}</span>
            <h3 tw="text-lg font-bold font-tmono">{project.title}</h3>
          </div>
          <div tw="flex flex-wrap-reverse my-1 gap-1">
            {project.tags.map(tag => (
              <TagBadge>
                <h6 tw="text-sm">{tag}</h6>
              </TagBadge>
            ))}
          </div>
        </header>
        <div tw="max-w-sm">
          <Text>{project.description}</Text>
        </div>
        <div tw="mt-auto flex justify-center sm:justify-start md:justify-center md:mx-0 gap-1 flex-wrap">
          <LinkButton href={project.code} target="_blank">
            Code
          </LinkButton>
          <LinkButton href={project.example} target="_blank">
            Example
          </LinkButton>

          <LinkButton as={Link} to={project.slug}>
            {/* This shows as an error, but is not an issue */}
            Write-up
          </LinkButton>
        </div>
      </div>
    </div>
  )
}

export default ProjectShort
