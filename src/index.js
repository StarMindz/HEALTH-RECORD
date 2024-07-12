import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { AuthProvider } from './context/AuthProvider'
import store from './redux/configureStore.js'
import './index.css'
import axios from 'axios'
import App from './App.js'

axios.defaults.withCredentials = true;
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
