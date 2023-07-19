import React from 'react'
import me from "../../assests/my.jpeg"
import './About.css'

const About = () => {
  return (
    <div className='containers'>
      <h1 className='text'>As a dedicated B-Tech CSE student with a focus on AI and ML,
       I possess a strong foundation in web development and data analysis, continuously 
       expanding my knowledge and skills to stay at the forefront of technology.</h1>
       <img src={me} alt="me" />
       <div className="exed">
       <div className="education">Education</div>
       <div className="experience">Experience</div>
       </div>
       <div className="line">
        <div className="line1" id='verticle-line'></div>
        <div className='line2' id='verticle-line'></div>
       </div>
       <div className="circle-container">
        <div className="circle special"></div>
        <div className="circle"></div>
        <div className="circle"></div>
       </div>
       <div className="circles-container">
        <div className="circles special"></div>
        <div className="circles"></div>
        <div className="circles"></div>
       </div>
       <div className="edu">
        <div className="edu1">
          <h5 className='present'>2023 - Present</h5>
          <h4 className='srm'>SRM University - 3rd year</h4>
          <h4 className='cgpa'>CGPA - 9.54</h4>
        </div>
        <div className="edu2">
          <h5 className='present'>2021</h5>
          <h4 className='srm'>SRI CHAITANIYA TECHNO SCHOOL - 12TH</h4>
          <h4 className='cgpa'>Marks - 82.00%</h4>
        </div>
        <div className="edu3">
          <h5 className='present'>2019</h5>
          <h4 className='srm'>Indian Public School - 10TH</h4>
          <h4 className='cgpa'>Marks - 79.00%</h4>
        </div>
       </div>
       <div className="exp">
        <div className="exp1">
          <h5 className='date'>Dec 2022 - Feb 2023</h5>
          <h4 className='name'>AI-ML Virtual Internship</h4>
          <h5 className='click1'>Eduskills - Internship</h5>
        </div>
        <div className="exp2">
          <h5 className='date'>Jan 2022 - Apr 2022</h5>
          <h4 className='name'>Online Event Management</h4>
          <h5 className='click1'>Aashman Foundation - Internship</h5>
        </div>
        <div className="exp3">
          <h5 className='date'>Jan 2022 - Mar 2022</h5>
          <h4 className='name'>Computer Science Intern</h4>
          <h5 className='click1'>TechBees · Internship</h5>
        </div>
       </div>
    </div> 
  )
}

export default About
