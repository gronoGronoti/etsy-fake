import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import Router from './components/consts/Router'

import './index.css'
import MainTheme from './MainTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={MainTheme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
