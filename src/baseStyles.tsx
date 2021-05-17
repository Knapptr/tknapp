import tw, { css } from "twin.macro"

const baseStyles = css`
  .preload {
    body {
      transition: none;
    }
  }
  .light {
    --color-primary: #242424;
    --bg-color-primary: #e7e7e7;
    --color-secondary: #797979;
    --bg-color-secondary: #dddddd;
    --color-tertiary: #5a5a5a;
    --bg-color-tertiary: #d3d3d3;
    --color-other: #d3869b;
    --color-music: #8ec07c;
    --color-all: #98971a;
    --color-code: #fe8019;
    --color-project: #d79921;
  }
  .dark {
    --color-primary: #e0dede;
    --bg-color-primary: #242424;
    --color-secondary: #eeeeee;
    --bg-color-secondary: #414141;
    --color-tertiary: #c6c8d8;
    --bg-color-tertiary: #363636;
    --color-other: #8f3f71;
    --color-music: #427b58;
    --color-all: #79740e;
    --color-code: #af3a03;
    --color-project: #d79921;
  }
  html,
  body {
    ${tw`bg-primary-fill text-primary-fg transition-all h-full`}
  }
`

export default baseStyles
