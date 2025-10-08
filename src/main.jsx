import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import './styleFaq.css'
import './styleSupport.css'
import './styleFooter.css'
import './styleLiquid.css'


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
