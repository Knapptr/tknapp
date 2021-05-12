import { graphql, Link } from "gatsby"
import React from "react"
import tw, { styled } from "twin.macro"
import "twin.macro"
import {
  ContainerBelowStripe,
  LinkButton,
  ShortContainer,
  TagBadge,
  Text,
} from "./styled"
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

const StyledProjectLink = styled(LinkButton)`
  ${tw`hover:shadow-xl transition-all`}
`
const ProjectShort = ({ project }: Props) => {
  return (
    <ShortContainer>
      <TypeStripe type="project">project</TypeStripe>
      <ContainerBelowStripe>
        <header tw="">
          <div tw="flex items-baseline gap-2 ">
            <span tw="text-2xl lg:text-4xl">{project.emoji}</span>
            <Link tw="hover:underline" to={project.slug}>
              <h2 tw="text-lg font-bold font-tmono">{project.title}</h2>
            </Link>
          </div>
          <div tw="flex flex-wrap-reverse my-1 gap-1">
            {project.tags.map(tag => (
              <Link to={`/tags/${tag}`}>
                <TagBadge>
                  <h6 tw="text-sm">{tag}</h6>
                </TagBadge>
              </Link>
            ))}
          </div>
        </header>
        <div tw="max-w-sm">
          <Text>{project.description}</Text>
        </div>
        <div tw="mt-auto flex justify-center sm:justify-start md:justify-center md:mx-0 gap-1 flex-wrap">
          <StyledProjectLink href={project.code} target="_blank">
            Code
          </StyledProjectLink>
          {project.example && (
            <StyledProjectLink href={project.example} target="_blank">
              Example
            </StyledProjectLink>
          )}

          <StyledProjectLink as={Link} to={project.slug}>
            {/* This shows as an error, but is not an issue */}
            Write-up
          </StyledProjectLink>
        </div>
      </ContainerBelowStripe>
    </ShortContainer>
  )
}

export default ProjectShort
