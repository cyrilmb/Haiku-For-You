import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  const user = useSelector((store) => store.user);

  return (
    <div>
      <footer>&copy; Cyril Malle-Barlow</footer>
      <div className='footer-box'>
        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/gallery">
              Gallery
            </Link>

            <Link className="navLink" to="/add-poem">
              Add A Poem
            </Link>

            {/* <Link className="navLink" to="/edit">
              Edit Poem
            </Link> */}

            <Link className="navLink" to="/user-gallery">
              Your Poems
            </Link>

            {/* <LogOutButton className="navLink" /> */}
          </>
        )}
      </div>
    </div>
  );
}

export default Footer;
