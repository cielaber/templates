import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import store from '@/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)
