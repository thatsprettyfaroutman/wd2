import cx from './index.css'

import React from 'react'

const ImageSet = ({ children }) => {

  const items = Array.isArray(children) ? children : [ children ]

  return (
    <div
      className="ImageSet"
    >
      { items.map((item, i) => (
        <div
          key={ i }
          className="ImageSet__item"
          children={ item }
        />
      ))}
    </div>
  )
}

export default ImageSet
