import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import './styleAnnoun.css'
import './styleFaq.css'
import './styleClash.css'
import './styleTeamCreation.css'
import './styleAbout.css'
import './styleSupport.css'
import './styleHeader.css'
import './styleFooter.css'
import './styleLiquid.css'
import './styleLeaderboard.css'


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
