import type {FunctionComponent} from "preact";
import './style.css';
import Slide from "../../pages/slides/Slides.tsx";

interface ModalProps {
    title: string;
    slides: Array<{
        title: string,
        items: string[],
        tag: string,
    }>;
    onClose?: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({title, slides, onClose}) => {
    return (
        <div className="modal-overlay" onClick={onClose}>

            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <div className="modal-header">{title}</div>
                <Slide slides={slides} />
            </div>
        </div>
    );
};

export default Modal;