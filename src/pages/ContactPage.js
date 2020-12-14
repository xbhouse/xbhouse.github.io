import React, {Fragment} from 'react';
import ContactForm from '../components/ContactForm.js'
import '../styles/ContactPage.css'

const ContactPage = () => {
    return (
        <Fragment>
            <div className="container">
                <ContactForm />
            </div>
        
        </Fragment>
    )
}

export default ContactPage;