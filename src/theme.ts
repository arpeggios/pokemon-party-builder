import { createTheme } from "@mui/material"
import { blue, green } from '@mui/material/colors'

export const theme = createTheme({
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