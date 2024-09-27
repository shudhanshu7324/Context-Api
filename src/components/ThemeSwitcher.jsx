import React, { useContext } from 'react'
import ThemeContext from '../contextApi/store'

const ThemeSwitcher = () => {
    const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <div style={{backgroundColor: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black"}}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  )
}

export default ThemeSwitcher
