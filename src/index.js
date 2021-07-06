import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import App from './App'
import './index.css'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#AD2831',
            main: '#800E13',
            dark: '#38040E',
        },

        secondary: {
            main: '#640D14',
            dark: '#250902',
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