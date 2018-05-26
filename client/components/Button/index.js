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
}) => (
  <Link {...rest}
    className={classNames(
      'Button',
      disabled && 'Button--disabled',
      loading && 'Button--loading',
      className
    )}
    to={ to }
    children={ loading ? loadingText : children }
  />
)

export default Button
