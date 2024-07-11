import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { AuthProvider } from './context/AuthProvider'
import store from './redux/configureStore.js'
import './index.css'
import App from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <React.StrictMode>
  <AuthProvider>
    <Provider store={store}>
        <App />
    </Provider>
  </AuthProvider>
 </React.StrictMode>
)
