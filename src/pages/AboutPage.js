import React, {Fragment} from 'react';
import '../styles/pages/AboutPage.css'

const AboutPage = () => {

    return (
        <Fragment>
            <div className="info">
                <h1 className="greeting">hello!</h1> 
                <p className="intro"> I'm Bryttanie. (Yep, it's pronounced like 'Brittany'.) I'm a Computer Science graduate from Portland State University 
                and an incoming Associate Consultant at Red Hat. My current interests include but are not limited to: </p>
                <ul className="interests-container">
                    <li id="interest-item1" className="interest-item">Data science and engineering</li>
                    <li id="interest-item2" className="interest-item">Full-stack application development</li>
                    <li id="interest-item3" className="interest-item">Data management</li>
                    <li id="interest-item4" className="interest-item">UX/UI design</li>
                </ul>
                <p className="middle">I appreciate challenges and converting difficult problems to intuitive, usable solutions, from
                    user interface design to scheduling algorithms to customized implemententation of platform infrastructure.</p>
                <p className="closing">Additionally, I enjoy learning about and tinkering with the latest technologies, hiking and frolicking in nature, making 
                    art, and cooking nourishing meals with loved ones. </p>
            </div>
        </Fragment>
    )
}

export default AboutPage;