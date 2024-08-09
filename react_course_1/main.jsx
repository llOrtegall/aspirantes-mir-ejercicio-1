/* eslint-disable no-unused-vars */
import ReactDom from 'react-dom/client'
import App from './src/App'
import React from 'react'

import './styles.css'

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
