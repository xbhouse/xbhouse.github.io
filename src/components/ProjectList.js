import React, {Fragment} from 'react';
import ProjectListItem from './ProjectListItem';
import '../styles/components/ProjectList.css'

const ProjectList = () => {

    return (
        <Fragment>
            <div className="project-list-container">
                <ul className="project-list">
                    <ProjectListItem 
                        path="jama-jira-plugin"
                        title="Jama-Jira link plugin"
                    />
                    <ProjectListItem 
                        path="climbit"
                        title="ClimbIt"
                    />
                    <ProjectListItem 
                        path="recall-tracker"
                        title="Recall Tracker"
                    />
                    <ProjectListItem 
                        path="spacehunt"
                        title="SpaceHunt"
                    />
                </ul>
            </div>
        </Fragment>
        
    )

}

export default ProjectList;