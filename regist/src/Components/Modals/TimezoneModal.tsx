import React from 'react';
import ModalWrapper from '../ModalWrapper';
import Timezone from '../Timezone';
import { Text } from '../../Constants/text';

interface Props {
    next: () => void;
    prev: () => void;
    toggle: () => void;
    onChangeTimezone: (val: string) => void;
    open: boolean;
    timeZone: string;
}

const TimezoneModal = ({ timeZone, onChangeTimezone, open, toggle, prev, next }: Props) => {
    return <ModalWrapper value={80} title={Text.timezoneModalTitle} toggle={toggle} modal={open}  >
        <Timezone onChangeTimezone={onChangeTimezone} timeZone={timeZone} prev={prev} next={next} />
    </ModalWrapper>;
}

export default React.memo(TimezoneModal);