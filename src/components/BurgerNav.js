import React, {Fragment} from 'react'; 
import {slide as Menu} from 'react-burger-menu';
import NavItem from '../components/NavItem.js';
import '../styles/components/BurgerNav.css';
import {socialImages} from '../data/images';

const BurgerNav = () => {

    return (
        <Fragment>
            <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
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
                <li className="nav-item">
                    <a 
                        href="https://github.com/xbhouse"
                        target="__blank"
                        rel="noopener noreferrer"
                    >
                        <img 
                            className="github-image"
                            src={socialImages[0]} 
                            alt="gitHub"
                            width="50">
                        </img>
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        href="https://linkedin.com/in/bryttaniehouse"
                        target="__blank"
                        rel="noopener noreferrer"
                    >
                        <img 
                            className="linkedin-image"
                            src={socialImages[1]} 
                            alt="linkedIn"
                            width="50">
                        </img>
                    </a>
                </li>
            </ul>
            </Menu>
        </Fragment>
    )

}

export default BurgerNav;