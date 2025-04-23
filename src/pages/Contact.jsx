import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact_text'>
                <h1>Let’s Connect</h1>
                <p>We’re here to assist you with tailored advice, product inquiries, or any questions you may have. Share your details with us, and a dedicated member of our team will personally reach out to provide you with the attention and service you deserve.</p>
            </div>
            <div className='contact_form'>
                <ContactForm/>
            </div>
        </div>
    );
};

export default Contact;