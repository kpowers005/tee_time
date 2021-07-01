import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import "./index.css"

const NavBar = () => {
  return (
    <nav className='navbar__holder'>
      <ul className='navbar__list'>
        <li className='navbar__links'>
          <NavLink to='/' exact={true} activeClassName='active'>
            TeeTime
          </NavLink>
        </li>
        <li className='navbar__links'>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li className='navbar__links'>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li className='navbar__links'>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
