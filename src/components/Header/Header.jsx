import React from 'react'
import "./Header.css"
import { Navbar } from '../Navbar/Navbar'

const Header = (props) => {
  return (
    <header>
      <Navbar
        about_ref={props.about_ref}
        about_me_ref={props.about_me_ref}
        student_projects_ref={props.student_projects_ref}
        film_projects_ref={props.film_projects_ref}
        contact_ref={props.contact_ref}
      />
    </header>
  )
}

export default Header