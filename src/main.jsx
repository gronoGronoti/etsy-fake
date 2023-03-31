import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Router from './components/consts/Router'

import './index.css'
import MainTheme from './MainTheme'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={MainTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
