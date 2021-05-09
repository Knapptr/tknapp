import React from "react"
import "twin.macro"
import tw, { styled } from "twin.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const StyledLogoLi = styled.li`
  ${tw`hover:text-secondary-fg cursor-pointer`}
`
const StyledFooterNavItem = styled.li`
  ${tw`hover:text-secondary-fg cursor-pointer text-sm`}
`

const Footer = () => {
  return (
    <footer tw="w-full px-3 py-4 font-tmono text-tertiary-fg bg-tertiary-fill mt-6 md:mt-12 lg:mt-16">
      <div tw="mx-auto max-w-4xl">
        <div tw="flex flex-col items-center mx-auto gap-0.5">
          <ul tw="flex gap-4 ">
            <StyledLogoLi>
              <FontAwesomeIcon icon={faTwitter} />
            </StyledLogoLi>
            <StyledLogoLi>
              <FontAwesomeIcon icon={faEnvelope} />
            </StyledLogoLi>
            <StyledLogoLi>
              <FontAwesomeIcon icon={faGithub} />
            </StyledLogoLi>
          </ul>
          <ul tw="flex gap-2">
            <StyledFooterNavItem>about</StyledFooterNavItem>
            <StyledFooterNavItem>posts</StyledFooterNavItem>
            <StyledFooterNavItem>projects</StyledFooterNavItem>
            <StyledFooterNavItem>contact</StyledFooterNavItem>
          </ul>
          <p tw="mt-2 font-tsans font-light text-xs">Tyler Knapp ©2021</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
