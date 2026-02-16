import { useState, useEffect } from 'react'
import './Depoimentos.css'

function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const depoimentos = [
    {
      nome: "TAIANA DE SOUZA",
      titulo: "Depoimento de Taiana",
      texto: " jornada de Taiana, uma jovem que enfrenta grandes desafios de locomoção e financeiros para estudar informática, mostrando a importância da perseverança e do apoio familiar para alcançar seus sonhos. Ela é um exemplo de dedicação, superando obstáculos diários para construir seu futuro.",
      videoId: "lOUrBKfGwhk",
      thumbnail: "/public/banner-video-depoimento.png"
    },
    {
      nome: "TAIANA DE SOUZA",
      titulo: "Técnica em Enfermagem Grau Técnico",
      texto: "Com apenas 16 anos, Suelen já sabia em qual área seguir no mercado de trabalho: Enfermagem. Através do Grau, ela iniciou sua formação técnica e teve a oportunidade de aprender mais sobre o corpo humano e processos químicos nas aulas teóricas e práticas.",
      videoId: "lOUrBKfGwhk",
      thumbnail: "https://img.youtube.com/vi/lOUrBKfGwhk/maxresdefault.jpg"
    },
    // Adicione mais depoimentos aqui se necessário
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? depoimentos.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === depoimentos.length - 1 ? 0 : prev + 1))
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const depoimento = depoimentos[currentIndex]

  return (
    <>
      <section className="depoimentos" id="depoimentos">
        <div 
          className="depoimentos-background"
          style={{ backgroundImage: `url(${depoimento.thumbnail})` }}
        >
          <div className="depoimentos-overlay"></div>
          <div className="depoimentos-container">
            <div className="depoimentos-video">
              <div className="video-wrapper">
                <button 
                  className="play-button"
                  onClick={handleOpenModal}
                  aria-label="Reproduzir vídeo"
                >
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 30L90 60L40 90V30Z" fill="#ffffff" />
                  </svg>
                </button>
              </div>
              <p className="video-label">Assistir depoimento</p>
            </div>

          <div className="depoimentos-conteudo">
            <span className="depoimentos-subtitulo">{depoimento.titulo}</span>
            <h2 className="depoimentos-nome">{depoimento.nome}</h2>
            <p className="depoimentos-texto">{depoimento.texto}</p>

            <div className="depoimentos-navegacao">
              <button 
                className="nav-button prev" 
                onClick={handlePrev}
                aria-label="Depoimento anterior"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="nav-button next" 
                onClick={handleNext}
                aria-label="Próximo depoimento"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Modal do Vídeo */}
      {isModalOpen && (
        <div className="video-modal" onClick={handleCloseModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-button"
              onClick={handleCloseModal}
              aria-label="Fechar vídeo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="video-modal-wrapper">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${depoimento.videoId}?autoplay=1`}
                title={`Depoimento de ${depoimento.nome}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Depoimentos
