import React from 'react'

/**
* @author
* @function Input
**/

const Input = (props) => {
    const {
        type = "text",
        placeholder = "Enter placeholder text",
        name,
        value,
        onChange,
      } = props;

  return(
    <input
    type={type}
    className="form-control"
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
  />
);
 }

export default Input