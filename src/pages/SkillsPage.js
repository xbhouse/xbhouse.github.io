import React, {Fragment} from 'react';
import SkillTable from '../components/SkillTable';
import {languages,  
    frameworks,
    systems,
    data, 
    databases,  
    devops} from '../data/skills';
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
                    tableName="Frameworks"
                    styleName="frameworks"
                    skillList={frameworks}
                />
                <SkillTable 
                    tableName="Systems"
                    styleName="systems"
                    skillList={systems}
                />
                <SkillTable 
                    tableName="Big Data"
                    styleName="bigData"
                    skillList={data}
                />
                <SkillTable 
                    tableName="Databases"
                    styleName="databases"
                    skillList={databases}
                />
                <SkillTable 
                    tableName="DevOps"
                    styleName="devops"
                    skillList={devops}
                />
            </div>
        </Fragment>
    )
}

export default SkillsPage;