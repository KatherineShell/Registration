import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

interface Props {
    onChange: (val: string) => void;
    titleRender?: (val: string) => React.ReactNode;
    data: string[];
    value: string;
}

interface State {
    isOpen: boolean;
}

export default class CustomDropdown extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { isOpen: false };
    }

    toggle = () => {
        this.setState((state) => ({ isOpen: !state.isOpen }));
    }

    render() {
        let { value, data, onChange, titleRender } = this.props;

        return (<Dropdown disabled={data.length === 0} isOpen={this.state.isOpen} toggle={this.toggle}>
            <DropdownToggle className="form-control Dropdown-Title Register-Input" tag="div" caret>
                {titleRender ? titleRender(value) : value}
            </DropdownToggle>
            <DropdownMenu className="Register-SelectMenu"  >
                {data.map((el, key) => <DropdownItem onClick={() => onChange(el)} key={key} >{el}</DropdownItem>)}
            </DropdownMenu>
        </Dropdown>
        );
    }
};