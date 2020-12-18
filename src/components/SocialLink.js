import React from 'react';
import {socialImages} from '../data/images';

const SocialLink = (props) => {
    let image = "";
    if(props.title === "GitHub")
        image = socialImages[0];
    else if (props.title === "LinkedIn")
        image = socialImages[1];

    return (
        <li className="nav-item">
            <a 
                href={props.link}
                target="__blank"
                rel="noopener noreferrer"
            >
                <img 
                    id={`${props.title}-icon`}
                    className="social-image" 
                    src={image} 
                    alt="social icon"
                    width={props.width}
                    height={props.width}
                />
            </a>
        </li>        
    )
    
}

export default SocialLink;