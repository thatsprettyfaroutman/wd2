import './index.css'

import React from 'react'
import AwesomeLink from 'Client/components/AwesomeLink'
import classNames from 'classnames'

const Button = ({
  to = '#',
  className,
  disabled,
  loading,
  children,
  loadingText = 'Loading...',
  ...rest,
}) => React.createElement(AwesomeLink, {
  to,
  className: classNames(
    'Button',
    disabled && 'Button--disabled',
    loading && 'Button--loading',
    className
  ),
  children: loading ? loadingText : children,
  ...rest,
})

export default Button
