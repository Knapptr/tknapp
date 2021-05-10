import tw, { styled } from "twin.macro"

type StripeProps = { type: string }
const TypeStripe = styled.div<StripeProps>`
  ${tw`font-tmono px-4 -ml-2 rounded-l-lg`}
  ${({ type }) => {
    type = type ? type.toLowerCase().trim() : "other"
    switch (type) {
      case "music":
        return tw`bg-music`
      case "code":
        return tw`bg-code`
      case "other":
        return tw`bg-other`
      case "project":
        return tw`bg-project`
      default:
        return tw`bg-other`
    }
  }};
`

export default TypeStripe
