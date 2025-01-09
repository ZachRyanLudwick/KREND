import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/home.jsx'
import Contact from './pages/contact/contact.jsx'
import Services from './pages/services/Services.jsx'
import WhoWeAre from './pages/whoweare/whoweare.jsx'
import './index.css'



function App() {

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services/>} />
      <Route path='/about' element={<WhoWeAre/>} />
    </Routes>   
  )
}

export default App
