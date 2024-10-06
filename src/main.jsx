import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Inspect from 'inspx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inspect>
    <App />
    </Inspect>
    
  </StrictMode>,
)
