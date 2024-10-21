import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Header from './components/layout/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/Frontend-Basics/Lab%207'>
      <Header></Header>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
