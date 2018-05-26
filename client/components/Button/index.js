import './index.css'

import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const Button = ({
  to = '#',
  className,
  disabled,
  loading,
  children,
  loadingText = 'Loading...',
  ...rest,
}) => {
  const isExteralLink = to.indexOf('http') === 0
  return React.createElement(isExteralLink ? 'a' : Link, {
    [ isExteralLink ? 'href' : 'to' ]: to,
    className: classNames(
      'Button',
      disabled && 'Button--disabled',
      loading && 'Button--loading',
      className
    ),
    children: loading ? loadingText : children,
    ...rest,
  })
}

export default Button
