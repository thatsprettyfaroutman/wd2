import cx from './index.css'

import React from 'react'
import { Link } from 'react-router-dom'




const Hero = ({ text }) => (
  <div className="Hero">
    <div className="Hero__content">
      <h2>{ text }</h2>
      <nav>
        <Link to="#">Cases</Link>
        <Link to="#">Careers</Link>
        <Link to="#">Contact</Link>
        <Link to="#">{'m | blog'}</Link>
      </nav>
    </div>
  </div>
)




export default Hero
