import React from 'react';
import './Navbar.css';


const Navbar = () => {

    return (
        <div className="headerNavbar">
            <nav className="navbar navbar-expand-lg navbar-grey bg-grey">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">CHOLLOPOP</a>
                    <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">                        
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" 
                                href="/register">Register</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" 
                                href="/categories" id="navbarDropdown" 
                                role="button" data-bs-toggle="dropdown" 
                                aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/categories/boy">Boy</a></li>
                                    <li><a className="dropdown-item" href="/categories/girl">Girl</a></li>
                                    <li><a className="dropdown-item" href="/categories/accesories">Accesories</a></li>
                                    <li><a className="dropdown-item" href="/categories/Jewelry">Jewelry</a></li>
                                    <li><a className="dropdown-item" href="/categories/">Shoes</a></li>
                                    <li><a className="dropdown-item" href="/categories/">Discount</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>    
    )
}



export default Navbar;
