import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/keyframe-logo.webp'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <section class="section-space">
    <div className="container">
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am a frontend developer from, India with 5 years of experience.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>    
        </div>
        <hr/>
        <div className="footer-bottom">
        <p className="footer-bottom-left">
        © 2023 Keyframe Tech Solution. All rights reserved.
        </p>
            <div className="footer-bottom-right">
              <a href='#'>Term of Services</a>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Connect with me</a>
            </div>
          </div>
        </div>
        </div>
        </section>
  )
}

export default Footer