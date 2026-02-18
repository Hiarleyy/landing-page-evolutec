import { useState } from 'react'
import { Search, Clock, BookOpen } from 'lucide-react';
import './Cursos.css'

const categorias = ['Todos', 'Tecnologia', 'Comércio', 'Técnicos', 'Saúde']

const cursos = [
  {
    id: 1,
    nome: 'Técnico em Operador de Caixa',
    categoria: 'Comércio',
    modalidade: 'EAD',
    tag: 'comercial',
    tagColor: '#e63946',
    imagem: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop',
    duracao: '6 meses',
    cargaHoraria: '160h',
  },
  {
    id: 2,
    nome: 'Conectividade e Tecnologia',
    categoria: 'Tecnologia',
    modalidade: 'EAD',
    tag: 'tecnologia',
    tagColor: '#e63946',
    imagem: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop',
    duracao: '8 meses',
    cargaHoraria: '200h',
  },
  {
    id: 3,
    nome: 'Técnico em Enfermagem',
    categoria: 'Saúde',
    modalidade: 'EAD',
    tag: 'Saúde',
    tagColor: '#e63946',
    imagem: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    duracao: '18 meses',
    cargaHoraria: '1200h',
  },
  {
    id: 4,
    nome: 'Técnico em Hotelaria e Turismo',
    categoria: 'Comércio',
    modalidade: 'EAD',
    tag: 'comercial',
    tagColor: '#e63946',
    imagem: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=400&fit=crop',
    duracao: '12 meses',
    cargaHoraria: '800h',
  },
  {
    id: 5,
    nome: 'Profissional em Vendas',
    categoria: 'Comércio',
    modalidade: 'EAD',
    tag: 'Comercial',
    tagColor: '#e63946',
    imagem: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop',
    duracao: '4 meses',
    cargaHoraria: '120h',
  },
  {
    id: 6,
    nome: 'Atendente de Farmácia',
    categoria: 'Saúde',
    modalidade: 'EAD',
    tag: 'Saúde',
    tagColor: '#e63946',
    imagem: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=400&fit=crop',
    duracao: '6 meses',
    cargaHoraria: '160h',
  },
  {
    id: 7,
    nome: 'Auxiliar Administrativo',
    categoria: 'Comércio',
    modalidade: 'EAD',
    tag: 'Administrativo',
    tagColor: '#e63946',
    imagem: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop',
    duracao: '5 meses',
    cargaHoraria: '140h',
  },
  {
    id: 8,
    nome: 'Cuidador de Idosos',
    categoria: 'Saúde',
    modalidade: 'Presencial',
    tag: 'Saúde',
    tagColor: '#e63946',
    imagem: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=400&fit=crop',
    duracao: '10 meses',
    cargaHoraria: '220h',
  },
  {
    id: 9,
    nome: 'Design Gráfico',
    categoria: 'Tecnologia',
    modalidade: 'EAD',
    tag: 'Criativo',
    tagColor: '#e63946',
    imagem: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?w=400&h=400&fit=crop',
    duracao: '12 meses',
    cargaHoraria: '300h',
  },
  {
    id: 10,
    nome: 'Operador de Empilhadeira',
    categoria: 'Técnicos',
    modalidade: 'Presencial',
    tag: 'Logística',
    tagColor: '#e63946',
    imagem: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
    duracao: '3 meses',
    cargaHoraria: '80h',
  },
  {
    id: 11,
    nome: 'Inglês Profissional',
    categoria: 'Comércio',
    modalidade: 'EAD',
    tag: 'Idiomas',
    tagColor: '#e63946',
    imagem: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=400&fit=crop',
    duracao: '18 meses',
    cargaHoraria: '180h',
  },
  {
    id: 12,
    nome: 'Eletricista Instalador',
    categoria: 'Técnicos',
    modalidade: 'Presencial',
    tag: 'Industrial',
    tagColor: '#e63946',
    imagem: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop',
    duracao: '6 meses',
    cargaHoraria: '200h',
  },
]

function Cursos() {
  const [filtro, setFiltro] = useState('Todos')
  const [busca, setBusca] = useState('')

  const cursosFiltrados = cursos.filter((curso) => {
    const matchCategoria = filtro === 'Todos' || curso.categoria === filtro
    const matchBusca = curso.nome.toLowerCase().includes(busca.toLowerCase())
    return matchCategoria && matchBusca
  })

  return (
    <section className="cursos" id="cursos">
      {/* Barra de busca */}
      <div className="cursos-busca">
        <span className="busca-icon">
        <Search />
        </span>
        <input
          type="text"
          placeholder="Busque seu curso de interesse ..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {/* Filtros de categoria */}
      <div className="cursos-filtros">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`filtro-btn${filtro === cat ? ' active' : ''}`}
            onClick={() => setFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de cursos */}
      <div className="cursos-grid">
        {cursosFiltrados.map((curso) => (
          <div key={curso.id} className="curso-card">
            
            {/* Seção da Imagem (Topo) */}
            <div className="curso-img-container">
              <span className="curso-badge-overlay">
                <span className="badge-dot"></span> {curso.modalidade}
              </span>
              <img src={curso.imagem} alt={curso.nome} className="curso-img" />
            </div>
            
            {/* Corpo do Card */}
            <div className="curso-content">
              <h3 className="curso-nome">{curso.nome}</h3>
              <p className="curso-categoria-text">
                Curso profissionalizante em {curso.categoria}
              </p>
              
              <div className="curso-divider"></div>

              <div className="curso-meta-row">
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{curso.duracao}</span>
                </div>
                <div className="meta-divider"></div>
                <div className="meta-item">
                  <BookOpen size={16} />
                  <span>{curso.cargaHoraria}</span>
                </div>
                <div className="meta-divider"></div>
                <div className="meta-item">
                  <span>Certificado</span>
                </div>
              </div>

              <div className="curso-tags-row">
                <span className="curso-pill">{curso.tag}</span>
                <span className="curso-pill">Presencial/EAD</span>
              </div>

              <button className="curso-btn-action">
                Ver detalhes
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Cursos
