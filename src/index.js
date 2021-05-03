import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ContactContextProvider } from './components/store'

ReactDOM.render(
    <ContactContextProvider>
        <App/>
    </ContactContextProvider>,
    document.getElementById('root')
)