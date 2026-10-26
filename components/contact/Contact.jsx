"use client";

import { useState } from "react";

function Contact () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState ("idle");

    function handleSubmit (event) {

        event.preventDefault();
        console.log(name);
        console.log(email);
        console.log(message);
        setStatus("submitting");
    }
    return (
        <>
    <form onSubmit={handleSubmit}>
       <label htmlFor="name">Name</label>
        <input 
        id="name" 
        type="text"
        required
        value={name}
        onChange={(event) => setName(event.target.value)} 
        />
        <label htmlFor="email">Email</label>
        <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />
     <label htmlFor="message">Message</label>
        <textarea
        id="message"
        required
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        />
        <button 
                type="submit" 
                disabled={status === "submitting"}
        >
            {status === "submitting" ? "Sending..." : "Send Message"}</button>
            
        </form>
        {status === "success" && (
            <p>Thanks! Your Message has been received.</p>
        )
        }
        {status === "error" && (
            <p>We couldn't send your message. Please try again.</p>
        )}
        </>
    );
}
export default Contact;
