import React from 'react';
import { Button, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';

interface Props {
    next: () => void;
}

interface State {
    email: string;
    isValid: boolean;
}

export default class Email extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { email: '', isValid: false };
    }

    onHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: e.target.value });
    }

    render() {
        let { next } = this.props;
        let { email } = this.state;

        return (
            <>
                <ModalBody>
                    <FormGroup>
                        <Input type="email" value={email} onChange={this.onHandler} className="Register-Input" placeholder="E-mail" />
                    </FormGroup>
                    <div className="Register-description">We'll make a link to create a password for your new account</div>
                </ModalBody>
                <ModalFooter className="Register-Footer">
                    <Button className="Button-Next" color="danger" onClick={next}>next step</Button>
                </ModalFooter>
            </>
        );
    }
};