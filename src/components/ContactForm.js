import React from 'react';
import FormRow from '../components/FormRow.js'

const ContactForm = () => {
    const handleSubmit = () => {
        // POST form data
    }

    const handleReset = (event) => {
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        event.target.value="";
    }

    return (
        <form>

            <div className="text-center">
                <h1 className="greeting">I'm excited to hear from you.</h1>
                <h2 className="email-me">Please enter your message in the form below, or 
                    <a href="mailto:bryttbhouse@gmail.com"> send me an email.</a>
                </h2>
            </div>

            <FormRow
                name="Name"
                input="input"
            ></FormRow>

            <FormRow
                name="Email"
                input="input"
            ></FormRow>

            <FormRow
                name="Message"
                input="textarea"
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
            