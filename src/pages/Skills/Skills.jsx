import Github from "../../assets/icon/github.svg"
import Linkedin from "../../assets/icon/linkedin.svg"
/* import Instagram from "../../assets/icon/instagram.svg" */
import Curriculum from "../../assets/icon/file.svg"

import HTML from "../../assets/icon/languages/html5.svg"
import CSS from "../../assets/icon/languages/css3.svg"
import Figma from "../../assets/icon/languages/figma.svg"
import github from "../../assets/icon/languages/github.svg"
import JavaScript from "../../assets/icon/languages/javascript.svg"
import Node from "../../assets/icon/languages/node.svg"
import React from "../../assets/icon/languages/react.svg"
import Tailwind from "../../assets/icon/languages/tailwind-css.svg"
import Typescript from "../../assets/icon/languages/typescript.svg"

import "./styles.css"

export function Skills() {
    return (
        <section className="container-skills" id="skills">
            <div className="container-content-skills">
                <h2>Habilidades</h2>
                <div className="container-tools">

                    <div className="tools">
                        <div className="tool">
                            <img src={HTML} alt="Icone do HTML5" />
                            <span>HTML</span>
                        </div>
                        <div className="tool">
                            <img src={CSS} alt="Icone do HTML5" />
                            <span>CSS</span>
                        </div>
                        <div className="tool">
                            <img src={JavaScript} alt="Icone do HTML5" />
                            <span>JavaScript</span>
                        </div>
                        <div className="tool">
                            <img src={React} alt="Icone do HTML5" />
                            <span>React</span>
                        </div>
                        <div className="tool">
                            <img src={Typescript} alt="Icone do HTML5" />
                            <span>TypeScript</span>
                        </div>
                        <div className="tool">
                            <img src={Tailwind} alt="Icone do HTML5" />
                            <span>TailwindCSS</span>
                        </div>
                        <div className="tool">
                            <img src={github} alt="Icone do HTML5" />
                            <span>GitHub</span>
                        </div>
                        <div className="tool">
                            <img src={Figma} alt="Icone do HTML5" />
                            <span>Figma</span>
                        </div>
                        <div className="tool">
                            <img src={Node} alt="Icone do HTML5" />
                            <span>Node</span>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container-footer-text">
                    <p>Feito por <span>Esdras Oliveira</span></p>
                    <p>Programador</p>
                </div>
                <div className="networks-footer">
                    <a href="https://github.com/EsdrasOliver" target="_blank" rel='noreferrer'>
                        <img src={Github} alt="Icone do GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/esdras-oliveira-446b261a3/" target="_blank" rel='noreferrer'>
                        <img src={Linkedin} alt="Icone do Linkedin" />
                    </a>
                    <a href="#" target="_blank" rel='noreferrer'>
                        <img src={Curriculum} alt="Icone de arquivo" />
                    </a>
                </div>
            </footer>
        </section>
    )
}