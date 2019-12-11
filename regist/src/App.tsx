import React from 'react';
import { Button } from 'reactstrap';
import Email from './Components/Email';
import Introduction from './Components/Introduction';
import Company from './Components/Company';
import './App.css';
import './Components/main.scss';
import ModalWrapper from './Components/ModalWrapper';
import Timezone from './Components/Timezone';

interface State {
  isEmailOpen: boolean;
  isIntroOpen: boolean;
  isCompanyOpen: boolean;
  isZoneOpen: boolean;
}

export default class App extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = { isEmailOpen: false, isIntroOpen: false, isCompanyOpen: false, isZoneOpen: false };
  }

  componentDidMount(){
    document.documentElement.style
    .setProperty('--danger', 'rgb(255, 89, 151)');
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


  render() {
    let { isCompanyOpen, isIntroOpen, isEmailOpen, isZoneOpen } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Button onClick={this.isEmailToggle} color="danger" >Register</Button>

          <ModalWrapper value={20} title="Create your VINchain account. Easy to use anytime, anywhere for everyone" toggle={this.isEmailToggle} modal={isEmailOpen}  >
            <Email next={this.toIntroStep} />
          </ModalWrapper>

          <ModalWrapper value={40} title="Let's introduce ourselves! Your name will be displayed in all reports, documents, etc." toggle={this.isIntroToggle} modal={isIntroOpen}  >
            <Introduction prev={this.toIntroStep} next={this.toCompanyStep} />
          </ModalWrapper>

          <ModalWrapper value={60} title="Tracking company vehicles? (optional)" toggle={this.isCompanyToggle} modal={isCompanyOpen}  >
            <Company prev={this.toCompanyStep} next={this.toZoneStep} />
          </ModalWrapper>

          <ModalWrapper value={80} title="Set your time zone" toggle={this.isCompanyToggle} modal={isZoneOpen}  >
            <Timezone prev={this.toZoneStep} next={this.isIntroToggle} />
          </ModalWrapper>

          <ModalWrapper value={100} title="Check your data" toggle={this.isCompanyToggle} modal={isZoneOpen}  >
            <Timezone prev={this.toZoneStep} next={this.isIntroToggle} />
          </ModalWrapper>
        </header>
      </div>
    );
  }
};
// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/*  <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>*/}
//         <Button color="danger" >Register</Button>
//         <Email />
//       </header>
//     </div>
//   );
// }

// export default App;
