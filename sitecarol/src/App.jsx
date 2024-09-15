import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../src/components/pages/Home'
import Contact from '../src/components/pages/Contact'
import AboutMe from '../src/components/pages/AboutMe'
import Company from '../src/components/pages/Company'
import Container from '../src/components/layout/Container'

function App() {

  return (
    <Router >
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/Contact'>Contato</Link>
        <Link to='/Company'>Empresa</Link>
        <Link to='/AboutMe'>Sobre Mim</Link>
      </ul>
      <Container customClass='min-height'>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/company" element={<Company />} />

          <Route path="/aboutme" element={<AboutMe />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>

      </Container>
      <p>Footer</p>
    </Router >
  )
}

export default App
