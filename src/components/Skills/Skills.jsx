import React from 'react'
import python from "../../assests/Python.png"
import c from "../../assests/Cpp.png"
import data from "../../assests/Data.png"
import ml from "../../assests/ML.png"
import figma from "../../assests/Figma.png"
import sql from "../../assests/Mysql.png"
import git from "../../assests/Git.png"
import css from "../../assests/CSS.png"
import html from "../../assests/Html.png"
import js from "../../assests/Js.png"
import mongo from "../../assests/Mongodb.png"
import node from "../../assests/Node.png"
import "./Skills.css"

const Skills = () => {
  return (
    <div className='skills-container'>
      <h1 className='title'>My Skills</h1>
      <div className="icons">
        <img src={python} alt="python" />
        <img src={c} alt="python" />
        <img src={figma} alt="python" />
        <img src={ml} alt="python" />
        <img src={sql} alt="python" /> 
        <img src={git} alt="python" /> 
        <img src={data} alt="python" />
        <img src={html} alt="python" />
        <img src={css} alt="python" />
        <img src={js} alt="python" />
        <img src={mongo} alt="python" />
        <img src={node} alt="python" />
      </div>
      <div className="recommendation">
        <h2 className='sub-title'>Recommendation</h2>
          <h4 className='received'>Received</h4>
        <div className="boxs">
          <div className="content">
          <h3 className='n'>Teghpreet Singh Mago</h3>
          <p className='dis'>Sanchita was a dedicated intern, collaborative teammate, and a vibrant 
            individual. As a Computer Science Intern under the NewBees Student Internship . . . </p>
            <a href="#">Read More</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
