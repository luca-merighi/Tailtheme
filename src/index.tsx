import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'

import { AppProvier } from './data/context/AppContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <AppProvier>
      <App />
    </AppProvier>
  </React.StrictMode>
)