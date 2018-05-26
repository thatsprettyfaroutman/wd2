import './index.css'
import React from 'react'
import classNames from 'classnames'

const Description = ({ className, ...rest }) => (
  <p { ...rest }
    className={ classNames('Description', className) }
  />
)

export default Description
