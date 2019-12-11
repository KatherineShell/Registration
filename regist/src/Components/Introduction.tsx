import React from 'react';
import { Button, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';

interface Props {
    next: () => void;
    prev: () => void;
}

interface State {
    firstName: string;
    lastName: string;
}

export default class Introduction extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { firstName: '', lastName: '' }
    }

    onHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;

        this.setState({ [name]: value } as Pick<State, keyof State>);
    }

    render() {
        let { next, prev } = this.props;
        let { firstName, lastName } = this.state;

        return (
            <>
                <ModalBody>
                    <FormGroup>
                        <Input onChange={this.onHandler} type="text" name="firstName" placeholder="First Name" />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={this.onHandler} type="text" name="lastName" placeholder="Last Name" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" name="select" placeholder="Gender" >
                            <option>Male</option>
                            <option>Femal</option>
                        </Input>
                    </FormGroup>
                </ModalBody>
                <ModalFooter className="Register-Footer">
                    <Button color="primary" onClick={prev}>prev step</Button>
                    <Button disabled={!firstName || !lastName} color="primary" onClick={next}>next step</Button>
                </ModalFooter>
            </>
        );
    }
};