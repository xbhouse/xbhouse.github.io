import React, {Fragment} from 'react';
import { BrowserRouter as Router, 
    NavLink,
    useRouteMatch 
} from "react-router-dom"; 
import '../styles/components/ProjectList.css'

const ProjectList = () => {

    let { path, url } = useRouteMatch();

    return (
        <Fragment>
        <div className="project-list-container">
            <h1 className="page-title">Select a project to view more info:</h1>

            <ul className="project-list">

                <li className="project-list-item">
                    <button className="project-button">
                        <NavLink 
                            className="project-link"
                            to={`${url}/jama-jira-plugin`}
                        >Jama-Jira link plugin
                        </NavLink>
                    </button>
                </li>

                <li className="project-list-item">
                    <button className="project-button">
                        <NavLink 
                            className="project-link"
                            to={`${url}/climbit`}
                        >ClimbIt
                        </NavLink>
                    </button>
                </li>

                <li className="project-list-item">
                    <button className="project-button">
                        <NavLink 
                            className="project-link"
                            to={`${url}/recall-tracker`}
                        >Recall Tracker
                        </NavLink>
                    </button>
                </li>

                <li className="project-list-item">
                    <button className="project-button">
                        <NavLink 
                            className="project-link"
                            to={`${url}/spacehunt`}
                        >SpaceHunt
                        </NavLink>
                    </button>
                </li>
            </ul>
        </div>
        </Fragment>
        
    )

}

export default ProjectList;