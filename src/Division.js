import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Division extends Component {
  render() {
    return (
      <div className="division-container">
        <h2>Division</h2>
        <h2>{this.props.a}</h2>
        <h2>/</h2>
        <h2>{this.props.b}</h2>
        <h2>=</h2>
        <h2>{this.props.a / this.props.b}</h2>
      </div>
    )
  }
}

Division.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  a: parseInt(state.a, 10),
  b: parseInt(state.b, 10),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Division);