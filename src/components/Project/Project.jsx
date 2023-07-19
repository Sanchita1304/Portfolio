import React from 'react'
import spacered from '../../assests/spaceship_red.png'
import spaceyellow from '../../assests/spaceship_yellow.png'
import pathseeker from '../../assests/Icon (1).png'
import heart from '../../assests/heart-disease.png'
import travel from '../../assests/travel.png'
import './Project.css'

const Project = () => {
  return (
      <div className="project-container">
        <h1 className='project'>Projects</h1>
        <div className="cards">
        <div className="card">
          <img className='img1' src={spacered} alt="space" />
          <div className="circle-red"></div>
          <div className="circle-yellow"></div>
          <img className='img1-2' src={spaceyellow} alt="space" />
          <h3 className='n1'>Space Invader</h3>
          <p className='n1-p'>Game for 2 people</p>
          <button className="n1-read">Read more</button>
        </div>
        <div className="card">
          <h3 className='n2'>Pathseeker</h3>
          <p className='n2-p'>Explore your path to success. Get Career Guidance and know about your career</p>
          <button className="n2-read">Read more</button>
          <img className='img2' src={pathseeker} alt="pathseeker" />
        </div>
        <div className="card">
        <h3 className='n3'>Prediction</h3>
          <h5 className='n3-p'>Heart Disease</h5>
          <p className='n3-p2'>Prediction by Machine Learning</p>
          <button className="n3-read">Read more</button>
          <img className='img2' src={heart} alt="heart" />
        </div>
        <div className="card">
          <img className='img4' src={travel} alt="travel" />
        <h3 className='n4'>Deshatan</h3>
          <p className='n4-p'>Know about traveling place</p>
          <button className="n4-read">Read more</button>
        </div>
        </div>
        <h2 className='certificate'>Certificates</h2>
        <div className="certis">
        <div className="certi">
          <h4 className='certi-n1'>MOZOHACK</h4>
          <p className='certi-p'>Hackathon</p>
          <button className="b1">See</button>
        </div>
        <div className="certi">
          <h4 className='certi-n2'>Smart India</h4>
          <p className='certi-p2'>Hackathon</p>
          <button className="b1">See</button>
        </div>
        <div className="certi">
          <h4 className='certi-n3'>I2C2</h4>
          <p className='certi-p3'>Hackathon</p>
          <button className="b1">See</button>
        </div>
        <div className="certi">
          <h4 className='certi-n4'>Hacktoberfest</h4>
          <p className='certi-p4'>Open Contribution</p>
          <button className="b1">See</button>
        </div>
        </div>
      </div>
  )
}

export default Project
