import {useContext, createContext} from "react"

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {}, // yeh dono ek method hai jabhi context call karega this will work 
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){ // custom hooks using use keyword
  return useContext(ThemeContext)
}