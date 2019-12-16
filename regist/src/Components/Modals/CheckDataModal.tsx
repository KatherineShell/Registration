import React from 'react';
import ModalWrapper from '../ModalWrapper';
import CheckData from '../CheckData';
import { Text } from '../../Constants/text';

interface Props {
    submit: () => void;
    toggle: () => void;
    onChangeTimezone: (val: string) => void;
    onChangeCompany: (val: string) => void;
    onChangeEmail: (val: string) => void;
    onChangeLastName: (val: string) => void;
    onChangeGender: (val: string) => void;
    onChangeFirstName: (val: string) => void;
    open: boolean;
    disabled: boolean;
    timeZone: string;
    email: string;
    gender: string;
    firstName: string;
    companyName: string;
    lastName: string;
}

const CheckDataModal = ({ timeZone, onChangeTimezone, open, toggle, submit, email,
    gender, firstName, companyName, lastName, onChangeCompany, onChangeEmail,
    onChangeLastName, onChangeGender, onChangeFirstName, disabled }: Props) => {
    return <ModalWrapper value={100} title={Text.chechModalTitle} toggle={toggle} modal={open}  >
        <CheckData email={email} onChangeEmail={onChangeEmail} timeZone={timeZone} onChangeLastName={onChangeLastName}
            onChangeTimezone={onChangeTimezone} gender={gender} onChangeGender={onChangeGender} submit={submit}
            firstName={firstName} lastName={lastName} onChangeFirstName={onChangeFirstName}
            onChangeCompany={onChangeCompany} companyName={companyName} disabled={disabled} />
    </ModalWrapper>;
}

export default React.memo(CheckDataModal);