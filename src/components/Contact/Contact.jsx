import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1 className='hire'>HIRE ME!</h1>
      <div className="inputbox">
      <div className="details">
        <input type="text" name='name' id='name'className='input-field' placeholder='Full Name' required="required"/>
        <label for="name" className='input-label' >Full name</label>
      </div>
      <div className="details">
        <input type="text" name='name' id='name'className='input-field' placeholder='Email' required="required"/>
        <label for="name" className='input-label' >Email</label>
      </div>
      </div>
      <div className="detail">
        <input type="text" name='name' id='name'className='input-field2' placeholder='Phone number' required="required"/>
        <label for="name" className='input-label2' >Phone number</label>
      </div>
      <div className="message">
        <label className="name">Message</label>
        <textarea className='message-box' placeholder='Type your message here'></textarea>
      <div className="button">
        <button className='b'>Submit</button>
      </div>
      </div>
    </div>
  )
}

export default Contact
