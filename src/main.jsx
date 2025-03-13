import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import MainApp from './components/Mainontent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
)
