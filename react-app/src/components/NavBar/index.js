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
        <li className='navbar__links teeTime__logo'>
          <NavLink to='/' exact={true} activeClassName='active'>
            TeeTime
          </NavLink>
        </li>
        {!user && <li >

        </li>}
        {!user && <li className='navbar__links signup__nav'>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
            <br/>
            <NavLink to='/login' exact={true} className='navbar__links login__nav' activeClassName='active'>
            Already have an account?
          </NavLink>
        </li>}
        {user ? <li className='navbar__links demoOrNah'>
         <LogoutButton />
        </li> : <li className='navbar__links demoOrNah'><button className='demo' onClick={demoLogin}>Demo</button></li>}
      </ul>
    </nav>
  );
}

export default NavBar;
