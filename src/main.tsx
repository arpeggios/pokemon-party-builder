// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { Container, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { blue, green } from '@mui/material/colors'

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: "30px",
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "30px"
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          lineHeight: "normal",
          top: "-9px !important"
        }
      }
    }
  },
  typography: {
    h1: {
      fontSize: "3rem",
      margin: "1rem auto"

    }
  },
  palette: {
    mode: "dark",
    background: {
      default: "#242424"
    },
    primary: {
      main: blue[300]
    },
    secondary: {
      main: green[300]
    }
  }
})

createRoot(document.getElementById('root') as Element).render(
  // <StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container>
      <App />
    </Container>
  </ThemeProvider>
  // </StrictMode>,
)
