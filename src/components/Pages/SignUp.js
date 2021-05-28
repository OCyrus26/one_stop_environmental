import React from 'react';
import '../../App.css';
import SidePanel from '../SidePanel';
import ContactForm from '../ContactForm';

export default function SignUp() {
  return <>
   {/* <h1 className='sign-up'>TEST</h1>; */}
  {/* <AboutUsCards/> */}
  <br/>
  <br/>
  <br/>

  <h1>Contact Us</h1> <br/>
  <p>Call us or send us a message</p>

<ContactForm/>

<SidePanel
    title = 'Contact Info'
    info = 'Phone: 123-456-7890
    Email: email@email.com
    Address: ............'
  />

<li><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></li>

<SidePanel
    title = 'Hours'
    info = ' Monday:   00:00--00:00
    Tuesday:   00:00--00:00
    Wednesday:   00:00--00:00
    Thursday:   00:00--00:00
    Friday:   00:00--00:00
    Saturday:   00:00--00:00
    Sunday:   00:00--00:00'
  />

<li><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></li>

  </>
}