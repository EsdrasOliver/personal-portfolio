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
                    <p>Oi, eu sou o Esdras Oliveira</p>
                    <h2 className="title">Desenvolvedor Front End</h2>
                    <span className="content">Admirador do mundo da tecnologia e profissional na área.</span>
                </div>
                <div className="container-photo">
                    <img src={Profile} alt="" />
                </div>
            </div>
            <div className="networks-navigation">
                <a href="#">
                    <img src={Github} alt="" />
                </a>
                <a href="#">
                    <img src={Linkedin} alt="" />
                </a>
                <a href="#">
                    <img src={Instagram} alt="" />
                </a>
            </div>
        </section>
    )
}