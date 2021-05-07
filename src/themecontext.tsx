import { useContext, createContext, useState, useEffect, useRef } from "react"
import { GlobalStyles, theme } from "twin.macro"
import { Global } from "@emotion/react"
import baseStyles from "./baseStyles"

type Theme = "light" | "dark"
export type IContext = {
  theme: Theme
  toggleTheme: () => void
}

const getInitialTheme = (): "dark" | "light" => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme")
    if (
      typeof storedPrefs === "string" &&
      (storedPrefs === "dark" || storedPrefs === "light")
    ) {
      return storedPrefs
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
    if (userMedia.matches) {
      return "dark"
    }
  }

  return "dark"
}

const initThemeContext: IContext = {
  theme: getInitialTheme(),
  toggleTheme: () => {},
}

export const ThemeContext = createContext(initThemeContext)

export const ThemeProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) => {
  const [theme, setTheme] = useState(getInitialTheme)
  const root = window.document.documentElement

  const setRootTheme = () => {
    root.classList.remove(theme === "dark" ? "light" : "dark")
    root.classList.add(theme)
  }
  //
  useEffect(() => {
    if (root.classList.contains(theme)) {
      console.log("theme is the same")
      return
    }
    setRootTheme()
    localStorage.setItem("color-theme", theme)
  }, [theme])
  const toggleTheme = () => {
    setTheme(th => (th === "dark" ? "light" : "dark"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Global styles={baseStyles} />
      {children}
    </ThemeContext.Provider>
  )
}
