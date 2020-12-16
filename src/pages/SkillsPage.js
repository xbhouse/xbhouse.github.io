import React, {Fragment} from 'react';
import Skill from '../components/Skill.js';
import '../styles/pages/SkillsPage.css';

const SkillsPage = () => {
    return (
        <Fragment>
            <h1 className="text-center skill-page-title">skills</h1>
            <Skill 
                category="Language"
                skillName="C++"
            />
        </Fragment>
    )
}

export default SkillsPage;