import cx from './index.css'

import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import withState from 'Client/redux/withState'




const Hero = ({ text, splashShowing }) => (
  <div className={ classNames('Hero', splashShowing && 'Hero--hide') }>
    <div className="Hero__content">
      <h2>{ text }</h2>
      {/* <nav>
        <Link to="#">Cases</Link>
        <Link to="#">Careers</Link>
        <Link to="#">Contact</Link>
        <Link to="#">{'m | blog'}</Link>
      </nav> */}
    </div>
  </div>
)




export default withState( Hero )
