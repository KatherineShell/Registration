import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

interface Props {
    modal: boolean;
    toggle: () => void;
    title: string;
    text: string;
}

const InfoModal = ({ modal, toggle, text, title }: Props) => {
    return (
        <Modal centered={true} contentClassName="Register" isOpen={modal} toggle={toggle}>
            <ModalHeader className="Register-Header" >{title}</ModalHeader>
            <ModalBody>
                {text}
            </ModalBody>
            <ModalFooter className="Register-Footer">
                <Button className="Button-Ok" color="danger" onClick={toggle}>OK</Button>
            </ModalFooter>
        </Modal>
    );
}

export default InfoModal;