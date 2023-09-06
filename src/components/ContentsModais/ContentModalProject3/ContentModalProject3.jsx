import "./styles.css"
import { Button } from './../../Button/Button';

export function ContentModalProject3() {

    const websiteLink = () => {
        const link = 'https://task-list-nu.vercel.app/'
        window.open(link, '_blank')
    }

    return (
        <div className="container-contect-modal-project3">
            <div className="container-content-main">
                <h3 className="title-modal">Lista de tarefas</h3>
                <p className="content-modal">No site você insere sua tarefa no input e logo abaixo ela aparece numa lista, você pode marcar como concluída ou excluir a tarefa e mesmo quando sair da aplicação as tarefas que não foram excluídas permanecerão da forma de como você saiu da aplicação.</p>
            </div>
            <div className="container-features">
                <h4>Funcionalidades do site</h4>
                <p>- No input digita a tarefa.</p>
                <p>- Abaixo haverá uma lista das tarefas que você digitou no input.</p>
                <p>- Poderá marcar como concluída ou excluir a tarefa.</p>
                <p>- Mesmo que você saia da aplicação, as tarefas deixadas não apagaram ou sofreram alguma alteração.</p>
            </div>
            <div>
                <Button onClick={websiteLink}>Acessar projeto</Button>
            </div>
        </div>
    )
}