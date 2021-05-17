import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

export const ContentBounds = styled.div`
  ${tw`w-11/12 max-w-4xl sm:w-5/6 mx-auto flex flex-col content-center`}
`
export const Container = styled.div`
  ${tw`  px-3 sm:px-7 rounded-lg  `}
`
export const ColContainer = styled.div`
  ${tw` flex flex-col sm:flex-row gap-4 `}
`
export const TagBadgeInset = styled.h6`
  ${tw`bg-secondary-fill rounded-2xl py-1 px-4 border border-secondary-fg cursor-pointer opacity-75 `}
`
export const TagBadge = styled.div`
  ${tw`hover:(shadow-xl filter opacity-100 brightness-105) font-tmono text-xs shadow rounded-xl px-2 py-1 bg-secondary-fill transition-all cursor-pointer`}
`

export const Header = styled.h2`
  ${tw`font-tmono font-bold text-3xl my-1 md:text-4xl xl:text-5xl`}
`
export const SubHeader = styled(Header)`
  ${tw`text-xl md:text-xl lg:text-2xl`}
`
export const LinkButton = styled.a`
  ${tw`bg-secondary-fill py-2 px-3 font-tmono text-sm border border-tertiary-fg hover:(filter brightness-110) rounded`}
`
export const DivideHR = styled.hr`
  ${tw`my-4 border-primary-fg w-1/2`}
`
export const EmojiBullet = styled.span`
  ${tw`text-3xl flex flex-col`}
`
export const FlexUL = styled.ul`
  ${tw`flex flex-col gap-2`};
  li {
    ${tw`flex flex-row content-center gap-2`};
  }
`
export const Text = styled.p`
  ${tw`font-tsans max-w-prose w-full text-sm md:text-base md:leading-normal xl:text-lg mb-4 py-1`}
`
export const FloatFrame = styled.div`
  ${tw`rounded md:float-right w-4/6 md:w-1/2 lg:w-7/12 my-2 mx-auto md:mx-4 `}
`
export const Caption = styled.caption`
  ${tw`block text-center text-sm text-secondary-fg`}
`
export const ExternalLink = styled.a`
  ${tw` hover:text-primary-fg hover:underline font-bold text-tertiary-fg`}
`
export const Button = styled.button`
  ${tw`font-tmono bg-tertiary-fill text-tertiary-fg py-1 px-2 border border-tertiary-fg rounded block shadow-md hover:opacity-75 `}
`
export const TitleHeader = styled.h1`
  ${tw`text-center md:text-left text-2xl lg:text-3xl font-bold`}
`
// export const NavLink = styled(Link)`
//   ${tw`cursor-pointer hover:text-secondary-fg font-tmono font-bold`}; ;
// `
export const NavLink = styled(Link)`
  ${tw`cursor-pointer hover:text-secondary-fg font-tmono font-bold`};
  &.active {
    ${tw`text-tertiary-fg`}
  }
`
export const ExtNavLink = styled.a`
  ${tw`cursor-pointer hover:text-primary-fg font-bold hover:underline font-tmono `}
`
export const NavList = styled.ul`
  ${tw`flex flex-row flex-wrap gap-4 justify-center`}
`
export const Nav = styled.nav`
  ${tw`flex items-center px-6 pt-4 pb-2  font-tmono w-full mx-auto sm:items-baseline gap-4 max-w-5xl  `}
`
export const ShortContainer = styled.div`
  ${tw`flex flex-col cursor-default bg-secondary-fill py-4 h-full rounded  `}
`
export const ContainerBelowStripe = styled.div`
  ${tw`px-4 h-full flex flex-col justify-center`}
`

export const HomeSection = styled.section`
  ${tw`bg-tertiary-fill mx-auto  px-5 rounded-lg py-4 my-12 sm:my-24 lg:my-48 xl:my-64`}
`
