import React, { Component } from 'react';
import PropTypes from 'prop-types';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

class Link extends Component {
  constructor(props) {
    super(props);

    this.state = {
      className: STATUS.NORMAL,
    };
  }

  _onMouseEnter = () => {
    this.setState({ className: STATUS.HOVERED });
  }

  _onMouseLeave = () => {
    this.setState({ className: STATUS.NORMAL });
  }

  render() {
    return (
      <a
        className={this.state.className}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}

Link.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Link;
