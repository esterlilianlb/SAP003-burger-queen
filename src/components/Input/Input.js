import React from 'react';
import './Input.css';

function Input(props) {
   return(
       <input
    //    ref={props.ref}
    //    id={props.id}
       value={props.value}
       onBlur={props.focusOut}
       className={props.className}
       type={props.type}
       placeholder={props.placeholder}
       onClick={props.handleClick}
       >
       </input>
   )
}

export default Input;