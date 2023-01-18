import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/pages/AboutPage.css'

const AboutPage = () => {

    return (
        <Fragment>
            <div className="info">
                <h1 className="about-greeting">hello!</h1> 
                <p className="intro"> (◕‿◕) I'm Bryttanie.
                    I have over 5 years of experience in full-stack software development,
                    as well as mentoring and teaching experience. My current technical interests include but are not limited to: </p>
                <ul className="interests-container">
                    <li id="interest-item1" className="interest-item">Data engineering</li>
                    <li id="interest-item2" className="interest-item">Full-stack application development</li>
                    <li id="interest-item3" className="interest-item">Application deployment</li>
                    <li id="interest-item4" className="interest-item">UX/UI design</li>
                </ul>
                <p className="middle">I appreciate challenges and converting difficult ones to intuitive, usable solutions, from
                    user interface design to customized configuration of cloud platforms and infrastructure services.
                    In my free time, I enjoy learning about and tinkering with the latest technologies, hiking/lounging in nature, making 
                    art, and cooking.</p>
                <p className="closing">I graduated from Portland State University with a Bachelor of Science in Computer Science. 
                    Currently, I am a Software Development Consultant at Red Hat and a hobbyist designer/developer.
                    I am always available for virtual coffee and/or freelance opportunities, so please <NavLink to="/contact">reach out</NavLink> if you'd like to chat.</p>
            </div>
        </Fragment>
    )
}

export default AboutPage;