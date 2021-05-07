import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>

        <Link className='nav-style' to='/'>
        <h3>Logo</h3>
        </Link>
            <ul className='nav-links'>

                <Link className='nav-style' to='/contact'>
                <li>CONTACT</li>
                </Link>

                <Link className='nav-style' to='/about'>
                <li>ABOUT</li>
                </Link>

            </ul>
    </nav> 
  );
}

export default Nav;
