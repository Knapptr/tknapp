import tw, { css } from "twin.macro"

const baseStyles = css`
  .preload {
    body {
      transition: none;
    }
  }
  .light {
    --color-primary: #242424;
    --bg-color-primary: #e0dede;
    --color-secondary: #616161;
    --bg-color-secondary: #eeeeee;
    --color-tertiary: #5a5a5a;
    --bg-color-tertiary: #d3d3d3;
  }
  .dark {
    --color-primary: #e0dede;
    --bg-color-primary: #242424;
    --color-secondary: #eeeeee;
    --bg-color-secondary: #414141;
    --color-tertiary: #c6c8d8;
    --bg-color-tertiary: #5a5a5a;
  }
  body {
    ${tw`bg-primary-fill text-primary-fg transition-all`}
  }
`

export default baseStyles
