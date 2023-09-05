import "./styles.css"

import { ContentModalProject1 } from './../../ContentsModais/ContentModalProject1/ContentModalProject1';
import { ButtonClose } from "../../ButtonClose/ButtonClose";

export function ModalProject1(props) {
    return (
        <div className="modal">
            <div className="container-modal">
                <div className="container-button-close">
                    <ButtonClose onClose={props.onClose}></ButtonClose>
                </div>
                <ContentModalProject1></ContentModalProject1>
            </div>
            
        </div>
        
    )
}