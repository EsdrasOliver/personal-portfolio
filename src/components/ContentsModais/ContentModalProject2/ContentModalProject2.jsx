import "./styles.modules.css"
import { Button } from './../../Button/Button';

export function ContentModalProject2() {

    const websiteLink = () => {
        const link = 'https://conversor-moedas-esdras.vercel.app/'
        window.open(link, '_blank')
    }

    const sourceGithubLink = () => {
        const link = 'https://github.com/EsdrasOliver/conversor-moedas'
        window.open(link, '_blank')
    }

    return (
        <div className="container-contect-modal-project2">
            <div className="container-content-main">
                <h3 className="title-modal">Conversor de moedas</h3>
                <p className="content-modal">O site mostra como está a cotação da moeda real em relação ao Dolar americano, Euro e Bitcoin.</p>
            </div>
            <div className="container-features">
                <h4>Funcionalidades do site</h4>
                <p>- No input digita o valor que seja converter.</p>
                <p>- No select serve para escolha para qual moeda (Dolar americano, Euro ou Bitcoin), você deseja ver a cotação</p>
                <p>- E no final verifica o resultado que você escolheu.</p>
            </div>
            <div className="container-link-buttons">
                <Button onClick={sourceGithubLink}>Código GitHub</Button>
                <Button onClick={websiteLink}>Acessar projeto</Button>
            </div>
        </div>
    )
}