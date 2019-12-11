import React from 'react';
import { FormGroup, Modal, ModalHeader, Progress, ModalBody } from 'reactstrap';

interface Props {
    modal: boolean;
    toggle: () => void;
    children: React.ReactNode;
    title: string;
    value: number;
}

const ModalWrapper = ({ modal, toggle, children, title, value }: Props) => {
    return (
        <Modal centered={true} contentClassName="Register" isOpen={modal} toggle={toggle}>
            <ModalHeader className="Register-Header" >{title}</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <div className="Register-Title">create account</div>
                </FormGroup>
                <Progress className="Register-Progress" barClassName="Register-ProgressBar" value={value} />
            </ModalBody>
            {children}
        </Modal>
    );
}

export default ModalWrapper;