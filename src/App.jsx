import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Autoridade from './components/autoridade'
import RedesSociais from './components/RedesSociais'
import Cursos from './pages/Cursos'
import Contato from './pages/Contato'
import Blog from './pages/Blog'
import Depoimentos from './components/Depoimentos'
import Mapa from './components/Mapa'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Cursos/>
      <Contato/>
      <Autoridade/>
      <Depoimentos/>
      <RedesSociais/>
      <Blog/>
      <Mapa/>
      <Footer/>
    </>
  )
}

export default App
