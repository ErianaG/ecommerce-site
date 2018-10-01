import React from 'react';
import auth0Client from '../../auth';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <div className="fixedNav">
                <NavLink to="/"><img className="topNav__logo" src="../img/NoStrings_Logo--white.png" alt="Amp Logo" /></NavLink>
                <nav className="topNav">
                    <ul className="topNav--center">
                        <li>
                            <NavLink to="/" exact>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" exact>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" exact>Contact</NavLink>
                        </li>
                        {auth0Client.isAuthenticated() ? <li><NavLink to="/Admin">Admin</NavLink></li> : null}
                    </ul>
                    <ul className="topNav--right">
                        <li><NavLink to="#"><i className="fa fa-search fa-lg fa-fw" aria-label="search"></i></NavLink></li>
                        <li><NavLink to="#"><i className="fa fa-shopping-cart fa-lg fa-fw" aria-label="shopping cart"></i></NavLink></li>
                        {!auth0Client.isAuthenticated() && (
                            <button className="logButton" onClick={auth0Client.signIn} >Log In</button>
                        )}
                        {auth0Client.isAuthenticated() && (
                            <button className="logButton" onClick={auth0Client.signOut} >Log Out</button>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav;