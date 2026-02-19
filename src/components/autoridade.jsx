import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Award, Briefcase } from 'lucide-react';
import './autoridade.css';

const carouselImages = [
  '/formatura.jpeg',
  '/formatura2.jpeg',
  '/formatura3.jpeg',
  '/formatura4.jpeg',
  '/formatura5.jpeg',
  '/formatura6.jpeg'
];

const AuthorityStats = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // 4 segundos por slide

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="authority-section">
      <div className="top-stats-bar">
        <div className="top-stat">
          <span className="top-stat-number">+5k</span>
          <span className="top-stat-label">Alunos Formados</span>
        </div>
        <div className="top-stat-divider"></div>
        <div className="top-stat">
          <span className="top-stat-number">15+</span>
          <span className="top-stat-label">Anos de História</span>
        </div>
        <div className="top-stat-divider"></div>
        <div className="top-stat">
          <span className="top-stat-number">4</span>
          <span className="top-stat-label">Unidades Físicas</span>
        </div>
        <div className="top-stat-divider"></div>
        <div className="top-stat">
          <span className="top-stat-number">98%</span>
          <span className="top-stat-label">Satisfação</span>
        </div>
      </div>

      <div className="authority-container">
        
        {/* Lado Esquerdo - Informações */}
        <div className="authority-content">
          <div className="badge">
            <GraduationCap size={16} /> Sucesso Comprovado
          </div>
          <h2 className="authority-title">
            Milhares de Alunos <br />
            <span className="text-highlight">Prontos para o Mercado</span>
          </h2>
          <p className="authority-description">
            Na Evolutec, a formatura é apenas o começo. Nossos alunos saem preparados com conhecimentos práticos e certificados reconhecidos, prontos para transformar suas carreiras e alcançar novos objetivos profissionais.
          </p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon-box">
                <Award size={24} />
              </div>
              <div>
                <h4 className="stat-value">100%</h4>
                <p className="stat-label">Certificado Reconhecido</p>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon-box">
                <Briefcase size={24} />
              </div>
              <div>
                <h4 className="stat-value">85%</h4>
                <p className="stat-label">Empregabilidade</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Carrossel */}
        <div className="authority-carousel-wrapper">
          <div className="carousel-frame">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselImages.map((img, index) => (
                <div key={index} className="carousel-slide">
                  <img src={img} alt={`Formatura Evolutec ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
            
            <button className="carousel-btn prev" onClick={prevSlide} aria-label="Anterior">
              <ChevronLeft size={24} />
            </button>
            <button className="carousel-btn next" onClick={nextSlide} aria-label="Próximo">
              <ChevronRight size={24} />
            </button>
            
            <div className="carousel-indicators">
              {carouselImages.map((_, index) => (
                <button 
                  key={index} 
                  className={`indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Elemento decorativo */}
          <div className="carousel-decoration"></div>
        </div>

      </div>
    </section>
  );
};

export default AuthorityStats;