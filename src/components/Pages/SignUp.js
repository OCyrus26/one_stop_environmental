import React from 'react';
import '../../App.css';
import SidePanel from '../SidePanel';
import ContactUs from '../ContactUs';

import './SignUp.css';

export default function SignUp() {
  return <>

  <br/>
  <br/>
  <br/>

  <h1>Contact Us</h1> <br/>
  <p>Call us or send us a message</p>


<div class='float-container'>
 
  <div class = 'float-child'>
    <ContactUs/>
  </div>

  <div class = 'float-child>'>
  
    <SidePanel
      title = 'Contact Info'
      info = 'Phone: 123-456-7890
      Email: email@email.com
      Address: ............'
    />

  </div>

  <ul><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></ul>

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

<ul><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></ul>
</div>



  </>
}