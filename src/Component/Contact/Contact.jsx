import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/nav_underline.png'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c1100300-b380-4aaf-869d-72be1268632b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <section class="section-space">
    <div className="container">
    <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="contact-section">

            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>

                <div className="contact-details">

                    <div className="contact-detail">
                        <img src={mail_icon} alt='' />
                        <a href="mailto:keyframetechsolution@gmail.com">keyframetechsolution@gmail.com</a>
                    </div>

                    <div className="contact-detail">
                    <img src={call_icon} alt='' />   
                    <a href="tel:+91 1234567890">+91 1234567890</a>
                    </div>

                    <div className="contact-detail">
                    <img src={location_icon} alt='' />   
                    <p>Mohali,India</p>
                    </div>

                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
<label htmlFor="">Your Name</label>
<input type="text" placeholder='Enter Your Name' name='name' required/>
<label htmlFor="">Your Email</label>
<input type="email" placeholder='Enter Your Name' name='email' required/>
<label htmlFor="">Write you message</label>
<textarea name='message' rows='8' placeholder='Enter Your Message Here'></textarea>
<button type='submit' className="submit-button">Submit Form</button>

            </form>
        </div>
    </div>
    </div>
    </section>
  )
}

export default Contact