import { Link } from "gatsby"
import React from "react"
import tw, { styled } from "twin.macro"

const ILink = styled(Link)`
  ${tw`cursor-pointer hover:text-secondary-fg`}
`
const NavLink = ({
  to,
  children,
}: {
  to: string
  children: string | JSX.Element
}) => {
  return (
    <li>
      <ILink to={to}>{children}</ILink>
    </li>
  )
}
