import React, { useState } from 'react';
import './Nav.css';
import { BiHome } from 'react-icons/bi';
import { GoPerson } from 'react-icons/go';
import { DiGhostSmall } from 'react-icons/di';
import { MdWorkOutline } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';
import {Link,NavLink} from "react-router-dom"

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <header>
      <div className='navigation'>
        <ul>
          <li className={`list ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
            <NavLink to="/" exact activeClassName="active">
              <span className='icon'><BiHome /></span>
              <span className='text'>Home</span>
            </NavLink>
          </li>
          <li className={`list ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>
            <NavLink to="/about" exact activeClassName="active">
              <span className='icon'><GoPerson /></span>
              <span className='text'>About</span>
            </NavLink>
          </li>
          <li className={`list ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}>
            <NavLink to="/skills" exact activeClassName="active">
              <span className='icon'><DiGhostSmall /></span>
              <span className='text'>Skills</span>
            </NavLink>
          </li>
          <li className={`list ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleItemClick(3)}>
            <NavLink to="/project" exact activeClassName="active">
              <span className='icon'><MdWorkOutline /></span>
              <span className='text'>Projects</span>
            </NavLink>
          </li>
          <li className={`list ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleItemClick(4)}>
            <NavLink to="/contact" exact activeClassName="active">
              <span className='icon'><AiOutlinePhone /></span>
              <span className='text'>Contact</span>
            </NavLink>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </header>
  );
};

export default Nav;