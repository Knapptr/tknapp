import tw, { styled } from "twin.macro"

type StripeProps = { type: string }
const TypeStripe = styled.h6<StripeProps>`
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
      default:
        return tw`bg-other`
    }
  }};
`

export default TypeStripe
