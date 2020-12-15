import React, {Fragment} from "react"; 
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
                        pageName="Contact"
                    />
                    
                </ul> 
            </nav>
        </Fragment>
    )

}

export default Navigation;