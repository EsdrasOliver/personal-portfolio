import "./styles.css"
import { Tools } from "../../components/Tools/Tools"
import { Networks } from "../../components/Networks/Networks"

export function Skills() {
    
    return (
        <section className="container-skills" id="skills">
            <div className="container-content-skills">
                <h2>Habilidades</h2>
                <Tools></Tools>
            </div>
            <footer>
                <div className="container-footer-text">
                    <p>Feito por <span>Esdras Oliveira</span></p>
                    <p>Programador</p>
                </div>
                <div className="networks-footer">
                    <Networks></Networks>
                </div>
            </footer>
        </section>
    )
}