import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './services/i18n/i18n'

import App from './App'

import './assets/styles/bootstrap-reboot.min.css'
import './assets/styles/fonts.css'
import './assets/styles/icomoon.css'
import './assets/styles/variables.css'
import './assets/styles/style.css'
import './assets/styles/scroll.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // </React.StrictMode>
)
