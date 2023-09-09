import Github from "../../assets/icon/github.svg"
import Linkedin from "../../assets/icon/linkedin.svg"
import Curriculum from "../../assets/icon/file.svg"

import "./styles.modules.css"

export function Networks() {
    return (
        <div>
            <a href="https://github.com/EsdrasOliver" target="_blank" rel='noreferrer'>
                <img src={Github} alt="Icone do GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/esdras-oliveira-446b261a3/" target="_blank" rel='noreferrer'>
                <img src={Linkedin} alt="Icone do Linkedin" />
            </a>
            <a href="../../assets/doc/EsdrasOliveira.pdf" download target="_blank" rel='noreferrer'>
                <img src={Curriculum} alt="Icone de arquivo" />
            </a>
        </div>
    )
}