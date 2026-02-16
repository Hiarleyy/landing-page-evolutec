import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Autoridade from './components/autoridade'
import RedesSociais from './components/RedesSociais'
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
      <Autoridade/>
      <Cursos/>
      <Contato/>
      <RedesSociais/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
