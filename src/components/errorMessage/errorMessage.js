import React from 'react';
import './errorMessage.css';

const ErrorMessage = () => {
  return (
    <>
      <img src={'/img/error.jpg'} alt="error" />
      <span>Something is going wrong...</span>
    </>
  );
};

export default ErrorMessage;
