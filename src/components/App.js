import React, { Component } from 'react';
import '../styles/app.css';

class App extends Component {
  handleChange = param => {
    console.log(param);
  };

  render() {
    return (
      <div>
        <h1>React Easy Boilerplate</h1>
        <button type="button" onClick={() => this.handleChange('TEST ECMA6')}>
          ECMA6
        </button>
      </div>
    );
  }
}

export default App;
