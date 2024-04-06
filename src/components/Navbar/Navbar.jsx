import { useRef, useState } from 'react';
import React from 'react'
import { forwardRef } from 'react';
import { closeIcon, menuIcon } from '../../assets';
import "./Navbar.css"

export const Navbar = ({ about_ref, film_projects_ref, about_me_ref, contact_ref, student_projects_ref }) => {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="navbar" >
        <div className="navbar-2">
          {/* <div className="text-wrapper-2">Home</div> */}
          <div onClick={() => scrollToSection(about_me_ref)} className="text-wrapper-2">About Me</div>
          <div onClick={() => scrollToSection(film_projects_ref)} className="text-wrapper-2">Film Projects</div>
          {/* <div onClick={() => scrollToSection(student_projects_ref)} className="text-wrapper-2">Student Projects</div> */}
          <div onClick={() => scrollToSection(about_ref)} className="text-wrapper-2">Editing & Photoshop</div>
          <div onClick={() => scrollToSection(contact_ref)} className="text-wrapper-2">Contact</div>
        </div>
        {/* <div className="languagae">
        <div className="select">
          <a href="#" className="text-wrapper-3">EN /</a>
          <a href="#" className="text-wrapper-4">RU</a>
        </div>
      </div> */}
        {/* <>
          <div onClick={() => scrollToSection(request_ref)} className="work-btn">let's work</div>
        </> */}
        <div onClick={() => setIsActive(true)} className="menu-icon">
          <img src={menuIcon} alt="" />
        </div>
      </div >
      <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
        <div onClick={() => setIsActive(false)} className="close-icon">
          <img src={closeIcon} alt="" />
        </div>

        <ul className="menu-items">
          <li>
            <a href="#aboutMe" onClick={() => setIsActive(false)}>
              About Me
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setIsActive(false)}>
              Film Projects
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsActive(false)}>
              Editing & Photoshop
            </a>
          </li>

          <li>
            <a href="#footer" onClick={() => setIsActive(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
