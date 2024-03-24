import React from 'react'
import "./AboutMe.css"
import { forwardRef } from 'react';

const AboutMe_ref = forwardRef((props, ref) => {

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
    };
    return (
        <div className='last_line'>
            <div className='sign'>Andrei Kozhevnkov</div>
            <div onClick={() => scrollToSection(ref)} className="work-btn">Let’s talk</div>
        </div>
    )
});

export default AboutMe_ref