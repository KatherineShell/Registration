import React from 'react';
import { Button, ModalBody, ModalFooter, FormGroup, Input, FormFeedback } from 'reactstrap';
import {Text} from '../Constants/text';

interface Props {
    next: () => void;
    onChangeEmail: (val: string) => void;
    email: string;
    disabled: boolean;
}

const Email = ({ next, email, disabled, onChangeEmail }: Props) => {

    let onHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeEmail(e.target.value);
    };

    return (
        <>
            <ModalBody>
                <FormGroup>
                    <Input invalid={email !== '' && disabled} type="email" value={email} onChange={onHandler} className="Register-Input" placeholder="E-mail" />
                    <FormFeedback>{Text.emailError}</FormFeedback>
                </FormGroup>
                <div className="Register-description">{Text.emailText}</div>
            </ModalBody>
            <ModalFooter className="Register-Footer">
                <Button disabled={disabled} className="Button-Next" color="danger" onClick={next}>next step</Button>
            </ModalFooter>
        </>
    );
}

export default React.memo(Email);