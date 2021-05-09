/*

I would like this component to have an 'active' link when only part of the path is true (ie, would be active on: /posts and /posts/1 ).
This is tricky because gatsby link doesn't provide for a 'partially active' link anymore.

Reach router provides the 'getprops' property, but this will replace all class names. Maybe this needs a HOC.

*/
import { Link } from "gatsby"
import React from "react"
import tw, { css, styled } from "twin.macro"
import "twin.macro"

const twLinkBase = css`
  ${tw`text-yellow-800 bg-yellow-400`}
`
const twLinkActive = tw`text-blue-900`

const ILink = styled(Link)`
  ${tw`cursor-pointer hover:text-secondary-fg text-yellow-800`}
  &.active {
    ${tw`cursor-pointer hover:text-secondary-fg text-purple-800`}
  }
`
const NavLink = ({
  to,
  children,
}: {
  to: string
  children: string | JSX.Element
}) => {
  return (
    <ILink
      getProps={({ isCurrent }) => {
        console.log({ isCurrent })
        return isCurrent ? {  " butts" } : {}
      }}
      to={to}
    >
      {children}
    </ILink>
  )
}
export default NavLink
