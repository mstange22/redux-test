import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setValueA, setValueB } from '../redux/reducer';

const UserInput = (props) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    if (/^\d+$/.test(value) || value === '') {
      if (name === 'a') props.setValueA(value === '' ? 0 : value);
      else props.setValueB(value === '' ? 0 : value);
    }
  };

  return (
    <div className="user-input-container">
      <b>Redux Calculator</b>
      <br />
      Enter two values
      <div className="input-container">
        <input
          className="user-input"
          name="a"
          onChange={onChange}
          value={props.a}
          autoComplete="off"
          autoFocus
        />
        <br />
        <input
          className="user-input"
          name="b"
          onChange={onChange}
          value={props.b}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

UserInput.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
  setValueA: PropTypes.func.isRequired,
  setValueB: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  a: parseInt(state.a, 10),
  b: parseInt(state.b, 10),
});

const mapDispatchToProps = {
  setValueA,
  setValueB,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);
