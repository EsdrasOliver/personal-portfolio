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
                        <p>
                            Possuo sólida atuação no ecossistema <span>JavaScript/TypeScript</span>, desenvolvendo aplicações web completas utilizando <span>Angular, React e Next.js no Front-End</span>, com foco em componentização, reutilização de código e boas práticas de arquitetura.<br/>

                            No back-end, tenho experiência no desenvolvimento de APIs robustas e escaláveis utilizando <span>Node.js e NestJS</span>, além de trabalhar com <span>Docker</span> para conteinerização e <span>PostgreSQL com Prisma ORM</span> para modelagem e persistência de dados.<br/>

                            Tenho vivência na integração entre Front-End e Back-End, garantindo comunicação eficiente com APIs REST, além de contribuir com melhorias contínuas em sistemas, correção de bugs e evolução de funcionalidades.
                        </p>
                        <div>
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