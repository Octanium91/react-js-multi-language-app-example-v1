import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LngSupport from './components/Lng/LngSupport.js';
import Lng from './components/Lng/Lng.js';
import LngMenu from './components/LngMenu';

class App extends Component {

  state = {
    // default language use for filling gaps
    // in other languages
    LngDefault: "en",
    // current language its loaded if browser
    // language not supported (on load app)
    LngCurrent: "en",
    // if you need you can hide (set false) language menu
    LngMenuShow: true,
  };

  // initialization language parameters
  lngInit = (AppState) => {
      if (!AppState.hasOwnProperty("LngUser")) {
          // writte in 'LngUser' browser language in ISO 639-1 format (en, ru, ua .....)
          AppState.LngUser = navigator.language.substr(0, 2) || navigator.userLanguage.substr(0, 2);
          if (LngSupport.hasOwnProperty(AppState.LngUser)) {
              if (LngSupport[AppState.LngUser].autouse) {
                AppState.LngCurrent = AppState.LngUser;
              };
          };
      };
      if (!AppState.hasOwnProperty("LngMenuOptions")) {
        // create language drop-down menu options
        const LngOptions = [];

        for (var key in LngSupport) {
            LngOptions.push(
                <option className="LngMenu-lang-option" key={LngSupport[key].id} disabled={LngSupport[key].disabled} hidden={LngSupport[key].hidden} value={key}>{LngSupport[key].name}</option>
            );
        }

        AppState.LngMenuOptions = LngOptions;
      };
  };

  // create/update 'Lng' in state from 'Lng.js'
  lngLoad = (AppState) => {
      if (Lng.hasOwnProperty(AppState.LngDefault)) {
          if (Lng.hasOwnProperty(AppState.LngCurrent)) {
            AppState.Lng = Object.assign({}, Lng[AppState.LngDefault], Lng[AppState.LngCurrent]);
            document.documentElement.lang = AppState.LngCurrent;
          } else {console.log("App-lngLoad()", " : '"+AppState.LngCurrent+" (LngCurrent)' not found in Lng.js!")};
      } else {console.log("App-lngLoad()", " : '"+AppState.LngDefault+" (LngDefault)' not found in Lng.js!")};     
  };

  AppSetState = (value) => {
    this.setState(value);
  };

  render() {
    const AppState = this.state;
    // initialization language parameters
    this.lngInit(AppState);
    // create/update 'Lng' in state from 'Lng.js'
    this.lngLoad(AppState);
    // now in this.state.Lng loaded properties from 'Lng.js'
    // in context this.state.LngCurrent properties (example: ru)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <LngMenu AppState={AppState} AppSetState={this.AppSetState} />
          <p>
            {AppState.Lng.Text}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {AppState.Lng.LinkLearnReact}
          </a>
          <a
            className="fa fa-github GitHub-link"
            href="https://github.com/Octanium91/react-js-multi-language-app-example-v1"
            rel="noopener noreferrer"
          >
            {AppState.Lng.LinkGitHub}
          </a>
        </header>
      </div>
    );
  };
}

export default App;
