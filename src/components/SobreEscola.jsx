import './SobreEscola.css'

function SobreEscola() {
  return (
    <section className="sobre-escola" id="sobre">
      <div className="sobre-escola-container">
        <div className="sobre-escola-texto">
          <h2 className="sobre-escola-titulo">Sobre a Escola:</h2>
          <p>
            A Evolutec consolidou-se como uma referência no ensino
            profissionalizante no <strong>Pará</strong>, focando em transformar o
            futuro de jovens e adultos através da qualificação técnica. Com uma
            estrutura voltada para o mercado de trabalho, a instituição expandiu
            sua atuação para 8 cidades estratégicas:{' '}
            <span className="sobre-escola-destaque">
              Curuçá, Castanhal, Igarapé-Açu, Maracanã, Marapanim, São Miguel
              do Guamá, São Domingos do Capim e Irituia
            </span>
            .
          </p>
        </div>
        <div className="sobre-escola-visual">
          <div className="sobre-escola-mapa">
           <img src="/mapa-pará-escola.png" alt="" className='mapa-pará-escola' />
          </div>
        </div>
      </div>
      <div className="sobre-escola-seta">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}

export default SobreEscola
