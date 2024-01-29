import './styles.scss';
import SocialBtn from '../social-btns'  
import { WhatsappIcon } from '../icons/whatsapp-icon'
export function Contact() {
    return (
        <div className="contacts">
            <SocialBtn />
            <a className='btn-primary' target='_blank' href='https://wa.me/81998595825'>
                Entre em contato
                <WhatsappIcon />
            </a>
        </div>
    )
}