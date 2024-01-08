import mail from './images/mail.png'
import insta from './images/instagram.png'
import linkedIn from './images/linkedin-logo.png'
import github from './images/github.png'

export default function Footer(){
    return(
        <footer className="Footer">
            <a href='mailto:rakinabhuyan2004@gmail.com' target='_blank'>
                <img src={mail} className="icon"></img>
            </a>
            <a href='https://www.instagram.com/rakin_ab/' target='_blank'>
                <img src={insta} className="icon"></img>
            </a>
            <a href='https://www.linkedin.com/in/rakin-bhuyan-3a7b65241' target='_blank'>
                <img src={linkedIn} className="icon"></img>
            </a>
            <a href='https://github.com/RakinAB' target='_blank'>
                <img src={github} className="icon"></img>
            </a>


        </footer>
    )
}