import React, {Fragment} from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom"; 
import NavItem from '../components/NavItem.js';
import '../styles/components/Navigation.css';

const Navigation = () => {

    return (
        <Fragment>
            <nav>
                <ul className="navigation-container">

                    <NavItem
                        pageName="Home"
                    />
                    <NavItem
                        pageName="About"
                    />
                    <NavItem
                        pageName="Projects"
                    />
                    <NavItem
                        pageName="GitHub"
                        link="https://github.com/xbhouse"
                    />
                    <NavItem
                        pageName="LinkedIn"
                        link="https://linkedin.com/in/bryttaniehouse"
                    />
                    <NavItem
                        pageName="Contact"
                    />

                </ul> 
            </nav>
        </Fragment>
    )

}

export default Navigation;