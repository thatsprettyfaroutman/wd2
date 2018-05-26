import cx from './index.css'

import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import withState from 'Client/redux/withState'




const Hero = ({ splashShowing }) => (
  <div className={ classNames('Hero', splashShowing && 'Hero--hide') }>
    <div className="Hero__content">
      <h2>We code and design</h2>
    </div>
  </div>
)




export default withState( Hero )
