import React from 'react';
import ModalWrapper from '../ModalWrapper';
import Company from '../Company';
import { Text } from '../../Constants/text';

interface Props {
    next: () => void;
    prev: () => void;
    toggle: () => void;
    onChangeCompany: (val: string) => void;
    open: boolean;
    companyName: string;
}

const CompanyModal = ({ companyName, onChangeCompany, open, toggle, prev, next }: Props) => {
    return <ModalWrapper value={60} title={Text.companyModalTitle} toggle={toggle} modal={open}  >
        <Company onChangeCompany={onChangeCompany} companyName={companyName} prev={prev} next={next} />
    </ModalWrapper>;
}

export default React.memo(CompanyModal);