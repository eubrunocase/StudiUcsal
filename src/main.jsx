import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components"
import { theme } from './styles/theme.js'
import { GlobalStyle } from './styles/global.js'
import { Register } from './pages/Register/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      
      <Register />

    </ThemeProvider>
  </React.StrictMode>,
)
