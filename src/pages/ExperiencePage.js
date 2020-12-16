import React, {Fragment} from 'react';
import Experience from '../components/Experience.js';
import '../styles/pages/ExperiencePage.css';

const ExperiencePage = () => {
    return (
        <Fragment>
            <h1 className="text-center exp-page-title">experience</h1>
            <Experience 
                position="Student Software Engineer"
                company="Sponsored by Jama Software"
                location="Portland, Oregon"
                dates="July 2020 to December 2020"
                description="description"
            />
            <Experience 
                position="Student Mentor"
                company="We in Computer Science (WiCS)"
                location="Portland, Oregon"
                dates="October 2019 to present"
                description="description"
            />
            <Experience 
                position="Software Engineer Intern"
                company="CDK Global"
                location="Portland, Oregon"
                dates="June 2019 to August 2019"
                description="description"
            />
            <Experience 
                position="Co-Teacher"
                company="ChickTechPDX"
                location="Portland, Oregon"
                dates="October 2019"
                description="description"
            />
        </Fragment>
    )
}

export default ExperiencePage;