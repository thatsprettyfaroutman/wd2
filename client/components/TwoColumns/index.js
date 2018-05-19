import cx from './index.css'

import React from 'react'

const TwoColumns = ({ title, children }) => (
  <div className="TwoColumns">
    <h2>{ title }</h2>
    <div className="TwoColumns__body">
      { children }
    </div>
  </div>
)

export default TwoColumns
