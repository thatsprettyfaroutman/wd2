import './index.css'

import React, { Component } from 'react'
import noop from 'lodash.noop'
import classNames from 'classnames'
import { withRouter } from 'react-router-dom'
import { getCssRootValue } from 'Client/utils'

class AwesomeLink extends Component {
  static defaultProps = {
    onClick: noop
  }

  handleClick = e => {
    const { history, to, onClick } = this.props
    const isExteralLink = to.indexOf('http') === 0
    const effectDuration = parseInt(getCssRootValue('--animation-duration'), 10)
    const effectRef = document.createElement('div')
    e.preventDefault()
    effectRef.classList.add('AwesomeLink__effect')
    document.body.appendChild(effectRef)
    setTimeout(() => {
      if (isExteralLink) {
        window.location = to
      } else {
        history.push(to)
        effectRef.remove()
      }
    }, effectDuration)
    onClick(e)
  }

  render () {
    const {
      to,
      onClick,
      className,
      children,
    } = this.props
    return (
      <a
        href={ to }
        onClick={ this.handleClick }
        className={ classNames('AwesomeLink', className) }
        children={ children }
      />
    )
  }
}

export default withRouter( AwesomeLink )
