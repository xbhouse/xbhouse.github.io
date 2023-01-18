import React, {Fragment} from 'react';
import '../styles/components/ContactForm.css'

const ContactPage = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="text-center">
                    <h1 className="contact-greeting">i'm excited to hear from you!</h1>
                    <h2 className="email-me">Please <a className="email-link" href="mailto:bryttbhouse@gmail.com"> send me an email </a> 
                    or contact me via<a className="email-link" href="https://linkedin.com/in/bryttaniehouse"> LinkedIn</a> with any inquiries</h2>
                </div>
            </div>
        </Fragment>
    )
}

export default ContactPage;