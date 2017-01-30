import React from 'react';

function Button(props) {
  function handleClick(e) {
    e.preventDefault();
    props.onClick((props.value !== 'na') ? props.value : props.label);
  }
  return (<button onClick={handleClick} disabled={props.disabled} >{props.label}</button>);
}

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool,
  value: React.PropTypes.string,
};

Button.defaultProps = {
  value: 'na',
  disabled: false,
};

export default Button;
