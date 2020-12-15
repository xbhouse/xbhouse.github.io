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
        document.getElementById("spinner").style.visibility = "visible";
        setButtonText("Sending message...");
        
        const data = {
            name,
            email, 
            message
        };

        console.log(data);

        axios({
            method: "POST",
            url: "http://127.0.0.1:5000/send_message",
            data: data
        }).then(response => {
            console.log(response);
            setButtonText("Submitted!");
        }).catch(error => {
            console.log(error);
            alert("Unable to send message :(");
        })

        handleReset();
    }

    const handleReset = () => {
        setName("");
        setEmail("");
        setMessage("");
        setButtonText("Submit");
        document.getElementById("spinner").style.visibility = "hidden";
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
                        id="submit-button"
                        type="button" 
                        className="btn btn-primary btn-lrg"
                        html="" 
                        onClick={handleSubmit} 
                    >{buttonText}
                        <span id="spinner" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" style={{visibility:"hidden"}}></span> 
                        <span class="sr-only">Loading...</span>
                    </button>
                    <button 
                        id="reset-button"
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
            