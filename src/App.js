import React, { Component } from 'react';
import UserInput from './components/UserInput';
import Addition from './components/Addition';
import Subtraction from './components/Subtraction';
import Multiplication from './components/Multiplication';
import Division from './components/Division';
import PopUp from './components/PopUp';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false,
    };
  }

  renderPopUp() {
    const { showPopUp } = this.state;
    if (!showPopUp) return null;
    return <PopUp title="Hello" message="This is a test" />;
  }

  render() {
    const { showPopUp } = this.state;
    return (
      <div className="app">
        { this.renderPopUp() }
        <div className="top">
          <Addition />
          <Subtraction />
        </div>
        <div className="middle">
          <button type="submit" onClick={() => this.setState({ showPopUp: !showPopUp })}>
            {`${this.state.showPopUp ? 'Hide' : 'Show'} Pop-Up`}
          </button>
          <br />
          <br />
          <UserInput />
        </div>
        <div className="bottom">
          <Multiplication />
          <Division />
        </div>
      </div>
    );
  }
}

export default App;
