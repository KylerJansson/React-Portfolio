import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting form with:', { name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section className="contact-section py-5">
            <div className="container">
                <h2 className="text-center mb-4">Contact</h2>
                <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                    <div className="mb-3 bg-white p-4 border rounded">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleNameChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={handleMessageChange}
                                className="form-control"
                                required
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
