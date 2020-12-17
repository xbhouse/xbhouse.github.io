import React, {Fragment} from 'react';
import Experience from '../components/Experience.js';
import {jamaRoleDescription, 
       wicsRoleDescription, 
       cdkRoleDescription, 
       chickTechRoleDescription} from '../data/descriptions';
import '../styles/pages/ExperiencePage.css';

const ExperiencePage = () => {
    return (
        <Fragment>
            <h1 className="text-center exp-page-title">relevant industry experience</h1>
            <Experience 
                position="Student Software Engineer"
                company="Sponsored by Jama Software"
                link="https://jamasoftware.com"
                location="Portland, Oregon"
                dates="July 2020 to December 2020"
                description={jamaRoleDescription}
            />
            <Experience 
                position="Student Mentor"
                company="We in Computer Science (WiCS)"
                link="https://wics.cs.pdx.edu/"
                location="Portland, Oregon"
                dates="October 2019 to Present"
                description={wicsRoleDescription}
            />
            <Experience 
                position="Co-Teacher"
                company="ChickTechPDX"
                link="https://portland.chicktech.org/"
                location="Portland, Oregon"
                dates="August 2019"
                description={chickTechRoleDescription}
            />
            <Experience 
                position="Software Engineer Intern"
                company="CDK Global"
                link="https://www.cdkglobal.com/us"
                location="Portland, Oregon"
                dates="June 2019 to August 2019"
                description={cdkRoleDescription}
            />
        </Fragment>
    )
}

export default ExperiencePage;