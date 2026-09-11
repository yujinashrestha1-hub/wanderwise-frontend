import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'sonner'
import { AuthProvider } from './context/AuthContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Toaster richColors position='top-right' />
    <ThemeProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
    </ThemeProvider>
  </StrictMode>, 
)