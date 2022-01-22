import React, {Fragment} from 'react';
import SkillTable from '../components/SkillTable';
import {languages, 
    tools, 
    packages} from '../data/skills';
import '../styles/pages/SkillsPage.css';

const SkillsPage = () => {
    return (
        <Fragment>
            <h1 className="text-center skill-page-title">technical skills</h1>
            <div className="skills-container">
                <SkillTable 
                    tableName="Languages"
                    styleName="languages"
                    skillList={languages}
                />
                <SkillTable 
                    tableName="Frameworks/Libraries"
                    styleName="packages"
                    skillList={packages}
                />
                <SkillTable 
                    tableName="Tools/Systems"
                    styleName="tools"
                    skillList={tools}
                />
            </div>
        </Fragment>
    )
}

export default SkillsPage;