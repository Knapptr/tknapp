import { useContext } from "react"
import { ThemeContext } from "../themecontext"
import "twin.macro"

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <button
      onClick={toggleTheme}
      tw="text-base w-9  p-1 hover:opacity-75 focus:outline-none border border-tertiary-fg bg-secondary-fill rounded-full focus:ring-0 shadow"
    >
      {theme === "dark" ? "🌛" : "🌄"}
    </button>
  )
}

export default ThemeSwitch
