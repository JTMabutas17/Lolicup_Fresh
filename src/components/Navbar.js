import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li><Link to="/"><img src="./images/lollicup/Etc/logo.png" alt="lollicup logo" width="400px" height="70px" title="Home Page"/></Link></li>
                        <li>
                            <a>Menu</a>
                            <ul>
                                <li><Link to="/foodmenu">Food</Link></li>
                                <li><Link to="/drinkbase">Drinks</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/locations">Location</Link></li>
                        <li><a>Account</a>
                            <ul>
                                <li><Link to="/signin">Sign In</Link></li>
                                <li><Link to="/">Sign Out</Link></li>
                                <li><Link to="/CreateAccount">Create Account</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/order">Check Out</Link></li>
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}