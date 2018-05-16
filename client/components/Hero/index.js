import cx from './index.css'

import React from 'react'




const Hero = ({ lineA, lineB }) => (
  <div className={cx['Hero']}>
    <p className={cx['Hero__content']}>
      <span>{ lineA }</span>
      <span>{ lineB }</span>
    </p>
  </div>
)




export default Hero
