import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // This looks for the file we just created
import './index.css'   // This loads your grid background

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)