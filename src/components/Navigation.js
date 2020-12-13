import React, {Fragment} from "react";
import { BrowserRouter as Router, NavLink, useHistory } from "react-router-dom"; 
import "../styles/Navigation.css"

const Navigation = () => {

    return (
        <Fragment>
            <nav>
                <ul className="navigation-container">
                    <li className="nav-item">
                        <button className="nav-button" title="Home">
                            <NavLink 
                                className="nav-link" 
                                to="/home" 
                                activeStyle={{color:'white'}}
                            >home</NavLink>
                        </button>
                    </li> 
                    <li className="nav-item">
                        <button className="nav-button" title="About me">
                            <NavLink 
                                className="nav-link" 
                                to="/about" 
                                activeStyle={{color:'white'}}
                            >about</NavLink>
                        </button>
                    </li> 
                    <li className="nav-item">
                        <button className="nav-button" title="My projects">
                            <NavLink 
                                className="nav-link" 
                                to="/projects" 
                                activeStyle={{color:'white'}}
                            >projects</NavLink>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-button" title="GitHub">github</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-button" title="LinkedIn">linkedin</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-button" title="Contact me">
                            <NavLink 
                                className="nav-link" 
                                to="/contact" 
                                activeStyle={{color:'white'}}
                            >contact</NavLink>
                        </button>
                    </li>
                </ul> 
            </nav>
        </Fragment>
    )

}

export default Navigation;