import React, {Fragment} from 'react';
import '../styles/pages/AboutPage.css'

const AboutPage = () => {

    return (
        <Fragment>
            <div className="info">
                <h1 className="greeting">hello!</h1> 
                <p className="intro"> My name is Bryttanie. I'm a Computer Science graduate from Portland State University and an incoming Associate Consultant at Red Hat. My tech interests include: </p>
                <ul className="interests-container">
                    <li className="interest-item">Data science and engineering</li>
                    <li className="interest-item">Full-stack application development</li>
                    <li className="interest-item">Data management</li>
                    <li className="interest-item">UX/UI design</li>
                </ul>
                <p className="middle">I enjoy challenges and converting difficult problems to intuitive, usable solutions.  
                    Throughout my experience at Portland State, I was extremely lucky to have the opportunity to learn from and mentor underrepresented students in computer science and engineering programs and workshops.
                    I am passionate about increasing accessibility within science and engineering spaces and search for opportunities to do so at every turn.</p>
                <p className="closing">When I'm not coding, I enjoy learning about and tinkering with the latest technologies, making art, and cooking nourishing meals with loved ones. </p>
            </div>
        </Fragment>
    )
}

export default AboutPage;