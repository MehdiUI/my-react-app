import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/index.sass'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)
