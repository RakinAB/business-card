import mail from './images/mail.png'

export default function Header(){
    return(
        <header className="header">
            <h2 className="Name">Rakin Bhuyan</h2>
            <h4>Frontend Dev/Software Engineer</h4>
            <h3>rakinbhuyan.website</h3>

          <a href='mailto:rakinabhuyan2004@gmail.com' target='_blank'>
             <button className="Email">Email</button>
          </a>

          <a href='https://www.linkedin.com/in/rakin-bhuyan-3a7b65241' target='_blank'>
            <button className="LinkedIn">LinkedIn</button>
          </a>
        </header>
    )
}