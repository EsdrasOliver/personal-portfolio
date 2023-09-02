import Profile from "../../assets/img/profile.svg"

import "./styles.css"
import { Networks } from "../../components/Networks/Networks"

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
                <Networks></Networks>
            </div>
        </section>
    )
}