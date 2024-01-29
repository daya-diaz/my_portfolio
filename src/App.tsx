import './App.scss'
import { Contact } from './components/contact'
import { Experience } from './components/experience'
import { Header } from './components/header'
import { Information } from './components/information'

function App() {

  return (
    <main className="container">
      <Header />
      <Experience />
      <Information />
      <Contact />
      
    </main>
  )
}

export default App
