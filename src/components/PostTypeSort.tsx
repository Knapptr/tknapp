import React, { useEffect, useState } from "react"
import { Button, ContentBounds, Header, Text } from "./styled"
import "twin.macro"
import tw, { styled } from "twin.macro"

export type PostTypes = "music" | "code" | "other" | "all"
const PostTypeOptions: PostTypes[] = ["all", "code", "music", "other"]

const ToggleButton = styled(Button)<{
  currentMode: PostTypes
  toggleFor: PostTypes
}>`
  ${tw`ml-0.5 bg-primary-fill text-sm md:text-base`}
  ${({ toggleFor, currentMode }) =>
    currentMode === toggleFor ? tw`bg-green-600` : ""}
`

///////SORTER
export const TagSorter = ({
  setSortBy,
}: {
  setSortBy: (type: PostTypes) => void
}) => {
  const [currentToggle, setCurrentToggle] = useState<PostTypes>("all")

  const toggleTypeMode = (type: PostTypes) => {
    setCurrentToggle(type)
    setSortBy(type)
  }

  const renderToggleButtons = () => {
    return PostTypeOptions.map(type => {
      return (
        <ToggleButton
          onClick={() => toggleTypeMode(type)}
          toggleFor={type}
          currentMode={currentToggle}
        >
          {type.toUpperCase()}
        </ToggleButton>
      )
    })
  }

  return (
    <>
      <div tw="w-full mx-auto gap-1 md:gap-2 justify-center md:justify-end px-3  py-3 rounded-lg flex flex-row md:flex-col">
        {renderToggleButtons()}
      </div>
    </>
  )
}

export default TagSorter
