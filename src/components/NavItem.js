import React from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom"; 

const NavItem = (props) => {
    return (
        <li className="nav-item">
            {(props.pageName === "GitHub" 
                || props.pageName === "LinkedIn") &&
                <a 
                    className="nav-button-external"
                    href={props.link} 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <button 
                        className="nav-button-external" 
                        title={props.pageName}
                    >{props.pageName.toLowerCase()}</button></a>
            }
            {(props.pageName !== "GitHub" 
                && props.pageName !== "LinkedIn") &&
                <button className="nav-button" title={props.pageName}>
                    <NavLink 
                        className="nav-link" 
                        to={`/${props.pageName.toLowerCase()}`} 
                        activeStyle={{color:'white'}}
                    >{props.pageName.toLowerCase()}</NavLink>
                </button>
            }
        </li> 
    )
}

export default NavItem;