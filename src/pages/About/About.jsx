import react from "../../assets/icon/languages/react.svg"
import typescript from "../../assets/icon/languages/typescript.svg"
import node from "../../assets/icon/languages/node.svg"

import "./styles.modules.css"
import { useRef, useState } from "react"

export function About() {

    const [emailCopied, setEmailCopied] = useState(false)
    const emailRef = useRef(null)

    const handleEmailCopy = () => {
        const email = emailRef.current.textContent
        navigator.clipboard.writeText(email)
        setEmailCopied(true)
        emailRef.current.classList.add("copied")

        setTimeout(() => {
            setEmailCopied(false)
            emailRef.current.classList.remove("copied")
        }, 2000)
    }

    return (
        <section className="container-about" id="about">
            <div className="container-main-content-about">
                <h2>Sobre</h2>
                <div className="container-content-images">
                    <div className="container-content-about">
                        <p>Desenvolvedor Front end com experiência em <span>React</span>, <span>Typescript</span>, <span>Styled Components</span>, <span>TaiwindCSS</span> e consumo de APIs. Comecei na programação na faculdade de Sistema de informação pelo IFBA e estudo de forma autodidata desenvolvimento web, criando APIs com Node, express, nodemon, PostgreSQL e produzindo interfaces atraentes e reutilizáveis no front end junto com designs criados no Figma.</p>
                        <h3>Meu Email para contato</h3>
                        <div className="EmailCopy">
                            <span ref={emailRef}>esdrasodej@gmail.com</span>
                            <button 
                                onClick={handleEmailCopy} 
                                className={emailCopied ? "copied" : ""}
                            >
                                {emailCopied ? "" : "Copiar email"}
                            </button>
                        </div>
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
                </div>
            </div>
        </section>
    )
}