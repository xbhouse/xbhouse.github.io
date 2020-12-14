import React from 'react';

const FormRow = (props) => {
    return (
        <div class="form-group row">
            <label for={props.name.toLowerCase()}>{props.name} *</label>
            {props.input === "input" && 
                <input
                    type={props.input}
                    class="form-control ml-3 mr-3"
                    id={props.name.toLowerCase()}
                    required
                />
            }
            {props.input === "textarea" && 
                <textarea 
                    class="form-control ml-8 mr-3" 
                    type={props.name.toLowerCase()}
                    id={props.name.toLowerCase()}
                    rows="3" 
                    maxlength="12345"></textarea>
            }
        </div>
    )
}

export default FormRow;


