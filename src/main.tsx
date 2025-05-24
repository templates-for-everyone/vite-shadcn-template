import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Adjust the basename as needed */}
    <BrowserRouter basename={'/'}>
      <App />
    </BrowserRouter>
  </StrictMode>
)
