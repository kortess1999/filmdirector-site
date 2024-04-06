import React from 'react'
import { Header, About, Footer, Portfolio, LoadAnimation, AboutMe } from './components'
import { useRef } from 'react'
const App = () => {
  const home = React.useRef(null);
  const filmProjects = React.useRef(null);
  const about = React.useRef(null);
  const aboutMe = React.useRef(null);
  const studentProjects = React.useRef(null);
  const contact = React.useRef(null);


  return (
    <>
      <LoadAnimation />
      <Header about_ref={about} film_projects_ref={filmProjects} contact_ref={contact} request_ref={contact} about_me_ref={aboutMe} student_projects_ref={studentProjects} />
      <AboutMe about_me_ref={aboutMe} request_ref={contact} />
      <Portfolio film_projects_ref={filmProjects} student_projects_ref={studentProjects} />
      <About about_ref={about} request_ref={contact} />
      <Footer ref={contact} />
    </>
  )
}

export default App