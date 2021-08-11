import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <>
            <nav className="navbar sticky-top">
                <Link to="/home">
                    <img className="footer-logo"src="../images/newaffirmlylogo.svg" alt="Affirmly Logo" width="115" height="115" />
                </Link>
                <div>
                    <Link to="/accomplishedtasks" className="link text-decoration-none">
                        Accomplished Task
                    </Link>
                </div>
                <div>
                    <Link to="/newtask" className="link text-decoration-none">
                        New Task
                    </Link>
                </div>
                <div>
                    <Link to="/trophycase" className="link text-decoration-none">
                        Trophy Case
                    </Link>
                </div>
                <div>
                    <Link to="/" className="link text-decoration-none">
                        Logout
                    </Link>
                </div>
                <div>
                    3 Day Streak
                    <img src="../images/megaphone.gif" alt="megaphone" width="120" height="120" />
                </div>
            </nav>
        
        
        </>
    )

}

export default Navbar;