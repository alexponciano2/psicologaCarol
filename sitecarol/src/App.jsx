import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../src/components/pages/Home'
import Contact from '../src/components/pages/Contact'
import AboutMe from '../src/components/pages/AboutMe'
import Company from '../src/components/pages/Company'
import Container from '../src/components/layout/Container'
import Footer from '../src/components/layout/Footer'
import Navbar from '../src/components/layout/Navbar'


function App() {

  return (
    <Router >
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
          <Route path="/"        element={<Home    />} />
          <Route path="/company" element={<Company />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </Router >
  )
}

export default App
