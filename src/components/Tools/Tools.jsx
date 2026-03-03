import HTML from "../../assets/icon/languages/html5.svg"
import CSS from "../../assets/icon/languages/css3.svg"
import Figma from "../../assets/icon/languages/figma.svg"
import github from "../../assets/icon/languages/github.svg"
import JavaScript from "../../assets/icon/languages/javascript.svg"
import Node from "../../assets/icon/languages/node.svg"
import React from "../../assets/icon/languages/react.svg"
import Tailwind from "../../assets/icon/languages/tailwind-css.svg"
import Typescript from "../../assets/icon/languages/typescript.svg"
import Docker from "../../assets/icon/languages/docker.svg"
import Nest from "../../assets/icon/languages/nest-js.svg"
import Next from "../../assets/icon/languages/nextjs.svg"
import Postgresql from "../../assets/icon/languages/postgresql.svg"
import Prisma from "../../assets/icon/languages/prisma.svg"
import Git from "../../assets/icon/languages/git.svg"
import Sql from "../../assets/icon/languages/sql.svg"
import Angular from "../../assets/icon/languages/angularjs.svg"
import Jwt from "../../assets/icon/languages/jwt.svg"
import ReactNative from "../../assets/icon/languages/react-native.svg"

import "./styles.modules.css"

export function Tools() {
    return (
        <div className="container-tools">
            <div className="tools">
                <div className="tool">
                    <img src={HTML} alt="Icone do HTML5" />
                    <span>HTML</span>
                </div>
                <div className="tool">
                    <img src={CSS} alt="Icone do CSS3" />
                    <span>CSS</span>
                </div>
                <div className="tool">
                    <img src={JavaScript} alt="Icone do JavaScript" />
                    <span>JavaScript</span>
                </div>
                <div className="tool">
                    <img src={React} alt="Icone do ReactJS" />
                    <span>React</span>
                </div>
                <div className="tool">
                    <img src={Typescript} alt="Icone do Typescript" />
                    <span>TypeScript</span>
                </div>
                <div className="tool">
                    <img src={Tailwind} alt="Icone do Tailwindcss" />
                    <span>TailwindCSS</span>
                </div>
                <div className="tool">
                    <img src={github} alt="Icone do GitHub" />
                    <span>GitHub</span>
                </div>
                <div className="tool">
                    <img src={Figma} alt="Icone do Figma" />
                    <span>Figma</span>
                </div>
                <div className="tool">
                    <img src={Node} alt="Icone do NodeJS" />
                    <span>Node</span>
                </div>
                <div className="tool">
                    <img src={Docker} alt="Icone do Docker" />
                    <span>Docker</span>
                </div>
                <div className="tool">
                    <img src={Nest} alt="Icone do Nest" />
                    <span>Nest</span>
                </div>
                <div className="tool">
                    <img src={Next} alt="Icone do Next" />
                    <span>Next</span>
                </div>
                <div className="tool">
                    <img src={Postgresql} alt="Icone do Postgresql" />
                    <span>Postgresql</span>
                </div>
                <div className="tool">
                    <img src={Prisma} alt="Icone do Prisma" />
                    <span>Prisma</span>
                </div>
                <div className="tool">
                    <img src={Git} alt="Icone do Git" />
                    <span>Git</span>
                </div>
                <div className="tool">
                    <img src={Sql} alt="Icone do SQL" />
                    <span>SQL</span>
                </div>
                <div className="tool">
                    <img src={Angular} alt="Icone do Angular" />
                    <span>Angular</span>
                </div>
                <div className="tool">
                    <img src={Jwt} alt="Icone do Jwt" />
                    <span>Jwt</span>
                </div>
                <div className="tool">
                    <img src={ReactNative} alt="Icone do ReactNative" />
                    <span>ReactNative</span>
                </div>
            </div>
        </div>
    )
}