import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav>
        <ul>
          <li>
            <Link to="/">Waiter</Link>
          </li>
          <li>
            <Link to="/kitchen">Kitchen</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Nav;