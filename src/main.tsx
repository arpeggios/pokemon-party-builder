// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { Container, ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from "./theme"


createRoot(document.getElementById('root') as Element).render(
  // <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <App />
      </Container>
    </ThemeProvider>
  // </StrictMode>
)
