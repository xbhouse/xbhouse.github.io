import React, {Fragment} from "react"; 
import NavItem from '../components/NavItem.js';
import '../styles/components/Navigation.css';
import SocialLink from "./SocialLink.js";

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
                        pageName="Experience"
                    />
                    <NavItem
                        pageName="Skills"
                    />
                    <NavItem
                        pageName="Projects"
                    />
                    <NavItem
                        pageName="Contact"
                    />
                    <SocialLink
                        title="GitHub"
                        link="https://github.com/xbhouse"
                        width="50"
                        height="90"
                    />
                    <SocialLink
                        title="LinkedIn"
                        link="https://linkedin.com/in/bryttaniehouse"
                        width="50"
                        height="75"
                    />
                    
                </ul> 
            </nav>
        </Fragment>
    )

}

export default Navigation;