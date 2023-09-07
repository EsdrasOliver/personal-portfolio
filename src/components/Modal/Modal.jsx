import "./styles.modules.css"
import { GrClose } from "react-icons/gr"

export function Modal({onClose, children}) {
    return (
        <div className="modal">
            <div className="container-modal">
                <div className="container-button-close">
                    <button className="button-close" onClick={onClose}><GrClose /></button>
                </div>
                {children}
            </div>
        </div>
    )
}
