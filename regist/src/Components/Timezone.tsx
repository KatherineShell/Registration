import React from 'react';
import { Button, ModalBody, ModalFooter, FormGroup } from 'reactstrap';
import moment from 'moment-timezone';
import CustomDropdown from './CustomDropdown';

interface Props {
    next: () => void;
    prev: () => void;
    onChangeTimezone: (val: string) => void;
    timeZone: string;
}

interface State {
    value: string;
    data: string[];
}

export default class Timezone extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            data: moment.tz.names(), value: moment.tz.guess()
        };
    }

    componentDidMount() {
        this.props.onChangeTimezone(this.state.value);
    }

    render() {
        let { next, prev, onChangeTimezone, timeZone } = this.props;
        let { value, data } = this.state;

        return (
            <>
                <ModalBody>
                    <FormGroup>
                        <CustomDropdown data={data} value={timeZone || value} onChange={onChangeTimezone}
                            titleRender={(val) => <span>
                                <div className="Input-Title">Select your timezone</div>
                                <div className="Input-Value"> {val}</div>
                            </span>} />
                    </FormGroup>
                </ModalBody>
                <ModalFooter className="Register-Footer Footer-space">
                    <Button className="Button-Prev" color="light" onClick={prev}>prev step</Button>
                    <Button className="Button-Next" disabled={!value} color="danger" onClick={next}>Next Step</Button>
                </ModalFooter>
            </>
        );
    }
};