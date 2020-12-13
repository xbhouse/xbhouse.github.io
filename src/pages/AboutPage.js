import React, {Fragment} from 'react';
import '../styles/AboutPage.css'

const AboutPage = () => {

    return (
        <Fragment>
            <h1 className="greeting">hello!</h1> 
            <div className="info">
                <p> My name is Bryttanie. I'm a Computer Science graduate from Portland State University and an incoming Associate Consultant at Red Hat. My tech interests include: </p>
                <ul className="interests-container">
                    <li className="interest-item">Data science and engineering</li>
                    <li className="interest-item">Full-stack application development</li>
                    <li className="interest-item">Data management</li>
                    <li className="interest-item">UX/UI design</li>
                </ul>
                <p>I enjoy challenges and converting difficult problems to intuitive, user-friendly solutions. I'm also passionate about increasing accessibility within science and engineering spaces. 
                    Throughout my time at Portland State, I was extremely lucky to have the opportunity to teach and mentor underrepresented students in computer science and engineering.
                    When I'm not coding, I enjoy learning about the latest technologies, making art, and cooking nourishing meals with loved ones. </p>
            </div>
        </Fragment>
    )
}

export default AboutPage;