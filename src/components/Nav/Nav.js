import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return(
      <nav className="nav">
        <ul className="sections">
          <li>
          <input type='radio' className="tab" name='css-tabs' defaultChecked/>
          <Link to="/waiter">Salão</Link>
          </li>
          <li>
          <input type='radio' className="tab" name='css-tabs' defaultChecked/>
          <Link to="/kitchen">Cozinha</Link>
          </li>
        </ul>
      </nav>
     
    )
}

export default Nav;