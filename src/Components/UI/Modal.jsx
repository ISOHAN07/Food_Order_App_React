import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

function Backdrop(props){
    return <div className={styles.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = props => {
    return(
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
}

const portalLocation = document.getElementById("overlays")

export default function Modal(props){
    return(
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalLocation)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalLocation)}
        </>
    );
}