import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand navbar-light bg-secondary position-fixed navBar">

                <div className="container">

                    <div className="collapse navbar-collapse">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* Homepage link */}

                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
                            </li>

                            {/* About Us page link */}

                            <li className="nav-item">
                                <Link className="nav-link active  text-white" to="/about">About Us</Link>
                            </li>

                            {/* Login page link */}

                            <li className="nav-item">
                                <Link className="nav-link active  text-white" to="/login">Login</Link>
                            </li>

                        </ul>

                    </div>

                </div>

            </nav>
        </React.Fragment>
    )
}

export default NavBar
