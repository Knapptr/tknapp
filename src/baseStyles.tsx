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
    --color-secondary: #797979;
    --bg-color-secondary: #d1d1d1;
    --color-tertiary: #5a5a5a;
    --bg-color-tertiary: #cecece;
    --color-other: #d3869b;
    --color-music: #8ec07c;
    --color-all: #98971a;
    --color-code: #fe8019;
  }
  .dark {
    --color-primary: #e0dede;
    --bg-color-primary: #242424;
    --color-secondary: #eeeeee;
    --bg-color-secondary: #414141;
    --color-tertiary: #c6c8d8;
    --bg-color-tertiary: #494949;
    --color-other: #8f3f71;
    --color-music: #427b58;
    --color-all: #79740e;
    --color-code: #af3a03;
  }
  html,
  body {
    ${tw`bg-primary-fill text-primary-fg transition-all h-full`}
  }
`

export default baseStyles
