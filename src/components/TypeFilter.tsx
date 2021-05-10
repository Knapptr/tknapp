import { propTypes } from "gatsby-plugin-image/dist/src/components/gatsby-image.server"
import React, { useState } from "react"
import "twin.macro"
import tw, { styled } from "twin.macro"
import { PostTypes } from "./PostTypeSort"

const postTypes = ["code", "other", "music"]
interface FilterProps {
  filter: (type: PostTypes) => void
}
const setTWColorByType = (type: string) => {
  switch (type) {
    case "music":
      return tw`bg-music`
    case "code":
      return tw`bg-code`
    case "all":
      return tw`bg-all`
    default:
      return tw`bg-other`
  }
}
interface ButtonProps {
  type: PostTypes
  currentType: string
  handler: (type: PostTypes) => void
  className?: string
}
const TypeButton = ({ type, handler, currentType, className }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => (type === currentType ? handler("all") : handler(type))}
    >
      {type}
    </button>
  )
}
const StyledTypeButton = styled(TypeButton)`
  ${tw`py-1 px-2 font-tmono shadow border border-primary-fg hover:(filter brightness-110)`}
  ${({ type, currentType }) =>
    currentType === "all"
      ? setTWColorByType(type)
      : currentType === type
      ? setTWColorByType(type)
      : tw`bg-tertiary-fill`};
`

const TypeFilter = ({ filter }: FilterProps) => {
  const [currentPostType, setCurrentPostType] = useState("all")
  const handleTypeChange = (type: string) => {
    setCurrentPostType(type)
    filter(type)
  }
  const handleAllButton = () => {
    if (currentPostType === "all") return
    setCurrentPostType("all")
    filter("all")
  }
  return (
    <ul tw="flex gap-1 justify-center mt-1">
      <li>
        {" "}
        <StyledTypeButton
          type="all"
          currentType={currentPostType}
          handler={handleAllButton}
        >
          All
        </StyledTypeButton>
      </li>
      {postTypes.map(type => (
        <li>
          <StyledTypeButton
            key={type}
            currentType={currentPostType}
            handler={handleTypeChange}
            type={type}
          >
            {type}
          </StyledTypeButton>
        </li>
      ))}
    </ul>
  )
}

export default TypeFilter
