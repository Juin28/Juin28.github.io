import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Educations from './components/Educations/Educations'
import Experiences from './components/Experiences/Experiences'
import Projects from './components/Projects/Projects'
import Awards from './components/Awards/Awards'
import Certificates from './components/Certificates/Certificates'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Educations />
        <Experiences />
        <Projects />
        <Awards />
        <Certificates />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
