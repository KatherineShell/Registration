import React from 'react';
import { Button, ModalBody, ModalFooter, FormGroup, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import moment from 'moment-timezone';

interface Props {
    next: () => void;
    prev: () => void;
}

interface State {
    value: string;
    data: string[];
    open: boolean;
}

export default class Timezone extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            data: moment.tz.names(),value: moment.tz.guess(), open: false
        };
    }

    zoneHandler = (val: string) => {
        this.setState({ value: val });
    }

    toggleMenu = () => {
        this.setState((state) => ({ open: !state.open }));
    }

    render() {
        let { next, prev } = this.props;
        let { open, value, data } = this.state;

        return (
            <>
                <ModalBody>
                    <FormGroup>
                        <Dropdown isOpen={open} toggle={this.toggleMenu}>
                            <DropdownToggle className="form-control" tag="div" caret>
                                <h6>Select your timezone</h6>
                                {value}
                            </DropdownToggle>
                            {data.length > 0 && <DropdownMenu className="Register-SelectMenu"  >
                                {data.map((el: string, key) => <DropdownItem onClick={() => this.zoneHandler(el)} key={key} >{el}</DropdownItem>)}
                            </DropdownMenu>}
                        </Dropdown>
                    </FormGroup>
                </ModalBody>
                <ModalFooter className="Register-Footer">
                    <Button color="primary" onClick={prev}>prev step</Button>
                    <Button disabled={!value} color="primary" onClick={next}>Next Step</Button>
                </ModalFooter>
            </>
        );
    }
};