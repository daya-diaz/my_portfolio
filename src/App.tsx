import './App.scss'
import { Experience } from './components/experience'
import { Header } from './components/header'
import { WhatsappIcon } from './components/icons/whatsapp-icon'
import { Information } from './components/information'
import SocialBtn from './components/social-btns'

function App() {

  return (
    <main className="container">
      <Header />
      <Experience />
      <Information />
      <div className="contacts">
        <SocialBtn />
        <a className='btn-primary' target='_blank' href='https://wa.me/81998595825'>
          Entre em contato
          <WhatsappIcon />
        </a>
      </div>
    </main>
  )
}

export default App
