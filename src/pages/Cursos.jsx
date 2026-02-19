import React from 'react';
import './Cursos.css';

// Ícones SVG simples para não depender de bibliotecas externas
const ClockIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const BookIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);

const CourseCard = ({ 
  title, 
  category, 
  image, 
  mode = "EAD", // Padrão EAD
  duration, 
  hours, 
  tag,
  onDetailClick 
}) => {
  return (
    <div className="card-container">
      {/* Imagem e Badge */}
      <div className="image-wrapper">
        <div className="badge">
          <span className="badge-dot"></span>
          {mode}
        </div>
        <img src={image} alt={title} className="card-image" />
      </div>

      {/* Conteúdo */}
      <div className="card-content">
        <span className="category">{category}</span>
        <h3 className="card-title">{title}</h3>

        {/* Info Meta: Tempo e Horas */}
        <div className="meta-info">
          <div className="meta-item">
            <ClockIcon />
            <span>{duration}</span>
          </div>
          <div className="meta-item">
            <BookIcon />
            <span>{hours}</span>
          </div>
        </div>

        {/* Footer: Tag e Botão */}
        <div className="card-footer">
          <span className="tag">{tag}</span>
          <button className="btn-details" onClick={onDetailClick}>
            Ver detalhes <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

// Dados dos cursos
const cursosData = [
  {
    id: 1,
    title: "Administração",
    category: "GESTÃO",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    mode: "EAD",
    duration: "2 anos",
    hours: "1600h",
    tag: "Graduação"
  },
  {
    id: 2,
    title: "Enfermagem",
    category: "SAÚDE",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    mode: "Presencial",
    duration: "4 anos",
    hours: "4000h",
    tag: "Graduação"
  },
  {
    id: 3,
    title: "Técnico em Informática",
    category: "TECNOLOGIA",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    mode: "EAD",
    duration: "18 meses",
    hours: "1200h",
    tag: "Técnico"
  },
  {
    id: 4,
    title: "Marketing Digital",
    category: "MARKETING",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    mode: "EAD",
    duration: "6 meses",
    hours: "200h",
    tag: "Curso Livre"
  },
  {
    id: 5,
    title: "Segurança do Trabalho",
    category: "SEGURANÇA",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    mode: "Presencial",
    duration: "2 anos",
    hours: "1500h",
    tag: "Técnico"
  },
  {
    id: 6,
    title: "Design Gráfico",
    category: "DESIGN",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    mode: "EAD",
    duration: "1 ano",
    hours: "800h",
    tag: "Profissionalizante"
  }
];

function Cursos() {
  const handleDetailClick = (cursoId) => {
    console.log(`Ver detalhes do curso ${cursoId}`);
    // Aqui você pode adicionar navegação ou modal com mais detalhes
  };

  return (
    <section className="cursos-section" id="cursos">
      <div className="cursos-container">
        <div className="cursos-header">
          <h2 className="cursos-titulo">Nossos Cursos</h2>
          <p className="cursos-subtitulo">
            Encontre o curso ideal para sua carreira profissional
          </p>
        </div>
        
        <div className="cursos-grid">
          {cursosData.map((curso) => (
            <CourseCard
              key={curso.id}
              title={curso.title}
              category={curso.category}
              image={curso.image}
              mode={curso.mode}
              duration={curso.duration}
              hours={curso.hours}
              tag={curso.tag}
              onDetailClick={() => handleDetailClick(curso.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cursos;