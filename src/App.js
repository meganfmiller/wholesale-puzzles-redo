import React, { Component } from 'react';
import './App.css';
import './reset.css';
import router from './router.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

export default App;
