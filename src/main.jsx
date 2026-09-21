import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Ponto de entrada da aplicação.
// Nada de estilização aqui — só a inicialização do React mesmo.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
