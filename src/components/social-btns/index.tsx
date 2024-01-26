import './styles.scss'
import { InstagramIcon } from '../icons/instagram-icon'
import { LinkedinIcon } from '../icons/linkedin-icon'
import { GithubIcon } from '../icons/github-icon'

export default function SocialBtns (){
    return(
        <div className="social">
            <a target='_blank' href="https://github.com/daya-diaz">
                <GithubIcon />
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/dayane-santos-melo/">
                <LinkedinIcon />
            </a>
            <a target='_blank' href="https://www.instagram.com/_daydmelo/">
                <InstagramIcon />
            </a>
        </div>
    )
}