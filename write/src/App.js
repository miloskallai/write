import React, { Component } from 'react';
import Writer from './components/writer';
import NavBar from './components/navbar';
import Previwer from './components/previewer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblePreview: false
    };
  }

  togglePreview() {
    this.setState({
      visiblePreview: !this.state.visiblePreview
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Writer />
        <Previwer />
      </div>
    );
  }
}

export default App;
