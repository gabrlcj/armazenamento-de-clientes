import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import App from './App'
import './index.css'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#e0fbfc',
            main: '#121212',
            dark: '#293241',
        },

        secondary: {
            main: '#293241',
            dark: '#3d5a80',
        },
        
        contrastThreshold: 3,
    },
})

ReactDOM.render(
  <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)