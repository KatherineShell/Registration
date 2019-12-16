import React from 'react';

import ModalWrapper from '../ModalWrapper';
import Email from '../Email';
import { Text } from '../../Constants/text';

interface Props {
    next: () => void;
    toggle: () => void;
    onChangeEmail: (val: string) => void;
    open: boolean;
    disabled: boolean;
    email: string;
}

const EmailModal = ({ next, open, toggle, email, onChangeEmail, disabled }: Props) => {
    return <ModalWrapper value={20} title={Text.emailModalTitle} toggle={toggle} modal={open}  >
        <Email disabled={disabled} email={email} onChangeEmail={onChangeEmail} next={next} />
    </ModalWrapper>
}

export default React.memo(EmailModal);