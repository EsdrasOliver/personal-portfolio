import Github from "../../assets/icon/github.svg"
import Linkedin from "../../assets/icon/linkedin.svg"
import Instagram from "../../assets/icon/instagram.svg"
import Profile from "../../assets/img/profile.svg"

import "./styles.css"

export function Home() {
    return (
        <section className="container" id="home">
            <div className="container-content-photo">
                <div className="container-title-content">   
                    <p>Oi, meu nome é Esdras Oliveira</p>
                    <h2 className="title">Desenvolvedor Front End</h2>
                    <span className="content">Admirador do mundo da tecnologia e profissional na área.</span>
                </div>
                <div className="container-photo">
                    <img src={Profile} alt="Foto de perfil" />
                </div>
            </div>
            <div className="networks-navigation">
                <a href="https://github.com/EsdrasOliver" target="_blank" rel='noreferrer'>
                    <img src={Github} alt="Icone do GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/esdras-oliveira-446b261a3/" target="_blank" rel='noreferrer'>
                    <img src={Linkedin} alt="Icone do Linkedin" />
                </a>
                <a href="https://www.instagram.com/esdras_odj/" target="_blank" rel='noreferrer'>
                    <img src={Instagram} alt="Icone do Instagram" />
                </a>
            </div>
        </section>
    )
}