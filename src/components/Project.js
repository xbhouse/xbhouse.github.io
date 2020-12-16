import React, {Fragment} from 'react';
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import '../styles/components/Project.css';

const Project = (props) => {
    const history = useHistory();

    return (
        <Fragment>
            <h1 className="project-title">{props.title}</h1>
            <p className="image-caption">{props.caption}</p>
            <div className="project-image-container">
                
                <Carousel>
                    {props.images.map(image => {
                        return (
                            <img 
                                className="project-image" 
                                key={image} 
                                src={image} 
                                alt="Screenshot of UI" 
                                style={{width: props.size}}>
                            </img> 
                        )
                    })}
                </Carousel>
        
            </div>
            <p className="description">{props.description}</p>
            <p className="role">{props.role}</p>
            <div className="link-container">
                <button 
                    id="back-button" 
                    className="back-button" 
                    onClick={() => history.push('/projects')}
                >{"<< go back to projects"}</button>
                <a 
                    className="link-to-repo" 
                    title="Go to the repo" 
                    href={props.repo}
                    target="_blank" 
                    rel="noopener noreferrer"
                >{"go to GitHub repo >>"}
                </a>
            </div>
        </Fragment>
    )
}

export default Project;