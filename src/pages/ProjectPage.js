import React, {Fragment} from "react";
import ProjectList from '../components/ProjectList.js';
import '../styles/pages/ProjectPage.css';

const ProjectPage = () => {
    return (
        <Fragment>
            <h1 className="page-title">some of my recent projects</h1>
            <h2 className="page-subtitle">(click one to view more info)</h2>
            <ProjectList />
        </Fragment>
    )
}

export default ProjectPage;