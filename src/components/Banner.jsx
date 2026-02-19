import { useState, useEffect, useCallback } from 'react'
import './Banner.css'

const slides = [
  {
    id: 1,
    image: '/BANNER.webp',
    title: 'Aprenda Tecnologia na Prática',
    subtitle: 'Cursos de programação, robótica e muito mais para transformar seu futuro.',
    cta: 'Conheça Nossos Cursos',
    ctaLink: '#cursos',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&h=600&fit=crop',
    title: 'Educação que Transforma',
    subtitle: 'Metodologia inovadora com foco em resultados e aprendizado real.',
    cta: 'Saiba Mais',
    ctaLink: '#sobre',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&h=600&fit=crop',
    title: 'Matricule-se Agora',
    subtitle: 'Vagas limitadas! Garanta sua vaga e comece sua jornada na tecnologia.',
    cta: 'Matricule-se',
    ctaLink: '#matricule',
  },
]

function Banner() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length)
  }, [current, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length)
  }, [current, goToSlide])

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="banner" id="home">
      <div className="banner-track">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`banner-slide${index === current ? ' active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="banner-overlay" />
            <div className="banner-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="banner-arrow banner-arrow--left" onClick={prevSlide} aria-label="Anterior">
        &#10094;
      </button>
      <button className="banner-arrow banner-arrow--right" onClick={nextSlide} aria-label="Próximo">
        &#10095;
      </button>

      <div className="banner-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`banner-dot${index === current ? ' active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Banner
