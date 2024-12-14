import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Nav from './nav/Nav.jsx'
import Footer from './Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Nav />
    <App />
    <Footer />
  </BrowserRouter>

)