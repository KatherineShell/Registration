import React from 'react';
import { Button } from 'reactstrap';
import CompanyModal from './Components/Modals/CompanyModal';
import TimezoneModal from './Components/Modals/TimezoneModal';
import './App.css';
import './Components/main.scss';
import CheckDataModal from './Components/Modals/CheckDataModal';
import EmailModal from './Components/Modals/EmailModal';
import IntroModal from './Components/Modals/IntroModal';
import { connect } from 'react-redux';
import * as actions from './Store/actions';
import { ActionsTypes } from './Store/actions';
import InfoModal from './Components/Modals/InfoModal';
import { Text } from './Constants/text';
import axios from 'axios';

interface State {
  isEmailOpen: boolean;
  isIntroOpen: boolean;
  isCompanyOpen: boolean;
  isZoneOpen: boolean;
  isSubmitOpen: boolean;
  isSuccess: boolean;
  isEmailValid: boolean;
  email: string;
  firstName: string;
  lastName: string;
  companyName: string;
  timeZone: string;
  gender: string;
}

type Props = Pick<ActionsTypes, 'saveAccount'>;

class App extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isEmailOpen: false, isIntroOpen: false, isCompanyOpen: false, isZoneOpen: false,
      email: '', lastName: '', firstName: '', timeZone: '', companyName: '', gender: '',
      isSubmitOpen: false, isSuccess: false, isEmailValid: false
    };
  }
  private id: number = 0;

  onChangeEmail = (val: string) => {

    let that = this;

    if (this.id) clearTimeout(this.id);

    this.id = window.setTimeout(function () {
      clearTimeout(that.id);

      axios.post('https://frontapi.vinchain.io/auth/api/check-email/', {
        email: val
      }, { headers: { 'Content-Type': 'application/json' } })
        .then(function (response: any) {
          that.setState({ isEmailValid: response.status === 200 });
        })
        .catch(function (error) {
          console.log(error);
          that.setState({ isEmailValid: false });
        });
    }, 500);

    this.setState({ email: val, isEmailValid: false  });
  }

  onChangeFirstName = (val: string) => {
    this.setState({ firstName: val });
  }

  onChangeLastName = (val: string) => {
    this.setState({ lastName: val });
  }

  onChangeCompany = (val: string) => {
    this.setState({ companyName: val });
  }

  onChangeTimezone = (val: string) => {
    this.setState({ timeZone: val });
  }

  onChangeGender = (val: string) => {
    this.setState({ gender: val });
  }

  isEmailToggle = () => {
    this.setState((state) => ({ isEmailOpen: !state.isEmailOpen }));
  }

  isIntroToggle = () => {
    this.setState((state) => ({ isIntroOpen: !state.isIntroOpen }));
  }

  isCompanyToggle = () => {
    this.setState((state) => ({ isCompanyOpen: !state.isCompanyOpen }));
  }

  isZoneToggle = () => {
    this.setState((state) => ({ isZoneOpen: !state.isZoneOpen }));
  }

  isSubmitToggle = () => {
    this.setState((state) => ({ isSubmitOpen: !state.isSubmitOpen }));
  }

  isSuccessToggle = () => {
    this.setState((state) => ({ isSuccess: !state.isSuccess }));
  }

  toIntroStep = () => {
    this.isEmailToggle();
    this.isIntroToggle();
  }

  toCompanyStep = () => {
    this.isIntroToggle();
    this.isCompanyToggle();
  }

  toZoneStep = () => {
    this.isZoneToggle();
    this.isCompanyToggle();
  }

  toSubmit = () => {
    this.isZoneToggle();
    this.isSubmitToggle();
  }

  submit = () => {
    let { timeZone, email, firstName,
      lastName, gender, companyName } = this.state;

    this.props.saveAccount(timeZone, email, gender, firstName, lastName, companyName);
    this.isSubmitToggle();
    this.onChangeEmail('');
    this.onChangeFirstName('');
    this.onChangeLastName('');
    this.onChangeCompany('');
    this.onChangeTimezone('');
    this.onChangeGender('');
    this.isSuccessToggle();
  }

  render() {
    let { isCompanyOpen, isIntroOpen, isEmailOpen, isZoneOpen, email, firstName,
      lastName, gender, companyName, timeZone, isSubmitOpen, isSuccess, isEmailValid } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Button onClick={this.isEmailToggle} color="danger" >Register</Button>

          <EmailModal onChangeEmail={this.onChangeEmail} next={this.toIntroStep} toggle={this.isEmailToggle}
            open={isEmailOpen} email={email} disabled={!isEmailValid} />

          <IntroModal toggle={this.isIntroToggle} open={isIntroOpen} firstName={firstName} lastName={lastName}
            onChangeFirstName={this.onChangeFirstName} gender={gender} onChangeGender={this.onChangeGender}
            onChangeLastName={this.onChangeLastName} prev={this.toIntroStep} next={this.toCompanyStep} />

          <CompanyModal toggle={this.isCompanyToggle} open={isCompanyOpen} onChangeCompany={this.onChangeCompany}
            companyName={companyName} prev={this.toCompanyStep} next={this.toZoneStep} />

          <TimezoneModal toggle={this.isZoneToggle} open={isZoneOpen} onChangeTimezone={this.onChangeTimezone}
            timeZone={timeZone} prev={this.toZoneStep} next={this.toSubmit} />

          <CheckDataModal toggle={this.isSubmitToggle} open={isSubmitOpen} email={email}
            onChangeEmail={this.onChangeEmail} timeZone={timeZone} onChangeLastName={this.onChangeLastName}
            onChangeTimezone={this.onChangeTimezone} gender={gender} onChangeGender={this.onChangeGender}
            firstName={firstName} lastName={lastName} onChangeFirstName={this.onChangeFirstName}
            onChangeCompany={this.onChangeCompany} companyName={companyName} submit={this.submit}
            disabled={!isEmailValid}
          />

          <InfoModal title='Congratulations!' text={Text.successCreation} toggle={this.isSuccessToggle} modal={isSuccess} />
        </header>
      </div>
    );
  }
};

export default connect(null, actions)(App);