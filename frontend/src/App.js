import React, { Component } from 'react';
import Header from './widgets/Header';
import SignIn from './widgets/SignIn';
import SignUp from './widgets/SignUp';
import Main from './widgets/Main';

import './css/app.css'

class App extends Component {
  render() {
    return (
      <div className = 'app-container'>
        <Header/>
        {/* <Main/> */}
        {/* <SignUp/> */}
        <SignIn/>
      </div>
    );
  }
}

export default App;
