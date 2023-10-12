import React from 'react';
import BannerImage from "../assets/pizzaLeft.jpg"
import "../styles/Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${BannerImage})`}}/>
        <div className='rightSide'>
            <h1> Contact us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full name</label>
                <input name='name' type='text' placeholder='Enter full name..' required/>
                <label htmlFor='email'>Email</label>
                <input name='email' type='email' placeholder='Enter Email..' required/>
                <label htmlFor='message'>Message</label>
                <textarea rows="10" name='message' placeholder='Enter your message here' required/>
                <button type='submit'> Submit </button>
            </form>
            
        </div>
    </div>
  );
}

export default Contact;
