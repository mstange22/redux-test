import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import UserInput from './UserInput';
import Addition from './Addition';
import Subtraction from './Subtraction';
import Multiplication from './Multiplication';
import Division from './Division';

const PopUp = ({ title, message }) => {
  console.log(title);
  return (
    <div
      style={{
        textAlign: 'left',
        height: 100,
        width: 400,
        position:
        'fixed',
        top: 200,
        left: '50%',
        marginLeft: -220,
        backgroundColor: '#f4f442',
        border: 'solid 1px black',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'flex-start',
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 20,
        flexDirection: 'column',
      }}
    >
      <div className="popup-title">
        {`Pop-Up Says "${title}"`}
      </div>
      <div className="popup-message">
        {message}
      </div>
    </div>
  );
};

PopUp.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

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
    // const { showPopUp } = this.state;
    return (
      <div className="app">
        { this.renderPopUp() }
        <div className="top">
          <Addition />
          <Subtraction />
        </div>
        <div className="middle">
          {/* <button type="submit" onClick={() => this.setState({ showPopUp: !showPopUp })}>
            Pop-Up
          </button> */}
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
