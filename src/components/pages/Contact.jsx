import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
    const contact_form = useRef();
    const [text, setText] = useState("");
    const [alert, setAlert] = useState(false);

    const key = import.meta.env.PROD.VITE_KEY;
    const service = import.meta.env.PROD.VITE_SERVICE;
    const template = import.meta.env.PROD.VITE_TEMPLATE;

    console.log(key, service, template)

    function sendMessage(e) {
        e.preventDefault();
  
        emailjs
            .sendForm(service, template, contact_form.current, {publicKey: key})
            .then(() => {sendSuccessful()}, (error) => {sendFailed(error)});
    };

    function sendSuccessful() {
        setText("Thanks for the message!");
        setAlert(true);

        contact_form.current.reset();
        setTimeout(() => {setAlert(false)}, 5000);

        console.log("Message was sent successfully!");
    }

    function sendFailed(error) {
        setText("Oops! Something is broken!");
        setAlert(true);

        console.log("Failed to send message:", error.text);
    }

    return(
        <>
            <div className="page-title">
                <p className="title-text">Contact Me</p>
            </div>
            <div id="contact-text">
                <p className="page-text">You can drop me a message using the form below or send me an email at: <span id="email">kartoonfool@gmail.com</span></p>
            </div>
            <form ref={contact_form} id="contact-form" onSubmit={sendMessage}>
                <div id="contact-name">
                    <label htmlFor="name">Name :</label>
                    <input id="input-name" type="text" name="name" placeholder="Enter your name..." required />
                </div>
                <div id="contact-email">
                    <label htmlFor="email">Email :</label>
                    <input id="input-email" type="email" name="email" placeholder="Enter your email..." required />
                </div>
                <div id="contact-message" className="column-span">
                    <label htmlFor="message">Message :</label>
                    <textarea id="input-message" name="message" placeholder="Enter your message..." required></textarea>
                </div>
                <div id="contact-send" className="column-span">
                    {alert == true ? <div id="message-alert">{text}</div> : 
                    <button type="submit" id="send-btn">Send<i id="double-arrow" className="material-icons">double_arrow</i></button>}
                </div>
            </form>
        </>
    );
}

export default Contact;