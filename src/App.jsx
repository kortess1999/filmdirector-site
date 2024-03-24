import React from 'react'
import { Header, About, Footer, Portfolio, LoadAnimation, AboutMe } from './components'
import { useRef } from 'react'
const App = () => {
  const home = React.useRef(null);
  const portfolio = React.useRef(null);
  const approach = React.useRef(null);
  const about = React.useRef(null);
  const aboutMe = React.useRef(null);
  const contact = React.useRef(null);
  const request = React.useRef(null);


  return (
    <>
      <LoadAnimation />
      <Header about_ref={about} portfolio_ref={portfolio} contact_ref={contact} request_ref={contact} />
      <AboutMe about_ref={aboutMe} request_ref={contact} />
      <Portfolio ref={portfolio} />
      <About about_ref={about} request_ref={contact} />
      <Footer ref={contact} />
    </>
  )
}

export default App