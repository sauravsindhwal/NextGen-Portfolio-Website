import React from 'react'
import './Hero.css'
import profile_img from '../../assets/keyframe-logo.webp'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <section class="section-space">
    <div className="container">
   <div id='home' className="hero">
    <img src={profile_img} alt="" />
    <h1><span>Keyframe Tech Solution,</span> Frontend Developer based in India.</h1>
    <p>I am a frontend developer from Uttarakhand, India with 5 years of experience.</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink offset={50} className='anchor-link' href='#contact' >Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
    </div>
   </div>
   </div>
   </section>
  )
}

export default Hero