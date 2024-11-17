import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/nav_underline.png'
import arrow_icon from '../../assets/arrow_icon.svg'
import mywork_data from '../../assets/mywork_data'
const MyWork = () => {
  return (
    <section class="section-space">
    <div className="container">
    <div id='work' className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {
          mywork_data.map((work, index)=>{
            return <img key={index} src={work.w_img} alt="" />    
          })
        }
      </div>
      <div className="mywork-showmore">
        <p>See More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
    </div>
    </section>
  )
}

export default MyWork