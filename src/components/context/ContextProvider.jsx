import { createContext, useState } from "react"

export const ThemeContext = createContext({})


// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false)


  return (
    <ThemeContext.Provider value={{toggle, setToggle}}>
      { children }
    </ThemeContext.Provider>
  )
}
