import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Subtraction = ({ a, b }) => (
  <div className="subtraction-container">
    <h2>Subtraction</h2>
    <h2>{a}</h2>
    <h2>-</h2>
    <h2>{b}</h2>
    <h2>=</h2>
    <h2>{a - b}</h2>
  </div>
);

Subtraction.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  a: parseInt(state.a, 10),
  b: parseInt(state.b, 10),
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Subtraction);
