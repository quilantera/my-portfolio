import './styles.scss'
import {MdOutlineEmail} from 'react-icons/md';
import {MdPhone} from 'react-icons/md';
import ReactLoading from 'react-loading';
import { useState } from 'react';
import emailjs from 'emailjs-com';
export function Contact(){
    const [isLoading, setIsLoading] = useState(false); 

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true);
        try{
            await emailjs.sendForm('service_s8vk88v', 'template_w48ndjj', event.currentTarget, 'MibCkX82onwrYWdiF')
        .then(function(){
                alert("Send Message Successful")
                setIsLoading(false);
            });
        }
        catch (erro){
            alert("Erro while sending message ");
            setIsLoading(false);
        }
        
    }
    return(
    
    <section id="contact" className="contact">
        {isLoading ? <div className="loading"><ReactLoading type="spin" color="var(--text-primary)" height={75} width={75} /></div> : <></>}
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact-container">
            <div className="contact-options">
                <article className="contact-option">
                    <MdOutlineEmail className='contact-option-icon '/>
                    <h4>Email</h4>
                    <h5>gugaquilante@gmail.com</h5>
                    <a href="mailto:gugaquilante@gmail.com" target="_blank">Send a message</a>
                </article>

                <article className="contact-option">   
                    <MdPhone className='contact-option-icon '/>
                    <h4>Phone</h4>
                    <h5>+55 11 98986-2282 </h5>
                    <a href="https://wa.me/5511989862282" target="_blank">Send a message </a>
                </article>
        </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Full Name" required/>
                <input type="email" name="email" placeholder="Your E-mail" required/>
                <textarea name="message" rows={7} placeholder="Tell me a Message" required/>
                
            <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
    </section>
    )
}