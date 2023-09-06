import { useState } from "react"
import "./styles.css"

import { ModalProject1 } from "../../components/Modais/ModalProject1/ModalProject1.modal.jsx"
import { ModalProject2 } from "../../components/Modais/ModalProject2/ModalProject2.modal.jsx"

import { Button } from './../../components/Button/Button';

export function Projects() {

    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
   


    const openModal1 = () => {
        setShowModal1(true)
    }

    const closeModal1 = () => {
        setShowModal1(false)
    }

    const openModal2 = () => {
        setShowModal2(true)
    }

    const closeModal2 = () => {
        setShowModal2(false)
    }

    

    const clickProject1 = () => {
        const link = 'http://gerador-senhas.rf.gd/'
        window.open(link, '_blank')
    }

    const clickProject2 = () => {
        const link = 'https://conversor-moedas-esdras.vercel.app/'
        window.open(link, '_blank')
    }

    const clickProject3 = () => {
        const link = 'https://task-list-nu.vercel.app/'
        window.open(link, '_blank')
    }

    return (
        /* EM DESENVOLVIMENTO */
        <section className="container-projects" id="projects">
            <div className="content-projects">
                <h2>Projetos</h2>
                <div className="projects">
                    <div className="box" onClick={() => openModal1()}>
                        <div className="project" id="project1">
                            <div className="details">
                                <p>Gerador de senhas em PHP</p>
                            </div>
                        </div>
                        <div className="container-view-more">
                            <p>Gerador de senhas em PHP</p>
                            <Button onClick={clickProject1}>Ver mais</Button>
                        </div>
                    </div>
                    {showModal1 && <ModalProject1 onClose={closeModal1}></ModalProject1>}

                    <div className="box" onClick={() => openModal2()}>
                        <div className="project" id="project2">
                            <div className="details">
                                <p>Conversor de moedas</p>
                            </div>
                            
                        </div>
                        <div className="container-view-more">
                            <p>Conversor de moedas</p>
                            <Button onClick={clickProject2}>Ver mais</Button>
                        </div>
                    </div>
                    {showModal2 && <ModalProject2 onClose={closeModal2}></ModalProject2>}

                    <div className="box">
                        <div className="project" id="project3">
                            <div className="details">
                                <p>Lista de tarefas</p>
                            </div>
                            
                        </div>
                        <div className="container-view-more">
                            <p>Lista de tarefas</p>
                            <Button onClick={clickProject3}>Ver mais</Button>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    )
}