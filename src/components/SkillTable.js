import React from 'react';
import {Skill} from '../components';

const SkillTable = (props) => {
    return (
        <table className={`${props.styleName}-table`}>
            <thead>
                <tr>
                    <th className="skill-table-name">{props.tableName}</th>
                </tr>
            </thead>
            <tbody>
                {props.skillList.map((skill, index) => {
                    return (   
                        <Skill 
                            key={index}
                            category={props.tableName}
                            skillName={skill}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}

export default SkillTable;