import React from 'react'
import "./About.css"
import { forwardRef } from 'react';
import About_ref from './AboutRef';
import { andrewSuit, andrewHollywood, andrewSchool, andrewWorking, andrewThink } from '../../assets';

const About = ({ about_ref, request_ref }) => {
  return (
    <section id='about'>
      <div className='wrapper'>
        <div className='wrapper2'>
          <div className='first_block'>
            <img src={andrewThink} id='main_photo' alt='main_photo' />
            <div className='about_section'>
              <div ref={about_ref} className='header_section'>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" viewBox="0 0 36 40" fill="none">
                  <path d="M22.847 20.4812C24.6413 19.1369 25.9228 17.1081 26.2662 14.7135C26.9529 9.92415 23.6271 5.48492 18.8378 4.79817C14.0485 4.11141 9.60929 7.43719 8.92254 12.2265C8.57916 14.6212 9.23888 16.9283 10.5832 18.7226" stroke="#515151" strokeWidth="2" strokeLinecap="round" />
                  <path d="M1.6861 31.8398L2.92687 28.3301L11.705 23.6888L15.4192 28.6464L20.3768 24.9323L27.497 31.8533L27.7016 35.5702" stroke="#515151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.12228 15.948C9.55741 12.9787 10.3518 10.8784 11.5057 9.64682C13.2365 7.7996 14.2261 8.09552 14.9162 8.52085C15.6063 8.94616 15.7394 11.0978 16.8822 11.8764C18.0251 12.655 21.1602 13.1805 22.1338 14.0595C23.1074 14.9386 25.3783 16.6397 24.434 18.8525" stroke="#515151" strokeWidth="2" />
                </svg>
                <h2>Editing & Photoshop</h2>
              </div>
              <div className='simple_container'>
                <p>In 2014, I first encountered video editing and decided to try it. My first reel was created in iMovie on an iPhone 6. Soon, this fleeting interest grew into a hobby. Adobe Premiere, Adobe Audition, and Vegas Pro are the apps where I edit my works, discover new video creation processes, and learn new skills. Photoshop is also my passion, and my goal is to master it at a Hollywood level.</p>
                <br></br>
                {/* <p>
                  Photography is my constant love. My camera, a weapon, helps me uncover beauty in every moment and capture emotions in each movement. I'm here to wipe out your anxiety during photo sessions. It’s not about posing, it’s about embracing your true self.
                </p> */}
              </div>

              <About_ref ref={request_ref} />
            </div>
          </div>
          {/* <div className="photo_panel">
            <div className="photo_container">
              <img className="panel_img" src="https://upload.wikimedia.org/wikipedia/en/4/4e/Steamboat-willie.jpg" alt="" />
            </div>
          </div> */}
          <div className='photos_line'>
            <img src={andrewHollywood} id='andrew_hollywood' alt='andrew_hollywood' />
            <img src={andrewWorking} id='andrey_working' alt='andrey_working' />
            {/* <img src={andrewSchool} id='portrait_alina3' alt='portrait_alina3' /> */}
            {/* <img src={portrait_alina4} id='portrait_alina4' alt='portrait_alina4' /> */}

          </div>


        </div>
      </div>
    </section >
  )
};

export default About