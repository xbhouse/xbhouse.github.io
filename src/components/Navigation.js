import React, {Fragment} from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom"; 
import "../styles/components/Navigation.css"

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
                        <a href="https://github.com/xbhouse" target="_blank" rel="noopener noreferrer">
                            <button 
                                className="nav-button" 
                                title="GitHub" 
                                type="button"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >github</button>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://linkedin.com/in/bryttaniehouse" target="_blank" rel="noopener noreferrer">
                            <button 
                                className="nav-button" 
                                title="LinkedIn" 
                                type="button"
                            >linkedin</button>
                        </a>
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