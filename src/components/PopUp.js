import React from 'react';
import PropTypes from 'prop-types';

const PopUp = ({ title, message }) => (
  <div
    style={{
      textAlign: 'center',
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
      padding: 20,
      flexDirection: 'column',
    }}
  >
    <div className="popup-title" style={{ fontWeight: 700 }}>
      {`Pop-Up Says "${title}"`}
    </div>
    <br />
    <div className="popup-message">
      {message}
    </div>
  </div>
);

PopUp.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default PopUp;
