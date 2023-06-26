import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { DarkModeContextProvider } from './context/darkModeContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
)