import './App.scss'
import { Header } from './components/header/Header'

function App() {

  return (
    <main className="container">
      <Header />

      <div className="experience">
        <h3>Experiencia</h3>
        <p>texto de paragrafo</p>
        <div className="experienceTime">
        </div>
      </div>

      <div className="infos">
        <h3>Línguas</h3>
        <div className="languages-info">
          <span>🇧🇷 PT-BR - Falante Nativo</span>
          <span>🇺🇸 EN - A2</span>
        </div>
        <h3>Educação</h3>
        <div className="education-info">
          <span>🎓</span>
          <span>Análise e Desenvolvimento de Sistemas - Descomplica Faculdade Digital</span>
        </div>
      </div>

      <div className="contacts">
        <div className="social">

        </div>
        <button>Entre em contato</button>
      </div>
    </main>
  )
}

export default App
