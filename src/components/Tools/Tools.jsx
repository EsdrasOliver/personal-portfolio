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

export function Tools() {
    return (
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
    )
}