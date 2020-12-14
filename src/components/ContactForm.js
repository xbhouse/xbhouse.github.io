import React, {useState} from 'react';
import axios from 'axios';
import FormRow from '../components/FormRow.js'

const ContactForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [buttonText, setButtonText] = useState("Submit");

    const handleSubmit = (event) => {
        event.preventDefault();
        setButtonText("Sending message..");
        
        const data = {
            name,
            email, 
            message
        };

        console.log(data);

        /*axios.post(url, data)
        .then(response => {
            console.log(response);
            setButtonText("Submitted!");
        })
        .catch(error => {
            console.log(error);
        })*/
    }

    const handleReset = (event) => {
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        event.target.value="";
    }

    return (
        <form>

            <div className="text-center">
                <h1 className="greeting">I'm excited to hear from you!</h1>
                <h2 className="email-me">Please enter your message in the form below, or 
                    <a href={`mailto:${props.email}`}> send me an email.</a>
                </h2>
            </div>

            <FormRow
                name="Name"
                input="input"
                state={name}
                setState={setName}
            ></FormRow>

            <FormRow
                name="Email"
                input="input"
                state={email}
                setState={setEmail}
            ></FormRow>

            <FormRow
                name="Message"
                input="textarea"
                state={message}
                setState={setMessage}
            ></FormRow>

            <div className="text-center button-container">
                <div className="form-group mt-5 mb-0">
                    <button 
                        type="submit" 
                        className="btn btn-primary btn-lrg" 
                        onClick={handleSubmit} 
                    >Submit</button>
                    <button 
                        type="reset" 
                        className="btn btn-secondary btn-lrg" 
                        onClick={handleReset}
                    >Reset</button>
                </div>
            </div>

        </form>
    )
}

export default ContactForm;
            