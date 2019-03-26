import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Writer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleInputChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    return (
      <div className="writer-container">
        <ReactMarkdown source={this.state.input} />
        <textarea
          className="text-field"
          onChange={this.handleInputChange}
          value={this.state.input}
          placeholder={'Click here to start typing'}
        />
      </div>
    );
  }
}

export default Writer;
