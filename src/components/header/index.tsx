import './styles.scss'

import meImg from '../../assets/me.png';
export function Header() {
    return(
        <div className="header">
            <div>
                <h1>Olá, sou a Daya 👋</h1>
                <h2>Front-end Developer</h2>
            </div>
            <img 
                src={meImg} alt="Foto de Dayane Santos, desenvolvedora Front-end. 
                Uma mulher branca de 22 anos, com cabelo cacheado solto, sorrindo e olhando para a camera" 
                width={280}
            />
        </div>
    )
}