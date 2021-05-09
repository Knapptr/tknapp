import { Link } from "gatsby"
import tw, { styled } from "twin.macro"

export const ContentBounds = styled.div`
  ${tw`w-full max-w-4xl sm:w-5/6 mx-auto flex flex-col content-center`}
`
export const Container = styled.div`
  ${tw`bg-secondary-fill py-6 sm:py-8 px-3 sm:px-7 my-4 rounded-lg shadow-lg sm:overflow-auto mb-6`}
`
export const ColContainer = styled.div`
  ${tw` flex flex-col sm:flex-row gap-4 `}
`
export const Header = styled.h2`
  ${tw`font-tmono font-bold text-3xl my-2  md:text-4xl xl:text-5xl`}
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
  ${tw`font-tmono bg-tertiary-fill text-tertiary-fg py-2 px-4 border border-tertiary-fg rounded block shadow-md hover:opacity-75 `}
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
  ${tw`flex flex-row flex-wrap sm:ml-auto gap-4 justify-center order-1 sm:order-none`}
`
export const Nav = styled.nav`
  ${tw`flex flex-col items-center sm:flex-row px-6 py-5 font-tmono w-full max-w-5xl mx-auto sm:items-baseline gap-4 mb-6 md:mb-12 lg:mb-16 `}
`
