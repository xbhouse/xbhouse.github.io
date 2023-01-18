import React, {Fragment} from 'react';
import ProjectListItem from './ProjectListItem';
import '../styles/components/ProjectList.css'

const ProjectList = () => {

    return (
        <Fragment>
            <div className="project-list-container">
                <ul className="project-list">
                    <ProjectListItem 
                        path="red-hat-projects"
                        title="Red Hat projects"
                    />
                    <ProjectListItem 
                        path="jama-jira-plugin"
                        title="Jama-Jira plugin"
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
                    <ProjectListItem 
                        path="home"
                        title="this website"
                    />
                </ul>
            </div>
        </Fragment>
        
    )

}

export default ProjectList;