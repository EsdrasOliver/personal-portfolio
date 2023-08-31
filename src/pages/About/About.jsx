import react from "../../assets/icon/languages/react.svg"
import typescript from "../../assets/icon/languages/typescript.svg"
import node from "../../assets/icon/languages/node.svg"

import "./styles.css"

export function About() {
    return (
        <section className="container-about" id="about">
            <div className="container-content-about">
                <p>Desenvolvedor Front end com experiência em <span>React</span>, <span>Typescript</span>, <span>Styled Components</span>, <span>TaiwindCSS</span> e consumo de APIs. Comecei na programação na faculdade de Sistema de informação pelo IFBA e estudo de forma autodidata desenvolvimento web, criando APIs com Node, express, nodemon, PostgreSQL e produzindo interfaces atraentes e reutilizáveis no front end junto com designs criados no Figma.</p>
            </div>
            <div className="container-language-image">
                <div className="container-image-top">
                    <img src={react} alt="Imagem do react.js" />
                    <img src={typescript} alt="Imagem do Typescript" />
                </div>
                <div className="container-image-bottom">
                    <img src={node} alt="Imagem do Node" />
                </div>
            </div>
        </section>
    )
}