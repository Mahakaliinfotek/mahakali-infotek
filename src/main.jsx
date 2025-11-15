import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter> {/* ✅ Wrap your entire app here */}
        <App />
      </BrowserRouter>

    </ThemeProvider>

  </StrictMode>,
)
