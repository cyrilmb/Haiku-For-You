import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import EditPage from '../EditPage/EditPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import GalleryPage from '../GalleryPage/GalleryPage.jsx';
import HomePoem from '../HomePoem/HomePoem.jsx';
import UserPoems from '../UserPoems/UserPoems.jsx';
import EditUserPoem from '../EditUserPoem/EditUserPoem';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/gallery */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/gallery will show the Gallery if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/gallery */}
          <ProtectedRoute
            // logged in shows Gallery else shows LoginPage
            exact
            path="/gallery"
          >
            <GalleryPage />
            {/* <UserPage /> */}
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows EditPage else shows LoginPage
            exact
            path="/edit"
          >
            <EditPage />

          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows EditPage else shows LoginPage
            exact
            path="/edit-user"
          >
            <EditUserPoem />

          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows the User-Gallery page, else shows LoginPage
            exact
            path="/user-gallery"
          >
            <UserPoems />

          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /home page
              <Redirect to="/home" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /gallery page
              <Redirect to="/gallery" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {/* {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              : */}
            {/* // Otherwise, show the HomePoem page */}
            <HomePoem />
            {/* } */}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
