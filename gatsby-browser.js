import React from "react"
import { ThemeProvider } from "./src/themecontext"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
