import React from 'react';
import { Input } from 'reactstrap';

interface Props {
    onChange: (val: string) => void;
    value: string;
    text: string;
}

interface State {
    isInput: boolean;
}

export default class CustomInput extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { isInput: false };
    }

    showEmailInput = () => {
        this.setState((state) => ({ isInput: !state.isInput }));
    }

    onHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(e.target.value);
    }

    render() {
        let { value, text } = this.props;

        return (this.state.isInput ? <Input type="email" autoFocus value={value} onChange={this.onHandler} onBlur={this.showEmailInput}
            className="Register-Input" placeholder={text} />
            :
            <div className="Register-Input form-control Dropdown-Title" onClick={this.showEmailInput} >
                <span> <div className="Input-Title">{text}</div>
                    <div className="Input-Value"> {value}</div></span>
            </div>
        );
    }
};