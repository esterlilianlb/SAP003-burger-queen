import React from 'react';
import './Input.css';

function Input(props) {
   return(
       <input
       ref={props.ref}
       id={props.id}
       className={props.className}
       type={props.type}
       placeholder={props.placeholder}
       >
       </input>
   )
}

export default Input;