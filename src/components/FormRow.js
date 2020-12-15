import React from 'react';

const FormRow = (props) => {
    return (
        <div className="form-group row">
            <label className="row-label" htmlFor={props.name.toLowerCase()}>{props.name} *</label>
            {props.input === "input" && 
                <input
                    type="text"
                    className="form-control ml-3 mr-3"
                    id={props.name.toLowerCase()}
                    onChange={(event)=> props.setState(event.target.value)}
                    value={props.state}
                    required
                />
            }
            {props.input === "textarea" && 
                <textarea 
                    className="form-control ml-3 mr-3" 
                    type="text"
                    id={props.name.toLowerCase()}
                    onChange={(event)=> props.setState(event.target.value)}
                    value={props.state}
                    rows="3" 
                    maxLength="12345"></textarea>
            }
        </div>
    )
}

export default FormRow;


