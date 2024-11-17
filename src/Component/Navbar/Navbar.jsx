import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/keyframe-logo.webp'
import nav_underline from '../../assets/nav_underline.png'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [nav, setNav] = useState('home')
const menuRef = useRef();

const openMenu=()=>{
menuRef.current.style.right = '0';
}
const closeMenu=()=>{
  menuRef.current.style.right = '-350px';
}

  return (
    <section class="fixed-header">
    <div className="container">
    <div className="navbar">
        <AnchorLink className='anchor-link' href='#home'>
          <img src={logo} alt="logo" />
        </AnchorLink>
        <img src={menu_open} alt="" className='nav-mob-open' onClick={openMenu}/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} alt="" className='nav-mob-close' onClick={closeMenu}/>
            <li>
              <AnchorLink className='anchor-link' href='#home'>
                <p onClick={()=>{setNav('home')}} style={{ color: nav === 'home' ? '#3e88e9' : '#fff' }}>Home</p>
                </AnchorLink>{nav==='home'?<img src={nav_underline} />:''}
              </li>
            <li>
              <AnchorLink className='anchor-link' href='#about' offset={50}>
                <p onClick={()=>{setNav('about')}} style={{ color: nav === 'about' ? '#3e88e9' : '#fff' }}>About Us</p>
                </AnchorLink>{nav==='about'?<img src={nav_underline} />:''}
              </li>
            <li>
              <AnchorLink className='anchor-link' href='#services' offset={50}>
                <p onClick={()=>{setNav('service')}} style={{ color: nav === 'service' ? '#3e88e9' : '#fff' }}>Services</p>
                </AnchorLink>{nav==='service'?<img src={nav_underline} />:''}</li>
            <li><AnchorLink className='anchor-link' href='#work' offset={50}><p style={{ color: nav === 'portfolio' ? '#3e88e9' : '#fff' }} onClick={()=>{setNav('portfolio')}}>Portfolio</p></AnchorLink>{nav==='portfolio'?<img src={nav_underline} />:''}</li>
            <li><AnchorLink className='anchor-link' href='#contact' offset={50}><p style={{ color: nav === 'contact' ? '#3e88e9' : '#fff' }} onClick={()=>{setNav('contact')}}>Contact</p></AnchorLink>{nav==='contact'?<img src={nav_underline} />:''}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Us</AnchorLink></div>
    </div>
    </div>
    </section>
  )
}

export default Navbar