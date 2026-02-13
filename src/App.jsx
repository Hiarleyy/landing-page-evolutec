import Navbar from './components/Navbar'
import Banner from './components/Banner'
import SobreEscola from './components/SobreEscola'
import Cursos from './pages/Cursos'
import Contato from './pages/Contato'
import Blog from './pages/Blog'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <SobreEscola/>
      <Cursos/>
      <Contato/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
