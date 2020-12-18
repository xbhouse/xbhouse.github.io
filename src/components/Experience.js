import React, {Fragment} from 'react';

const Experience = (props) => {
    return (
        <Fragment>
            <div className="text-center exp-container">
                <h2 className="position">{props.position}</h2>
                <table className="exp-table">
                    <tbody>
                        <tr>
                            <td className="company">
                                {props.company.startsWith("Sponsored") && 
                                <a 
                                    href={props.link}
                                    target="__blank"
                                    rel="noopener noreferrer"
                                >
                                {props.company.split(" ").splice(-2).join(" ")}
                                </a>}
                                {!props.company.startsWith("Sponsored") && 
                                <a 
                                    href={props.link}
                                    target="__blank"
                                    rel="noopener noreferrer"
                                >{props.company}
                                </a>
                                } -- {props.location}
                            </td>
                        </tr>
                        <tr>
                            <td className="dates">{props.dates}</td>
                        </tr>
                        <tr>
                            <td className="role-description">{props.description}</td>
                        </tr>
                    </tbody>
                </table>
                
                
            </div>
        </Fragment>
    )
}

export default Experience;