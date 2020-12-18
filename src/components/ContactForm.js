import React, {useState} from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormRow from '../components/FormRow.js'

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [buttonText, setButtonText] = useState("Submit");

    const sendMessage = () => {
        const invalidInput = () => toast.error("That doesn't look like a valid email address :(", {
            className: "error-toast-container",
            bodyClassName: "error-toast-text"
        });

        const data = {
            name,
            email, 
            message
        };

        if(!email.includes(".") || !email.includes("@")){
            invalidInput();
            return;
        }

        return axios({
            method: "POST",
            url: "http://127.0.0.1:5000/send_message",
            data: data
        }).then(response => {
            console.log(response);
            setButtonText("Submitted!");
            handleReset();
            return response;
        }).catch(error => {
            console.log(error);
            return error;
        })
    }

    const handleSubmit = () => {
        const success = () => toast("Thank you for your message!", {
            className: "success-toast-container",
            bodyClassName: "success-toast-text"
        });
        const invalidInput = () => toast.error("Please enter your name, email, and a message.", {
            className: "error-toast-container",
            bodyClassName: "error-toast-text"
        });

        if(name === "" || email === "" || message === "") {
            invalidInput();
            return;
        }

        document.getElementById("spinner").style.visibility = "visible";
        setButtonText("Sending message...");
        let promise = sendMessage();
    
        if(promise) {
            sendMessage().then(() => {
                setTimeout(function() {handleReset(); success();}, 3000);
            })
        }
        else {
            handleReset();
        }
    }

    const handleReset = () => {
        setName("");
        setEmail("");
        setMessage("");
        setButtonText("Submit");
        document.getElementById("spinner").style.visibility = "hidden";
    }

    return (
        <form className="form-container">
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
                        <span id="spinner" className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" style={{visibility:"hidden"}}></span> 
                        <span className="sr-only">Loading...</span>
                    </button>
                    <button 
                        id="reset-button"
                        type="reset" 
                        className="btn btn-secondary btn-lrg" 
                        onClick={handleReset}
                    >Reset</button>
                </div>
            </div>

            <ToastContainer />

        </form>
    )
}

export default ContactForm;
            