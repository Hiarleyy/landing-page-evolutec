import { useState } from 'react'
import { Search } from 'lucide-react';
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
    imagem: '/operador-de-caixa.png',
  },
  {
    id: 2,
    nome: 'Conectividade e Tecnologia',
    categoria: 'Tecnologia',
    modalidade: 'EAD',
    tag: 'tecnologia',
    tagColor: '#e63946',
    imagem: 'conectividade-e-tecnologia.png',
  },
  {
    id: 3,
    nome: 'Técnico em Enfermagem',
    categoria: 'Saúde',
    modalidade: 'EAD',
    tag: 'Saúde',
    tagColor: '#e63946',
    imagem: 'tecnico-de-enfermagem.png',
  },
  {
    id: 4,
    nome: 'Técnico em Hotelaria e Turismo',
    categoria: 'Comércio',
    modalidade: 'EAD',
    tag: 'comercial',
    tagColor: '#e63946',
    imagem: '/hotelaria-e-turismo.png',
  },
  {
    id: 5,
    nome: 'Profissional em Vendas',
    categoria: 'Comércio',
    modalidade: 'EAD',
    tag: 'Comercial',
    tagColor: '#e63946',
    imagem: '/profissional-de-vendas.png',
  },
  {
    id: 6,
    nome: 'Atendente de Farmácia',
    categoria: 'Saúde',
    modalidade: 'EAD',
    tag: 'Saúde',
    tagColor: '#e63946',
    imagem: '/atendente-de-farmácia.png',
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
            <div className="curso-tags">
              <span className="curso-tag" style={{ backgroundColor: curso.tagColor }}>
                {curso.tag}
              </span>
              <span className="curso-tag" style={{ backgroundColor: curso.tagColor }}>
                {curso.modalidade}
              </span>
            </div>
            <h3 className="curso-nome">{curso.nome}</h3>
            <div className="curso-img-wrapper">
              <img src={curso.imagem} alt={curso.nome} className="curso-img" />
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Cursos
