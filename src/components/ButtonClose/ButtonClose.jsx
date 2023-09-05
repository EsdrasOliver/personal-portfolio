import "./styles.css"
import { GrClose } from "react-icons/gr"

export function ButtonClose(props) {
    return <button className="button-close" onClick={props.onClose}><GrClose /></button>
}