import React from 'react'
import "./Footer.css"
import { forwardRef } from 'react';
import { footer_photo } from '../../assets';

const Footer = forwardRef((props, ref) => {
  return (
    <footer id='footer' ref={ref}>
      <div className='wrapper'>
        <img src={footer_photo} id='footer_alina' alt='footer_alina' />

        <div className='first_block'>
          <div className='sign'>Andrei Kozhevnkov</div>
          <div className='media_line'>
            {/* <div>
              <a href='https://wa.me/13125369684'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M24.002 4C35.048 4 44.002 12.954 44.002 24C44.002 35.046 35.048 44 24.002 44C20.4675 44.0057 16.9953 43.0703 13.942 41.29L4.00998 44L6.71398 34.064C4.93217 31.0097 3.99608 27.536 4.00198 24C4.00198 12.954 12.956 4 24.002 4ZM17.186 14.6L16.786 14.616C16.527 14.6318 16.2739 14.6998 16.042 14.816C15.825 14.9389 15.627 15.0924 15.454 15.272C15.214 15.498 15.078 15.694 14.932 15.884C14.1922 16.8458 13.7939 18.0266 13.8 19.24C13.804 20.22 14.06 21.174 14.46 22.066C15.278 23.87 16.624 25.78 18.4 27.55C18.828 27.976 19.248 28.404 19.7 28.802C21.9068 30.7449 24.5365 32.1461 27.38 32.894L28.516 33.068C28.886 33.088 29.256 33.06 29.628 33.042C30.2105 33.0119 30.7792 32.8542 31.294 32.58C31.5559 32.4451 31.8115 32.2983 32.06 32.14C32.06 32.14 32.146 32.084 32.31 31.96C32.58 31.76 32.746 31.618 32.97 31.384C33.136 31.212 33.28 31.01 33.39 30.78C33.546 30.454 33.702 29.832 33.766 29.314C33.814 28.918 33.8 28.702 33.794 28.568C33.786 28.354 33.608 28.132 33.414 28.038L32.25 27.516C32.25 27.516 30.51 26.758 29.446 26.274C29.3346 26.2254 29.2153 26.1976 29.094 26.192C28.9571 26.1779 28.8189 26.1933 28.6885 26.2372C28.5581 26.281 28.4386 26.3522 28.338 26.446C28.328 26.442 28.194 26.556 26.748 28.308C26.665 28.4195 26.5507 28.5038 26.4196 28.5501C26.2885 28.5964 26.1466 28.6026 26.012 28.568C25.8817 28.5331 25.754 28.489 25.63 28.436C25.382 28.332 25.296 28.292 25.126 28.22C23.9781 27.7191 22.9154 27.0423 21.976 26.214C21.724 25.994 21.49 25.754 21.25 25.522C20.4632 24.7685 19.7774 23.916 19.21 22.986L19.092 22.796C19.0072 22.6683 18.9387 22.5306 18.888 22.386C18.812 22.092 19.01 21.856 19.01 21.856C19.01 21.856 19.496 21.324 19.722 21.036C19.942 20.756 20.128 20.484 20.248 20.29C20.484 19.91 20.558 19.52 20.434 19.218C19.874 17.85 19.294 16.488 18.698 15.136C18.58 14.868 18.23 14.676 17.912 14.638C17.804 14.626 17.696 14.614 17.588 14.606C17.3194 14.5927 17.0503 14.5953 16.782 14.614L17.184 14.598L17.186 14.6Z" fill="#997D64" />
                </svg>
              </a>
            </div> */}
            <div>
              <a href='https://www.instagram.com/rawly_19'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M26.0562 4.00246C27.5156 3.99686 28.9751 4.01153 30.4342 4.04646L30.8222 4.06046C31.2702 4.07646 31.7122 4.09646 32.2462 4.12046C34.3742 4.22046 35.8262 4.55646 37.1002 5.05046C38.4202 5.55846 39.5322 6.24646 40.6442 7.35846C41.6609 8.35767 42.4478 9.56635 42.9502 10.9005C43.4442 12.1745 43.7802 13.6285 43.8802 15.7565C43.9042 16.2885 43.9242 16.7325 43.9402 17.1805L43.9522 17.5685C43.9877 19.0268 44.003 20.4857 43.9982 21.9445L44.0002 23.4365V26.0565C44.0051 27.5159 43.9898 28.9754 43.9542 30.4345L43.9422 30.8225C43.9262 31.2705 43.9062 31.7125 43.8822 32.2465C43.7822 34.3745 43.4422 35.8265 42.9502 37.1005C42.4495 38.436 41.6624 39.6457 40.6442 40.6445C39.6441 41.6611 38.4348 42.448 37.1002 42.9505C35.8262 43.4445 34.3742 43.7805 32.2462 43.8805C31.7122 43.9045 31.2702 43.9245 30.8222 43.9405L30.4342 43.9525C28.9751 43.988 27.5157 44.0033 26.0562 43.9985L24.5642 44.0005H21.9462C20.4867 44.0054 19.0272 43.9901 17.5682 43.9545L17.1802 43.9425C16.7054 43.9253 16.2307 43.9053 15.7562 43.8825C13.6282 43.7825 12.1762 43.4425 10.9002 42.9505C9.56555 42.4492 8.35665 41.6621 7.35818 40.6445C6.34027 39.645 5.55263 38.4356 5.05018 37.1005C4.55618 35.8265 4.22018 34.3745 4.12018 32.2465C4.0979 31.7719 4.0779 31.2972 4.06018 30.8225L4.05018 30.4345C4.0133 28.9754 3.99664 27.516 4.00018 26.0565V21.9445C3.9946 20.4857 4.00926 19.0269 4.04418 17.5685L4.05818 17.1805C4.07418 16.7325 4.09418 16.2885 4.11818 15.7565C4.21818 13.6265 4.55418 12.1765 5.04818 10.9005C5.55092 9.5657 6.34011 8.35735 7.36018 7.36046C8.35797 6.34196 9.5661 5.55361 10.9002 5.05046C12.1762 4.55646 13.6262 4.22046 15.7562 4.12046L17.1802 4.06046L17.5682 4.05046C19.0265 4.01361 20.4853 3.99694 21.9442 4.00046L26.0562 4.00246ZM24.0002 14.0025C22.6752 13.9837 21.3597 14.2285 20.1301 14.7226C18.9006 15.2167 17.7815 15.9502 16.8379 16.8806C15.8943 17.8109 15.145 18.9195 14.6336 20.142C14.1221 21.3644 13.8588 22.6763 13.8588 24.0015C13.8588 25.3266 14.1221 26.6385 14.6336 27.8609C15.145 29.0834 15.8943 30.192 16.8379 31.1224C17.7815 32.0527 18.9006 32.7862 20.1301 33.2803C21.3597 33.7744 22.6752 34.0192 24.0002 34.0005C26.6523 34.0005 29.1959 32.9469 31.0712 31.0715C32.9466 29.1962 34.0002 26.6526 34.0002 24.0005C34.0002 21.3483 32.9466 18.8048 31.0712 16.9294C29.1959 15.054 26.6523 14.0025 24.0002 14.0025ZM24.0002 18.0025C24.7972 17.9878 25.5891 18.1321 26.3298 18.4269C27.0704 18.7217 27.7449 19.1611 28.3137 19.7196C28.8826 20.278 29.3345 20.9441 29.6431 21.6791C29.9516 22.4142 30.1106 23.2033 30.1107 24.0004C30.1108 24.7976 29.9521 25.5868 29.6438 26.3219C29.3355 27.057 28.8839 27.7233 28.3152 28.2819C27.7465 28.8405 27.0722 29.2802 26.3316 29.5753C25.5911 29.8703 24.7992 30.0149 24.0022 30.0005C22.4109 30.0005 20.8848 29.3683 19.7595 28.2431C18.6343 27.1179 18.0022 25.5918 18.0022 24.0005C18.0022 22.4092 18.6343 20.883 19.7595 19.7578C20.8848 18.6326 22.4109 18.0005 24.0022 18.0005L24.0002 18.0025ZM34.5002 11.0025C33.855 11.0283 33.2448 11.3028 32.7974 11.7684C32.35 12.234 32.1002 12.8547 32.1002 13.5005C32.1002 14.1462 32.35 14.7669 32.7974 15.2325C33.2448 15.6982 33.855 15.9726 34.5002 15.9985C35.1632 15.9985 35.7991 15.7351 36.2679 15.2662C36.7368 14.7974 37.0002 14.1615 37.0002 13.4985C37.0002 12.8354 36.7368 12.1995 36.2679 11.7307C35.7991 11.2619 35.1632 10.9985 34.5002 10.9985V11.0025Z" fill="#997D64" />
                </svg>
              </a>
            </div>
            {/* <div>
              <a href='https://t.me/rawly_19'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM33.28 17.6C32.98 20.76 31.68 28.44 31.02 31.98C30.74 33.48 30.18 33.98 29.66 34.04C28.5 34.14 27.62 33.28 26.5 32.54C24.74 31.38 23.74 30.66 22.04 29.54C20.06 28.24 21.34 27.52 22.48 26.36C22.78 26.06 27.9 21.4 28 20.98C28.0139 20.9164 28.012 20.8503 27.9946 20.7876C27.9772 20.7249 27.9447 20.6673 27.9 20.62C27.78 20.52 27.62 20.56 27.48 20.58C27.3 20.62 24.5 22.48 19.04 26.16C18.24 26.7 17.52 26.98 16.88 26.96C16.16 26.94 14.8 26.56 13.78 26.22C12.52 25.82 11.54 25.6 11.62 24.9C11.66 24.54 12.16 24.18 13.1 23.8C18.94 21.26 22.82 19.58 24.76 18.78C30.32 16.46 31.46 16.06 32.22 16.06C32.38 16.06 32.76 16.1 33 16.3C33.2 16.46 33.26 16.68 33.28 16.84C33.26 16.96 33.3 17.32 33.28 17.6Z" fill="#997D64" />
                </svg>
              </a>
            </div> */}
            <div>
              <a href='andreikozhevnikov99@gmail.com'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M40 8H8C5.8 8 4.02 9.8 4.02 12L4 36C4 38.2 5.8 40 8 40H40C42.2 40 44 38.2 44 36V12C44 9.8 42.2 8 40 8ZM39.2 16.5L25.06 25.34C24.42 25.74 23.58 25.74 22.94 25.34L8.8 16.5C8.59945 16.3874 8.42384 16.2353 8.28378 16.0529C8.14372 15.8705 8.04212 15.6616 7.98515 15.4387C7.92818 15.2159 7.91701 14.9839 7.95231 14.7566C7.98762 14.5294 8.06867 14.3116 8.19056 14.1166C8.31245 13.9216 8.47265 13.7533 8.66145 13.622C8.85026 13.4907 9.06374 13.399 9.28899 13.3526C9.51424 13.3062 9.74657 13.3059 9.97191 13.3519C10.1973 13.3979 10.4109 13.4891 10.6 13.62L24 22L37.4 13.62C37.5891 13.4891 37.8027 13.3979 38.0281 13.3519C38.2534 13.3059 38.4858 13.3062 38.711 13.3526C38.9363 13.399 39.1497 13.4907 39.3385 13.622C39.5274 13.7533 39.6875 13.9216 39.8094 14.1166C39.9313 14.3116 40.0124 14.5294 40.0477 14.7566C40.083 14.9839 40.0718 15.2159 40.0149 15.4387C39.9579 15.6616 39.8563 15.8705 39.7162 16.0529C39.5762 16.2353 39.4005 16.3874 39.2 16.5Z" fill="#997D64" />
                </svg>
              </a>
            </div>
            <div>
              <a href='https://www.imdb.com/name/nm15884484/?ref_=nv_sr_srsg_0_tt_0_nm_5_q_Andrei%20kozhevnik'>
                <svg fill="none" width="48" height="48" viewBox="-2.4 -2.4 28.80 28.80" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#997D64" stroke-width="0.24000000000000005">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M22.378 0H1.622a1.721 1.721 0 0 0-1.62 1.595L0 22.378c.058.876.712 1.543 1.556 1.62a.337.337 0 0 0 .045.002h20.797a.458.458 0 0 0 .043-.002A1.723 1.723 0 0 0 24 22.29V1.71A1.72 1.72 0 0 0 22.415.002.33.33 0 0 0 22.378 0zm0 .496a1.214 1.214 0 0 1 1.125 1.214v20.58c0 .637-.487 1.16-1.104 1.214H1.602a1.214 1.214 0 0 1-1.106-1.126V1.628A1.21 1.21 0 0 1 1.622.496h20.756zM4.795 8.26v7.364H2.89V8.26h1.905zm6.537 0v7.364H9.671v-4.97L9 15.623H7.813l-.699-4.862-.006 4.862H5.44V8.26h2.468c.075.448.149.97.23 1.574l.272 1.871.44-3.445h2.482zm2.977 1.33a.28.28 0 0 1 .142.203c.028.095.035.311.035.644v2.855c0 .488-.035.786-.096.895-.06.115-.23.17-.502.17V9.52c.204 0 .346.02.421.068zm-.02 6.034c.454 0 .8-.027 1.024-.074.23-.048.42-.136.57-.265a.961.961 0 0 0 .324-.522c.061-.224.102-.665.102-1.322v-2.584c0-.698-.027-1.166-.074-1.403a1.277 1.277 0 0 0-.313-.644c-.169-.197-.42-.333-.745-.421-.32-.081-.854-.129-1.77-.129h-1.424v7.364h2.305zm5.14-1.783c0 .353-.02.576-.055.671-.033.095-.19.142-.305.142-.108 0-.19-.047-.224-.135-.04-.088-.06-.298-.06-.623v-1.947c0-.333.02-.543.054-.624.034-.08.108-.122.217-.122.115 0 .27.041.311.142.041.095.061.299.061.604v1.892zm-2.475-5.58v7.363h1.715l.115-.468c.156.19.326.333.516.428.182.088.46.135.678.135.304 0 .563-.075.78-.237a1.05 1.05 0 0 0 .42-.563c.054-.217.088-.543.088-.984v-2.067a7.2 7.2 0 0 0-.034-.868 1.025 1.025 0 0 0-.17-.42 1.013 1.013 0 0 0-.427-.333 1.929 1.929 0 0 0-1.342.013 1.629 1.629 0 0 0-.509.4v-2.4h-1.83z" fill="#997D64">
                    </path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <p>© 2024 Andrei Kozhevnkov. All rights reserved.</p>

        </div>
        <div className='navigation_menu'>
          <a href="#home" className='nav_item' id='home_back'>Home</a>
          <a href="#aboutMe" className='nav_item' id='aboutMe_back'>About Me</a>
          <a href="#portfolio" className='nav_item' id='portfolio_back'>Film Projects</a>
          <a href="#student_projects" className='nav_item' id='portfolio_back'>Student Projects</a>
          <a href="#about" className='nav_item' id='about_back'>Editing & Photoshop</a>
        </div>
      </div>
    </footer>
  )
})

export default Footer