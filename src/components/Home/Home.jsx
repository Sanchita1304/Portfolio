import React from 'react'
import github from "../../assests/github.png"
import mail from "../../assests/email.png"
import linkedin from "../../assests/linkedin.png"
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='container'>
        <h1 className='there'>Hi,There!</h1>
        <h1 className='name'>I'M <span>Sanchita Agrawal</span></h1>
        <div className="box">AI & ML / Web Dev enthusiastic</div>
        <h3 className='text'>Pursuing B-Tech CSE with specialization of Artificial Intelligence and Machine Learning</h3>
        <div className="button-container">
        <a href="#" className='button'><span>Download CV</span><i></i></a>
        <a href="#" className='button'><span>Hire Me</span><i></i></a>
        </div>
        <div className="social-container">
        <a href="#" className='github'><img src={github} alt="gt" /></a>
        <a href="#" className='mail'><img src={mail} alt="em" /></a>
        <a href="#" className='linkedin'><img src={linkedin} alt="ld" /></a>
        </div>
    </div>
    </>
  )
}

export default Home
