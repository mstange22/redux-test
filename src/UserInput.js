import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setValueA, setValueB } from './redux/reducer';

class UserInput extends Component {

  onChange = (e) => {
    const { name, value } = e.target;
    if (/^\d+$/.test(value) || value === '') {
      if (name === 'a') this.props.setValueA(value === '' ? 0 : value);
      else this.props.setValueB(value === '' ? 0 : value);
    }
  }

  render() {
    return (
      <div className="user-input-container">
        <b>Redux Calculator</b>
        <br />
        Enter two values
        <div className="input-container">
          <input
            className="user-input"
            name="a"
            onChange={this.onChange}
            value={this.props.a}
            autoComplete="off"
            autoFocus
          />
          <br />
          <input
            className="user-input"
            name="b"
            onChange={this.onChange}
            value={this.props.b}
            autoComplete="off"
          />
        </div>
      </div>
    );
  }
}

UserInput.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  a: parseInt(state.a),
  b: parseInt(state.b),
});

const mapDispatchToProps = {
  setValueA,
  setValueB,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);