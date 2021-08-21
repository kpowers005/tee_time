import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './index.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [playLevel, setPlayLevel] = useState('Beginner');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, profilePic, playLevel, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateProfilePic = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='form__formholders'>
      <div className='signin__form--div'>
        <form  className='signin__form' onSubmit={onSignUp}>
          <div>
            {errors && errors.map((error, ind) => (
              <div key={ind}>{error}</div>
              ))}
          </div>
          <div>
            <label>First Name </label>
            <input
              type='text'
              name='firstName'
              onChange={updateFirstName}
              value={firstName}
              ></input>
          </div>
          <div>
            <label>Last Name </label>
            <input
              type='text'
              name='lastName'
              onChange={updateLastName}
              value={lastName}
              ></input>
          </div>
          <div>
            <label>Email </label>
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              ></input>
          </div>
          <div>
            <label>Player Level </label>
            <select
              type='select'
              name='playerLevel'
              value={playLevel}
              onChange={e => setPlayLevel(e.target.value)}
              >
              <option value='Beginner'>Beginner</option>
              <option value='Intermediate'>Intermediate</option>
              <option value='Advanced'>Advanced</option>
            </select>
          </div>
          <div>
            <label>Profile Picture </label>
            <input
              type='file'
              name='profilePic'
              onChange={updateProfilePic}
              ></input>
          </div>
          <div>
            <label>Password </label>
            <input
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              ></input>
          </div>
          <div>
            <label>Repeat Password </label>
            <input
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              ></input>
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
