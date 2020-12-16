import React, {Fragment} from 'react';
import '../styles/pages/AboutPage.css'

const AboutPage = () => {

    return (
        <Fragment>
            <div className="info">
                <h1 className="about-greeting">hello!</h1> 
                <p className="intro"> (◕‿◕) I'm Bryttanie.
                    I have over 2 years of experience in full-stack development, project management, and data science,
                    as well as mentoring and teaching experience. My current interests include but are not limited to: </p>
                <ul className="interests-container">
                    <li id="interest-item2" className="interest-item">Data science and engineering</li>
                    <li id="interest-item3" className="interest-item">Full-stack application development</li>
                    <li id="interest-item4" className="interest-item">Database design</li>
                    <li id="interest-item5" className="interest-item">UX/UI design</li>
                    <li id="interest-item1" className="interest-item">Ethics</li>
                </ul>
                <p className="middle">I appreciate challenges and converting difficult ones to intuitive, usable solutions, from
                    user interface design to scheduling algorithms to customized implemententation of platform infrastructure.
                    Additionally, I enjoy learning about and tinkering with the latest technologies, hiking and frolicking in nature, making 
                    art, and cooking nourishing meals with loved ones.</p>
                <p className="closing">I recently graduated from Portland State University with a Bachelor of Science in Computer Science. 
                Currently, I am an incoming Associate Consultant at Red Hat and design/develop things during any free time.
                I am not open to any full-time employment options right now, but am available for virtual coffee and/or freelance opportunities.</p>
            </div>
        </Fragment>
    )
}

export default AboutPage;