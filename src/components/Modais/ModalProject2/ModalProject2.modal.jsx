import "./styles.css"

import { ButtonClose } from "../../ButtonClose/ButtonClose";
import { ContentModalProject2 } from './../../ContentsModais/ContentModalProject2/ContentModalProject2';

export function ModalProject2(props) {
    return (
        <div className="modal">
            <div className="container-modal">
                <div className="container-button-close">
                    <ButtonClose onClose={props.onClose}></ButtonClose>
                </div>
                <ContentModalProject2></ContentModalProject2>
            </div>
        </div>
    )
}