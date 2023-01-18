import React from 'react';
import { NavLink } from "react-router-dom"; 

const NavItem = (props) => {
    return (
        <li className="nav-item">
                <button className="nav-button" title={props.pageName}>
                    <NavLink 
                        className="nav-link" 
                        to={`/${props.pageName.toLowerCase()}`} 
                        activeStyle={{color:'white'}}
                    >{props.pageName.toLowerCase()}</NavLink>
                </button>
            
        </li> 
    )
}

export default NavItem;