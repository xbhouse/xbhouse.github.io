import React from 'react';
import { BrowserRouter as Router, 
    NavLink,
    useRouteMatch 
} from "react-router-dom"; 

const ProjectListItem = (props) => {

    let { path, url } = useRouteMatch();

    return(
        <li className="project-list-item">
            
                <button className="project-button">
                    {props.path !== "home" && 
                        <NavLink 
                            className="project-link"
                            to={`${url}/${props.path}`}
                        >{props.title}
                        </NavLink>
                    }
                    {props.path === "home" && 
                        <NavLink 
                            className="project-link"
                            to={`/${props.path}`}
                        >{props.title}
                        </NavLink>
                    }
                </button>
            
              
        </li>
    )
}

export default ProjectListItem;