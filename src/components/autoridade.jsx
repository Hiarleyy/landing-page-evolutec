import { useState, useEffect, useRef } from 'react'
import { TrendingUp, Award, Users, Target, Briefcase, GraduationCap } from 'lucide-react'
import './autoridade.css'

// Hook personalizado para animar números
function useCountUp(end, duration = 2000, suffix = '') {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isCounting, setIsCounting] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    setIsCounting(true)
    let startTime = null
    const startValue = 0

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = t => 1 - Math.pow(1 - t, 3)
      const currentCount = Math.floor(easeOut(progress) * (end - startValue) + startValue)
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
        setIsCounting(false)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return [count, elementRef, isCounting]
}

function Autoridade() {
  // Hook para animação das estatísticas
  const [count1, ref1, isCounting1] = useCountUp(1)
  const [count2, ref2, isCounting2] = useCountUp(98)
  const [count3, ref3, isCounting3] = useCountUp(9)
  
  // Dados do Google (placeholder - pode ser substituído por dados reais)
  const googleData = {
    totalReviews: 150
  }

  // Carrossel de depoimentos
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      text: "Estudar aqui mudou minha vida. Os professores são excelentes e o curso técnico me preparou perfeitamente para o mercado de trabalho.",
      name: "Ana Silva",
      course: "Técnico em Enfermagem"
    },
    {
      text: "A infraestrutura é completa e o ensino é de qualidade. Consegui meu primeiro emprego antes mesmo de concluir o curso.",
      name: "Carlos Santos",
      course: "Técnico em Informática"
    },
    {
      text: "Melhor decisão que tomei! O suporte dos professores e a estrutura das aulas práticas são incríveis.",
      name: "Maria Oliveira",
      course: "Técnico em Administração"
    },
    {
      text: "O curso superou minhas expectativas. Material didático excelente e professores sempre dispostos a ajudar.",
      name: "João Pedro",
      course: "Técnico em Segurança do Trabalho"
    },
    {
      text: "Consegui me recolocar no mercado após fazer o curso. A formação prática foi fundamental para minha aprovação.",
      name: "Patricia Lima",
      course: "Técnico em Radiologia"
    },
    {
      text: "Ambiente acolhedor e ensino de qualidade. Me senti preparada desde o primeiro dia de estágio.",
      name: "Rafael Costa",
      course: "Técnico em Farmácia"
    },
    {
      text: "A metodologia de ensino é diferenciada. Saí do curso pronta para enfrentar o mercado de trabalho.",
      name: "Juliana Souza",
      course: "Técnico em Contabilidade"
    },
    {
      text: "Professores qualificados e infraestrutura moderna. Recomendo para quem busca uma formação sólida.",
      name: "Fernando Alves",
      course: "Técnico em Edificações"
    },
    {
      text: "Investimento que valeu cada centavo! Hoje tenho uma carreira estável graças ao curso.",
      name: "Beatriz Mendes",
      course: "Técnico em Recursos Humanos"
    }
  ]

  // Agrupar depoimentos em slides de 3
  const itemsPerSlide = 3
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide)

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000) // Muda a cada 5 segundos

    return () => clearInterval(interval)
  }, [totalSlides])
  
  return (
    <section className="autoridade" id="sobre">
      {/* Hero Section */}
        <div className="autoridade-hero-content">
          <h1 className="autoridade-main-title">
            Transformando vidas através da
            <span className="highlight"> educação profissional</span> de qualidade
          </h1>
          <p className="autoridade-main-description">
            Nossa missão é fornecer cursos técnicos e profissionalizantes de excelência.
            Preparamos nossos alunos para o mercado de trabalho com infraestrutura completa,
            professores qualificados e foco total na empregabilidade.
          </p>
        </div>
      {/* Estatísticas Principais */}
      <div className="autoridade-stats-main">
        <div className={`stat-main-card ${isCounting1 ? 'counting' : ''}`} ref={ref1}>
          <div className="stat-main-number">{count1}M+</div>
          <p className="stat-main-label">Alunos formados</p>
          <p className="stat-main-description">através de nossa rede de ensino</p>
        </div>
        
        <div className={`stat-main-card ${isCounting2 ? 'counting' : ''}`} ref={ref2}>
          <div className="stat-main-number">{count2}%</div>
          <p className="stat-main-label">Satisfação no Google</p>
          <p className="stat-main-description">baseado em {googleData.totalReviews} avaliações</p>
        </div>
        
        <div className={`stat-main-card ${isCounting3 ? 'counting' : ''}`} ref={ref3}>
          <div className="stat-main-number">{count3}/10</div>
          <p className="stat-main-label">Nota média</p>
          <p className="stat-main-description">avaliação dos nossos alunos</p>
        </div>
      </div>

      {/* Seção de Comentários dos Alunos */}
      <div className="autoridade-testimonials">
        <div className="testimonials-header">
          <span className="testimonials-subtitle">DEPOIMENTOS</span>
          <h2 className="testimonials-title">O que nossos alunos dizem sobre nós.</h2>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonials-wrapper" style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 0.5s ease-in-out'
          }}>
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="testimonials-slide">
                {testimonials
                  .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                  .map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                      <div className="testimonial-quote">❝❝</div>
                      <p className="testimonial-text">
                        {testimonial.text}
                      </p>
                      <div className="testimonial-footer">
                        <span className="testimonial-name">{testimonial.name}</span>
                        <span className="testimonial-course">{testimonial.course}</span>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
          
          {/* Indicadores de navegação */}
          <div className="testimonials-indicators">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ver slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Autoridade
