import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Header.css';
import { useSelector } from 'react-redux';

function Header() {
    const user = useSelector((store) => store.user);

    return (
        <div className="nav">
            <Link to="/home">
                <h2 className="nav-title">Haiku-For-You</h2>
            </Link>
            <div>
                {/* If no user is logged in, show these links */}
                {!user.id && (
                    // If there's no user, show login/registration links
                    <Link className="navLink" to="/login">
                        Login / Register
                    </Link>
                )}

                {/* If a user is logged in, show these links */}
                {user.id && (
                    <>
                        {/* <Link className="navLink" to="/gallery">
                            Gallery
                        </Link>

                        <Link className="navLink" to="/add-poem">
                            Add A Poem
                        </Link> */}

                        {/* <Link className="navLink" to="/edit">
              Edit Poem
            </Link> */}

                        {/* <Link className="navLink" to="/user-gallery">
                            Your Poems
                        </Link> */}

                        <LogOutButton className="navLink" />
                    </>
                )}

                {/* <Link className="navLink" to="/about">
          About
        </Link> */}
            </div>
        </div>
    );
}

export default Header;
