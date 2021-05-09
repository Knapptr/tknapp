import React from "react"
import "twin.macro"

const Kbd = ({ children }: { children: string }) => {
  return (
    <kbd tw=" text-gray-600 inline-block font-light px-1 bg-gray-300 shadow-sm border border-double border-black ring-1 ring-tertiary-fg mx-1">
      {children}
    </kbd>
  )
}

export default Kbd
