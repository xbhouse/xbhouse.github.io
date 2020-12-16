import React, {Fragment} from 'react';

const Skill = (props) => {
    return (
        <Fragment>
            <div className="text-center skill-container">
                <h1>{props.category}: {props.skillName}</h1>
            </div>
        </Fragment>
    )
}

export default Skill;