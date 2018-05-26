import './index.css'
import React from 'react'
import classNames from 'classnames'

const CtaBox = ({ className, ...rest }) => (
  <div className={ classNames('CtaBox', className) }>
    <div { ...rest } className="CtaBox__content" />
  </div>
)

export default CtaBox
