import cx from './index.css'

import React from 'react'

const FullImage = ({ src }) => (
  <div
    className="FullImage"
    style={{
      backgroundImage: `url(${ src })`
    }}
  />
)

export default FullImage
