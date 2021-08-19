import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGolfBall } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { setUser } from '../../store/session';
import { getLocation } from '../../store/places';
import "./index.css"

const NavBar = () => {
  const {user} = useSelector(state => state.session);
  const dispatch = useDispatch();
  const listStyle = {'display' : 'flex', 'alignItems' : 'center'};

  const demoLogin = async () => {
    const res = await fetch('/api/auth/demo/')

    if (res.ok) {
      const demo = await res.json();
      dispatch(getLocation(true))
      dispatch(setUser(demo))
    }
  };

  console.log(user)


  return (
    <div className='navbar__holder'>
      <ul className='navbar__list'>
        <li className='navbar__links teeTime__logo'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <FontAwesomeIcon icon={faGolfBall}/> TeeTime
          </NavLink>
        </li>
        <li style={listStyle}>
          {!user && <div className='navbar__links signup__nav'>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
              <br/>
              <NavLink to='/login' exact={true} className='navbar__links login__nav' activeClassName='active'>
              Already have an account?
            </NavLink>
          </div>}
          {user ? <div className='navbar__links demoOrNah'>
           <LogoutButton />
          </div> : <div className='navbar__links demoOrNah'><button className='demo' onClick={demoLogin}>Demo</button></div>}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
