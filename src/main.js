import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Left from './components/Left.jsx';
import Right from './components/Right.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Left />
        <Right />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
);
