import React from 'react';
import ModalWrapper from '../ModalWrapper';
import Introduction from '../Introduction';
import { Text } from '../../Constants/text';

interface Props {
    next: () => void;
    prev: () => void;
    toggle: () => void;
    onChangeFirstName: (val: string) => void;
    onChangeLastName: (val: string) => void;
    onChangeGender: (val: string) => void;
    open: boolean;
    firstName: string;
    lastName: string;
    gender: string;
}


const IntroModal = ({ firstName, lastName, gender, onChangeFirstName, onChangeGender, onChangeLastName, open, toggle, prev, next }: Props) => {
    return <ModalWrapper value={40} title={Text.introModalTitle} toggle={toggle} modal={open}  >
        <Introduction firstName={firstName} lastName={lastName} onChangeFirstName={onChangeFirstName} gender={gender}
            onChangeLastName={onChangeLastName} prev={prev} next={next} onChangeGender={onChangeGender} />
    </ModalWrapper>;
}

export default React.memo(IntroModal);