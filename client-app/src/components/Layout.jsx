import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <Link to='/' className='navbar-brand'>Bill Share</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item"><Link to="/" className='nav-link text-light'>Home</Link></li>
                                <li className="nav-item"><Link to="/add-participant" className='nav-link text-light'>Add Participant</Link></li>
                                <li className="nav-item"><Link to="/add-bill" className='nav-link text-light'>Add Bill</Link></li>
                                <li className="nav-item"><Link to="/participants" className='nav-link text-light'>Participants</Link></li>
                                <li className="nav-item"><Link to="/bills" className='nav-link text-light'>Bills</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container mt-5 py-5">
                {children}
            </div>
        </div>
    )
}

export default Layout;