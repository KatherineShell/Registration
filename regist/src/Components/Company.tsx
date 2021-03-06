import React from 'react';
import { Button, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';

interface Props {
    next: () => void;
    prev: () => void;
    onChangeCompany: (value: string) => void;
    companyName: string;
}

export default class Company extends React.PureComponent<Props> {
    onHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChangeCompany(e.target.value);
    }

    render() {
        let { next, prev, companyName } = this.props;

        return (
            <>
                <ModalBody>
                    <FormGroup>
                        <Input onChange={this.onHandler} className="Register-Input" value={companyName} type="text" name="name" placeholder="Company Name (optional)" />
                    </FormGroup>
                </ModalBody>
                <ModalFooter className="Register-Footer Footer-space">
                    <Button className="Button-Prev" color="link" onClick={prev}>prev step</Button>
                    <Button className="Button-Next" color="danger" onClick={next}>{companyName ? 'Next Step' : 'Skip this step'}</Button>
                </ModalFooter>
            </>
        );
    }
};