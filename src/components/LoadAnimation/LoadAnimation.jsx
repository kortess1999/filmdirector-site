import React, { useEffect } from 'react'
import "./LoadAnimation.css"
import { preLoaderAnim } from '../animations'


const LoadAnimation = () => {
  useEffect(() => {
    preLoaderAnim()
  }, [])
  return (
    <div className='preloader'>
      <div className="texts-container">

        <span className='name'>Andrei</span>
        <span className='name'>Kozhevnkov</span>
        <div className="break"></div>
        <span className="photog">FILMMAKER</span>
      </div>
    </div >
  )
}

export default LoadAnimation