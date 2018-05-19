import cx from './index.css'

import React from 'react'

const HeroImage = ({ src }) => (
  <div
    className="HeroImage"
    style={{
      backgroundImage: `url(${ src })`
    }}
  />
)

export default HeroImage
