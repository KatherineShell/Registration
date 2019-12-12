import React from 'react';
import { Button, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';

interface Props {
    next: () => void;
    prev: () => void;
}

interface State {
    name: string;
}

export default class Company extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { name: '' };
    }

    onHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: e.target.value });
    }

    render() {
        let { next, prev } = this.props;
        let { name } = this.state;

        return (
            <>
                <ModalBody>
                    <FormGroup>
                        <Input onChange={this.onHandler} value={name} type="text" name="name" placeholder="Company Name (optional)" />
                    </FormGroup>
                </ModalBody>
                <ModalFooter className="Register-Footer Footer-space">
                    <Button className="Button-Prev" color="primary" onClick={prev}>prev step</Button>
                    <Button className="Button-Next" color="danger" onClick={next}>{name ? 'Next Step' : 'Skip this step'}</Button>
                </ModalFooter>
            </>
        );
    }
};