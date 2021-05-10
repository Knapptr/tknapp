import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import "twin.macro"

const CollapsedMenu = ({
  toggle,
  isOpen,
}: {
  isOpen: boolean
  toggle: () => void
}) => {
  return (
    <>
      <button
        aria-label="view navbar"
        tw="w-3 h-3 text-xl hover:text-secondary-fg"
      >
        {isOpen ? (
          <FontAwesomeIcon onClick={toggle} icon={faTimes} />
        ) : (
          <FontAwesomeIcon onClick={toggle} icon={faBars} />
        )}
      </button>
    </>
  )
}
export default CollapsedMenu
