import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import UserInput from './UserInput';
import Addition from './Addition';
import Subtraction from './Subtraction';
import Multiplication from './Multiplication';
import Division from './Division';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="top">
          <Addition />
          <Subtraction />
        </div>
        <div className="middle">
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

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
