import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/components/pages/Home'
import Contact from '../src/components/pages/Contact'
import AboutMe from '../src/components/pages/AboutMe'
import Company from '../src/components/pages/Company'

function App() {

  return (
    <Router >
      <ul>
        <li>Home</li>
        <li>Contato</li>
        <li>Sobre Mim</li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/company" element={<Company />} />

        <Route path="/aboutme" element={<AboutMe />} />

        <Route path="/contact" element={<Contact />} />

        </Routes>

      <p>Footer</p>
    </Router >
  )
}

export default App
