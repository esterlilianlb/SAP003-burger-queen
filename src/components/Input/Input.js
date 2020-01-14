import React from 'react';
import './Input.css';

function Input(props) {
   return(
       <input
       name={props.name}
       id={props.id}
       onChange={props.checked}
       value={props.value}
       onBlur={props.focusOut}
       className={props.className}
       type={props.type}
       placeholder={props.placeholder}
       onClick={props.handleClick}
       />
       
   )
}

export default Input;