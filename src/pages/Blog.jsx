import './Blog.css'

const destaque = {
  imagem: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop',
  tags: ['OPORTUNIDADE', '#NOTÍCIAS'],
  titulo: 'Rede de ensino anúncia vagas para mais de 100 cursos profissionalizantes em 2026',
  subtitulo: 'Condições facilitadas para quem decide começar uma nova profissão.',
  link: '#',
}

const noticias = [
  {
    id: 1,
    imagem: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300&h=200&fit=crop',
    data: '28/01/2026',
    titulo: 'Aniversario de Castanhal',
    link: '#',
  },
  {
    id: 2,
    imagem: '/public/BANNER.webp',
    data: '28/01/2026',
    titulo: 'Formatura evolutec setembro',
    link: '#',
  },
  {
    id: 3,
    imagem: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
    data: '28/01/2026',
    titulo: 'Dicas de currículo nota 10',
    link: '#',
  },
]

function Blog() {
  return (
    <section className="blog" id="conteudos">
      {/* Header */}
      <div className="blog-header">
        <h2 className="blog-titulo">Blog Evolutec</h2>
        <a href="#" className="blog-ver-mais">
          Ver mais notícias <span>&rarr;</span>
        </a>
      </div>

      <div className="blog-grid">
        {/* Card destaque (esquerda) */}
        <a href={destaque.link} className="blog-destaque">
          <img src={destaque.imagem} alt={destaque.titulo} className="blog-destaque-img" />
          <div className="blog-destaque-overlay" />
          <div className="blog-destaque-content">
            <div className="blog-destaque-tags">
              {destaque.tags.map((tag) => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
            </div>
            <h3 className="blog-destaque-titulo">{destaque.titulo}</h3>
            <p className="blog-destaque-subtitulo">{destaque.subtitulo}</p>
          </div>
        </a>

        {/* Cards laterais (direita) */}
        <div className="blog-lateral">
          {noticias.map((noticia) => (
            <a key={noticia.id} href={noticia.link} className="blog-card">
              <div className="blog-card-img-wrapper">
                <img src={noticia.imagem} alt={noticia.titulo} className="blog-card-img" />
              </div>
              <div className="blog-card-info">
                <span className="blog-card-data">{noticia.data}</span>
                <h4 className="blog-card-titulo">{noticia.titulo}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
