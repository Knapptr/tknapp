import React from "react"
import "twin.macro"
import tw, { styled } from "twin.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

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
              <a
                aria-label="@moosehands on twitter"
                href="https://twitter.com/Moosehands"
                target="__blank"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </StyledLogoLi>
            <StyledLogoLi>
              <a
                aria-label="email knapptr@gmail.com"
                href="mailto:knapptr@gmail.com?subject=Hellofrom tknapp.net!"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </StyledLogoLi>
            <StyledLogoLi>
              <a
                aria-label="knapptr on github"
                href="https://github.com/knapptr"
                target="__blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </StyledLogoLi>
          </ul>
          <ul tw="flex gap-2 flex-wrap">
            <StyledFooterNavItem>
              <Link to="/about">about</Link>
            </StyledFooterNavItem>
            <StyledFooterNavItem>
              <Link to="/posts">posts</Link>
            </StyledFooterNavItem>
            <StyledFooterNavItem>
              <Link to="/projects">projects</Link>
            </StyledFooterNavItem>
            <StyledFooterNavItem>
              <Link to="/contact">contact</Link>
            </StyledFooterNavItem>
          </ul>
          <p tw="mt-2 font-tsans font-light text-xs">Tyler Knapp ©2021</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
