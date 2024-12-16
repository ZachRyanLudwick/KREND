import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/home.jsx'
import Contact from './pages/contact/contact.jsx'


function App() {

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    
  )
}

export default App
