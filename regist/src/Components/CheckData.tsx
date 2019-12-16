import React from 'react';
import { Button, ModalBody, ModalFooter, FormGroup } from 'reactstrap';
import moment from 'moment-timezone';
import CustomInput from './CustomInput';
import { genders } from '../Constants/constants';
import CustomDropdown from './CustomDropdown';

interface Props {
    submit: () => void;
    onChangeTimezone: (val: string) => void;
    onChangeGender: (val: string) => void;
    onChangeEmail: (val: string) => void;
    onChangeFirstName: (val: string) => void;
    onChangeLastName: (val: string) => void;
    onChangeCompany: (val: string) => void;
    timeZone: string;
    gender: string;
    email: string;
    firstName: string;
    lastName: string;
    companyName: string;
    disabled: boolean;
}

interface State {
    data: string[];
}

export default class CheckData extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            data: moment.tz.names()
        };
    }

    render() {
        let { submit, timeZone, onChangeTimezone, gender, onChangeGender, email, onChangeEmail, firstName,
            lastName, onChangeFirstName, onChangeLastName, companyName, onChangeCompany, disabled } = this.props;
        let { data } = this.state;

        return (
            <>
                <ModalBody>
                    <FormGroup>
                        <CustomInput text="E-mail" value={email} onChange={onChangeEmail} />
                    </FormGroup>
                    <FormGroup>
                        <CustomInput text="First Name" value={firstName} onChange={onChangeFirstName} />
                    </FormGroup>
                    <FormGroup>
                        <CustomInput text="Last Name" value={lastName} onChange={onChangeLastName} />
                    </FormGroup>
                    <FormGroup>
                        <CustomDropdown data={genders} value={gender} onChange={onChangeGender}
                            titleRender={(val) => <span>
                                <div className="Input-Title">Gender</div>
                                <div className="Input-Value"> {val}</div>
                            </span>} />
                    </FormGroup>
                    <FormGroup>
                        <CustomInput text="Company Name" value={companyName} onChange={onChangeCompany} />
                    </FormGroup>
                    <FormGroup>
                        <CustomDropdown data={data} value={timeZone} onChange={onChangeTimezone}
                            titleRender={(val) => <span>
                                <div className="Input-Title">Select your timezone</div>
                                <div className="Input-Value"> {val}</div>
                            </span>} />
                    </FormGroup>
                </ModalBody>
                <ModalFooter className="Register-Footer Footer-space">
                    <Button disabled={!email || !firstName || !lastName || !gender || !timeZone || disabled}
                        className="Button-Submit" color="danger" onClick={submit}>Create account</Button>
                </ModalFooter>
            </>
        );
    }
};