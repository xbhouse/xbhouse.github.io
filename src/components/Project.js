import React, {Fragment} from "react";
import '../styles/Project.css'

const Project = (props) => {

    const images = props.images.map(image => {
        return (
            <Fragment>
                <img 
                    className="project-image" 
                    key={image} 
                    src={image} 
                    alt="Screenshot of UI" 
                    style={{width: props.size}}>
                </img>
                {props.size === "60%" && <div></div>}
            </Fragment>
        )
    })

    return (
        <Fragment>
            <h1 className="project-title">{props.title}</h1>
            <p className="image-caption">{props.caption}</p>
            <div className="image-container">
                {images}
            </div>
            <p className="description">{props.description}</p>
            <p className="role">{props.role}</p>
            <div className="link-container">
                <a 
                    className="link-to-repo" 
                    title="Go to the repo" 
                    href={props.repo}
                >{"go to repo >>"}
                </a>
            </div>
        </Fragment>
    )
}

export default Project;