import React, { Component } from 'react';
import Header from './widgets/Header';
import Main from './widgets/Main';

import './css/app.css'

class App extends Component {
  render() {
    return (
      <div className = 'app-container'>
        <div className='td'> </div>
          <Header/>
        <Main/>
        {/* <SignUp/> */}
        {/* <SignIn/> */}
      </div>
    );
  }
}

export default App;
