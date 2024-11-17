import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/nav_underline.png'
import arrow_icon from '../../assets/arrow_icon.svg'
import Services_Data from '../../assets/services_data'

const Services = () => {
  return (
    <section class="section-space">
    <div className="container">
    <div id='services' className="services">
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
{Services_Data.map((service, index)=>{
return <div key={index} className="services-format">
    <h3>{service.s_no}</h3>
    <h2>{service.s_name}</h2>
    <p>{service.s_desc}</p>
    <div className="services-readmore">
        <p>Read more</p>
        <img src={arrow_icon} alt="" />
    </div>
</div>
})}
        </div>
    </div>
    </div>
    </section>
  )
}

export default Services