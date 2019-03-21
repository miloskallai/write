import React, { Component } from 'react';
import Writer from './components/writer';
import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Writer />
      </div>
    );
  }
}

export default App;
