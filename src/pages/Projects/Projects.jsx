import { useState } from "react"
import "./styles.modules.css"

import { Modal } from "../../components/Modal/Modal"
import { ContentModalProject1 } from './../../components/ContentsModais/ContentModalProject1/ContentModalProject1';
import { ContentModalProject2 } from './../../components/ContentsModais/ContentModalProject2/ContentModalProject2';
import { ContentModalProject3 } from './../../components/ContentsModais/ContentModalProject3/ContentModalProject3';

export function Projects() {

    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false) 
    const [showModal3, setShowModal3] = useState(false) 
    
    const openModal1 = () => setShowModal1(true)
    const closeModal1 = () => setShowModal1(false)

    const openModal2 = () => setShowModal2(true)
    const closeModal2 = () => setShowModal2(false)

    const openModal3 = () => setShowModal3(true)
    const closeModal3 = () => setShowModal3(false)

    return (
        <section className="container-projects" id="projects">
            <div className="content-projects">
                <h2>Projetos</h2>
                <div className="projects">
                    <div className="box" onClick={openModal1}>
                        <div className="project" id="project1">
                            <div className="details">
                                <p>Gerador de senhas em PHP</p>
                            </div>
                        </div>
                        <div className="container-view-more">
                            <p>Gerador de senhas em PHP</p>
                            <p>Agosto, 2023</p>
                        </div>
                    </div>
                    {showModal1 && (
                        <Modal onClose={closeModal1}>
                            <ContentModalProject1 />
                        </Modal>
                    )}

                    <div className="box" onClick={openModal2}>
                        <div className="project" id="project2">
                            <div className="details">
                                <p>Conversor de moedas</p>
                            </div>
                        </div>
                        <div className="container-view-more">
                            <p>Conversor de moedas</p>
                            <p>Julho, 2022</p>
                        </div>
                    </div>
                    {showModal2 && (
                        <Modal onClose={closeModal2}>
                            <ContentModalProject2 />
                        </Modal>
                    )}

                    <div className="box" onClick={openModal3}>
                        <div className="project" id="project3">
                            <div className="details">
                                <p>Lista de tarefas</p>
                            </div>
                        </div>
                        <div className="container-view-more">
                            <p>Lista de tarefas</p>
                            <p>Junho, 2023</p>
                        </div>
                    </div>
                    {showModal3 && (
                        <Modal onClose={closeModal3}>
                            <ContentModalProject3 />
                        </Modal>
                    )}
                </div>
            </div>
        </section>
    )
}