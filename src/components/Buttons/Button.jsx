import React from 'react';
import './button.scss';

const isOperator = val => !isNaN(val) || val === '.' || val === '=';

export const Button = props => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : 'operator'
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);
