import './index.css'
import React from 'react'
import classNames from 'classnames'

const Title = ({ className, ...rest }) => (
  <h1 { ...rest }
    className={ classNames('Title', className) }
  />
)


export default Title
