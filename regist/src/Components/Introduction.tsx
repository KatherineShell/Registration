import React from 'react';
import { Button, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';
import { genders } from '../Constants/constants';
import CustomDropdown from './CustomDropdown';

interface Props {
    next: () => void;
    prev: () => void;
    onChangeFirstName: (value: string) => void;
    onChangeLastName: (value: string) => void;
    onChangeGender: (value: string) => void;
    firstName: string;
    lastName: string;
    gender: string;
}

const Introduction = ({ next, prev, firstName, lastName, gender, onChangeGender, onChangeFirstName, onChangeLastName }: Props) => {
    let onHandlerFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeFirstName(e.target.value);
    }

    let onHandlerLast = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeLastName(e.target.value);
    }
    
    return (
        <>
            <ModalBody>
                <FormGroup>
                    <Input onChange={onHandlerFirst} value={firstName} className="Register-Input" type="text" name="firstName" placeholder="First Name" />
                </FormGroup>
                <FormGroup>
                    <Input onChange={onHandlerLast} value={lastName} className="Register-Input" type="text" name="lastName" placeholder="Last Name" />
                </FormGroup>
                <FormGroup>
                    <CustomDropdown data={genders} value={gender || 'Gender'} onChange={onChangeGender} />
                </FormGroup>
            </ModalBody>
            <ModalFooter className="Register-Footer Footer-space">
                <Button color="link" className="Button-Prev" onClick={prev}>prev step</Button>
                <Button className="Button-Next" disabled={!firstName || !lastName || !gender} color="danger" onClick={next}>next step</Button>
            </ModalFooter>
        </>
    );
}

export default React.memo(Introduction);