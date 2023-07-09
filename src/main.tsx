import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { ProvedorMeuContexto } from './contexto/Contexto.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProvedorMeuContexto>
      <App />
    </ProvedorMeuContexto>
  </React.StrictMode>,
)
