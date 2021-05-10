import tw, { styled } from "twin.macro"

const Stylesheet = styled.div`
  ${tw`mt-12 max-w-prose mx-auto text-secondary-fg`}
  p {
    ${tw`my-4`};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`font-tmono text-primary-fg font-bold py-2`}
  }
  h1 {
    ${tw`text-3xl`}
  }
  h2 {
    ${tw`text-2xl`};
  }
  h3 {
    ${tw`text-xl`};
  }
  a {
    ${tw` text-tertiary-fg font-bold hover:text-primary-fg hover:underline`}
  }
  h3 {
    ${tw`text-xl `}
  }
  a {
    ${tw``}
  }
  code {
    ${tw`font-tmono bg-primary-fill py-1 px-1 inline-block`}
  }

  ul {
    li {
      &::before {
        content: "👉";
        margin-right: 0.25rem;
      }
    }
  }

  ol {
    list-style: decimal;
    li {
      margin-left: 1.25rem;
      padding-left: 0.25rem;
    }
  }
  blockquote {
    ${tw`py-0.5 px-6 bg-primary-fill rounded-2xl text-base `}
    strong {
      ${tw`font-tmono`}
    }
  }
  /* For blocks of code */
  pre {
    ${tw`block bg-primary-fill py-2 px-4`}
  }
  img {
    ${tw`mx-auto block my-6`}
  }
`
export default Stylesheet
