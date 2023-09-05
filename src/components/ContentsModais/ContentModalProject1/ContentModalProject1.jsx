import "./styles.css"
import { Button } from './../../Button/Button';

export function ContentModalProject1() {

    const websiteLink = () => {
        const link = 'http://gerador-senhas.rf.gd/'
        window.open(link, '_blank')
    }

    return (
        <div className="container-contect-modal-project1">
            <div>
                <h3 className="title-modal">Gerador de senhas em PHP</h3>
                <p className="content-modal">Esse site tem o intuito de oferecer senhas conforme a decisão do usuário, gerando aleatoriamente uma senha e havendo a possibilidade do usuário copiar e usar onde quiser.</p>
            </div>
            <div className="container-features">
                <h4>Funcionalidades do site</h4>
                <p>Através das escolhas no checkboxs e do input o usuário pode gerar a senha.</p>
                <p>Com o botão &ldquo;Copiar&rdquo; pode copiar a senha e usar onde quiser.</p>
            </div>
            <div>
                <Button onClick={websiteLink}>Acessar projeto</Button>
            </div>
        </div>
    )
}