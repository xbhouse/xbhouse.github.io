import React, {Fragment} from 'react';

const Experience = (props) => {
    return (
        <Fragment>
            <div className="text-center exp-container">
                <h2 className="position">{props.position}</h2>
                <p className="company">{props.company}</p>
                <p className="location">{props.location}</p>
                <p className="dates">{props.dates}</p>
                <p className="role-description">{props.description}</p>
            </div>
        </Fragment>
    )
}

export default Experience;