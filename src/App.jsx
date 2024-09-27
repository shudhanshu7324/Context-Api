import React from 'react'
import ThemeProvider from './contextApi/ThemeProvider'
import ThemeSwitcher from './components/ThemeSwitcher'

const App = () => {
  return (
    <ThemeProvider>
      <h1>Context Api</h1>
      <ThemeSwitcher></ThemeSwitcher>
    </ThemeProvider>
  )
}

export default App
