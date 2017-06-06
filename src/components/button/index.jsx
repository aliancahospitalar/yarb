import React from 'react';
import './button.scss';

const Button = ({ onClick, children }) => <button className = "test-button" onClick={onClick}>{children}</button>;

export default Button;