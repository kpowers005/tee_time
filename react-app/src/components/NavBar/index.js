import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { setUser } from '../../store/session';
import "./index.css"

const NavBar = () => {
  const {user} = useSelector(state => state.session);
  const dispatch = useDispatch()
  const demoLogin = async () => {
    const res = await fetch('/api/auth/demo/')

    if (res.ok) {
      const demo = await res.json()
     dispatch(setUser(demo))
    }
  };


  return (
    <nav className='navbar__holder'>
      <ul className='navbar__list'>
        <li className='navbar__links'>
          <NavLink to='/' exact={true} activeClassName='active'>
            TeeTime
          </NavLink>
        </li>
        {!user && <li className='navbar__links'>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>}
        {!user && <li className='navbar__links'>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>}
        {user ? <li className='navbar__links'>
         <LogoutButton />
        </li> : <button className='demo' onClick={demoLogin}>Demo</button>}
      </ul>
    </nav>
  );
}

export default NavBar;
