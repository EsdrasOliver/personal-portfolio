import { useState } from "react"
import "./styles.css"

import { ModalProject1 } from "../../components/Modais/ModalProject1/ModalProject1.modal.jsx"
import { Button } from './../../components/Button/Button';

export function Projects() {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const handleClick = () => {
        console.log('botao clicou')
    }

    return (
        /* EM DESENVOLVIMENTO */
        <section className="container-projects" id="projects">
            <div className="content-projects">
                <h2>Projetos</h2>
                <div className="projects">
                    <div className="box" onClick={() => openModal()}>
                        <div className="project" id="project1">
                            <div className="details">
                                <p>Gerador de senhas em PHP</p>
                            </div>
                            
                        </div>
                        <div className="container-view-more">
                            <p>Gerador de senhas em PHP</p>
                            <Button onClick={handleClick}>Ver mais</Button>
                        </div>
                    </div>
                    {showModal && <ModalProject1 onClose={closeModal}></ModalProject1>}

                    <div className="box">
                        <div className="project" id="project2">
                            <div className="details">
                                <p>Conversor de moedas</p>
                            </div>
                            
                        </div>
                        <div className="container-view-more">
                            <p>Conversor de moedas</p>
                            <Button onClick={handleClick}>Ver mais</Button>
                        </div>
                    </div>

                    <div className="box">
                        <div className="project" id="project3">
                            <div className="details">
                                <p>Lista de tarefas</p>
                            </div>
                            
                        </div>
                        <div className="container-view-more">
                            <p>Lista de tarefas</p>
                            <Button onClick={handleClick}>Ver mais</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}