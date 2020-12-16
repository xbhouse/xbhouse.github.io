import React, {Fragment} from 'react';
import ContactForm from '../components/ContactForm.js'
import '../styles/components/ContactForm.css'

const ContactPage = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="text-center">
                    <h1 className="contact-greeting">I'm excited to hear from you!</h1>
                    <h2 className="email-me">Please enter your message in the form below, or 
                        <a href="mailto:bryttbhouse@gmail.com"> send me an email.</a>
                    </h2>
                </div>
                <ContactForm />
            </div>
        </Fragment>
    )
}

export default ContactPage;