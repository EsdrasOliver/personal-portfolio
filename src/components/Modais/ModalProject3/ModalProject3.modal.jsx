import "./styles.css"

import { ButtonClose } from "../../ButtonClose/ButtonClose";
import { ContentModalProject3 } from './../../ContentsModais/ContentModalProject3/ContentModalProject3';

export function ModalProject3(props) {
    return (
        <div className="modal">
            <div className="container-modal">
                <div className="container-button-close">
                    <ButtonClose onClose={props.onClose}></ButtonClose>
                </div>
                <ContentModalProject3></ContentModalProject3>
            </div>
        </div>
    )
}