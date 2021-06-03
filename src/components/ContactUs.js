import React from 'react';
import emailjs from 'emailjs-com';

import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ud4xowj', 'template_vhbwtue', e.target, 'user_99Ul5X8DfVk99JDYAMdlS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      window.location.reload();
  }

  
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <br/>
      <input type="text" name="user_name" />
      <br/>
      <label>Email</label>
      <br/>
      <input type="email" name="user_email" />
      <br/>
      <label>Message</label>
      <br/>
      <textarea name="message" />
      <br/>
      <input type="submit" value="Send" />
    </form>
  );
}