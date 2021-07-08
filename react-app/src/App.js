import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/index';
import Splash from './components/Splash/';
import CoursePage from './components/CoursePage/';
import ResultsPage from './components/ResultsPage/';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './components/User';
import { authenticate } from './store/session';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();

  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/search_results/:query/' exact={true}>
          <ResultsPage />
        </Route>
        <Route path='/course/:courseId/'  exact={true}>
          <CoursePage />
        </Route>
        <ProtectedRoute path='/users/:userId/' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <Splash />
        </Route>
        <Route path='' >
          <h1>You have encountered an error</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
